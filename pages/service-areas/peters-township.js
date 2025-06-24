import Layout from "@/components/layout/Layout"
import PageHead from "@/components/layout/PageHead"
import LocalBusinessSchema from "@/components/LocalBusinessSchema"
import Link from "next/link"
import Counter3 from "@/components/sections/Counter3"
import Brand3 from "@/components/sections/Brand3"
import FaqSection from "@/components/sections/FaqSection"
import FaqSchema from "@/components/FaqSchema"

export default function PetersTownship() {
    const locationSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://kletzcontracting.com/service-areas/peters-township#location",
        "parentOrganization": {
            "@id": "https://kletzcontracting.com#organization"
        },
        "name": "Kletz Contracting - Peters Township",
        "description": "Professional roofing, siding, and dumpster rental services in Peters Township, PA. Trusted contractor serving this premier Washington County community.",
        "areaServed": {
            "@type": "City",
            "name": "Peters Township",
            "containedInPlace": {
                "@type": "State",
                "name": "Pennsylvania"
            }
        }
    }

    return (
        <>
            <PageHead 
                headTitle="Peters Township Roofing & Siding Contractor | Kletz Contracting"
                metaDescription="Expert roofing, siding installation, and dumpster rental services in Peters Township, PA. Trusted contractor serving this premier Washington County community. Quality workmanship for luxury homes. Free estimates."
                canonicalUrl="https://kletzcontracting.com/service-areas/peters-township"
                keywords="Peters Township roofing contractor, Peters Township siding installation, Peters Township dumpster rental, roofing repair Peters Township PA, home improvement Peters Township Washington County"
                structuredData={locationSchema}
            />
            <LocalBusinessSchema />
            <FaqSchema category={"peters-township"}/>
            <Layout breadcrumbTitle="Peters Township Service Area">
                <section className="services-details-area pt-120 pb-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8">
                                <div className="services-details-wrap">
                                    <div className="services-details-thumb mb-4">
                                        <img src="/assets/img/areas/peters-township-hero.jpg" alt="Peters Township PA Roofing and Siding Services" />
                                    </div>
                                    
                                    <div className="services-details-content">
                                        <h1 className="title mb-4">Peters Township's Trusted Roofing & Home Improvement Contractor</h1>
                                        
                                        <p className="mb-4">
                                            Kletz Contracting is honored to serve Peters Township, one of Washington County's most desirable 
                                            communities and consistently ranked among Pennsylvania's best places to live. For decades, we've 
                                            been the contractor of choice for Peters Township homeowners who demand excellence in both materials 
                                            and craftsmanship. From the prestigious neighborhoods of Rolling Hills to the family-friendly 
                                            communities throughout this award-winning township, we understand that Peters Township residents 
                                            expect superior quality and professional service.
                                        </p>

                                        <h2 className="title-two mb-3">Why Peters Township Homeowners Choose Kletz Contracting</h2>
                                        
                                        <div className="services-process-wrap mb-5">
                                            <ul className="list-wrap">
                                                <li>
                                                    <div className="services-process-item">
                                                        <div className="icon">
                                                            <img src="/assets/img/icon/flat_check.svg" alt="" />
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="title">Award-Winning Community Standards</h4>
                                                            <p>Quality workmanship that matches Peters Township's reputation as one of Pennsylvania's premier communities</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="services-process-item">
                                                        <div className="icon">
                                                            <img src="/assets/img/icon/flat_check.svg" alt="" />
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="title">Luxury Home Expertise</h4>
                                                            <p>Specialized experience with Peters Township's upscale homes and custom architectural designs</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="services-process-item">
                                                        <div className="icon">
                                                            <img src="/assets/img/icon/flat_check.svg" alt="" />
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="title">Washington County Knowledge</h4>
                                                            <p>Deep familiarity with Washington County building codes and Peters Township's specific requirements</p>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>

                                        <h2 className="title-two mb-3">Our Services in Peters Township</h2>
                                        
                                        <h3 className="mb-3">Premium Roofing Services</h3>
                                        <p className="mb-4">
                                            Peters Township's luxury homes deserve roofing systems that provide both superior protection 
                                            and aesthetic appeal. Our comprehensive roofing services include:
                                        </p>
                                        <ul className="list-wrap mb-4">
                                            <li>Architectural and designer shingle installations</li>
                                            <li>Premium slate, tile, and metal roofing systems</li>
                                            <li>Custom copper work and architectural details</li>
                                            <li>Storm damage restoration with insurance expertise</li>
                                            <li>Preventive maintenance for luxury home protection</li>
                                        </ul>
                                        
                                        <h3 className="mb-3">High-End Siding Installation</h3>
                                        <p className="mb-4">
                                            Transform your Peters Township home with premium siding that enhances both beauty and value:
                                        </p>
                                        <ul className="list-wrap mb-4">
                                            <li>James Hardie ColorPlus fiber cement siding</li>
                                            <li>Premium vinyl siding in designer collections</li>
                                            <li>Natural cedar and wood siding options</li>
                                            <li>Stone and brick veneer installations</li>
                                            <li>Complete exterior makeovers and restorations</li>
                                        </ul>
                                        
                                        <h3 className="mb-3">Professional Dumpster Rental</h3>
                                        <p className="mb-4">
                                            For your Peters Township renovation and construction projects, our dumpster rental service 
                                            provides clean, professional waste management:
                                        </p>
                                        <ul className="list-wrap mb-4">
                                            <li>10, 15, and 20-yard roll-off containers</li>
                                            <li>Discreet placement respecting community standards</li>
                                            <li>Flexible rental periods for any project scope</li>
                                            <li>Clean, well-maintained professional equipment</li>
                                            <li>Service standards worthy of Peters Township</li>
                                        </ul>

                                        <h2 className="title-two mb-3">Peters Township Areas We Serve</h2>
                                        <p className="mb-4">
                                            We provide premium services throughout all of Peters Township, including:
                                        </p>
                                        <ul className="list-wrap mb-4">
                                            <li>Rolling Hills luxury community</li>
                                            <li>McMurray area neighborhoods</li>
                                            <li>Venetia and surrounding developments</li>
                                            <li>Route 19 corridor communities</li>
                                            <li>Peters Creek and Chartiers Creek areas</li>
                                            <li>All Peters Township residential neighborhoods</li>
                                        </ul>

                                        <div className="project-details-wrap mt-5">
                                            <div className="project-details-info">
                                                <ul className="list-wrap">
                                                    <li><span>Service Area:</span>All of Peters Township</li>
                                                    <li><span>County:</span>Washington County specialist</li>
                                                    <li><span>Specialty:</span>Award-winning community standards</li>
                                                    <li><span>Focus:</span>Luxury and custom homes</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-xl-4">
                                <aside className="services-sidebar">
                                    <div className="services-widget">
                                        <h4 className="sw-title">Our Peters Township Services</h4>
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
                                        <h4 className="sw-title">Get Your Free Peters Township Quote</h4>
                                        <div className="services-widget-contact">
                                            <p>Ready to enhance your Peters Township home? Contact us today!</p>
                                            <Link href="tel:412-200-2475" className="btn btn-primary w-100 mb-3">
                                                <i className="fas fa-phone-alt mr-2"></i> Call (412) 200-2475
                                            </Link>
                                            <Link href="/contact" className="btn btn-outline-primary w-100">
                                                Request Free Estimate
                                            </Link>
                                        </div>
                                    </div>
                                    
                                    <div className="services-widget">
                                        <h4 className="sw-title">Nearby Washington County Areas</h4>
                                        <div className="services-cat-list">
                                            <ul className="list-wrap">
                                                <li><Link href="/service-areas/upper-st-clair">Upper St. Clair<i className="fas fa-angle-double-right" /></Link></li>
                                                <li><Link href="/service-areas/mt-lebanon">Mt. Lebanon<i className="fas fa-angle-double-right" /></Link></li>
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
                <FaqSection category={'peters-township'}/>
                <Brand3 />
            </Layout>
        </>
    )
}