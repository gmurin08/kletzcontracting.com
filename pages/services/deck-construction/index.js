import Layout from "@/components/layout/Layout"
import Brand3 from "@/components/sections/Brand3"
import { useState } from "react"
import Link from "next/link"
import Head from "next/head"
import Script from "next/script"
import LocalBusinessSchema from "@/components/LocalBusinessSchema"

const processSideImg = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
    borderRadius: '15px'
};

export default function ServiceDetails(props) {

    // State for form data and submission status
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        deck_type: '',
        address: '',
        service_date: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({
        success: false,
        error: null
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ success: false, error: null });
        
        try {
            const response = await fetch('/api/deck-construction/inquiry', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            
            const data = await response.json();
            
            if (!response.ok) {
                throw new Error(data.error || 'Failed to submit inquiry');
            }
            
            // Success
            setSubmitStatus({ success: true, error: null });
            // Reset form
            setFormData({
                name: '',
                email: '',
                phone: '',
                deck_type: '',
                address: '',
                service_date: '',
                message: ''
            });
        } catch (error) {
            setSubmitStatus({ success: false, error: error.message });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <Head>
                <title>{props.metaTitle}</title>
                <meta name="description" content={props.metaDescription} />
                <link rel="canonical" href={props.canonicalUrl} />
            </Head>
            
            {/* Include the main business schema */}
            <LocalBusinessSchema />
            
            {/* Add the service-specific schema */}
            <Script
                id="service-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(props.serviceSchema) }}
            />
            
            <Layout breadcrumbTitle="Custom Deck Construction">
                <div>
                    <section className="services-details-area pt-120">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-8">
                                    <div className="services-details-wrap" >
                                        <div className="services-details-thumb">
                                            <img src="/assets/img/services/deck-construction.jpg" alt="Custom Deck Building in Pittsburgh" />
                                        </div>
                                        <div className="services-details-content">
                                            <h2 className="title">Custom Deck Construction in Pittsburgh</h2>
                                            <p>Expand your living space and enhance your home's value with a custom deck from Kletz Contracting. Our Pittsburgh deck builders create beautiful, durable outdoor spaces tailored to your lifestyle and property. From intimate entertaining areas to expansive multi-level designs, we combine quality materials, expert craftsmanship, and meticulous attention to detail for decks that last for years to come.</p>

                                            <div className="services-process-wrap">
                                                <div className="row justify-content-center">
                                                    <div className="col-lg-6 col-md-8" style={{paddingBottom:'40px', display:'flex', alignItems:'center', justifyContent:'center'}}>
                                                            <div>
                                                            <img style={processSideImg} src="/assets/img/services/deck-process1.jpg" alt="Deck Design Process in Pittsburgh" />
                                                            </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="services-process-content">
                                                            <h2 className="title">Our Deck Building Process</h2>
                                                            <ul className="list-wrap">
                                                                <li>
                                                                    <div className="services-process-item">
                                                                        <div className="icon">
                                                                            <img src="/assets/img/icon/design.svg" alt="" />
                                                                        </div>
                                                                        <div className="content">
                                                                            <h4 className="title">Design Consultation</h4>
                                                                            <p>We discuss your vision, evaluate your space, and create 3D renderings to help you visualize your new deck. Material options, features, and budget considerations are all addressed at this stage.</p>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="services-process-item">
                                                                        <div className="icon">
                                                                            <img src="/assets/img/icon/permit.svg" alt="" />
                                                                        </div>
                                                                        <div className="content">
                                                                            <h4 className="title">Permits & Planning</h4>
                                                                            <p>Our team handles all necessary permits and inspections required by Pittsburgh and surrounding municipalities. We ensure your deck meets all local building codes and HOA requirements.</p>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="services-process-item">
                                                                        <div className="icon">
                                                                            <img src="/assets/img/icon/build.svg" alt="" />
                                                                        </div>
                                                                        <div className="content">
                                                                            <h4 className="title">Expert Construction</h4>
                                                                            <p>Our skilled carpenters build your deck with precision and care, using quality materials and proven construction techniques. We maintain a clean work site and keep you informed throughout the process.</p>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <h2 className="title-two">Why Choose Kletz Contracting for Your Deck</h2>
                                            <p>As Pittsburgh's trusted deck builders, we deliver exceptional outdoor living spaces that stand the test of time. Our experienced team understands the unique challenges of building in Pennsylvania's climate and terrain, ensuring your deck is built to last through all four seasons.</p>

                                            <div className="service-benefits-wrap">
                                                <div className="row">
                                                    <div className="col-lg-7 order-0 order-lg-2">
                                                        <div className="benefits-img">
                                                            <img src="/assets/img/services/deck_benefits1.jpg" alt="Composite Deck in Pittsburgh" />
                                                            <img src="/assets/img/services/deck_benefits2.jpg" alt="Custom Wood Deck Installation" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-5">
                                                        <div className="benefits-content">
                                                            <h2 className="title">Our Deck Advantages</h2>
                                                            <ul className="list-wrap">
                                                                <li><i className="fas fa-check-circle" />Licensed and insured local deck builders</li>
                                                                <li><i className="fas fa-check-circle" />Premium materials from trusted suppliers</li>
                                                                <li><i className="fas fa-check-circle" />Structural integrity backed by warranty</li>
                                                                <li><i className="fas fa-check-circle" />Custom features like built-in seating and lighting</li>
                                                                <li><i className="fas fa-check-circle" />Expert builders with 15+ years of experience</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="material-options mt-60">
                                                <h2 className="title">Premium Deck Materials</h2>
                                                <p>We offer a wide range of high-quality deck materials to suit your style, budget, and maintenance preferences:</p>
                                                
                                                <div className="row mt-4">
                                                    <div className="col-md-6">
                                                        <div className="material-item mb-4">
                                                            <h4>Pressure-Treated Wood</h4>
                                                            <p>Affordable, traditional option with natural appearance. Requires regular maintenance but offers excellent value.</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="material-item mb-4">
                                                            <h4>Cedar & Redwood</h4>
                                                            <p>Natural resistance to rot and insects with beautiful grain patterns. Moderately priced with medium maintenance requirements.</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="material-item mb-4">
                                                            <h4>Composite Decking</h4>
                                                            <p>Low-maintenance, long-lasting option resistant to fading, staining, and scratching. Available in many colors and textures.</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="material-item mb-4">
                                                            <h4>PVC Decking</h4>
                                                            <p>Completely synthetic option with extreme durability. Highest longevity with virtually no maintenance required.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="cta-area text-center mt-60">
                                                <h2 className="title">Ready to Build Your Dream Deck?</h2>
                                                <p>Complete the form below to schedule a free consultation. Our Pittsburgh deck builders will contact you to discuss your project and provide a detailed estimate.</p>

                                                <form onSubmit={handleSubmit} className="booking-form mt-4">
                                                {/* Form content remains the same */}
                                                <div className="form-row">
                                                    <div className="col-md-6 mb-3">
                                                        <input 
                                                            type="text" 
                                                            name="name" 
                                                            value={formData.name}
                                                            onChange={handleChange}
                                                            className="form-control" 
                                                            placeholder="Full Name" 
                                                            required 
                                                        />
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <input 
                                                            type="email" 
                                                            name="email" 
                                                            value={formData.email}
                                                            onChange={handleChange}
                                                            className="form-control" 
                                                            placeholder="Email Address" 
                                                            required 
                                                        />
                                                    </div>
                                                </div>
                                                <div className="form-row">
                                                    <div className="col-md-6 mb-3">
                                                        <input 
                                                            type="tel" 
                                                            name="phone" 
                                                            value={formData.phone}
                                                            onChange={handleChange}
                                                            className="form-control" 
                                                            placeholder="Phone Number" 
                                                            required 
                                                        />
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <select 
                                                            name="deck_type" 
                                                            value={formData.deck_type}
                                                            onChange={handleChange}
                                                            className="form-control" 
                                                            required
                                                        >
                                                            <option value="">Select Deck Type</option>
                                                            <option value="standard">Standard Ground-Level Deck</option>
                                                            <option value="elevated">Elevated Deck</option>
                                                            <option value="multi-level">Multi-Level Deck</option>
                                                            <option value="covered">Covered/Screened Deck</option>
                                                            <option value="pool">Pool/Spa Deck</option>
                                                            <option value="other">Other Custom Design</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="form-row">
                                                    <div className="col-md-12 mb-3">
                                                        <input 
                                                            type="text" 
                                                            name="address" 
                                                            value={formData.address}
                                                            onChange={handleChange}
                                                            className="form-control" 
                                                            placeholder="Property Address" 
                                                            required 
                                                        />
                                                    </div>
                                                    <div className="col-md-12 mb-3">
                                                        <input 
                                                            type="date" 
                                                            name="service_date" 
                                                            value={formData.service_date}
                                                            onChange={handleChange}
                                                            className="form-control" 
                                                            required 
                                                        />
                                                    </div>
                                                </div>
                                                <div className="form-row">
                                                    <div className="col-md-12 mb-3">
                                                        <textarea 
                                                            name="message" 
                                                            value={formData.message}
                                                            onChange={handleChange}
                                                            className="form-control" 
                                                            placeholder="Tell us about your deck project" 
                                                            rows="4"
                                                        />
                                                    </div>
                                                </div>
                                                <button 
                                                    type="submit" 
                                                    className="btn btn-primary btn-lg"
                                                    disabled={isSubmitting}
                                                >
                                                    {isSubmitting ? 'Processing...' : 'Request Free Estimate'}
                                                </button>
                                                {submitStatus.success && (
                                                    <div className="alert alert-success mt-3">
                                                        Thank you! Your deck consultation request has been submitted. We'll contact you shortly.
                                                    </div>
                                                )}
                                                {submitStatus.error && (
                                                    <div className="alert alert-danger mt-3">
                                                        {submitStatus.error}
                                                    </div>
                                                )}
                                            </form>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-4 col-lg-6">
                                    <aside className="services-sidebar">
                                        <div className="services-widget">
                                            <h4 className="widget-title">Deck Services</h4>
                                            <div className="our-services-list">
                                                <ul className="list-wrap">
                                                    <li><Link href="#">Custom Deck Design<i className="fas fa-arrow-right" /></Link></li>
                                                    <li><Link href="#">Deck Replacement<i className="fas fa-arrow-right" /></Link></li>
                                                    <li><Link href="#">Deck Repairs & Restoration<i className="fas fa-arrow-right" /></Link></li>
                                                    <li><Link href="#">Pergolas & Gazebos<i className="fas fa-arrow-right" /></Link></li>
                                                    <li><Link href="#">Deck Lighting Installation<i className="fas fa-arrow-right" /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="services-widget widget-bg" data-background="/assets/img/services/sw_bg.jpg">
                                            <h4 className="widget-title">Get a Free Deck Estimate</h4>
                                            <form action="#" className="sidebar-form">
                                                <div className="form-grp">
                                                    <input id="name" type="text" placeholder="Your Name" />
                                                </div>
                                                <div className="form-grp">
                                                    <input id="email" type="text" placeholder="Your Email Address" />
                                                </div>
                                                <div className="form-grp">
                                                    <textarea id="message" placeholder="Deck Project Details" />
                                                </div>
                                                <button type="submit" className="btn btn-two">Request Quote</button>
                                            </form>
                                        </div>
                                        <div className="services-widget">
                                            <h4 className="widget-title">Resources</h4>
                                            <div className="download-wrap">
                                                <Link href="/assets/docs/deck-materials-guide.pdf" download target="_blank"><i className="fas fa-cloud-download-alt" />Deck Materials Guide.pdf</Link>
                                                <Link href="/assets/docs/deck-maintenance-tips.pdf" download target="_blank"><i className="fas fa-file-pdf" />Deck Maintenance Tips.pdf</Link>
                                            </div>
                                        </div>
                                        <div className="services-widget">
                                            <h4 className="widget-title">Our Service Area</h4>
                                            <div className="contact-info">
                                                <p>We build custom decks throughout the greater Pittsburgh area, including:</p>
                                                <ul className="service-areas">
                                                    <li>Pittsburgh</li>
                                                    <li>Robinson Township</li>
                                                    <li>Upper St. Clair</li>
                                                    <li>Mt. Lebanon</li>
                                                    <li>Bethel Park</li>
                                                    <li>South Hills</li>
                                                </ul>
                                                <p className="mt-3"><i className="fas fa-map-marker-alt"></i> 1468 Old Steubenville Pike, suite d, Pittsburgh, PA 15205</p>
                                                <p><i className="fas fa-phone"></i> (412) 555-1234</p>
                                            </div>
                                        </div>
                                    </aside>
                                </div>
                            </div>
                        </div>
                    </section>
                    <Brand3 />
                </div>
            </Layout>
        </>
    )
}

export async function getStaticProps() {
    return {
        props: {
            metaTitle: "Custom Deck Construction in Pittsburgh | Kletz Contracting",
            metaDescription: "Professional deck builders in Pittsburgh. Custom deck construction with quality materials and expert craftsmanship. Free estimates from Kletz Contracting.",
            canonicalUrl: "https://www.kletzcontracting.com/services/deck-construction",
            serviceSchema: {
                "@context": "https://schema.org",
                "@type": "Service",
                "name": "Deck Construction",
                "serviceType": "Deck Building",
                "provider": {
                    "@type": "RoofingContractor",
                    "name": "Kletz Contracting",
                    "url": "https://kletzcontracting.com"
                },
                "areaServed": {
                    "@type": "City",
                    "name": "Pittsburgh"
                },
                "description": "Professional deck construction services in Pittsburgh. Custom deck building, design, and installation for residential properties with premium materials and expert craftsmanship.",
                "offers": {
                    "@type": "Offer",
                    "priceSpecification": {
                        "@type": "PriceSpecification",
                        "priceCurrency": "USD"
                    }
                },
                "termsOfService": "Free estimates provided",
                "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Deck Services",
                    "itemListElement": [
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Custom Deck Design"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Deck Replacement"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Deck Repairs & Restoration"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Pergolas & Gazebos"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Deck Lighting Installation"
                            }
                        }
                    ]
                }
            }
        },
    };
}