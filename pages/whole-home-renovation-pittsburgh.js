import Head from "next/head"
import Link from "next/link"
import { useState } from 'react'
import MainContact from "@/components/elements/MainContact"
import LocalBusinessSchema from "@/components/LocalBusinessSchema"

export default function WholeHomeRenovationPittsburgh() {

    return (
        <>
            <Head>
                <title>Whole Home Renovation Pittsburgh | Complete Remodeling | Kletz Contracting</title>
                <meta name="description" content="Complete whole home renovations in Pittsburgh. Kitchen, bathrooms, flooring, additions & more — all under one roof. Family-owned since 1985. Call (412) 200-2475 for a free estimate!" />
                <meta property="og:title" content="Whole Home Renovation Pittsburgh | Complete Remodeling | Kletz Contracting" />
                <meta property="og:description" content="Complete whole home renovations in Pittsburgh. Kitchen, bathrooms, flooring, additions & more — all under one roof. Free estimates!" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://kletzcontracting.com/whole-home-renovation-pittsburgh" />
                <meta name="robots" content="noindex, nofollow" />
            </Head>
            <LocalBusinessSchema />

            {/* Header Bar */}
            <div style={{backgroundColor:'black', padding: '20px 0'}}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-6">
                            <img src="/assets/img/logo/kletz-logo-rs.svg" alt="Kletz Contracting" style={{ maxWidth: '200px' }} />
                        </div>
                        <div className="col-6 text-end">
                            <a href="tel:4122002475" style={{ color: '#ffc107', fontSize: '1.3rem', fontWeight: 'bold', textDecoration: 'none' }}>
                                <i className="fas fa-phone-alt" style={{ marginRight: '8px' }}></i>
                                (412) 200-2475
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <section style={{
                backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(/assets/img/services/renovation-main.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '550px',
                paddingTop: '60px',
                paddingBottom: '60px',
                display: 'flex',
                alignItems: 'center'
            }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8">
                            <h1 style={{ color: 'white', fontSize: '3rem', marginBottom: '20px', fontWeight: 700 }}>
                                Whole Home Renovation in Pittsburgh
                            </h1>
                            <h2 style={{ color: 'white', fontSize: '1.4rem', marginBottom: '25px', opacity: '0.9', fontWeight: 400 }}>
                                One contractor, one vision, one team — transform your entire home from top to bottom.
                            </h2>
                            <div style={{ display: 'flex', gap: '15px', marginBottom: '30px', flexWrap: 'wrap' }}>
                                <span style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: 'white', padding: '8px 16px', borderRadius: '20px', fontSize: '0.95rem' }}>
                                    <i className="fas fa-star" style={{color: '#FFD700'}}></i> 4.8-Star Rated
                                </span>
                                <span style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: 'white', padding: '8px 16px', borderRadius: '20px', fontSize: '0.95rem' }}>
                                    <i className="fas fa-shield-alt" style={{color: '#4CAF50'}}></i> Licensed & Insured
                                </span>
                                <span style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: 'white', padding: '8px 16px', borderRadius: '20px', fontSize: '0.95rem' }}>
                                    <i className="fas fa-history" style={{color: '#ffc107'}}></i> Family-Owned Since 1985
                                </span>
                            </div>
                            <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                                <a href="#contact-form" className="btn btn-two" style={{ fontSize: '1.1rem', padding: '14px 30px' }}>
                                    Get Your Free Estimate
                                </a>
                                <a href="tel:4122002475" className="btn" style={{ fontSize: '1.1rem', padding: '14px 30px' }}>
                                    Call (412) 200-2475
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Bar */}
            <section style={{ backgroundColor: '#131944', padding: '20px 0' }}>
                <div className="container">
                    <div className="row text-center">
                        <div className="col-md-3 col-6 mb-2 mb-md-0">
                            <div style={{ color: 'white' }}>
                                <h3 style={{ color: '#ffc107', marginBottom: '0' }}>40+</h3>
                                <p style={{ marginBottom: 0, fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>Years in Business</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-6 mb-2 mb-md-0">
                            <div style={{ color: 'white' }}>
                                <h3 style={{ color: '#ffc107', marginBottom: '0' }}>500+</h3>
                                <p style={{ marginBottom: 0, fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>Projects Completed</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-6">
                            <div style={{ color: 'white' }}>
                                <h3 style={{ color: '#ffc107', marginBottom: '0' }}>4.8/5</h3>
                                <p style={{ marginBottom: 0, fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>Customer Rating</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-6">
                            <div style={{ color: 'white' }}>
                                <h3 style={{ color: '#ffc107', marginBottom: '0' }}>1 Team</h3>
                                <p style={{ marginBottom: 0, fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>Handles Everything</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="pt-120 pb-90">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 text-center mb-50">
                            <span className="sub-title">Why Pittsburgh Homeowners Choose Kletz</span>
                            <h2 className="title">Your Entire Renovation, One Trusted Team</h2>
                            <p>A whole home renovation is a major undertaking. Having one experienced general contractor manage everything means fewer headaches, better coordination, and a cohesive result.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <div className="text-center p-4" style={{ backgroundColor: '#f8f9fa', borderRadius: '10px', height: '100%' }}>
                                <i className="fas fa-project-diagram fa-3x mb-3" style={{color: "#E74C3C"}}></i>
                                <h5>Single Point of Contact</h5>
                                <p className="mb-0">One project manager coordinates every trade — no chasing down separate contractors for plumbing, electrical, and finishing.</p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="text-center p-4" style={{ backgroundColor: '#f8f9fa', borderRadius: '10px', height: '100%' }}>
                                <i className="fas fa-tasks fa-3x mb-3" style={{color: "#E74C3C"}}></i>
                                <h5>Phased Scheduling</h5>
                                <p className="mb-0">We plan the renovation in logical phases so work flows efficiently and you can live in your home during much of the project.</p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="text-center p-4" style={{ backgroundColor: '#f8f9fa', borderRadius: '10px', height: '100%' }}>
                                <i className="fas fa-home fa-3x mb-3" style={{color: "#E74C3C"}}></i>
                                <h5>Pittsburgh Home Experts</h5>
                                <p className="mb-0">We specialize in Pittsburgh's older homes — Victorian, Colonial, Tudor, Craftsman. We know the quirks and how to work with them.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What's Included */}
            <section style={{ backgroundColor: '#f8f9fa' }} className="pt-120 pb-90">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 text-center mb-50">
                            <h2 className="title">What a Whole Home Renovation Can Include</h2>
                            <p>We customize every project to your goals and budget. Here's what we commonly handle under one contract.</p>
                        </div>
                    </div>
                    <div className="row">
                        {[
                            { title: 'Kitchen Remodeling', desc: 'Custom cabinets, countertops, new layout, appliance placement, lighting, and flooring. The heart of your home, rebuilt.' },
                            { title: 'Bathroom Renovations', desc: 'Master bath, guest baths, powder rooms — custom tile, new fixtures, vanities, and walk-in showers.' },
                            { title: 'Flooring Throughout', desc: 'Hardwood, luxury vinyl plank, tile, or carpet — consistent, beautiful flooring that ties your whole home together.' },
                            { title: 'Structural Changes', desc: 'Open up floor plans, remove walls, add headers, reconfigure rooms. We handle engineering and permits.' },
                            { title: 'Electrical & Plumbing', desc: 'Panel upgrades, new circuits, updated plumbing, fixture relocation, and code-compliant work throughout.' },
                            { title: 'Exterior & More', desc: 'Siding, roofing, windows, decks, and additions — complete your renovation from the inside out.' }
                        ].map((item, i) => (
                            <div className="col-md-6 col-lg-4 mb-4" key={i}>
                                <div className="p-4" style={{ backgroundColor: 'white', borderRadius: '10px', border: '1px solid #e0e0e0', height: '100%' }}>
                                    <h5>{item.title}</h5>
                                    <p className="mb-0">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="pt-120 pb-90">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 text-center mb-50">
                            <span className="sub-title">Our Process</span>
                            <h2 className="title">How Your Whole Home Renovation Works</h2>
                        </div>
                    </div>
                    <div className="row">
                        {[
                            { step: '01', title: 'Discovery & Consultation', desc: 'We walk your entire home with you, discuss your vision for every room, identify priorities, and establish a realistic budget range.' },
                            { step: '02', title: 'Design & Planning', desc: 'Detailed scope of work, material selections, phased timeline, and all permits. You approve everything before we start.' },
                            { step: '03', title: 'Phased Construction', desc: 'We work room by room or zone by zone to minimize disruption. Daily updates keep you informed on progress.' },
                            { step: '04', title: 'Final Walkthrough', desc: 'Room-by-room inspection together, punch list completion, and thorough cleanup. Your transformed home is ready to enjoy.' }
                        ].map((item, i) => (
                            <div className="col-md-6 col-lg-3 mb-4" key={i}>
                                <div className="text-center p-4">
                                    <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#E74C3C', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 15px', fontSize: '1.3rem', fontWeight: 700 }}>
                                        {item.step}
                                    </div>
                                    <h5>{item.title}</h5>
                                    <p className="mb-0">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pain Points */}
            <section style={{ backgroundColor: '#131944', padding: '80px 0' }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 text-center mb-50">
                            <h2 style={{ color: 'white' }}>Ready to Fall in Love With Your Home Again?</h2>
                            <p style={{ color: 'rgba(255,255,255,0.8)' }}>If your home needs more than just one room fixed, a whole home renovation might be the answer.</p>
                        </div>
                    </div>
                    <div className="row">
                        {[
                            'Recently purchased a fixer-upper that needs everything',
                            'Your home\'s style is stuck in the \'80s or \'90s',
                            'Multiple rooms need updating and you want a cohesive look',
                            'Tired of doing one small project at a time over years',
                            'Want to modernize an older Pittsburgh home without losing its charm',
                            'Planning to age in place and need accessibility updates throughout'
                        ].map((item, i) => (
                            <div className="col-md-6 mb-3" key={i}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <i className="fas fa-check-circle" style={{ color: '#4CAF50', fontSize: '1.2rem', flexShrink: 0 }}></i>
                                    <p style={{ color: 'white', marginBottom: 0 }}>{item}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-4">
                        <a href="#contact-form" className="btn btn-two" style={{ fontSize: '1.1rem', padding: '14px 30px' }}>
                            Get a Free Renovation Consultation
                        </a>
                    </div>
                </div>
            </section>

            {/* Guarantee */}
            <section style={{ backgroundColor: '#E74C3C', padding: '50px 0' }}>
                <div className="container text-center">
                    <h3 style={{ color: 'white', marginBottom: '15px' }}>Our 100% Satisfaction Guarantee</h3>
                    <p className="lead" style={{ color: 'white', marginBottom: '5px' }}>If you're not completely satisfied with our work, we'll make it right — guaranteed.</p>
                    <p style={{ color: 'rgba(255,255,255,0.9)' }}>Backed by 40+ years serving Pittsburgh homeowners.</p>
                </div>
            </section>

            {/* Contact Form */}
            <section className="pt-120 pb-120" id="contact-form">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 text-center mb-4">
                            <h2 className="title">Get Your Free Whole Home Renovation Estimate</h2>
                            <p><strong>No obligations. No high-pressure sales. Just honest advice about transforming your home.</strong></p>
                            <div className="mb-4">
                                <p className="mb-1">&#10003; Free in-home consultation</p>
                                <p className="mb-1">&#10003; One team manages everything</p>
                                <p className="mb-1">&#10003; Phased approach to minimize disruption</p>
                                <p className="mb-1">&#10003; Financing options available</p>
                            </div>
                        </div>
                    </div>
                    <MainContact />
                </div>
            </section>

            {/* Service Areas */}
            <section style={{ backgroundColor: '#f8f9fa', padding: '60px 0' }}>
                <div className="container">
                    <div className="text-center mb-4">
                        <h3>Serving All of Greater Pittsburgh</h3>
                        <p>Whole home renovation services throughout Allegheny, Beaver, Butler, and Washington Counties.</p>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
                        {['Pittsburgh', 'Mt. Lebanon', 'Upper St. Clair', 'Bethel Park', 'Cranberry Township', 'Wexford', 'Peters Township', 'Moon Township', 'Robinson Township', 'Sewickley', 'South Fayette', 'Pine Township'].map((city, i) => (
                            <div key={i} style={{ backgroundColor: 'white', padding: '12px 16px', borderRadius: '8px', border: '1px solid #dee2e6', textAlign: 'center', fontSize: '0.95rem' }}>
                                {city}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer style={{ backgroundColor: '#1C1C1C', padding: '30px 0' }}>
                <div className="container text-center">
                    <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '10px', fontSize: '0.9rem' }}>
                        &copy; {new Date().getFullYear()} Kletz Contracting LLC | 1468 Old Steubenville Pike, Suite D, Pittsburgh, PA 15205
                    </p>
                    <p style={{ marginBottom: 0 }}>
                        <a href="tel:4122002475" style={{ color: '#ffc107', textDecoration: 'none', fontWeight: 'bold' }}>(412) 200-2475</a>
                        <span style={{ color: 'rgba(255,255,255,0.4)', margin: '0 15px' }}>|</span>
                        <a href="mailto:john@kletzcontracting.com" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>john@kletzcontracting.com</a>
                    </p>
                </div>
            </footer>
        </>
    )
}

export async function getStaticProps() {
    return { props: {} }
}
