import Head from "next/head"
import Link from "next/link"
import { useState } from 'react'
import MainContact from "@/components/elements/MainContact"
import LocalBusinessSchema from "@/components/LocalBusinessSchema"

export default function HomeAdditionsPittsburgh() {

    return (
        <>
            <Head>
                <title>Home Additions Pittsburgh | Room Additions | Kletz Contracting</title>
                <meta name="description" content="Need more space? Pittsburgh's trusted home addition contractor. Room additions, second stories, sunrooms & more. Family-owned since 1985. Call (412) 219-7279 for a free estimate!" />
                <meta property="og:title" content="Home Additions Pittsburgh | Room Additions | Kletz Contracting" />
                <meta property="og:description" content="Need more space? Pittsburgh's trusted home addition contractor. Room additions, second stories, sunrooms & more. Free estimates!" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://kletzcontracting.com/home-additions-pittsburgh" />
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
                backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(/assets/img/services/additions-main.jpg)',
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
                                Home Additions in Pittsburgh
                            </h1>
                            <h2 style={{ color: 'white', fontSize: '1.4rem', marginBottom: '25px', opacity: '0.9', fontWeight: 400 }}>
                                More space for your growing family — seamlessly integrated additions that look like they were always there.
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
                                <h3 style={{ color: '#ffc107', marginBottom: '0' }}>All Permits</h3>
                                <p style={{ marginBottom: 0, fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>Handled For You</p>
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
                            <h2 className="title">Expand Your Home Without the Headaches</h2>
                            <p>A home addition is one of the biggest investments you'll make. We handle every detail — from permits to final paint — so you don't have to.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <div className="text-center p-4" style={{ backgroundColor: '#f8f9fa', borderRadius: '10px', height: '100%' }}>
                                <i className="fas fa-home fa-3x mb-3" style={{color: "#E74C3C"}}></i>
                                <h5>Seamless Integration</h5>
                                <p className="mb-0">Your addition will match your existing home's style, roofline, and finishes — it'll look like it was always there.</p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="text-center p-4" style={{ backgroundColor: '#f8f9fa', borderRadius: '10px', height: '100%' }}>
                                <i className="fas fa-hard-hat fa-3x mb-3" style={{color: "#E74C3C"}}></i>
                                <h5>Full Design-Build Service</h5>
                                <p className="mb-0">One team handles design, engineering, permits, construction, and finishing. No juggling multiple contractors.</p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="text-center p-4" style={{ backgroundColor: '#f8f9fa', borderRadius: '10px', height: '100%' }}>
                                <i className="fas fa-file-contract fa-3x mb-3" style={{color: "#E74C3C"}}></i>
                                <h5>Permits & Code Compliance</h5>
                                <p className="mb-0">We handle all Pittsburgh-area permits and inspections. Expert knowledge of local building codes and zoning.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Types of Additions */}
            <section style={{ backgroundColor: '#f8f9fa' }} className="pt-120 pb-90">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 text-center mb-50">
                            <h2 className="title">Home Addition Services We Offer</h2>
                            <p>Whether you need an extra bedroom, a bigger kitchen, or a whole new floor — we build it right.</p>
                        </div>
                    </div>
                    <div className="row">
                        {[
                            { title: 'Room Additions', desc: 'Extra bedrooms, family rooms, home offices, or bonus rooms. Custom-built to your exact specifications.' },
                            { title: 'Second Story Additions', desc: 'Double your living space by going up. We reinforce foundations and build structurally sound second floors.' },
                            { title: 'Kitchen Extensions', desc: 'Expand your kitchen footprint for more counter space, a breakfast nook, or an open-concept layout.' },
                            { title: 'Sunrooms & 4-Season Rooms', desc: 'Enjoy natural light year-round with a heated and cooled sunroom addition connected to your home.' },
                            { title: 'In-Law Suites', desc: 'Complete living quarters with bedroom, bathroom, kitchenette, and private entrance for family or rental income.' },
                            { title: 'Garage Additions', desc: 'Attached or detached garages, including bonus rooms above. Full electrical and optional heating.' }
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
                            <h2 className="title">How Your Home Addition Works</h2>
                        </div>
                    </div>
                    <div className="row">
                        {[
                            { step: '01', title: 'Free Consultation & Site Visit', desc: 'We assess your property, discuss your needs, review zoning requirements, and provide a ballpark budget range.' },
                            { step: '02', title: 'Design & Engineering', desc: 'Detailed plans, structural engineering, and material selections. We submit for permits and handle all approvals.' },
                            { step: '03', title: 'Construction', desc: 'Foundation, framing, roofing, siding, windows, HVAC, electrical, plumbing — our crews handle it all.' },
                            { step: '04', title: 'Final Inspections & Move-In', desc: 'We pass all inspections, complete finishing touches, and do a walkthrough before you enjoy your new space.' }
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
                            <h2 style={{ color: 'white' }}>Running Out of Space?</h2>
                            <p style={{ color: 'rgba(255,255,255,0.8)' }}>Don't move — improve. A home addition may be the smarter, more affordable option.</p>
                        </div>
                    </div>
                    <div className="row">
                        {[
                            'Kids sharing bedrooms and need their own space',
                            'Working from home and need a dedicated office',
                            'Aging parents moving in and need an in-law suite',
                            'Kitchen or living room feels cramped for your family',
                            'Love your neighborhood but need a bigger house',
                            'Want to increase your home\'s value with added square footage'
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
                            Get a Free Addition Consultation
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
                            <h2 className="title">Get Your Free Home Addition Estimate</h2>
                            <p><strong>No obligations. No high-pressure sales. Just honest advice about expanding your home.</strong></p>
                            <div className="mb-4">
                                <p className="mb-1">&#10003; Free on-site consultation</p>
                                <p className="mb-1">&#10003; Full design-build service</p>
                                <p className="mb-1">&#10003; All permits handled for you</p>
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
                        <p>Home addition services throughout Allegheny, Beaver, Butler, and Washington Counties.</p>
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
