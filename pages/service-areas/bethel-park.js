import Layout from "@/components/layout/Layout"
import PageHead from "@/components/layout/PageHead"
import LocalBusinessSchema from "@/components/LocalBusinessSchema"
import Link from "next/link"
import Counter3 from "@/components/sections/Counter3"
import Brand3 from "@/components/sections/Brand3"
import FaqSection from "@/components/sections/FaqSection"
import FaqSchema from "@/components/FaqSchema"

export default function BethelPark() {
    const locationSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://kletzcontracting.com/service-areas/bethel-park#location",
        "parentOrganization": {
            "@id": "https://kletzcontracting.com#organization"
        },
        "name": "Kletz Contracting - Bethel Park",
        "description": "Professional roofing, siding, and dumpster rental services in Bethel Park, PA. Trusted contractor serving this vibrant South Hills community.",
        "areaServed": {
            "@type": "City",
            "name": "Bethel Park",
            "containedInPlace": {
                "@type": "State",
                "name": "Pennsylvania"
            }
        }
    }

    return (
        <>
            <PageHead 
                headTitle="Bethel Park Roofing & Siding Contractor | Kletz Contracting"
                metaDescription="Professional roofing, siding installation, and dumpster rental services in Bethel Park, PA. Trusted contractor serving this vibrant South Hills community. Family-owned since 1985. Free estimates for Bethel Park homes."
                canonicalUrl="https://kletzcontracting.com/service-areas/bethel-park"
                keywords="Bethel Park roofing contractor, Bethel Park siding installation, Bethel Park dumpster rental, roofing repair Bethel Park PA, home improvement Bethel Park South Hills"
                structuredData={locationSchema}
            />
            <LocalBusinessSchema />
            <FaqSchema category={"bethel-park"}/>
            <Layout breadcrumbTitle="Bethel Park Service Area">
                <section className="services-details-area pt-120 pb-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8">
                                <div className="services-details-wrap">
                                    <div className="services-details-thumb mb-4">
                                        <img src="/assets/img/areas/bethel-park-hero.jpg" alt="Bethel Park PA Roofing and Siding Services" />
                                    </div>
                                    
                                    <div className="services-details-content">
                                        <h1 className="title mb-4">Bethel Park's Trusted Roofing & Home Improvement Contractor</h1>
                                        
                                        <p className="mb-4">
                                            Kletz Contracting has been proudly serving Bethel Park for decades, building lasting relationships 
                                            with homeowners throughout this thriving South Hills community. Known for its excellent schools, 
                                            family-friendly neighborhoods, and strong community spirit, Bethel Park deserves contractors who 
                                            share those same values. From the established neighborhoods near South Park to the newer developments 
                                            throughout the municipality, we understand what Bethel Park homeowners value most: quality work, 
                                            fair pricing, and reliable service.
                                        </p>

                                        <h2 className="title-two mb-3">Why Bethel Park Homeowners Choose Kletz Contracting</h2>
                                        
                                        <div className="services-process-wrap mb-5">
                                            <ul className="list-wrap">
                                                <li>
                                                    <div className="services-process-item">
                                                        <div className="icon">
                                                            <img src="/assets/img/icon/flat_check.svg" alt="" />
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="title">Community Values</h4>
                                                            <p>We share Bethel Park's commitment to family, quality education, and community pride in our work and service approach</p>
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
                                                            <p>Deep knowledge of South Hills architecture, building codes, and the unique needs of Bethel Park homes</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="services-process-item">
                                                        <div className="icon">
                                                            <img src="/assets/img/icon/flat_check.svg" alt="" />
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="title">Family-Focused Service</h4>
                                                            <p>Understanding that Bethel Park families value quality and reliability, we deliver both consistently</p>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>

                                        <h2 className="title-two mb-3">Our Services in Bethel Park</h2>
                                        
                                        <h3 className="mb-3">Roofing Services for Bethel Park Families</h3>
                                        <p className="mb-4">
                                            Bethel Park homes need reliable roofing that protects what matters most - your family and your 
                                            investment. Our comprehensive roofing services include:
                                        </p>
                                        <ul className="list-wrap mb-4">
                                            <li>Complete roof replacements with quality materials</li>
                                            <li>Storm damage assessment and emergency repairs</li>
                                            <li>Insurance claim assistance and documentation</li>
                                            <li>Preventive maintenance to extend roof life</li>
                                            <li>Gutter installation and repair services</li>
                                        </ul>
                                        
                                        <h3 className="mb-3">Siding Installation and Repair</h3>
                                        <p className="mb-4">
                                            Enhance your Bethel Park home's curb appeal and protection with professional siding services:
                                        </p>
                                        <ul className="list-wrap mb-4">
                                            <li>Vinyl siding in colors that complement Bethel Park's character</li>
                                            <li>James Hardie fiber cement for durability and beauty</li>
                                            <li>Wood siding restoration for older homes</li>
                                            <li>Energy-efficient insulated siding options</li>
                                            <li>Complete exterior transformations</li>
                                        </ul>
                                        
                                        <h3 className="mb-3">Dumpster Rental for Your Projects</h3>
                                        <p className="mb-4">
                                            Whether you're renovating your kitchen or cleaning out the garage, our dumpster rental 
                                            service keeps your Bethel Park project organized:
                                        </p>
                                        <ul className="list-wrap mb-4">
                                            <li>10, 15, and 20-yard containers available</li>
                                            <li>Family-friendly scheduling and placement</li>
                                            <li>Flexible rental periods for any timeline</li>
                                            <li>Clean, well-maintained equipment</li>
                                            <li>Respectful service for neighborhood living</li>
                                        </ul>

                                        <h2 className="title-two mb-3">Bethel Park Areas We Serve</h2>
                                        <p className="mb-4">
                                            We provide services throughout all of Bethel Park, including:
                                        </p>
                                        <ul className="list-wrap mb-4">
                                            <li>Beadling area neighborhoods</li>
                                            <li>Logan Elementary district</li>
                                            <li>Independence Middle School area</li>
                                            <li>South Park border communities</li>
                                            <li>Library Road corridor</li>
                                            <li>All Bethel Park residential neighborhoods</li>
                                        </ul>

                                        <div className="project-details-wrap mt-5">
                                            <div className="project-details-info">
                                                <ul className="list-wrap">
                                                    <li><span>Service Area:</span>All of Bethel Park Municipality</li>
                                                    <li><span>Community:</span>Family-focused South Hills</li>
                                                    <li><span>Values:</span>Quality, reliability, fair pricing</li>
                                                    <li><span>Experience:</span>Decades serving growing families</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-xl-4">
                                <aside className="services-sidebar">
                                    <div className="services-widget">
                                        <h4 className="sw-title">Our Bethel Park Services</h4>
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
                                        <h4 className="sw-title">Get Your Free Bethel Park Quote</h4>
                                        <div className="services-widget-contact">
                                            <p>Ready to protect your Bethel Park home? Contact us today!</p>
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
                                                <li><Link href="/service-areas/upper-st-clair">Upper St. Clair<i className="fas fa-angle-double-right" /></Link></li>
                                                <li><Link href="/service-areas/south-park">South Park<i className="fas fa-angle-double-right" /></Link></li>
                                                <li><Link href="/service-areas/peters-township">Peters Township<i className="fas fa-angle-double-right" /></Link></li>
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
                <FaqSection category={'bethel-park'}/>
                <Brand3 />
            </Layout>
        </>
    )
}