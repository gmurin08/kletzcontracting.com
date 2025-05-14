import { useState, useEffect } from 'react';

const ContactForm = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Styles defined inline
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
    formHeader: {
      height: isMobile ? '300px' : '400px', // Fixed height to ensure visibility
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      color: 'white',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '30px'
    },
    headerOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.6)', // Darker overlay for better text visibility
      zIndex: 1
    },
    formHeaderContent: {
      position: 'relative',
      zIndex: 2,
      width: '100%',
      maxWidth: '600px',
      textAlign: 'center'
    },
    logo: {
      marginBottom: '20px'
    },
    logoImage: {
      maxWidth: isMobile ? '100px' : '150px',
      height: 'auto'
    },
    headerTitle: {
      fontSize: isMobile ? '22px' : '28px',
      fontWeight: 700,
      marginBottom: '15px',
      textTransform: 'uppercase',
      textShadow: '0 2px 4px rgba(0,0,0,0.5)' // Text shadow for better visibility
    },
    headerText: {
      fontSize: isMobile ? '13px' : '16px',
      maxWidth: '100%',
      margin: '0 auto',
      textShadow: '0 1px 2px rgba(0,0,0,0.5)'
    },
    formBody: {
      padding: '30px',
      backgroundColor: 'rgba(255, 255, 255, 0)' // More opaque for better contrast
    },
    formRow: {
      display: 'flex',
      gap: '20px',
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
    formCheck: {
      display: 'flex',
      alignItems: 'flex-start',
      marginBottom: '20px'
    },
    formCheckInput: {
      marginTop: '4px',
      marginRight: '10px'
    },
    formCheckLabel: {
      fontSize: '14px',
      lineHeight: 1.4,
      color: '#333'
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
    submitBtnHover: {
      backgroundColor: '#990403'
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
      textDecoration: 'none'
    }
  };

  const [formData, setFormData] = useState({
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
    agreeToTerms: false
  });

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
    
    if (!formData.phone) errors.phone = 'Phone number is required';
    if (!formData.email) errors.email = 'Email is required';
    // if (!formData.agreeToTerms) errors.agreeToTerms = 'You must agree to the terms';
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Replace with your actual form submission API endpoint
      const response = await fetch('/api/submit-contact-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (!response.ok) throw new Error('Form submission failed');
      
      setSubmitSuccess(true);
      setFormData({
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
        agreeToTerms: false
      });
    } catch (error) {
      setSubmitError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{
      ...styles.formContainer,
      backgroundImage: 'url(/assets/img/images/contact_form_bg.jpg)'
    }}>
      <div style={{
  height: isMobile ? 'auto' : '320px', // Auto height on mobile
  position: 'relative',
  overflow: 'hidden'
}}>
  {/* Image with proper aspect ratio preservation */}
  <img 
    src="/assets/img/banner/contact_banner.png" 
    alt="Contact Banner"
    style={{
      width: '100%',
      height: isMobile ? 'auto' : '100%', // Auto height on mobile
      objectFit: isMobile ? 'contain' : 'cover', // Contain on mobile
      maxWidth: '100%',
      display: 'block' // Remove any extra space
    }}
  />
</div>
      
      <div style={styles.formBody}>
        {submitSuccess ? (
          <div style={styles.successMessage}>
            <h3 style={styles.successTitle}>Thank you for your submission!</h3>
            <p>We'll get back to you as soon as possible.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div style={styles.formRow}>
              <div style={styles.formGroupInRow}>
                <label htmlFor="firstName" style={styles.label}>First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  style={styles.formControl}
                />
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
                <label htmlFor="phone" style={styles.label}>Phone *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  style={{
                    ...styles.formControl,
                    ...(formErrors.phone ? styles.inputError : {})
                  }}
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
                  style={{
                    ...styles.formControl,
                    ...(formErrors.email ? styles.inputError : {})
                  }}
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
                  {/* Add more countries as needed */}
                </select>
              </div>
              <div style={styles.formGroupInRow}>
                <label htmlFor="postalCode" style={styles.label}>Postal code</label>
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
              <label htmlFor="notes" style={styles.label}>Notes</label>
              <textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                placeholder="Notes"
                style={styles.formControl}
                rows="4"
              ></textarea>
            </div>
            
            
            {formErrors.agreeToTerms && <div style={styles.errorMessage}>{formErrors.agreeToTerms}</div>}
            
            {submitError && <div style={styles.errorBanner}>{submitError}</div>}
            <div style={{display:'flex',justifyContent:"center"}}>
            <button 
              type="submit" 
              style={{
                ...styles.submitBtn,
                ...(isSubmitting ? styles.submitBtnDisabled : {})
              }}
              disabled={isSubmitting}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#990403'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#b90504'}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
            </div>
            <div style={styles.privacyLinks}>
              <a href="/privacy-policy" style={styles.privacyLink}>Privacy Policy</a> | <a href="/terms" style={styles.privacyLink}>Terms of Service</a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactForm;