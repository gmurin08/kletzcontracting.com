import Layout from "@/components/layout/Layout"
import PageHead from "@/components/layout/PageHead"
import LocalBusinessSchema from "@/components/LocalBusinessSchema"
import Link from "next/link"
import Counter3 from "@/components/sections/Counter3"
import Brand3 from "@/components/sections/Brand3"
import FaqSection from "@/components/sections/FaqSection"
import FaqSchema from "@/components/FaqSchema"

export default function Crafton() {
    const locationSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://kletzcontracting.com/service-areas/crafton#location",
        "parentOrganization": {
            "@id": "https://kletzcontracting.com#organization"
        },
        "name": "Kletz Contracting - Crafton",
        "description": "Professional roofing, siding, and dumpster rental services in Crafton, PA. Trusted contractor serving this close-knit South Hills borough.",
        "areaServed": {
            "@type": "City",
            "name": "Crafton",
            "containedInPlace": {
                "@type": "State",
                "name": "Pennsylvania"
            }
        }
    }

    return (
        <>
            <PageHead 
                headTitle="Crafton PA Roofing & Siding Contractor | Kletz Contracting"
                metaDescription="Professional roofing, siding installation, and dumpster rental services in Crafton, PA. Trusted contractor serving this close-knit South Hills borough. Expert service for established neighborhoods. Free estimates in Crafton."
                canonicalUrl="https://kletzcontracting.com/service-areas/crafton"
                keywords="Crafton PA roofing contractor, Crafton Pennsylvania siding installation, Crafton dumpster rental, roofing repair Crafton PA, home improvement Crafton South Hills"
                structuredData={locationSchema}
            />
            <LocalBusinessSchema />
            <FaqSchema category={"crafton"}/>
            <Layout breadcrumbTitle="Crafton Service Area">
                <section className="services-details-area pt-120 pb-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8">
                                <div className="services-details-wrap">
                                    {/* <div className="services-details-thumb mb-4">
                                        <img src="/assets/img/areas/crafton-hero.jpg" alt="Crafton PA Roofing and Siding Services" />
                                    </div> */}
                                    
                                    <div className="services-details-content">
                                        <h1 className="title mb-4">Crafton's Trusted Roofing & Home Improvement Contractor</h1>
                                        
                                        <p className="mb-4">
                                            Kletz Contracting has been proudly serving Crafton for decades, understanding the tight-knit character 
                                            of this small South Hills borough. Known for its strong sense of community, established neighborhoods, 
                                            and residents who take pride in their homes, Crafton represents the best of small-town living with 
                                            urban convenience. From Noble Avenue to the residential streets throughout the borough, we provide 
                                            services that reflect the same community pride and attention to detail that Crafton residents value.
                                        </p>

                                        <h2 className="title-two mb-3">Why Crafton Homeowners Choose Kletz Contracting</h2>
                                        
                                        <div className="services-process-wrap mb-5">
                                            <ul className="list-wrap">
                                                <li>
                                                    <div className="services-process-item">
                                                        <div className="icon">
                                                            <img src="/assets/img/icon/flat_check.svg" alt="" />
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="title">Small Community Values</h4>
                                                            <p>Understanding of Crafton's close-knit community spirit and the importance of maintaining strong neighbor relationships</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="services-process-item">
                                                        <div className="icon">
                                                            <img src="/assets/img/icon/flat_check.svg" alt="" />
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="title">Established Home Expertise</h4>
                                                            <p>Experience with Crafton's established housing stock and understanding of the maintenance needs of well-loved homes</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="services-process-item">
                                                        <div className="icon">
                                                            <img src="/assets/img/icon/flat_check.svg" alt="" />
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="title">Community Pride Commitment</h4>
                                                            <p>Sharing Crafton's commitment to maintaining beautiful, well-cared-for neighborhoods and enhancing property values</p>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>

                                        <h2 className="title-two mb-3">Our Services in Crafton</h2>
                                        
                                        <h3 className="mb-3">Roofing Services for Community Homes</h3>
                                        <p className="mb-4">
                                            Crafton's well-maintained homes deserve roofing that protects your family and enhances the neighborhood. 
                                            Our comprehensive services include:
                                        </p>
                                        <ul className="list-wrap mb-4">
                                            <li>Complete roof replacements with quality materials</li>
                                            <li>Storm damage assessment and emergency repairs</li>
                                            <li>Insurance claim assistance and documentation</li>
                                            <li>Preventive maintenance to protect your investment</li>
                                            <li>Gutter installation and repair services</li>
                                        </ul>
                                        
                                        <h3 className="mb-3">Siding Installation and Repair</h3>
                                        <p className="mb-4">
                                            Enhance your Crafton home's protection and maintain the neighborhood's attractive character:
                                        </p>
                                        <ul className="list-wrap mb-4">
                                            <li>Vinyl siding in styles that complement Crafton homes</li>
                                            <li>James Hardie fiber cement for durability and beauty</li>
                                            <li>Wood siding restoration for traditional character</li>
                                            <li>Energy-efficient insulated siding options</li>
                                            <li>Complete exterior renovations and updates</li>
                                        </ul>
                                        
                                        <h3 className="mb-3">Dumpster Rental for Your Projects</h3>
                                        <p className="mb-4">
                                            Whether renovating your home or working on improvements, our dumpster service provides:
                                        </p>
                                        <ul className="list-wrap mb-4">
                                            <li>10, 15, and 20-yard containers available</li>
                                            <li>Considerate placement respecting neighbors</li>
                                            <li>Flexible scheduling for community living</li>
                                            <li>Clean, professional equipment</li>
                                            <li>Service that maintains neighborhood standards</li>
                                        </ul>

                                        <h2 className="title-two mb-3">Crafton Areas We Serve</h2>
                                        <p className="mb-4">
                                            We provide services throughout all of Crafton, including:
                                        </p>
                                        <ul className="list-wrap mb-4">
                                            <li>Noble Avenue business and residential area</li>
                                            <li>Bradford Avenue neighborhoods</li>
                                            <li>Crafton Boulevard corridor</li>
                                            <li>Rosslyn Street and surrounding areas</li>
                                            <li>All residential neighborhoods throughout Crafton Borough</li>
                                        </ul>

                                        <div className="project-details-wrap mt-5">
                                            <div className="project-details-info">
                                                <ul className="list-wrap">
                                                    <li><span>Service Area:</span>All of Crafton Borough</li>
                                                    <li><span>Community:</span>Close-knit South Hills borough</li>
                                                    <li><span>Character:</span>Strong community pride and values</li>
                                                    <li><span>Values:</span>Quality workmanship, neighbor respect</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-xl-4">
                                <aside className="services-sidebar">
                                    <div className="services-widget">
                                        <h4 className="sw-title">Our Crafton Services</h4>
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
                                        <h4 className="sw-title">Get Your Free Crafton Quote</h4>
                                        <div className="services-widget-contact">
                                            <p>Ready to protect your Crafton home? Contact us today!</p>
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
                                                <li><Link href="/service-areas/carnegie">Carnegie<i className="fas fa-angle-double-right" /></Link></li>
                                                <li><Link href="/service-areas/greentree">Greentree<i className="fas fa-angle-double-right" /></Link></li>
                                                <li><Link href="/service-areas/mt-lebanon">Mt. Lebanon<i className="fas fa-angle-double-right" /></Link></li>
                                                <li><Link href="/service-areas">View All Areas<i className="fas fa-angle-double-right" /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </section>
                
                <Counter3 />
                <FaqSection category={'crafton'}/>
                <Brand3 />
            </Layout>
        </>
    )
}