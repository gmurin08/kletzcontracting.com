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
        roof_type: '',
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
            const response = await fetch('/api/roofing/inquiry', {
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
                roof_type: '',
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
                id="roofing-service-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(props.serviceSchema) }}
            />
            
            <Layout breadcrumbTitle="Professional Roofing Services">
                <div>
                    <section className="services-details-area pt-120">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-8">
                                    <div className="services-details-wrap" >
                                        <div className="services-details-thumb">
                                            <img src="/assets/img/services/roofing-main.jpg" alt="Professional Roofing Services in Pittsburgh" />
                                        </div>
                                        <div className="services-details-content">
                                            <h2 className="title">Expert Roofing Services in Pittsburgh</h2>
                                            <p>Protect your home or business with premium roofing services from Kletz Contracting. As Pittsburgh's trusted roofing contractor, we deliver exceptional craftsmanship and reliable protection against Pennsylvania's harsh weather. From roof inspections and repairs to complete replacements and storm damage restoration, our experienced team ensures quality materials, professional installation, and long-lasting results for every project.</p>

                                            <div className="services-process-wrap">
                                                <div className="row justify-content-center">
                                                    <div className="col-lg-6 col-md-8" style={{paddingBottom:'40px', display:'flex', alignItems:'center', justifyContent:'center'}}>
                                                            <div>
                                                            <img style={processSideImg} src="/assets/img/services/roofing-process.jpg" alt="Roofing Installation Process in Pittsburgh" />
                                                            </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="services-process-content">
                                                            <h2 className="title">Our Roofing Process</h2>
                                                            <ul className="list-wrap">
                                                                <li>
                                                                    <div className="services-process-item">
                                                                        <div className="icon">
                                                                            <img src="/assets/img/icon/flat_check.svg" alt="" />
                                                                        </div>
                                                                        <div className="content">
                                                                            <h4 className="title">Thorough Inspection</h4>
                                                                            <p>We begin with a comprehensive roof evaluation to assess current conditions, identify damage, and determine the best course of action. Our detailed inspection includes attic ventilation and structural integrity checks.</p>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="services-process-item">
                                                                        <div className="icon">
                                                                            <img src="/assets/img/icon/flat_check.svg" alt="" />
                                                                        </div>
                                                                        <div className="content">
                                                                            <h4 className="title">Detailed Estimate</h4>
                                                                            <p>Receive a clear, comprehensive estimate outlining all necessary work, material options, costs, and project timeline. We explain your options and help you select the best roofing solution for your needs and budget.</p>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="services-process-item">
                                                                        <div className="icon">
                                                                            <img src="/assets/img/icon/flat_check.svg" alt="" />
                                                                        </div>
                                                                        <div className="content">
                                                                            <h4 className="title">Professional Installation</h4>
                                                                            <p>Our skilled roofing teams work efficiently and with precision to install your new roof. We use only premium materials, follow manufacturer specifications, and maintain a clean job site throughout the process.</p>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <h2 className="title-two">Why Choose Kletz Contracting for Your Roof</h2>
                                            <p>Since 1996, homeowners and businesses across Pittsburgh have trusted Kletz Contracting for reliable, high-quality roofing services. We combine industry expertise with dedicated customer service to deliver roofing solutions that stand the test of time.</p>

                                            <div className="service-benefits-wrap">
                                                <div className="row">
                                                    {/* <div className="col-lg-7 order-0 order-lg-2">
                                                        <div className="benefits-img">
                                                            <img src="/assets/img/services/roofing_benefits1.jpg" alt="Quality Roof Installation in Pittsburgh" />
                                                            <img src="/assets/img/services/roofing_benefits2.jpg" alt="Shingle Roof Replacement" />
                                                        </div>
                                                    </div> */}
                                                    <div className="col-lg-5">
                                                        <div className="benefits-content">
                                                            <h2 className="title">Our Roofing Advantages</h2>
                                                            <ul className="list-wrap">
                                                                <li><i className="fas fa-check-circle" />Licensed, insured, and locally owned since 1996</li>
                                                                <li><i className="fas fa-check-circle" />Premium materials with manufacturer warranties</li>
                                                                <li><i className="fas fa-check-circle" />Experienced crews dedicated to quality craftsmanship</li>
                                                                <li><i className="fas fa-check-circle" />Transparent pricing with no hidden fees</li>
                                                                <li><i className="fas fa-check-circle" />Emergency services available for urgent repairs</li>
                                                                <li><i className="fas fa-check-circle" />Insurance claim assistance for storm damage</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="roofing-options mt-60">
                                                <h2 className="title">Roofing Material Options</h2>
                                                <p>We offer a variety of quality roofing materials to match your home's style, durability needs, and budget considerations:</p>
                                                
                                                <div className="row mt-4">
                                                    <div className="col-md-6">
                                                        <div className="material-item mb-4">
                                                            <h4>Asphalt Shingles</h4>
                                                            <p>Our most popular option, offering excellent value, durability, and variety of colors and styles. Available in architectural and 3-tab designs with 25-50 year warranties.</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="material-item mb-4">
                                                            <h4>Metal Roofing</h4>
                                                            <p>Long-lasting option with exceptional durability and energy efficiency. Available in standing seam, metal shingle, and panel systems with 40+ year lifespans.</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="material-item mb-4">
                                                            <h4>Flat Roofing Systems</h4>
                                                            <p>Specialized solutions for low-slope and flat roofs including EPDM, TPO, and modified bitumen membranes. Ideal for commercial buildings and modern home designs.</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="material-item mb-4">
                                                            <h4>Premium Options</h4>
                                                            <p>High-end materials including synthetic slate, cedar shake, and designer architectural shingles for distinctive looks and maximum durability.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            

                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-4 col-lg-6">
                                    <aside className="services-sidebar">
                                        <div className="services-widget">
                                            <h4 className="widget-title">Roofing Services</h4>
                                            <div className="our-services-list">
                                                <ul className="list-wrap">
                                                    <li><Link href="#">Roof Replacement<i className="fas fa-arrow-right" /></Link></li>
                                                    <li><Link href="#">Roof Repairs<i className="fas fa-arrow-right" /></Link></li>
                                                    <li><Link href="#">Storm Damage Restoration<i className="fas fa-arrow-right" /></Link></li>
                                                    <li><Link href="#">Commercial Roofing<i className="fas fa-arrow-right" /></Link></li>
                                                    <li><Link href="#">Roof Inspections<i className="fas fa-arrow-right" /></Link></li>
                                                    <li><Link href="#">Gutter Installation<i className="fas fa-arrow-right" /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* <div className="services-widget widget-bg" data-background="/assets/img/services/sw_bg.jpg">
                                            <h4 className="widget-title">Get a Free Roof Inspection</h4>
                                            <form action="#" className="sidebar-form">
                                                <div className="form-grp">
                                                    <input id="name" type="text" placeholder="Your Name" />
                                                </div>
                                                <div className="form-grp">
                                                    <input id="email" type="text" placeholder="Your Email Address" />
                                                </div>
                                                <div className="form-grp">
                                                    <textarea id="message" placeholder="Roofing Project Details" />
                                                </div>
                                                <button type="submit" className="btn btn-two">Schedule Inspection</button>
                                            </form>
                                        </div> */}
                                        {/* <div className="services-widget">
                                            <h4 className="widget-title">Resources</h4>
                                            <div className="download-wrap">
                                                <Link href="/assets/docs/roofing-materials-guide.pdf" download target="_blank"><i className="fas fa-cloud-download-alt" />Roofing Materials Guide.pdf</Link>
                                                <Link href="/assets/docs/roof-maintenance-tips.pdf" download target="_blank"><i className="fas fa-file-pdf" />Roof Maintenance Tips.pdf</Link>
                                            </div>
                                        </div> */}
                                        <div className="services-widget">
                                            <h4 className="widget-title">Emergency Roof Repairs</h4>
                                            <div className="emergency-info">
                                                <p>Experiencing a roof leak or storm damage? Our emergency response team is available to help minimize damage to your home.</p>
                                                <div className="emergency-phone">
                                                    <i className="fas fa-phone-alt"></i>
                                                    <span> (412) 200-2475</span>
                                                </div>
                                                <p className="mt-3">Service areas include Pittsburgh, Robinson Township, Upper St. Clair, Mt. Lebanon, Bethel Park, and surrounding communities.</p>
                                                <p className="address-info"><i className="fas fa-map-marker-alt"></i> 1468 Old Steubenville Pike, suite d, Pittsburgh, PA 15205</p>
                                            </div>
                                        </div>
                                    </aside>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="cta-area mt-60" style={{display:"flex", flexDirection:'column'}} >
                        <h2 className="title text-center">Ready for a Quality Roof Installation?</h2>
                        <p className="text-center" style={{paddingBottom:"50px"}}>Complete the form below to schedule a free roof inspection and estimate. <br/>Our Pittsburgh roofing experts will assess your needs and provide a detailed quote for your project.</p>
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
            metaTitle: "Professional Roofing Services in Pittsburgh | Kletz Contracting",
            metaDescription: "Expert roofing installation, repair, and replacement services in Pittsburgh. Quality materials, skilled craftsmen, and free estimates from Kletz Contracting.",
            canonicalUrl: "https://www.kletzcontracting.com/services/roofing",
            serviceSchema: {
                "@context": "https://schema.org",
                "@type": "Service",
                "name": "Roofing Services",
                "serviceType": "Roof Installation and Repair",
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
                        }
                    ],
                "description": "Professional roofing services in Pittsburgh including roof replacement, repairs, inspections, and storm damage restoration. Quality materials and expert installation with warranties.",

                "termsOfService": "Free inspections and estimates provided",
                "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Roofing Services",
                    "itemListElement": [
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Roof Replacement"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Roof Repairs"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Storm Damage Restoration"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Commercial Roofing"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Roof Inspections"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Gutter Installation"
                            }
                        }
                    ]
                }
            }
        },
    };
}