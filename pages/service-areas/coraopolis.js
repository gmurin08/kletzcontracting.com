import Layout from "@/components/layout/Layout"
import PageHead from "@/components/layout/PageHead"
import LocalBusinessSchema from "@/components/LocalBusinessSchema"
import Link from "next/link"
import Brand3 from "@/components/sections/Brand3"
import FaqSection from "@/components/sections/FaqSection"
import FaqSchema from "@/components/FaqSchema"

export default function Coraopolis() {
    const locationSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://kletzcontracting.com/service-areas/coraopolis#location",
        "parentOrganization": {
            "@id": "https://kletzcontracting.com#organization"
        },
        "name": "Kletz Contracting - Coraopolis",
        "description": "Professional roofing, siding, and dumpster rental services in Coraopolis, PA. Trusted local contractor serving the Ohio River community.",
        "areaServed": {
            "@type": "City",
            "name": "Coraopolis",
            "containedInPlace": {
                "@type": "State",
                "name": "Pennsylvania"
            }
        }
    }

    return (
        <>
            <PageHead 
                headTitle="Coraopolis Roofing & Siding Contractor | Kletz Contracting"
                metaDescription="Professional roofing, siding installation, and dumpster rental services in Coraopolis, PA. Family-owned contractor serving Coraopolis Heights and the Ohio River Valley. Free estimates, licensed & insured."
                canonicalUrl="https://kletzcontracting.com/service-areas/coraopolis"
                keywords="Coraopolis roofing contractor, Coraopolis siding installation, Coraopolis dumpster rental, roofing repair Coraopolis PA, home improvement Coraopolis"
                structuredData={locationSchema}
            />
            <LocalBusinessSchema />
            <FaqSchema category={"coraopolis"}/>
            <Layout breadcrumbTitle="Coraopolis Service Area">
                <section className="services-details-area pt-120 pb-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8">
                                <div className="services-details-wrap">
                                    {/* <div className="services-details-thumb mb-4">
                                        <img src="/assets/img/areas/coraopolis-hero.jpg" alt="Coraopolis PA Roofing and Siding Services" />
                                    </div> */}
                                    
                                    <div className="services-details-content">
                                        <h1 className="title mb-4">Coraopolis's Trusted Roofing & Home Improvement Contractor</h1>
                                        
                                        <p className="mb-4">
                                            Kletz Contracting has been proudly serving Coraopolis and the surrounding Ohio River Valley 
                                            communities for nearly 40 years. As neighbors just up the hill in Robinson Township, we understand 
                                            the unique challenges that Coraopolis homes face, from river valley humidity to hillside construction 
                                            considerations. Our local expertise and commitment to quality make us Coraopolis's preferred choice 
                                            for roofing, siding, and home improvement projects.
                                        </p>

                                        <h2 className="title-two mb-3">Why Coraopolis Residents Choose Kletz Contracting</h2>
                                        
                                        <div className="services-process-wrap mb-5">
                                            <ul className="list-wrap">
                                                <li>
                                                    <div className="services-process-item">
                                                        <div className="icon">
                                                            <img src="/assets/img/icon/flat_check.svg" alt="" />
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="title">Local Knowledge</h4>
                                                            <p>We understand Coraopolis's unique geography, from riverside properties to hillside homes in Coraopolis Heights</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="services-process-item">
                                                        <div className="icon">
                                                            <img src="/assets/img/icon/flat_check.svg" alt="" />
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="title">Weather Expertise</h4>
                                                            <p>Experience with Ohio River valley weather patterns and their impact on roofing and siding</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="services-process-item">
                                                        <div className="icon">
                                                            <img src="/assets/img/icon/flat_check.svg" alt="" />
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="title">Community Trust</h4>
                                                            <p>Decades of satisfied customers throughout Coraopolis and neighboring communities</p>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>

                                        <h2 className="title-two mb-3">Our Services in Coraopolis</h2>
                                        
                                        <h3 className="mb-3">Roofing Services for Coraopolis Homes</h3>
                                        <p className="mb-4">
                                            Coraopolis homes, whether in the historic downtown area or up in Coraopolis Heights, need 
                                            roofing that can handle our region's weather extremes. We provide comprehensive roofing services 
                                            including:
                                        </p>
                                        <ul className="list-wrap mb-4">
                                            <li>Complete roof replacements with quality materials</li>
                                            <li>Storm damage assessment and repairs</li>
                                            <li>Regular maintenance to extend roof life</li>
                                            <li>Emergency leak repairs</li>
                                            <li>Historic home roofing specialists</li>
                                        </ul>
                                        
                                        <h3 className="mb-3">Siding Installation in Coraopolis</h3>
                                        <p className="mb-4">
                                            Protect and beautify your Coraopolis home with professional siding installation. The Ohio River 
                                            valley's humidity makes quality siding essential. We offer:
                                        </p>
                                        <ul className="list-wrap mb-4">
                                            <li>Moisture-resistant vinyl siding options</li>
                                            <li>Durable fiber cement siding</li>
                                            <li>Wood siding restoration for historic homes</li>
                                            <li>Energy-efficient insulated siding</li>
                                            <li>Complete exterior transformations</li>
                                        </ul>
                                        
                                        <h3 className="mb-3">Dumpster Rental for Coraopolis Projects</h3>
                                        <p className="mb-4">
                                            Whether you're renovating a home near Montour Run or cleaning out a property in downtown 
                                            Coraopolis, our dumpster rental service makes cleanup easy:
                                        </p>
                                        <ul className="list-wrap mb-4">
                                            <li>10, 15, and 20-yard dumpsters available</li>
                                            <li>Hillside-friendly placement options</li>
                                            <li>Flexible rental periods</li>
                                            <li>Competitive local pricing</li>
                                            <li>Same-day or next-day delivery</li>
                                        </ul>

                                        <h2 className="title-two mb-3">Coraopolis Neighborhoods We Serve</h2>
                                        <p className="mb-4">
                                            We provide services throughout all of Coraopolis, including:
                                        </p>
                                        <ul className="list-wrap mb-4">
                                            <li>Downtown Coraopolis</li>
                                            <li>Coraopolis Heights</li>
                                            <li>Thorn Run area</li>
                                            <li>Montour Run corridor</li>
                                            <li>State Avenue business district</li>
                                            <li>All residential neighborhoods</li>
                                        </ul>

                                        <div className="project-details-wrap mt-5">
                                            <div className="project-details-info">
                                                <ul className="list-wrap">
                                                    <li><span>Coverage:</span>All of Coraopolis Borough</li>
                                                    <li><span>Response Time:</span>Quick local service</li>
                                                    <li><span>Specialty:</span>Hillside & historic homes</li>
                                                    <li><span>Experience:</span>Nearly 40 years serving area</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-xl-4">
                                <aside className="services-sidebar">
                                    <div className="services-widget">
                                        <h4 className="sw-title">Our Coraopolis Services</h4>
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
                                        <h4 className="sw-title">Get Your Free Coraopolis Quote</h4>
                                        <div className="services-widget-contact">
                                            <p>Ready to improve your Coraopolis property? Contact us today!</p>
                                            <Link href="tel:412-219-7279" className="btn btn-primary w-100 mb-3">
                                                <i className="fas fa-phone-alt mr-2"></i> Call (412) 219-7279
                                            </Link>
                                            <Link href="/contact" className="btn btn-outline-primary w-100">
                                                Request Free Estimate
                                            </Link>
                                        </div>
                                    </div>
                                    
                                    <div className="services-widget">
                                        <h4 className="sw-title">Nearby Service Areas</h4>
                                        <div className="services-cat-list">
                                            <ul className="list-wrap">
                                                <li><Link href="/service-areas/robinson-township">Robinson Township<i className="fas fa-angle-double-right" /></Link></li>
                                                <li><Link href="/service-areas/moon-township">Moon Township<i className="fas fa-angle-double-right" /></Link></li>
                                                <li><Link href="/service-areas/kennedy-township">Kennedy Township<i className="fas fa-angle-double-right" /></Link></li>
                                                <li><Link href="/service-areas/pittsburgh">Pittsburgh<i className="fas fa-angle-double-right" /></Link></li>
                                                <li><Link href="/service-areas">View All Areas<i className="fas fa-angle-double-right" /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </section>
                
               
                <FaqSection category={'coraopolis'}/>
                <Brand3 />
            </Layout>
        </>
    )
}