// /pages/api/process-payment.js
import { createClient } from '@supabase/supabase-js';
import nodemailer from 'nodemailer';

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

const QB_PAYMENTS_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://api.intuit.com'
  : 'https://sandbox.api.intuit.com';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { invoiceId, bookingId, amount, card } = req.body;

  // Validate input
  if (!invoiceId || !bookingId || !amount || !card) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    // Get booking details
    const { data: booking, error: bookingError } = await supabase
      .from('bookings')
      .select('*')
      .eq('id', bookingId)
      .eq('qb_invoice_id', invoiceId)
      .single();

    if (bookingError || !booking) {
      return res.status(404).json({ error: 'Booking not found' });
    }

    if (booking.status !== 'approved') {
      return res.status(400).json({ error: 'Booking is not approved for payment' });
    }

    // Get QB auth tokens
    const { accessToken, companyId } = await getQBAuth();

    // Process payment via QuickBooks Payments API
    const paymentResult = await processQBPayment({
      accessToken,
      companyId,
      amount,
      card,
      booking
    });

    // Link payment to invoice in QuickBooks
    await linkPaymentToInvoice({
      accessToken,
      companyId,
      invoiceId,
      paymentResult,
      booking
    });

    // Update booking status
    await supabase
      .from('bookings')
      .update({
        status: 'paid',
        qb_payment_id: paymentResult.id,
        payment_amount: amount,
        payment_date: new Date().toISOString(),
        payment_method: 'credit_card'
      })
      .eq('id', bookingId);

    // Send confirmation emails
    await sendPaymentConfirmationEmails(booking, {
      paymentId: paymentResult.id,
      amount: amount,
      last4: card.cardNumber.slice(-4)
    });

    console.log('Payment processed successfully:', {
      bookingId,
      invoiceId,
      paymentId: paymentResult.id
    });

    res.status(200).json({
      success: true,
      paymentId: paymentResult.id,
      message: 'Payment processed successfully'
    });

  } catch (error) {
    console.error('Payment processing error:', error);
    
    // Try to update booking with error
    try {
      await supabase
        .from('bookings')
        .update({
          payment_error: error.message,
          payment_attempted_at: new Date().toISOString()
        })
        .eq('id', bookingId);
    } catch (dbError) {
      console.error('Failed to log payment error:', dbError);
    }

    res.status(500).json({
      error: error.message || 'Payment processing failed'
    });
  }
}

async function processQBPayment({ accessToken, companyId, amount, card, booking }) {
  try {
    // QB Payments API uses a different base URL
    const QB_PAYMENTS_URL = process.env.NODE_ENV === 'production' 
      ? 'https://api.intuit.com'
      : 'https://sandbox.api.intuit.com';

    // Format card data for QB Payments API
    const paymentData = {
      amount: amount.toString(),
      currency: 'USD',
      card: {
        number: card.cardNumber.replace(/\s/g, ''), // Remove spaces
        expMonth: card.expMonth,
        expYear: card.expYear,
        cvc: card.cvc,
        name: card.name,
        address: {
          streetAddress: card.address,
          city: card.city,
          region: card.state,
          country: card.country || 'US',
          postalCode: card.zip
        }
      },
      context: {
        mobile: 'false',
        isEcommerce: 'true'
      }
    };

    console.log('Processing QB payment for amount:', amount);
    console.log('Using QB Payments URL:', QB_PAYMENTS_URL);

    const response = await fetch(`${QB_PAYMENTS_URL}/quickbooks/v4/payments/charges`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Request-Id': `req_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
      },
      body: JSON.stringify(paymentData)
    });

    const result = await response.json();

    console.log('QB Payment response status:', response.status);
    console.log('QB Payment response:', JSON.stringify(result, null, 2));

    // Handle specific QB Payments API error format
    if (!response.ok) {
      const errorMessage = result.code || result.message || result.detail || 'Payment processing failed';
      throw new Error(`Payment failed: ${errorMessage}`);
    }

    // Check if payment was declined
    if (result.status === 'DECLINED') {
      throw new Error('Payment was declined. Please check your card details and try again.');
    }

    // For sandbox, we might get a successful response immediately
    return {
      id: result.id || `test_${Date.now()}`,
      status: result.status || 'CAPTURED',
      authCode: result.authCode || 'TEST123',
      avsStreet: result.avsStreet || 'PASS',
      avsZip: result.avsZip || 'PASS'
    };

  } catch (error) {
    console.error('QB Payment processing error:', error);
    throw error;
  }
}

async function linkPaymentToInvoice({ accessToken, companyId, invoiceId, paymentResult, booking }) {
  try {
    // Create a payment record in QuickBooks that links to the invoice
    const paymentData = {
      CustomerRef: {
        value: booking.qb_customer_id
      },
      TotalAmt: booking.invoice_amount,
      Line: [{
        Amount: booking.invoice_amount,
        LinkedTxn: [{
          TxnId: invoiceId,
          TxnType: 'Invoice'
        }]
      }],
      PaymentMethodRef: {
        value: '1' // Credit Card payment method
      },
      PaymentRefNum: paymentResult.id,
      PrivateNote: `Online payment processed via QuickBooks Payments. Auth Code: ${paymentResult.authCode}`
    };

    console.log('Linking payment to invoice:', invoiceId);

    const response = await fetch(`${QB_PAYMENTS_BASE_URL.replace('sandbox.api', 'sandbox-quickbooks.api')}/v3/company/${companyId}/payment`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(paymentData)
    });

    const result = await response.json();

    if (!response.ok) {
      console.error('Failed to link payment to invoice:', result);
      // Don't throw error here - payment succeeded, just logging failed
    } else {
      console.log('Payment linked to invoice successfully');
    }

  } catch (error) {
    console.error('Error linking payment to invoice:', error);
    // Don't throw error - payment succeeded, just linking failed
  }
}

async function getQBAuth() {
  const { data: qbAuth } = await supabase
    .from('quickbooks_auth')
    .select('*')
    .single();

  if (!qbAuth || !qbAuth.access_token) {
    throw new Error('QuickBooks not connected');
  }

  // Check if token needs refresh
  const needsRefresh = qbAuth.expires_at ? Date.now() > new Date(qbAuth.expires_at).getTime() : false;
  
  if (needsRefresh) {
    console.log('Token expired, refreshing...');
    await refreshAccessToken();
    
    const { data: updatedAuth } = await supabase
      .from('quickbooks_auth')
      .select('*')
      .single();
      
    return {
      accessToken: updatedAuth.access_token,
      companyId: updatedAuth.company_id
    };
  }

  return {
    accessToken: qbAuth.access_token,
    companyId: qbAuth.company_id
  };
}

async function refreshAccessToken() {
  try {
    const { data: qbAuth } = await supabase
      .from('quickbooks_auth')
      .select('*')
      .single();

    const refreshResponse = await fetch('https://oauth.platform.intuit.com/oauth2/v1/tokens/bearer', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${Buffer.from(`${process.env.QB_CLIENT_ID}:${process.env.QB_CLIENT_SECRET}`).toString('base64')}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: qbAuth.refresh_token
      })
    });

    const tokenData = await refreshResponse.json();

    if (!refreshResponse.ok) {
      throw new Error(`Token refresh failed: ${tokenData.error || 'Unknown error'}`);
    }

    const expiresAt = new Date(Date.now() + (tokenData.expires_in * 1000));

    await supabase
      .from('quickbooks_auth')
      .update({
        access_token: tokenData.access_token,
        refresh_token: tokenData.refresh_token || qbAuth.refresh_token,
        expires_at: expiresAt.toISOString()
      });

    console.log('QB tokens refreshed successfully');

  } catch (error) {
    console.error('Token refresh failed:', error);
    throw error;
  }
}

async function sendPaymentConfirmationEmails(booking, paymentInfo) {
  try {
    const logoUrl = 'https://storage.googleapis.com/msgsndr/3xGyNbyyifHaQaEVS0Sx/media/681ba0cc6da8499d97d2cdd0.png';
    
    // Send customer confirmation
    const customerHtml = generateCustomerConfirmationEmail(booking, paymentInfo, logoUrl);
    await sendEmail(
      booking.email,
      'Payment Confirmed - Dumpster Rental Ready for Delivery',
      customerHtml
    );

    // Send business notification
    const businessHtml = generateBusinessPaymentNotification(booking, paymentInfo);
    await sendEmail(
      process.env.CLIENT_EMAIL,
      `Payment Received - Booking ${booking.id} Ready for Delivery`,
      businessHtml
    );

    console.log('Confirmation emails sent successfully');

  } catch (error) {
    console.error('Failed to send confirmation emails:', error);
    // Don't throw - payment succeeded
  }
}

function generateCustomerConfirmationEmail(booking, paymentInfo, logoUrl) {
  const formatDate = (dateString) => new Date(dateString).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Payment Confirmed</title>
    </head>
    <body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f7f7f7;">
      <div style="max-width: 600px; margin: 20px auto; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
        
        <div style="background: linear-gradient(135deg, #2196F3, #21CBF3); color: white; padding: 30px; text-align: center;">
          <img src="${logoUrl}" alt="Kletz Contracting" style="max-width: 200px; margin-bottom: 15px;">
          <h1 style="margin: 0; font-size: 24px;">✅ Payment Confirmed!</h1>
          <p style="margin: 10px 0 0 0; opacity: 0.9;">Your dumpster rental is confirmed and ready for delivery</p>
        </div>

        <div style="padding: 30px;">
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
            <h3 style="margin: 0 0 15px 0; color: #333;">Booking Details</h3>
            <div style="display: grid; gap: 8px;">
              <div style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #e9ecef;">
                <span style="color: #666;">Booking ID:</span>
                <span style="font-weight: 600;">${booking.id}</span>
              </div>
              <div style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #e9ecef;">
                <span style="color: #666;">Dumpster Size:</span>
                <span style="font-weight: 600;">${booking.dumpster_size} Yard</span>
              </div>
              <div style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #e9ecef;">
                <span style="color: #666;">Delivery Date:</span>
                <span style="font-weight: 600;">${formatDate(booking.service_date)}</span>
              </div>
              <div style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #e9ecef;">
                <span style="color: #666;">Address:</span>
                <span style="font-weight: 600;">${booking.address}</span>
              </div>
              <div style="display: flex; justify-content: space-between; padding: 8px 0;">
                <span style="color: #666;">Amount Paid:</span>
                <span style="font-weight: 600; color: #28a745;">${paymentInfo.amount}</span>
              </div>
            </div>
          </div>

          <div style="background: #e8f5e8; padding: 20px; border-radius: 8px; border: 1px solid #d4edda; margin-bottom: 25px;">
            <h3 style="margin: 0 0 15px 0; color: #155724;">Payment Information</h3>
            <div style="display: grid; gap: 8px;">
              <div style="display: flex; justify-content: space-between;">
                <span style="color: #155724;">Payment ID:</span>
                <span style="font-weight: 600;">${paymentInfo.paymentId}</span>
              </div>
              <div style="display: flex; justify-content: space-between;">
                <span style="color: #155724;">Card Used:</span>
                <span style="font-weight: 600;">****${paymentInfo.last4}</span>
              </div>
              <div style="display: flex; justify-content: space-between;">
                <span style="color: #155724;">Payment Date:</span>
                <span style="font-weight: 600;">${new Date().toLocaleDateString()}</span>
              </div>
            </div>
          </div>

          <div style="background: #fff3cd; padding: 20px; border-radius: 8px; border: 1px solid #ffeaa7; margin-bottom: 25px;">
            <h3 style="margin: 0 0 15px 0; color: #856404;">What Happens Next</h3>
            <ul style="margin: 0; padding-left: 20px; color: #856404;">
              <li>We'll contact you the day before delivery with timing details</li>
              <li>Our driver will deliver and place your dumpster at the specified location</li>
              <li>Contact us when you're ready for pickup or at the end of your rental period</li>
            </ul>
          </div>

          <p style="margin: 0 0 15px 0;">Questions? Contact us at <a href="tel:+14123456789" style="color: #2196F3;">(412) 345-6789</a> or reply to this email.</p>
          <p style="margin: 0;">Thank you for choosing Kletz Contracting!</p>
        </div>

        <div style="background: #f8f9fa; padding: 20px; text-align: center; border-top: 1px solid #e9ecef;">
          <p style="margin: 0; font-size: 14px; color: #666;">© ${new Date().getFullYear()} Kletz Contracting Inc. All rights reserved.</p>
          <p style="margin: 5px 0 0 0; font-size: 14px; color: #666;">1468 Old Steubenville Pike - Suite D, Pittsburgh, PA 15205</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

function generateBusinessPaymentNotification(booking, paymentInfo) {
  const formatDate = (dateString) => new Date(dateString).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Payment Received</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
      
      <div style="background: #d4edda; border: 1px solid #c3e6cb; color: #155724; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
        <h2 style="margin: 0 0 10px 0;">💰 Payment Received!</h2>
        <p style="margin: 0;">A dumpster rental booking has been paid and is ready for delivery.</p>
      </div>

      <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
        <h3 style="margin: 0 0 15px 0;">Customer Information</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #dee2e6; font-weight: bold; width: 30%;">Name:</td>
            <td style="padding: 8px 0; border-bottom: 1px solid #dee2e6;">${booking.name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #dee2e6; font-weight: bold;">Email:</td>
            <td style="padding: 8px 0; border-bottom: 1px solid #dee2e6;"><a href="mailto:${booking.email}">${booking.email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #dee2e6; font-weight: bold;">Phone:</td>
            <td style="padding: 8px 0; border-bottom: 1px solid #dee2e6;"><a href="tel:${booking.phone}">${booking.phone}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Address:</td>
            <td style="padding: 8px 0;">${booking.address}</td>
          </tr>
        </table>
      </div>

      <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
        <h3 style="margin: 0 0 15px 0;">Service Details</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #dee2e6; font-weight: bold; width: 30%;">Booking ID:</td>
            <td style="padding: 8px 0; border-bottom: 1px solid #dee2e6;">${booking.id}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #dee2e6; font-weight: bold;">Dumpster Size:</td>
            <td style="padding: 8px 0; border-bottom: 1px solid #dee2e6;">${booking.dumpster_size} Yard</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #dee2e6; font-weight: bold;">Delivery Date:</td>
            <td style="padding: 8px 0; border-bottom: 1px solid #dee2e6; color: #dc3545; font-weight: bold;">${formatDate(booking.service_date)}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Amount Paid:</td>
            <td style="padding: 8px 0; color: #28a745; font-weight: bold; font-size: 18px;">${paymentInfo.amount}</td>
          </tr>
        </table>
      </div>

      <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
        <h3 style="margin: 0 0 15px 0;">Payment Details</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #dee2e6; font-weight: bold; width: 30%;">Payment ID:</td>
            <td style="padding: 8px 0; border-bottom: 1px solid #dee2e6;">${paymentInfo.paymentId}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #dee2e6; font-weight: bold;">QB Invoice ID:</td>
            <td style="padding: 8px 0; border-bottom: 1px solid #dee2e6;">${booking.qb_invoice_id}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Payment Date:</td>
            <td style="padding: 8px 0;">${new Date().toLocaleDateString()}</td>
          </tr>
        </table>
      </div>

      <div style="background: #fff3cd; border: 1px solid #ffeaa7; color: #856404; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
        <h3 style="margin: 0 0 10px 0;">⚠️ Action Required</h3>
        <p style="margin: 0;">Schedule delivery for <strong>${formatDate(booking.service_date)}</strong> and contact customer day before with timing details.</p>
      </div>

      <hr style="border: none; border-top: 1px solid #dee2e6; margin: 30px 0;">
      <p style="margin: 0; font-size: 12px; color: #666; text-align: center;">
        This notification was automatically generated when payment was received via QuickBooks Payments API.
      </p>
    </body>
    </html>
  `;
}

async function sendEmail(to, subject, html) {
  const transporter = nodemailer.createTransport({
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