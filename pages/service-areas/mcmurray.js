import Layout from "@/components/layout/Layout"
import PageHead from "@/components/layout/PageHead"
import LocalBusinessSchema from "@/components/LocalBusinessSchema"
import Link from "next/link"
import Brand3 from "@/components/sections/Brand3"
import FaqSection from "@/components/sections/FaqSection"
import FaqSchema from "@/components/FaqSchema"

export default function McMurray() {
    const locationSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://kletzcontracting.com/service-areas/mcmurray#location",
        "parentOrganization": {
            "@id": "https://kletzcontracting.com#organization"
        },
        "name": "Kletz Contracting - McMurray",
        "description": "Professional roofing, siding, and dumpster rental services in McMurray, PA. Trusted contractor serving this upscale Washington County community.",
        "areaServed": {
            "@type": "City",
            "name": "McMurray",
            "containedInPlace": {
                "@type": "State",
                "name": "Pennsylvania"
            }
        }
    }

    return (
        <>
            <PageHead 
                headTitle="McMurray PA Roofing & Siding Contractor | Kletz Contracting"
                metaDescription="Professional roofing, siding installation, and dumpster rental services in McMurray, PA. Trusted contractor serving this upscale Washington County community. Expert service for luxury homes. Free estimates in McMurray."
                canonicalUrl="https://kletzcontracting.com/service-areas/mcmurray"
                keywords="McMurray PA roofing contractor, McMurray Pennsylvania siding installation, McMurray dumpster rental, roofing repair McMurray PA, home improvement McMurray Washington County"
                structuredData={locationSchema}
            />
            <LocalBusinessSchema />
            <FaqSchema category={"mcmurray"}/>
            <Layout breadcrumbTitle="McMurray Service Area">
                <section className="services-details-area pt-120 pb-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8">
                                <div className="services-details-wrap">
                                    {/* <div className="services-details-thumb mb-4">
                                        <img src="/assets/img/areas/mcmurray-hero.jpg" alt="McMurray PA Roofing and Siding Services" />
                                    </div> */}
                                    
                                    <div className="services-details-content">
                                        <h1 className="title mb-4">McMurray's Premier Roofing & Home Improvement Contractor</h1>
                                        
                                        <p className="mb-4">
                                            Kletz Contracting has been proudly serving McMurray for decades, understanding the upscale character 
                                            of this desirable Washington County community. Located in Peters Township, McMurray is known for its 
                                            luxury homes, excellent schools, and affluent families who expect the highest standards of service. 
                                            From the prestigious developments to the established neighborhoods throughout McMurray, we provide 
                                            premium services that match the community's expectations for quality, professionalism, and attention to detail.
                                        </p>

                                        <h2 className="title-two mb-3">Why McMurray Homeowners Choose Kletz Contracting</h2>
                                        
                                        <div className="services-process-wrap mb-5">
                                            <ul className="list-wrap">
                                                <li>
                                                    <div className="services-process-item">
                                                        <div className="icon">
                                                            <img src="/assets/img/icon/flat_check.svg" alt="" />
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="title">Luxury Home Expertise</h4>
                                                            <p>Specialized experience with McMurray's upscale homes and understanding of the premium materials and craftsmanship expected</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="services-process-item">
                                                        <div className="icon">
                                                            <img src="/assets/img/icon/flat_check.svg" alt="" />
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="title">Premium Service Standards</h4>
                                                            <p>White-glove service approach that meets the sophisticated expectations of McMurray's discerning homeowners</p>
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
                                                            <p>Deep understanding of Washington County building codes and Peters Township requirements for this premium community</p>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>

                                        <h2 className="title-two mb-3">Our Services in McMurray</h2>
                                        
                                        <h3 className="mb-3">Premium Roofing for Luxury Homes</h3>
                                        <p className="mb-4">
                                            McMurray's luxury homes deserve roofing solutions that combine superior protection with aesthetic excellence. 
                                            Our premium services include:
                                        </p>
                                        <ul className="list-wrap mb-4">
                                            <li>Architectural shingles and designer roof systems</li>
                                            <li>Premium slate and tile installations</li>
                                            <li>Custom copper work and specialty materials</li>
                                            <li>Storm damage restoration with high-end materials</li>
                                            <li>Comprehensive roof maintenance programs</li>
                                        </ul>
                                        
                                        <h3 className="mb-3">Luxury Siding Installation</h3>
                                        <p className="mb-4">
                                            Enhance your McMurray home with siding that reflects the community's upscale character:
                                        </p>
                                        <ul className="list-wrap mb-4">
                                            <li>James Hardie ColorPlus fiber cement siding</li>
                                            <li>Premium cedar and hardwood siding options</li>
                                            <li>Custom architectural details and trim work</li>
                                            <li>Stone and brick veneer installations</li>
                                            <li>Complete luxury exterior renovations</li>
                                        </ul>
                                        
                                        <h3 className="mb-3">Discreet Dumpster Rental</h3>
                                        <p className="mb-4">
                                            For luxury home renovations and upscale projects, our professional dumpster service provides:
                                        </p>
                                        <ul className="list-wrap mb-4">
                                            <li>Clean, well-maintained 10, 15, and 20-yard containers</li>
                                            <li>Discreet placement respecting luxury neighborhoods</li>
                                            <li>Flexible scheduling for minimal community impact</li>
                                            <li>Premium service standards throughout</li>
                                            <li>Professional coordination with HOA requirements</li>
                                        </ul>

                                        <h2 className="title-two mb-3">McMurray Areas We Serve</h2>
                                        <p className="mb-4">
                                            We provide services throughout all of McMurray, including:
                                        </p>
                                        <ul className="list-wrap mb-4">
                                            <li>Luxury developments and custom home areas</li>
                                            <li>McMurray Elementary and middle school districts</li>
                                            <li>Waterdam Plaza vicinity</li>
                                            <li>Premium residential neighborhoods</li>
                                            <li>Estate properties throughout McMurray</li>
                                            <li>All upscale residential areas in Peters Township</li>
                                        </ul>

                                        <div className="project-details-wrap mt-5">
                                            <div className="project-details-info">
                                                <ul className="list-wrap">
                                                    <li><span>Service Area:</span>All of McMurray community</li>
                                                    <li><span>Location:</span>Peters Township, Washington County</li>
                                                    <li><span>Character:</span>Upscale residential community</li>
                                                    <li><span>Specialty:</span>Luxury homes and premium service</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-xl-4">
                                <aside className="services-sidebar">
                                    <div className="services-widget">
                                        <h4 className="sw-title">Our McMurray Services</h4>
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
                                        <h4 className="sw-title">Get Your Free McMurray Quote</h4>
                                        <div className="services-widget-contact">
                                            <p>Ready to enhance your McMurray home? Contact us today!</p>
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
                                                <li><Link href="/service-areas/upper-st-clair">Upper St. Clair<i className="fas fa-angle-double-right" /></Link></li>
                                                <li><Link href="/service-areas/south-fayette">South Fayette<i className="fas fa-angle-double-right" /></Link></li>
                                                <li><Link href="/service-areas">View All Areas<i className="fas fa-angle-double-right" /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </section>
                
            
                <FaqSection category={'mcmurray'}/>
                <Brand3 />
            </Layout>
        </>
    )
}