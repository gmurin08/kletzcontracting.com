import Layout from "@/components/layout/Layout"
import PageHead from "@/components/layout/PageHead"
import LocalBusinessSchema from "@/components/LocalBusinessSchema"
import Link from "next/link"
import Counter3 from "@/components/sections/Counter3"
import Brand3 from "@/components/sections/Brand3"
import FaqSection from "@/components/sections/FaqSection"
import FaqSchema from "@/components/FaqSchema"

export default function MoonTownship() {
    const locationSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://kletzcontracting.com/service-areas/moon-township#location",
        "parentOrganization": {
            "@id": "https://kletzcontracting.com#organization"
        },
        "name": "Kletz Contracting - Moon Township",
        "description": "Professional roofing, siding, and dumpster rental services in Moon Township, PA. Quality home improvement contractor serving your community with excellence.",
        "areaServed": {
            "@type": "City",
            "name": "Moon Township",
            "containedInPlace": {
                "@type": "State",
                "name": "Pennsylvania"
            }
        }
    }

    return (
        <>
            <PageHead 
                headTitle="Moon Township Roofing & Siding Contractor | Kletz Contracting"
                metaDescription="Expert roofing, siding installation, and dumpster rental services in Moon Township, PA. Local contractor serving Moon Run, Carnot, and surrounding areas. Family-owned since 1985. Free estimates."
                canonicalUrl="https://kletzcontracting.com/service-areas/moon-township"
                keywords="Moon Township roofing contractor, Moon Township siding installation, Moon Township dumpster rental, roofing repair Moon PA, home improvement Moon Township"
                structuredData={locationSchema}
            />
            <LocalBusinessSchema />
            <FaqSchema category={"moon-township"}/>
            <Layout breadcrumbTitle="Moon Township Service Area">
                <section className="services-details-area pt-120 pb-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8">
                                <div className="services-details-wrap">
                                    <div className="services-details-thumb mb-4">
                                        <img src="/assets/img/areas/moon-township-hero.jpg" alt="Moon Township PA Roofing and Siding Services" />
                                    </div>
                                    
                                    <div className="services-details-content">
                                        <h1 className="title mb-4">Moon Township's Reliable Roofing & Home Improvement Experts</h1>
                                        
                                        <p className="mb-4">
                                            Located just minutes from Moon Township, Kletz Contracting has been serving this thriving community 
                                            for decades. We understand the unique needs of Moon Township homes, from the established neighborhoods 
                                            near Moon Park to the newer developments throughout the area. Our commitment to quality and service 
                                            has made us the preferred contractor for Moon Township residents.
                                        </p>

                                        <h2 className="title-two mb-3">Why Moon Township Homeowners Trust Kletz Contracting</h2>
                                        
                                        <div className="services-process-wrap mb-5">
                                            <ul className="list-wrap">
                                                <li>
                                                    <div className="services-process-item">
                                                        <div className="icon">
                                                            <img src="/assets/img/icon/flat_check.svg" alt="" />
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="title">Local Presence</h4>
                                                            <p>Just minutes away in Robinson Township, we provide quick response times and understand Moon Township's specific needs</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="services-process-item">
                                                        <div className="icon">
                                                            <img src="/assets/img/icon/flat_check.svg" alt="" />
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="title">Airport Area Expertise</h4>
                                                            <p>We're familiar with the unique challenges of homes near the airport, including soundproofing considerations</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="services-process-item">
                                                        <div className="icon">
                                                            <img src="/assets/img/icon/flat_check.svg" alt="" />
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="title">Community Knowledge</h4>
                                                            <p>We know Moon Township's neighborhoods, building codes, and work with local HOAs regularly</p>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>

                                        <h2 className="title-two mb-3">Our Services in Moon Township</h2>
                                        
                                        <h3 className="mb-3">Roofing Services</h3>
                                        <p className="mb-4">
                                            Moon Township homes face diverse weather conditions throughout the year. Whether you need 
                                            emergency repairs after a storm, a complete roof replacement, or regular maintenance, our 
                                            experienced team delivers lasting solutions that protect your investment.
                                        </p>
                                        
                                        <h3 className="mb-3">Siding Installation</h3>
                                        <p className="mb-4">
                                            Enhance your Moon Township home's curb appeal and protection with professional siding 
                                            installation. We offer a wide range of materials and styles to match your home's architecture 
                                            and your personal preferences, all installed with meticulous attention to detail.
                                        </p>
                                        
                                        <h3 className="mb-3">Dumpster Rental</h3>
                                        <p className="mb-4">
                                            Planning a home renovation or cleanout in Moon Township? Our dumpster rental service makes 
                                            debris removal hassle-free. We offer various sizes and flexible rental periods, with prompt 
                                            delivery and pickup throughout Moon Township.
                                        </p>

                                        <h2 className="title-two mb-3">Areas We Serve in Moon Township</h2>
                                        <p className="mb-4">
                                            We proudly serve all neighborhoods and areas within Moon Township, including:
                                        </p>
                                        <ul className="list-wrap mb-4">
                                            <li>Moon Run</li>
                                            <li>Carnot</li>
                                            <li>Flaugherty Run</li>
                                            <li>Montour Run</li>
                                            <li>Areas near Pittsburgh International Airport</li>
                                            <li>All residential and commercial districts</li>
                                        </ul>

                                        <div className="project-details-wrap mt-5">
                                            <div className="project-details-info">
                                                <ul className="list-wrap">
                                                    <li><span>Service Area:</span>All of Moon Township</li>
                                                    <li><span>Distance from Base:</span>Less than 10 minutes</li>
                                                    <li><span>Emergency Service:</span>Priority response available</li>
                                                    <li><span>Special Expertise:</span>Airport area soundproofing</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-xl-4">
                                <aside className="services-sidebar">
                                    <div className="services-widget">
                                        <h4 className="sw-title">Our Moon Township Services</h4>
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
                                        <h4 className="sw-title">Get a Free Moon Township Quote</h4>
                                        <div className="services-widget-contact">
                                            <p>Ready to start your Moon Township home improvement project?</p>
                                            <Link href="tel:412-200-2475" className="btn btn-primary w-100 mb-3">
                                                <i className="fas fa-phone-alt mr-2"></i> Call (412) 200-2475
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
                                                <li><Link href="/service-areas/coraopolis">Coraopolis<i className="fas fa-angle-double-right" /></Link></li>
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
                
                <Counter3 />
                <FaqSection category={'moon-township'}/>
                <Brand3 />
            </Layout>
        </>
    )
}