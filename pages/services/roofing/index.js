import Layout from "@/components/layout/Layout"
import Brand3 from "@/components/sections/Brand3"
import { useState } from "react"
import Link from "next/link"
import PageHead from "@/components/layout/PageHead"
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
            <PageHead 
                headTitle={props.metaTitle}
                metaDescription={props.metaDescription}
                canonicalUrl={props.canonicalUrl}
                keywords="roofing contractor Robinson Township PA, roof repair Pittsburgh, roof replacement Robinson Township, shingle roofing Allegheny County, metal roofing Pittsburgh PA, emergency roof repair, storm damage repair, commercial roofing Pittsburgh"
                structuredData={props.serviceSchema}
            />
            
            {/* Include the main business schema */}
            <LocalBusinessSchema />
            
            
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
                                            <h2 className="title">Protect Your Home with a Roof That Lasts</h2>
                                            <p className="lead"><strong>Is your roof leaking? Worried about storm damage? Need a trusted contractor who won't overcharge?</strong></p>
                                            <p>We understand how stressful roofing problems can be. That's why Pittsburgh homeowners have trusted Kletz Contracting since 1996 to deliver honest assessments, fair pricing, and roofs that protect what matters most—your family and investment. Whether you need emergency repairs or a complete replacement, we're here to give you peace of mind with a roof that performs year after year.</p>
                                            
                                            <div className="customer-benefits-banner mt-4 mb-4 p-4" style={{backgroundColor: "#f8f9fa", borderRadius: "10px"}}>
                                                <h3 className="mb-3">Why Homeowners Choose Us:</h3>
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <div className="benefit-item text-center p-3">
                                                            <i className="fas fa-shield-alt fa-3x mb-3" style={{color: "#E74C3C"}}></i>
                                                            <h5>Lifetime Warranties</h5>
                                                            <p className="small">Sleep soundly knowing your roof is protected</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="benefit-item text-center p-3">
                                                            <i className="fas fa-calendar-check fa-3x mb-3" style={{color: "#E74C3C"}}></i>
                                                            <h5>On-Time, On-Budget</h5>
                                                            <p className="small">No surprises, just honest work</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="benefit-item text-center p-3">
                                                            <i className="fas fa-hand-holding-usd fa-3x mb-3" style={{color: "#E74C3C"}}></i>
                                                            <h5>Insurance Help</h5>
                                                            <p className="small">We work with your insurance to maximize coverage</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="services-process-wrap">
                                                <div className="row justify-content-center">
                                                    <div className="col-lg-6 col-md-8" style={{paddingBottom:'40px', display:'flex', alignItems:'center', justifyContent:'center'}}>
                                                            <div>
                                                            <img style={processSideImg} src="/assets/img/services/roofing-process.jpg" alt="Roofing Installation Process in Pittsburgh" />
                                                            </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="services-process-content">
                                                            <h2 className="title">Simple Steps to a Worry-Free Roof</h2>
                                                            <ul className="list-wrap">
                                                                <li>
                                                                    <div className="services-process-item">
                                                                        <div className="icon">
                                                                            <img src="/assets/img/icon/flat_check.svg" alt="" />
                                                                        </div>
                                                                        <div className="content">
                                                                            <h4 className="title">1. Free, No-Pressure Inspection</h4>
                                                                            <p>We'll thoroughly check your roof and show you exactly what we find—with photos. No scare tactics, just honest assessment. If your roof is fine, we'll tell you!</p>
                                                                            <Link href="#contact-form" className="btn btn-sm btn-outline-danger mt-2">Schedule Free Inspection</Link>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="services-process-item">
                                                                        <div className="icon">
                                                                            <img src="/assets/img/icon/flat_check.svg" alt="" />
                                                                        </div>
                                                                        <div className="content">
                                                                            <h4 className="title">2. Clear Options & Fair Pricing</h4>
                                                                            <p>Get multiple solutions to fit your budget—from repairs to full replacement. We'll explain pros and cons of each option. Price guaranteed in writing for 30 days.</p>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="services-process-item">
                                                                        <div className="icon">
                                                                            <img src="/assets/img/icon/flat_check.svg" alt="" />
                                                                        </div>
                                                                        <div className="content">
                                                                            <h4 className="title">3. Expert Installation & Clean-Up</h4>
                                                                            <p>Our certified crews complete most roofs in 1-2 days. We protect your property, clean up daily, and a final magnetic sweep ensures no nails left behind.</p>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="common-problems-section mt-5 mb-5">
                                                <h2 className="title-two">Common Roofing Problems We Solve</h2>
                                                <div className="row mt-4">
                                                    <div className="col-md-6 mb-4">
                                                        <div className="problem-card p-4" style={{backgroundColor: "#fff", border: "1px solid #e0e0e0", borderRadius: "8px", height: "100%"}}>
                                                            <h4><i className="fas fa-tint" style={{color: "#E74C3C"}}></i> Persistent Leaks</h4>
                                                            <p className="mb-2">Water stains on ceilings? Drips during storms? We'll find the source and fix it right the first time.</p>
                                                            <p className="text-success"><strong>✓ Same-day emergency service available</strong></p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-4">
                                                        <div className="problem-card p-4" style={{backgroundColor: "#fff", border: "1px solid #e0e0e0", borderRadius: "8px", height: "100%"}}>
                                                            <h4><i className="fas fa-wind" style={{color: "#E74C3C"}}></i> Storm & Wind Damage</h4>
                                                            <p className="mb-2">Missing shingles? Hail damage? We handle insurance claims and restore your protection fast.</p>
                                                            <p className="text-success"><strong>✓ Free storm damage assessments</strong></p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-4">
                                                        <div className="problem-card p-4" style={{backgroundColor: "#fff", border: "1px solid #e0e0e0", borderRadius: "8px", height: "100%"}}>
                                                            <h4><i className="fas fa-clock" style={{color: "#E74C3C"}}></i> Aging Roof</h4>
                                                            <p className="mb-2">Roof over 20 years old? Curling shingles? Get an honest assessment of whether you need repairs or replacement.</p>
                                                            <p className="text-success"><strong>✓ No-pressure consultations</strong></p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-4">
                                                        <div className="problem-card p-4" style={{backgroundColor: "#fff", border: "1px solid #e0e0e0", borderRadius: "8px", height: "100%"}}>
                                                            <h4><i className="fas fa-dollar-sign" style={{color: "#E74C3C"}}></i> Budget Concerns</h4>
                                                            <p className="mb-2">Worried about costs? We offer flexible financing and work to find solutions within your budget.</p>
                                                            <p className="text-success"><strong>✓ 0% financing available</strong></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <h2 className="title-two">What Makes Us Different</h2>
                                            <p>While other contractors focus on quick sales, we focus on your long-term satisfaction. Here's our promise to you:</p>

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
                                                            <h2 className="title">The Kletz Promise</h2>
                                                            <ul className="list-wrap">
                                                                <li><i className="fas fa-check-circle" /><strong>No Surprises:</strong> Fixed pricing in writing before we start</li>
                                                                <li><i className="fas fa-check-circle" /><strong>Your Schedule:</strong> We work around your life, not ours</li>
                                                                <li><i className="fas fa-check-circle" /><strong>Clean Job Sites:</strong> Your property protected and spotless daily</li>
                                                                <li><i className="fas fa-check-circle" /><strong>Direct Communication:</strong> You'll have your project manager's cell phone</li>
                                                                <li><i className="fas fa-check-circle" /><strong>Local Expertise:</strong> We know Pittsburgh weather and building codes</li>
                                                                <li><i className="fas fa-check-circle" /><strong>Stand Behind Our Work:</strong> Full warranties you can actually use</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="roofing-options mt-60">
                                                <h2 className="title">Find the Perfect Roof for Your Home & Budget</h2>
                                                <p>Not sure which roofing material is right for you? We'll help you compare options based on your specific needs, climate considerations, and budget:</p>
                                                
                                                <div className="row mt-4">
                                                    <div className="col-md-6">
                                                        <div className="material-item mb-4">
                                                            <h4>Asphalt Shingles <span className="badge bg-success ms-2">Most Popular</span></h4>
                                                            <p className="mb-2"><strong>Best for:</strong> Homeowners wanting great protection without breaking the bank</p>
                                                            <p className="mb-0">• <strong>Cost:</strong> $$ • <strong>Lifespan:</strong> 25-50 years • <strong>Colors:</strong> 30+ options</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="material-item mb-4">
                                                            <h4>Metal Roofing <span className="badge bg-primary ms-2">Energy Saver</span></h4>
                                                            <p className="mb-2"><strong>Best for:</strong> Maximum durability and lower energy bills</p>
                                                            <p className="mb-0">• <strong>Cost:</strong> $$$ • <strong>Lifespan:</strong> 40-70 years • <strong>Saves:</strong> Up to 25% on cooling</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="material-item mb-4">
                                                            <h4>Flat Roofing Systems</h4>
                                                            <p className="mb-2"><strong>Best for:</strong> Low-slope roofs and modern designs</p>
                                                            <p className="mb-0">• <strong>Cost:</strong> $$ • <strong>Lifespan:</strong> 20-30 years • <strong>Maintenance:</strong> Minimal</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="material-item mb-4">
                                                            <h4>Premium Options <span className="badge bg-warning ms-2">Luxury</span></h4>
                                                            <p className="mb-2"><strong>Best for:</strong> Distinctive curb appeal and maximum value</p>
                                                            <p className="mb-0">• <strong>Cost:</strong> $$$$ • <strong>Lifespan:</strong> 50+ years • <strong>ROI:</strong> Highest resale value</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="trust-indicators mt-5 mb-5 text-center">
                                                <div className="rating-badge d-inline-block p-3" style={{backgroundColor: "#f8f9fa", borderRadius: "10px"}}>
                                                    <div className="mb-2">
                                                        <i className="fas fa-star" style={{color: "#FFD700", fontSize: "1.5rem"}}></i>
                                                        <i className="fas fa-star" style={{color: "#FFD700", fontSize: "1.5rem"}}></i>
                                                        <i className="fas fa-star" style={{color: "#FFD700", fontSize: "1.5rem"}}></i>
                                                        <i className="fas fa-star" style={{color: "#FFD700", fontSize: "1.5rem"}}></i>
                                                        <i className="fas fa-star" style={{color: "#FFD700", fontSize: "1.5rem"}}></i>
                                                    </div>
                                                    <h3 className="mb-0">5-Star Rated Roofing Contractor</h3>
                                                    <p className="mb-0 mt-2">Trusted by Pittsburgh homeowners since 1996</p>
                                                </div>
                                            </div>

                                            <div className="guarantee-section mt-5 text-center p-4" style={{backgroundColor: "#E74C3C", color: "white", borderRadius: "10px"}}>
                                                <h3 className="mb-3">Our 100% Satisfaction Guarantee</h3>
                                                <p className="lead mb-3" style={{color:'white'}}>If you're not completely satisfied with our work, we'll make it right—guaranteed.</p>
                                                <p className="mb-0" style={{color:'white'}}>That's our promise to you, backed by 28+ years serving Pittsburgh.</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-4 col-lg-6">
                                    <aside className="services-sidebar">
                                        <div className="services-widget">
                                            <h4 className="widget-title">Popular Services</h4>
                                            <div className="our-services-list">
                                                <ul className="list-wrap">
                                                    <li><Link href="/services/roofing/emergency-leak-repair">Emergency Leak Repair<i className="fas fa-arrow-right" /></Link></li>
                                                    <li><Link href="#">Complete Roof Replacement<i className="fas fa-arrow-right" /></Link></li>
                                                    <li><Link href="#">Storm Damage Assessment<i className="fas fa-arrow-right" /></Link></li>
                                                    <li><Link href="#">Preventive Maintenance<i className="fas fa-arrow-right" /></Link></li>
                                                    <li><Link href="#">Insurance Claim Help<i className="fas fa-arrow-right" /></Link></li>
                                                    <li><Link href="#">Gutter Protection<i className="fas fa-arrow-right" /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="services-widget" style={{backgroundColor: "#E74C3C", color: "white", padding: "20px", borderRadius: "10px"}}>
                                            <h4 className="widget-title" style={{color: "white"}}>Limited Time Offer</h4>
                                            <div className="offer-content text-center">
                                                <h3 style={{color: "white"}}>$500 OFF</h3>
                                                <p className="mb-3">Complete Roof Replacement</p>
                                                <p className="small mb-3">Plus FREE gutter guards with full replacement</p>
                                                <Link href="#contact-form" className="btn btn-light">Claim Offer</Link>
                                                <p className="small mt-2 mb-0">*New customers only. Expires 30 days from today.</p>
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
                                            <h4 className="widget-title">Need Help Now?</h4>
                                            <div className="emergency-info">
                                                <div className="text-center mb-3">
                                                    <h3 style={{color: "#E74C3C"}}><i className="fas fa-phone-alt"></i> (412) 219-7279</h3>
                                                    <p className="mb-2"><strong>24/7 Emergency Service</strong></p>
                                                </div>
                                                <div className="quick-response-times p-3" style={{backgroundColor: "#f8f9fa", borderRadius: "8px"}}>
                                                    <p className="mb-2"><strong>Average Response Times:</strong></p>
                                                    <p className="mb-1">• Emergency calls: <strong>2-4 hours</strong></p>
                                                    <p className="mb-1">• Free inspections: <strong>24-48 hours</strong></p>
                                                    <p className="mb-0">• Project start: <strong>Within 1 week</strong></p>
                                                </div>
                                                <p className="mt-3 text-center"><strong>Serving all of Greater Pittsburgh</strong></p>
                                                <p className="address-info text-center"><i className="fas fa-map-marker-alt"></i> 1468 Old Steubenville Pike, suite d, Pittsburgh, PA 15205</p>
                                            </div>
                                        </div>
                                    </aside>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="cta-area mt-60" style={{display:"flex", flexDirection:'column'}} >
                        <h2 className="title text-center">Get Your Free Roof Assessment Today</h2>
                        <p className="text-center" style={{paddingBottom:"20px"}}><strong>No obligations. No high-pressure sales. Just honest advice about your roof.</strong></p>
                        <div className="text-center mb-4">
                            <p className="mb-2">✓ Free inspection within 48 hours</p>
                            <p className="mb-2">✓ Detailed photos of any issues found</p>
                            <p className="mb-2">✓ Multiple repair/replacement options</p>
                            <p>✓ Written estimates valid for 30 days</p>
                        </div>
                        <div id="contact-form">
                            <MainContact/>
                        </div>
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