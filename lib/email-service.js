import nodemailer from 'nodemailer';
import { generateCustomerInvoiceHTML, generateBusinessNotificationHTML } from './email-templates';
import { generateInvoicePDF } from './pdf-service';

export async function sendInvoiceEmail(session, bookingData = null) {
  try {
    const transporter = createTransporter();
    const customerEmail = session.customer_details.email;
    const subject = bookingData 
      ? 'Invoice & Booking Confirmation ✅ - Kletz Contracting'
      : 'Invoice for Your Purchase - Kletz Contracting';

    // Generate PDF
    const { pdfBuffer, filename } = await generateInvoicePDF(session, bookingData);

    // Generate HTML email
    const emailHtml = generateCustomerInvoiceHTML(session, bookingData);

    // Email attachments
    const attachments = [
      {
        filename: filename,
        content: pdfBuffer,
        contentType: 'application/pdf'
      }
    ];

    // Send to customer
    await transporter.sendMail({
      from: '"Kletz Contracting" <donotreply@goaldercreekdigital.com>',
      to: customerEmail,
      subject: subject,
      html: emailHtml,
      attachments: attachments
    });

    // Send copy to business email
    await transporter.sendMail({
      from: '"Kletz Contracting" <donotreply@goaldercreekdigital.com>',
      to: process.env.CLIENT_EMAIL,
      subject: `[COPY] ${subject}`,
      html: `
        <div style="background-color: #fff3cd; padding: 15px; margin-bottom: 20px; border: 1px solid #ffeaa7; border-radius: 5px;">
          <p style="margin: 0; font-weight: bold; color: #856404;">📧 This is a copy of the invoice sent to: ${customerEmail}</p>
        </div>
        ${emailHtml}
      `,
      attachments: attachments
    });

    console.log('Invoice email with PDF sent to:', customerEmail);
    console.log('Invoice PDF copy sent to business email');
  } catch (error) {
    console.error('Error sending invoice email:', error);
    
    // Fallback: send HTML email without PDF if PDF generation fails
    try {
      const transporter = createTransporter();
      const emailHtml = generateCustomerInvoiceHTML(session, bookingData);
      
      await transporter.sendMail({
        from: '"Kletz Contracting" <donotreply@goaldercreekdigital.com>',
        to: session.customer_details.email,
        subject: 'Invoice - Kletz Contracting',
        html: emailHtml
      });
      
      console.log('Fallback HTML invoice sent');
    } catch (fallbackError) {
      console.error('Fallback email also failed:', fallbackError);
    }
  }
}

export async function sendBusinessNotification(session, bookingData = null) {
  try {
    const transporter = createTransporter();
    const amount = (session.amount_total / 100).toFixed(2);

    const subject = bookingData 
      ? 'New Dumpster Booking 💰 - Action Required'
      : 'New Payment Received 💰';

    const notificationHtml = generateBusinessNotificationHTML(session, bookingData);

    // Generate PDF for business notification too
    let attachments = [];
    try {
      const { pdfBuffer, filename } = await generateInvoicePDF(session, bookingData);
      attachments = [
        {
          filename: filename,
          content: pdfBuffer,
          contentType: 'application/pdf'
        }
      ];
    } catch (pdfError) {
      console.error('Could not attach PDF to business notification:', pdfError);
    }

    await transporter.sendMail({
      from: '"Kletz Contracting" <donotreply@goaldercreekdigital.com>',
      to: process.env.CLIENT_EMAIL,
      subject: subject,
      html: notificationHtml,
      attachments: attachments
    });

    console.log('Business notification sent');
  } catch (error) {
    console.error('Error sending business notification:', error);
  }
}

function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}