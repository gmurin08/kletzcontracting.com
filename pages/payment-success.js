// /pages/payment-success.js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function PaymentSuccess() {
  const router = useRouter();
  const { bookingId, paymentId } = router.query;
  const [booking, setBooking] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (bookingId) {
      fetchBookingDetails();
    }
  }, [bookingId]);

  const fetchBookingDetails = async () => {
    try {
      const response = await fetch(`/api/get-booking?id=${bookingId}`);
      if (response.ok) {
        const data = await response.json();
        setBooking(data);
      }
    } catch (error) {
      console.error('Error fetching booking:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => new Date(dateString).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <>
      <Head>
        <title>Payment Successful - Kletz Contracting</title>
        <meta name="description" content="Your payment has been processed successfully" />
      </Head>

      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)',
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
          overflow: 'hidden',
          textAlign: 'center'
        }}>
          {/* Success Header */}
          <div style={{
            background: 'linear-gradient(135deg, #28a745, #20c997)',
            color: 'white',
            padding: '40px 30px',
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              background: 'rgba(255,255,255,0.2)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px',
              fontSize: '40px'
            }}>
              ✅
            </div>
            <h1 style={{ fontSize: '28px', margin: '0 0 10px 0' }}>Payment Successful!</h1>
            <p style={{ opacity: 0.9, fontSize: '18px', margin: 0 }}>
              Your dumpster rental is confirmed and ready for delivery
            </p>
          </div>

          {/* Content */}
          <div style={{ padding: '40px 30px' }}>
            {loading ? (
              <div style={{ padding: '20px', color: '#666' }}>
                Loading booking details...
              </div>
            ) : booking ? (
              <>
                <div style={{
                  background: '#f8f9fa',
                  borderRadius: '12px',
                  padding: '25px',
                  marginBottom: '30px',
                  textAlign: 'left'
                }}>
                  <h3 style={{ margin: '0 0 20px 0', color: '#333', textAlign: 'center' }}>
                    Booking Confirmation
                  </h3>
                  
                  <div style={{ display: 'grid', gap: '12px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #e9ecef' }}>
                      <span style={{ color: '#666' }}>Booking ID:</span>
                      <span style={{ fontWeight: '600' }}>{booking.id}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #e9ecef' }}>
                      <span style={{ color: '#666' }}>Customer:</span>
                      <span style={{ fontWeight: '600' }}>{booking.name}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #e9ecef' }}>
                      <span style={{ color: '#666' }}>Dumpster Size:</span>
                      <span style={{ fontWeight: '600' }}>{booking.dumpster_size} Yard</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #e9ecef' }}>
                      <span style={{ color: '#666' }}>Delivery Date:</span>
                      <span style={{ fontWeight: '600' }}>{formatDate(booking.service_date)}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #e9ecef' }}>
                      <span style={{ color: '#666' }}>Address:</span>
                      <span style={{ fontWeight: '600' }}>{booking.address}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0' }}>
                      <span style={{ color: '#666' }}>Amount Paid:</span>
                      <span style={{ fontWeight: '600', color: '#28a745' }}>${booking.payment_amount}</span>
                    </div>
                  </div>
                </div>

                {paymentId && (
                  <div style={{
                    background: '#e8f5e8',
                    border: '1px solid #d4edda',
                    borderRadius: '8px',
                    padding: '20px',
                    marginBottom: '30px'
                  }}>
                    <p style={{ margin: '0 0 8px 0', fontWeight: '600', color: '#155724' }}>
                      Payment ID: {paymentId}
                    </p>
                    <p style={{ margin: 0, fontSize: '14px', color: '#155724' }}>
                      Save this ID for your records
                    </p>
                  </div>
                )}

                <div style={{
                  background: '#fff3cd',
                  border: '1px solid #ffeaa7',
                  borderRadius: '8px',
                  padding: '20px',
                  marginBottom: '30px'
                }}>
                  <h4 style={{ margin: '0 0 15px 0', color: '#856404' }}>What Happens Next:</h4>
                  <ul style={{ margin: 0, paddingLeft: '20px', textAlign: 'left', color: '#856404' }}>
                    <li>You'll receive a confirmation email with all details</li>
                    <li>We'll contact you the day before delivery with timing</li>
                    <li>Our driver will deliver and place your dumpster</li>
                    <li>Contact us when ready for pickup</li>
                  </ul>
                </div>

                <div style={{ marginBottom: '30px' }}>
                  <p style={{ margin: '0 0 15px 0', fontSize: '16px' }}>
                    Questions about your rental?
                  </p>
                  <p style={{ margin: '0 0 20px 0' }}>
                    <a href="tel:+14123456789" style={{
                      color: '#28a745',
                      textDecoration: 'none',
                      fontWeight: '600',
                      fontSize: '18px'
                    }}>
                      📞 (412) 345-6789
                    </a>
                  </p>
                  <p style={{ margin: 0 }}>
                    <a href={`mailto:info@kletzcontracting.com?subject=Booking ${booking.id} Question`} style={{
                      color: '#28a745',
                      textDecoration: 'none',
                      fontWeight: '600'
                    }}>
                      📧 Email Support
                    </a>
                  </p>
                </div>
              </>
            ) : (
              <div style={{ padding: '20px', color: '#666' }}>
                <p>Unable to load booking details.</p>
                <p>If you have questions, please contact us at (412) 345-6789</p>
              </div>
            )}

            <Link href="/" style={{
              display: 'inline-block',
              padding: '12px 30px',
              background: 'linear-gradient(135deg, #28a745, #20c997)',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '8px',
              fontWeight: '600',
              marginTop: '20px',
              transition: 'transform 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
            onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
            >
              Return to Homepage
            </Link>
          </div>

          {/* Footer */}
          <div style={{
            background: '#f8f9fa',
            padding: '20px',
            borderTop: '1px solid #e9ecef'
          }}>
            <img 
              src="https://storage.googleapis.com/msgsndr/3xGyNbyyifHaQaEVS0Sx/media/681ba0cc6da8499d97d2cdd0.png" 
              alt="Kletz Contracting" 
              style={{ maxWidth: '150px', marginBottom: '10px' }}
            />
            <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>
              Thank you for choosing Kletz Contracting!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}