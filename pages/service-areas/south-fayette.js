import Layout from "@/components/layout/Layout"
import PageHead from "@/components/layout/PageHead"
import LocalBusinessSchema from "@/components/LocalBusinessSchema"
import Link from "next/link"
import Brand3 from "@/components/sections/Brand3"
import FaqSection from "@/components/sections/FaqSection"
import FaqSchema from "@/components/FaqSchema"

export default function SouthFayette() {
    const locationSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://kletzcontracting.com/service-areas/south-fayette#location",
        "parentOrganization": {
            "@id": "https://kletzcontracting.com#organization"
        },
        "name": "Kletz Contracting - South Fayette",
        "description": "Professional roofing, siding, and dumpster rental services in South Fayette, PA. Trusted contractor serving this growing Washington County township.",
        "areaServed": {
            "@type": "City",
            "name": "South Fayette",
            "containedInPlace": {
                "@type": "State",
                "name": "Pennsylvania"
            }
        }
    }

    return (
        <>
            <PageHead 
                headTitle="South Fayette Township Roofing & Siding Contractor | Kletz Contracting"
                metaDescription="Professional roofing, siding installation, and dumpster rental services in South Fayette Township, PA. Trusted contractor serving this growing Washington County community. Expert service for new and established homes. Free estimates."
                canonicalUrl="https://kletzcontracting.com/service-areas/south-fayette"
                keywords="South Fayette roofing contractor, South Fayette PA siding installation, South Fayette dumpster rental, roofing repair South Fayette Township, home improvement South Fayette Washington County"
                structuredData={locationSchema}
            />
            <LocalBusinessSchema />
            <FaqSchema category={"south-fayette"}/>
            <Layout breadcrumbTitle="South Fayette Service Area">
                <section className="services-details-area pt-120 pb-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8">
                                <div className="services-details-wrap">
                                    {/* <div className="services-details-thumb mb-4">
                                        <img src="/assets/img/areas/south-fayette-hero.jpg" alt="South Fayette Township PA Roofing and Siding Services" />
                                    </div> */}
                                    
                                    <div className="services-details-content">
                                        <h1 className="title mb-4">South Fayette Township's Trusted Roofing & Home Improvement Contractor</h1>
                                        
                                        <p className="mb-4">
                                            Kletz Contracting has been proudly serving South Fayette Township for decades, understanding the dynamic 
                                            character of this rapidly growing Washington County community. Known for its excellent schools, new 
                                            developments, and attractive blend of suburban convenience and rural charm, South Fayette attracts 
                                            families and professionals who value quality and innovation. From the established McDonald area to 
                                            the newest residential developments throughout the township, we provide services that match South 
                                            Fayette's commitment to excellence and forward-thinking growth.
                                        </p>

                                        <h2 className="title-two mb-3">Why South Fayette Residents Choose Kletz Contracting</h2>
                                        
                                        <div className="services-process-wrap mb-5">
                                            <ul className="list-wrap">
                                                <li>
                                                    <div className="services-process-item">
                                                        <div className="icon">
                                                            <img src="/assets/img/icon/flat_check.svg" alt="" />
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="title">Growing Community Expertise</h4>
                                                            <p>Experience with South Fayette's mix of new construction and established homes, adapting to the township's dynamic growth</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="services-process-item">
                                                        <div className="icon">
                                                            <img src="/assets/img/icon/flat_check.svg" alt="" />
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="title">Quality-Focused Families</h4>
                                                            <p>Understanding that South Fayette families prioritize quality education and homes, and delivering the same standards in our work</p>
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
                                                            <p>Deep understanding of Washington County building codes and South Fayette Township requirements for this progressive community</p>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>

                                        <h2 className="title-two mb-3">Our Services in South Fayette Township</h2>
                                        
                                        <h3 className="mb-3">Roofing for New and Established Homes</h3>
                                        <p className="mb-4">
                                            South Fayette's diverse housing - from new construction to established neighborhoods - needs reliable 
                                            roofing that meets modern standards. Our comprehensive services include:
                                        </p>
                                        <ul className="list-wrap mb-4">
                                            <li>New construction roofing services</li>
                                            <li>Complete roof replacements with modern materials</li>
                                            <li>Storm damage assessment and emergency repairs</li>
                                            <li>Energy-efficient roofing systems</li>
                                            <li>Preventive maintenance programs for growing families</li>
                                        </ul>
                                        
                                        <h3 className="mb-3">Siding Installation for Modern Homes</h3>
                                        <p className="mb-4">
                                            Enhance your South Fayette home with siding that reflects the township's progressive character:
                                        </p>
                                        <ul className="list-wrap mb-4">
                                            <li>James Hardie fiber cement in contemporary styles</li>
                                            <li>Vinyl siding with modern profiles and colors</li>
                                            <li>Energy-efficient insulated siding systems</li>
                                            <li>Complete exterior renovations and updates</li>
                                            <li>Custom architectural details for new builds</li>
                                        </ul>
                                        
                                        <h3 className="mb-3">Dumpster Rental for Growing Community</h3>
                                        <p className="mb-4">
                                            From home improvements to new construction support, our dumpster service accommodates 
                                            South Fayette's growth and development:
                                        </p>
                                        <ul className="list-wrap mb-4">
                                            <li>10, 15, and 20-yard containers available</li>
                                            <li>Flexible scheduling for busy family life</li>
                                            <li>New construction and renovation support</li>
                                            <li>Reliable delivery throughout the township</li>
                                            <li>Service that respects developing neighborhoods</li>
                                        </ul>

                                        <h2 className="title-two mb-3">South Fayette Areas We Serve</h2>
                                        <p className="mb-4">
                                            We provide services throughout all of South Fayette Township, including:
                                        </p>
                                        <ul className="list-wrap mb-4">
                                            <li>McDonald area and established neighborhoods</li>
                                            <li>New residential developments and subdivisions</li>
                                            <li>Sturgeon area communities</li>
                                            <li>Oak Ridge and growing neighborhoods</li>
                                            <li>Rural properties and newer constructions</li>
                                            <li>All residential areas throughout South Fayette Township</li>
                                        </ul>

                                        <div className="project-details-wrap mt-5">
                                            <div className="project-details-info">
                                                <ul className="list-wrap">
                                                    <li><span>Service Area:</span>All of South Fayette Township</li>
                                                    <li><span>County:</span>Washington County</li>
                                                    <li><span>Character:</span>Growing, progressive community</li>
                                                    <li><span>Specialty:</span>New construction and family homes</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-xl-4">
                                <aside className="services-sidebar">
                                    <div className="services-widget">
                                        <h4 className="sw-title">Our South Fayette Services</h4>
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
                                        <h4 className="sw-title">Get Your Free South Fayette Quote</h4>
                                        <div className="services-widget-contact">
                                            <p>Ready to protect your South Fayette home? Contact us today!</p>
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
                                                <li><Link href="/service-areas/peters-township">Peters Township<i className="fas fa-angle-double-right" /></Link></li>
                                                <li><Link href="/service-areas/mcmurray">McMurray<i className="fas fa-angle-double-right" /></Link></li>
                                                <li><Link href="/service-areas/canonsburg">Canonsburg<i className="fas fa-angle-double-right" /></Link></li>
                                                <li><Link href="/service-areas">View All Areas<i className="fas fa-angle-double-right" /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </section>
                
              
                <FaqSection category={'south-fayette'}/>
                <Brand3 />
            </Layout>
        </>
    )
}