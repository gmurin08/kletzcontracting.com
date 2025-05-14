import Layout from "@/components/layout/Layout"
import Brand3 from "@/components/sections/Brand3"
import { useState } from "react"
import Link from "next/link"
import Head from "next/head"
import Script from "next/script"
import LocalBusinessSchema from "@/components/LocalBusinessSchema"
import MainContact from "@/components/elements/MainContact"
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
        remodel_type: '',
        address: '',
        preferred_timeline: '',
        budget_range: '',
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
            const response = await fetch('/api/home-remodeling/inquiry', {
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
                remodel_type: '',
                address: '',
                preferred_timeline: '',
                budget_range: '',
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
                id="home-remodeling-service-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(props.serviceSchema) }}
            />
            
            <Layout breadcrumbTitle="Home Remodeling Services">
                <div>
                    <section className="services-details-area pt-120">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-8">
                                    <div className="services-details-wrap" >
                                        <div className="services-details-thumb">
                                            <img src="/assets/img/services/home-remodeling-main.jpg" alt="Professional Home Remodeling in Pittsburgh" />
                                        </div>
                                        <div className="services-details-content">
                                            <h2 className="title">Expert Home Remodeling in Pittsburgh</h2>
                                            <p>Transform your living space with premium home remodeling services from Kletz Contracting. Our Pittsburgh remodeling experts blend creative design, quality craftsmanship, and attentive project management to deliver stunning renovations that enhance your lifestyle and increase your property value. Whether you're updating a single room or renovating your entire house, our comprehensive design-build approach ensures a seamless process from initial concept to beautiful completion.</p>

                                            <div className="services-process-wrap">
                                                <div className="row justify-content-center">
                                                    <div className="col-lg-6 col-md-8" style={{paddingBottom:'40px', display:'flex', alignItems:'center', justifyContent:'center'}}>
                                                            <div>
                                                            <img style={processSideImg} src="/assets/img/services/remodeling-process.jpg" alt="Home Remodeling Design Process in Pittsburgh" />
                                                            </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="services-process-content">
                                                            <h2 className="title">Our Remodeling Process</h2>
                                                            <ul className="list-wrap">
                                                                <li>
                                                                    <div className="services-process-item">
                                                                        <div className="icon">
                                                                            <img src="/assets/img/icon/flat_check.svg" alt="" />
                                                                        </div>
                                                                        <div className="content">
                                                                            <h4 className="title">Design Consultation</h4>
                                                                            <p>We start by understanding your goals, style preferences, and budget considerations. Our designers create detailed plans, material selections, and 3D renderings to visualize your space before construction begins.</p>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="services-process-item">
                                                                        <div className="icon">
                                                                            <img src="/assets/img/icon/flat_check.svg" alt="" />
                                                                        </div>
                                                                        <div className="content">
                                                                            <h4 className="title">Detailed Planning</h4>
                                                                            <p>Our team develops comprehensive project specifications, obtains necessary permits, orders materials, and creates a realistic timeline. This thorough preparation ensures smooth execution and minimal surprises.</p>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="services-process-item">
                                                                        <div className="icon">
                                                                            <img src="/assets/img/icon/flat_check.svg" alt="" />
                                                                        </div>
                                                                        <div className="content">
                                                                            <h4 className="title">Quality Construction</h4>
                                                                            <p>Our skilled craftsmen execute your remodeling project with attention to detail and quality craftsmanship. We maintain clear communication, clean job sites, and respect for your home throughout the entire construction process.</p>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <h2 className="title-two">Why Choose Kletz Contracting for Your Remodel</h2>
                                            <p>Since 1996, homeowners throughout Pittsburgh have trusted Kletz Contracting to deliver exceptional remodeling results. Our experienced team combines professional design services, quality construction, and personalized project management to ensure a positive remodeling experience.</p>

                                            <div className="service-benefits-wrap">
                                                <div className="row">
                                                    {/* <div className="col-lg-7 order-0 order-lg-2">
                                                        <div className="benefits-img">
                                                            <img src="/assets/img/services/remodeling_benefits1.jpg" alt="Kitchen Remodeling in Pittsburgh" />
                                                            <img src="/assets/img/services/remodeling_benefits2.jpg" alt="Whole House Renovation" />
                                                        </div>
                                                    </div> */}
                                                    <div className="col-lg-5">
                                                        <div className="benefits-content">
                                                            <h2 className="title">Our Remodeling Advantages</h2>
                                                            <ul className="list-wrap">
                                                                <li><i className="fas fa-check-circle" />Licensed, insured, and locally owned since 1996</li>
                                                                <li><i className="fas fa-check-circle" />Complete design-build services under one roof</li>
                                                                <li><i className="fas fa-check-circle" />Premium materials and quality craftsmanship</li>
                                                                <li><i className="fas fa-check-circle" />Transparent pricing and detailed contracts</li>
                                                                <li><i className="fas fa-check-circle" />Dedicated project managers for each renovation</li>
                                                                <li><i className="fas fa-check-circle" />Comprehensive warranties on labor and materials</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="remodeling-services mt-60">
                                                <h2 className="title">Our Remodeling Services</h2>
                                                <p>We offer comprehensive remodeling services to transform every area of your home:</p>
                                                
                                                <div className="row mt-4">
                                                    <div className="col-md-6">
                                                        <div className="remodeling-item mb-4">
                                                            <h4>Kitchen Remodeling</h4>
                                                            <p>Create the heart of your home with custom cabinets, premium countertops, energy-efficient appliances, and functional layouts. Our kitchen renovations blend beauty and functionality for spaces that inspire culinary creativity.</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="remodeling-item mb-4">
                                                            <h4>Bathroom Remodeling</h4>
                                                            <p>Transform outdated bathrooms into luxurious retreats with custom showers, soaking tubs, quality fixtures, and stunning tile work. Our bathroom renovations combine style, comfort, and durability for daily enjoyment.</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="remodeling-item mb-4">
                                                            <h4>Basement Finishing</h4>
                                                            <p>Convert underutilized basement space into functional living areas including recreation rooms, home theaters, bars, guest suites, or home offices. Our basement remodels include proper moisture control, insulation, and premium finishes.</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="remodeling-item mb-4">
                                                            <h4>Whole House Renovations</h4>
                                                            <p>Completely transform your home with comprehensive renovations that address multiple rooms and systems. Our whole-house remodels update layouts, finishes, and functionality while maintaining architectural integrity.</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="remodeling-item mb-4">
                                                            <h4>Interior Reconfiguration</h4>
                                                            <p>Improve flow and functionality by removing walls, reconfiguring layouts, or repurposing spaces. Our structural expertise ensures that your new floor plan enhances livability while maintaining structural integrity.</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="remodeling-item mb-4">
                                                            <h4>Historic Home Renovations</h4>
                                                            <p>Preserve the character of Pittsburgh's historic homes while updating systems and functionality. Our historic renovations blend period-appropriate details with modern amenities for the best of both worlds.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* <div className="cta-area text-center mt-60">
                                                <h2 className="title">Ready to Transform Your Home?</h2>
                                                <p>Complete the form below to schedule a free design consultation for your remodeling project. Our Pittsburgh experts will discuss your vision, explore options, and provide a detailed proposal.</p>

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
                                                            name="remodel_type" 
                                                            value={formData.remodel_type}
                                                            onChange={handleChange}
                                                            className="form-control" 
                                                            required
                                                        >
                                                            <option value="">Select Remodel Type</option>
                                                            <option value="kitchen">Kitchen Remodeling</option>
                                                            <option value="bathroom">Bathroom Remodeling</option>
                                                            <option value="basement">Basement Finishing</option>
                                                            <option value="whole-house">Whole House Renovation</option>
                                                            <option value="reconfiguration">Interior Reconfiguration</option>
                                                            <option value="historic">Historic Home Renovation</option>
                                                            <option value="other">Other Remodeling Project</option>
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
                                                            name="preferred_timeline" 
                                                            value={formData.preferred_timeline}
                                                            onChange={handleChange}
                                                            className="form-control" 
                                                        >
                                                            <option value="">Preferred Timeline</option>
                                                            <option value="1-3">1-3 Months</option>
                                                            <option value="3-6">3-6 Months</option>
                                                            <option value="6-12">6-12 Months</option>
                                                            <option value="planning">Just Planning</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <select 
                                                            name="budget_range" 
                                                            value={formData.budget_range}
                                                            onChange={handleChange}
                                                            className="form-control" 
                                                        >
                                                            <option value="">Budget Range</option>
                                                            <option value="under-25k">Under $25K</option>
                                                            <option value="25k-50k">$25K - $50K</option>
                                                            <option value="50k-100k">$50K - $100K</option>
                                                            <option value="100k-plus">$100K+</option>
                                                            <option value="undecided">Undecided</option>
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
                                                            placeholder="Tell us about your remodeling project" 
                                                            rows="4"
                                                        />
                                                    </div>
                                                </div>
                                                <button 
                                                    type="submit" 
                                                    className="btn btn-primary btn-lg"
                                                    disabled={isSubmitting}
                                                >
                                                    {isSubmitting ? 'Processing...' : 'Schedule Free Consultation'}
                                                </button>
                                                {submitStatus.success && (
                                                    <div className="alert alert-success mt-3">
                                                        Thank you! Your remodeling consultation request has been submitted. We'll contact you shortly.
                                                    </div>
                                                )}
                                                {submitStatus.error && (
                                                    <div className="alert alert-danger mt-3">
                                                        {submitStatus.error}
                                                    </div>
                                                )}
                                            </form>
                                            </div>*/}

                                        </div> 
                                    </div>
                                </div>

                                <div className="col-xl-4 col-lg-6">
                                    <aside className="services-sidebar">
                                        <div className="services-widget">
                                            <h4 className="widget-title">Remodeling Services</h4>
                                            <div className="our-services-list">
                                                <ul className="list-wrap">
                                                    <li><Link href="#">Kitchen Remodeling<i className="fas fa-arrow-right" /></Link></li>
                                                    <li><Link href="#">Bathroom Remodeling<i className="fas fa-arrow-right" /></Link></li>
                                                    <li><Link href="#">Basement Finishing<i className="fas fa-arrow-right" /></Link></li>
                                                    <li><Link href="#">Whole House Renovations<i className="fas fa-arrow-right" /></Link></li>
                                                    <li><Link href="#">Interior Reconfiguration<i className="fas fa-arrow-right" /></Link></li>
                                                    <li><Link href="#">Historic Home Renovations<i className="fas fa-arrow-right" /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* <div className="services-widget widget-bg" data-background="/assets/img/services/sw_bg.jpg">
                                            <h4 className="widget-title">Get a Free Design Consultation</h4>
                                            <form action="#" className="sidebar-form">
                                                <div className="form-grp">
                                                    <input id="name" type="text" placeholder="Your Name" />
                                                </div>
                                                <div className="form-grp">
                                                    <input id="email" type="text" placeholder="Your Email Address" />
                                                </div>
                                                <div className="form-grp">
                                                    <textarea id="message" placeholder="Remodeling Project Details" />
                                                </div>
                                                <button type="submit" className="btn btn-two">Request Consultation</button>
                                            </form>
                                        </div> */}
                                        {/* <div className="services-widget">
                                            <h4 className="widget-title">Resources</h4>
                                            <div className="download-wrap">
                                                <Link href="/assets/docs/remodeling-guide.pdf" download target="_blank"><i className="fas fa-cloud-download-alt" />Home Remodeling Guide.pdf</Link>
                                                <Link href="/assets/docs/renovation-portfolio.pdf" download target="_blank"><i className="fas fa-file-pdf" />Renovation Portfolio.pdf</Link>
                                            </div>
                                        </div> */}
                                        <div className="services-widget">
                                            <h4 className="widget-title">Service Areas</h4>
                                            <div className="service-areas-content">
                                                <p>We provide professional home remodeling services throughout the greater Pittsburgh metropolitan area, including:</p>
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
                    <div className="cta-area mt-60" style={{display:"flex", flexDirection:'column', justifyContent:"center"}} >
                        <h2 className="title text-center">Ready to Transform Your Home?</h2>
                        <p className="text-center" style={{paddingBottom:"50px"}}>Complete the form below to schedule a free design consultation for your remodeling project.<br/> Our Pittsburgh experts will discuss your vision, explore options, and provide a detailed proposal.</p>
                        <MainContact/>
                    </div>
                    <Brand3 />
                </div>
            </Layout>
        </>
    )
}

export async function getStaticProps() {
    return {
        props: {
            metaTitle: "Professional Home Remodeling in Pittsburgh | Kletz Contracting",
            metaDescription: "Expert home remodeling services in Pittsburgh. Kitchen, bathroom, basement and whole house renovations with quality craftsmanship from Kletz Contracting.",
            canonicalUrl: "https://www.kletzcontracting.com/services/home-remodeling",
            serviceSchema: {
                "@context": "https://schema.org",
                "@type": "Service",
                "name": "Home Remodeling Services",
                "serviceType": "Home Renovation",
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
                "description": "Professional home remodeling services in Pittsburgh including kitchen renovations, bathroom remodels, basement finishing, whole house renovations, and historic home restoration with design-build approach.",
                "offers": {
                    "@type": "Offer",
                    "priceSpecification": {
                        "@type": "PriceSpecification",
                        "priceCurrency": "USD"
                    }
                },
                "termsOfService": "Free design consultations and estimates provided",
                "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Home Remodeling Services",
                    "itemListElement": [
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Kitchen Remodeling"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Bathroom Remodeling"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Basement Finishing"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Whole House Renovations"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Interior Reconfiguration"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Historic Home Renovations"
                            }
                        }
                    ]
                }
            }
        },
    };
}