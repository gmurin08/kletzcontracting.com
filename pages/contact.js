import Layout from "@/components/layout/Layout"
import Link from "next/link"
import MainContact from "@/components/elements/MainContact"
import useMobileResponse from "@/hooks/useMobileResponse"
import Head from "next/head";
export default function Contact() {
    const isMobile = useMobileResponse()
    return (
        <>
            <Head>
                <title>Contact Kletz Contracting | Pittsburgh Roofing & Remodeling | Free Estimates</title>
                <meta name="description" content="Contact Kletz Contracting for professional roofing, siding, and remodeling services in Pittsburgh, PA. Call (412) 200-2475 for free estimates. Licensed contractors serving Allegheny County, Beaver County, and Washington County." />
                <meta property="og:title" content="Contact Kletz Contracting | Pittsburgh Roofing & Remodeling | Free Estimates" />
                <meta property="og:description" content="Contact Kletz Contracting for professional roofing, siding, and remodeling services in Pittsburgh, PA. Call (412) 200-2475 for free estimates. Licensed contractors serving Allegheny County, Beaver County, and Washington County." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://kletzcontracting.com/contact" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Contact Kletz Contracting | Pittsburgh Roofing & Remodeling | Free Estimates" />
                <meta name="twitter:description" content="Contact Kletz Contracting for professional roofing, siding, and remodeling services in Pittsburgh, PA. Call (412) 200-2475 for free estimates. Licensed contractors serving Allegheny County, Beaver County, and Washington County." />
            </Head>
            <Layout breadcrumbTitle="Contact Us">
                <section className="contact-area pt-120 pb-120">
                    <div className="container">
                        <div className="row justify-content-center">
                            {/* Contact Form */}
                            <div className="col-xl-6 col-lg-10">
                                        {/* <div>
                                            <img src="/assets/img/logo/kletz.png" alt="Kletz Contracting Logo"
                                            style={{width:'150px', paddingBottom:'30px'}} />
                                        </div>
                                        <h2 className="title">Let’s Talk About Your Project</h2>
                                        <p>Whether it’s a roof replacement, emergency repair, or exterior upgrade — tell us what you need. We’ll respond within one business day.</p> */}
                                    {/* <form action="#" className="contact-form">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-grp">
                                                    <input id="firstName" type="text" placeholder="First Name*" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-grp">
                                                    <input id="lastName" type="text" placeholder="Last Name*" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-grp">
                                                    <input id="email" type="email" placeholder="Email Address*" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-grp">
                                                    <input id="phone" type="text" placeholder="Phone Number*" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-grp">
                                            <input id="subject" type="text" placeholder="Subject" />
                                        </div>
                                        <div className="form-grp">
                                            <textarea id="message" placeholder="Your Message here" />
                                        </div>
                                        <button className="btn" type="submit">Send Message</button>
                                    </form> */}
                                    {/* <iframe
                                        src="https://api.leadconnectorhq.com/widget/form/54Quvx8AZl6lfePNAsrR"
                                        style={{ 
                                            width: "100%", 
                                            border: "none", 
                                            borderRadius: "3px" 
                                        }}
                                        id="inline-54Quvx8AZl6lfePNAsrR"
                                        data-layout='{"id":"INLINE"}'
                                        data-trigger-type="alwaysShow"
                                        data-trigger-value=""
                                        data-activation-type="alwaysActivated"
                                        data-activation-value=""
                                        data-deactivation-type="neverDeactivate"
                                        data-deactivation-value=""
                                        data-form-name="Main Contact Form"
                                        data-layout-iframe-id="inline-54Quvx8AZl6lfePNAsrR"
                                        data-form-id="54Quvx8AZl6lfePNAsrR"
                                        title="Main Contact Form"
                                        />

<script src="https://link.msgsndr.com/js/form_embed.js" async></script> */}
                            <MainContact/>

                            </div>

                            {/* Contact Info & Map */}
                            <div className="col-xl-6 col-lg-10">
                                <div className="contact-info-wrap">
                                <h2 className="title">Get in Touch With Our Team</h2>
                                <p>Have a question about your roof, siding, or a storm damage concern? Reach out today — we're here to help every step of the way.</p>
                                
                                            <div className="contact-info-item" >
                                                <div className="icon"><i className="fas fa-phone-alt" /></div>
                                                <div className="content">
                                                <Link href="tel:4122002475">(412) 200-2475</Link>
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
                                                <p>1468 Old Steubenville Pike, Suite D<br />Pittsburgh, PA 15205</p>

                                                </div>
                                            </div>
                            
                                </div>

                                {/* Google Map */}
                                <div id="contact-map">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3044.552012497637!2d-80.10534048461057!3d40.448048879360986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8834f42f22ef1f3f%3A0x2be65d9c6f442547!2s1468%20Old%20Steubenville%20Pike%20Suite%20D%2C%20Pittsburgh%2C%20PA%2015205!5e0!3m2!1sen!2sus!4v1714678543210"
                                        height={570}
                                        style={{ border: 0, width: "100%" }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    />
                                </div>
                                {/* End Map */}
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
      props: {}, // you can pass props here if needed
    };
  }
  