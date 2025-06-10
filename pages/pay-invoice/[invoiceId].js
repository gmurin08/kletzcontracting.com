// /pages/pay-invoice/[invoiceId].js
import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function PayInvoice({ booking, invoice }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    cardNumber: '',
    expMonth: '',
    expYear: '',
    cvc: '',
    name: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: 'US'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/process-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          invoiceId: router.query.invoiceId,
          bookingId: booking.id,
          amount: invoice.amount,
          card: formData
        }),
      });

      const result = await response.json();

      if (response.ok) {
        // Redirect to success page
        router.push(`/payment-success?bookingId=${booking.id}&paymentId=${result.paymentId}`);
      } else {
        setError(result.error || 'Payment failed. Please try again.');
      }
    } catch (err) {
      setError('Payment failed. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  const formatPrice = (amount) => `$${amount.toFixed(2)}`;
  const formatDate = (dateString) => new Date(dateString).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <>
      <Head>
        <title>Complete Your Payment - Kletz Contracting</title>
        <meta name="description" content="Complete your dumpster rental payment securely" />
      </Head>

      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
      }}>
        <div style={{
          background: 'white',
          borderRadius: '16px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
          maxWidth: '600px',
          width: '100%',
          overflow: 'hidden'
        }}>
          {/* Header */}
          <div style={{
            background: 'linear-gradient(135deg, #2196F3, #21CBF3)',
            color: 'white',
            padding: '30px',
            textAlign: 'center'
          }}>
            <img 
              src="https://storage.googleapis.com/msgsndr/3xGyNbyyifHaQaEVS0Sx/media/681ba0cc6da8499d97d2cdd0.png" 
              alt="Kletz Contracting" 
              style={{ maxWidth: '200px', marginBottom: '15px' }}
            />
            <h1 style={{ fontSize: '24px', margin: '0 0 10px 0' }}>Complete Your Payment</h1>
            <p style={{ opacity: 0.9, fontSize: '16px', margin: 0 }}>Secure payment for your dumpster rental</p>
          </div>

          {/* Booking Summary */}
          <div style={{
            background: '#f8f9fa',
            padding: '25px',
            borderBottom: '1px solid #e9ecef'
          }}>
            <h3 style={{ margin: '0 0 15px 0', color: '#333' }}>Booking Summary</h3>
            <div style={{ display: 'grid', gap: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#666' }}>Customer:</span>
                <span style={{ fontWeight: '600' }}>{booking.name}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#666' }}>Dumpster Size:</span>
                <span style={{ fontWeight: '600' }}>{booking.dumpster_size} Yard</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#666' }}>Delivery Date:</span>
                <span style={{ fontWeight: '600' }}>{formatDate(booking.service_date)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#666' }}>Address:</span>
                <span style={{ fontWeight: '600' }}>{booking.address}</span>
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                borderTop: '2px solid #dee2e6',
                paddingTop: '10px',
                marginTop: '10px'
              }}>
                <span style={{ fontSize: '18px', fontWeight: '700' }}>Total Amount:</span>
                <span style={{ fontSize: '18px', fontWeight: '700', color: '#2196F3' }}>
                  {formatPrice(invoice.amount)}
                </span>
              </div>
            </div>
          </div>

          {/* Payment Form */}
          <div style={{ padding: '30px' }}>
            <h3 style={{ margin: '0 0 20px 0', color: '#333' }}>Payment Information</h3>
            
            {error && (
              <div style={{
                background: '#f8d7da',
                color: '#721c24',
                padding: '12px 16px',
                borderRadius: '6px',
                marginBottom: '20px',
                border: '1px solid #f5c6cb'
              }}>
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              {/* Card Number */}
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#333' }}>
                  Card Number
                </label>
                <input
                  type="text"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  placeholder="4112 3441 1234 4113"
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '2px solid #e1e5e9',
                    borderRadius: '8px',
                    fontSize: '16px',
                    transition: 'border-color 0.3s',
                    outline: 'none'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#2196F3'}
                  onBlur={(e) => e.target.style.borderColor = '#e1e5e9'}
                />
              </div>

              {/* Expiry and CVC */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '15px', marginBottom: '20px' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#333' }}>
                    Exp Month
                  </label>
                  <select
                    name="expMonth"
                    value={formData.expMonth}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '2px solid #e1e5e9',
                      borderRadius: '8px',
                      fontSize: '16px',
                      outline: 'none'
                    }}
                  >
                    <option value="">MM</option>
                    {Array.from({length: 12}, (_, i) => i + 1).map(month => (
                      <option key={month} value={month.toString().padStart(2, '0')}>
                        {month.toString().padStart(2, '0')}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#333' }}>
                    Exp Year
                  </label>
                  <select
                    name="expYear"
                    value={formData.expYear}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '2px solid #e1e5e9',
                      borderRadius: '8px',
                      fontSize: '16px',
                      outline: 'none'
                    }}
                  >
                    <option value="">YYYY</option>
                    {Array.from({length: 10}, (_, i) => new Date().getFullYear() + i).map(year => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#333' }}>
                    CVC
                  </label>
                  <input
                    type="text"
                    name="cvc"
                    value={formData.cvc}
                    onChange={handleInputChange}
                    placeholder="123"
                    maxLength="4"
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '2px solid #e1e5e9',
                      borderRadius: '8px',
                      fontSize: '16px',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              {/* Cardholder Name */}
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#333' }}>
                  Cardholder Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '2px solid #e1e5e9',
                    borderRadius: '8px',
                    fontSize: '16px',
                    outline: 'none'
                  }}
                />
              </div>

              {/* Billing Address */}
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#333' }}>
                  Billing Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="123 Main Street"
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '2px solid #e1e5e9',
                    borderRadius: '8px',
                    fontSize: '16px',
                    marginBottom: '15px',
                    outline: 'none'
                  }}
                />
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '15px' }}>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="Pittsburgh"
                    required
                    style={{
                      padding: '12px 16px',
                      border: '2px solid #e1e5e9',
                      borderRadius: '8px',
                      fontSize: '16px',
                      outline: 'none'
                    }}
                  />
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    placeholder="PA"
                    required
                    style={{
                      padding: '12px 16px',
                      border: '2px solid #e1e5e9',
                      borderRadius: '8px',
                      fontSize: '16px',
                      outline: 'none'
                    }}
                  />
                  <input
                    type="text"
                    name="zip"
                    value={formData.zip}
                    onChange={handleInputChange}
                    placeholder="15205"
                    required
                    style={{
                      padding: '12px 16px',
                      border: '2px solid #e1e5e9',
                      borderRadius: '8px',
                      fontSize: '16px',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              {/* Test Card Info */}
              <div style={{
                background: '#e3f2fd',
                border: '1px solid #bbdefb',
                borderRadius: '8px',
                padding: '15px',
                marginBottom: '25px'
              }}>
                <p style={{ margin: '0 0 8px 0', fontWeight: '600', color: '#1976d2', fontSize: '14px' }}>
                  💳 For Testing: Use card number 4112344112344113
                </p>
                <p style={{ margin: 0, fontSize: '13px', color: '#666' }}>
                  Any future expiry date and any 3-digit CVC will work for testing
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                style={{
                  width: '100%',
                  padding: '16px',
                  background: loading ? '#ccc' : 'linear-gradient(135deg, #2196F3, #21CBF3)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '18px',
                  fontWeight: '600',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s',
                  transform: loading ? 'none' : 'translateY(0)',
                }}
                onMouseEnter={(e) => {
                  if (!loading) {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 8px 20px rgba(33, 150, 243, 0.3)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!loading) {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }
                }}
              >
                {loading ? 'Processing Payment...' : `Pay ${formatPrice(invoice.amount)}`}
              </button>
            </form>
          </div>

          {/* Security Notice */}
          <div style={{
            background: '#f8f9fa',
            padding: '20px',
            textAlign: 'center',
            borderTop: '1px solid #e9ecef'
          }}>
            <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>
              🔒 Your payment information is secured and encrypted
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const { invoiceId } = params;
  
  try {
    // Fetch booking and invoice data
    const { createClient } = require('@supabase/supabase-js');
    const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
    
    // Get booking data by QB invoice ID
    const { data: booking, error } = await supabase
      .from('bookings')
      .select('*')
      .eq('qb_invoice_id', invoiceId)
      .eq('status', 'approved')
      .single();

    if (error || !booking) {
      return {
        notFound: true
      };
    }

    // Create invoice object for the UI
    const invoice = {
      id: invoiceId,
      amount: booking.invoice_amount || 380 // fallback amount
    };

    return {
      props: {
        booking,
        invoice
      }
    };
  } catch (error) {
    console.error('Error fetching booking data:', error);
    return {
      notFound: true
    };
  }
}