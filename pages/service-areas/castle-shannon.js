import Layout from "@/components/layout/Layout"
import PageHead from "@/components/layout/PageHead"
import LocalBusinessSchema from "@/components/LocalBusinessSchema"
import Link from "next/link"
import Brand3 from "@/components/sections/Brand3"
import FaqSection from "@/components/sections/FaqSection"
import FaqSchema from "@/components/FaqSchema"

export default function CastleShannon() {
    const locationSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://kletzcontracting.com/service-areas/castle-shannon#location",
        "parentOrganization": {
            "@id": "https://kletzcontracting.com#organization"
        },
        "name": "Kletz Contracting - Castle Shannon",
        "description": "Professional roofing, siding, and dumpster rental services in Castle Shannon, PA. Trusted contractor serving this established South Hills borough.",
        "areaServed": {
            "@type": "City",
            "name": "Castle Shannon",
            "containedInPlace": {
                "@type": "State",
                "name": "Pennsylvania"
            }
        }
    }

    return (
        <>
            <PageHead 
                headTitle="Castle Shannon PA Roofing & Siding Contractor | Kletz Contracting"
                metaDescription="Professional roofing, siding installation, and dumpster rental services in Castle Shannon, PA. Trusted contractor serving this established South Hills borough. Expert service for diverse neighborhoods. Free estimates in Castle Shannon."
                canonicalUrl="https://kletzcontracting.com/service-areas/castle-shannon"
                keywords="Castle Shannon PA roofing contractor, Castle Shannon Pennsylvania siding installation, Castle Shannon dumpster rental, roofing repair Castle Shannon PA, home improvement Castle Shannon South Hills"
                structuredData={locationSchema}
            />
            <LocalBusinessSchema />
            <FaqSchema category={"castle-shannon"}/>
            <Layout breadcrumbTitle="Castle Shannon Service Area">
                <section className="services-details-area pt-120 pb-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8">
                                <div className="services-details-wrap">
                                    {/* <div className="services-details-thumb mb-4">
                                        <img src="/assets/img/areas/castle-shannon-hero.jpg" alt="Castle Shannon PA Roofing and Siding Services" />
                                    </div> */}
                                    
                                    <div className="services-details-content">
                                        <h1 className="title mb-4">Castle Shannon's Trusted Roofing & Home Improvement Contractor</h1>
                                        
                                        <p className="mb-4">
                                            Kletz Contracting has been proudly serving Castle Shannon for decades, understanding the established 
                                            character of this well-located South Hills borough. Known for its convenient access to Pittsburgh, 
                                            diverse neighborhoods, and mix of longtime residents and young families, Castle Shannon represents 
                                            the best of South Hills living. From the Castle Shannon Boulevard business district to the residential 
                                            streets throughout the borough, we provide services that reflect the same reliability and community 
                                            commitment that Castle Shannon residents value.
                                        </p>

                                        <h2 className="title-two mb-3">Why Castle Shannon Homeowners Choose Kletz Contracting</h2>
                                        
                                        <div className="services-process-wrap mb-5">
                                            <ul className="list-wrap">
                                                <li>
                                                    <div className="services-process-item">
                                                        <div className="icon">
                                                            <img src="/assets/img/icon/flat_check.svg" alt="" />
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="title">Diverse Community Understanding</h4>
                                                            <p>Experience with Castle Shannon's varied neighborhoods and understanding of the different housing types throughout the borough</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="services-process-item">
                                                        <div className="icon">
                                                            <img src="/assets/img/icon/flat_check.svg" alt="" />
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="title">Convenient Service Approach</h4>
                                                            <p>Understanding that Castle Shannon residents value convenience and efficiency, especially given their proximity to Pittsburgh</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="services-process-item">
                                                        <div className="icon">
                                                            <img src="/assets/img/icon/flat_check.svg" alt="" />
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="title">Established Borough Expertise</h4>
                                                            <p>Deep knowledge of South Hills building patterns and the specific needs of Castle Shannon's established properties</p>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>

                                        <h2 className="title-two mb-3">Our Services in Castle Shannon</h2>
                                        
                                        <h3 className="mb-3">Roofing Services for Established Homes</h3>
                                        <p className="mb-4">
                                            Castle Shannon's diverse housing stock needs reliable roofing that protects families and maintains 
                                            property values. Our comprehensive services include:
                                        </p>
                                        <ul className="list-wrap mb-4">
                                            <li>Complete roof replacements with quality materials</li>
                                            <li>Storm damage assessment and emergency repairs</li>
                                            <li>Insurance claim assistance and documentation</li>
                                            <li>Preventive maintenance for aging roof systems</li>
                                            <li>Gutter installation and repair services</li>
                                        </ul>
                                        
                                        <h3 className="mb-3">Siding Installation and Repair</h3>
                                        <p className="mb-4">
                                            Enhance your Castle Shannon home's protection and curb appeal with professional siding services:
                                        </p>
                                        <ul className="list-wrap mb-4">
                                            <li>Vinyl siding in styles that suit Castle Shannon character</li>
                                            <li>James Hardie fiber cement for durability and beauty</li>
                                            <li>Wood siding restoration for traditional homes</li>
                                            <li>Energy-efficient insulated siding options</li>
                                            <li>Complete exterior renovations and updates</li>
                                        </ul>
                                        
                                        <h3 className="mb-3">Dumpster Rental for Your Projects</h3>
                                        <p className="mb-4">
                                            Whether renovating your home or tackling improvements, our convenient dumpster service provides:
                                        </p>
                                        <ul className="list-wrap mb-4">
                                            <li>10, 15, and 20-yard containers available</li>
                                            <li>Flexible scheduling for busy lifestyles</li>
                                            <li>Professional placement throughout Castle Shannon</li>
                                            <li>Reliable service for established neighborhoods</li>
                                            <li>Clean, well-maintained equipment</li>
                                        </ul>

                                        <h2 className="title-two mb-3">Castle Shannon Areas We Serve</h2>
                                        <p className="mb-4">
                                            We provide services throughout all of Castle Shannon, including:
                                        </p>
                                        <ul className="list-wrap mb-4">
                                            <li>Castle Shannon Boulevard business and residential corridor</li>
                                            <li>Willow Avenue and neighboring streets</li>
                                            <li>Miller Avenue area neighborhoods</li>
                                            <li>Established residential areas throughout the borough</li>
                                            <li>Properties near Mt. Lebanon and Bethel Park borders</li>
                                            <li>All residential neighborhoods in Castle Shannon</li>
                                        </ul>

                                        <div className="project-details-wrap mt-5">
                                            <div className="project-details-info">
                                                <ul className="list-wrap">
                                                    <li><span>Service Area:</span>All of Castle Shannon Borough</li>
                                                    <li><span>Community:</span>Established South Hills borough</li>
                                                    <li><span>Character:</span>Convenient, diverse neighborhoods</li>
                                                    <li><span>Values:</span>Reliability, efficiency, quality service</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-xl-4">
                                <aside className="services-sidebar">
                                    <div className="services-widget">
                                        <h4 className="sw-title">Our Castle Shannon Services</h4>
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
                                        <h4 className="sw-title">Get Your Free Castle Shannon Quote</h4>
                                        <div className="services-widget-contact">
                                            <p>Ready to protect your Castle Shannon home? Contact us today!</p>
                                            <Link href="tel:412-200-2475" className="btn btn-primary w-100 mb-3">
                                                <i className="fas fa-phone-alt mr-2"></i> Call (412) 200-2475
                                            </Link>
                                            <Link href="/contact" className="btn btn-outline-primary w-100">
                                                Request Free Estimate
                                            </Link>
                                        </div>
                                    </div>
                                    
                                    <div className="services-widget">
                                        <h4 className="sw-title">Nearby South Hills Areas</h4>
                                        <div className="services-cat-list">
                                            <ul className="list-wrap">
                                                <li><Link href="/service-areas/mt-lebanon">Mt. Lebanon<i className="fas fa-angle-double-right" /></Link></li>
                                                <li><Link href="/service-areas/bethel-park">Bethel Park<i className="fas fa-angle-double-right" /></Link></li>
                                                <li><Link href="/service-areas/carnegie">Carnegie<i className="fas fa-angle-double-right" /></Link></li>
                                                <li><Link href="/service-areas">View All Areas<i className="fas fa-angle-double-right" /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </section>
                
          
                <FaqSection category={'castle-shannon'}/>
                <Brand3 />
            </Layout>
        </>
    )
}