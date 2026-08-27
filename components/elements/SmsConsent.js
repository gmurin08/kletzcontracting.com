// Single source of truth for the site's SMS/A2P consent capture.
//
// The wording, the split between informational and promotional consent, and the
// unchecked-by-default behavior are what carriers review during A2P/10DLC
// registration — so every form that collects consent renders this component
// rather than its own copy of the text.

// The exact consent wording shown next to each checkbox. Exported so the text
// stored on the CRM contact is provably the text the customer saw.
export const INFORMATIONAL_CONSENT =
  'By checking this box, I agree to receive informational SMS messages from Kletz Contracting ' +
  '(Kletz Contracting LLC) about my inquiry, estimate, scheduled appointments, and project updates. ' +
  'Message frequency varies. Message and data rates may apply. Reply STOP to opt out or HELP for help.';

export const MARKETING_CONSENT =
  'By checking this box, I agree to receive promotional and marketing SMS messages from Kletz Contracting ' +
  '(Kletz Contracting LLC), including seasonal service reminders and special offers. Message frequency varies ' +
  'and will not exceed 2 messages per month. Message and data rates may apply. Reply STOP to opt out or HELP ' +
  'for help. Consent is not a condition of purchase.';

// The consent half of a form's submit body. Only the wording actually agreed to
// is sent, so the CRM record never claims a consent the customer didn't give.
export function consentFields({ smsOptIn, smsMarketingOptIn }) {
  return {
    smsOptIn: !!smsOptIn,
    smsMarketingOptIn: !!smsMarketingOptIn,
    consentLanguage: {
      informational: smsOptIn ? INFORMATIONAL_CONSENT : null,
      marketing: smsMarketingOptIn ? MARKETING_CONSENT : null
    },
    consentPageUrl: typeof window !== 'undefined' ? window.location.href : null
  };
}

// The empty consent state, so forms can reset without restating the field names.
export const emptyConsent = {
  smsOptIn: false,
  smsMarketingOptIn: false
};

const styles = {
  consentBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
    border: '1px solid #e0e0e0',
    borderRadius: '4px',
    padding: '20px',
    marginBottom: '20px'
  },
  formCheck: {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '18px'
  },
  formCheckInput: {
    marginTop: '4px',
    marginRight: '10px',
    flexShrink: 0
  },
  formCheckLabel: {
    fontSize: '13px',
    lineHeight: 1.5,
    color: '#333'
  },
  finePrint: {
    fontSize: '12px',
    lineHeight: 1.5,
    color: '#555',
    margin: 0
  },
  link: {
    color: '#555',
    textDecoration: 'underline'
  }
};

// Both boxes start unchecked and neither is required to submit — consent must
// never be a condition of the request.
const SmsConsent = ({ smsOptIn, smsMarketingOptIn, onChange }) => (
  <div style={styles.consentBox}>
    <div style={styles.formCheck}>
      <input
        type="checkbox"
        id="smsOptIn"
        name="smsOptIn"
        checked={smsOptIn}
        onChange={onChange}
        style={styles.formCheckInput}
      />
      <label htmlFor="smsOptIn" style={styles.formCheckLabel}>
        {INFORMATIONAL_CONSENT}
      </label>
    </div>

    <div style={styles.formCheck}>
      <input
        type="checkbox"
        id="smsMarketingOptIn"
        name="smsMarketingOptIn"
        checked={smsMarketingOptIn}
        onChange={onChange}
        style={styles.formCheckInput}
      />
      <label htmlFor="smsMarketingOptIn" style={styles.formCheckLabel}>
        {MARKETING_CONSENT}
      </label>
    </div>

    <p style={styles.finePrint}>
      You must be 18 or older. Carriers are not liable for delayed or undelivered messages. We do not
      sell or share your mobile number with third parties for their marketing purposes. View our{' '}
      <a href="/terms-and-conditions" style={styles.link} target="_blank" rel="noopener noreferrer">
        Terms of Service
      </a>{' '}
      and{' '}
      <a href="/privacy-policy" style={styles.link} target="_blank" rel="noopener noreferrer">
        Privacy Policy
      </a>
      .
    </p>
  </div>
);

export default SmsConsent;
