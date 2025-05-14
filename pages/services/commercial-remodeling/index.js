import Layout from "@/components/layout/Layout"
import Brand3 from "@/components/sections/Brand3"
import { useState } from "react"
import Link from "next/link"
import MainContact from "@/components/elements/MainContact"
const processSideImg = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
    borderRadius: '15px'
};

export default function ServiceDetails() {

    // State for form data and submission status
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        project_type: '',
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
            const response = await fetch('/api/commercial-remodeling/inquiry', {
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
                project_type: '',
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
            <Layout breadcrumbTitle="Commercial Remodeling">
                <div>
                    <section className="services-details-area pt-120">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-8">
                                    <div className="services-details-wrap" >
                                        <div className="services-details-thumb">
                                            <img src="/assets/img/services/commercial-remodeling.jpg" alt="Commercial Remodeling in Pittsburgh" />
                                        </div>
                                        <div className="services-details-content">
                                            <h2 className="title">Professional Commercial Remodeling Services in Pittsburgh</h2>
                                            <p>At Kletz Contracting, we understand that your commercial space represents your business. Our expert commercial remodeling services transform outdated facilities into modern, functional environments that enhance productivity and impress clients. Serving Pittsburgh and the surrounding areas, we deliver quality craftsmanship, transparent pricing, and minimal disruption to your daily operations.</p>

                                            <div className="services-process-wrap">
                                                <div className="row justify-content-center">
                                                    <div className="col-lg-6 col-md-8" style={{paddingBottom:'40px', display:'flex', alignItems:'center', justifyContent:'center'}}>
                                                            <div>
                                                            <img style={processSideImg} src="/assets/img/services/commercial-process1.jpg" alt="Commercial Remodeling Process" />
                                                            </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="services-process-content">
                                                            <h2 className="title">Our Proven Process</h2>
                                                            <ul className="list-wrap">
                                                                <li>
                                                                    <div className="services-process-item">
                                                                        <div className="icon">
                                                                            <img src="/assets/img/icon/flat_check.svg" alt="" />
                                                                        </div>
                                                                        <div className="content">
                                                                            <h4 className="title">Initial Consultation</h4>
                                                                            <p>We meet to understand your goals, budget, and timeline. Our team will assess your space and discuss potential solutions tailored to your business needs.</p>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="services-process-item">
                                                                        <div className="icon">
                                                                            <img src="/assets/img/icon/flat_check.svg" alt="" />
                                                                        </div>
                                                                        <div className="content">
                                                                            <h4 className="title">Design & Planning</h4>
                                                                            <p>Our design team creates detailed plans including material selections, layout optimization, and comprehensive cost estimates for your approval.</p>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="services-process-item">
                                                                        <div className="icon">
                                                                            <img src="/assets/img/icon/flat_check.svg" alt="" />
                                                                        </div>
                                                                        <div className="content">
                                                                            <h4 className="title">Professional Execution</h4>
                                                                            <p>Our experienced crew completes the project with superior craftsmanship, respecting your schedule, and maintaining clear communication throughout the construction phase.</p>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <h2 className="title-two">Why Choose Kletz Contracting?</h2>
                                            <p>With over 15 years serving the Pittsburgh area, our team has established a reputation for excellence in commercial construction and remodeling. We prioritize quality craftsmanship, clear communication, and client satisfaction on every project.</p>

                                            <div className="service-benefits-wrap">
                                                <div className="row">
                                                    {/* <div className="col-lg-7 order-0 order-lg-2">
                                                        <div className="benefits-img">
                                                            <img src="/assets/img/services/commercial_benefits1.jpg" alt="Office Remodeling in Pittsburgh" />
                                                            <img src="/assets/img/services/commercial_benefits2.jpg" alt="Retail Space Renovation" />
                                                        </div>
                                                    </div> */}
                                                    <div className="col-lg-5">
                                                        <div className="benefits-content">
                                                            <h2 className="title">Our Advantages</h2>
                                                            <ul className="list-wrap">
                                                                <li><i className="fas fa-check-circle" />Licensed, insured, and locally owned</li>
                                                                <li><i className="fas fa-check-circle" />Transparent, detailed cost estimates</li>
                                                                <li><i className="fas fa-check-circle" />Minimal disruption to your operations</li>
                                                                <li><i className="fas fa-check-circle" />Dedicated project manager for seamless communication</li>
                                                                <li><i className="fas fa-check-circle" />Energy-efficient and sustainable options</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="cta-area mt-60">
                                                <h2 className="title text-center">Ready to Transform Your Commercial Space?</h2>
                                                <p className="text-center" style={{paddingBottom:"20px"}}>Complete the form below to request a consultation for your commercial remodeling project in Pittsburgh. Our team will contact you promptly to discuss your needs.</p>

                                                <MainContact/>
                                            </div>
                                            {/* <div className="cta-area text-center mt-60">
                                                <h2 className="title">Ready to Transform Your Commercial Space?</h2>
                                                <p>Complete the form below to request a consultation for your commercial remodeling project in Pittsburgh. Our team will contact you promptly to discuss your needs.</p>

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
                                                            name="project_type" 
                                                            value={formData.project_type}
                                                            onChange={handleChange}
                                                            className="form-control" 
                                                            required
                                                        >
                                                            <option value="">Select Project Type</option>
                                                            <option value="office">Office Remodeling</option>
                                                            <option value="retail">Retail Space Renovation</option>
                                                            <option value="restaurant">Restaurant Renovation</option>
                                                            <option value="medical">Medical Office Buildout</option>
                                                            <option value="warehouse">Warehouse/Industrial Space</option>
                                                            <option value="other">Other Commercial Project</option>
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
                                                            placeholder="Project Address" 
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
                                                            placeholder="Tell us about your project" 
                                                            rows="4"
                                                        />
                                                    </div>
                                                </div>
                                                <button 
                                                    type="submit" 
                                                    className="btn btn-primary btn-lg"
                                                    disabled={isSubmitting}
                                                >
                                                    {isSubmitting ? 'Processing...' : 'Request Consultation'}
                                                </button>
                                                {submitStatus.success && (
                                                    <div className="alert alert-success mt-3">
                                                        Thank you! Your inquiry has been submitted. We'll contact you shortly.
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
                                            <h4 className="widget-title">Our Commercial Services</h4>
                                            <div className="our-services-list">
                                                <ul className="list-wrap">
                                                    <li><Link href="#">Office Remodeling<i className="fas fa-arrow-right" /></Link></li>
                                                    <li><Link href="#">Retail Space Renovation<i className="fas fa-arrow-right" /></Link></li>
                                                    <li><Link href="#">Restaurant Buildouts<i className="fas fa-arrow-right" /></Link></li>
                                                    <li><Link href="#">Medical Office Construction<i className="fas fa-arrow-right" /></Link></li>
                                                    <li><Link href="#">Industrial Space Conversion<i className="fas fa-arrow-right" /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* <div className="services-widget widget-bg" data-background="/assets/img/services/sw_bg.jpg">
                                            <h4 className="widget-title">Get a Free Estimate</h4>
                                            <form action="#" className="sidebar-form">
                                                <div className="form-grp">
                                                    <input id="name" type="text" placeholder="Your Name" />
                                                </div>
                                                <div className="form-grp">
                                                    <input id="email" type="text" placeholder="Your Email Address" />
                                                </div>
                                                <div className="form-grp">
                                                    <textarea id="message" placeholder="Project Details" />
                                                </div>
                                                <button type="submit" className="btn btn-two">Request Quote</button>
                                            </form>
                                        </div>
                                        <div className="services-widget">
                                            <h4 className="widget-title">Resources</h4>
                                            <div className="download-wrap">
                                                <Link href="/assets/docs/commercial-brochure.pdf" download target="_blank"><i className="fas fa-cloud-download-alt" />Commercial Services Brochure.pdf</Link>
                                                <Link href="/assets/docs/project-portfolio.pdf" download target="_blank"><i className="fas fa-file-pdf" />Past Project Portfolio.pdf</Link>
                                            </div>
                                        </div> */}
                                        <div className="services-widget">
                                            <h4 className="widget-title">Contact Information</h4>
                                            <div className="contact-info">
                                                <p><i className="fas fa-map-marker-alt"></i> 1468 Old Steubenville Pike, suite d, Pittsburgh, PA 15205</p>
                                                <p><i className="fas fa-phone"></i> (412) 555-1234</p>
                                                <p><i className="fas fa-envelope"></i> info@kletzcontracting.com</p>
                                                <p><i className="fas fa-clock"></i> Mon-Fri: 8:00 AM - 5:00 PM</p>
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
            metaTitle: "Commercial Remodeling in Pittsburgh | Kletz Contracting",
            metaDescription: "Expert commercial remodeling services in Pittsburgh. Transform your business space with Kletz Contracting's professional renovation services. Call for a free consultation.",
            canonicalUrl: "https://www.kletzcontracting.com/services/commercial-remodeling",
            schema: {
                "@context": "https://schema.org",
                "@type": "Service",
                "name": "Commercial Remodeling",
                "provider": {
                    "@type": "LocalBusiness",
                    "name": "Kletz Contracting",
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "1468 Old Steubenville Pike, suite d",
                        "addressLocality": "Pittsburgh",
                        "addressRegion": "PA",
                        "postalCode": "15205",
                        "addressCountry": "US"
                    },
                    "telephone": "+14125551234",
                    "priceRange": "$$"
                },
                "serviceArea": {
                    "@type": "GeoCircle",
                    "geoMidpoint": {
                        "@type": "GeoCoordinates",
                        "latitude": 40.4406,
                        "longitude": -79.9959
                    },
                    "geoRadius": "30"
                },
                "description": "Professional commercial remodeling services for Pittsburgh businesses. Office renovations, retail space remodeling, and restaurant buildouts with quality craftsmanship and minimal disruption."
            }
        },
    };
}