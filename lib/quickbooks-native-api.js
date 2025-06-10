// /lib/quickbooks-native-api.js
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

const QB_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://quickbooks-api.intuit.com'
  : 'https://sandbox-quickbooks.api.intuit.com';

export async function createQBCustomer({ name, email, phone, address }) {
  let retryCount = 0;
  const maxRetries = 1;

  while (retryCount <= maxRetries) {
    try {
      const { accessToken, companyId } = await getQBAuth(retryCount > 0);

      // Check if customer already exists
      const searchUrl = `${QB_BASE_URL}/v3/company/${companyId}/query`;
      const query = `SELECT * FROM Customer WHERE PrimaryEmailAddr = '${email}'`;
      
      const searchResponse = await fetch(`${searchUrl}?query=${encodeURIComponent(query)}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Accept': 'application/json'
        }
      });

      const searchData = await searchResponse.json();

      // Check for auth errors
      if (searchResponse.status === 401 && retryCount === 0) {
        console.log('Got 401 on customer search, refreshing token and retrying...');
        await refreshAccessToken();
        retryCount++;
        continue;
      }

      const customers = searchData.QueryResponse?.Customer || [];
      
      if (customers.length > 0) {
        console.log('Found existing customer:', customers[0].Id);
        return customers[0];
      }

      // Create new customer
      const customerData = {
        Name: name,
        CompanyName: name,
        PrimaryEmailAddr: {
          Address: email
        },
        PrimaryPhone: {
          FreeFormNumber: phone
        },
        BillAddr: {
          Line1: address
        }
      };

      const createResponse = await fetch(`${QB_BASE_URL}/v3/company/${companyId}/customer`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(customerData)
      });

      const createData = await createResponse.json();
      
      // Check for auth errors on create
      if (createResponse.status === 401 && retryCount === 0) {
        console.log('Got 401 on customer create, refreshing token and retrying...');
        await refreshAccessToken();
        retryCount++;
        continue;
      }
      
      if (!createResponse.ok) {
        throw new Error(`Customer creation failed: ${JSON.stringify(createData)}`);
      }

      console.log('Created new customer:', createData.QueryResponse.Customer[0].Id);
      return createData.QueryResponse.Customer[0];

    } catch (error) {
      if (error.message.includes('401') && retryCount === 0) {
        console.log('Got auth error, refreshing token and retrying...');
        await refreshAccessToken();
        retryCount++;
        continue;
      }
      
      console.error('QB Customer creation error:', error);
      throw error;
    }
  }
}

export async function createQBInvoiceWithPaymentLink({ customer, amount, description, metadata }) {
  try {
    const { accessToken, companyId } = await getQBAuth();

    // Get or create service item for dumpster rental
    const itemId = await getDumpsterRentalItemId(companyId, accessToken);

    // Create invoice
    const invoiceData = {
      CustomerRef: {
        value: customer.Id
      },
      Line: [{
        Amount: amount,
        DetailType: "SalesItemLineDetail",
        SalesItemLineDetail: {
          ItemRef: {
            value: itemId,
            name: "Dumpster Rental"
          },
          Qty: 1,
          UnitPrice: amount
        },
        Description: description
      }],
      TotalAmt: amount,
      DueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 7 days from now
      // Store booking ID in a custom field or memo
      CustomerMemo: {
        value: `Booking ID: ${metadata.booking_id}`
      },
      PrivateNote: `Service Date: ${metadata.service_date} | Address: ${metadata.address}`,
      // Enable online payments
      AllowOnlineACHPayment: true,
      AllowOnlineCreditCardPayment: true
    };

    console.log('Creating invoice with data:', JSON.stringify(invoiceData, null, 2));

    const createResponse = await fetch(`${QB_BASE_URL}/v3/company/${companyId}/invoice`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(invoiceData)
    });

    const createData = await createResponse.json();
    
    // ADD DETAILED LOGGING
    console.log('Invoice creation response:', JSON.stringify(createData, null, 2));
    
    if (!createResponse.ok) {
      throw new Error(`Invoice creation failed: ${JSON.stringify(createData)}`);
    }

    // Check response structure - QB returns different formats for create vs query
    let invoice;
    if (createData.QueryResponse && createData.QueryResponse.Invoice) {
      // Query response format
      invoice = createData.QueryResponse.Invoice[0];
    } else if (createData.Invoice) {
      // Direct create response format
      invoice = createData.Invoice;
    } else {
      throw new Error(`Unexpected invoice response structure: ${JSON.stringify(createData)}`);
    }

    console.log('Created invoice:', invoice.Id);

    // Get the payment link by fetching invoice with invoiceLink included
    const paymentUrl = await getInvoicePaymentLink(companyId, accessToken, invoice.Id);

    return {
      invoiceId: invoice.Id,
      paymentUrl: paymentUrl,
      invoice: invoice
    };

  } catch (error) {
    console.error('QB Invoice creation error:', error);
    throw error;
  }
}

async function getInvoicePaymentLink(companyId, accessToken, invoiceId) {
  try {
    const response = await fetch(
      `${QB_BASE_URL}/v3/company/${companyId}/invoice/${invoiceId}?include=invoiceLink`, 
      {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Accept': 'application/json'
        }
      }
    );

    const data = await response.json();
    
    console.log('Payment link response:', JSON.stringify(data, null, 2));
    
    if (!response.ok) {
      console.error('Failed to get payment link:', data);
      return null;
    }

    // Handle different response structures
    let invoice;
    if (data.QueryResponse && data.QueryResponse.Invoice) {
      invoice = data.QueryResponse.Invoice[0];
    } else if (data.Invoice) {
      invoice = data.Invoice;
    } else {
      console.error('No invoice found in payment link response');
      return null;
    }

    console.log('Got payment link for invoice:', invoice.Id);
    console.log('Invoice link available:', !!invoice.invoiceLink);
    
    if (!invoice.invoiceLink) {
      console.warn('No payment link available - online payments may not be enabled');
      return null;
    }
    
    return invoice.invoiceLink;

  } catch (error) {
    console.error('Error getting payment link:', error);
    return null;
  }
}

async function getDumpsterRentalItemId(companyId, accessToken) {
  try {
    // Try to find existing "Dumpster Rental" service item
    const query = `SELECT * FROM Item WHERE Type = 'Service' AND Name = 'Dumpster Rental'`;
    
    console.log('Searching for existing service item...');
    
    const response = await fetch(
      `${QB_BASE_URL}/v3/company/${companyId}/query?query=${encodeURIComponent(query)}`, 
      {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Accept': 'application/json'
        }
      }
    );

    const data = await response.json();
    console.log('Service item search response:', JSON.stringify(data, null, 2));
    
    const items = data.QueryResponse?.Item || [];
    
    if (items.length > 0) {
      console.log('Found existing service item:', items[0].Id);
      return items[0].Id;
    }

    console.log('No existing service item found, creating new one...');

    // Create the service item if it doesn't exist
    const itemData = {
      Name: "Dumpster Rental",
      Type: "Service",
      IncomeAccountRef: {
        value: "1", // You'll need to set this to your income account ID
        name: "Services"
      }
    };

    console.log('Creating service item with data:', JSON.stringify(itemData, null, 2));

    const createResponse = await fetch(`${QB_BASE_URL}/v3/company/${companyId}/item`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(itemData)
    });

    const createData = await createResponse.json();
    
    // ADD DETAILED LOGGING
    console.log('Service item creation response:', JSON.stringify(createData, null, 2));
    
    if (!createResponse.ok) {
      console.error('Failed to create service item:', createData);
      return "1"; // Fallback to a default item ID
    }

    // Check if response has the expected structure
    if (!createData.QueryResponse || !createData.QueryResponse.Item) {
      console.error('Unexpected service item response structure:', createData);
      return "1"; // Fallback
    }

    console.log('Created new service item:', createData.QueryResponse.Item[0].Id);
    return createData.QueryResponse.Item[0].Id;

  } catch (error) {
    console.error('Error with service item:', error);
    return "1"; // Fallback to a default item ID
  }
}

export async function getInvoiceDetails(invoiceId) {
  try {
    const { accessToken, companyId } = await getQBAuth();

    const response = await fetch(
      `${QB_BASE_URL}/v3/company/${companyId}/invoice/${invoiceId}`, 
      {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Accept': 'application/json'
        }
      }
    );

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(`Failed to get invoice: ${JSON.stringify(data)}`);
    }

    return data.QueryResponse.Invoice[0];

  } catch (error) {
    console.error('Error getting invoice details:', error);
    throw error;
  }
}

async function getQBAuth(skipTimeCheck = false) {
  const { data: qbAuth } = await supabase
    .from('quickbooks_auth')
    .select('*')
    .single();

  if (!qbAuth || !qbAuth.access_token) {
    throw new Error('QuickBooks not connected');
  }

  // Only check expiration if we're not skipping it (after a refresh)
  if (!skipTimeCheck) {
    const needsRefresh = qbAuth.expires_at ? Date.now() > new Date(qbAuth.expires_at).getTime() : false;
    
    if (needsRefresh) {
      console.log('Token expired based on timestamp, refreshing...');
      await refreshAccessToken();
      // Get updated auth after refresh
      const { data: updatedAuth } = await supabase
        .from('quickbooks_auth')
        .select('*')
        .single();
      
      console.log('Using refreshed token');
      
      return {
        accessToken: updatedAuth.access_token,
        companyId: updatedAuth.company_id
      };
    }
  }

  console.log('Using existing token');
  
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

    console.log('Attempting token refresh...');
    
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
    
    // Enhanced logging for debugging
    console.log('Refresh response status:', refreshResponse.status);
    console.log('Refresh response data:', tokenData);

    if (!refreshResponse.ok) {
      throw new Error(`Token refresh failed: ${tokenData.error_description || tokenData.error || JSON.stringify(tokenData)}`);
    }

    // Calculate new expiration time
    const expiresAt = new Date(Date.now() + (tokenData.expires_in * 1000));

    // Update stored tokens
    await supabase
      .from('quickbooks_auth')
      .update({
        access_token: tokenData.access_token,
        refresh_token: tokenData.refresh_token || qbAuth.refresh_token, // Some responses don't include new refresh token
        expires_at: expiresAt.toISOString()
      });

    console.log('QB tokens refreshed successfully, expires at:', expiresAt);

  } catch (error) {
    console.error('Token refresh failed:', error);
    throw error;
  }
}