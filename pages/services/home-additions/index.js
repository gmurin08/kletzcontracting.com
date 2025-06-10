import Layout from "@/components/layout/Layout"
import Brand3 from "@/components/sections/Brand3"
import { useState } from "react"
import Link from "next/link"
import Head from "next/head"
import Script from "next/script"
import LocalBusinessSchema from "@/components/LocalBusinessSchema"
import MainContact from "@/components/elements/MainContact"
import { Main } from "next/document"
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
        addition_type: '',
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
            const response = await fetch('/api/home-additions/inquiry', {
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
                addition_type: '',
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
                id="home-additions-service-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(props.serviceSchema) }}
            />
            
            <Layout breadcrumbTitle="Custom Home Additions">
                <div>
                    <section className="services-details-area pt-120">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-8">
                                    <div className="services-details-wrap" >
                                        <div className="services-details-thumb">
                                            <img src="/assets/img/services/home-addition-main.jpg" alt="Custom Home Additions in Pittsburgh" />
                                        </div>
                                        <div className="services-details-content">
                                            <h2 className="title">Custom Home Additions in Pittsburgh</h2>
                                            <p>Expand your living space and increase your home's value with a custom addition from Kletz Contracting. Our experienced Pittsburgh construction team designs and builds seamless home additions that match your existing architecture while providing the extra space your family needs. From room additions and second-story expansions to sunrooms and in-law suites, we handle every aspect of your project from architectural plans and permits to final finishes.</p>

                                            <div className="services-process-wrap">
                                                <div className="row justify-content-center">
                                                    <div className="col-lg-6 col-md-8" style={{paddingBottom:'40px', display:'flex', alignItems:'center', justifyContent:'center'}}>
                                                            <div>
                                                            <img style={processSideImg} src="/assets/img/services/addition-process.jpg" alt="Home Addition Design Process in Pittsburgh" />
                                                            </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="services-process-content">
                                                            <h2 className="title">Our Home Addition Process</h2>
                                                            <ul className="list-wrap">
                                                                <li>
                                                                    <div className="services-process-item">
                                                                        <div className="icon">
                                                                            <img src="/assets/img/icon/flat_check.svg" alt="" />
                                                                        </div>
                                                                        <div className="content">
                                                                            <h4 className="title">Design & Planning</h4>
                                                                            <p>Our architectural team creates custom designs that complement your home's existing style while maximizing space and functionality. We handle zoning research, structural considerations, and detailed floor plans tailored to your needs.</p>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="services-process-item">
                                                                        <div className="icon">
                                                                            <img src="/assets/img/icon/flat_check.svg" alt="" />
                                                                        </div>
                                                                        <div className="content">
                                                                            <h4 className="title">Permits & Preparation</h4>
                                                                            <p>We navigate Pittsburgh's permitting process, securing all necessary approvals and inspections. Our team prepares the site, establishes utility connections, and coordinates with specialized contractors to ensure a smooth construction process.</p>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="services-process-item">
                                                                        <div className="icon">
                                                                            <img src="/assets/img/icon/flat_check.svg" alt="" />
                                                                        </div>
                                                                        <div className="content">
                                                                            <h4 className="title">Professional Construction</h4>
                                                                            <p>Our skilled craftsmen build your addition with quality materials and attention to detail. From foundation and framing to roofing, siding, and interior finishes, we ensure seamless integration with your existing home and superior craftsmanship throughout.</p>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <h2 className="title-two">Why Choose Kletz Contracting for Your Home Addition</h2>
                                            <p>Since 1996, homeowners throughout Pittsburgh have trusted our team to deliver exceptional home additions that expand living space while enhancing property value. Our design-build approach streamlines the process, providing a single point of contact from concept to completion.</p>

                                            <div className="service-benefits-wrap">
                                                <div className="row">
                                                    <div className="col-lg-7 order-0 order-lg-2">
                                                        <div className="benefits-img">
                                                            <img src="/assets/img/services/addition_benefits1.jpg" alt="Kitchen Addition in Pittsburgh" />
                                                            <img src="/assets/img/services/addition_benefits2.jpg" alt="Master Suite Addition" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-5">
                                                        <div className="benefits-content">
                                                            <h2 className="title">Our Addition Advantages</h2>
                                                            <ul className="list-wrap">
                                                                <li><i className="fas fa-check-circle" />Licensed, insured, and locally owned since 1996</li>
                                                                <li><i className="fas fa-check-circle" />Architectural design expertise for seamless integration</li>
                                                                <li><i className="fas fa-check-circle" />Energy-efficient construction methods and materials</li>
                                                                <li><i className="fas fa-check-circle" />Comprehensive written contracts and warranties</li>
                                                                <li><i className="fas fa-check-circle" />Skilled craftsmen with decades of experience</li>
                                                                <li><i className="fas fa-check-circle" />Project management that respects your time and property</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="addition-options mt-60">
                                                <h2 className="title">Popular Home Addition Options</h2>
                                                <p>We design and build a variety of home additions to suit your family's needs and your property's characteristics:</p>
                                                
                                                <div className="row mt-4">
                                                    <div className="col-md-6">
                                                        <div className="addition-item mb-4">
                                                            <h4>Room Additions</h4>
                                                            <p>Expand your home's footprint with additional bedrooms, family rooms, or office spaces. Single-room additions offer cost-effective solutions for growing families or changing lifestyle needs.</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="addition-item mb-4">
                                                            <h4>Kitchen Extensions</h4>
                                                            <p>Create the gourmet kitchen you've always wanted by expanding your existing space. Kitchen additions can include dining areas, islands, walk-in pantries, and modern amenities for entertaining.</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="addition-item mb-4">
                                                            <h4>Master Suite Additions</h4>
                                                            <p>Add a luxurious master bedroom with ensuite bathroom and walk-in closets. These additions create private retreats while significantly increasing home value and marketability.</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="addition-item mb-4">
                                                            <h4>Second-Story Additions</h4>
                                                            <p>Double your living space without expanding your home's footprint. Ideal for properties with limited lot size, these additions can include multiple bedrooms, bathrooms, and bonus spaces.</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="addition-item mb-4">
                                                            <h4>Sunrooms & Four-Season Rooms</h4>
                                                            <p>Enjoy the outdoors year-round with a custom sunroom or four-season room. These light-filled spaces can serve as dining areas, family rooms, or peaceful retreats with views of your landscape.</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="addition-item mb-4">
                                                            <h4>In-Law Suites & Accessory Dwellings</h4>
                                                            <p>Create independent living spaces for extended family or rental opportunities. These self-contained units typically include bedrooms, bathrooms, kitchenettes, and separate entrances.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="cta-area mt-60">
                                                <h2 className="title text-center">Ready to Expand Your Home?</h2>
                                                <p className="text-center" style={{paddingBottom:"20px"}}>Complete the form below to schedule a free consultation for your home addition project. Our Pittsburgh design-build team will discuss your needs, explore options, and provide a detailed proposal.</p>

                                                <MainContact/>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-4 col-lg-6">
                                    <aside className="services-sidebar">
                                        <div className="services-widget">
                                            <h4 className="widget-title">Addition Services</h4>
                                            <div className="our-services-list">
                                                <ul className="list-wrap">
                                                    <li><Link href="#">Room Additions<i className="fas fa-arrow-right" /></Link></li>
                                                    <li><Link href="#">Kitchen Extensions<i className="fas fa-arrow-right" /></Link></li>
                                                    <li><Link href="#">Master Suite Additions<i className="fas fa-arrow-right" /></Link></li>
                                                    <li><Link href="#">Second-Story Additions<i className="fas fa-arrow-right" /></Link></li>
                                                    <li><Link href="#">Sunroom Construction<i className="fas fa-arrow-right" /></Link></li>
                                                    <li><Link href="#">In-Law Suite Additions<i className="fas fa-arrow-right" /></Link></li>
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
                                                    <textarea id="message" placeholder="Addition Project Details" />
                                                </div>
                                                <button type="submit" className="btn btn-two">Request Consultation</button>
                                            </form>
                                        </div>
                                        <div className="services-widget">
                                            <h4 className="widget-title">Resources</h4>
                                            <div className="download-wrap">
                                                <Link href="/assets/docs/home-addition-guide.pdf" download target="_blank"><i className="fas fa-cloud-download-alt" />Home Addition Planning Guide.pdf</Link>
                                                <Link href="/assets/docs/addition-portfolio.pdf" download target="_blank"><i className="fas fa-file-pdf" />Home Addition Portfolio.pdf</Link>
                                            </div>
                                        </div> */}
                                        <div className="services-widget">
                                            <h4 className="widget-title">Service Areas</h4>
                                            <div className="service-areas-content">
                                                <p>We build custom home additions throughout the greater Pittsburgh metropolitan area, including:</p>
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
            metaTitle: "Custom Home Additions in Pittsburgh | Kletz Contracting",
            metaDescription: "Expert home addition contractors in Pittsburgh. Room additions, second story additions, and in-law suites with quality craftsmanship from Kletz Contracting.",
            canonicalUrl: "https://www.kletzcontracting.com/services/home-additions",
            serviceSchema: {
                "@context": "https://schema.org",
                "@type": "Service",
                "name": "Home Addition Services",
                "serviceType": "Home Addition Construction",
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
                "description": "Professional home addition services in Pittsburgh including room additions, master suites, kitchen extensions, and second-story additions. Design-build approach with custom architectural plans and quality construction.",
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
                    "name": "Home Addition Services",
                    "itemListElement": [
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Room Additions"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Kitchen Extensions"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Master Suite Additions"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Second-Story Additions"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Sunroom Construction"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "In-Law Suite Additions"
                            }
                        }
                    ]
                }
            }
        },
    };
}