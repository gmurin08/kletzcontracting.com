import Layout from "@/components/layout/Layout"
import PageHead from "@/components/layout/PageHead"
import LocalBusinessSchema from "@/components/LocalBusinessSchema"
import Link from "next/link"
import Brand3 from "@/components/sections/Brand3"
import FaqSection from "@/components/sections/FaqSection"
import FaqSchema from "@/components/FaqSchema"

export default function MtLebanon() {
    const locationSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://kletzcontracting.com/service-areas/mt-lebanon#location",
        "parentOrganization": {
            "@id": "https://kletzcontracting.com#organization"
        },
        "name": "Kletz Contracting - Mt. Lebanon",
        "description": "Professional roofing, siding, and dumpster rental services in Mt. Lebanon, PA. Trusted contractor serving this prestigious South Hills community.",
        "areaServed": {
            "@type": "City",
            "name": "Mt. Lebanon",
            "containedInPlace": {
                "@type": "State",
                "name": "Pennsylvania"
            }
        }
    }

    return (
        <>
            <PageHead 
                headTitle="Mt. Lebanon Roofing & Siding Contractor | Kletz Contracting"
                metaDescription="Expert roofing, siding installation, and dumpster rental services in Mt. Lebanon, PA. Trusted contractor serving this prestigious South Hills community with quality craftsmanship. Free estimates for Mt. Lebanon homes."
                canonicalUrl="https://kletzcontracting.com/service-areas/mt-lebanon"
                keywords="Mt. Lebanon roofing contractor, Mt. Lebanon siding installation, Mt. Lebanon dumpster rental, roofing repair Mt. Lebanon PA, home improvement Mt. Lebanon South Hills"
                structuredData={locationSchema}
            />
            <LocalBusinessSchema />
            <FaqSchema category={"mt-lebanon"}/>
            <Layout breadcrumbTitle="Mt. Lebanon Service Area">
                <section className="services-details-area pt-120 pb-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8">
                                <div className="services-details-wrap">
                                    {/* <div className="services-details-thumb mb-4">
                                        <img src="/assets/img/areas/mt-lebanon-hero.jpg" alt="Mt. Lebanon PA Roofing and Siding Services" />
                                    </div> */}
                                    
                                    <div className="services-details-content">
                                        <h1 className="title mb-4">Mt. Lebanon's Premier Roofing & Home Improvement Contractor</h1>
                                        
                                        <p className="mb-4">
                                            Kletz Contracting is proud to serve Mt. Lebanon, one of Pennsylvania's most prestigious and 
                                            well-planned communities. For decades, we've been the trusted choice for discerning Mt. Lebanon 
                                            homeowners who value quality craftsmanship and professional service. From the tree-lined streets 
                                            of historic neighborhoods to the modern developments throughout this distinguished South Hills 
                                            community, we understand that Mt. Lebanon homes deserve the finest in roofing and exterior services.
                                        </p>

                                        <h2 className="title-two mb-3">Why Mt. Lebanon Homeowners Trust Kletz Contracting</h2>
                                        
                                        <div className="services-process-wrap mb-5">
                                            <ul className="list-wrap">
                                                <li>
                                                    <div className="services-process-item">
                                                        <div className="icon">
                                                            <img src="/assets/img/icon/flat_check.svg" alt="" />
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="title">Prestigious Community Expertise</h4>
                                                            <p>Deep understanding of Mt. Lebanon's high standards and the quality expectations of this award-winning community</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="services-process-item">
                                                        <div className="icon">
                                                            <img src="/assets/img/icon/flat_check.svg" alt="" />
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="title">Architectural Sensitivity</h4>
                                                            <p>Experience with Mt. Lebanon's diverse architectural styles, from Tudor and Colonial to contemporary designs</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="services-process-item">
                                                        <div className="icon">
                                                            <img src="/assets/img/icon/flat_check.svg" alt="" />
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="title">Municipal Knowledge</h4>
                                                            <p>Familiarity with Mt. Lebanon's building codes, permit processes, and municipal requirements</p>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>

                                        <h2 className="title-two mb-3">Our Services in Mt. Lebanon</h2>
                                        
                                        <h3 className="mb-3">Premium Roofing Services</h3>
                                        <p className="mb-4">
                                            Mt. Lebanon's beautiful homes deserve roofing that combines superior protection with aesthetic 
                                            excellence. Our comprehensive roofing services include:
                                        </p>
                                        <ul className="list-wrap mb-4">
                                            <li>Architectural shingle installations that complement home styles</li>
                                            <li>Premium slate and tile roofing for historic properties</li>
                                            <li>Storm damage assessment and insurance claim assistance</li>
                                            <li>Preventive maintenance programs for long-term protection</li>
                                            <li>Custom copper work and high-end trim details</li>
                                        </ul>
                                        
                                        <h3 className="mb-3">High-Quality Siding Installation</h3>
                                        <p className="mb-4">
                                            Enhance your Mt. Lebanon home's beauty and value with professional siding installation:
                                        </p>
                                        <ul className="list-wrap mb-4">
                                            <li>Premium vinyl siding in designer colors and styles</li>
                                            <li>James Hardie fiber cement for superior durability</li>
                                            <li>Cedar and wood siding for traditional character</li>
                                            <li>Insulated siding systems for energy efficiency</li>
                                            <li>Complete exterior renovations and restorations</li>
                                        </ul>
                                        
                                        <h3 className="mb-3">Professional Dumpster Rental</h3>
                                        <p className="mb-4">
                                            For your Mt. Lebanon renovation projects, our dumpster rental service provides clean, 
                                            professional waste management:
                                        </p>
                                        <ul className="list-wrap mb-4">
                                            <li>Multiple sizes: 10, 15, and 20-yard containers</li>
                                            <li>Respectful placement in prestigious neighborhoods</li>
                                            <li>Flexible scheduling for any project timeline</li>
                                            <li>Clean, well-maintained equipment</li>
                                            <li>Professional service worthy of Mt. Lebanon standards</li>
                                        </ul>

                                        <h2 className="title-two mb-3">Mt. Lebanon Areas We Serve</h2>
                                        <p className="mb-4">
                                            We proudly serve all neighborhoods throughout Mt. Lebanon, including:
                                        </p>
                                        <ul className="list-wrap mb-4">
                                            <li>Virginia Manor and historic districts</li>
                                            <li>Hoodridge and Bird Park areas</li>
                                            <li>Sunset Hills neighborhoods</li>
                                            <li>Castle Shannon Boulevard corridor</li>
                                            <li>Cedar Boulevard and surrounding streets</li>
                                            <li>All Mt. Lebanon residential communities</li>
                                        </ul>

                                        <div className="project-details-wrap mt-5">
                                            <div className="project-details-info">
                                                <ul className="list-wrap">
                                                    <li><span>Service Area:</span>All of Mt. Lebanon</li>
                                                    <li><span>Specialty:</span>Prestigious South Hills community</li>
                                                    <li><span>Standards:</span>Premium materials and craftsmanship</li>
                                                    <li><span>Experience:</span>Decades serving award-winning community</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-xl-4">
                                <aside className="services-sidebar">
                                    <div className="services-widget">
                                        <h4 className="sw-title">Our Mt. Lebanon Services</h4>
                                        <div className="services-cat-list">
                                            <ul className="list-wrap">
                                                <li><Link href="/services/roofing">Premium Roofing<i className="fas fa-angle-double-right" /></Link></li>
                                                <li><Link href="/services/siding">Quality Siding<i className="fas fa-angle-double-right" /></Link></li>
                                                <li><Link href="/services/dumpster-service">Dumpster Rental<i className="fas fa-angle-double-right" /></Link></li>
                                                <li><Link href="/services/remodeling">Kitchen & Bath<i className="fas fa-angle-double-right" /></Link></li>
                                                <li><Link href="/services/deck-construction">Deck Building<i className="fas fa-angle-double-right" /></Link></li>
                                                <li><Link href="/services/home-additions">Home Additions<i className="fas fa-angle-double-right" /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                    <div className="services-widget">
                                        <h4 className="sw-title">Get Your Free Mt. Lebanon Quote</h4>
                                        <div className="services-widget-contact">
                                            <p>Ready to enhance your Mt. Lebanon home? Contact us today!</p>
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
                                                <li><Link href="/service-areas/upper-st-clair">Upper St. Clair<i className="fas fa-angle-double-right" /></Link></li>
                                                <li><Link href="/service-areas/peters-township">Peters Township<i className="fas fa-angle-double-right" /></Link></li>
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
                
            
                <FaqSection category={'mt-lebanon'}/>
                <Brand3 />
            </Layout>
        </>
    )
}