import Layout from "@/components/layout/Layout"
import PageHead from "@/components/layout/PageHead"
import LocalBusinessSchema from "@/components/LocalBusinessSchema"
import Link from "next/link"
import Brand3 from "@/components/sections/Brand3"
import FaqSection from "@/components/sections/FaqSection"
import FaqSchema from "@/components/FaqSchema"

export default function Canonsburg() {
    const locationSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://kletzcontracting.com/service-areas/canonsburg#location",
        "parentOrganization": {
            "@id": "https://kletzcontracting.com#organization"
        },
        "name": "Kletz Contracting - Canonsburg",
        "description": "Professional roofing, siding, and dumpster rental services in Canonsburg, PA. Trusted contractor serving this historic Washington County borough.",
        "areaServed": {
            "@type": "City",
            "name": "Canonsburg",
            "containedInPlace": {
                "@type": "State",
                "name": "Pennsylvania"
            }
        }
    }

    return (
        <>
            <PageHead 
                headTitle="Canonsburg PA Roofing & Siding Contractor | Kletz Contracting"
                metaDescription="Professional roofing, siding installation, and dumpster rental services in Canonsburg, PA. Trusted contractor serving this historic Washington County borough. Expert service for diverse neighborhoods. Free estimates in Canonsburg."
                canonicalUrl="https://kletzcontracting.com/service-areas/canonsburg"
                keywords="Canonsburg PA roofing contractor, Canonsburg Pennsylvania siding installation, Canonsburg dumpster rental, roofing repair Canonsburg PA, home improvement Canonsburg Washington County"
                structuredData={locationSchema}
            />
            <LocalBusinessSchema />
            <FaqSchema category={"canonsburg"}/>
            <Layout breadcrumbTitle="Canonsburg Service Area">
                <section className="services-details-area pt-120 pb-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8">
                                <div className="services-details-wrap">
                                    {/* <div className="services-details-thumb mb-4">
                                        <img src="/assets/img/areas/canonsburg-hero.jpg" alt="Canonsburg PA Roofing and Siding Services" />
                                    </div> */}
                                    
                                    <div className="services-details-content">
                                        <h1 className="title mb-4">Canonsburg's Reliable Roofing & Home Improvement Contractor</h1>
                                        
                                        <p className="mb-4">
                                            Kletz Contracting has been proudly serving Canonsburg for decades, understanding the rich heritage 
                                            and diverse character of this historic Washington County borough. As the county seat, Canonsburg 
                                            combines small-town charm with modern growth, featuring everything from historic downtown buildings 
                                            to contemporary residential developments. From the established neighborhoods near downtown to the 
                                            growing communities throughout the borough, we provide services that honor Canonsburg's heritage 
                                            while meeting the needs of today's homeowners.
                                        </p>

                                        <h2 className="title-two mb-3">Why Canonsburg Homeowners Trust Kletz Contracting</h2>
                                        
                                        <div className="services-process-wrap mb-5">
                                            <ul className="list-wrap">
                                                <li>
                                                    <div className="services-process-item">
                                                        <div className="icon">
                                                            <img src="/assets/img/icon/flat_check.svg" alt="" />
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="title">Historic Community Understanding</h4>
                                                            <p>Appreciation for Canonsburg's historic significance and experience working with both heritage properties and modern homes</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="services-process-item">
                                                        <div className="icon">
                                                            <img src="/assets/img/icon/flat_check.svg" alt="" />
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="title">Diverse Housing Expertise</h4>
                                                            <p>Experience with Canonsburg's varied housing stock, from historic homes to newer developments and everything in between</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="services-process-item">
                                                        <div className="icon">
                                                            <img src="/assets/img/icon/flat_check.svg" alt="" />
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="title">County Seat Standards</h4>
                                                            <p>Understanding that as the county seat, Canonsburg deserves contractors who maintain high standards and professional service</p>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>

                                        <h2 className="title-two mb-3">Our Services in Canonsburg</h2>
                                        
                                        <h3 className="mb-3">Roofing for All Home Types</h3>
                                        <p className="mb-4">
                                            Canonsburg's diverse housing needs roofing solutions that can handle both historic preservation 
                                            and modern performance requirements. Our services include:
                                        </p>
                                        <ul className="list-wrap mb-4">
                                            <li>Historic roof restoration and preservation</li>
                                            <li>Complete roof replacements with modern materials</li>
                                            <li>Storm damage assessment and emergency repairs</li>
                                            <li>Insurance claim assistance and documentation</li>
                                            <li>Preventive maintenance for aging roof systems</li>
                                        </ul>
                                        
                                        <h3 className="mb-3">Siding Installation and Restoration</h3>
                                        <p className="mb-4">
                                            Enhance your Canonsburg home with siding that complements the borough's character:
                                        </p>
                                        <ul className="list-wrap mb-4">
                                            <li>Wood siding restoration for historic authenticity</li>
                                            <li>James Hardie fiber cement for modern durability</li>
                                            <li>Vinyl siding in traditional and contemporary styles</li>
                                            <li>Custom trim work and architectural details</li>
                                            <li>Complete exterior renovations and updates</li>
                                        </ul>
                                        
                                        <h3 className="mb-3">Dumpster Rental for All Projects</h3>
                                        <p className="mb-4">
                                            Whether renovating a historic home or working on modern improvements, our dumpster service provides:
                                        </p>
                                        <ul className="list-wrap mb-4">
                                            <li>10, 15, and 20-yard containers available</li>
                                            <li>Flexible scheduling for various project types</li>
                                            <li>Professional placement throughout Canonsburg</li>
                                            <li>Experience with both residential and light commercial needs</li>
                                            <li>Reliable service for the county seat community</li>
                                        </ul>

                                        <h2 className="title-two mb-3">Canonsburg Areas We Serve</h2>
                                        <p className="mb-4">
                                            We provide services throughout all of Canonsburg, including:
                                        </p>
                                        <ul className="list-wrap mb-4">
                                            <li>Historic downtown district and courthouse area</li>
                                            <li>Pike Street and Central Avenue corridors</li>
                                            <li>Established residential neighborhoods</li>
                                            <li>Newer developments and subdivisions</li>
                                            <li>Chartiers Creek area properties</li>
                                            <li>All residential areas throughout Canonsburg Borough</li>
                                        </ul>

                                        <div className="project-details-wrap mt-5">
                                            <div className="project-details-info">
                                                <ul className="list-wrap">
                                                    <li><span>Service Area:</span>All of Canonsburg Borough</li>
                                                    <li><span>County Seat:</span>Washington County</li>
                                                    <li><span>Character:</span>Historic borough with modern growth</li>
                                                    <li><span>Heritage:</span>Small-town charm, professional standards</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-xl-4">
                                <aside className="services-sidebar">
                                    <div className="services-widget">
                                        <h4 className="sw-title">Our Canonsburg Services</h4>
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
                                        <h4 className="sw-title">Get Your Free Canonsburg Quote</h4>
                                        <div className="services-widget-contact">
                                            <p>Ready to protect your Canonsburg home? Contact us today!</p>
                                            <Link href="tel:412-219-7279" className="btn btn-primary w-100 mb-3">
                                                <i className="fas fa-phone-alt mr-2"></i> Call (412) 219-7279
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
                                                <li><Link href="/service-areas/south-fayette">South Fayette<i className="fas fa-angle-double-right" /></Link></li>
                                                <li><Link href="/service-areas/peters-township">Peters Township<i className="fas fa-angle-double-right" /></Link></li>
                                                <li><Link href="/service-areas/mcmurray">McMurray<i className="fas fa-angle-double-right" /></Link></li>
                                                <li><Link href="/service-areas">View All Areas<i className="fas fa-angle-double-right" /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </section>
                
               
                <FaqSection category={'canonsburg'}/>
                <Brand3 />
            </Layout>
        </>
    )
}