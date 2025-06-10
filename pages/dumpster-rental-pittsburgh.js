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
                <meta name="description" content="Need a dumpster rental in Pittsburgh? Same day delivery available! 10, 15, 20, 30 yard dumpsters for construction, renovation, cleanouts. Call (412) 200-2475 for instant quote!" />
                <meta property="og:title" content="Dumpster Rental Pittsburgh | Same Day Delivery | Kletz Contracting" />
                <meta property="og:description" content="Need a dumpster rental in Pittsburgh? Same day delivery available! 10, 15, 20, 30 yard dumpsters for construction, renovation, cleanouts. Call (412) 200-2475 for instant quote!" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://kletzcontracting.com/dumpster-rental-pittsburgh" />
                <meta name="robots" content="noindex, nofollow" />
            </Head>

            {/* Hero Section */}
            <section style={{
                background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
                color: 'white',
                padding: '60px 0',
                textAlign: 'center'
            }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <h1 style={{ 
                                fontSize: '3rem', 
                                fontWeight: 'bold', 
                                marginBottom: '20px',
                                lineHeight: '1.2'
                            }}>
                                Pittsburgh Dumpster Rental
                            </h1>
                            <h2 style={{ 
                                fontSize: '1.5rem', 
                                fontWeight: '400', 
                                marginBottom: '30px',
                                opacity: '0.9'
                            }}>
                                Same Day Delivery Available | All Sizes | Fair Pricing
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
                                    📞 (412) 200-2475
                                </a>
                                <p style={{ fontSize: '1.1rem', opacity: '0.9' }}>
                                    Call now for instant pricing or get a quote online below
                                </p>
                            </div>
                            <button onClick={openPopup} style={{
                                backgroundColor: '#28a745',
                                color: 'white',
                                border: 'none',
                                padding: '15px 30px',
                                fontSize: '1.2rem',
                                fontWeight: 'bold',
                                borderRadius: '5px',
                                cursor: 'pointer',
                                marginRight: '15px',
                                marginBottom: '15px'
                            }}>
                                Get Free Quote
                            </button>
                            <a href="tel:4122002475" style={{
                                backgroundColor: '#ffc107',
                                color: '#333',
                                border: 'none',
                                padding: '15px 30px',
                                fontSize: '1.2rem',
                                fontWeight: 'bold',
                                borderRadius: '5px',
                                textDecoration: 'none',
                                display: 'inline-block'
                            }}>
                                Call Now
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Hero Image */}
            <section style={{ padding: '0' }}>
                <div style={{
                    width: '100%',
                    height: '400px',
                    backgroundImage: 'url(/placeholder-hero-dumpster.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundColor: '#f5f5f5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '16px',
                    color: '#666'
                }}>
                    {/* Photo Suggestion: Wide shot of a clean dumpster being delivered to a residential property, professional delivery truck, suburban Pittsburgh neighborhood background */}
                    Hero Image: Professional dumpster delivery to residential property
                </div>
            </section>

            {/* Why Choose Us */}
            <section style={{ padding: '60px 0', backgroundColor: '#f8f9fa' }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#333' }}>
                                Why Choose Kletz Dumpster Rental?
                            </h2>
                            <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '50px' }}>
                                Local Pittsburgh company with over 25 years of experience
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        {[
                            { icon: '🚚', title: 'Same Day Delivery', desc: 'Need it today? We deliver same day in most Pittsburgh areas' },
                            { icon: '💰', title: 'Transparent Pricing', desc: 'No hidden fees. What we quote is what you pay' },
                            { icon: '📞', title: 'Local Support', desc: 'Talk to real people, not call centers. Local Pittsburgh team' },
                            { icon: '♻️', title: 'Eco-Friendly', desc: 'We recycle and dispose of waste responsibly' }
                        ].map((item, index) => (
                            <div className="col-lg-3 col-md-6 mb-4" key={index}>
                                <div style={{
                                    backgroundColor: 'white',
                                    padding: '30px 20px',
                                    borderRadius: '10px',
                                    textAlign: 'center',
                                    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                                    height: '100%'
                                }}>
                                    <div style={{ fontSize: '3rem', marginBottom: '20px' }}>{item.icon}</div>
                                    <h3 style={{ fontSize: '1.3rem', marginBottom: '15px', color: '#333' }}>{item.title}</h3>
                                    <p style={{ color: '#666', lineHeight: '1.5' }}>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center" style={{ marginTop: '40px' }}>
                        <button onClick={openPopup} style={{
                            backgroundColor: '#28a745',
                            color: 'white',
                            border: 'none',
                            padding: '12px 25px',
                            fontSize: '1.1rem',
                            fontWeight: 'bold',
                            borderRadius: '5px',
                            cursor: 'pointer'
                        }}>
                            Get Your Quote Now
                        </button>
                    </div>
                </div>
            </section>

            {/* Dumpster Sizes */}
            <section style={{ padding: '60px 0' }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#333' }}>
                                Dumpster Sizes Available
                            </h2>
                            <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '50px' }}>
                                Choose the right size for your project
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        {[
                            { 
                                size: '10 Yard', 
                                dimensions: '12′ × 8′ × 3.5′',
                                perfect: 'Small cleanouts, bathroom remodel',
                                holds: '3-4 pickup truck loads'
                            },
                            { 
                                size: '15 Yard', 
                                dimensions: '14′ × 8′ × 4.5′',
                                perfect: 'Kitchen remodel, deck removal',
                                holds: '4-5 pickup truck loads'
                            },
                            { 
                                size: '20 Yard', 
                                dimensions: '20′ × 8′ × 4.5′',
                                perfect: 'Whole house cleanout, roofing',
                                holds: '6-7 pickup truck loads'
                            },
                            { 
                                size: '30 Yard', 
                                dimensions: '20′ × 8′ × 6′',
                                perfect: 'Major construction, large renovation',
                                holds: '9-10 pickup truck loads'
                            }
                        ].map((dumpster, index) => (
                            <div className="col-lg-6 mb-4" key={index}>
                                <div style={{
                                    backgroundColor: 'white',
                                    border: '2px solid #e9ecef',
                                    borderRadius: '10px',
                                    overflow: 'hidden'
                                }}>
                                    {/* Dumpster Image */}
                                    <div style={{
                                        width: '100%',
                                        height: '200px',
                                        backgroundImage: `url(/placeholder-${dumpster.size.replace(' ', '-').toLowerCase()}.jpg)`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        backgroundColor: '#f5f5f5',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '14px',
                                        color: '#666'
                                    }}>
                                        {/* Photo Suggestion: Side view of each dumpster size on clean background, showing relative scale */}
                                        {dumpster.size} Dumpster Photo
                                    </div>
                                    
                                    <div style={{ padding: '25px' }}>
                                        <h3 style={{ 
                                            fontSize: '1.8rem', 
                                            color: '#2a5298', 
                                            marginBottom: '10px',
                                            fontWeight: 'bold'
                                        }}>
                                            {dumpster.size} Dumpster
                                        </h3>
                                        <p style={{ 
                                            fontSize: '1rem', 
                                            color: '#666', 
                                            marginBottom: '15px' 
                                        }}>
                                            <strong>Dimensions:</strong> {dumpster.dimensions}
                                        </p>
                                        <p style={{ 
                                            fontSize: '1rem', 
                                            color: '#666', 
                                            marginBottom: '15px' 
                                        }}>
                                            <strong>Perfect for:</strong> {dumpster.perfect}
                                        </p>
                                        <p style={{ 
                                            fontSize: '1rem', 
                                            color: '#666', 
                                            marginBottom: '20px' 
                                        }}>
                                            <strong>Holds:</strong> {dumpster.holds}
                                        </p>
                                        <button onClick={openPopup} style={{
                                            backgroundColor: '#28a745',
                                            color: 'white',
                                            border: 'none',
                                            padding: '10px 20px',
                                            fontSize: '1rem',
                                            fontWeight: 'bold',
                                            borderRadius: '5px',
                                            cursor: 'pointer',
                                            width: '100%'
                                        }}>
                                            Get Quote for {dumpster.size}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Service Areas */}
            <section style={{ padding: '60px 0', backgroundColor: '#f8f9fa' }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#333' }}>
                                Serving All of Pittsburgh Area
                            </h2>
                            <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '40px' }}>
                                Fast delivery to your neighborhood
                            </p>
                            <div style={{ 
                                display: 'grid', 
                                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
                                gap: '15px',
                                marginBottom: '40px'
                            }}>
                                {[
                                    'Pittsburgh', 'Mt. Lebanon', 'Upper St. Clair', 'Bethel Park',
                                    'Cranberry Township', 'Mars', 'Wexford', 'Peters Township',
                                    'McMurray', 'Canonsburg', 'Moon Township', 'Sewickley',
                                    'Robinson Township', 'South Fayette', 'Pine Township', 'Washington'
                                ].map((city, index) => (
                                    <div key={index} style={{
                                        backgroundColor: 'white',
                                        padding: '10px 15px',
                                        borderRadius: '5px',
                                        border: '1px solid #dee2e6',
                                        fontSize: '0.95rem',
                                        color: '#495057'
                                    }}>
                                        {city}
                                    </div>
                                ))}
                            </div>
                            <button onClick={openPopup} style={{
                                backgroundColor: '#28a745',
                                color: 'white',
                                border: 'none',
                                padding: '12px 25px',
                                fontSize: '1.1rem',
                                fontWeight: 'bold',
                                borderRadius: '5px',
                                cursor: 'pointer'
                            }}>
                                Check Service to My Area
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Social Proof */}
            <section style={{ padding: '60px 0' }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '50px', color: '#333' }}>
                                Trusted by Pittsburgh Homeowners & Contractors
                            </h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 text-center mb-4">
                            <div style={{
                                width: '100%',
                                height: '250px',
                                backgroundImage: 'url(/placeholder-happy-customer.jpg)',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundColor: '#f5f5f5',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '14px',
                                color: '#666',
                                borderRadius: '10px',
                                marginBottom: '20px'
                            }}>
                                {/* Photo Suggestion: Happy homeowner next to delivered dumpster, residential setting */}
                                Happy Customer Photo
                            </div>
                            <div style={{ fontSize: '1.5rem', color: '#ffc107', marginBottom: '10px' }}>
                                ⭐⭐⭐⭐⭐
                            </div>
                            <p style={{ fontSize: '1.1rem', fontStyle: 'italic', color: '#666' }}>
                                "Same day delivery as promised! Great service and fair pricing."
                            </p>
                            <p style={{ fontWeight: 'bold', color: '#333' }}>- Sarah M., Mt. Lebanon</p>
                        </div>
                        <div className="col-lg-4 text-center mb-4">
                            <div style={{
                                width: '100%',
                                height: '250px',
                                backgroundImage: 'url(/placeholder-contractor.jpg)',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundColor: '#f5f5f5',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '14px',
                                color: '#666',
                                borderRadius: '10px',
                                marginBottom: '20px'
                            }}>
                                {/* Photo Suggestion: Professional contractor at job site with dumpster in background */}
                                Contractor Testimonial Photo
                            </div>
                            <div style={{ fontSize: '1.5rem', color: '#ffc107', marginBottom: '10px' }}>
                                ⭐⭐⭐⭐⭐
                            </div>
                            <p style={{ fontSize: '1.1rem', fontStyle: 'italic', color: '#666' }}>
                                "Reliable partner for all our construction projects. Always on time."
                            </p>
                            <p style={{ fontWeight: 'bold', color: '#333' }}>- Mike's Construction, Pittsburgh</p>
                        </div>
                        <div className="col-lg-4 text-center mb-4">
                            <div style={{
                                width: '100%',
                                height: '250px',
                                backgroundImage: 'url(/placeholder-family.jpg)',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundColor: '#f5f5f5',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '14px',
                                color: '#666',
                                borderRadius: '10px',
                                marginBottom: '20px'
                            }}>
                                {/* Photo Suggestion: Family doing home cleanout project with dumpster */}
                                Family Project Photo
                            </div>
                            <div style={{ fontSize: '1.5rem', color: '#ffc107', marginBottom: '10px' }}>
                                ⭐⭐⭐⭐⭐
                            </div>
                            <p style={{ fontSize: '1.1rem', fontStyle: 'italic', color: '#666' }}>
                                "Made our whole house cleanout so much easier. Highly recommend!"
                            </p>
                            <p style={{ fontWeight: 'bold', color: '#333' }}>- The Johnson Family, Cranberry</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section style={{
                background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)',
                color: 'white',
                padding: '60px 0',
                textAlign: 'center'
            }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>
                                Ready to Get Started?
                            </h2>
                            <p style={{ fontSize: '1.3rem', marginBottom: '30px', opacity: '0.9' }}>
                                Get your dumpster delivered today!
                            </p>
                            <div style={{ marginBottom: '30px' }}>
                                <a href="tel:4122002475" style={{
                                    display: 'inline-block',
                                    fontSize: '1.6rem',
                                    fontWeight: 'bold',
                                    color: '#ffc107',
                                    textDecoration: 'none'
                                }}>
                                    📞 (412) 200-2475
                                </a>
                            </div>
                            <button onClick={openPopup} style={{
                                backgroundColor: '#ffc107',
                                color: '#333',
                                border: 'none',
                                padding: '15px 30px',
                                fontSize: '1.2rem',
                                fontWeight: 'bold',
                                borderRadius: '5px',
                                cursor: 'pointer',
                                marginRight: '15px',
                                marginBottom: '15px'
                            }}>
                                Get Free Quote
                            </button>
                            <a href="tel:4122002475" style={{
                                backgroundColor: 'white',
                                color: '#28a745',
                                border: 'none',
                                padding: '15px 30px',
                                fontSize: '1.2rem',
                                fontWeight: 'bold',
                                borderRadius: '5px',
                                textDecoration: 'none',
                                display: 'inline-block'
                            }}>
                                Call Now
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Inline Form Section */}
            <section style={{ padding: '60px 0', backgroundColor: '#f8f9fa' }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '20px', color: '#333' }}>
                                Get Your Free Quote
                            </h2>
                            <p style={{ fontSize: '1.2rem', textAlign: 'center', color: '#666', marginBottom: '40px' }}>
                                Fill out the form below and we'll get back to you within 30 minutes
                            </p>
                            
                            {/* GHL Inline Form */}
                            <div style={{
                                backgroundColor: 'white',
                                padding: '30px',
                                borderRadius: '10px',
                                boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
                            }}>
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
                        
                        <div style={{ padding: '30px' }}>
                            <h3 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>
                                Get Your Free Dumpster Quote
                            </h3>
                            
                            {/* GHL Popup Form */}
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