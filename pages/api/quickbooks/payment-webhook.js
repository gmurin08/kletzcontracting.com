// /api/quickbooks/payment-webhook.js
import { createClient } from '@supabase/supabase-js';
import { getInvoiceDetails } from '../../../lib/quickbooks-native-api';
import nodemailer from 'nodemailer';

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  try {
    console.log('QB Payment webhook received:', req.body);
    
    // QuickBooks webhook payload structure
    const { eventNotifications } = req.body;
    
    if (!eventNotifications || eventNotifications.length === 0) {
      console.log('No event notifications in webhook');
      return res.status(200).json({ received: true });
    }

    for (const notification of eventNotifications) {
      const { realmId, dataChangeEvent } = notification;
      
      if (!dataChangeEvent || !dataChangeEvent.entities) {
        continue;
      }

      // Look for Payment entities (when invoice is paid)
      const paymentEntities = dataChangeEvent.entities.filter(
        entity => entity.name === 'Payment' && entity.operation === 'Create'
      );

      for (const paymentEntity of paymentEntities) {
        await processPayment(realmId, paymentEntity.id);
      }
    }

    res.status(200).json({ received: true });

  } catch (error) {
    console.error('Payment webhook error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function processPayment(companyId, paymentId) {
  try {
    console.log('Processing payment:', paymentId);

    // Get payment details from QuickBooks
    const paymentDetails = await getPaymentDetails(companyId, paymentId);
    
    if (!paymentDetails || !paymentDetails.Line) {
      console.log('No payment details or lines found');
      return;
    }

    // Find the invoice that was paid
    const invoiceRef = paymentDetails.Line.find(line => 
      line.LinkedTxn && line.LinkedTxn.some(txn => txn.TxnType === 'Invoice')
    );

    if (!invoiceRef) {
      console.log('No invoice reference found in payment');
      return;
    }

    const invoiceId = invoiceRef.LinkedTxn.find(txn => txn.TxnType === 'Invoice').TxnId;
    
    // Get invoice details
    const invoiceDetails = await getInvoiceDetails(invoiceId);
    
    // Extract booking ID from invoice memo or private note
    const bookingId = extractBookingId(invoiceDetails);
    
    if (!bookingId) {
      console.error('No booking ID found in invoice');
      return;
    }

    // Update booking status to paid
    const { data: booking, error } = await supabase
      .from('bookings')
      .update({ 
        status: 'paid',
        qb_payment_id: paymentId,
        payment_amount: paymentDetails.TotalAmt,
        payment_date: paymentDetails.TxnDate,
        payment_method: 'quickbooks_online'
      })
      .eq('id', bookingId)
      .select()
      .single();

    if (error) {
      console.error('Error updating booking:', error);
      return;
    }

    console.log('Booking marked as paid:', bookingId);

    // Send confirmation emails
    await sendPaymentConfirmationEmails(booking, {
      invoiceId,
      paymentId,
      amount: paymentDetails.TotalAmt,
      invoiceDetails
    });

  } catch (error) {
    console.error('Error processing payment:', error);
  }
}

async function getPaymentDetails(companyId, paymentId) {
  try {
    const { data: qbAuth } = await supabase
      .from('quickbooks_auth')
      .select('*')
      .single();

    if (!qbAuth || !qbAuth.access_token) {
      throw new Error('QuickBooks not connected');
    }

    const QB_BASE_URL = process.env.NODE_ENV === 'production' 
      ? 'https://quickbooks-api.intuit.com'
      : 'https://sandbox-quickbooks.api.intuit.com';

    const response = await fetch(
      `${QB_BASE_URL}/v3/company/${companyId}/payment/${paymentId}`, 
      {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${qbAuth.access_token}`,
          'Accept': 'application/json'
        }
      }
    );

    const data = await response.json();
    return data.QueryResponse?.Payment?.[0];

  } catch (error) {
    console.error('Error getting payment details:', error);
    return null;
  }
}

function extractBookingId(invoiceDetails) {
  // Try to extract booking ID from customer memo
  if (invoiceDetails.CustomerMemo?.value) {
    const memoMatch = invoiceDetails.CustomerMemo.value.match(/Booking ID: (\w+)/);
    if (memoMatch) {
      return memoMatch[1];
    }
  }

  // Try to extract from private note
  if (invoiceDetails.PrivateNote) {
    const noteMatch = invoiceDetails.PrivateNote.match(/Booking ID: (\w+)/);
    if (noteMatch) {
      return noteMatch[1];
    }
  }

  // Try to extract from description in line items
  if (invoiceDetails.Line) {
    for (const line of invoiceDetails.Line) {
      if (line.Description) {
        const descMatch = line.Description.match(/Booking ID: (\w+)/);
        if (descMatch) {
          return descMatch[1];
        }
      }
    }
  }

  return null;
}

async function sendPaymentConfirmationEmails(booking, paymentData) {
  try {
    // Send confirmation to customer
    const customerHtml = generateCustomerReceiptEmail(booking, paymentData);
    await sendEmail(
      booking.email, 
      'Payment Received - Dumpster Rental Confirmed', 
      customerHtml
    );

    // Send notification to business
    const businessHtml = generateBusinessNotificationEmail(booking, paymentData);
    await sendEmail(
      process.env.BUSINESS_EMAIL || 'info@kletzcontracting.com',
      `Payment Received - Booking ${booking.id}`,
      businessHtml
    );

    console.log('Confirmation emails sent for booking:', booking.id);

  } catch (error) {
    console.error('Error sending confirmation emails:', error);
  }
}

function generateCustomerReceiptEmail(booking, paymentData) {
  const logoUrl = 'https://storage.googleapis.com/msgsndr/3xGyNbyyifHaQaEVS0Sx/media/681ba0cc6da8499d97d2cdd0.png';
  
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Payment Confirmation</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          color: #333333;
          margin: 0;
          padding: 0;
          background-color: #f7f7f7;
        }
        .container {
          max-width: 600px;
          margin: 20px auto;
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          overflow: hidden;
          background-color: #ffffff;
        }
        .header {
          padding: 30px 0;
          text-align: center;
          background-color: #ffffff;
        }
        .logo {
          max-width: 250px;
          height: auto;
        }
        .content {
          padding: 40px 30px;
          background-color: #ffffff;
        }
        .success-banner {
          background-color: #d4edda;
          border: 1px solid #c3e6cb;
          color: #155724;
          padding: 20px;
          border-radius: 6px;
          text-align: center;
          margin-bottom: 30px;
        }
        .success-banner h2 {
          margin: 0;
          font-size: 24px;
        }
        .details-box {
          background-color: #f8f9fa;
          border: 1px solid #dee2e6;
          border-radius: 6px;
          padding: 20px;
          margin: 20px 0;
        }
        .details-row {
          display: flex;
          justify-content: space-between;
          padding: 8px 0;
          border-bottom: 1px solid #e9ecef;
        }
        .details-row:last-child {
          border-bottom: none;
          font-weight: bold;
          font-size: 18px;
        }
        .next-steps {
          background-color: #e7f3ff;
          border: 1px solid #b8daff;
          border-radius: 6px;
          padding: 20px;
          margin: 30px 0;
        }
        .footer {
          padding: 20px 30px;
          text-align: center;
          font-size: 14px;
          background-color: #f9f9f9;
          color: #666666;
          border-top: 1px solid #eeeeee;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <img src="${logoUrl}" alt="Kletz Contracting" class="logo">
        </div>
        
        <div class="content">
          <div class="success-banner">
            <h2>✓ Payment Received!</h2>
            <p>Your dumpster rental is confirmed</p>
          </div>
          
          <p>Hi ${booking.name},</p>
          
          <p>Thank you for your payment! Your dumpster rental booking is now confirmed and ready for delivery.</p>
          
          <div class="details-box">
            <h3>Booking Details</h3>
            <div class="details-row">
              <span>Booking ID:</span>
              <span>${booking.id}</span>
            </div>
            <div class="details-row">
              <span>Dumpster Size:</span>
              <span>${booking.dumpster_size} Yard</span>
            </div>
            <div class="details-row">
              <span>Delivery Date:</span>
              <span>${new Date(booking.service_date).toLocaleDateString('en-US', {
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric'
              })}</span>
            </div>
            <div class="details-row">
              <span>Delivery Address:</span>
              <span>${booking.address}</span>
            </div>
            <div class="details-row">
              <span>Amount Paid:</span>
              <span>${paymentData.amount}</span>
            </div>
          </div>
          
          <div class="details-box">
            <h3>Payment Information</h3>
            <div class="details-row">
              <span>Invoice #:</span>
              <span>${paymentData.invoiceId}</span>
            </div>
            <div class="details-row">
              <span>Payment ID:</span>
              <span>${paymentData.paymentId}</span>
            </div>
            <div class="details-row">
              <span>Payment Date:</span>
              <span>${new Date().toLocaleDateString()}</span>
            </div>
          </div>
          
          <div class="next-steps">
            <h3>What Happens Next</h3>
            <ul>
              <li><strong>Day Before Delivery:</strong> We'll text you with a delivery time window</li>
              <li><strong>Delivery Day:</strong> Our driver will place the dumpster at your specified location</li>
              <li><strong>Pickup:</strong> Contact us when you're ready for pickup or at the end of your rental period</li>
            </ul>
          </div>
          
          <p><strong>Questions or need to make changes?</strong> Contact us at (412) 123-4567 or reply to this email.</p>
          
          <p>Thank you for choosing Kletz Contracting!</p>
        </div>
        
        <div class="footer">
          <p>© ${new Date().getFullYear()} Kletz Contracting Inc. All rights reserved.</p>
          <p>1468 Old Steubenville Pike - Suite D, Pittsburgh, PA 15205</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

function generateBusinessNotificationEmail(booking, paymentData) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Payment Received</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }
        .alert {
          background-color: #d4edda;
          border: 1px solid #c3e6cb;
          color: #155724;
          padding: 15px;
          border-radius: 4px;
          margin-bottom: 20px;
        }
        .details {
          background-color: #f8f9fa;
          padding: 15px;
          border-radius: 4px;
          margin: 15px 0;
        }
        .details table {
          width: 100%;
          border-collapse: collapse;
        }
        .details td {
          padding: 8px 0;
          border-bottom: 1px solid #dee2e6;
        }
        .details td:first-child {
          font-weight: bold;
          width: 40%;
        }
      </style>
    </head>
    <body>
      <div class="alert">
        <h2>💰 Payment Received!</h2>
        <p>A dumpster rental booking has been paid and confirmed.</p>
      </div>
      
      <div class="details">
        <h3>Booking Details</h3>
        <table>
          <tr>
            <td>Booking ID:</td>
            <td>${booking.id}</td>
          </tr>
          <tr>
            <td>Customer:</td>
            <td>${booking.name}</td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>${booking.email}</td>
          </tr>
          <tr>
            <td>Phone:</td>
            <td>${booking.phone}</td>
          </tr>
          <tr>
            <td>Dumpster Size:</td>
            <td>${booking.dumpster_size} Yard</td>
          </tr>
          <tr>
            <td>Delivery Date:</td>
            <td>${new Date(booking.service_date).toLocaleDateString('en-US', {
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric'
            })}</td>
          </tr>
          <tr>
            <td>Address:</td>
            <td>${booking.address}</td>
          </tr>
          <tr>
            <td>Amount Paid:</td>
            <td><strong>${paymentData.amount}</strong></td>
          </tr>
        </table>
      </div>
      
      <div class="details">
        <h3>Payment Information</h3>
        <table>
          <tr>
            <td>QB Invoice ID:</td>
            <td>${paymentData.invoiceId}</td>
          </tr>
          <tr>
            <td>QB Payment ID:</td>
            <td>${paymentData.paymentId}</td>
          </tr>
          <tr>
            <td>Payment Date:</td>
            <td>${new Date().toLocaleDateString()}</td>
          </tr>
        </table>
      </div>
      
      <p><strong>Action Required:</strong> Schedule delivery for ${new Date(booking.service_date).toLocaleDateString()} and contact customer day before with timing.</p>
      
      <hr>
      <p><small>This notification was automatically generated when payment was received in QuickBooks Online.</small></p>
    </body>
    </html>
  `;
}

async function sendEmail(to, subject, html) {
  const transporter = nodemailer.createTransporter({
    host: process.env.SMTP_HOST,
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
  
  await transporter.sendMail({
    from: `"Kletz Contracting" <donotreply@goaldercreekdigital.com>`,
    to,
    subject,
    html,
  });
}