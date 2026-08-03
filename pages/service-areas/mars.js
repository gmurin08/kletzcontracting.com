import Layout from "@/components/layout/Layout"
import PageHead from "@/components/layout/PageHead"
import LocalBusinessSchema from "@/components/LocalBusinessSchema"
import Link from "next/link"
import Brand3 from "@/components/sections/Brand3"
import FaqSection from "@/components/sections/FaqSection"
import FaqSchema from "@/components/FaqSchema"

export default function Mars() {
    const locationSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://kletzcontracting.com/service-areas/mars#location",
        "parentOrganization": {
            "@id": "https://kletzcontracting.com#organization"
        },
        "name": "Kletz Contracting - Mars",
        "description": "Professional roofing, siding, and dumpster rental services in Mars, PA. Trusted contractor serving this charming Butler County borough.",
        "areaServed": {
            "@type": "City",
            "name": "Mars",
            "containedInPlace": {
                "@type": "State",
                "name": "Pennsylvania"
            }
        }
    }

    return (
        <>
            <PageHead 
                headTitle="Mars PA Roofing & Siding Contractor | Kletz Contracting"
                metaDescription="Professional roofing, siding installation, and dumpster rental services in Mars, PA. Experienced contractor serving Butler County's historic borough. Quality workmanship for Mars homes and businesses. Free estimates."
                canonicalUrl="https://kletzcontracting.com/service-areas/mars"
                keywords="Mars PA roofing contractor, Mars Pennsylvania siding installation, Mars PA dumpster rental, roofing repair Mars Butler County, home improvement Mars PA"
                structuredData={locationSchema}
            />
            <LocalBusinessSchema />
            <FaqSchema category={"mars"}/>
            <Layout breadcrumbTitle="Mars PA Service Area">
                <section className="services-details-area pt-120 pb-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8">
                                <div className="services-details-wrap">
                                    {/* <div className="services-details-thumb mb-4">
                                        <img src="/assets/img/areas/mars-pa-hero.jpg" alt="Mars PA Roofing and Siding Services" />
                                    </div>
                                     */}
                                    <div className="services-details-content">
                                        <h1 className="title mb-4">Mars PA's Trusted Roofing & Home Improvement Contractor</h1>
                                        
                                        <p className="mb-4">
                                            Kletz Contracting has been proudly serving Mars, Pennsylvania and the surrounding Butler County 
                                            area for decades. This charming borough with its rich history and close-knit community deserves 
                                            contractors who understand both the character of its older homes and the needs of its growing 
                                            neighborhoods. From Grand Avenue to the newer developments, we've built lasting relationships 
                                            with Mars homeowners through quality work and honest service.
                                        </p>

                                        <h2 className="title-two mb-3">Why Mars Residents Choose Kletz Contracting</h2>
                                        
                                        <div className="services-process-wrap mb-5">
                                            <ul className="list-wrap">
                                                <li>
                                                    <div className="services-process-item">
                                                        <div className="icon">
                                                            <img src="/assets/img/icon/flat_check.svg" alt="" />
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="title">Small Town Values</h4>
                                                            <p>We understand Mars's close-knit community spirit and provide personalized service that reflects those values</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="services-process-item">
                                                        <div className="icon">
                                                            <img src="/assets/img/icon/flat_check.svg" alt="" />
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="title">Historic Home Experience</h4>
                                                            <p>Expertise working with Mars's older homes while respecting their character and architectural integrity</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="services-process-item">
                                                        <div className="icon">
                                                            <img src="/assets/img/icon/flat_check.svg" alt="" />
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="title">Butler County Knowledge</h4>
                                                            <p>Deep familiarity with Butler County building codes and the unique needs of northern Pennsylvania homes</p>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>

                                        <h2 className="title-two mb-3">Our Services in Mars, PA</h2>
                                        
                                        <h3 className="mb-3">Roofing Services for Mars Homes</h3>
                                        <p className="mb-4">
                                            Mars homes, from historic properties on Grand Avenue to newer constructions, need roofing that 
                                            can handle Butler County's weather extremes. Our comprehensive roofing services include:
                                        </p>
                                        <ul className="list-wrap mb-4">
                                            <li>Complete roof replacements with quality materials</li>
                                            <li>Historic home roofing with period-appropriate materials</li>
                                            <li>Storm damage repairs and insurance claims</li>
                                            <li>Regular maintenance to extend roof life</li>
                                            <li>Emergency repairs for Mars residents</li>
                                        </ul>
                                        
                                        <h3 className="mb-3">Siding Installation and Restoration</h3>
                                        <p className="mb-4">
                                            Protect and beautify your Mars home with professional siding services:
                                        </p>
                                        <ul className="list-wrap mb-4">
                                            <li>Vinyl siding installation and repair</li>
                                            <li>Fiber cement siding for long-lasting beauty</li>
                                            <li>Wood siding restoration for historic homes</li>
                                            <li>Energy-efficient insulated siding options</li>
                                            <li>Complete exterior makeovers</li>
                                        </ul>
                                        
                                        <h3 className="mb-3">Dumpster Rental for Mars Projects</h3>
                                        <p className="mb-4">
                                            Whether you're renovating a historic Mars home or building a new deck, our dumpster rental 
                                            service makes cleanup easy:
                                        </p>
                                        <ul className="list-wrap mb-4">
                                            <li>10, 15, and 20-yard roll-off containers</li>
                                            <li>Respectful placement in Mars neighborhoods</li>
                                            <li>Flexible rental periods for any project</li>
                                            <li>Prompt delivery and pickup service</li>
                                            <li>Competitive Butler County pricing</li>
                                        </ul>

                                        <h2 className="title-two mb-3">Mars Areas and Neighborhoods We Serve</h2>
                                        <p className="mb-4">
                                            We provide services throughout all of Mars, including:
                                        </p>
                                        <ul className="list-wrap mb-4">
                                            <li>Grand Avenue historic district</li>
                                            <li>Downtown Mars business area</li>
                                            <li>Residential neighborhoods off Route 228</li>
                                            <li>Newer developments and subdivisions</li>
                                            <li>Rural properties surrounding the borough</li>
                                            <li>All Mars PA residential and commercial areas</li>
                                        </ul>

                                        <div className="project-details-wrap mt-5">
                                            <div className="project-details-info">
                                                <ul className="list-wrap">
                                                    <li><span>Service Area:</span>All of Mars Borough and surroundings</li>
                                                    <li><span>County:</span>Butler County specialist</li>
                                                    <li><span>Experience:</span>Historic and modern homes</li>
                                                    <li><span>Community:</span>Small town, personal service</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-xl-4">
                                <aside className="services-sidebar">
                                    <div className="services-widget">
                                        <h4 className="sw-title">Our Mars PA Services</h4>
                                        <div className="services-cat-list">
                                            <ul className="list-wrap">
                                                <li><Link href="/services/roofing">Roofing Services<i className="fas fa-angle-double-right" /></Link></li>
                                                <li><Link href="/services/siding">Siding Installation<i className="fas fa-angle-double-right" /></Link></li>
                                                <li><Link href="/services/dumpster-service">Dumpster Rental<i className="fas fa-angle-double-right" /></Link></li>
                                                <li><Link href="/services/remodeling">Kitchen & Bath<i className="fas fa-angle-double-right" /></Link></li>
                                                <li><Link href="/services/deck-construction">Deck Building<i className="fas fa-angle-double-right" /></Link></li>
                                                <li><Link href="/services/flooring">Flooring Services<i className="fas fa-angle-double-right" /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                    <div className="services-widget">
                                        <h4 className="sw-title">Get Your Free Mars Quote</h4>
                                        <div className="services-widget-contact">
                                            <p>Ready to improve your Mars PA home? Contact us today!</p>
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
                                                <li><Link href="/service-areas/cranberry-township">Cranberry Township<i className="fas fa-angle-double-right" /></Link></li>
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
                
        
                <FaqSection category={'mars'}/>
                <Brand3 />
            </Layout>
        </>
    )
}