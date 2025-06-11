import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Head from "next/head"
import { useState } from 'react'

export default function DumpsterRentalPittsburgh() {
    const [isPopupOpen, setPopupOpen] = useState(false)

    const openPopup = (e) => {
        e.preventDefault()
        setPopupOpen(true)
        document.body.style.overflow = 'hidden'
    }

    const closePopup = () => {
        setPopupOpen(false)
        document.body.style.overflow = 'auto'
    }

    return (
        <>
            <Head>
                <title>Dumpster Rental Pittsburgh | Same Day Delivery | Kletz Contracting</title>
                <meta name="description" content="Need a dumpster rental in Pittsburgh? Same day delivery available! Professional waste management for construction, renovation, cleanouts. Call (412) 200-2475 for instant quote!" />
                <meta property="og:title" content="Dumpster Rental Pittsburgh | Same Day Delivery | Kletz Contracting" />
                <meta property="og:description" content="Need a dumpster rental in Pittsburgh? Same day delivery available! Professional waste management for construction, renovation, cleanouts. Call (412) 200-2475 for instant quote!" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://kletzcontracting.com/dumpster-rental-pittsburgh" />
                <meta name="robots" content="noindex, nofollow" />
            </Head>

                <div style={{backgroundColor:'black', height:"140px"}}>
                                                <div className="col-lg-4">
                                <div style={{ textAlign: 'left', paddingTop:"20px"}}>
                                    <img src="/assets/img/logo/kletz-logo-rs.svg" alt="Kletz Contracting" style={{ maxWidth: '200px' }} />
                                </div>
                            </div>
                </div>
                {/* Hero Section */}
                <section className="banner-area-three" style={{
                    backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/assets/img/dumpsters/blue-trash-dump.webp)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '600px',
                    paddingTop: '60px',
                    paddingBottom: '60px'
                }}>
                    <div className="container">
                        <div className="row align-items-center" style={{ minHeight: '600px' }}>
                            <div className="col-lg-8">
                                <div className="banner-content-three">
                                    <h1 className="title" style={{ color: 'white', fontSize: '3.5rem', marginBottom: '20px' }}>
                                        Pittsburgh Dumpster Rental
                                    </h1>
                                    <h2 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '30px', opacity: '0.9' }}>
                                        Professional Waste Management for Your Project
                                    </h2>
                                    <div style={{ marginBottom: '40px' }}>
                                        <a href="tel:4122002475" style={{
                                            display: 'inline-block',
                                            fontSize: '1.8rem',
                                            fontWeight: 'bold',
                                            color: '#ffc107',
                                            textDecoration: 'none',
                                            marginBottom: '20px'
                                        }}>
                                            <i className="fas fa-phone-alt" style={{ marginRight: '10px' }}></i>
                                            (412) 200-2475
                                        </a>
                                        <p style={{ fontSize: '1.2rem', color: 'white', opacity: '0.9' }}>
                                            Same day delivery available • Fair pricing • Local Pittsburgh company
                                        </p>
                                    </div>
                                    <div className="banner-btn">
                                        <button onClick={openPopup} className="btn btn-two" style={{ marginRight: '15px' }}>
                                            Get Free Quote
                                        </button>
                                        <a href="tel:4122002475" className="btn">
                                            Call Now
                                        </a>
                                    </div>
                                </div>
                            </div>
  
                        </div>
                    </div>
                </section>

                {/* What You Can Accomplish Section */}
                <section className="services-area-three pt-120 pb-90">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-6">
                                <div className="section-title text-center mb-50">
                                    <span className="sub-title">Project Solutions</span>
                                    <h2 className="title">What You Can Accomplish</h2>
                                    <p>From small home projects to major renovations, we have the right dumpster to keep your project moving forward efficiently.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="services-item-three">
                                    <div className="services-thumb-three">
                                        <img src="/assets/img/dumpsters/blue-behind-house.webp" alt="Home Renovation Cleanup" />
                                    </div>
                                    <div className="services-content-three">
                                        <h2 className="title"><Link href="#renovation">Complete Home Renovations</Link></h2>
                                        <p>Kitchen remodels, bathroom updates, flooring projects, and whole-house makeovers. Keep debris contained and your project on schedule.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="services-item-three">
                                    <div className="services-thumb-three">
                                        <img src="/assets/img/dumpsters/green-jobsite.webp" alt="Construction Projects" />
                                    </div>
                                    <div className="services-content-three">
                                        <h2 className="title"><Link href="#construction">Construction & Building</Link></h2>
                                        <p>New construction, additions, deck builds, and commercial projects. Professional waste management for contractors and builders.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="services-item-three">
                                    <div className="services-thumb-three">
                                        <img src="/assets/img/dumpsters/blue-dumped.webp" alt="Property Cleanouts" />
                                    </div>
                                    <div className="services-content-three">
                                        <h2 className="title"><Link href="#cleanout">Property Cleanouts</Link></h2>
                                        <p>Estate cleanouts, moving preparation, decluttering projects, and seasonal cleaning. Make space for what matters most.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="services-item-three">
                                    <div className="services-thumb-three">
                                        <img src="/assets/img/dumpsters/blue-dropping.webp" alt="Roofing Projects" />
                                    </div>
                                    <div className="services-content-three">
                                        <h2 className="title"><Link href="#roofing">Roofing & Exterior Work</Link></h2>
                                        <p>Roof replacements, siding projects, gutter work, and exterior renovations. Safely dispose of old materials and debris.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="services-item-three">
                                    <div className="services-thumb-three">
                                        <img src="/assets/img/dumpsters/green-low.webp" alt="Landscaping Projects" />
                                    </div>
                                    <div className="services-content-three">
                                        <h2 className="title"><Link href="#landscaping">Landscaping & Yard Work</Link></h2>
                                        <p>Tree removal, garden cleanup, hardscaping projects, and outdoor renovations. Transform your outdoor space with ease.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="services-item-three">
                                    <div className="services-thumb-three">
                                        <img src="/assets/img/dumpsters/red-jobsite.webp" alt="Emergency Cleanup" />
                                    </div>
                                    <div className="services-content-three">
                                        <h2 className="title"><Link href="#emergency">Storm & Emergency Cleanup</Link></h2>
                                        <p>Storm damage cleanup, emergency debris removal, and disaster recovery. Fast response when you need it most.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="about-area-three" style={{ 
                    backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/assets/img/dumpsters/blue-trash-dump.webp)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="about-img-three">
                                    {/* <img src="/assets/img/dumpsters/blue-plain.webp" alt="Professional Dumpster Service" /> */}
                                </div>
                            </div>
                            <div className="col-lg-6" style={{paddingTop:'20px', paddingBottom:"20px"}}>
                                <div className="about-content-three">
                                    <div className="section-title mb-20">
                                        <span className="sub-title" style={{color:'red'}}>Why Choose Kletz</span>
                                        <h2 className="title" style={{color:'white'}}>Pittsburgh's Trusted Dumpster Service</h2>
                                    </div>
                                    <p style={{color:'white'}}>With over 25 years serving the Pittsburgh area, we understand local projects and provide reliable waste management solutions for homeowners and contractors alike.</p>
                                    <div className="about-list-three" style={{color:'white'}}>
                                        <ul className="list-wrap">
                                            <li><i className="fas fa-check-circle"></i>Same day delivery available in most areas</li>
                                            <li><i className="fas fa-check-circle"></i>Transparent pricing with no hidden fees</li>
                                            <li><i className="fas fa-check-circle"></i>Local Pittsburgh company with real customer service</li>
                                            <li><i className="fas fa-check-circle"></i>Responsible disposal and recycling practices</li>
                                            <li><i className="fas fa-check-circle"></i>Flexible rental periods to match your timeline</li>
                                            <li><i className="fas fa-check-circle"></i>Professional delivery and pickup service</li>
                                        </ul>
                                    </div>
                                    <div className="about-btn" style={{paddingTop:"20px"}}>
                                        <button onClick={openPopup} className="btn btn-two">Get Your Quote</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Service Process */}
                <section className="work-area-three pt-120 pb-90">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-6">
                                <div className="section-title text-center mb-50">
                                    <span className="sub-title">Simple Process</span>
                                    <h2 className="title">How It Works</h2>
                                    <p>Getting your dumpster is simple and straightforward. We handle the details so you can focus on your project.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="work-item-three">
                                    <div className="work-thumb-three">
                                        <img src="/assets/img/icon/checklist_icon.svg" alt="" />
                                        <span>01</span>
                                    </div>
                                    <div className="work-content-three">
                                        <h2 className="title">Tell Us Your Project</h2>
                                        <p>Call or complete our online form. Describe your project and we'll recommend the perfect dumpster solution.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="work-item-three">
                                    <div className="work-thumb-three">
                                        <img src="/assets/img/icon/calendar_icon.svg" alt="" />
                                        <span>02</span>
                                    </div>
                                    <div className="work-content-three">
                                        <h2 className="title">Schedule Delivery</h2>
                                        <p>Choose a delivery time that works for your schedule. Same day delivery available in most Pittsburgh areas.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="work-item-three">
                                    <div className="work-thumb-three">
                                        <img src="/assets/img/icon/work_icon.svg" alt="" />
                                        <span>03</span>
                                    </div>
                                    <div className="work-content-three">
                                        <h2 className="title">Complete Your Project</h2>
                                        <p>Focus on your project while we handle the waste. Fill the dumpster at your own pace during your rental period.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="work-item-three">
                                    <div className="work-thumb-three">
                                        <img src="/assets/img/icon/right_arrow.svg" alt="" />
                                        <span>04</span>
                                    </div>
                                    <div className="work-content-three">
                                        <h2 className="title">We Pick It Up</h2>
                                        <p>When you're done, we'll pick up the dumpster and handle proper disposal and recycling of materials.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Service Areas */}
                <section className="counter-area-two" style={{ backgroundColor: '#f8f9fa' }}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-6">
                                <div className="section-title text-center mb-50">
                                    <span className="sub-title">Service Areas</span>
                                    <h2 className="title">Serving All of Pittsburgh Area</h2>
                                    <p>Fast, reliable delivery throughout Allegheny, Beaver, Butler, and Washington Counties.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div style={{ 
                                    display: 'grid', 
                                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
                                    gap: '20px',
                                    marginBottom: '40px'
                                }}>
                                    {[
                                        'Pittsburgh', 'Mt. Lebanon', 'Upper St. Clair', 'Bethel Park',
                                        'Cranberry Township', 'Mars', 'Wexford', 'Peters Township',
                                        'McMurray', 'Canonsburg', 'Moon Township', 'Sewickley',
                                        'Robinson Township', 'South Fayette', 'Pine Township', 'Washington',
                                        'Coraopolis', 'Imperial', 'Gibsonia', 'Allison Park'
                                    ].map((city, index) => (
                                        <div key={index} style={{
                                            backgroundColor: 'white',
                                            padding: '15px 20px',
                                            borderRadius: '8px',
                                            border: '1px solid #dee2e6',
                                            fontSize: '1rem',
                                            color: '#495057',
                                            textAlign: 'center',
                                            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                                        }}>
                                            {city}
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="appointment-area-two">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12"  style={{marginTop:"180px"}}>
                                <div className="appointment-inner-two" style={{
                                    backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(/assets/img/dumpsters/blue-front-drop.webp)',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}>
                                    <div className="row align-items-center" >
                                        <div className="col-lg-8" >
                                            <div className="appointment-content">
                                                <h2 className="title" style={{ color: 'white' }}>Ready to Get Started?</h2>
                                                <p style={{ color: 'white', opacity: '0.9' }}>Get your dumpster delivered today and keep your project moving forward.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="appointment-btn">
                                                <button onClick={openPopup} className="btn btn-two">Get Free Quote</button>
                                                <div style={{ marginTop: '15px' }}>
                                                    <a href="tel:4122002475" style={{
                                                        color: '#ffc107',
                                                        fontSize: '1.2rem',
                                                        fontWeight: 'bold',
                                                        textDecoration: 'none'
                                                    }}>
                                                        <i className="fas fa-phone-alt" style={{ marginRight: '8px' }}></i>
                                                        (412) 200-2475
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Form Section */}
                <section className="contact-area pt-120 pb-120">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="section-title text-center mb-50">
                                    <span className="sub-title">Get Your Quote</span>
                                    <h2 className="title">Free Dumpster Rental Quote</h2>
                                    <p>Fill out the form below and we'll get back to you within 30 minutes with your custom quote.</p>
                                </div>
                                
                                <div className="contact-form-wrap" style={{marginTop:'-100px', marginLeft:"-60px", marginRight:"-60px", marginBottom:"-200px"}}>
                                    <iframe
                                        src="https://api.leadconnectorhq.com/widget/form/qadJo73H9q9PUqz0RjrA"
                                        style={{width: '100%', height: '615px', border: 'none', borderRadius: '4px'}}
                                        id="inline-qadJo73H9q9PUqz0RjrA" 
                                        data-layout='{"id":"INLINE"}'
                                        data-trigger-type="alwaysShow"
                                        data-trigger-value=""
                                        data-activation-type="alwaysActivated"
                                        data-activation-value=""
                                        data-deactivation-type="neverDeactivate"
                                        data-deactivation-value=""
                                        data-form-name="Dumpsters"
                                        data-height="615"
                                        data-layout-iframe-id="inline-qadJo73H9q9PUqz0RjrA"
                                        data-form-id="qadJo73H9q9PUqz0RjrA"
                                        title="Dumpsters"
                                    />
                                    <script src="https://link.msgsndr.com/js/form_embed.js"></script>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            {/* Popup Form */}
            {isPopupOpen && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    zIndex: 9999,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '20px'
                }}>
                    <div style={{
                        backgroundColor: 'white',
                        borderRadius: '10px',
                        maxWidth: '500px',
                        width: '100%',
                        maxHeight: '80vh',
                        overflow: 'auto',
                        position: 'relative'
                    }}>
                        <button onClick={closePopup} style={{
                            position: 'absolute',
                            top: '15px',
                            right: '15px',
                            background: 'none',
                            border: 'none',
                            fontSize: '24px',
                            cursor: 'pointer',
                            zIndex: 10000
                        }}>
                            ×
                        </button>
                        
                        <div style={{ padding: '30px', marginLeft:"-40px", marginRight:"-40px", marginTop:"10px"}}>
                            <h3 style={{ textAlign: 'center', marginBottom: '0px', color: '#333' }}>
                                Get Your Free Dumpster Quote
                            </h3>
                            
                            <div>
                                <iframe
                                    src="https://api.leadconnectorhq.com/widget/form/qadJo73H9q9PUqz0RjrA"
                                    style={{width: '100%', height: '537px', border: 'none', borderRadius: '4px'}}
                                    id="popup-qadJo73H9q9PUqz0RjrA" 
                                    data-layout='{"id":"POPUP"}'
                                    data-trigger-type="alwaysShow"
                                    data-trigger-value=""
                                    data-activation-type="alwaysActivated"
                                    data-activation-value=""
                                    data-deactivation-type="neverDeactivate"
                                    data-deactivation-value=""
                                    data-form-name="Dumpsters"
                                    data-height="537"
                                    data-layout-iframe-id="popup-qadJo73H9q9PUqz0RjrA"
                                    data-form-id="qadJo73H9q9PUqz0RjrA"
                                    title="Dumpsters"
                                />
                                <script src="https://link.msgsndr.com/js/form_embed.js"></script>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export async function getStaticProps() {
    return {
        props: {},
    };
}