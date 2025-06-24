import Layout from "@/components/layout/Layout"
import PageHead from "@/components/layout/PageHead"
import LocalBusinessSchema from "@/components/LocalBusinessSchema"
import Link from "next/link"
import Counter3 from "@/components/sections/Counter3"
import Brand3 from "@/components/sections/Brand3"
import FaqSection from "@/components/sections/FaqSection"
import FaqSchema from "@/components/FaqSchema"

export default function Carnegie() {
    const locationSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://kletzcontracting.com/service-areas/carnegie#location",
        "parentOrganization": {
            "@id": "https://kletzcontracting.com#organization"
        },
        "name": "Kletz Contracting - Carnegie",
        "description": "Professional roofing, siding, and dumpster rental services in Carnegie, PA. Trusted contractor serving this historic South Hills borough.",
        "areaServed": {
            "@type": "City",
            "name": "Carnegie",
            "containedInPlace": {
                "@type": "State",
                "name": "Pennsylvania"
            }
        }
    }

    return (
        <>
            <PageHead 
                headTitle="Carnegie PA Roofing & Siding Contractor | Kletz Contracting"
                metaDescription="Professional roofing, siding installation, and dumpster rental services in Carnegie, PA. Trusted contractor serving this historic South Hills borough. Expert service for diverse neighborhoods. Free estimates in Carnegie."
                canonicalUrl="https://kletzcontracting.com/service-areas/carnegie"
                keywords="Carnegie PA roofing contractor, Carnegie Pennsylvania siding installation, Carnegie dumpster rental, roofing repair Carnegie PA, home improvement Carnegie South Hills"
                structuredData={locationSchema}
            />
            <LocalBusinessSchema />
            <FaqSchema category={"carnegie"}/>
            <Layout breadcrumbTitle="Carnegie Service Area">
                <section className="services-details-area pt-120 pb-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8">
                                <div className="services-details-wrap">
                                    {/* <div className="services-details-thumb mb-4">
                                        <img src="/assets/img/areas/carnegie-hero.jpg" alt="Carnegie PA Roofing and Siding Services" />
                                    </div> */}
                                    
                                    <div className="services-details-content">
                                        <h1 className="title mb-4">Carnegie's Reliable Roofing & Home Improvement Contractor</h1>
                                        
                                        <p className="mb-4">
                                            Kletz Contracting has been proudly serving Carnegie for decades, understanding the unique character 
                                            of this historic South Hills borough. Named after industrialist Andrew Carnegie, this community 
                                            is known for its diverse neighborhoods, from established residential areas to growing developments. 
                                            Carnegie's mix of working-class families and young professionals creates a vibrant community that 
                                            values quality workmanship and reliable service - values we share and deliver in every project.
                                        </p>

                                        <h2 className="title-two mb-3">Why Carnegie Homeowners Trust Kletz Contracting</h2>
                                        
                                        <div className="services-process-wrap mb-5">
                                            <ul className="list-wrap">
                                                <li>
                                                    <div className="services-process-item">
                                                        <div className="icon">
                                                            <img src="/assets/img/icon/flat_check.svg" alt="" />
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="title">Diverse Neighborhood Experience</h4>
                                                            <p>Experience with Carnegie's varied housing stock, from older homes to newer constructions across different neighborhoods</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="services-process-item">
                                                        <div className="icon">
                                                            <img src="/assets/img/icon/flat_check.svg" alt="" />
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="title">Working Family Values</h4>
                                                            <p>Understanding that Carnegie families work hard for their homes and deserve honest, reliable service and fair pricing</p>
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
                                                            <p>Deep knowledge of South Hills building patterns, weather challenges, and the specific needs of Carnegie properties</p>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>

                                        <h2 className="title-two mb-3">Our Services in Carnegie</h2>
                                        
                                        <h3 className="mb-3">Roofing Services for Every Home</h3>
                                        <p className="mb-4">
                                            Carnegie's diverse housing needs reliable roofing that protects families and their investments. 
                                            Our comprehensive roofing services include:
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
                                            Enhance your Carnegie home's protection and curb appeal with professional siding services:
                                        </p>
                                        <ul className="list-wrap mb-4">
                                            <li>Vinyl siding in styles that suit Carnegie's character</li>
                                            <li>James Hardie fiber cement for durability and beauty</li>
                                            <li>Wood siding restoration for older homes</li>
                                            <li>Energy-efficient insulated siding options</li>
                                            <li>Complete exterior renovations and updates</li>
                                        </ul>
                                        
                                        <h3 className="mb-3">Dumpster Rental for Your Projects</h3>
                                        <p className="mb-4">
                                            Whether you're renovating your home or tackling a cleanup project, our dumpster rental 
                                            service keeps your Carnegie project organized:
                                        </p>
                                        <ul className="list-wrap mb-4">
                                            <li>10, 15, and 20-yard containers available</li>
                                            <li>Flexible scheduling for working families</li>
                                            <li>Reliable delivery throughout Carnegie</li>
                                            <li>Competitive pricing for budget-conscious homeowners</li>
                                            <li>Respectful service in residential neighborhoods</li>
                                        </ul>

                                        <h2 className="title-two mb-3">Carnegie Areas We Serve</h2>
                                        <p className="mb-4">
                                            We provide services throughout all of Carnegie, including:
                                        </p>
                                        <ul className="list-wrap mb-4">
                                            <li>Main Street and downtown business district</li>
                                            <li>Rosslyn Farms border area</li>
                                            <li>Washington Avenue corridor</li>
                                            <li>Vanadium and Rennerdale areas</li>
                                            <li>Chartiers Creek neighborhoods</li>
                                            <li>All residential areas throughout Carnegie Borough</li>
                                        </ul>

                                        <div className="project-details-wrap mt-5">
                                            <div className="project-details-info">
                                                <ul className="list-wrap">
                                                    <li><span>Service Area:</span>All of Carnegie Borough</li>
                                                    <li><span>Community:</span>Historic South Hills borough</li>
                                                    <li><span>Values:</span>Honest work, fair pricing, reliability</li>
                                                    <li><span>Character:</span>Diverse, hardworking neighborhoods</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-xl-4">
                                <aside className="services-sidebar">
                                    <div className="services-widget">
                                        <h4 className="sw-title">Our Carnegie Services</h4>
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
                                        <h4 className="sw-title">Get Your Free Carnegie Quote</h4>
                                        <div className="services-widget-contact">
                                            <p>Ready to protect your Carnegie home? Contact us today!</p>
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
                                                <li><Link href="/service-areas/bethel-park">Bethel Park<i className="fas fa-angle-double-right" /></Link></li>
                                                <li><Link href="/service-areas/upper-st-clair">Upper St. Clair<i className="fas fa-angle-double-right" /></Link></li>
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
                <FaqSection category={'carnegie'}/>
                <Brand3 />
            </Layout>
        </>
    )
}