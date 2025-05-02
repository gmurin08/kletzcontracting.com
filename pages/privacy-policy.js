import Layout from "@/components/layout/Layout"

export default function PrivacyPolicy() {
    const styles = {
        section: {
            padding: '120px 0',
        },
        container: {
            maxWidth: '900px',
            margin: '0 auto',
            padding: '0 15px',
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
            marginBottom: '20px',
        },
        address: {
            lineHeight: '1.6',
        }
    }

    return (
        <Layout breadcrumbTitle="Privacy Policy">
            <section style={styles.section}>
                <div style={styles.container}>
                    
                    <h2 style={styles.heading}>Privacy Policy</h2>
                    <p style={styles.paragraph}>
                        This Privacy Policy ("Policy") applies to www.kletzcontracting.com, operated by Kletz Contracting ("Company"),
                        and outlines our practices regarding the collection, use, and disclosure of information. By using our website,
                        you agree to the terms described below.
                    </p>

                    <h4 style={styles.subheading}>Information We Collect</h4>
                    <p style={styles.paragraph}>We may collect non-personal demographic information such as your IP address, browser type, access times, and referring website. We do not collect personal information unless you voluntarily provide it through forms, email, or when interacting with our services.</p>
                    <p style={styles.paragraph}>Personal information may be collected when you:</p>
                    <ul style={styles.list}>
                        <li>Contact us via email or forms</li>
                        <li>Submit a quote request</li>
                        <li>Sign up for newsletters or promotions</li>
                        <li>Engage in services or transactions with us</li>
                    </ul>

                    <h4 style={styles.subheading}>Use of Your Information</h4>
                    <p style={styles.paragraph}>Your information is used to:</p>
                    <ul style={styles.list}>
                        <li>Communicate with you regarding your inquiry or service</li>
                        <li>Improve our website and service offerings</li>
                        <li>Provide requested services or respond to your requests</li>
                    </ul>

                    <h4 style={styles.subheading}>Sharing with Third Parties</h4>
                    <p style={styles.paragraph}>We do not sell, rent, or lease your personal information. We may share data with trusted partners who help us perform functions such as customer support or email delivery. These partners are required to maintain the confidentiality of your information.</p>

                    <h4 style={styles.subheading}>Automatically Collected Information</h4>
                    <p style={styles.paragraph}>Our website may automatically collect information such as your IP address, browser type, access times, and referring URLs for analytics and site optimization purposes.</p>

                    <h4 style={styles.subheading}>Cookies</h4>
                    <p style={styles.paragraph}>We use cookies to enhance user experience. You can choose to accept or decline cookies via your browser settings. Declining cookies may limit certain features of the site.</p>

                    <h4 style={styles.subheading}>External Links</h4>
                    <p style={styles.paragraph}>Our website may include links to other sites. We are not responsible for the privacy practices or content of third-party websites.</p>

                    <h4 style={styles.subheading}>Data Security</h4>
                    <p style={styles.paragraph}>We use SSL encryption and follow reasonable practices to protect your personal information. However, no online transmission is 100% secure, and we cannot guarantee absolute security.</p>

                    <h4 style={styles.subheading}>Your Rights</h4>
                    <p style={styles.paragraph}>You have the right to request deletion of your personal data, subject to legal exceptions. Verified requests will be honored to the extent possible under applicable laws.</p>

                    <h4 style={styles.subheading}>Children Under 13</h4>
                    <p style={styles.paragraph}>We do not knowingly collect personal information from children under the age of 13. If you are under 13, please ask a parent or guardian before using this site.</p>

                    <h4 style={styles.subheading}>Email Communication</h4>
                    <p style={styles.paragraph}>We may occasionally contact you via email for promotions, updates, or surveys. You may opt out of these communications at any time.</p>

                    <h4 style={styles.subheading}>Policy Changes</h4>
                    <p style={styles.paragraph}>We may update this Privacy Policy to reflect changes in our practices or legal requirements. You will be notified of significant changes via this page or email if you have provided contact details.</p>

                    <h4 style={styles.subheading}>Contact Information</h4>
                    <p style={styles.paragraph}>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
                    <address style={styles.address}>
                        <strong>Kletz Contracting</strong><br />
                        1468 Old Steubenville Pike, Suite D<br />
                        Pittsburgh, PA 15205<br />
                        Email: <a href="mailto:john@kletzcontracting.com">john@kletzcontracting.com</a><br />
                        Phone: <a href="tel:4122002475">(412) 200-2475</a><br />
                        <br />
                        <em>Effective Date: January 1, 2024</em>
                    </address>
                </div>
            </section>
        </Layout>
    )
}
