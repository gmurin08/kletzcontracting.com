import Layout from "@/components/layout/Layout"
import PageHead from "@/components/layout/PageHead"
import LocalBusinessSchema from "@/components/LocalBusinessSchema"
import Link from "next/link"
import Counter2 from "@/components/sections/Counter3"
import Brand3 from "@/components/sections/Brand3"
import FaqSection from "@/components/sections/FaqSection"
import FaqSchema from "@/components/FaqSchema"

export default function RobinsonTownship() {
    const locationSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://kletzcontracting.com/service-areas/robinson-township#location",
        "parentOrganization": {
            "@id": "https://kletzcontracting.com#organization"
        },
        "name": "Kletz Contracting - Robinson Township",
        "description": "Professional roofing, siding, and dumpster rental services in Robinson Township, PA. Local contractor serving your neighborhood since 1985.",
        "areaServed": {
            "@type": "City",
            "name": "Robinson Township",
            "containedInPlace": {
                "@type": "State",
                "name": "Pennsylvania"
            }
        }
    }

    return (
        <>
            <PageHead 
                headTitle="Robinson Township Roofing & Siding Contractor | Kletz Contracting"
                metaDescription="Local roofing, siding, and dumpster rental services in Robinson Township, PA. Family-owned contractor serving your neighborhood with quality craftsmanship since 1985. Free estimates for Robinson Township residents."
                canonicalUrl="https://kletzcontracting.com/service-areas/robinson-township"
                keywords="Robinson Township roofing contractor, Robinson Township siding installation, Robinson Township dumpster rental, roofing repair Robinson Township PA, home improvement Robinson Township"
                structuredData={locationSchema}
            />
            <LocalBusinessSchema />
            <FaqSchema category={"robinson-township"}/>
            <Layout breadcrumbTitle="Robinson Township Service Area">
                <section className="services-details-area pt-120 pb-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8">
                                <div className="services-details-wrap">
                                    <div className="services-details-thumb mb-4">
                                        <img src="/assets/img/areas/robinson-township-hero.jpg" alt="Robinson Township PA Roofing and Siding Services" />
                                    </div>
                                    
                                    <div className="services-details-content">
                                        <h1 className="title mb-4">Robinson Township's Trusted Roofing & Home Improvement Contractor</h1>
                                        
                                        <p className="mb-4">
                                            Located right here in Robinson Township, Kletz Contracting has been serving our local community for nearly four decades. 
                                            We understand the unique challenges that Robinson Township homes face, from harsh winters to summer storms, and we're 
                                            committed to providing durable, high-quality solutions that protect your investment.
                                        </p>

                                        <h2 className="title-two mb-3">Why Robinson Township Residents Choose Kletz Contracting</h2>
                                        
                                        <div className="services-process-wrap mb-5">
                                            <ul className="list-wrap">
                                                <li>
                                                    <div className="services-process-item">
                                                        <div className="icon">
                                                            <img src="/assets/img/icon/flat_check.svg" alt="" />
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="title">Local Expertise</h4>
                                                            <p>Based in Robinson Township, we know the local building codes, weather patterns, and community needs</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="services-process-item">
                                                        <div className="icon">
                                                            <img src="/assets/img/icon/flat_check.svg" alt="" />
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="title">Quick Response Times</h4>
                                                            <p>Being local means we can respond quickly to emergency repairs and provide faster service</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="services-process-item">
                                                        <div className="icon">
                                                            <img src="/assets/img/icon/flat_check.svg" alt="" />
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="title">Community Reputation</h4>
                                                            <p>Ask your Robinson Township neighbors - we've built our reputation on quality work and fair pricing</p>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>

                                        <h2 className="title-two mb-3">Our Services in Robinson Township</h2>
                                        
                                        <h3 className="mb-3">Roofing Services</h3>
                                        <p className="mb-4">
                                            Robinson Township homes need roofs that can withstand Pennsylvania's diverse weather. Whether you need 
                                            emergency storm damage repair, a complete roof replacement, or regular maintenance, our experienced team 
                                            delivers quality roofing solutions designed to last.
                                        </p>
                                        
                                        <h3 className="mb-3">Siding Installation</h3>
                                        <p className="mb-4">
                                            Protect and beautify your Robinson Township home with professional siding installation. We offer vinyl, 
                                            fiber cement, and wood siding options that enhance curb appeal while providing excellent protection 
                                            against the elements.
                                        </p>
                                        
                                        <h3 className="mb-3">Dumpster Rental</h3>
                                        <p className="mb-4">
                                            Planning a home renovation or cleanout project in Robinson Township? Our convenient dumpster rental 
                                            service makes debris removal easy. We offer 10-20 yard dumpsters with flexible rental periods and 
                                            prompt delivery and pickup.
                                        </p>

                                        <h2 className="title-two mb-3">Areas We Serve in Robinson Township</h2>
                                        <p className="mb-4">
                                            We provide comprehensive services throughout all of Robinson Township, including:
                                        </p>
                                        <ul className="list-wrap mb-4">
                                            <li>Montour Heights</li>
                                            <li>Coraopolis Heights</li>
                                            <li>Moon Run</li>
                                            <li>Steubenville Pike corridor</li>
                                            <li>Robinson Town Centre area</li>
                                            <li>All residential neighborhoods</li>
                                        </ul>

                                        <div className="project-details-wrap mt-5">
                                            <div className="project-details-info">
                                                <ul className="list-wrap">
                                                    <li><span>Service Area:</span>All of Robinson Township</li>
                                                    <li><span>Response Time:</span>Same-day emergency service</li>
                                                    <li><span>Free Estimates:</span>Always complimentary</li>
                                                    <li><span>License & Insurance:</span>Fully covered</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-xl-4">
                                <aside className="services-sidebar">
                                    <div className="services-widget">
                                        <h4 className="sw-title">Our Robinson Township Services</h4>
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
                                        <h4 className="sw-title">Get a Free Quote</h4>
                                        <div className="services-widget-contact">
                                            <p>Ready to start your Robinson Township home improvement project?</p>
                                            <Link href="tel:412-200-2475" className="btn btn-primary w-100 mb-3">
                                                <i className="fas fa-phone-alt mr-2"></i> Call (412) 200-2475
                                            </Link>
                                            <Link href="/contact" className="btn btn-outline-primary w-100">
                                                Request Free Estimate
                                            </Link>
                                        </div>
                                    </div>
                                    
                                    <div className="services-widget">
                                        <h4 className="sw-title">Service Areas Near Robinson Township</h4>
                                        <div className="services-cat-list">
                                            <ul className="list-wrap">
                                                <li><Link href="/service-areas/pittsburgh">Pittsburgh<i className="fas fa-angle-double-right" /></Link></li>
                                                <li><Link href="/service-areas/moon-township">Moon Township<i className="fas fa-angle-double-right" /></Link></li>
                                                <li><Link href="/service-areas/coraopolis">Coraopolis<i className="fas fa-angle-double-right" /></Link></li>
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
                
                <Counter3 />
                <FaqSection category={'robinson-township'}/>
                <Brand3 />
            </Layout>
        </>
    )
}