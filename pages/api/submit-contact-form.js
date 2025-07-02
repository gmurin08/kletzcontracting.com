// /pages/api/submit-contact-form.js
import nodemailer from 'nodemailer';
import crypto from 'crypto';

// Parse cookies from request
function parseCookies(cookieHeader) {
  const cookies = {};
  if (cookieHeader) {
    cookieHeader.split(';').forEach(cookie => {
      const [name, value] = cookie.trim().split('=');
      if (name && value) {
        cookies[name] = decodeURIComponent(value);
      }
    });
  }
  return cookies;
}

export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  
    // Extract form data as before
    const { firstName, lastName, email, phone, address, city, state, country, postalCode, notes } = req.body;
    const name = `${firstName} ${lastName}`;
    const url = req.headers.referer || 'Direct Form';
    
    // Parse cookies
    req.cookies = parseCookies(req.headers.cookie);
    
    // Get client information for tracking
    const userAgent = req.headers['user-agent'] || '';
    const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const eventTime = Math.floor(Date.now() / 1000);
    const eventId = crypto.randomUUID();
  
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
      
      if (!opportunityResponse.ok) {
        const error = await opportunityResponse.text();
        return res.status(200).json({ 
          success: true, 
          warning: "Contact created but opportunity creation failed", 
          contactData 
        });
      }
  
      const opportunityData = await opportunityResponse.json();

      // Send GA4 event for form submission
      try {
        const measurementId = process.env.GA4_MEASUREMENT_ID;
        const apiSecret = process.env.GA4_API_SECRET;

        if (measurementId && apiSecret) {
          // Use a consistent client ID based on email for better user tracking
          const clientId = req.body.ga_client_id || `${Date.now()}.${Math.random().toString(36).substring(2, 15)}`;
          
          const ga4EventPayload = {
            client_id: clientId,
            user_id: email, // Important for cross-device tracking
            user_properties: {
              email: { value: email },
              phone: { value: phone || '' },
              first_name: { value: firstName },
              last_name: { value: lastName },
              city: { value: city || '' },
              state: { value: state || '' },
              country: { value: country || 'US' }
            },
            events: [
              {
                name: 'form_submit',
                params: {
                  engagement_time_msec: '100',
                  session_id: req.body.ga_session_id || Date.now().toString(),
                  form_id: 'contact_form',
                  form_name: 'Contact Form',
                  form_destination: url || 'Direct Form',
                  value: 1.0,
                  currency: 'USD',
                  // Enhanced parameters for remarketing
                  email: email,
                  phone: phone || '',
                  lead_source: 'website_contact_form',
                  timestamp_micros: (Date.now() * 1000).toString()
                }
              },
              {
                name: 'generate_lead',
                params: {
                  currency: 'USD',
                  value: 1.0,
                  lead_source: 'website_contact_form'
                }
              }
            ]
          };

          const ga4Response = await fetch(
            `https://www.google-analytics.com/mp/collect?measurement_id=${measurementId}&api_secret=${apiSecret}`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(ga4EventPayload)
            }
          );

          if (ga4Response.status === 204) {
            console.log('GA4 form submit event sent successfully');
          } else {
            console.log('GA4 event sending failed:', await ga4Response.text());
          }
        }
      } catch (ga4Error) {
        console.log('GA4 tracking error:', ga4Error);
        // Don't fail the entire request if GA4 tracking fails
      }

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
      } catch (emailError) {
        // Don't fail the entire request if email fails
      }
      
      // Track conversions server-side (privacy-compliant)
      try {
        
        const trackingData = {
          email,
          phone,
          firstName,
          lastName,
          city,
          state,
          postalCode,
          country,
          url,
          userAgent,
          clientIp,
          eventTime,
          eventId,
          clientId: req.cookies?._ga?.replace(/^GA\d\.\d\./, '') || crypto.randomUUID(),
          fbc: req.cookies?._fbc || undefined,
          fbp: req.cookies?._fbp || undefined
        };
        
        await trackConversions(trackingData);
      } catch (trackingError) {
        // Don't fail the request if tracking fails
      }
      
      res.status(200).json({ success: true, contactData, opportunityData });
      
    } catch (err) {
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

// Privacy-compliant conversion tracking
async function trackConversions(data) {
  const promises = [];
  
  // Meta Conversions API (with automatic hashing)
  if (process.env.META_PIXEL_ID && process.env.META_ACCESS_TOKEN) {
    promises.push(trackMetaConversion(data));
  }
  
  // Google Analytics 4 Measurement Protocol (no PII)
  if (process.env.GA_MEASUREMENT_ID && process.env.GA_API_SECRET) {
    promises.push(trackGoogleAnalytics(data));
  }
  
  // Execute all tracking in parallel
  await Promise.all(promises);
}

// Meta Conversions API - No PII version
async function trackMetaConversion(data) {
  const payload = {
    data: [{
      event_name: 'Lead',
      event_time: data.eventTime,
      event_id: data.eventId,
      event_source_url: data.url,
      action_source: 'website',
      user_data: {
        // Only non-PII data
        client_ip_address: data.clientIp,
        client_user_agent: data.userAgent,
        fbc: data.fbc, // Facebook click ID from cookie if available
        fbp: data.fbp  // Facebook browser ID from cookie if available
      },
      custom_data: {
        lead_type: 'contact_form',
        form_location: 'main_contact',
        value: 100.00,
        currency: 'USD'
      }
    }]
  };
  
  const response = await fetch(
    `https://graph.facebook.com/v18.0/${process.env.META_PIXEL_ID}/events`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...payload,
        access_token: process.env.META_ACCESS_TOKEN,
        test_event_code: process.env.META_TEST_EVENT_CODE
      })
    }
  );
  
  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Meta tracking failed: ${response.status}`);
  }
  
  return response.json();
}

// Google Analytics 4 - No PII, only anonymous tracking
async function trackGoogleAnalytics(data) {
  const payload = {
    client_id: data.clientId, // Anonymous client ID only
    events: [{
      name: 'generate_lead',
      params: {
        // Match GTM structure for consistency
        value: 100.00,
        currency: 'USD',
        engagement_time_msec: 100,
        // Form-specific parameters matching GTM
        form_id: 'main_contact_form',
        form_name: 'Main Contact Form',
        form_destination: data.url,
        form_length: 11, // Number of fields in the form
        form_submit_text: 'server_side',
        // Lead tracking
        lead_source: 'website',
        lead_type: 'contact_form',
        // Server-side specific
        tracking_method: 'server_side',
        // Anonymous location data only
        country: data.country || 'US',
        region: data.state || undefined,
        // Enable debug mode only in development
        ...(process.env.NODE_ENV === 'development' && { debug_mode: true })
      }
    }]
  };
  
  const response = await fetch(
    `https://www.google-analytics.com/mp/collect?measurement_id=${process.env.GA_MEASUREMENT_ID}&api_secret=${process.env.GA_API_SECRET}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    }
  );
  
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`GA4 tracking failed: ${response.status}`);
  }
  
  // GA4 MP returns 204 No Content on success
  return { success: true };
}