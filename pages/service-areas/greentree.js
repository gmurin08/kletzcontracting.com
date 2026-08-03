import Layout from "@/components/layout/Layout"
import PageHead from "@/components/layout/PageHead"
import LocalBusinessSchema from "@/components/LocalBusinessSchema"
import Link from "next/link"
import Brand3 from "@/components/sections/Brand3"
import FaqSection from "@/components/sections/FaqSection"
import FaqSchema from "@/components/FaqSchema"

export default function Greentree() {
    const locationSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://kletzcontracting.com/service-areas/greentree#location",
        "parentOrganization": {
            "@id": "https://kletzcontracting.com#organization"
        },
        "name": "Kletz Contracting - Greentree",
        "description": "Professional roofing, siding, and dumpster rental services in Greentree, PA. Trusted contractor serving this established South Hills borough.",
        "areaServed": {
            "@type": "City",
            "name": "Greentree",
            "containedInPlace": {
                "@type": "State",
                "name": "Pennsylvania"
            }
        }
    }

    return (
        <>
            <PageHead 
                headTitle="Greentree PA Roofing & Siding Contractor | Kletz Contracting"
                metaDescription="Professional roofing, siding installation, and dumpster rental services in Greentree, PA. Trusted contractor serving this established South Hills borough. Expert service for mature neighborhoods. Free estimates in Greentree."
                canonicalUrl="https://kletzcontracting.com/service-areas/greentree"
                keywords="Greentree PA roofing contractor, Greentree Pennsylvania siding installation, Greentree dumpster rental, roofing repair Greentree PA, home improvement Greentree South Hills"
                structuredData={locationSchema}
            />
            <LocalBusinessSchema />
            <FaqSchema category={"greentree"}/>
            <Layout breadcrumbTitle="Greentree Service Area">
                <section className="services-details-area pt-120 pb-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8">
                                <div className="services-details-wrap">
                                    {/* <div className="services-details-thumb mb-4">
                                        <img src="/assets/img/areas/greentree-hero.jpg" alt="Greentree PA Roofing and Siding Services" />
                                    </div> */}
                                    
                                    <div className="services-details-content">
                                        <h1 className="title mb-4">Greentree's Reliable Roofing & Home Improvement Contractor</h1>
                                        
                                        <p className="mb-4">
                                            Kletz Contracting has been proudly serving Greentree for decades, understanding the established character 
                                            of this well-maintained South Hills borough. Known for its mature neighborhoods, tree-lined streets, 
                                            and convenient location near Pittsburgh's business districts, Greentree is home to families and professionals 
                                            who value quality and reliability. From the Parkway West corridor to the established residential areas 
                                            throughout the borough, we provide services that maintain the high standards Greentree residents expect.
                                        </p>

                                        <h2 className="title-two mb-3">Why Greentree Homeowners Trust Kletz Contracting</h2>
                                        
                                        <div className="services-process-wrap mb-5">
                                            <ul className="list-wrap">
                                                <li>
                                                    <div className="services-process-item">
                                                        <div className="icon">
                                                            <img src="/assets/img/icon/flat_check.svg" alt="" />
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="title">Established Community Understanding</h4>
                                                            <p>Experience with Greentree's mature neighborhoods and understanding of the maintenance needs of well-established homes</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="services-process-item">
                                                        <div className="icon">
                                                            <img src="/assets/img/icon/flat_check.svg" alt="" />
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="title">Professional Standards</h4>
                                                            <p>Commitment to the high professional standards that Greentree residents expect from their contractors and service providers</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="services-process-item">
                                                        <div className="icon">
                                                            <img src="/assets/img/icon/flat_check.svg" alt="" />
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="title">South Hills Expertise</h4>
                                                            <p>Deep knowledge of South Hills building patterns, weather challenges, and the specific needs of Greentree properties</p>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>

                                        <h2 className="title-two mb-3">Our Services in Greentree</h2>
                                        
                                        <h3 className="mb-3">Roofing Services for Established Homes</h3>
                                        <p className="mb-4">
                                            Greentree's well-maintained homes deserve roofing that matches their established character and quality. 
                                            Our comprehensive services include:
                                        </p>
                                        <ul className="list-wrap mb-4">
                                            <li>Complete roof replacements with premium materials</li>
                                            <li>Preventive maintenance for aging roof systems</li>
                                            <li>Storm damage assessment and emergency repairs</li>
                                            <li>Insurance claim assistance and documentation</li>
                                            <li>Gutter and downspout systems and repairs</li>
                                        </ul>
                                        
                                        <h3 className="mb-3">Siding Installation and Renovation</h3>
                                        <p className="mb-4">
                                            Enhance your Greentree home's curb appeal and maintain its value with professional siding services:
                                        </p>
                                        <ul className="list-wrap mb-4">
                                            <li>Vinyl siding in classic styles and colors</li>
                                            <li>James Hardie fiber cement for long-term durability</li>
                                            <li>Wood siding restoration for traditional character</li>
                                            <li>Energy-efficient insulated siding options</li>
                                            <li>Complete exterior renovations and updates</li>
                                        </ul>
                                        
                                        <h3 className="mb-3">Dumpster Rental for Your Projects</h3>
                                        <p className="mb-4">
                                            Whether updating your established home or tackling renovations, our dumpster service provides:
                                        </p>
                                        <ul className="list-wrap mb-4">
                                            <li>10, 15, and 20-yard containers available</li>
                                            <li>Professional placement in established neighborhoods</li>
                                            <li>Flexible scheduling for busy professionals</li>
                                            <li>Clean, well-maintained equipment</li>
                                            <li>Respectful service that maintains neighborhood standards</li>
                                        </ul>

                                        <h2 className="title-two mb-3">Greentree Areas We Serve</h2>
                                        <p className="mb-4">
                                            We provide services throughout all of Greentree, including:
                                        </p>
                                        <ul className="list-wrap mb-4">
                                            <li>Parkway West corridor properties</li>
                                            <li>Foster Avenue and main residential areas</li>
                                            <li>Greentree Road business and residential zones</li>
                                            <li>Established neighborhood developments</li>
                                            <li>All residential areas throughout Greentree Borough</li>
                                        </ul>

                                        <div className="project-details-wrap mt-5">
                                            <div className="project-details-info">
                                                <ul className="list-wrap">
                                                    <li><span>Service Area:</span>All of Greentree Borough</li>
                                                    <li><span>Community:</span>Established South Hills borough</li>
                                                    <li><span>Character:</span>Mature, well-maintained neighborhoods</li>
                                                    <li><span>Values:</span>Quality, reliability, professional service</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-xl-4">
                                <aside className="services-sidebar">
                                    <div className="services-widget">
                                        <h4 className="sw-title">Our Greentree Services</h4>
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
                                        <h4 className="sw-title">Get Your Free Greentree Quote</h4>
                                        <div className="services-widget-contact">
                                            <p>Ready to enhance your Greentree home? Contact us today!</p>
                                            <Link href="tel:412-219-7279" className="btn btn-primary w-100 mb-3">
                                                <i className="fas fa-phone-alt mr-2"></i> Call (412) 219-7279
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
                                                <li><Link href="/service-areas/carnegie">Carnegie<i className="fas fa-angle-double-right" /></Link></li>
                                                <li><Link href="/service-areas/mt-lebanon">Mt. Lebanon<i className="fas fa-angle-double-right" /></Link></li>
                                                <li><Link href="/service-areas/bethel-park">Bethel Park<i className="fas fa-angle-double-right" /></Link></li>
                                                <li><Link href="/service-areas">View All Areas<i className="fas fa-angle-double-right" /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </section>
                
              
                <FaqSection category={'greentree'}/>
                <Brand3 />
            </Layout>
        </>
    )
}