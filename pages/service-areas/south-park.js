import Layout from "@/components/layout/Layout"
import PageHead from "@/components/layout/PageHead"
import LocalBusinessSchema from "@/components/LocalBusinessSchema"
import Link from "next/link"
import Brand3 from "@/components/sections/Brand3"
import FaqSection from "@/components/sections/FaqSection"
import FaqSchema from "@/components/FaqSchema"

export default function SouthPark() {
    const locationSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://kletzcontracting.com/service-areas/south-park#location",
        "parentOrganization": {
            "@id": "https://kletzcontracting.com#organization"
        },
        "name": "Kletz Contracting - South Park",
        "description": "Professional roofing, siding, and dumpster rental services in South Park, PA. Trusted contractor serving this scenic South Hills township.",
        "areaServed": {
            "@type": "City",
            "name": "South Park",
            "containedInPlace": {
                "@type": "State",
                "name": "Pennsylvania"
            }
        }
    }

    return (
        <>
            <PageHead 
                headTitle="South Park Township Roofing & Siding Contractor | Kletz Contracting"
                metaDescription="Professional roofing, siding installation, and dumpster rental services in South Park Township, PA. Trusted contractor serving this scenic South Hills community. Quality workmanship for rural and suburban homes. Free estimates."
                canonicalUrl="https://kletzcontracting.com/service-areas/south-park"
                keywords="South Park Township roofing contractor, South Park PA siding installation, South Park Township dumpster rental, roofing repair South Park PA, home improvement South Park Township"
                structuredData={locationSchema}
            />
            <LocalBusinessSchema />
            <FaqSchema category={"south-park"}/>
            <Layout breadcrumbTitle="South Park Township Service Area">
                <section className="services-details-area pt-120 pb-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8">
                                <div className="services-details-wrap">
                                    {/* <div className="services-details-thumb mb-4">
                                        <img src="/assets/img/areas/south-park-hero.jpg" alt="South Park Township PA Roofing and Siding Services" />
                                    </div> */}
                                    
                                    <div className="services-details-content">
                                        <h1 className="title mb-4">South Park Township's Reliable Roofing & Home Improvement Contractor</h1>
                                        
                                        <p className="mb-4">
                                            Kletz Contracting has been proudly serving South Park Township for decades, understanding the unique 
                                            character of this scenic South Hills community. Known for its rolling hills, rural feel, and mix of 
                                            suburban and country properties, South Park Township requires contractors who can handle diverse 
                                            challenges - from hillside homes to sprawling properties. We appreciate the township's blend of 
                                            natural beauty and residential development, and our work reflects that same attention to quality 
                                            and environmental respect.
                                        </p>

                                        <h2 className="title-two mb-3">Why South Park Township Homeowners Trust Kletz Contracting</h2>
                                        
                                        <div className="services-process-wrap mb-5">
                                            <ul className="list-wrap">
                                                <li>
                                                    <div className="services-process-item">
                                                        <div className="icon">
                                                            <img src="/assets/img/icon/flat_check.svg" alt="" />
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="title">Rural Property Expertise</h4>
                                                            <p>Experience with South Park's diverse property types, from suburban neighborhoods to rural estates and hillside homes</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="services-process-item">
                                                        <div className="icon">
                                                            <img src="/assets/img/icon/flat_check.svg" alt="" />
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="title">Terrain Specialists</h4>
                                                            <p>Skilled in working with South Park's rolling hills and varied topography, ensuring safe and effective installations</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="services-process-item">
                                                        <div className="icon">
                                                            <img src="/assets/img/icon/flat_check.svg" alt="" />
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="title">Community Understanding</h4>
                                                            <p>Appreciation for South Park's natural beauty and commitment to maintaining the township's scenic character</p>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>

                                        <h2 className="title-two mb-3">Our Services in South Park Township</h2>
                                        
                                        <h3 className="mb-3">Roofing Services for All Property Types</h3>
                                        <p className="mb-4">
                                            South Park Township's diverse homes - from cozy suburban houses to expansive country properties - 
                                            all need reliable roofing protection. Our comprehensive services include:
                                        </p>
                                        <ul className="list-wrap mb-4">
                                            <li>Complete roof replacements for all home styles</li>
                                            <li>Storm damage repairs and emergency services</li>
                                            <li>Specialized work for hillside and sloped properties</li>
                                            <li>Large property and estate roofing projects</li>
                                            <li>Rural home roofing with specialized access</li>
                                        </ul>
                                        
                                        <h3 className="mb-3">Siding Installation for Every Setting</h3>
                                        <p className="mb-4">
                                            Whether your home overlooks the township's scenic vistas or nestles in a quiet neighborhood, 
                                            we provide siding that enhances both beauty and protection:
                                        </p>
                                        <ul className="list-wrap mb-4">
                                            <li>Vinyl siding that complements natural settings</li>
                                            <li>James Hardie fiber cement for rural durability</li>
                                            <li>Wood siding for traditional country character</li>
                                            <li>Board and batten styles for larger properties</li>
                                            <li>Complete exterior renovations</li>
                                        </ul>
                                        
                                        <h3 className="mb-3">Dumpster Rental for All Projects</h3>
                                        <p className="mb-4">
                                            From home renovations to large property cleanups, our dumpster rental service accommodates 
                                            South Park Township's diverse project needs:
                                        </p>
                                        <ul className="list-wrap mb-4">
                                            <li>Multiple sizes: 10, 15, and 20-yard containers</li>
                                            <li>Flexible placement for challenging terrain</li>
                                            <li>Rural delivery throughout the township</li>
                                            <li>Extended rental periods for larger projects</li>
                                            <li>Respectful service in natural settings</li>
                                        </ul>

                                        <h2 className="title-two mb-3">South Park Township Areas We Serve</h2>
                                        <p className="mb-4">
                                            We provide services throughout all of South Park Township, including:
                                        </p>
                                        <ul className="list-wrap mb-4">
                                            <li>Brownsville Road corridor</li>
                                            <li>Corrigan Drive area</li>
                                            <li>South Park Fairgrounds vicinity</li>
                                            <li>Rural properties and estates</li>
                                            <li>Hillside and valley homes</li>
                                            <li>All South Park Township neighborhoods</li>
                                        </ul>

                                        <div className="project-details-wrap mt-5">
                                            <div className="project-details-info">
                                                <ul className="list-wrap">
                                                    <li><span>Service Area:</span>All of South Park Township</li>
                                                    <li><span>Specialty:</span>Rural and hillside properties</li>
                                                    <li><span>Terrain:</span>Rolling hills and varied topography</li>
                                                    <li><span>Character:</span>Scenic South Hills community</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-xl-4">
                                <aside className="services-sidebar">
                                    <div className="services-widget">
                                        <h4 className="sw-title">Our South Park Services</h4>
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
                                        <h4 className="sw-title">Get Your Free South Park Quote</h4>
                                        <div className="services-widget-contact">
                                            <p>Ready to protect your South Park Township home? Contact us today!</p>
                                            <Link href="tel:412-219-7279" className="btn btn-primary w-100 mb-3">
                                                <i className="fas fa-phone-alt mr-2"></i> Call (412) 219-7279
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
                                                <li><Link href="/service-areas/bethel-park">Bethel Park<i className="fas fa-angle-double-right" /></Link></li>
                                                <li><Link href="/service-areas/mt-lebanon">Mt. Lebanon<i className="fas fa-angle-double-right" /></Link></li>
                                                <li><Link href="/service-areas/upper-st-clair">Upper St. Clair<i className="fas fa-angle-double-right" /></Link></li>
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
      
                <FaqSection category={'south-park'}/>
                <Brand3 />
            </Layout>
        </>
    )
}