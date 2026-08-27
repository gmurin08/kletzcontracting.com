import Layout from "@/components/layout/Layout"

export default function TermsAndConditions() {
    const styles = {
        section: {
            padding: '120px 0',
        },
        container: {
            maxWidth: '900px',
            margin: '0 auto',
            padding: '0 15px',
            textAlign: 'left',
        },
        heading: {
            fontSize: '32px',
            fontWeight: '700',
            marginBottom: '30px',
        },
        subheading: {
            fontSize: '20px',
            fontWeight: '600',
            marginTop: '30px',
            marginBottom: '15px',
        },
        paragraph: {
            marginBottom: '20px',
            lineHeight: '1.6',
        },
        list: {
            paddingLeft: '20px',
            listStyleType: 'disc',
            marginBottom: '20px',
        },
        address: {
            lineHeight: '1.6',
        },
    }
    

    return (
        <Layout breadcrumbTitle="Terms & Conditions">
            <section style={styles.section}>
                <div style={styles.container}>
                    <h2 style={styles.heading}>Terms & Conditions</h2>
                    <p style={styles.paragraph}>
                        These Terms and Conditions ("Agreement") govern your use of the www.kletzcontracting.com website ("Site") operated by Kletz Contracting ("Company"). By accessing or using the Site, you agree to be bound by this Agreement.
                    </p>

                    <h4 style={styles.subheading}>Use of the Site</h4>
                    <p style={styles.paragraph}>You agree to use the Site only for lawful purposes and in a way that does not infringe the rights of others or restrict their use and enjoyment of the Site.</p>

                    <h4 style={styles.subheading}>Intellectual Property</h4>
                    <p style={styles.paragraph}>All content, trademarks, and data on this Site, including but not limited to text, graphics, logos, and images, are the property of Kletz Contracting or its content suppliers and are protected by intellectual property laws.</p>

                    <h4 style={styles.subheading}>Limitation of Liability</h4>
                    <p style={styles.paragraph}>Kletz Contracting is not liable for any direct, indirect, incidental, or consequential damages that result from the use of, or inability to use, the Site or the performance of the services offered.</p>

                    <h4 style={styles.subheading}>Third-Party Links</h4>
                    <p style={styles.paragraph}>Our Site may contain links to third-party websites. We are not responsible for the content or privacy practices of these other sites.</p>

                    <h4 style={styles.subheading}>SMS/Text Messaging</h4>
                    <p style={styles.paragraph}>By providing your mobile phone number and opting in, you consent to receive SMS and/or MMS messages from Kletz Contracting (Kletz Contracting LLC) related to your inquiry, estimates, appointment confirmations, project and scheduling updates, customer support, and other operational communications. If you separately opt in to marketing messages, you also consent to receive promotional SMS and/or MMS messages, such as seasonal service reminders and special offers.</p>
                    <ul style={styles.list}>
                        <li>Message frequency varies based on your interaction with our services. Recipients of promotional messages will receive no more than 2 messages per month</li>
                        <li>You may opt out at any time by replying STOP to any message. You may receive a confirmation message confirming your opt-out</li>
                        <li>For assistance, reply HELP or contact us at <a href="mailto:john@kletzcontracting.com">john@kletzcontracting.com</a> or <a href="tel:4122197279">(412) 219-7279</a></li>
                        <li>Message and data rates may apply</li>
                        <li>Consent to receive SMS messages is not a condition of purchase</li>
                        <li>We do not sell or share your mobile number with third parties for their marketing purposes</li>
                        <li>You must be 18 years of age or older to use this SMS service</li>
                        <li>Carriers are not liable for delayed or undelivered messages</li>
                    </ul>

                    <h4 style={styles.subheading}>Changes to This Agreement</h4>
                    <p style={styles.paragraph}>We reserve the right to modify these Terms and Conditions at any time. Any changes will be posted on this page with an updated effective date. Your continued use of the Site signifies your acceptance of any modifications.</p>

                    <h4 style={styles.subheading}>Governing Law</h4>
                    <p style={styles.paragraph}>This Agreement shall be governed in accordance with the laws of the Commonwealth of Pennsylvania, without regard to its conflict of law provisions.</p>

                    <h4 style={styles.subheading}>Contact Information</h4>
                    <p style={styles.paragraph}>If you have any questions about these Terms and Conditions, please contact us at:</p>
                    <address style={styles.address}>
                        <strong>Kletz Contracting</strong><br />
                        1468 Old Steubenville Pike, Suite D<br />
                        Pittsburgh, PA 15205<br />
                        Email: <a href="mailto:john@kletzcontracting.com">john@kletzcontracting.com</a><br />
                        Phone: <a href="tel:4122197279">(412) 219-7279</a><br />
                        <br />
                        <em>Effective Date: January 1, 2024<br />Last Updated: August 27, 2026</em>
                    </address>
                </div>
            </section>
        </Layout>
    )
}


export async function getStaticProps() {
    return {
      props: {}, // you can pass props here if needed
    };
  }
  