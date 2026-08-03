import Link from "next/link"
import Head from "next/head"

// Dumpster rentals are now run through Kletz Dumpsters — a separate, proprietary
// booking platform. This page is a landing page only; every conversion path
// hands off to kletzdumpsters.com rather than collecting leads here.
const KD_SITE = "https://kletzdumpsters.com"
const KD_BOOK = "https://kletzdumpsters.com/booking"
const KD_SIZES = "https://kletzdumpsters.com/dumpster-sizes"
const KD_SERVICES = {
    residential: "https://kletzdumpsters.com/services/residential",
    commercial: "https://kletzdumpsters.com/services/commercial",
    construction: "https://kletzdumpsters.com/services/construction",
}

const DUMPSTER_SIZES = [
    {
        size: "10 Yard",
        price: "$350",
        image: "/assets/img/dumpsters/kd-10-yard.webp",
        dimensions: "12'L x 8'W x 4'H",
        capacity: "3-4 pickup truck loads",
        description: "Perfect for small renovations, garage cleanouts, and minor landscaping projects.",
        popular: false,
    },
    {
        size: "12 Yard",
        price: "$375",
        image: "/assets/img/dumpsters/kd-12-yard.webp",
        dimensions: "13'L x 8'W x 4'H",
        capacity: "3-4 pickup truck loads",
        description: "A step up from the 10 yard — great for mid-size cleanouts and single-room renovations.",
        popular: true,
    },
    {
        size: "15 Yard",
        price: "$399",
        image: "/assets/img/dumpsters/kd-15-yard.webp",
        dimensions: "14'L x 8'W x 4'H",
        capacity: "4-5 pickup truck loads",
        description: "Our largest size for medium to large cleanouts, renovations, roofing, and yard debris.",
        popular: false,
    },
]

export default function DumpsterRentalPittsburgh() {
    return (
        <>
            <Head>
                <title>Dumpster Rental Pittsburgh | Book Online with Kletz Dumpsters</title>
                <meta name="description" content="Need a dumpster rental in Pittsburgh? Book online in minutes at Kletz Dumpsters — upfront pricing from $350, same day delivery available. Call (412) 219-7279." />
                <meta property="og:title" content="Dumpster Rental Pittsburgh | Book Online with Kletz Dumpsters" />
                <meta property="og:description" content="Need a dumpster rental in Pittsburgh? Book online in minutes at Kletz Dumpsters — upfront pricing from $350, same day delivery available. Call (412) 219-7279." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://kletzcontracting.com/dumpster-rental-pittsburgh" />
                <meta name="robots" content="noindex, nofollow" />
            </Head>

            {/* Brand Bar */}
            <div style={{ backgroundColor: 'black', padding: '20px 0' }}>
                <div className="container">
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
                        <img src="/assets/img/logo/kletz-logo-rs.svg" alt="Kletz Contracting" style={{ maxWidth: '200px' }} />
                        <a href={KD_SITE} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
                            <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                                Dumpsters by
                            </span>
                            <img src="/assets/img/logo/kletz-dumpsters-logo.svg" alt="Kletz Dumpsters" style={{ height: '70px' }} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <section className="banner-area-three" style={{
                backgroundImage: 'linear-gradient(rgba(26,28,30,0.85), rgba(26,28,30,0.85)), url(/assets/img/dumpsters/kd-rolloff-hero.webp)',
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
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '25px' }}>
                                    {['24/7 Online Booking', 'Upfront Pricing', 'Same-Day Delivery'].map((badge, i) => (
                                        <span key={i} style={{
                                            backgroundColor: i === 0 ? '#ce202f' : 'rgba(255,255,255,0.12)',
                                            color: 'white',
                                            padding: '6px 14px',
                                            fontSize: '0.8rem',
                                            fontWeight: '600',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.05em',
                                            borderRadius: '3px'
                                        }}>
                                            {badge}
                                        </span>
                                    ))}
                                </div>
                                <h1 className="title" style={{ color: 'white', fontSize: '3.5rem', marginBottom: '20px' }}>
                                    Pittsburgh Dumpster Rental
                                </h1>
                                <h2 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '30px', opacity: '0.9' }}>
                                    Book online in minutes at Kletz Dumpsters — backed by 29+ years of contracting experience.
                                </h2>
                                <div style={{ marginBottom: '40px' }}>
                                    <a href="tel:4122197279" style={{
                                        display: 'inline-block',
                                        fontSize: '1.8rem',
                                        fontWeight: 'bold',
                                        color: '#d4a845',
                                        textDecoration: 'none',
                                        marginBottom: '20px'
                                    }}>
                                        <i className="fas fa-phone-alt" style={{ marginRight: '10px' }}></i>
                                        (412) 219-7279
                                    </a>
                                    <p style={{ fontSize: '1.2rem', color: 'white', opacity: '0.9' }}>
                                        Pricing from $350 • 3 days and 1 ton included • Local Pittsburgh company
                                    </p>
                                </div>
                                <div className="banner-btn">
                                    <a href={KD_BOOK} target="_blank" rel="noopener noreferrer" className="btn btn-two" style={{ marginRight: '15px' }}>
                                        Book Online Now
                                    </a>
                                    <a href="tel:4122197279" className="btn">
                                        Call Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Handoff Banner */}
            <div style={{ backgroundColor: '#ce202f', padding: '18px 0' }}>
                <div className="container">
                    <p style={{ margin: 0, textAlign: 'center', color: 'white', fontSize: '1.05rem', letterSpacing: '0.03em' }}>
                        Dumpster rentals are booked through <strong>Kletz Dumpsters</strong> —{' '}
                        <a href={KD_SITE} target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'underline' }}>
                            kletzdumpsters.com
                        </a>{' '}
                        — our dedicated roll-off division.
                    </p>
                </div>
            </div>

            {/* Sizes & Pricing */}
            <section className="services-area-three pt-120 pb-90">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6">
                            <div className="section-title text-center mb-50">
                                <span className="sub-title">Sizes & Pricing</span>
                                <h2 className="title">Pick Your Dumpster</h2>
                                <p>We keep it simple: three sizes that cover everything from a garage cleanout to a full roof tear-off. Every rental includes 3 days and 1 ton.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        {DUMPSTER_SIZES.map((dumpster, index) => (
                            <div className="col-lg-4 col-md-6" key={index}>
                                <div className="services-item-three" style={{
                                    border: dumpster.popular ? '2px solid #ce202f' : '1px solid #dee2e6',
                                    borderRadius: '6px',
                                    overflow: 'hidden',
                                    height: '100%',
                                    position: 'relative'
                                }}>
                                    {dumpster.popular && (
                                        <span style={{
                                            position: 'absolute',
                                            top: '15px',
                                            right: '15px',
                                            zIndex: 2,
                                            backgroundColor: '#ce202f',
                                            color: 'white',
                                            padding: '5px 12px',
                                            fontSize: '0.75rem',
                                            fontWeight: '700',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.05em',
                                            borderRadius: '3px'
                                        }}>
                                            Most Popular
                                        </span>
                                    )}
                                    <div className="services-thumb-three">
                                        <img src={dumpster.image} alt={`${dumpster.size} dumpster rental`} />
                                    </div>
                                    <div className="services-content-three" style={{ padding: '25px' }}>
                                        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '10px' }}>
                                            <h2 className="title" style={{ margin: 0 }}>{dumpster.size}</h2>
                                            <span style={{ fontSize: '1.6rem', fontWeight: '700', color: '#ce202f' }}>{dumpster.price}</span>
                                        </div>
                                        <p style={{ marginBottom: '15px' }}>{dumpster.description}</p>
                                        <ul className="list-wrap" style={{ listStyle: 'none', padding: 0, marginBottom: '20px', fontSize: '0.95rem', color: '#495057' }}>
                                            <li><i className="fas fa-check-circle" style={{ color: '#ce202f', marginRight: '8px' }}></i>{dumpster.dimensions}</li>
                                            <li><i className="fas fa-check-circle" style={{ color: '#ce202f', marginRight: '8px' }}></i>Holds {dumpster.capacity}</li>
                                            <li><i className="fas fa-check-circle" style={{ color: '#ce202f', marginRight: '8px' }}></i>3 days & 1 ton included</li>
                                        </ul>
                                        <a href={KD_BOOK} target="_blank" rel="noopener noreferrer" className="btn btn-two" style={{ width: '100%', textAlign: 'center' }}>
                                            Book This Size
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="row">
                        <div className="col-lg-12 text-center" style={{ marginTop: '30px' }}>
                            <a href={KD_SIZES} target="_blank" rel="noopener noreferrer" className="btn">
                                View All Sizes & Details
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* What You Can Accomplish Section */}
            <section className="services-area-three pb-90" style={{ backgroundColor: '#f8f9fa', paddingTop: '90px' }}>
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
                                    <h2 className="title">
                                        <a href={KD_SERVICES.residential} target="_blank" rel="noopener noreferrer">Complete Home Renovations</a>
                                    </h2>
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
                                    <h2 className="title">
                                        <a href={KD_SERVICES.construction} target="_blank" rel="noopener noreferrer">Construction & Building</a>
                                    </h2>
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
                                    <h2 className="title">
                                        <a href={KD_SERVICES.residential} target="_blank" rel="noopener noreferrer">Property Cleanouts</a>
                                    </h2>
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
                                    <h2 className="title">
                                        <a href={KD_SERVICES.construction} target="_blank" rel="noopener noreferrer">Roofing & Exterior Work</a>
                                    </h2>
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
                                    <h2 className="title">
                                        <a href={KD_SERVICES.residential} target="_blank" rel="noopener noreferrer">Landscaping & Yard Work</a>
                                    </h2>
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
                                    <h2 className="title">
                                        <a href={KD_SERVICES.commercial} target="_blank" rel="noopener noreferrer">Storm & Emergency Cleanup</a>
                                    </h2>
                                    <p>Storm damage cleanup, emergency debris removal, and disaster recovery. Fast response when you need it most.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="about-area-three" style={{
                backgroundImage: 'linear-gradient(rgba(26,28,30,0.85), rgba(26,28,30,0.85)), url(/assets/img/dumpsters/kd-rolloff-hero.webp)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="about-img-three" style={{ textAlign: 'center', padding: '40px 0' }}>
                                <img src="/assets/img/logo/kletz-dumpsters-logo.svg" alt="Kletz Dumpsters" style={{ maxWidth: '320px', width: '100%' }} />
                            </div>
                        </div>
                        <div className="col-lg-6" style={{ paddingTop: '20px', paddingBottom: '20px' }}>
                            <div className="about-content-three">
                                <div className="section-title mb-20">
                                    <span className="sub-title" style={{ color: '#ce202f' }}>Why Choose Kletz</span>
                                    <h2 className="title" style={{ color: 'white' }}>Pittsburgh's Trusted Dumpster Service</h2>
                                </div>
                                <p style={{ color: 'white' }}>Kletz Dumpsters is the roll-off division of Kletz Contracting, Inc. — 29+ years of roofing and construction experience behind every delivery, run by John &amp; Julian Kletz.</p>
                                <div className="about-list-three" style={{ color: 'white' }}>
                                    <ul className="list-wrap">
                                        <li><i className="fas fa-check-circle"></i>Book online 24/7 — no waiting on a callback</li>
                                        <li><i className="fas fa-check-circle"></i>Upfront pricing: know your total before you book</li>
                                        <li><i className="fas fa-check-circle"></i>Same day delivery available in most areas</li>
                                        <li><i className="fas fa-check-circle"></i>Licensed and insured through Kletz Contracting, Inc.</li>
                                        <li><i className="fas fa-check-circle"></i>Family-owned and operated — real accountability</li>
                                        <li><i className="fas fa-check-circle"></i>Responsible disposal and recycling practices</li>
                                    </ul>
                                </div>
                                <div className="about-btn" style={{ paddingTop: '20px' }}>
                                    <a href={KD_BOOK} target="_blank" rel="noopener noreferrer" className="btn btn-two">Book Online Now</a>
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
                                <p>Three steps. No runaround. Everything happens online at kletzdumpsters.com.</p>
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
                                    <h2 className="title">Choose Your Size</h2>
                                    <p>Pick a 10, 12, or 15 yard roll-off online and see your exact price before you commit — no quote request required.</p>
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
                                    <p>Choose a delivery date on the live calendar and check out securely. Same day delivery available in most Pittsburgh areas.</p>
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
                                    <h2 className="title">Fill It Up</h2>
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
                                    <h2 className="title">We Haul It Away</h2>
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
                                <h2 className="title">Serving Western Pennsylvania</h2>
                                <p>Fast, reliable delivery throughout Allegheny, Washington, Beaver, Butler, Westmoreland, and surrounding counties.</p>
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
                                    'Coraopolis', 'Beaver', 'Greensburg', 'Latrobe'
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
                            <div className="text-center">
                                <a href={`${KD_SITE}/service-area`} target="_blank" rel="noopener noreferrer" className="btn">
                                    Check Your Address
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="appointment-area-two">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12" style={{ marginTop: '120px' }}>
                            <div className="appointment-inner-two" style={{
                                backgroundImage: 'linear-gradient(rgba(26,28,30,0.85), rgba(26,28,30,0.85)), url(/assets/img/dumpsters/blue-front-drop.webp)',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}>
                                <div className="row align-items-center">
                                    <div className="col-lg-8">
                                        <div className="appointment-content">
                                            <h2 className="title" style={{ color: 'white' }}>Ready to Get Started?</h2>
                                            <p style={{ color: 'white', opacity: '0.9' }}>Book your dumpster online at kletzdumpsters.com — pick your size, see your price, and lock in a delivery date in a few minutes.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="appointment-btn">
                                            <a href={KD_BOOK} target="_blank" rel="noopener noreferrer" className="btn btn-two">Book Online Now</a>
                                            <div style={{ marginTop: '15px' }}>
                                                <a href="tel:4122197279" style={{
                                                    color: '#d4a845',
                                                    fontSize: '1.2rem',
                                                    fontWeight: 'bold',
                                                    textDecoration: 'none'
                                                }}>
                                                    <i className="fas fa-phone-alt" style={{ marginRight: '8px' }}></i>
                                                    (412) 219-7279
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

            {/* Booking Handoff */}
            <section className="contact-area pt-120 pb-120">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div style={{
                                backgroundColor: '#1a1c1e',
                                borderRadius: '8px',
                                padding: '50px 40px',
                                textAlign: 'center'
                            }}>
                                <img src="/assets/img/logo/kletz-dumpsters-logo.svg" alt="Kletz Dumpsters" style={{ maxWidth: '260px', width: '100%', marginBottom: '25px' }} />
                                <h2 style={{ color: 'white', marginBottom: '15px' }}>Book Your Dumpster in Minutes</h2>
                                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', marginBottom: '30px' }}>
                                    Real-time availability, upfront pricing, and secure online checkout — all at kletzdumpsters.com.
                                    Prefer to talk it through? Call <a href="tel:4122197279" style={{ color: '#d4a845', fontWeight: 'bold' }}>(412) 219-7279</a>.
                                </p>
                                <a href={KD_BOOK} target="_blank" rel="noopener noreferrer" className="btn btn-two" style={{ fontSize: '1.1rem', padding: '16px 40px' }}>
                                    Book Online Now
                                </a>
                                <p style={{ marginTop: '25px', marginBottom: 0 }}>
                                    <a href={KD_SITE} target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'underline' }}>
                                        Visit kletzdumpsters.com
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export async function getStaticProps() {
    return {
        props: {},
    };
}
