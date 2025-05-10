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
        siding_type: '',
        address: '',
        project_type: '',
        home_size: '',
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
            const response = await fetch('/api/siding/inquiry', {
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
                siding_type: '',
                address: '',
                project_type: '',
                home_size: '',
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
                id="siding-service-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(props.serviceSchema) }}
            />
            
            <Layout breadcrumbTitle="Professional Siding Services">
                <div>
                    <section className="services-details-area pt-120">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-8">
                                    <div className="services-details-wrap" >
                                        <div className="services-details-thumb">
                                            <img src="/assets/img/services/siding-main.jpg" alt="Professional Siding Installation in Pittsburgh" />
                                        </div>
                                        <div className="services-details-content">
                                            <h2 className="title">Expert Siding Installation in Pittsburgh</h2>
                                            <p>Enhance your home's protection and curb appeal with premium siding installation from Kletz Contracting. Our Pittsburgh siding experts deliver beautiful, weatherproof exteriors that stand up to Pennsylvania's demanding climate while requiring minimal maintenance. From vinyl and fiber cement to engineered wood and traditional cedar, we install quality siding materials with precision and expertise for results that last decades.</p>

                                            <div className="services-process-wrap">
                                                <div className="row justify-content-center">
                                                    <div className="col-lg-6 col-md-8" style={{paddingBottom:'40px', display:'flex', alignItems:'center', justifyContent:'center'}}>
                                                            <div>
                                                            <img style={processSideImg} src="/assets/img/services/siding-process.jpg" alt="Siding Installation Process in Pittsburgh" />
                                                            </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="services-process-content">
                                                            <h2 className="title">Our Siding Installation Process</h2>
                                                            <ul className="list-wrap">
                                                                <li>
                                                                    <div className="services-process-item">
                                                                        <div className="icon">
                                                                            <img src="/assets/img/icon/inspection.svg" alt="" />
                                                                        </div>
                                                                        <div className="content">
                                                                            <h4 className="title">Thorough Assessment</h4>
                                                                            <p>We begin with a comprehensive evaluation of your home's exterior, identifying any water damage, structural issues, or insulation concerns that should be addressed before siding installation.</p>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="services-process-item">
                                                                        <div className="icon">
                                                                            <img src="/assets/img/icon/preparation.svg" alt="" />
                                                                        </div>
                                                                        <div className="content">
                                                                            <h4 className="title">Expert Preparation</h4>
                                                                            <p>Our team carefully removes existing siding, repairs damaged sheathing, installs proper house wrap and moisture barriers, and ensures a clean, solid substrate for your new siding installation.</p>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="services-process-item">
                                                                        <div className="icon">
                                                                            <img src="/assets/img/icon/installation.svg" alt="" />
                                                                        </div>
                                                                        <div className="content">
                                                                            <h4 className="title">Precision Installation</h4>
                                                                            <p>Our experienced installers follow manufacturer specifications and industry best practices for flawless installation. We pay special attention to trim details, corners, seams, and proper flashing around windows and doors for a weather-tight finish.</p>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <h2 className="title-two">Why Choose Kletz Contracting for Your Siding</h2>
                                            <p>Since 1996, homeowners throughout Pittsburgh have trusted our skilled team to deliver exceptional siding installations. We combine quality materials, experienced craftsmanship, and attention to detail for exterior projects that protect your home while enhancing its beauty and value.</p>

                                            <div className="service-benefits-wrap">
                                                <div className="row">
                                                    <div className="col-lg-7 order-0 order-lg-2">
                                                        <div className="benefits-img">
                                                            <img src="/assets/img/services/siding_benefits1.jpg" alt="Vinyl Siding Installation in Pittsburgh" />
                                                            <img src="/assets/img/services/siding_benefits2.jpg" alt="Fiber Cement Siding Installation" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-5">
                                                        <div className="benefits-content">
                                                            <h2 className="title">Our Siding Advantages</h2>
                                                            <ul className="list-wrap">
                                                                <li><i className="fas fa-check-circle" />Licensed, insured, and locally owned since 1996</li>
                                                                <li><i className="fas fa-check-circle" />Factory-trained and certified installers</li>
                                                                <li><i className="fas fa-check-circle" />Premium materials from trusted manufacturers</li>
                                                                <li><i className="fas fa-check-circle" />Comprehensive manufacturer warranties</li>
                                                                <li><i className="fas fa-check-circle" />Attention to proper insulation and weatherproofing</li>
                                                                <li><i className="fas fa-check-circle" />Meticulous trim and detail work</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="siding-options mt-60">
                                                <h2 className="title">Quality Siding Materials</h2>
                                                <p>We install a variety of premium siding materials to suit your home's architectural style, your aesthetic preferences, and your budget:</p>
                                                
                                                <div className="row mt-4">
                                                    <div className="col-md-6">
                                                        <div className="siding-item mb-4">
                                                            <h4>Vinyl Siding</h4>
                                                            <p>Our most popular and economical option, vinyl siding offers excellent durability, low maintenance, and a wide range of colors and styles. Today's premium vinyl products resist fading, cracking, and impact damage while providing good insulation value.</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="siding-item mb-4">
                                                            <h4>Fiber Cement Siding</h4>
                                                            <p>James Hardie® fiber cement siding delivers exceptional durability, fire resistance, and authentic wood-like appearance. This premium material withstands Pittsburgh's freeze-thaw cycles and comes with industry-leading warranties and color options.</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="siding-item mb-4">
                                                            <h4>Engineered Wood Siding</h4>
                                                            <p>LP SmartSide® and other engineered wood products combine the natural beauty of wood with enhanced durability and pest resistance. These materials stand up to extreme weather while offering authentic wood grain and design flexibility.</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="siding-item mb-4">
                                                            <h4>Cedar & Wood Siding</h4>
                                                            <p>Natural wood siding provides timeless beauty and character, especially for historic Pittsburgh homes. Our cedar and wood siding installations include proper preparation, staining or painting, and clear guidance on maintenance for lasting performance.</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="siding-item mb-4">
                                                            <h4>Insulated Siding</h4>
                                                            <p>Upgrade your home's energy efficiency with insulated siding options. These systems combine attractive exteriors with built-in insulation that reduces energy bills, dampens exterior noise, and increases wall stability.</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="siding-item mb-4">
                                                            <h4>Specialty & Accent Siding</h4>
                                                            <p>Create architectural interest with stone veneer, cedar shakes, board and batten, and decorative trim options. These accent materials can be combined with primary siding for distinctive visual appeal and enhanced curb presence.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="cta-area text-center mt-60">
                                                <h2 className="title">Ready for Beautiful, Durable Siding?</h2>
                                                <p>Complete the form below to schedule a free siding consultation and estimate. Our Pittsburgh experts will help you select the perfect materials and provide detailed pricing for your project.</p>

                                                <form onSubmit={handleSubmit} className="booking-form mt-4">
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
                                                            name="siding_type" 
                                                            value={formData.siding_type}
                                                            onChange={handleChange}
                                                            className="form-control" 
                                                            required
                                                        >
                                                            <option value="">Select Siding Material</option>
                                                            <option value="vinyl">Vinyl Siding</option>
                                                            <option value="fiber-cement">Fiber Cement Siding</option>
                                                            <option value="engineered-wood">Engineered Wood Siding</option>
                                                            <option value="cedar">Cedar/Wood Siding</option>
                                                            <option value="insulated">Insulated Siding</option>
                                                            <option value="not-sure">Not Sure/Need Recommendation</option>
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
                                                </div>
                                                <div className="form-row">
                                                    <div className="col-md-6 mb-3">
                                                        <select 
                                                            name="project_type" 
                                                            value={formData.project_type}
                                                            onChange={handleChange}
                                                            className="form-control" 
                                                        >
                                                            <option value="">Project Type</option>
                                                            <option value="full-replacement">Full Siding Replacement</option>
                                                            <option value="partial">Partial Replacement/Repair</option>
                                                            <option value="new-construction">New Construction</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <select 
                                                            name="home_size" 
                                                            value={formData.home_size}
                                                            onChange={handleChange}
                                                            className="form-control" 
                                                        >
                                                            <option value="">Home Size</option>
                                                            <option value="small">Small (Under 1,500 sq ft)</option>
                                                            <option value="medium">Medium (1,500-2,500 sq ft)</option>
                                                            <option value="large">Large (2,500-3,500 sq ft)</option>
                                                            <option value="very-large">Very Large (3,500+ sq ft)</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="form-row">
                                                    <div className="col-md-12 mb-3">
                                                        <textarea 
                                                            name="message" 
                                                            value={formData.message}
                                                            onChange={handleChange}
                                                            className="form-control" 
                                                            placeholder="Tell us about your siding project" 
                                                            rows="4"
                                                        />
                                                    </div>
                                                </div>
                                                <button 
                                                    type="submit" 
                                                    className="btn btn-primary btn-lg"
                                                    disabled={isSubmitting}
                                                >
                                                    {isSubmitting ? 'Processing...' : 'Schedule Free Estimate'}
                                                </button>
                                                {submitStatus.success && (
                                                    <div className="alert alert-success mt-3">
                                                        Thank you! Your siding consultation request has been submitted. We'll contact you shortly.
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
                                            <h4 className="widget-title">Siding Services</h4>
                                            <div className="our-services-list">
                                                <ul className="list-wrap">
                                                    <li><Link href="#">Vinyl Siding Installation<i className="fas fa-arrow-right" /></Link></li>
                                                    <li><Link href="#">Fiber Cement Siding<i className="fas fa-arrow-right" /></Link></li>
                                                    <li><Link href="#">Engineered Wood Siding<i className="fas fa-arrow-right" /></Link></li>
                                                    <li><Link href="#">Cedar & Wood Siding<i className="fas fa-arrow-right" /></Link></li>
                                                    <li><Link href="#">Insulated Siding<i className="fas fa-arrow-right" /></Link></li>
                                                    <li><Link href="#">Siding Repair & Maintenance<i className="fas fa-arrow-right" /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="services-widget widget-bg" data-background="/assets/img/services/sw_bg.jpg">
                                            <h4 className="widget-title">Get a Free Siding Estimate</h4>
                                            <form action="#" className="sidebar-form">
                                                <div className="form-grp">
                                                    <input id="name" type="text" placeholder="Your Name" />
                                                </div>
                                                <div className="form-grp">
                                                    <input id="email" type="text" placeholder="Your Email Address" />
                                                </div>
                                                <div className="form-grp">
                                                    <textarea id="message" placeholder="Siding Project Details" />
                                                </div>
                                                <button type="submit" className="btn btn-two">Request Estimate</button>
                                            </form>
                                        </div>
                                        <div className="services-widget">
                                            <h4 className="widget-title">Siding Resources</h4>
                                            <div className="download-wrap">
                                                <Link href="/assets/docs/siding-materials-guide.pdf" download target="_blank"><i className="fas fa-cloud-download-alt" />Siding Materials Guide.pdf</Link>
                                                <Link href="/assets/docs/siding-maintenance-tips.pdf" download target="_blank"><i className="fas fa-file-pdf" />Siding Maintenance Guide.pdf</Link>
                                            </div>
                                        </div>
                                        <div className="services-widget">
                                            <h4 className="widget-title">Service Areas</h4>
                                            <div className="service-areas-content">
                                                <p>We provide professional siding installation services throughout the greater Pittsburgh metropolitan area, including:</p>
                                                <div className="row">
                                                    <div className="col-6">
                                                        <ul className="service-areas-list">
                                                            <li>Pittsburgh</li>
                                                            <li>Robinson Township</li>
                                                            <li>Upper St. Clair</li>
                                                            <li>Mt. Lebanon</li>
                                                            <li>Bethel Park</li>
                                                            <li>South Hills</li>
                                                            <li>North Hills</li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-6">
                                                        <ul className="service-areas-list">
                                                            <li>Wexford</li>
                                                            <li>Sewickley</li>
                                                            <li>Cranberry Township</li>
                                                            <li>Moon Township</li>
                                                            <li>Peters Township</li>
                                                            <li>Carnegie</li>
                                                            <li>And surrounding areas</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <p className="mt-3"><i className="fas fa-map-marker-alt"></i> 1468 Old Steubenville Pike, suite d, Pittsburgh, PA 15205</p>
                                                <p><i className="fas fa-phone"></i> (412) 200-2475</p>
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
            metaTitle: "Professional Siding Installation in Pittsburgh | Kletz Contracting",
            metaDescription: "Expert siding installation services in Pittsburgh. Vinyl, fiber cement, and engineered wood siding with quality craftsmanship and free estimates from Kletz Contracting.",
            canonicalUrl: "https://www.kletzcontracting.com/services/siding",
            serviceSchema: {
                "@context": "https://schema.org",
                "@type": "Service",
                "name": "Siding Installation Services",
                "serviceType": "Siding Installation",
                "provider": {
                    "@type": "RoofingContractor",
                    "name": "Kletz Contracting",
                    "url": "https://kletzcontracting.com"
                },
                "areaServed": [
                    {
                        "@type": "City",
                        "name": "Pittsburgh"
                    },
                    {
                        "@type": "City",
                        "name": "Robinson Township"
                    },
                    {
                        "@type": "City",
                        "name": "Upper St. Clair"
                    },
                    {
                        "@type": "City",
                        "name": "Mt. Lebanon"
                    },
                    {
                        "@type": "City",
                        "name": "Bethel Park"
                    },
                    {
                        "@type": "City",
                        "name": "South Hills"
                    },
                    {
                        "@type": "City",
                        "name": "Wexford"
                    },
                    {
                        "@type": "City",
                        "name": "Sewickley"
                    },
                    {
                        "@type": "City",
                        "name": "Cranberry Township"
                    },
                    {
                        "@type": "City",
                        "name": "Moon Township"
                    },
                    {
                        "@type": "City",
                        "name": "Peters Township"
                    },
                    {
                        "@type": "City",
                        "name": "North Hills"
                    },
                    {
                        "@type": "City",
                        "name": "Carnegie"
                    }
                ],
                "description": "Professional siding installation services in Pittsburgh including vinyl, fiber cement, engineered wood, cedar, and insulated siding options. Quality materials and expert installation with free estimates.",
                "offers": {
                    "@type": "Offer",
                    "priceSpecification": {
                        "@type": "PriceSpecification",
                        "priceCurrency": "USD"
                    }
                },
                "termsOfService": "Free consultations and estimates provided",
                "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Siding Services",
                    "itemListElement": [
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Vinyl Siding Installation"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Fiber Cement Siding"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Engineered Wood Siding"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Cedar & Wood Siding"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Insulated Siding"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Siding Repair & Maintenance"
                            }
                        }
                    ]
                }
            }
        },
    };
}