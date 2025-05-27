// /pages/api/submit-contact-form.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  
    // Extract form data as before
    const { firstName, lastName, email, phone, address, city, state, country, postalCode, notes } = req.body;
    const name = `${firstName} ${lastName}`;
    const url = req.headers.referer || 'Direct Form';
  
    try {
      // Create/update contact
      const contactResponse = await fetch('https://services.leadconnectorhq.com/contacts/upsert', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.GHL_API_KEY}`,
          'Content-Type': 'application/json',
          Version: '2021-07-28',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          "name": name,
          "email": email,
          "locationId": `${process.env.GHL_LOCATION_ID}`,
          "phone": phone,
          "address1": address,
          "city": city,
          "state": state,
          "country": country || "US",
          "postalCode": postalCode,
          "timezone": "America/New_York",
          "tags": ["website_lead", "contact_form"],
          "customFields": [{
            "id": `${process.env.GHL_NOTES_FIELD}`,
            "key": "notes",
            "field_value": notes
          }],
          "source": `Website Contact Form - ${url}`
        }),
      });
  
      if (!contactResponse.ok) {
        const error = await contactResponse.text();
        console.log('GHL Contact API Error:', error);
        return res.status(500).json({ error });
      }
  
      const contactData = await contactResponse.json();
      const opportunityBody={
        "contactId": contactData.contact.id,
        "locationId": process.env.GHL_LOCATION_ID,
        "pipelineId": process.env.GHL_PIPELINE_ID,
        "pipelineStageId": process.env.GHL_NEW_LEAD_STAGE_ID, // Initial "New Lead" stage
        "name": `Website Lead - ${name}`,
        "monetaryValue": 200,
        "status": "open" // Keep it open by default
      }
      console.log("Opportunity request body:", opportunityBody);

      // Create opportunity with initial status
      const opportunityResponse = await fetch('https://services.leadconnectorhq.com/opportunities/upsert', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.GHL_API_KEY}`,
          'Content-Type': 'application/json',
          Version: '2021-07-28',
          Accept: 'application/json'
        },
        body: JSON.stringify(opportunityBody),
      });

      console.log(opportunityResponse)
      
      if (!opportunityResponse.ok) {
        const error = await opportunityResponse.text();
        console.log('GHL Opportunity API Error:', error);
        return res.status(200).json({ 
          success: true, 
          warning: "Contact created but opportunity creation failed", 
          contactData 
        });
      }
  
      const opportunityData = await opportunityResponse.json();

      // Send email notification
      try {
        await sendContactNotification({
          firstName,
          lastName,
          email,
          phone,
          address,
          city,
          state,
          country,
          postalCode,
          notes,
          url
        });
        console.log('Email notification sent successfully');
      } catch (emailError) {
        console.log('Email sending failed:', emailError);
        // Don't fail the entire request if email fails
      }
      
      res.status(200).json({ success: true, contactData, opportunityData });
      
    } catch (err) {
      console.log('Server Error:', err);
      res.status(500).json({ error: err.message });
    }
}

async function sendContactNotification(contactDetails) {
  // Create transporter
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT),
    secure: process.env.SMTP_PORT === '465', // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  // Create HTML email template
  const emailHTML = `
    <body style="margin: 0; padding: 0; background-color: #f4f6f8; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
      <table width="100%" cellpadding="0" cellspacing="0" style="padding: 40px 0;">
        <tr>
          <td align="center">
            <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.05); overflow: hidden;">
              
              <!-- Header -->
              <tr style="background-color: #ffffff;">
                <td align="center" style="padding: 0 0 20px 0;">
                  <img src="https://storage.googleapis.com/msgsndr/7a5zL8b7bbwra4JHmLLW/media/682f2c6df5621f1a1809fb61.png" alt="Logo" style="display: block;" />
                </td>
              </tr>

              <!-- Body -->
              <tr>
                <td style="padding: 40px 40px 20px 40px; text-align: left;">
                  <h2 style="margin: 0 0 10px; font-size: 24px; color: #333333;">New Contact Form Submission</h2>
                  
                  <p style="margin: 0 0 30px; font-size: 16px; color: #555555;">
                    You have received a new contact form submission from your website.
                  </p>

                  <div style="background-color: #f8f9fa; padding: 20px; border-radius: 6px; margin-bottom: 20px;">
                    <h3 style="margin: 0 0 15px; font-size: 18px; color: #333333;">Contact Details</h3>
                    
                    <table width="100%" cellpadding="0" cellspacing="0" style="font-size: 14px;">
                      <tr>
                        <td style="padding: 5px 0; color: #666666; width: 120px;"><strong>Name:</strong></td>
                        <td style="padding: 5px 0; color: #333333;">${contactDetails.firstName} ${contactDetails.lastName}</td>
                      </tr>
                      <tr>
                        <td style="padding: 5px 0; color: #666666;"><strong>Email:</strong></td>
                        <td style="padding: 5px 0; color: #333333;">${contactDetails.email}</td>
                      </tr>
                      ${contactDetails.phone ? `
                      <tr>
                        <td style="padding: 5px 0; color: #666666;"><strong>Phone:</strong></td>
                        <td style="padding: 5px 0; color: #333333;">${contactDetails.phone}</td>
                      </tr>
                      ` : ''}
                      ${contactDetails.address ? `
                      <tr>
                        <td style="padding: 5px 0; color: #666666;"><strong>Address:</strong></td>
                        <td style="padding: 5px 0; color: #333333;">${contactDetails.address}</td>
                      </tr>
                      ` : ''}
                      ${contactDetails.city || contactDetails.state || contactDetails.postalCode ? `
                      <tr>
                        <td style="padding: 5px 0; color: #666666;"><strong>Location:</strong></td>
                        <td style="padding: 5px 0; color: #333333;">
                          ${[contactDetails.city, contactDetails.state, contactDetails.postalCode].filter(Boolean).join(', ')}
                          ${contactDetails.country && contactDetails.country !== 'US' ? `, ${contactDetails.country}` : ''}
                        </td>
                      </tr>
                      ` : ''}
                      <tr>
                        <td style="padding: 5px 0; color: #666666;"><strong>Source:</strong></td>
                        <td style="padding: 5px 0; color: #333333;">${contactDetails.url}</td>
                      </tr>
                      <tr>
                        <td style="padding: 5px 0; color: #666666;"><strong>Submitted:</strong></td>
                        <td style="padding: 5px 0; color: #333333;">${new Date().toLocaleString()}</td>
                      </tr>
                    </table>
                  </div>

                  ${contactDetails.notes ? `
                  <div style="background-color: #fff3cd; padding: 20px; border-radius: 6px; border-left: 4px solid #ffc107;">
                    <h3 style="margin: 0 0 10px; font-size: 16px; color: #333333;">Additional Notes</h3>
                    <p style="margin: 0; font-size: 14px; color: #333333; white-space: pre-wrap;">${contactDetails.notes}</p>
                  </div>
                  ` : ''}
                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="padding: 20px 40px 40px 40px; font-size: 14px; color: #888888; text-align: center;">
                  This contact has been automatically added to your CRM system.
                </td>
              </tr>
              <tr>
                <td style="padding: 20px 40px 30px 40px; font-size: 14px; color: #888888; text-align: center; border-top: 1px solid #eaeaea;">
                  &copy; 2025 Alder Creek Digital. All rights reserved.<br />
                  <a href="https://aldercreekdigital.com" style="color: #888888; text-decoration: underline;">api.aldercreekdigital.com</a>
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
    </body>
  `;

  // Send email
  const info = await transporter.sendMail({
    from: process.env.SMTP_FROM,
    to: process.env.CLIENT_EMAIL, // Send to yourself as notification
    subject: `New Contact Form Submission - ${contactDetails.firstName} ${contactDetails.lastName}`,
    html: emailHTML,
  });

  return info;
}