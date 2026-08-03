import Head from "next/head"
import Link from "next/link"
import { useState } from 'react'
import MainContact from "@/components/elements/MainContact"
import LocalBusinessSchema from "@/components/LocalBusinessSchema"

export default function BasementRemodelingPittsburgh() {

    return (
        <>
            <Head>
                <title>Basement Finishing Pittsburgh | Basement Remodeling | Kletz Contracting</title>
                <meta name="description" content="Transform your unfinished basement into beautiful living space. Family rooms, home theaters, bars & more. Family-owned since 1985. Call (412) 219-7279 for a free estimate!" />
                <meta property="og:title" content="Basement Finishing Pittsburgh | Basement Remodeling | Kletz Contracting" />
                <meta property="og:description" content="Transform your unfinished basement into beautiful living space. Family rooms, home theaters, bars & more. Free estimates!" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://kletzcontracting.com/basement-remodeling-pittsburgh" />
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
                            <a href="tel:4122197279" style={{ color: '#ffc107', fontSize: '1.3rem', fontWeight: 'bold', textDecoration: 'none' }}>
                                <i className="fas fa-phone-alt" style={{ marginRight: '8px' }}></i>
                                (412) 219-7279
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <section style={{
                backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(/assets/img/services/basement-main.jpg)',
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
                                Basement Finishing in Pittsburgh
                            </h1>
                            <h2 style={{ color: 'white', fontSize: '1.4rem', marginBottom: '25px', opacity: '0.9', fontWeight: 400 }}>
                                Unlock the hidden potential below your home — turn wasted space into your favorite room in the house.
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
                                <a href="tel:4122197279" className="btn" style={{ fontSize: '1.1rem', padding: '14px 30px' }}>
                                    Call (412) 219-7279
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
                                <h3 style={{ color: '#ffc107', marginBottom: '0' }}>100%</h3>
                                <p style={{ marginBottom: 0, fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>Satisfaction Guarantee</p>
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
                            <h2 className="title">Basement Finishing Experts Who Know Pittsburgh Homes</h2>
                            <p>Pittsburgh basements come with unique challenges — moisture, older foundations, low ceilings. We've been solving them for 40+ years.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <div className="text-center p-4" style={{ backgroundColor: '#f8f9fa', borderRadius: '10px', height: '100%' }}>
                                <i className="fas fa-tint-slash fa-3x mb-3" style={{color: "#E74C3C"}}></i>
                                <h5>Moisture & Waterproofing</h5>
                                <p className="mb-0">We assess and address moisture issues before finishing — proper drainage, vapor barriers, and waterproofing included.</p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="text-center p-4" style={{ backgroundColor: '#f8f9fa', borderRadius: '10px', height: '100%' }}>
                                <i className="fas fa-ruler-combined fa-3x mb-3" style={{color: "#E74C3C"}}></i>
                                <h5>Smart Space Planning</h5>
                                <p className="mb-0">We design around support columns, mechanicals, and low ceilings to maximize every square foot of usable space.</p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="text-center p-4" style={{ backgroundColor: '#f8f9fa', borderRadius: '10px', height: '100%' }}>
                                <i className="fas fa-bolt fa-3x mb-3" style={{color: "#E74C3C"}}></i>
                                <h5>Full-Service Build-Out</h5>
                                <p className="mb-0">Framing, electrical, plumbing, HVAC, drywall, flooring, and finishing — all handled by one trusted team.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Build */}
            <section style={{ backgroundColor: '#f8f9fa' }} className="pt-120 pb-90">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 text-center mb-50">
                            <h2 className="title">What Can Your Basement Become?</h2>
                            <p>The possibilities are only limited by your imagination. Here's what Pittsburgh homeowners are building.</p>
                        </div>
                    </div>
                    <div className="row">
                        {[
                            { title: 'Family & Entertainment Room', desc: 'Open-concept living space with comfortable flooring, recessed lighting, and room for the whole family.' },
                            { title: 'Home Theater', desc: 'Soundproofed walls, tiered seating, dedicated wiring for surround sound, and dimmable lighting.' },
                            { title: 'Wet Bar & Game Room', desc: 'Custom bar with sink, mini-fridge rough-in, countertops, and space for pool table or game area.' },
                            { title: 'Home Office / Studio', desc: 'Quiet, private workspace with proper lighting, electrical for equipment, and climate control.' },
                            { title: 'Guest Suite / In-Law', desc: 'Full bedroom, bathroom, and kitchenette for guests or aging parents. Includes egress window if needed.' },
                            { title: 'Home Gym / Playroom', desc: 'Durable flooring, reinforced walls for equipment, proper ventilation, and kid-friendly finishes.' }
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
                            <h2 className="title">How Your Basement Transformation Works</h2>
                        </div>
                    </div>
                    <div className="row">
                        {[
                            { step: '01', title: 'Free Basement Assessment', desc: 'We inspect for moisture, structural issues, and mechanicals. Then we discuss your vision and provide a detailed estimate.' },
                            { step: '02', title: 'Design & Planning', desc: 'Custom floor plan, material selections, electrical layout, and plumbing placement. Permits pulled and approved.' },
                            { step: '03', title: 'Build-Out & Construction', desc: 'Waterproofing, framing, HVAC, electrical, plumbing, insulation, drywall, flooring, and all finishing work.' },
                            { step: '04', title: 'Final Inspection & Enjoy', desc: 'Code inspections passed, final walkthrough with you, thorough cleanup, and you enjoy your brand new space.' }
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
                            <h2 style={{ color: 'white' }}>Is Your Basement Just Collecting Dust?</h2>
                            <p style={{ color: 'rgba(255,255,255,0.8)' }}>Stop storing junk and start living. Here's why Pittsburgh homeowners are finishing their basements.</p>
                        </div>
                    </div>
                    <div className="row">
                        {[
                            'Need more living space but don\'t want to move',
                            'Kids need a playroom or teens need hangout space',
                            'Want a dedicated home office for remote work',
                            'Dreaming of a home theater or entertainment area',
                            'Need a guest suite for visiting family',
                            'Want to boost your home\'s value — finished basements add 70%+ ROI'
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
                            Get a Free Basement Consultation
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
                            <h2 className="title">Get Your Free Basement Finishing Estimate</h2>
                            <p><strong>No obligations. No high-pressure sales. Just honest advice about your basement project.</strong></p>
                            <div className="mb-4">
                                <p className="mb-1">&#10003; Free in-home basement assessment</p>
                                <p className="mb-1">&#10003; Moisture evaluation included</p>
                                <p className="mb-1">&#10003; Detailed written estimate</p>
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
                        <p>Basement finishing services throughout Allegheny, Beaver, Butler, and Washington Counties.</p>
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
                        <a href="tel:4122197279" style={{ color: '#ffc107', textDecoration: 'none', fontWeight: 'bold' }}>(412) 219-7279</a>
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
