import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Head from "next/head"
import A2PContactForm from "@/components/elements/A2PContactForm"

// A2P/10DLC opt-in landing page. Deliberately not linked from the header,
// footer or any nav — it is the URL submitted with the messaging campaign
// registration, and it must stay publicly reachable without a login.
export default function ContactUs() {
    return (
        <>
            <Head>
                <title>Contact Us | Kletz Contracting | Pittsburgh Roofing &amp; Remodeling</title>
                <meta name="description" content="Request a free estimate from Kletz Contracting in Pittsburgh, PA. Tell us about your roofing, siding, or remodeling project and choose how you'd like us to follow up." />
                <link rel="canonical" href="https://kletzcontracting.com/contact-us" />
                <meta property="og:title" content="Contact Us | Kletz Contracting" />
                <meta property="og:description" content="Request a free estimate from Kletz Contracting in Pittsburgh, PA." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://kletzcontracting.com/contact-us" />
            </Head>
            <Layout breadcrumbTitle="Contact Us">
                <section className="contact-area pt-120 pb-120">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-6 col-lg-10">
                                <A2PContactForm />
                            </div>

                            <div className="col-xl-6 col-lg-10">
                                <div className="contact-info-wrap">
                                    <h2 className="title">Get in Touch With Our Team</h2>
                                    <p>Have a question about your roof, siding, or a storm damage concern? Reach out today — we're here to help every step of the way.</p>

                                    <div className="contact-info-item">
                                        <div className="icon"><i className="fas fa-phone-alt" /></div>
                                        <div className="content">
                                            <Link href="tel:4122197279">(412) 219-7279</Link>
                                        </div>
                                    </div>

                                    <div className="contact-info-item">
                                        <div className="icon"><i className="fas fa-envelope" /></div>
                                        <div className="content">
                                            <Link href="mailto:john@kletzcontracting.com">john@kletzcontracting.com</Link>
                                        </div>
                                    </div>

                                    <div className="contact-info-item">
                                        <div className="icon"><i className="fas fa-map-marker-alt" /></div>
                                        <div className="content">
                                            <p>Kletz Contracting LLC<br />1468 Old Steubenville Pike, Suite D<br />Pittsburgh, PA 15205</p>
                                        </div>
                                    </div>
                                </div>

                                <div id="contact-map">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3044.552012497637!2d-80.10534048461057!3d40.448048879360986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8834f42f22ef1f3f%3A0x2be65d9c6f442547!2s1468%20Old%20Steubenville%20Pike%20Suite%20D%2C%20Pittsburgh%2C%20PA%2015205!5e0!3m2!1sen!2sus!4v1714678543210"
                                        height={570}
                                        style={{ border: 0, width: "100%" }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Kletz Contracting office location"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}


export async function getStaticProps() {
    return {
      props: {},
    };
  }
