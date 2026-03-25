import Head from "next/head"
import Link from "next/link"
import { useState } from 'react'
import { useRouter } from 'next/router'
import LocalBusinessSchema from "@/components/LocalBusinessSchema"

function QuickForm() {
    const router = useRouter()
    const [form, setForm] = useState({ firstName: '', phone: '', email: '', notes: '' })
    const [submitting, setSubmitting] = useState(false)
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        setSubmitting(true)
        setError('')
        try {
            const res = await fetch('/api/submit-contact-form', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    firstName: form.firstName, lastName: '', email: form.email,
                    phone: form.phone, address: '', city: '', state: '', country: 'US',
                    postalCode: '', notes: form.notes || 'Kitchen remodel inquiry'
                })
            })
            if (res.ok) { router.push('/thank-you') }
            else { setError('Something went wrong. Please call us instead.') }
        } catch { setError('Something went wrong. Please call us instead.') }
        finally { setSubmitting(false) }
    }

    return (
        <form onSubmit={handleSubmit} style={{ backgroundColor: 'rgba(255,255,255,0.95)', padding: '24px', borderRadius: '12px' }}>
            <h3 style={{ color: '#131944', marginBottom: '4px', fontSize: '1.3rem', fontWeight: 700 }}>Get Your Free Estimate</h3>
            <p style={{ color: '#666', fontSize: '0.85rem', marginBottom: '16px' }}>No obligation. Response within 24 hours.</p>
            <input type="text" placeholder="Your Name *" required value={form.firstName} onChange={e => setForm({...form, firstName: e.target.value})}
                style={{ width: '100%', padding: '12px', marginBottom: '10px', borderRadius: '6px', border: '1px solid #ddd', fontSize: '1rem' }} />
            <input type="tel" placeholder="Phone Number *" required value={form.phone} onChange={e => setForm({...form, phone: e.target.value})}
                style={{ width: '100%', padding: '12px', marginBottom: '10px', borderRadius: '6px', border: '1px solid #ddd', fontSize: '1rem' }} />
            <input type="email" placeholder="Email *" required value={form.email} onChange={e => setForm({...form, email: e.target.value})}
                style={{ width: '100%', padding: '12px', marginBottom: '10px', borderRadius: '6px', border: '1px solid #ddd', fontSize: '1rem' }} />
            <textarea placeholder="Tell us about your project (optional)" rows={2} value={form.notes} onChange={e => setForm({...form, notes: e.target.value})}
                style={{ width: '100%', padding: '12px', marginBottom: '12px', borderRadius: '6px', border: '1px solid #ddd', fontSize: '1rem', resize: 'none' }} />
            <button type="submit" disabled={submitting}
                style={{ width: '100%', padding: '14px', backgroundColor: '#E74C3C', color: 'white', border: 'none', borderRadius: '6px', fontSize: '1.1rem', fontWeight: 700, cursor: 'pointer' }}>
                {submitting ? 'Sending...' : 'Get My Free Estimate'}
            </button>
            {error && <p style={{ color: '#E74C3C', marginTop: '8px', fontSize: '0.85rem' }}>{error}</p>}
            <p style={{ color: '#999', fontSize: '0.75rem', marginTop: '8px', marginBottom: 0, textAlign: 'center' }}>
                Or call now: <a href="tel:4122002475" style={{ color: '#E74C3C', fontWeight: 700 }}>(412) 200-2475</a>
            </p>
        </form>
    )
}

export default function KitchenRemodelingPittsburgh() {

    return (
        <>
            <Head>
                <title>Kitchen Remodeling Pittsburgh | Free Estimates | Kletz Contracting</title>
                <meta name="description" content="Transform your kitchen with Pittsburgh's trusted remodeling experts. Custom cabinetry, countertops, flooring & more. Family-owned since 1985. Call (412) 200-2475 for a free estimate!" />
                <meta property="og:title" content="Kitchen Remodeling Pittsburgh | Free Estimates | Kletz Contracting" />
                <meta property="og:description" content="Transform your kitchen with Pittsburgh's trusted remodeling experts. Custom cabinetry, countertops, flooring & more. Family-owned since 1985. Free estimates!" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://kletzcontracting.com/kitchen-remodeling-pittsburgh" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://kletzcontracting.com/kitchen-remodeling-pittsburgh" />
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
                backgroundImage: 'linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url(https://imagen-api-storage.s3.us-east-2.amazonaws.com/kletzcontracting/kletz-banner.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                paddingTop: '50px',
                paddingBottom: '50px',
            }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <h1 style={{ color: 'white', fontSize: '2.8rem', marginBottom: '16px', fontWeight: 700, lineHeight: 1.15 }}>
                                Kitchen Remodeling in Pittsburgh
                            </h1>
                            <h2 style={{ color: 'white', fontSize: '1.3rem', marginBottom: '20px', opacity: '0.9', fontWeight: 400 }}>
                                Create the kitchen your family deserves — from design to completion, we handle everything.
                            </h2>
                            <div style={{ display: 'flex', gap: '12px', marginBottom: '20px', flexWrap: 'wrap' }}>
                                <span style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: 'white', padding: '6px 14px', borderRadius: '20px', fontSize: '0.9rem' }}>
                                    <i className="fas fa-star" style={{color: '#FFD700'}}></i> 4.8-Star Rated
                                </span>
                                <span style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: 'white', padding: '6px 14px', borderRadius: '20px', fontSize: '0.9rem' }}>
                                    <i className="fas fa-shield-alt" style={{color: '#4CAF50'}}></i> Licensed & Insured
                                </span>
                                <span style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: 'white', padding: '6px 14px', borderRadius: '20px', fontSize: '0.9rem' }}>
                                    <i className="fas fa-history" style={{color: '#ffc107'}}></i> Family-Owned Since 1985
                                </span>
                            </div>
                            <div className="d-none d-lg-flex" style={{ gap: '12px' }}>
                                <a href="tel:4122002475" className="btn" style={{ fontSize: '1.1rem', padding: '12px 28px', backgroundColor: '#ffc107', color: '#131944', fontWeight: 700 }}>
                                    <i className="fas fa-phone-alt" style={{ marginRight: '8px' }}></i>
                                    Call (412) 200-2475
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-5 mt-4 mt-lg-0">
                            <QuickForm />
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
                            <h2 className="title">Your Kitchen, Your Way — Built by Experts</h2>
                            <p>We know a kitchen remodel is a big decision. That's why we make the process easy, transparent, and stress-free from start to finish.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <div className="text-center p-4" style={{ backgroundColor: '#f8f9fa', borderRadius: '10px', height: '100%' }}>
                                <i className="fas fa-drafting-compass fa-3x mb-3" style={{color: "#E74C3C"}}></i>
                                <h5>Custom Design Consultation</h5>
                                <p className="mb-0">We work with you to design a kitchen that fits your lifestyle, taste, and budget — no cookie-cutter solutions.</p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="text-center p-4" style={{ backgroundColor: '#f8f9fa', borderRadius: '10px', height: '100%' }}>
                                <i className="fas fa-tools fa-3x mb-3" style={{color: "#E74C3C"}}></i>
                                <h5>Full-Service Remodeling</h5>
                                <p className="mb-0">Cabinets, countertops, flooring, plumbing, electrical, tile — we handle every detail under one roof.</p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="text-center p-4" style={{ backgroundColor: '#f8f9fa', borderRadius: '10px', height: '100%' }}>
                                <i className="fas fa-file-invoice-dollar fa-3x mb-3" style={{color: "#E74C3C"}}></i>
                                <h5>Transparent Pricing</h5>
                                <p className="mb-0">Detailed written estimates with no hidden fees. Financing available to fit your budget.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Do */}
            <section style={{ backgroundColor: '#f8f9fa' }} className="pt-120 pb-90">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 text-center mb-50">
                            <h2 className="title">Complete Kitchen Remodeling Services</h2>
                            <p>From minor updates to complete gut renovations, we transform kitchens across Pittsburgh.</p>
                        </div>
                    </div>
                    <div className="row">
                        {[
                            { icon: 'fa-cabinet-filing', title: 'Custom Cabinetry', desc: 'Semi-custom and custom cabinets in any style — shaker, modern, traditional. Soft-close hardware standard.' },
                            { icon: 'fa-gem', title: 'Countertops', desc: 'Granite, quartz, marble, butcher block — we source and install premium surfaces that last.' },
                            { icon: 'fa-sink', title: 'Plumbing & Fixtures', desc: 'New sinks, faucets, garbage disposals, and dishwasher hookups. All code-compliant work.' },
                            { icon: 'fa-lightbulb', title: 'Electrical & Lighting', desc: 'Recessed lighting, under-cabinet LEDs, new outlets, and upgraded circuits for modern appliances.' },
                            { icon: 'fa-th-large', title: 'Tile & Backsplash', desc: 'Subway tile, mosaic, natural stone — custom backsplash designs that complete your kitchen.' },
                            { icon: 'fa-layer-group', title: 'Flooring', desc: 'Hardwood, luxury vinyl, tile, and more. Durable flooring that stands up to daily kitchen traffic.' }
                        ].map((item, i) => (
                            <div className="col-md-6 col-lg-4 mb-4" key={i}>
                                <div className="p-4" style={{ backgroundColor: 'white', borderRadius: '10px', border: '1px solid #e0e0e0', height: '100%' }}>
                                    <h5><i className={`fas ${item.icon}`} style={{color: '#E74C3C', marginRight: '10px'}}></i>{item.title}</h5>
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
                            <h2 className="title">How Your Kitchen Remodel Works</h2>
                            <p>A clear, proven process so you always know what's happening and what's next.</p>
                        </div>
                    </div>
                    <div className="row">
                        {[
                            { step: '01', title: 'Free In-Home Consultation', desc: 'We visit your home, discuss your vision, take measurements, and provide a detailed estimate — no pressure, no obligation.' },
                            { step: '02', title: 'Design & Material Selection', desc: 'Choose your cabinets, countertops, fixtures, and finishes. We guide you through every option and handle ordering.' },
                            { step: '03', title: 'Expert Construction', desc: 'Our skilled crews handle demolition, framing, plumbing, electrical, and installation with care for your home.' },
                            { step: '04', title: 'Final Walkthrough & Cleanup', desc: 'We do a thorough final inspection with you, ensure everything is perfect, and leave your home spotless.' }
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
                            <h2 style={{ color: 'white' }}>Tired of Your Outdated Kitchen?</h2>
                            <p style={{ color: 'rgba(255,255,255,0.8)' }}>If any of these sound familiar, it's time to talk to Kletz Contracting.</p>
                        </div>
                    </div>
                    <div className="row">
                        {[
                            'Cabinets falling apart or doors that don\'t close',
                            'Countertops that are stained, chipped, or dated',
                            'Not enough counter space or storage',
                            'Appliances that don\'t fit modern needs',
                            'Poor lighting that makes cooking difficult',
                            'A layout that doesn\'t work for your family'
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
                            Get a Free Kitchen Consultation
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
                        <div className="col-xl-6 text-center mb-4">
                            <h2 className="title">Get Your Free Kitchen Remodel Estimate</h2>
                            <p><strong>No obligations. No high-pressure sales. Just honest advice about your kitchen project.</strong></p>
                            <div className="mb-4">
                                <p className="mb-1">&#10003; Free in-home consultation</p>
                                <p className="mb-1">&#10003; Detailed written estimate</p>
                                <p className="mb-1">&#10003; Design guidance included</p>
                                <p className="mb-1">&#10003; Financing options available</p>
                            </div>
                            <QuickForm />
                </div>
            </section>

            {/* Service Areas */}
            <section style={{ backgroundColor: '#f8f9fa', padding: '60px 0' }}>
                <div className="container">
                    <div className="text-center mb-4">
                        <h3>Serving All of Greater Pittsburgh</h3>
                        <p>Kitchen remodeling services throughout Allegheny, Beaver, Butler, and Washington Counties.</p>
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
