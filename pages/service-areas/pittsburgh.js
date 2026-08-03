import Layout from "@/components/layout/Layout"
import PageHead from "@/components/layout/PageHead"
import LocalBusinessSchema from "@/components/LocalBusinessSchema"
import Link from "next/link"
import Counter3 from "@/components/sections/Counter3"
import Brand3 from "@/components/sections/Brand3"
import FaqSection from "@/components/sections/FaqSection"
import FaqSchema from "@/components/FaqSchema"

export default function Pittsburgh() {
    const locationSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://kletzcontracting.com/service-areas/pittsburgh#location",
        "parentOrganization": {
            "@id": "https://kletzcontracting.com#organization"
        },
        "name": "Kletz Contracting - Pittsburgh",
        "description": "Professional roofing, siding, and dumpster rental services throughout Pittsburgh, PA. Trusted contractor serving the Steel City since 1985.",
        "areaServed": {
            "@type": "City",
            "name": "Pittsburgh",
            "containedInPlace": {
                "@type": "State",
                "name": "Pennsylvania"
            }
        }
    }

    return (
        <>
            <PageHead 
                headTitle="Pittsburgh Roofing Contractor | Siding & Dumpster Services | Kletz Contracting"
                metaDescription="Expert roofing, siding installation, and dumpster rental services in Pittsburgh, PA. Family-owned contractor serving all Pittsburgh neighborhoods with quality craftsmanship and competitive pricing. Free estimates."
                canonicalUrl="https://kletzcontracting.com/service-areas/pittsburgh"
                keywords="Pittsburgh roofing contractor, Pittsburgh siding installation, Pittsburgh dumpster rental, roof repair Pittsburgh PA, vinyl siding Pittsburgh, home improvement contractor Pittsburgh"
                structuredData={locationSchema}
            />
            <LocalBusinessSchema />
            <FaqSchema category={"pittsburgh"}/>
            <Layout breadcrumbTitle="Pittsburgh Service Area">
                <section className="services-details-area pt-120 pb-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8">
                                <div className="services-details-wrap">
                                    {/* <div className="services-details-thumb mb-4">
                                        <img src="/assets/img/banner/Pittsburgh.png" alt="Pittsburgh PA Roofing and Siding Services" />
                                    </div> */}
                                    
                                    <div className="services-details-content">
                                        <h1 className="title mb-4">Pittsburgh's Premier Roofing & Home Improvement Contractor</h1>
                                        
                                        <p className="mb-4">
                                            For nearly 40 years, Kletz Contracting has been Pittsburgh's go-to contractor for quality roofing, siding, 
                                            and home improvement services. From the North Hills to the South Hills, from the East End to the West End, 
                                            we've built our reputation on exceptional craftsmanship and honest, reliable service throughout the Steel City.
                                        </p>

                                        <h2 className="title-two mb-3">Serving All Pittsburgh Neighborhoods</h2>
                                        
                                        <div className="row mb-4">
                                            <div className="col-md-6">
                                                <h4>North Pittsburgh</h4>
                                                <ul className="list-wrap">
                                                    <li>North Shore</li>
                                                    <li>North Hills</li>
                                                    <li>Ross Township</li>
                                                    <li>McCandless</li>
                                                    <li>Shaler</li>
                                                    <li>Hampton</li>
                                                </ul>
                                            </div>
                                            <div className="col-md-6">
                                                <h4>South Pittsburgh</h4>
                                                <ul className="list-wrap">
                                                    <li>South Side</li>
                                                    <li>South Hills</li>
                                                    <li>Mt. Lebanon</li>
                                                    <li>Upper St. Clair</li>
                                                    <li>Bethel Park</li>
                                                    <li>Castle Shannon</li>
                                                </ul>
                                            </div>
                                        </div>
                                        
                                        <div className="row mb-5">
                                            <div className="col-md-6">
                                                <h4>East Pittsburgh</h4>
                                                <ul className="list-wrap">
                                                    <li>Squirrel Hill</li>
                                                    <li>Shadyside</li>
                                                    <li>Oakland</li>
                                                    <li>East Liberty</li>
                                                    <li>Highland Park</li>
                                                    <li>Point Breeze</li>
                                                </ul>
                                            </div>
                                            <div className="col-md-6">
                                                <h4>West Pittsburgh</h4>
                                                <ul className="list-wrap">
                                                    <li>West End</li>
                                                    <li>Crafton</li>
                                                    <li>Green Tree</li>
                                                    <li>Carnegie</li>
                                                    <li>Ingram</li>
                                                    <li>McKees Rocks</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <h2 className="title-two mb-3">Our Pittsburgh Services</h2>
                                        
                                        <h3 className="mb-3">Roofing Services for Pittsburgh Homes</h3>
                                        <p className="mb-4">
                                            Pittsburgh's weather can be tough on roofs. From heavy snow loads to summer thunderstorms, your roof 
                                            needs to stand up to it all. We specialize in:
                                        </p>
                                        <ul className="list-wrap mb-4">
                                            <li>Complete roof replacements with quality shingles</li>
                                            <li>Emergency storm damage repairs</li>
                                            <li>Roof inspections and preventive maintenance</li>
                                            <li>Gutter installation and repair</li>
                                            <li>Commercial roofing solutions</li>
                                        </ul>
                                        
                                        <h3 className="mb-3">Siding Installation Throughout Pittsburgh</h3>
                                        <p className="mb-4">
                                            Transform your Pittsburgh home's appearance and protection with new siding. We offer:
                                        </p>
                                        <ul className="list-wrap mb-4">
                                            <li>Vinyl siding in various colors and styles</li>
                                            <li>Fiber cement siding for durability</li>
                                            <li>Wood siding restoration and replacement</li>
                                            <li>Complete exterior transformations</li>
                                            <li>Energy-efficient insulated siding options</li>
                                        </ul>
                                        
                                        <h3 className="mb-3">Dumpster Rental for Pittsburgh Projects</h3>
                                        <p className="mb-4">
                                            Whether you're renovating a home in Squirrel Hill or cleaning out a property in the North Hills, 
                                            our dumpster rental service makes debris removal simple:
                                        </p>
                                        <ul className="list-wrap mb-4">
                                            <li>10, 15, and 20-yard dumpsters available</li>
                                            <li>Same-day or next-day delivery</li>
                                            <li>Flexible rental periods</li>
                                            <li>Competitive Pittsburgh-area pricing</li>
                                            <li>Professional, courteous service</li>
                                        </ul>

                                        <h2 className="title-two mb-3">Why Pittsburgh Chooses Kletz Contracting</h2>
                                        
                                        <div className="services-process-wrap mb-5">
                                            <ul className="list-wrap">
                                                <li>
                                                    <div className="services-process-item">
                                                        <div className="icon">
                                                            <img src="/assets/img/icon/flat_check.svg" alt="" />
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="title">Local Knowledge</h4>
                                                            <p>We understand Pittsburgh's unique architecture, building codes, and weather challenges</p>
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
                                                            <p>Thousands of satisfied customers across Pittsburgh over nearly 40 years</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="services-process-item">
                                                        <div className="icon">
                                                            <img src="/assets/img/icon/flat_check.svg" alt="" />
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="title">Fair Pricing</h4>
                                                            <p>Competitive rates with no hidden fees - honest Pittsburgh values</p>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="project-details-wrap mt-5">
                                            <div className="project-details-info">
                                                <ul className="list-wrap">
                                                    <li><span>Coverage:</span>All Pittsburgh neighborhoods</li>
                                                    <li><span>Emergency Service:</span>24/7 storm damage response</li>
                                                    <li><span>Free Estimates:</span>No-obligation quotes</li>
                                                    <li><span>Warranty:</span>Industry-leading guarantees</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-xl-4">
                                <aside className="services-sidebar">
                                    <div className="services-widget">
                                        <h4 className="sw-title">Our Pittsburgh Services</h4>
                                        <div className="services-cat-list">
                                            <ul className="list-wrap">
                                                <li><Link href="/services/roofing">Roofing Services<i className="fas fa-angle-double-right" /></Link></li>
                                                <li><Link href="/services/siding">Siding Installation<i className="fas fa-angle-double-right" /></Link></li>
                                                <li><Link href="/services/dumpster-service">Dumpster Rental<i className="fas fa-angle-double-right" /></Link></li>
                                                <li><Link href="/services/remodeling">Kitchen & Bath<i className="fas fa-angle-double-right" /></Link></li>
                                                <li><Link href="/services/deck-construction">Deck Building<i className="fas fa-angle-double-right" /></Link></li>
                                                <li><Link href="/services/commercial-remodeling">Commercial Services<i className="fas fa-angle-double-right" /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                    <div className="services-widget">
                                        <h4 className="sw-title">Get Your Free Pittsburgh Quote</h4>
                                        <div className="services-widget-contact">
                                            <p>Ready to improve your Pittsburgh property? Contact us today!</p>
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
                                                <li><Link href="/service-areas/coraopolis">Coraopolis<i className="fas fa-angle-double-right" /></Link></li>
                                                <li><Link href="/service-areas/cranberry-township">Cranberry Township<i className="fas fa-angle-double-right" /></Link></li>
                                                <li><Link href="/service-areas">View All Service Areas<i className="fas fa-angle-double-right" /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </section>
                
                <Counter3 />
                <FaqSection category={'pittsburgh'}/>
                <Brand3 />
            </Layout>
        </>
    )
}