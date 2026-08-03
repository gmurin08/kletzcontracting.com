import Layout from "@/components/layout/Layout"
import PageHead from "@/components/layout/PageHead"
import LocalBusinessSchema from "@/components/LocalBusinessSchema"
import Link from "next/link"
import Counter2 from "@/components/sections/Counter2"
import Brand3 from "@/components/sections/Brand3"
import FaqSection from "@/components/sections/FaqSection"
import FaqSchema from "@/components/FaqSchema"

export default function CranberryTownship() {
    const locationSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://kletzcontracting.com/service-areas/cranberry-township#location",
        "parentOrganization": {
            "@id": "https://kletzcontracting.com#organization"
        },
        "name": "Kletz Contracting - Cranberry Township",
        "description": "Professional roofing, siding, and dumpster rental services in Cranberry Township, PA. Quality contractor serving Butler County's premier community.",
        "areaServed": {
            "@type": "City",
            "name": "Cranberry Township",
            "containedInPlace": {
                "@type": "State",
                "name": "Pennsylvania"
            }
        }
    }

    return (
        <>
            <PageHead 
                headTitle="Cranberry Township Roofing & Siding Contractor | Kletz Contracting"
                metaDescription="Expert roofing, siding installation, and dumpster rental services in Cranberry Township, PA. Trusted contractor serving Butler County's growing community. Premium neighborhoods, premium service. Free estimates."
                canonicalUrl="https://kletzcontracting.com/service-areas/cranberry-township"
                keywords="Cranberry Township roofing contractor, Cranberry Township siding installation, Cranberry Township dumpster rental, roofing repair Cranberry PA, home improvement Cranberry Township Butler County"
                structuredData={locationSchema}
            />
            <LocalBusinessSchema />
            <FaqSchema category={"cranberry-township"}/>
            <Layout breadcrumbTitle="Cranberry Township Service Area">
                <section className="services-details-area pt-120 pb-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8">
                                <div className="services-details-wrap">
                                    {/* <div className="services-details-thumb mb-4">
                                        <img src="/assets/img/areas/cranberry-township-hero.jpg" alt="Cranberry Township PA Roofing and Siding Services" />
                                    </div> */}
                                    
                                    <div className="services-details-content">
                                        <h1 className="title mb-4">Cranberry Township's Premier Roofing & Home Improvement Contractor</h1>
                                        
                                        <p className="mb-4">
                                            Kletz Contracting is proud to serve Cranberry Township, one of Butler County's most desirable 
                                            communities. For decades, we've been the trusted choice for homeowners in this thriving township, 
                                            from the upscale neighborhoods near Cranberry Highlands Golf Course to the newer developments 
                                            throughout the area. Our commitment to excellence matches the high standards that Cranberry 
                                            Township residents expect and deserve.
                                        </p>

                                        <h2 className="title-two mb-3">Why Cranberry Township Homeowners Trust Kletz Contracting</h2>
                                        
                                        <div className="services-process-wrap mb-5">
                                            <ul className="list-wrap">
                                                <li>
                                                    <div className="services-process-item">
                                                        <div className="icon">
                                                            <img src="/assets/img/icon/flat_check.svg" alt="" />
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="title">Premium Service</h4>
                                                            <p>Our quality workmanship and attention to detail match the high standards of Cranberry Township's premier community</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="services-process-item">
                                                        <div className="icon">
                                                            <img src="/assets/img/icon/flat_check.svg" alt="" />
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="title">Butler County Expertise</h4>
                                                            <p>Decades of experience serving Butler County, familiar with local codes and the unique needs of northern communities</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="services-process-item">
                                                        <div className="icon">
                                                            <img src="/assets/img/icon/flat_check.svg" alt="" />
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="title">Modern Home Specialists</h4>
                                                            <p>Experience with Cranberry Township's newer construction styles and energy-efficient building standards</p>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>

                                        <h2 className="title-two mb-3">Our Services in Cranberry Township</h2>
                                        
                                        <h3 className="mb-3">Roofing Services for Butler County's Premier Community</h3>
                                        <p className="mb-4">
                                            Cranberry Township's beautiful homes deserve top-quality roofing protection. We provide comprehensive 
                                            roofing services tailored to your community's standards:
                                        </p>
                                        <ul className="list-wrap mb-4">
                                            <li>Premium shingle installations with architectural styles</li>
                                            <li>Energy-efficient roofing systems for modern homes</li>
                                            <li>Storm damage assessment and insurance claim assistance</li>
                                            <li>Preventive maintenance programs</li>
                                            <li>Seamless gutter systems and leaf protection</li>
                                        </ul>
                                        
                                        <h3 className="mb-3">Siding Installation Excellence</h3>
                                        <p className="mb-4">
                                            Enhance your Cranberry Township home's beauty and value with professional siding installation:
                                        </p>
                                        <ul className="list-wrap mb-4">
                                            <li>High-end vinyl siding in designer colors</li>
                                            <li>James Hardie fiber cement for superior durability</li>
                                            <li>Insulated siding for energy efficiency</li>
                                            <li>Complete exterior renovations</li>
                                            <li>Trim and accent work for curb appeal</li>
                                        </ul>
                                        
                                        <h3 className="mb-3">Dumpster Rental for Your Projects</h3>
                                        <p className="mb-4">
                                            Whether renovating your kitchen or building a deck, our dumpster rental service keeps your 
                                            Cranberry Township property clean and organized:
                                        </p>
                                        <ul className="list-wrap mb-4">
                                            <li>Multiple size options: 10, 15, and 20-yard containers</li>
                                            <li>HOA-friendly placement and scheduling</li>
                                            <li>Clean, well-maintained equipment</li>
                                            <li>Flexible rental periods for any project timeline</li>
                                            <li>Professional delivery and pickup service</li>
                                        </ul>

                                        <h2 className="title-two mb-3">Cranberry Township Areas We Serve</h2>
                                        <p className="mb-4">
                                            We proudly serve all neighborhoods throughout Cranberry Township, including:
                                        </p>
                                        <ul className="list-wrap mb-4">
                                            <li>Cranberry Highlands Golf Course area</li>
                                            <li>Cranberry Woods neighborhoods</li>
                                            <li>Legacy at Cranberry Woods</li>
                                            <li>Cranberry Commons vicinity</li>
                                            <li>Route 19 corridor developments</li>
                                            <li>All residential communities and subdivisions</li>
                                        </ul>

                                        <div className="project-details-wrap mt-5">
                                            <div className="project-details-info">
                                                <ul className="list-wrap">
                                                    <li><span>Service Area:</span>All of Cranberry Township</li>
                                                    <li><span>County:</span>Butler County specialist</li>
                                                    <li><span>Specialty:</span>Premium home services</li>
                                                    <li><span>Standards:</span>Exceeds community expectations</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-xl-4">
                                <aside className="services-sidebar">
                                    <div className="services-widget">
                                        <h4 className="sw-title">Our Cranberry Township Services</h4>
                                        <div className="services-cat-list">
                                            <ul className="list-wrap">
                                                <li><Link href="/services/roofing">Roofing Services<i className="fas fa-angle-double-right" /></Link></li>
                                                <li><Link href="/services/siding">Siding Installation<i className="fas fa-angle-double-right" /></Link></li>
                                                <li><Link href="/services/dumpster-service">Dumpster Rental<i className="fas fa-angle-double-right" /></Link></li>
                                                <li><Link href="/services/remodeling">Kitchen & Bath<i className="fas fa-angle-double-right" /></Link></li>
                                                <li><Link href="/services/deck-construction">Deck Building<i className="fas fa-angle-double-right" /></Link></li>
                                                <li><Link href="/services/home-additions">Home Additions<i className="fas fa-angle-double-right" /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                    <div className="services-widget">
                                        <h4 className="sw-title">Get Your Free Cranberry Quote</h4>
                                        <div className="services-widget-contact">
                                            <p>Ready to enhance your Cranberry Township home? Contact us today!</p>
                                            <Link href="tel:412-219-7279" className="btn btn-primary w-100 mb-3">
                                                <i className="fas fa-phone-alt mr-2"></i> Call (412) 219-7279
                                            </Link>
                                            <Link href="/contact" className="btn btn-outline-primary w-100">
                                                Request Free Estimate
                                            </Link>
                                        </div>
                                    </div>
                                    
                                    <div className="services-widget">
                                        <h4 className="sw-title">Nearby Butler County Areas</h4>
                                        <div className="services-cat-list">
                                            <ul className="list-wrap">
                                                <li><Link href="/service-areas/mars">Mars<i className="fas fa-angle-double-right" /></Link></li>
                                                <li><Link href="/service-areas/wexford">Wexford<i className="fas fa-angle-double-right" /></Link></li>
                                                <li><Link href="/service-areas/pittsburgh">Pittsburgh<i className="fas fa-angle-double-right" /></Link></li>
                                                <li><Link href="/service-areas/robinson-township">Robinson Township<i className="fas fa-angle-double-right" /></Link></li>
                                                <li><Link href="/service-areas">View All Areas<i className="fas fa-angle-double-right" /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </section>
                
                <Counter2 />
                <FaqSection category={'cranberry-township'}/>
                <Brand3 />
            </Layout>
        </>
    )
}