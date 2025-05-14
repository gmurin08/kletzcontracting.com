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
        flooring_type: '',
        address: '',
        service_date: '',
        square_footage: '',
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
            const response = await fetch('/api/flooring/inquiry', {
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
                flooring_type: '',
                address: '',
                service_date: '',
                square_footage: '',
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
                id="flooring-service-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(props.serviceSchema) }}
            />
            
            <Layout breadcrumbTitle="Professional Flooring Installation">
                <div>
                    <section className="services-details-area pt-120">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-8">
                                    <div className="services-details-wrap" >
                                        <div className="services-details-thumb">
                                            <img src="/assets/img/services/flooring-main.jpg" alt="Professional Flooring Installation in Pittsburgh" />
                                        </div>
                                        <div className="services-details-content">
                                            <h2 className="title">Expert Flooring Services in Pittsburgh</h2>
                                            <p>Transform your home or business with beautiful, durable new flooring from Kletz Contracting. Our Pittsburgh flooring specialists install a wide range of premium flooring materials with expert craftsmanship and attention to detail. From hardwood and luxury vinyl to tile and carpet, we handle every aspect of your flooring project including removal of old materials, subfloor preparation, and flawless installation for results that stand the test of time.</p>

                                            <div className="services-process-wrap">
                                                <div className="row justify-content-center">
                                                    <div className="col-lg-6 col-md-8" style={{paddingBottom:'40px', display:'flex', alignItems:'center', justifyContent:'center'}}>
                                                            <div>
                                                            <img style={processSideImg} src="/assets/img/services/flooring-process.jpg" alt="Flooring Installation Process in Pittsburgh" />
                                                            </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="services-process-content">
                                                            <h2 className="title">Our Flooring Process</h2>
                                                            <ul className="list-wrap">
                                                                <li>
                                                                    <div className="services-process-item">
                                                                        <div className="icon">
                                                                            <img src="/assets/img/icon/flat_check.svg" alt="" />
                                                                        </div>
                                                                        <div className="content">
                                                                            <h4 className="title">In-Home Consultation</h4>
                                                                            <p>We bring flooring samples to your location, measure the space, assess your subflooring, and help you select the perfect flooring solution based on your lifestyle, design preferences, and budget.</p>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="services-process-item">
                                                                        <div className="icon">
                                                                            <img src="/assets/img/icon/flat_check.svg" alt="" />
                                                                        </div>
                                                                        <div className="content">
                                                                            <h4 className="title">Professional Preparation</h4>
                                                                            <p>Our team carefully removes existing flooring, prepares the subfloor, and addresses any issues like leveling or moisture concerns to ensure a solid foundation for your new floors.</p>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="services-process-item">
                                                                        <div className="icon">
                                                                            <img src="/assets/img/icon/flat_check.svg" alt="" />
                                                                        </div>
                                                                        <div className="content">
                                                                            <h4 className="title">Expert Installation</h4>
                                                                            <p>Our skilled installers work with precision and care to install your new flooring according to manufacturer specifications. We pay careful attention to details like transitions, trim, and finishing touches for a flawless result.</p>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <h2 className="title-two">Why Choose Kletz Contracting for Your Flooring</h2>
                                            <p>With decades of experience serving homeowners and businesses across Pittsburgh, our flooring professionals deliver exceptional results on every project. We take pride in our attention to detail, transparent pricing, and commitment to quality installations that look beautiful and perform for years to come.</p>

                                            <div className="service-benefits-wrap">
                                                <div className="row">
                                                    {/* <div className="col-lg-7 order-0 order-lg-2">
                                                        <div className="benefits-img">
                                                            <img src="/assets/img/services/flooring_benefits1.jpg" alt="Hardwood Flooring Installation in Pittsburgh" />
                                                            <img src="/assets/img/services/flooring_benefits2.jpg" alt="Luxury Vinyl Plank Flooring" />
                                                        </div>
                                                    </div> */}
                                                    <div className="col-lg-5">
                                                        <div className="benefits-content">
                                                            <h2 className="title">Our Flooring Advantages</h2>
                                                            <ul className="list-wrap">
                                                                <li><i className="fas fa-check-circle" />Licensed, insured, and locally owned</li>
                                                                <li><i className="fas fa-check-circle" />Premium materials from top manufacturers</li>
                                                                <li><i className="fas fa-check-circle" />Skilled installers with decades of experience</li>
                                                                <li><i className="fas fa-check-circle" />Dust minimization techniques for cleaner installation</li>
                                                                <li><i className="fas fa-check-circle" />Comprehensive written warranties</li>
                                                                <li><i className="fas fa-check-circle" />Precise estimates with no hidden fees</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flooring-options mt-60">
                                                <h2 className="title">Premium Flooring Options</h2>
                                                <p>We install a wide variety of high-quality flooring materials to suit any style, budget, and lifestyle needs:</p>
                                                
                                                <div className="row mt-4">
                                                    <div className="col-md-6">
                                                        <div className="material-item mb-4">
                                                            <h4>Hardwood Flooring</h4>
                                                            <p>Classic, timeless beauty with exceptional durability. Available in solid and engineered options with a variety of wood species, finishes, and plank widths to suit your design vision.</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="material-item mb-4">
                                                            <h4>Luxury Vinyl Plank & Tile</h4>
                                                            <p>Waterproof, low-maintenance option with realistic wood and stone visuals. Perfect for bathrooms, kitchens, and high-traffic areas with exceptional durability and easy care.</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="material-item mb-4">
                                                            <h4>Tile Flooring</h4>
                                                            <p>Porcelain, ceramic, and natural stone options for elegant, waterproof flooring. Ideal for bathrooms, kitchens, and entryways with endless design possibilities and exceptional longevity.</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="material-item mb-4">
                                                            <h4>Carpet & Carpet Tile</h4>
                                                            <p>Soft, comfortable flooring with sound-dampening properties. Available in a wide range of styles, textures, and performance features for residential and commercial applications.</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="material-item mb-4">
                                                            <h4>Laminate Flooring</h4>
                                                            <p>Budget-friendly option with realistic wood and stone visuals. Durable surface resists scratches and stains, making it perfect for active households and rentals.</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="material-item mb-4">
                                                            <h4>Specialty & Commercial Flooring</h4>
                                                            <p>Solutions for specific needs including rubber, cork, and commercial-grade vinyl. Perfect for gyms, medical facilities, and commercial spaces with performance-focused features.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="cta-area mt-60">
                                                <h2 className="title text-center">Ready for Beautiful New Floors?</h2>
                                                <p className="text-center" style={{paddingBottom:"20px"}}>Complete the form below to schedule a free in-home consultation and estimate. Our Pittsburgh flooring experts will bring samples and help you select the perfect flooring solution for your space.</p>

                                                <MainContact/>
                                            </div>
                                            {/* <div className="cta-area text-center mt-60">
                                                <h2 className="title">Ready for Beautiful New Floors?</h2>
                                                <p>Complete the form below to schedule a free in-home consultation and estimate. Our Pittsburgh flooring experts will bring samples and help you select the perfect flooring solution for your space.</p>

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
                                                            name="flooring_type" 
                                                            value={formData.flooring_type}
                                                            onChange={handleChange}
                                                            className="form-control" 
                                                            required
                                                        >
                                                            <option value="">Select Flooring Type</option>
                                                            <option value="hardwood">Hardwood</option>
                                                            <option value="vinyl">Luxury Vinyl</option>
                                                            <option value="tile">Tile</option>
                                                            <option value="carpet">Carpet</option>
                                                            <option value="laminate">Laminate</option>
                                                            <option value="other">Other/Not Sure</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="form-row">
                                                    <div className="col-md-6 mb-3">
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
                                                    <div className="col-md-6 mb-3">
                                                        <input 
                                                            type="text" 
                                                            name="square_footage" 
                                                            value={formData.square_footage}
                                                            onChange={handleChange}
                                                            className="form-control" 
                                                            placeholder="Approximate Square Footage" 
                                                        />
                                                    </div>
                                                </div>
                                                <div className="form-row">
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
                                                            placeholder="Tell us about your flooring project" 
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
                                                        Thank you! Your flooring consultation request has been submitted. We'll contact you shortly.
                                                    </div>
                                                )}
                                                {submitStatus.error && (
                                                    <div className="alert alert-danger mt-3">
                                                        {submitStatus.error}
                                                    </div>
                                                )}
                                            </form>
                                            </div> */}

                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-4 col-lg-6">
                                    <aside className="services-sidebar">
                                        <div className="services-widget">
                                            <h4 className="widget-title">Flooring Services</h4>
                                            <div className="our-services-list">
                                                <ul className="list-wrap">
                                                    <li><Link href="#">Hardwood Flooring<i className="fas fa-arrow-right" /></Link></li>
                                                    <li><Link href="#">Luxury Vinyl Installation<i className="fas fa-arrow-right" /></Link></li>
                                                    <li><Link href="#">Tile Flooring<i className="fas fa-arrow-right" /></Link></li>
                                                    <li><Link href="#">Carpet Installation<i className="fas fa-arrow-right" /></Link></li>
                                                    <li><Link href="#">Floor Repair & Restoration<i className="fas fa-arrow-right" /></Link></li>
                                                    <li><Link href="#">Commercial Flooring<i className="fas fa-arrow-right" /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* <div className="services-widget widget-bg" data-background="/assets/img/services/sw_bg.jpg">
                                            <h4 className="widget-title">Get a Free Flooring Estimate</h4>
                                            <form action="#" className="sidebar-form">
                                                <div className="form-grp">
                                                    <input id="name" type="text" placeholder="Your Name" />
                                                </div>
                                                <div className="form-grp">
                                                    <input id="email" type="text" placeholder="Your Email Address" />
                                                </div>
                                                <div className="form-grp">
                                                    <textarea id="message" placeholder="Flooring Project Details" />
                                                </div>
                                                <button type="submit" className="btn btn-two">Schedule Consultation</button>
                                            </form>
                                        </div>
                                        <div className="services-widget">
                                            <h4 className="widget-title">Resources</h4>
                                            <div className="download-wrap">
                                                <Link href="/assets/docs/flooring-materials-guide.pdf" download target="_blank"><i className="fas fa-cloud-download-alt" />Flooring Materials Guide.pdf</Link>
                                                <Link href="/assets/docs/flooring-maintenance-tips.pdf" download target="_blank"><i className="fas fa-file-pdf" />Flooring Maintenance Tips.pdf</Link>
                                            </div>
                                        </div> */}
                                        <div className="services-widget">
                                            <h4 className="widget-title">Service Areas</h4>
                                            <div className="service-areas-content">
                                                <p>We provide professional flooring services throughout the greater Pittsburgh metropolitan area, including:</p>
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
            metaTitle: "Professional Flooring Installation in Pittsburgh | Kletz Contracting",
            metaDescription: "Expert flooring installation services in Pittsburgh. Hardwood, luxury vinyl, tile, and carpet installation with free in-home consultations from Kletz Contracting.",
            canonicalUrl: "https://www.kletzcontracting.com/services/flooring",
            serviceSchema: {
                "@context": "https://schema.org",
                "@type": "Service",
                "name": "Flooring Installation Services",
                "serviceType": "Flooring Installation",
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
                "description": "Professional flooring installation services in Pittsburgh including hardwood, luxury vinyl, tile, and carpet. Quality materials and expert installation with free in-home consultations.",
                "offers": {
                    "@type": "Offer",
                    "priceSpecification": {
                        "@type": "PriceSpecification",
                        "priceCurrency": "USD"
                    }
                },
                "termsOfService": "Free in-home consultations and estimates provided",
                "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Flooring Services",
                    "itemListElement": [
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Hardwood Flooring Installation"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Luxury Vinyl Installation"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Tile Flooring Installation"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Carpet Installation"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Floor Repair & Restoration"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Commercial Flooring"
                            }
                        }
                    ]
                }
            }
        },
    };
}