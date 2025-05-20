export function generateCustomerInvoiceHTML(session, bookingData = null) {
  const customerName = session.customer_details.name || bookingData?.name || 'Customer';
  const totalAmount = session.amount_total / 100;

  // Generate calendar link if this is a dumpster booking
  let calendarSection = '';
  if (bookingData) {
    const calendarLink = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Dumpster+Dropoff&dates=${bookingData.service_date.replace(/-/g, '')}T090000Z/${bookingData.service_date.replace(/-/g, '')}T100000Z&details=Dumpster+delivery+at+${encodeURIComponent(bookingData.address)}`;
    
    calendarSection = `
      <div style="background-color: #f8f9fa; padding: 20px; margin: 20px 0; border-radius: 8px; border-left: 4px solid #28a745;">
        <h3 style="color: #28a745; margin-top: 0;">🗓️ Booking Confirmed!</h3>
        <p><strong>Service Date:</strong> ${bookingData.service_date}</p>
        <p><strong>Delivery Address:</strong> ${bookingData.address}</p>
        <p><a href="${calendarLink}" style="background-color: #28a745; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">📅 Add to Calendar</a></p>
      </div>
    `;
  }

  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="text-align: center; border-bottom: 2px solid #333; padding-bottom: 20px; margin-bottom: 30px;">
        <h1 style="color: #333; margin: 0;">INVOICE</h1>
        <h2 style="color: #666; margin: 10px 0 0 0;">Kletz Contracting</h2>
        <p style="color: #666;">1468 Old Steubenville Pike, Suite D<br>Pittsburgh, PA 15205<br>(412) 123-4567</p>
      </div>
      
      <h1 style="color: #28a745;">Payment Confirmed!</h1>
      
      <p>Dear ${customerName},</p>
      
      <p>Thank you for your payment! Your invoice details are below:</p>
      
      ${calendarSection}
      
      <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <thead>
          <tr style="background-color: #f8f9fa;">
            <th style="padding: 15px; text-align: left; border: 1px solid #ddd;">Description</th>
            <th style="padding: 15px; text-align: right; border: 1px solid #ddd;">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 15px; border: 1px solid #ddd;">
              ${bookingData ? `Dumpster Rental Service - ${bookingData.service_date}` : 'Purchase'}
            </td>
            <td style="padding: 15px; text-align: right; border: 1px solid #ddd;">$${totalAmount.toFixed(2)}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr style="background-color: #f8f9fa; font-weight: bold;">
            <td style="padding: 15px; border: 1px solid #ddd;">TOTAL</td>
            <td style="padding: 15px; text-align: right; border: 1px solid #ddd;">$${totalAmount.toFixed(2)}</td>
          </tr>
        </tfoot>
      </table>
      
      <div style="background-color: #e8f5e9; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <p style="margin: 0;"><strong>✅ Payment Status: PAID</strong></p>
        <p style="margin: 5px 0 0 0;">Payment ID: ${session.payment_intent}</p>
        <p style="margin: 5px 0 0 0;">Invoice Date: ${new Date(session.created * 1000).toLocaleDateString()}</p>
        <p style="margin: 5px 0 0 0;">Invoice #: INV-${session.id.slice(-8).toUpperCase()}</p>
      </div>
      
      <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="margin-top: 0;">Need Help? Contact Us</h3>
        <p><strong>Phone:</strong> (412) 123-4567</p>
        <p><strong>Email:</strong> info@kletzcontracting.com</p>
        <p><strong>Business Hours:</strong> Mon-Fri: 7AM-6PM, Sat: 8AM-4PM</p>
      </div>
      
      <p>Thank you for your business!<br>
      <strong>Kletz Contracting</strong></p>
    </div>
  `;
}

export function generateBusinessNotificationHTML(session, bookingData = null) {
  const customerEmail = session.customer_details.email;
  const customerName = session.customer_details.name || bookingData?.name || 'Customer';
  const amount = (session.amount_total / 100).toFixed(2);

  if (bookingData) {
    const calendarLink = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Dumpster+Dropoff&dates=${bookingData.service_date.replace(/-/g, '')}T090000Z/${bookingData.service_date.replace(/-/g, '')}T100000Z&details=Dumpster+delivery+at+${encodeURIComponent(bookingData.address)}`;
    
    return `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background-color: #dc3545; color: white; padding: 20px; margin-bottom: 20px; border-radius: 8px;">
          <h1 style="margin: 0; color: white;">🚨 NEW DUMPSTER BOOKING - ACTION REQUIRED</h1>
          <p style="margin: 10px 0 0 0; color: white;">Customer ${customerName} has paid $${amount} for their dumpster booking</p>
        </div>
        
        <div style="background-color: #f8f9fa; padding: 20px; margin-bottom: 20px; border-radius: 8px;">
          <h3 style="margin-top: 0;">Booking Details:</h3>
          <ul style="margin: 10px 0; padding-left: 20px;">
            <li><strong>Customer:</strong> ${customerName} (${customerEmail})</li>
            <li><strong>Service Date:</strong> ${bookingData.service_date}</li>
            <li><strong>Address:</strong> ${bookingData.address}</li>
            <li><strong>Booking ID:</strong> ${bookingData.id}</li>
            <li><strong>Payment ID:</strong> ${session.payment_intent}</li>
            <li><strong>Amount:</strong> $${amount}</li>
          </ul>
          <p style="text-align: center; margin-top: 20px;">
            <a href="${calendarLink}" style="background-color: #007bff; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block;">📅 Add to Calendar</a>
          </p>
        </div>
        
        <div style="background-color: #fff3cd; padding: 20px; border-radius: 8px; border: 1px solid #ffeaa7;">
          <h3 style="margin-top: 0; color: #856404;">⚠️ Next Steps:</h3>
          <ul style="margin: 10px 0; padding-left: 20px; color: #856404;">
            <li>Schedule delivery for ${bookingData.service_date}</li>
            <li>Contact customer day before for timing confirmation</li>
            <li>Update delivery schedule in company system</li>
            <li>Prepare delivery paperwork and customer receipt</li>
          </ul>
        </div>
      </div>
    `;
  } else {
    return `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background-color: #28a745; color: white; padding: 20px; margin-bottom: 20px; border-radius: 8px;">
          <h1 style="margin: 0; color: white;">💰 NEW PAYMENT RECEIVED</h1>
          <p style="margin: 10px 0 0 0; color: white;">Customer ${customerName} has made a $${amount} purchase</p>
        </div>
        
        <div style="background-color: #f8f9fa; padding: 20px; margin-bottom: 20px; border-radius: 8px;">
          <h3 style="margin-top: 0;">Payment Details:</h3>
          <ul style="margin: 10px 0; padding-left: 20px;">
            <li><strong>Customer:</strong> ${customerName} (${customerEmail})</li>
            <li><strong>Amount:</strong> $${amount}</li>
            <li><strong>Payment ID:</strong> ${session.payment_intent}</li>
            <li><strong>Date:</strong> ${new Date(session.created * 1000).toLocaleDateString()}</li>
          </ul>
        </div>
        
        <p style="color: #666;">Invoice has been automatically sent to customer.</p>
      </div>
    `;
  }
}