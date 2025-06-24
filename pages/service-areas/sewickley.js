import Layout from "@/components/layout/Layout"
import PageHead from "@/components/layout/PageHead"
import LocalBusinessSchema from "@/components/LocalBusinessSchema"
import Link from "next/link"
import Brand3 from "@/components/sections/Brand3"
import FaqSection from "@/components/sections/FaqSection"
import FaqSchema from "@/components/FaqSchema"

export default function Sewickley() {
    const locationSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://kletzcontracting.com/service-areas/sewickley#location",
        "parentOrganization": {
            "@id": "https://kletzcontracting.com#organization"
        },
        "name": "Kletz Contracting - Sewickley",
        "description": "Professional roofing, siding, and dumpster rental services in Sewickley, PA. Trusted contractor serving this prestigious Ohio River community.",
        "areaServed": {
            "@type": "City",
            "name": "Sewickley",
            "containedInPlace": {
                "@type": "State",
                "name": "Pennsylvania"
            }
        }
    }

    return (
        <>
            <PageHead 
                headTitle="Sewickley Roofing & Siding Contractor | Kletz Contracting"
                metaDescription="Professional roofing, siding installation, and dumpster rental services in Sewickley, PA. Trusted contractor serving this prestigious Ohio River community. Expert service for historic and luxury homes. Free estimates."
                canonicalUrl="https://kletzcontracting.com/service-areas/sewickley"
                keywords="Sewickley roofing contractor, Sewickley PA siding installation, Sewickley dumpster rental, roofing repair Sewickley PA, home improvement Sewickley Ohio River"
                structuredData={locationSchema}
            />
            <LocalBusinessSchema />
            <FaqSchema category={"sewickley"}/>
            <Layout breadcrumbTitle="Sewickley Service Area">
                <section className="services-details-area pt-120 pb-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8">
                                <div className="services-details-wrap">
                                    {/* <div className="services-details-thumb mb-4">
                                        <img src="/assets/img/areas/sewickley-hero.jpg" alt="Sewickley PA Roofing and Siding Services" />
                                    </div> */}
                                    
                                    <div className="services-details-content">
                                        <h1 className="title mb-4">Sewickley's Premier Roofing & Home Improvement Contractor</h1>
                                        
                                        <p className="mb-4">
                                            Kletz Contracting has been proudly serving Sewickley for decades, understanding the unique character 
                                            and prestige of this historic Ohio River community. Known for its tree-lined streets, elegant Victorian 
                                            and Tudor homes, and discerning residents, Sewickley deserves contractors who appreciate fine craftsmanship 
                                            and attention to detail. From the historic district's stately mansions to the charming neighborhoods 
                                            throughout the borough, we provide services that honor Sewickley's architectural heritage while meeting 
                                            modern performance standards.
                                        </p>

                                        <h2 className="title-two mb-3">Why Sewickley Homeowners Trust Kletz Contracting</h2>
                                        
                                        <div className="services-process-wrap mb-5">
                                            <ul className="list-wrap">
                                                <li>
                                                    <div className="services-process-item">
                                                        <div className="icon">
                                                            <img src="/assets/img/icon/flat_check.svg" alt="" />
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="title">Historic Home Expertise</h4>
                                                            <p>Specialized experience with Sewickley's historic and luxury homes, understanding their unique construction and preservation needs</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="services-process-item">
                                                        <div className="icon">
                                                            <img src="/assets/img/icon/flat_check.svg" alt="" />
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="title">Premium Craftsmanship</h4>
                                                            <p>Meticulous attention to detail and use of the finest materials to match Sewickley's exacting standards</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="services-process-item">
                                                        <div className="icon">
                                                            <img src="/assets/img/icon/flat_check.svg" alt="" />
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="title">Discreet Professional Service</h4>
                                                            <p>White-glove service approach that respects the privacy and prestige of Sewickley's distinguished community</p>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>

                                        <h2 className="title-two mb-3">Our Services in Sewickley</h2>
                                        
                                        <h3 className="mb-3">Roofing for Historic and Luxury Homes</h3>
                                        <p className="mb-4">
                                            Sewickley's architectural treasures require roofing solutions that blend traditional aesthetics 
                                            with modern performance. Our comprehensive roofing services include:
                                        </p>
                                        <ul className="list-wrap mb-4">
                                            <li>Historic slate roof restoration and repair</li>
                                            <li>Premium architectural shingle installations</li>
                                            <li>Clay tile roofing for Mediterranean-style homes</li>
                                            <li>Custom copper work and specialty flashing</li>
                                            <li>Storm damage restoration with period-appropriate materials</li>
                                        </ul>
                                        
                                        <h3 className="mb-3">Luxury Siding Installation</h3>
                                        <p className="mb-4">
                                            Enhance and protect your Sewickley home with siding that complements its architectural significance:
                                        </p>
                                        <ul className="list-wrap mb-4">
                                            <li>James Hardie ColorPlus fiber cement siding</li>
                                            <li>Cedar and hardwood siding for historic authenticity</li>
                                            <li>Premium vinyl siding in traditional profiles</li>
                                            <li>Board and batten styles for carriage houses</li>
                                            <li>Custom trim work and architectural details</li>
                                        </ul>
                                        
                                        <h3 className="mb-3">Discreet Dumpster Rental</h3>
                                        <p className="mb-4">
                                            For renovation projects in Sewickley's prestigious neighborhoods, our professional 
                                            dumpster service provides:
                                        </p>
                                        <ul className="list-wrap mb-4">
                                            <li>Clean, well-maintained 10, 15, and 20-yard containers</li>
                                            <li>Discreet placement respecting neighborhood aesthetics</li>
                                            <li>Flexible scheduling for minimal community impact</li>
                                            <li>Historic district delivery experience</li>
                                            <li>Professional coordination with borough requirements</li>
                                        </ul>

                                        <h2 className="title-two mb-3">Sewickley Areas We Serve</h2>
                                        <p className="mb-4">
                                            We provide services throughout all of Sewickley, including:
                                        </p>
                                        <ul className="list-wrap mb-4">
                                            <li>Historic District and Broad Street corridor</li>
                                            <li>Beaver Street and Thorn Street neighborhoods</li>
                                            <li>Blackburn Road and Ferry Street areas</li>
                                            <li>Ohio River waterfront properties</li>
                                            <li>Sewickley Heights vicinity</li>
                                            <li>All borough residential areas</li>
                                        </ul>

                                        <div className="project-details-wrap mt-5">
                                            <div className="project-details-info">
                                                <ul className="list-wrap">
                                                    <li><span>Service Area:</span>All of Sewickley Borough</li>
                                                    <li><span>Specialty:</span>Historic and luxury homes</li>
                                                    <li><span>Character:</span>Prestigious Ohio River community</li>
                                                    <li><span>Experience:</span>Decades serving discerning homeowners</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-xl-4">
                                <aside className="services-sidebar">
                                    <div className="services-widget">
                                        <h4 className="sw-title">Our Sewickley Services</h4>
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
                                        <h4 className="sw-title">Get Your Free Sewickley Quote</h4>
                                        <div className="services-widget-contact">
                                            <p>Ready to enhance your Sewickley home? Contact us today!</p>
                                            <Link href="tel:412-200-2475" className="btn btn-primary w-100 mb-3">
                                                <i className="fas fa-phone-alt mr-2"></i> Call (412) 200-2475
                                            </Link>
                                            <Link href="/contact" className="btn btn-outline-primary w-100">
                                                Request Free Estimate
                                            </Link>
                                        </div>
                                    </div>
                                    
                                    <div className="services-widget">
                                        <h4 className="sw-title">Nearby Communities</h4>
                                        <div className="services-cat-list">
                                            <ul className="list-wrap">
                                                <li><Link href="/service-areas/moon-township">Moon Township<i className="fas fa-angle-double-right" /></Link></li>
                                                <li><Link href="/service-areas/coraopolis">Coraopolis<i className="fas fa-angle-double-right" /></Link></li>
                                                <li><Link href="/service-areas/robinson-township">Robinson Township<i className="fas fa-angle-double-right" /></Link></li>
                                                <li><Link href="/service-areas/kennedy-township">Kennedy Township<i className="fas fa-angle-double-right" /></Link></li>
                                                <li><Link href="/service-areas">View All Areas<i className="fas fa-angle-double-right" /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </section>
                
     
                <FaqSection category={'sewickley'}/>
                <Brand3 />
            </Layout>
        </>
    )
}