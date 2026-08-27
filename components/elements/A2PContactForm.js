import { useState, useEffect } from 'react';
import SmsConsent, { consentFields, emptyConsent } from './SmsConsent';

const A2PContactForm = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const styles = {
    formContainer: {
      backgroundColor: '#f5f7fb',
      borderRadius: '8px',
      maxWidth: '800px',
      margin: '0 auto',
      overflow: 'hidden',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    },
    formBody: {
      padding: '30px',
      backgroundColor: 'rgba(255, 255, 255, 0)'
    },
    formRow: {
      display: 'flex',
      marginBottom: '20px',
      flexDirection: isMobile ? 'column' : 'row',
      gap: isMobile ? '10px' : '20px'
    },
    formGroup: {
      flex: 1,
      marginBottom: '20px'
    },
    formGroupInRow: {
      flex: 1,
      marginBottom: isMobile ? '15px' : 0
    },
    label: {
      display: 'block',
      marginBottom: '5px',
      fontWeight: 500,
      color: '#333',
      fontSize: '14px'
    },
    formControl: {
      width: '100%',
      padding: '10px 15px',
      border: '1px solid #ddd',
      borderRadius: '4px',
      fontSize: '16px',
      transition: 'border-color 0.3s'
    },
    inputError: {
      borderColor: '#ff0000'
    },
    errorMessage: {
      color: '#ff0000',
      fontSize: '12px',
      marginTop: '5px'
    },
    submitBtn: {
      backgroundColor: '#b90504',
      color: 'white',
      border: 'none',
      padding: '12px 25px',
      borderRadius: '4px',
      fontSize: '16px',
      fontWeight: 600,
      cursor: 'pointer',
      transition: 'background-color 0.3s',
      width: '70%',
      textTransform: 'uppercase'
    },
    submitBtnDisabled: {
      backgroundColor: '#ccc',
      cursor: 'not-allowed'
    },
    errorBanner: {
      backgroundColor: '#ffebee',
      color: '#b71c1c',
      padding: '10px 15px',
      borderRadius: '4px',
      marginBottom: '20px',
      fontSize: '14px'
    },
    successMessage: {
      textAlign: 'center',
      padding: '30px 0'
    },
    successTitle: {
      color: '#2e7d32',
      marginBottom: '10px'
    },
    privacyLinks: {
      textAlign: 'center',
      marginTop: '15px',
      fontSize: '12px',
      color: '#666'
    },
    privacyLink: {
      color: '#666',
      textDecoration: 'underline'
    }
  };

  const emptyForm = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    state: '',
    country: 'United States',
    postalCode: '',
    notes: '',
    ...emptyConsent
  };

  const [formData, setFormData] = useState(emptyForm);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.firstName) errors.firstName = 'First name is required';
    if (!formData.phone) errors.phone = 'Phone number is required';
    if (!formData.email) errors.email = 'Email is required';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Mirrors the GA id lookup in MainContact so this page reports conversions
  // the same way the rest of the site does.
  const readGaIds = () => {
    let ga_client_id = null;
    let ga_session_id = null;
    if (typeof window === 'undefined') return { ga_client_id, ga_session_id };

    try {
      const gaCookie = document.cookie.split(';').find((c) => c.trim().startsWith('_ga='));
      if (gaCookie) {
        const parts = gaCookie.split('.');
        if (parts.length >= 4) ga_client_id = `${parts[2]}.${parts[3]}`;
      }
      const ga4SessionCookie = document.cookie.split(';').find((c) => c.trim().startsWith('_ga_'));
      if (ga4SessionCookie) ga_session_id = Date.now().toString();
    } catch (error) {
      console.log('Could not retrieve GA client/session ID:', error);
    }
    return { ga_client_id, ga_session_id };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const { ga_client_id, ga_session_id } = readGaIds();

      const response = await fetch('/api/submit-contact-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          source: 'contact-us-a2p',
          ...consentFields(formData),
          ga_client_id,
          ga_session_id
        })
      });

      if (!response.ok) throw new Error('Form submission failed');

      setSubmitSuccess(true);
      setFormData(emptyForm);
    } catch (error) {
      setSubmitError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      style={{
        ...styles.formContainer,
        backgroundImage: 'url(/assets/img/images/contact_form_bg.jpg)'
      }}
    >
      <div style={{ height: isMobile ? 'auto' : '320px', position: 'relative', overflow: 'hidden' }}>
        <img
          src="/assets/img/banner/contact_banner.png"
          alt="Kletz Contracting"
          style={{
            width: '100%',
            height: isMobile ? 'auto' : '100%',
            objectFit: isMobile ? 'contain' : 'cover',
            maxWidth: '100%',
            display: 'block'
          }}
        />
      </div>

      <div style={styles.formBody}>
        {submitSuccess ? (
          <div style={styles.successMessage}>
            <div>
              <img
                src="/assets/img/logo/kletz.png"
                alt="Kletz Contracting Logo"
                style={{ width: '150px', paddingBottom: '30px' }}
              />
            </div>
            <h2 style={styles.successTitle}>Thanks — we got your request.</h2>
            <p style={{ fontSize: '16px', marginBottom: '24px' }}>
              A project manager will reach out within one business day to talk through your project
              and schedule a free estimate.
            </p>
            <p style={{ marginTop: '24px', fontStyle: 'italic' }}>
              Need us sooner? Email <strong>john@kletzcontracting.com</strong> or call{' '}
              <br />
              <strong>(412) 219-7279</strong>.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div style={styles.formRow}>
              <div style={styles.formGroupInRow}>
                <label htmlFor="firstName" style={styles.label}>First Name *</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  style={{ ...styles.formControl, ...(formErrors.firstName ? styles.inputError : {}) }}
                  required
                />
                {formErrors.firstName && <div style={styles.errorMessage}>{formErrors.firstName}</div>}
              </div>
              <div style={styles.formGroupInRow}>
                <label htmlFor="lastName" style={styles.label}>Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  style={styles.formControl}
                />
              </div>
            </div>

            <div style={styles.formRow}>
              <div style={styles.formGroupInRow}>
                <label htmlFor="phone" style={styles.label}>Mobile Phone *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  style={{ ...styles.formControl, ...(formErrors.phone ? styles.inputError : {}) }}
                  required
                />
                {formErrors.phone && <div style={styles.errorMessage}>{formErrors.phone}</div>}
              </div>
              <div style={styles.formGroupInRow}>
                <label htmlFor="email" style={styles.label}>Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  style={{ ...styles.formControl, ...(formErrors.email ? styles.inputError : {}) }}
                  required
                />
                {formErrors.email && <div style={styles.errorMessage}>{formErrors.email}</div>}
              </div>
            </div>

            <div style={styles.formGroup}>
              <label htmlFor="address" style={styles.label}>Service Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Address"
                style={styles.formControl}
              />
            </div>

            <div style={styles.formRow}>
              <div style={styles.formGroupInRow}>
                <label htmlFor="city" style={styles.label}>City</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="City"
                  style={styles.formControl}
                />
              </div>
              <div style={styles.formGroupInRow}>
                <label htmlFor="state" style={styles.label}>State</label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="State"
                  style={styles.formControl}
                />
              </div>
            </div>

            <div style={styles.formRow}>
              <div style={styles.formGroupInRow}>
                <label htmlFor="country" style={styles.label}>Country</label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  style={styles.formControl}
                >
                  <option value="United States">United States</option>
                  <option value="Canada">Canada</option>
                </select>
              </div>
              <div style={styles.formGroupInRow}>
                <label htmlFor="postalCode" style={styles.label}>Postal Code</label>
                <input
                  type="text"
                  id="postalCode"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                  placeholder="Postal Code"
                  style={styles.formControl}
                />
              </div>
            </div>

            <div style={styles.formGroup}>
              <label htmlFor="notes" style={styles.label}>Tell us about your project</label>
              <textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                placeholder="Roof replacement, storm damage, siding, remodel..."
                style={styles.formControl}
                rows="4"
              ></textarea>
            </div>

            <SmsConsent
              smsOptIn={formData.smsOptIn}
              smsMarketingOptIn={formData.smsMarketingOptIn}
              onChange={handleChange}
            />

            {submitError && <div style={styles.errorBanner}>{submitError}</div>}

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <button
                type="submit"
                style={{ ...styles.submitBtn, ...(isSubmitting ? styles.submitBtnDisabled : {}) }}
                disabled={isSubmitting}
                onMouseOver={(e) => {
                  if (!isSubmitting) e.currentTarget.style.backgroundColor = '#990403';
                }}
                onMouseOut={(e) => {
                  if (!isSubmitting) e.currentTarget.style.backgroundColor = '#b90504';
                }}
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </div>

            <div style={styles.privacyLinks}>
              <a href="/privacy-policy" style={styles.privacyLink}>Privacy Policy</a>
              {' | '}
              <a href="/terms-and-conditions" style={styles.privacyLink}>Terms of Service</a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default A2PContactForm;
