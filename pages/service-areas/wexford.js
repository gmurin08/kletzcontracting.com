import Layout from "@/components/layout/Layout"
import PageHead from "@/components/layout/PageHead"
import LocalBusinessSchema from "@/components/LocalBusinessSchema"
import Link from "next/link"
import Counter3 from "@/components/sections/Counter3"
import Brand3 from "@/components/sections/Brand3"
import FaqSection from "@/components/sections/FaqSection"
import FaqSchema from "@/components/FaqSchema"

export default function Wexford() {
    const locationSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://kletzcontracting.com/service-areas/wexford#location",
        "parentOrganization": {
            "@id": "https://kletzcontracting.com#organization"
        },
        "name": "Kletz Contracting - Wexford",
        "description": "Professional roofing, siding, and dumpster rental services in Wexford, PA. Quality contractor serving this upscale Allegheny County community.",
        "areaServed": {
            "@type": "City",
            "name": "Wexford",
            "containedInPlace": {
                "@type": "State",
                "name": "Pennsylvania"
            }
        }
    }

    return (
        <>
            <PageHead 
                headTitle="Wexford PA Roofing & Siding Contractor | Kletz Contracting"
                metaDescription="Expert roofing, siding installation, and dumpster rental services in Wexford, PA. Trusted contractor serving this prestigious North Hills community. Premium service for upscale homes. Free estimates."
                canonicalUrl="https://kletzcontracting.com/service-areas/wexford"
                keywords="Wexford PA roofing contractor, Wexford Pennsylvania siding installation, Wexford PA dumpster rental, roofing repair Wexford North Hills, home improvement Wexford PA"
                structuredData={locationSchema}
            />
            <LocalBusinessSchema />
            <FaqSchema category={"wexford"}/>
            <Layout breadcrumbTitle="Wexford PA Service Area">
                <section className="services-details-area pt-120 pb-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8">
                                <div className="services-details-wrap">
                                    <div className="services-details-thumb mb-4">
                                        <img src="/assets/img/areas/wexford-pa-hero.jpg" alt="Wexford PA Roofing and Siding Services" />
                                    </div>
                                    
                                    <div className="services-details-content">
                                        <h1 className="title mb-4">Wexford's Premier Roofing & Home Improvement Contractor</h1>
                                        
                                        <p className="mb-4">
                                            Kletz Contracting is honored to serve Wexford, one of the North Hills' most prestigious communities. 
                                            For decades, we've been the contractor of choice for discerning Wexford homeowners who demand 
                                            excellence in both craftsmanship and service. From the elegant homes in The Reserves to the 
                                            established neighborhoods throughout this desirable area, we understand that Wexford residents 
                                            expect and deserve the highest quality workmanship.
                                        </p>

                                        <h2 className="title-two mb-3">Why Wexford Homeowners Choose Kletz Contracting</h2>
                                        
                                        <div className="services-process-wrap mb-5">
                                            <ul className="list-wrap">
                                                <li>
                                                    <div className="services-process-item">
                                                        <div className="icon">
                                                            <img src="/assets/img/icon/flat_check.svg" alt="" />
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="title">Luxury Home Expertise</h4>
                                                            <p>Specialized experience with Wexford's upscale homes and high-end architectural styles</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="services-process-item">
                                                        <div className="icon">
                                                            <img src="/assets/img/icon/flat_check.svg" alt="" />
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="title">Premium Materials</h4>
                                                            <p>Access to high-end roofing and siding materials that match Wexford's quality standards</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="services-process-item">
                                                        <div className="icon">
                                                            <img src="/assets/img/icon/flat_check.svg" alt="" />
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="title">North Hills Knowledge</h4>
                                                            <p>Deep understanding of North Hills building requirements and community standards</p>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>

                                        <h2 className="title-two mb-3">Our Services in Wexford, PA</h2>
                                        
                                        <h3 className="mb-3">Premium Roofing Services</h3>
                                        <p className="mb-4">
                                            Wexford's beautiful homes deserve roofing that combines superior protection with aesthetic excellence. 
                                            Our comprehensive roofing services include:
                                        </p>
                                        <ul className="list-wrap mb-4">
                                            <li>Architectural shingle installations with designer styles</li>
                                            <li>Premium slate and tile roofing options</li>
                                            <li>Custom copper work and high-end trim</li>
                                            <li>Storm damage restoration with insurance expertise</li>
                                            <li>Preventive maintenance for luxury homes</li>
                                        </ul>
                                        
                                        <h3 className="mb-3">High-End Siding Installation</h3>
                                        <p className="mb-4">
                                            Transform your Wexford home with premium siding that enhances both beauty and value:
                                        </p>
                                        <ul className="list-wrap mb-4">
                                            <li>Designer vinyl siding in premium colors and textures</li>
                                            <li>James Hardie ColorPlus fiber cement siding</li>
                                            <li>Natural wood and composite options</li>
                                            <li>Stone and brick accent work</li>
                                            <li>Complete exterior renovations and upgrades</li>
                                        </ul>
                                        
                                        <h3 className="mb-3">Professional Dumpster Rental</h3>
                                        <p className="mb-4">
                                            For your Wexford renovation projects, our dumpster rental service provides clean, professional 
                                            waste management:
                                        </p>
                                        <ul className="list-wrap mb-4">
                                            <li>Clean, well-maintained roll-off containers</li>
                                            <li>Discreet placement respecting neighborhood aesthetics</li>
                                            <li>Flexible scheduling for luxury home projects</li>
                                            <li>Multiple sizes: 10, 15, and 20-yard options</li>
                                            <li>Professional service worthy of Wexford standards</li>
                                        </ul>

                                        <h2 className="title-two mb-3">Wexford Areas and Communities We Serve</h2>
                                        <p className="mb-4">
                                            We provide premium services throughout all of Wexford, including:
                                        </p>
                                        <ul className="list-wrap mb-4">
                                            <li>The Reserves luxury community</li>
                                            <li>Wexford Run neighborhoods</li>
                                            <li>Pine Ridge and surrounding areas</li>
                                            <li>Route 19 corridor developments</li>
                                            <li>Established Wexford residential areas</li>
                                            <li>All Wexford neighborhoods and subdivisions</li>
                                        </ul>

                                        <div className="project-details-wrap mt-5">
                                            <div className="project-details-info">
                                                <ul className="list-wrap">
                                                    <li><span>Service Area:</span>All of Wexford</li>
                                                    <li><span>Specialty:</span>Luxury and upscale homes</li>
                                                    <li><span>Standards:</span>Premium materials and craftsmanship</li>
                                                    <li><span>Region:</span>North Hills specialist</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-xl-4">
                                <aside className="services-sidebar">
                                    <div className="services-widget">
                                        <h4 className="sw-title">Our Wexford PA Services</h4>
                                        <div className="services-cat-list">
                                            <ul className="list-wrap">
                                                <li><Link href="/services/roofing">Premium Roofing<i className="fas fa-angle-double-right" /></Link></li>
                                                <li><Link href="/services/siding">Luxury Siding<i className="fas fa-angle-double-right" /></Link></li>
                                                <li><Link href="/services/dumpster-service">Dumpster Rental<i className="fas fa-angle-double-right" /></Link></li>
                                                <li><Link href="/services/remodeling">Kitchen & Bath<i className="fas fa-angle-double-right" /></Link></li>
                                                <li><Link href="/services/deck-construction">Custom Decks<i className="fas fa-angle-double-right" /></Link></li>
                                                <li><Link href="/services/home-additions">Home Additions<i className="fas fa-angle-double-right" /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                    <div className="services-widget">
                                        <h4 className="sw-title">Get Your Free Wexford Quote</h4>
                                        <div className="services-widget-contact">
                                            <p>Ready to enhance your prestigious Wexford home? Contact us today!</p>
                                            <Link href="tel:412-200-2475" className="btn btn-primary w-100 mb-3">
                                                <i className="fas fa-phone-alt mr-2"></i> Call (412) 200-2475
                                            </Link>
                                            <Link href="/contact" className="btn btn-outline-primary w-100">
                                                Request Free Estimate
                                            </Link>
                                        </div>
                                    </div>
                                    
                                    <div className="services-widget">
                                        <h4 className="sw-title">Nearby North Hills Areas</h4>
                                        <div className="services-cat-list">
                                            <ul className="list-wrap">
                                                <li><Link href="/service-areas/cranberry-township">Cranberry Township<i className="fas fa-angle-double-right" /></Link></li>
                                                <li><Link href="/service-areas/mars">Mars<i className="fas fa-angle-double-right" /></Link></li>
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
                
                <Counter3 />
                <FaqSection category={'wexford'}/>
                <Brand3 />
            </Layout>
        </>
    )
}