import Layout from "@/components/layout/Layout"
import PageHead from "@/components/layout/PageHead"
import LocalBusinessSchema from "@/components/LocalBusinessSchema"
import Link from "next/link"
import Brand3 from "@/components/sections/Brand3"
import FaqSection from "@/components/sections/FaqSection"
import FaqSchema from "@/components/FaqSchema"

export default function PineTownship() {
    const locationSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://kletzcontracting.com/service-areas/pine-township#location",
        "parentOrganization": {
            "@id": "https://kletzcontracting.com#organization"
        },
        "name": "Kletz Contracting - Pine Township",
        "description": "Professional roofing, siding, and dumpster rental services in Pine Township, PA. Trusted contractor serving this growing Butler County community.",
        "areaServed": {
            "@type": "City",
            "name": "Pine Township",
            "containedInPlace": {
                "@type": "State",
                "name": "Pennsylvania"
            }
        }
    }

    return (
        <>
            <PageHead 
                headTitle="Pine Township Roofing & Siding Contractor | Kletz Contracting"
                metaDescription="Professional roofing, siding installation, and dumpster rental services in Pine Township, PA. Trusted contractor serving this growing Butler County community. Quality service for residential and rural properties. Free estimates."
                canonicalUrl="https://kletzcontracting.com/service-areas/pine-township"
                keywords="Pine Township roofing contractor, Pine Township PA siding installation, Pine Township dumpster rental, roofing repair Pine Township PA, home improvement Pine Township Butler County"
                structuredData={locationSchema}
            />
            <LocalBusinessSchema />
            <FaqSchema category={"pine-township"}/>
            <Layout breadcrumbTitle="Pine Township Service Area">
                <section className="services-details-area pt-120 pb-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8">
                                <div className="services-details-wrap">
                                    {/* <div className="services-details-thumb mb-4">
                                        <img src="/assets/img/areas/pine-township-hero.jpg" alt="Pine Township PA Roofing and Siding Services" />
                                    </div>
                                     */}
                                    <div className="services-details-content">
                                        <h1 className="title mb-4">Pine Township's Trusted Roofing & Home Improvement Contractor</h1>
                                        
                                        <p className="mb-4">
                                            Kletz Contracting has been proudly serving Pine Township for decades, understanding the unique blend 
                                            of established neighborhoods and growing communities that define this Butler County township. From 
                                            the Richland area to the newer developments throughout Pine Township, we appreciate the community's 
                                            balance of residential charm and natural beauty. Our work reflects the same attention to quality 
                                            and reliability that Pine Township residents value in their growing community.
                                        </p>

                                        <h2 className="title-two mb-3">Why Pine Township Homeowners Choose Kletz Contracting</h2>
                                        
                                        <div className="services-process-wrap mb-5">
                                            <ul className="list-wrap">
                                                <li>
                                                    <div className="services-process-item">
                                                        <div className="icon">
                                                            <img src="/assets/img/icon/flat_check.svg" alt="" />
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="title">Growing Community Expertise</h4>
                                                            <p>Experience with Pine Township's mix of established homes and new construction, adapting our services to each property's needs</p>
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
                                                            <p>Deep understanding of Butler County building codes, weather patterns, and the specific needs of Pine Township properties</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="services-process-item">
                                                        <div className="icon">
                                                            <img src="/assets/img/icon/flat_check.svg" alt="" />
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="title">Quality-Focused Service</h4>
                                                            <p>Commitment to the high standards that Pine Township residents expect from their contractors and service providers</p>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>

                                        <h2 className="title-two mb-3">Our Services in Pine Township</h2>
                                        
                                        <h3 className="mb-3">Roofing Services for All Property Types</h3>
                                        <p className="mb-4">
                                            Pine Township's diverse housing - from established neighborhood homes to newer constructions - 
                                            all need reliable roofing protection. Our comprehensive services include:
                                        </p>
                                        <ul className="list-wrap mb-4">
                                            <li>Complete roof replacements for all home styles</li>
                                            <li>Storm damage assessment and emergency repairs</li>
                                            <li>New construction roofing services</li>
                                            <li>Preventive maintenance programs</li>
                                            <li>Insurance claim assistance and documentation</li>
                                        </ul>
                                        
                                        <h3 className="mb-3">Siding Installation and Repair</h3>
                                        <p className="mb-4">
                                            Enhance your Pine Township home's protection and curb appeal with professional siding services:
                                        </p>
                                        <ul className="list-wrap mb-4">
                                            <li>Vinyl siding in modern and traditional styles</li>
                                            <li>James Hardie fiber cement for durability</li>
                                            <li>Wood siding for classic residential character</li>
                                            <li>Energy-efficient insulated siding options</li>
                                            <li>Complete exterior renovation services</li>
                                        </ul>
                                        
                                        <h3 className="mb-3">Dumpster Rental for Your Projects</h3>
                                        <p className="mb-4">
                                            From home renovations to new construction support, our dumpster rental service 
                                            accommodates Pine Township's diverse project needs:
                                        </p>
                                        <ul className="list-wrap mb-4">
                                            <li>Multiple sizes: 10, 15, and 20-yard containers</li>
                                            <li>Flexible placement for various property types</li>
                                            <li>Reliable delivery throughout Pine Township</li>
                                            <li>Extended rental periods for larger projects</li>
                                            <li>Clean, well-maintained equipment</li>
                                        </ul>

                                        <h2 className="title-two mb-3">Pine Township Areas We Serve</h2>
                                        <p className="mb-4">
                                            We provide services throughout all of Pine Township, including:
                                        </p>
                                        <ul className="list-wrap mb-4">
                                            <li>Richland and surrounding neighborhoods</li>
                                            <li>Warrendale area communities</li>
                                            <li>Pine Creek and Brush Creek areas</li>
                                            <li>New developments and subdivisions</li>
                                            <li>Rural properties and established homes</li>
                                            <li>All Pine Township residential areas</li>
                                        </ul>

                                        <div className="project-details-wrap mt-5">
                                            <div className="project-details-info">
                                                <ul className="list-wrap">
                                                    <li><span>Service Area:</span>All of Pine Township</li>
                                                    <li><span>County:</span>Butler County</li>
                                                    <li><span>Character:</span>Growing residential community</li>
                                                    <li><span>Specialty:</span>Mixed residential and rural properties</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-xl-4">
                                <aside className="services-sidebar">
                                    <div className="services-widget">
                                        <h4 className="sw-title">Our Pine Township Services</h4>
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
                                        <h4 className="sw-title">Get Your Free Pine Township Quote</h4>
                                        <div className="services-widget-contact">
                                            <p>Ready to protect your Pine Township home? Contact us today!</p>
                                            <Link href="tel:412-200-2475" className="btn btn-primary w-100 mb-3">
                                                <i className="fas fa-phone-alt mr-2"></i> Call (412) 200-2475
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
                                                <li><Link href="/service-areas/mars">Mars<i className="fas fa-angle-double-right" /></Link></li>
                                                <li><Link href="/service-areas/wexford">Wexford<i className="fas fa-angle-double-right" /></Link></li>
                                                <li><Link href="/service-areas">View All Areas<i className="fas fa-angle-double-right" /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </section>
                
   
                <FaqSection category={'pine-township'}/>
                <Brand3 />
            </Layout>
        </>
    )
}