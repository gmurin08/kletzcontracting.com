import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function ThankYou() {
    return (
        <>
            <Layout breadcrumbTitle="Thank You">
                <section className="contact-area pt-120 pb-120">
                    <div className="container">
                        <div className="row justify-content-center">
                            {/* Thank You Content */}
                            <div className="col-xl-6 col-lg-10">
                                <div className="contact-form-wrap" data-background="/assets/img/images/contact_form_bg.jpg">
                                    <div>
                                        <img
                                            src="/assets/img/logo/kletz.png"
                                            alt="Kletz Contracting Logo"
                                            style={{ width: '150px', paddingBottom: '30px' }}
                                        />
                                    </div>
                                    <h2 className="title">Thanks for Booking Your Dumpster with Kletz!</h2>
                                    <p style={{ fontSize: '16px', marginBottom: '24px' }}>
                                        We've received your request and our team is currently reviewing the details.
                                    </p>

                                    <div style={{
                                        backgroundColor: 'rgba(232, 245, 253, 0.64)',
                                        borderLeft: '4px solid #0288d1',
                                        padding: '16px',
                                        marginTop: '24px',
                                        marginBottom: '24px'
                                    }}>
                                        <h2 style={{
                                            fontSize: '20px',
                                            fontWeight: '600',
                                            color: '#01579b',
                                            marginTop: '0'
                                        }}>What to Expect Next</h2>
                                        <ol style={{
                                            marginLeft: '24px',
                                            marginTop: '12px',
                                            marginBottom: '12px'
                                        }}>
                                            <li style={{ marginBottom: '8px' }}>
                                                Our staff will confirm availability and finalize your booking details.
                                            </li>
                                            <li style={{ marginBottom: '8px' }}>
                                                You’ll receive a follow-up via email or phone with delivery timing and instructions.
                                            </li>
                                            <li style={{ marginBottom: '8px' }}>
                                                If needed, we’ll reach out to clarify any additional information.
                                            </li>
                                        </ol>
                                    </div>

                                    <p style={{ marginTop: '24px', fontStyle: 'italic' }}>
                                        If you have any questions in the meantime, feel free to email us at{' '}
                                        <strong>dumpsters@kletzcontracting.com</strong> or call<br />
                                        <strong>(412) 200-2475</strong>.
                                    </p>
                                </div>
                            </div>

                            {/* Contact Info & Map */}
                            <div className="col-xl-6 col-lg-10">
                                <div className="contact-info-wrap">
                                    <h2 className="title">Need Help?</h2>
                                    <p>Have questions about your rental or need to make changes? Get in touch with our local support team.</p>

                                    <div className="contact-info-item">
                                        <div className="icon"><i className="fas fa-phone-alt" /></div>
                                        <div className="content">
                                            <Link href="tel:4122002475">(412) 200-2475</Link>
                                        </div>
                                    </div>

                                    <div className="contact-info-item">
                                        <div className="icon"><i className="fas fa-envelope" /></div>
                                        <div className="content">
                                            <Link href="mailto:dumpsters@kletzcontracting.com">dumpsters@kletzcontracting.com</Link>
                                        </div>
                                    </div>

                                    <div className="contact-info-item">
                                        <div className="icon"><i className="fas fa-map-marker-alt" /></div>
                                        <div className="content">
                                            <p>1468 Old Steubenville Pike, Suite D<br />Pittsburgh, PA 15205</p>
                                        </div>
                                    </div>
                                </div>


                            </div>
                            
                        </div>
                                                        {/* Google Map */}
                                <div style={{paddingTop:'20px'}}id="contact-map">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3044.552012497637!2d-80.10534048461057!3d40.448048879360986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8834f42f22ef1f3f%3A0x2be65d9c6f442547!2s1468%20Old%20Steubenville%20Pike%20Suite%20D%2C%20Pittsburgh%2C%20PA%2015205!5e0!3m2!1sen!2sus!4v1714678543210"
                                        height={570}
                                        style={{ border: 0, width: "100%" }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    />
                                </div>
                    </div>
                </section>
            </Layout>
        </>
    );
}

export async function getStaticProps() {
    return {
        props: {},
    };
}
