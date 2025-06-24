import Layout from "@/components/layout/Layout"
import PageHead from "@/components/layout/PageHead"
import LocalBusinessSchema from "@/components/LocalBusinessSchema"
import Link from "next/link"
import Counter3 from "@/components/sections/Counter3"
import Brand3 from "@/components/sections/Brand3"
import FaqSection from "@/components/sections/FaqSection"
import FaqSchema from "@/components/FaqSchema"

export default function KennedyTownship() {
    const locationSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://kletzcontracting.com/service-areas/kennedy-township#location",
        "parentOrganization": {
            "@id": "https://kletzcontracting.com#organization"
        },
        "name": "Kletz Contracting - Kennedy Township",
        "description": "Professional roofing, siding, and dumpster rental services in Kennedy Township, PA. Your neighbor and trusted contractor for quality home improvements.",
        "areaServed": {
            "@type": "City",
            "name": "Kennedy Township",
            "containedInPlace": {
                "@type": "State",
                "name": "Pennsylvania"
            }
        }
    }

    return (
        <>
            <PageHead 
                headTitle="Kennedy Township Roofing & Siding Contractor | Kletz Contracting"
                metaDescription="Expert roofing, siding installation, and dumpster rental services in Kennedy Township, PA. Local contractor serving McKees Rocks Road and surrounding neighborhoods. Family-owned since 1985. Free estimates."
                canonicalUrl="https://kletzcontracting.com/service-areas/kennedy-township"
                keywords="Kennedy Township roofing contractor, Kennedy Township siding installation, Kennedy Township dumpster rental, roofing repair Kennedy PA, home improvement Kennedy Township"
                structuredData={locationSchema}
            />
            <LocalBusinessSchema />
            <FaqSchema category={"kennedy-township"}/>
            <Layout breadcrumbTitle="Kennedy Township Service Area">
                <section className="services-details-area pt-120 pb-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8">
                                <div className="services-details-wrap">
                                    <div className="services-details-thumb mb-4">
                                        <img src="/assets/img/areas/kennedy-township-hero.jpg" alt="Kennedy Township PA Roofing and Siding Services" />
                                    </div>
                                    
                                    <div className="services-details-content">
                                        <h1 className="title mb-4">Kennedy Township's Neighborhood Roofing & Home Improvement Experts</h1>
                                        
                                        <p className="mb-4">
                                            As immediate neighbors to Kennedy Township, Kletz Contracting has been serving your community 
                                            with pride for nearly four decades. Located just across the border in Robinson Township, we're 
                                            minutes away and deeply familiar with Kennedy Township's neighborhoods, from the established homes 
                                            along McKees Rocks Road to the newer developments throughout the township. Our proximity and local 
                                            expertise make us Kennedy Township's natural choice for quality home improvements.
                                        </p>

                                        <h2 className="title-two mb-3">Why Kennedy Township Chooses Kletz Contracting</h2>
                                        
                                        <div className="services-process-wrap mb-5">
                                            <ul className="list-wrap">
                                                <li>
                                                    <div className="services-process-item">
                                                        <div className="icon">
                                                            <img src="/assets/img/icon/flat_check.svg" alt="" />
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="title">Next-Door Neighbors</h4>
                                                            <p>Based in adjacent Robinson Township, we're just minutes away for fast service and emergency response</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="services-process-item">
                                                        <div className="icon">
                                                            <img src="/assets/img/icon/flat_check.svg" alt="" />
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="title">Township Expertise</h4>
                                                            <p>Familiar with Kennedy Township's building codes, permit requirements, and neighborhood associations</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="services-process-item">
                                                        <div className="icon">
                                                            <img src="/assets/img/icon/flat_check.svg" alt="" />
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="title">Proven Track Record</h4>
                                                            <p>Hundreds of satisfied Kennedy Township customers over nearly 40 years of service</p>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>

                                        <h2 className="title-two mb-3">Our Services in Kennedy Township</h2>
                                        
                                        <h3 className="mb-3">Roofing Services</h3>
                                        <p className="mb-4">
                                            Kennedy Township homes deserve roofing that stands up to Western Pennsylvania's demanding weather. 
                                            From the older homes near Chartiers Creek to newer constructions, we provide:
                                        </p>
                                        <ul className="list-wrap mb-4">
                                            <li>Complete roof replacements with premium materials</li>
                                            <li>Storm damage inspection and repair</li>
                                            <li>Preventive maintenance programs</li>
                                            <li>Emergency leak response</li>
                                            <li>Gutter installation and repair</li>
                                        </ul>
                                        
                                        <h3 className="mb-3">Siding Installation</h3>
                                        <p className="mb-4">
                                            Transform your Kennedy Township home with beautiful, durable siding. Our expert installation 
                                            services include:
                                        </p>
                                        <ul className="list-wrap mb-4">
                                            <li>Vinyl siding in numerous styles and colors</li>
                                            <li>James Hardie fiber cement siding</li>
                                            <li>Wood and composite options</li>
                                            <li>Complete exterior renovations</li>
                                            <li>Energy-saving insulated siding</li>
                                        </ul>
                                        
                                        <h3 className="mb-3">Dumpster Rental</h3>
                                        <p className="mb-4">
                                            Planning a renovation or cleanout in Kennedy Township? Our convenient dumpster service includes:
                                        </p>
                                        <ul className="list-wrap mb-4">
                                            <li>Multiple sizes: 10, 15, and 20-yard options</li>
                                            <li>Driveway-friendly delivery</li>
                                            <li>Flexible rental terms</li>
                                            <li>Prompt pickup when you're done</li>
                                            <li>Competitive neighborhood pricing</li>
                                        </ul>

                                        <h2 className="title-two mb-3">Kennedy Township Areas We Serve</h2>
                                        <p className="mb-4">
                                            We provide comprehensive services throughout Kennedy Township, including:
                                        </p>
                                        <ul className="list-wrap mb-4">
                                            <li>McKees Rocks Road corridor</li>
                                            <li>Kenmawr Avenue area</li>
                                            <li>Chartiers Creek neighborhoods</li>
                                            <li>Pine Hollow Park vicinity</li>
                                            <li>Fairhaven area</li>
                                            <li>All Kennedy Township neighborhoods</li>
                                        </ul>

                                        <div className="project-details-wrap mt-5">
                                            <div className="project-details-info">
                                                <ul className="list-wrap">
                                                    <li><span>Service Area:</span>All of Kennedy Township</li>
                                                    <li><span>Base Location:</span>Adjacent Robinson Township</li>
                                                    <li><span>Response Time:</span>Usually within hours</li>
                                                    <li><span>Specialty:</span>Residential & light commercial</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-xl-4">
                                <aside className="services-sidebar">
                                    <div className="services-widget">
                                        <h4 className="sw-title">Our Kennedy Township Services</h4>
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
                                        <h4 className="sw-title">Get a Free Kennedy Township Quote</h4>
                                        <div className="services-widget-contact">
                                            <p>Ready to start your Kennedy Township home improvement project?</p>
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
                                                <li><Link href="/service-areas/moon-township">Moon Township<i className="fas fa-angle-double-right" /></Link></li>
                                                <li><Link href="/service-areas/coraopolis">Coraopolis<i className="fas fa-angle-double-right" /></Link></li>
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
                <FaqSection category={'kennedy-township'}/>
                <Brand3 />
            </Layout>
        </>
    )
}