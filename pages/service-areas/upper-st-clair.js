import Layout from "@/components/layout/Layout"
import PageHead from "@/components/layout/PageHead"
import LocalBusinessSchema from "@/components/LocalBusinessSchema"
import Link from "next/link"
import Brand3 from "@/components/sections/Brand3"
import FaqSection from "@/components/sections/FaqSection"
import FaqSchema from "@/components/FaqSchema"

export default function UpperStClair() {
    const locationSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://kletzcontracting.com/service-areas/upper-st-clair#location",
        "parentOrganization": {
            "@id": "https://kletzcontracting.com#organization"
        },
        "name": "Kletz Contracting - Upper St. Clair",
        "description": "Professional roofing, siding, and dumpster rental services in Upper St. Clair, PA. Premier contractor serving this exclusive South Hills community.",
        "areaServed": {
            "@type": "City",
            "name": "Upper St. Clair",
            "containedInPlace": {
                "@type": "State",
                "name": "Pennsylvania"
            }
        }
    }

    return (
        <>
            <PageHead 
                headTitle="Upper St. Clair Roofing & Siding Contractor | Kletz Contracting"
                metaDescription="Premier roofing, siding installation, and dumpster rental services in Upper St. Clair, PA. Elite contractor serving this exclusive South Hills community. Luxury home specialists. Free estimates for Upper St. Clair properties."
                canonicalUrl="https://kletzcontracting.com/service-areas/upper-st-clair"
                keywords="Upper St. Clair roofing contractor, Upper St. Clair siding installation, Upper St. Clair dumpster rental, luxury roofing Upper St. Clair PA, premium home improvement Upper St. Clair"
                structuredData={locationSchema}
            />
            <LocalBusinessSchema />
            <FaqSchema category={"upper-st-clair"}/>
            <Layout breadcrumbTitle="Upper St. Clair Service Area">
                <section className="services-details-area pt-120 pb-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8">
                                <div className="services-details-wrap">
                                    {/* <div className="services-details-thumb mb-4">
                                        <img src="/assets/img/areas/upper-st-clair-hero.jpg" alt="Upper St. Clair PA Roofing and Siding Services" />
                                    </div> */}
                                    
                                    <div className="services-details-content">
                                        <h1 className="title mb-4">Upper St. Clair's Elite Roofing & Home Improvement Contractor</h1>
                                        
                                        <p className="mb-4">
                                            Kletz Contracting is privileged to serve Upper St. Clair, one of Pennsylvania's most exclusive 
                                            and affluent communities. For decades, we've been the preferred contractor for discerning Upper 
                                            St. Clair homeowners who demand nothing less than perfection in both materials and craftsmanship. 
                                            From the grand estates along Cochran Road to the elegant homes throughout this prestigious South 
                                            Hills township, we understand that Upper St. Clair properties require the highest caliber of 
                                            service and the finest quality materials available.
                                        </p>

                                        <h2 className="title-two mb-3">Why Upper St. Clair Homeowners Choose Kletz Contracting</h2>
                                        
                                        <div className="services-process-wrap mb-5">
                                            <ul className="list-wrap">
                                                <li>
                                                    <div className="services-process-item">
                                                        <div className="icon">
                                                            <img src="/assets/img/icon/flat_check.svg" alt="" />
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="title">Luxury Home Specialists</h4>
                                                            <p>Unparalleled expertise with Upper St. Clair's luxury homes and custom architectural masterpieces</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="services-process-item">
                                                        <div className="icon">
                                                            <img src="/assets/img/icon/flat_check.svg" alt="" />
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="title">Premium Materials Access</h4>
                                                            <p>Exclusive access to the finest roofing and siding materials that meet Upper St. Clair's exacting standards</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="services-process-item">
                                                        <div className="icon">
                                                            <img src="/assets/img/icon/flat_check.svg" alt="" />
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="title">Elite Service Standards</h4>
                                                            <p>White-glove service approach that respects the privacy and prestige of Upper St. Clair's exclusive community</p>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>

                                        <h2 className="title-two mb-3">Our Premium Services in Upper St. Clair</h2>
                                        
                                        <h3 className="mb-3">Luxury Roofing Systems</h3>
                                        <p className="mb-4">
                                            Upper St. Clair's magnificent homes deserve roofing systems that combine uncompromising protection 
                                            with architectural elegance. Our elite roofing services include:
                                        </p>
                                        <ul className="list-wrap mb-4">
                                            <li>Premium slate and clay tile installations</li>
                                            <li>Designer architectural shingles in exclusive collections</li>
                                            <li>Custom copper and metal roofing systems</li>
                                            <li>Hand-crafted architectural details and trim work</li>
                                            <li>Comprehensive storm damage restoration services</li>
                                        </ul>
                                        
                                        <h3 className="mb-3">Elite Siding Installation</h3>
                                        <p className="mb-4">
                                            Transform your Upper St. Clair estate with the finest siding materials and craftsmanship:
                                        </p>
                                        <ul className="list-wrap mb-4">
                                            <li>James Hardie Artisan Collection fiber cement</li>
                                            <li>Premium cedar and hardwood siding systems</li>
                                            <li>Natural stone and brick veneer installations</li>
                                            <li>Custom millwork and architectural details</li>
                                            <li>Complete estate exterior renovations</li>
                                        </ul>
                                        
                                        <h3 className="mb-3">Discreet Dumpster Services</h3>
                                        <p className="mb-4">
                                            For your Upper St. Clair renovation and construction projects, our premium dumpster service 
                                            provides professional waste management with utmost discretion:
                                        </p>
                                        <ul className="list-wrap mb-4">
                                            <li>Premium roll-off containers in multiple sizes</li>
                                            <li>Discreet placement preserving neighborhood aesthetics</li>
                                            <li>Flexible scheduling for luxury project timelines</li>
                                            <li>Immaculate equipment worthy of elite properties</li>
                                            <li>Concierge-level service and communication</li>
                                        </ul>

                                        <h2 className="title-two mb-3">Upper St. Clair Areas We Serve</h2>
                                        <p className="mb-4">
                                            We provide elite services throughout all of Upper St. Clair, including:
                                        </p>
                                        <ul className="list-wrap mb-4">
                                            <li>Cochran Road estate district</li>
                                            <li>Rolling Fields luxury community</li>
                                            <li>Boyce Park area neighborhoods</li>
                                            <li>McLaughlin Run Road properties</li>
                                            <li>Country Club of Pittsburgh vicinity</li>
                                            <li>All Upper St. Clair residential estates</li>
                                        </ul>

                                        <div className="project-details-wrap mt-5">
                                            <div className="project-details-info">
                                                <ul className="list-wrap">
                                                    <li><span>Service Area:</span>All of Upper St. Clair Township</li>
                                                    <li><span>Specialty:</span>Luxury estates and custom homes</li>
                                                    <li><span>Standards:</span>Elite materials and craftsmanship</li>
                                                    <li><span>Approach:</span>Concierge-level service</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-xl-4">
                                <aside className="services-sidebar">
                                    <div className="services-widget">
                                        <h4 className="sw-title">Our Upper St. Clair Services</h4>
                                        <div className="services-cat-list">
                                            <ul className="list-wrap">
                                                <li><Link href="/services/roofing">Luxury Roofing<i className="fas fa-angle-double-right" /></Link></li>
                                                <li><Link href="/services/siding">Elite Siding<i className="fas fa-angle-double-right" /></Link></li>
                                                <li><Link href="/services/dumpster-service">Premium Dumpster Service<i className="fas fa-angle-double-right" /></Link></li>
                                                <li><Link href="/services/remodeling">Luxury Remodeling<i className="fas fa-angle-double-right" /></Link></li>
                                                <li><Link href="/services/deck-construction">Custom Outdoor Living<i className="fas fa-angle-double-right" /></Link></li>
                                                <li><Link href="/services/home-additions">Estate Additions<i className="fas fa-angle-double-right" /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                    <div className="services-widget">
                                        <h4 className="sw-title">Schedule Your Upper St. Clair Consultation</h4>
                                        <div className="services-widget-contact">
                                            <p>Ready to enhance your Upper St. Clair estate? Contact us for a private consultation.</p>
                                            <Link href="tel:412-219-7279" className="btn btn-primary w-100 mb-3">
                                                <i className="fas fa-phone-alt mr-2"></i> Call (412) 219-7279
                                            </Link>
                                            <Link href="/contact" className="btn btn-outline-primary w-100">
                                                Request Private Consultation
                                            </Link>
                                        </div>
                                    </div>
                                    
                                    <div className="services-widget">
                                        <h4 className="sw-title">Nearby Elite Communities</h4>
                                        <div className="services-cat-list">
                                            <ul className="list-wrap">
                                                <li><Link href="/service-areas/mt-lebanon">Mt. Lebanon<i className="fas fa-angle-double-right" /></Link></li>
                                                <li><Link href="/service-areas/peters-township">Peters Township<i className="fas fa-angle-double-right" /></Link></li>
                                                <li><Link href="/service-areas/wexford">Wexford<i className="fas fa-angle-double-right" /></Link></li>
                                                <li><Link href="/service-areas/cranberry-township">Cranberry Township<i className="fas fa-angle-double-right" /></Link></li>
                                                <li><Link href="/service-areas">View All Premium Areas<i className="fas fa-angle-double-right" /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </section>
                
       
                <FaqSection category={'upper-st-clair'}/>
                <Brand3 />
            </Layout>
        </>
    )
}