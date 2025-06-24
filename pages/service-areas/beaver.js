import Layout from "@/components/layout/Layout"
import PageHead from "@/components/layout/PageHead"
import LocalBusinessSchema from "@/components/LocalBusinessSchema"
import Link from "next/link"
import Brand3 from "@/components/sections/Brand3"
import FaqSection from "@/components/sections/FaqSection"
import FaqSchema from "@/components/FaqSchema"

export default function Beaver() {
    const locationSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://kletzcontracting.com/service-areas/beaver#location",
        "parentOrganization": {
            "@id": "https://kletzcontracting.com#organization"
        },
        "name": "Kletz Contracting - Beaver",
        "description": "Professional roofing, siding, and dumpster rental services in Beaver, PA. Trusted contractor serving this historic Ohio River community.",
        "areaServed": {
            "@type": "City",
            "name": "Beaver",
            "containedInPlace": {
                "@type": "State",
                "name": "Pennsylvania"
            }
        }
    }

    return (
        <>
            <PageHead 
                headTitle="Beaver PA Roofing & Siding Contractor | Kletz Contracting"
                metaDescription="Professional roofing, siding installation, and dumpster rental services in Beaver, PA. Trusted contractor serving this historic Ohio River community. Expert service for historic homes. Free estimates in Beaver County."
                canonicalUrl="https://kletzcontracting.com/service-areas/beaver"
                keywords="Beaver PA roofing contractor, Beaver Pennsylvania siding installation, Beaver dumpster rental, roofing repair Beaver PA, home improvement Beaver County Ohio River"
                structuredData={locationSchema}
            />
            <LocalBusinessSchema />
            <FaqSchema category={"beaver"}/>
            <Layout breadcrumbTitle="Beaver Service Area">
                <section className="services-details-area pt-120 pb-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8">
                                <div className="services-details-wrap">
                                    {/* <div className="services-details-thumb mb-4">
                                        <img src="/assets/img/areas/beaver-hero.jpg" alt="Beaver PA Roofing and Siding Services" />
                                    </div>
                                     */}
                                    <div className="services-details-content">
                                        <h1 className="title mb-4">Beaver's Trusted Roofing & Home Improvement Contractor</h1>
                                        
                                        <p className="mb-4">
                                            Kletz Contracting has been proudly serving Beaver for decades, understanding the rich history 
                                            and unique character of this Ohio River community. As the county seat of Beaver County, 
                                            Beaver is known for its historic homes, tree-lined streets, and strong community pride. 
                                            From the historic downtown district to the residential neighborhoods throughout the borough, 
                                            we provide services that honor Beaver's heritage while meeting modern performance and 
                                            energy efficiency standards.
                                        </p>

                                        <h2 className="title-two mb-3">Why Beaver Residents Trust Kletz Contracting</h2>
                                        
                                        <div className="services-process-wrap mb-5">
                                            <ul className="list-wrap">
                                                <li>
                                                    <div className="services-process-item">
                                                        <div className="icon">
                                                            <img src="/assets/img/icon/flat_check.svg" alt="" />
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="title">Historic Home Specialists</h4>
                                                            <p>Extensive experience with Beaver's historic homes, using appropriate materials and techniques that preserve their character</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="services-process-item">
                                                        <div className="icon">
                                                            <img src="/assets/img/icon/flat_check.svg" alt="" />
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="title">Ohio River Valley Expertise</h4>
                                                            <p>Understanding of how the Ohio River valley's climate and humidity affect homes in Beaver and the surrounding area</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="services-process-item">
                                                        <div className="icon">
                                                            <img src="/assets/img/icon/flat_check.svg" alt="" />
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="title">Community Heritage Respect</h4>
                                                            <p>Appreciation for Beaver's historic significance and commitment to maintaining the community's architectural integrity</p>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>

                                        <h2 className="title-two mb-3">Our Services in Beaver</h2>
                                        
                                        <h3 className="mb-3">Roofing for Historic and Traditional Homes</h3>
                                        <p className="mb-4">
                                            Beaver's historic homes require roofing solutions that respect their architectural heritage 
                                            while providing modern protection. Our services include:
                                        </p>
                                        <ul className="list-wrap mb-4">
                                            <li>Historic slate roof restoration and maintenance</li>
                                            <li>Architectural shingle installations that complement period styles</li>
                                            <li>Clay tile work for Mediterranean and mission-style homes</li>
                                            <li>Storm damage repairs with period-appropriate materials</li>
                                            <li>Gutter and downspout systems for historic properties</li>
                                        </ul>
                                        
                                        <h3 className="mb-3">Siding Installation and Restoration</h3>
                                        <p className="mb-4">
                                            Protect and enhance your Beaver home with siding that complements the community's historic character:
                                        </p>
                                        <ul className="list-wrap mb-4">
                                            <li>Wood siding restoration for historic authenticity</li>
                                            <li>James Hardie fiber cement in traditional profiles</li>
                                            <li>Vinyl siding in colors that complement historic districts</li>
                                            <li>Board and batten styles for period homes</li>
                                            <li>Custom trim work and architectural details</li>
                                        </ul>
                                        
                                        <h3 className="mb-3">Dumpster Rental for Projects</h3>
                                        <p className="mb-4">
                                            Whether renovating a historic home or working on modern improvements, our dumpster service provides:
                                        </p>
                                        <ul className="list-wrap mb-4">
                                            <li>10, 15, and 20-yard containers available</li>
                                            <li>Careful placement respecting historic properties</li>
                                            <li>Flexible scheduling for project timelines</li>
                                            <li>Experience with historic district requirements</li>
                                            <li>Professional service throughout Beaver County</li>
                                        </ul>

                                        <h2 className="title-two mb-3">Beaver Areas We Serve</h2>
                                        <p className="mb-4">
                                            We provide services throughout all of Beaver, including:
                                        </p>
                                        <ul className="list-wrap mb-4">
                                            <li>Historic downtown district</li>
                                            <li>Third Street and Fourth Street corridors</li>
                                            <li>Buffalo Street and Market Street areas</li>
                                            <li>College Hill neighborhood</li>
                                            <li>Ohio River waterfront properties</li>
                                            <li>All residential neighborhoods in Beaver Borough</li>
                                        </ul>

                                        <div className="project-details-wrap mt-5">
                                            <div className="project-details-info">
                                                <ul className="list-wrap">
                                                    <li><span>Service Area:</span>All of Beaver Borough</li>
                                                    <li><span>County Seat:</span>Beaver County</li>
                                                    <li><span>Character:</span>Historic Ohio River community</li>
                                                    <li><span>Specialty:</span>Historic preservation and restoration</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-xl-4">
                                <aside className="services-sidebar">
                                    <div className="services-widget">
                                        <h4 className="sw-title">Our Beaver Services</h4>
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
                                        <h4 className="sw-title">Get Your Free Beaver Quote</h4>
                                        <div className="services-widget-contact">
                                            <p>Ready to protect your Beaver home? Contact us today!</p>
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
                                                <li><Link href="/service-areas/sewickley">Sewickley<i className="fas fa-angle-double-right" /></Link></li>
                                                <li><Link href="/service-areas/moon-township">Moon Township<i className="fas fa-angle-double-right" /></Link></li>
                                                <li><Link href="/service-areas/coraopolis">Coraopolis<i className="fas fa-angle-double-right" /></Link></li>
                                                <li><Link href="/service-areas">View All Areas<i className="fas fa-angle-double-right" /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </section>
                
                <FaqSection category={'beaver'}/>
                <Brand3 />
            </Layout>
        </>
    )
}