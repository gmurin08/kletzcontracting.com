import Layout from "@/components/layout/Layout"
import PageHead from "@/components/layout/PageHead"
import LocalBusinessSchema from "@/components/LocalBusinessSchema"
import Link from "next/link"
import Counter3 from "@/components/sections/Counter3"
import Brand3 from "@/components/sections/Brand3"
import FaqSection from "@/components/sections/FaqSection"
import FaqSchema from "@/components/FaqSchema"

export default function Economy() {
    const locationSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://kletzcontracting.com/service-areas/economy#location",
        "parentOrganization": {
            "@id": "https://kletzcontracting.com#organization"
        },
        "name": "Kletz Contracting - Economy",
        "description": "Professional roofing, siding, and dumpster rental services in Economy, PA. Trusted contractor serving this scenic Beaver County borough.",
        "areaServed": {
            "@type": "City",
            "name": "Economy",
            "containedInPlace": {
                "@type": "State",
                "name": "Pennsylvania"
            }
        }
    }

    return (
        <>
            <PageHead 
                headTitle="Economy PA Roofing & Siding Contractor | Kletz Contracting"
                metaDescription="Professional roofing, siding installation, and dumpster rental services in Economy, PA. Trusted contractor serving this scenic Beaver County borough. Expert service for diverse properties. Free estimates in Economy."
                canonicalUrl="https://kletzcontracting.com/service-areas/economy"
                keywords="Economy PA roofing contractor, Economy Pennsylvania siding installation, Economy dumpster rental, roofing repair Economy PA, home improvement Economy Beaver County"
                structuredData={locationSchema}
            />
            <LocalBusinessSchema />
            <FaqSchema category={"economy"}/>
            <Layout breadcrumbTitle="Economy Service Area">
                <section className="services-details-area pt-120 pb-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8">
                                <div className="services-details-wrap">
                                    {/* <div className="services-details-thumb mb-4">
                                        <img src="/assets/img/areas/economy-hero.jpg" alt="Economy PA Roofing and Siding Services" />
                                    </div> */}
                                    
                                    <div className="services-details-content">
                                        <h1 className="title mb-4">Economy's Trusted Roofing & Home Improvement Contractor</h1>
                                        
                                        <p className="mb-4">
                                            Kletz Contracting has been proudly serving Economy for decades, understanding the unique character 
                                            of this scenic Beaver County borough. Located along the Ohio River with beautiful rolling hills 
                                            and established neighborhoods, Economy is known for its quiet residential charm and proximity to 
                                            both natural areas and urban conveniences. From the Conway area to the hillside neighborhoods 
                                            throughout Economy, we provide services that respect the community's peaceful character while 
                                            delivering the quality results homeowners expect.
                                        </p>

                                        <h2 className="title-two mb-3">Why Economy Homeowners Choose Kletz Contracting</h2>
                                        
                                        <div className="services-process-wrap mb-5">
                                            <ul className="list-wrap">
                                                <li>
                                                    <div className="services-process-item">
                                                        <div className="icon">
                                                            <img src="/assets/img/icon/flat_check.svg" alt="" />
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="title">Scenic Property Expertise</h4>
                                                            <p>Experience with Economy's hillside and riverside properties, understanding the unique challenges of varied terrain and elevation</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="services-process-item">
                                                        <div className="icon">
                                                            <img src="/assets/img/icon/flat_check.svg" alt="" />
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="title">Beaver County Knowledge</h4>
                                                            <p>Deep understanding of Beaver County building codes, weather patterns, and the specific needs of Economy properties</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="services-process-item">
                                                        <div className="icon">
                                                            <img src="/assets/img/icon/flat_check.svg" alt="" />
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="title">Peaceful Community Respect</h4>
                                                            <p>Appreciation for Economy's quiet residential character and commitment to maintaining the community's peaceful atmosphere</p>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>

                                        <h2 className="title-two mb-3">Our Services in Economy</h2>
                                        
                                        <h3 className="mb-3">Roofing Services for All Property Types</h3>
                                        <p className="mb-4">
                                            Economy's diverse homes - from riverside properties to hillside residences - need reliable roofing 
                                            that can handle varied weather conditions. Our comprehensive services include:
                                        </p>
                                        <ul className="list-wrap mb-4">
                                            <li>Complete roof replacements for all home styles</li>
                                            <li>Hillside and challenging terrain roofing expertise</li>
                                            <li>Storm damage assessment and emergency repairs</li>
                                            <li>Insurance claim assistance and documentation</li>
                                            <li>Preventive maintenance for extended roof life</li>
                                        </ul>
                                        
                                        <h3 className="mb-3">Siding Installation and Repair</h3>
                                        <p className="mb-4">
                                            Enhance your Economy home's protection and complement the area's natural beauty with professional siding:
                                        </p>
                                        <ul className="list-wrap mb-4">
                                            <li>Vinyl siding in colors that blend with natural settings</li>
                                            <li>James Hardie fiber cement for durability and beauty</li>
                                            <li>Wood siding for traditional residential character</li>
                                            <li>Energy-efficient insulated siding options</li>
                                            <li>Complete exterior renovations and updates</li>
                                        </ul>
                                        
                                        <h3 className="mb-3">Dumpster Rental for Your Projects</h3>
                                        <p className="mb-4">
                                            From home renovations to property cleanups, our dumpster rental service accommodates 
                                            Economy's varied project needs:
                                        </p>
                                        <ul className="list-wrap mb-4">
                                            <li>10, 15, and 20-yard containers available</li>
                                            <li>Careful placement for challenging terrain</li>
                                            <li>Reliable delivery throughout Economy</li>
                                            <li>Flexible rental periods for any timeline</li>
                                            <li>Respectful service in peaceful neighborhoods</li>
                                        </ul>

                                        <h2 className="title-two mb-3">Economy Areas We Serve</h2>
                                        <p className="mb-4">
                                            We provide services throughout all of Economy, including:
                                        </p>
                                        <ul className="list-wrap mb-4">
                                            <li>Conway area and Ohio River vicinity</li>
                                            <li>Economy Village center</li>
                                            <li>Hillside residential neighborhoods</li>
                                            <li>Big Sewickley Creek areas</li>
                                            <li>Route 18 corridor properties</li>
                                            <li>All residential areas throughout Economy Borough</li>
                                        </ul>

                                        <div className="project-details-wrap mt-5">
                                            <div className="project-details-info">
                                                <ul className="list-wrap">
                                                    <li><span>Service Area:</span>All of Economy Borough</li>
                                                    <li><span>County:</span>Beaver County</li>
                                                    <li><span>Character:</span>Scenic residential community</li>
                                                    <li><span>Terrain:</span>Hills, riverside, and varied elevations</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-xl-4">
                                <aside className="services-sidebar">
                                    <div className="services-widget">
                                        <h4 className="sw-title">Our Economy Services</h4>
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
                                        <h4 className="sw-title">Get Your Free Economy Quote</h4>
                                        <div className="services-widget-contact">
                                            <p>Ready to protect your Economy home? Contact us today!</p>
                                            <Link href="tel:412-200-2475" className="btn btn-primary w-100 mb-3">
                                                <i className="fas fa-phone-alt mr-2"></i> Call (412) 200-2475
                                            </Link>
                                            <Link href="/contact" className="btn btn-outline-primary w-100">
                                                Request Free Estimate
                                            </Link>
                                        </div>
                                    </div>
                                    
                                    <div className="services-widget">
                                        <h4 className="sw-title">Nearby Beaver County Areas</h4>
                                        <div className="services-cat-list">
                                            <ul className="list-wrap">
                                                <li><Link href="/service-areas/beaver">Beaver<i className="fas fa-angle-double-right" /></Link></li>
                                                <li><Link href="/service-areas/sewickley">Sewickley<i className="fas fa-angle-double-right" /></Link></li>
                                                <li><Link href="/service-areas/moon-township">Moon Township<i className="fas fa-angle-double-right" /></Link></li>
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
                <FaqSection category={'economy'}/>
                <Brand3 />
            </Layout>
        </>
    )
}