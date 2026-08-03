import Layout from "@/components/layout/Layout"
import Brand3 from "@/components/sections/Brand3"
import Link from "next/link"
import PageHead from "@/components/layout/PageHead"
import LocalBusinessSchema from "@/components/LocalBusinessSchema"
import MainContact from "@/components/elements/MainContact"

const processSideImg = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
    borderRadius: '15px'
};

export default function EmergencyLeakRepair(props) {
    return (
        <>
            <PageHead 
                headTitle={props.metaTitle}
                metaDescription={props.metaDescription}
                canonicalUrl={props.canonicalUrl}
                keywords="emergency roof leak repair Pittsburgh, 24/7 roof repair, emergency roofing contractor, roof leak fix Pittsburgh PA, storm damage repair, urgent roof repair Robinson Township, water damage prevention, emergency tarp installation"
                structuredData={props.serviceSchema}
            />
            
            {/* Include the main business schema */}
            <LocalBusinessSchema />
            
            <Layout breadcrumbTitle="Emergency Roof Leak Repair">
                <div>
                    <section className="services-details-area pt-120">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-8">
                                    <div className="services-details-wrap">
                                        <div className="services-details-thumb">
                                            <img src="/assets/img/services/roofing.jpg" alt="Emergency Roof Leak Repair Pittsburgh" />
                                        </div>
                                        <div className="services-details-content">
                                            <div className="emergency-alert mb-4 p-4" style={{backgroundColor: "#FFF3CD", border: "1px solid #FFE69C", borderRadius: "8px"}}>
                                                <h3 className="text-center mb-3" style={{color: "#E74C3C"}}>
                                                    <i className="fas fa-exclamation-triangle"></i> Roof Leaking? We're Here 24/7
                                                </h3>
                                                <div className="text-center">
                                                    <h2 style={{color: "#E74C3C", marginBottom: "10px"}}>
                                                        <i className="fas fa-phone-alt"></i> (412) 219-7279
                                                    </h2>
                                                    <p className="mb-2"><strong>Average Response Time: 2-4 Hours</strong></p>
                                                    <p>Don't let water damage get worse. Call now for immediate help!</p>
                                                </div>
                                            </div>

                                            <h2 className="title">Fast Emergency Roof Leak Repair in Pittsburgh</h2>
                                            <p className="lead"><strong>When your roof is leaking, every minute counts.</strong> Water damage can quickly escalate from a small stain to major structural problems, mold growth, and thousands in repairs.</p>
                                            
                                            <p>That's why Kletz Contracting offers 24/7 emergency roof leak repair throughout Pittsburgh and surrounding areas. Our rapid response team will:</p>
                                            
                                            <ul className="list-wrap mt-3 mb-4">
                                                <li><i className="fas fa-check-circle" style={{color: "#E74C3C"}}></i> Stop the leak immediately to prevent further damage</li>
                                                <li><i className="fas fa-check-circle" style={{color: "#E74C3C"}}></i> Install emergency tarps if needed for temporary protection</li>
                                                <li><i className="fas fa-check-circle" style={{color: "#E74C3C"}}></i> Document damage for insurance claims with photos</li>
                                                <li><i className="fas fa-check-circle" style={{color: "#E74C3C"}}></i> Provide permanent repair options and timeline</li>
                                                <li><i className="fas fa-check-circle" style={{color: "#E74C3C"}}></i> Help coordinate with your insurance company</li>
                                            </ul>

                                            <div className="when-to-call-section mt-5 mb-5">
                                                <h2 className="title-two">When to Call for Emergency Roof Repair</h2>
                                                <div className="row mt-4">
                                                    <div className="col-md-6 mb-4">
                                                        <div className="warning-sign p-4" style={{backgroundColor: "#fff", border: "2px solid #E74C3C", borderRadius: "8px", height: "100%"}}>
                                                            <h4><i className="fas fa-tint" style={{color: "#E74C3C"}}></i> Active Water Dripping</h4>
                                                            <p className="mb-0">Water actively dripping from ceiling, walls, or light fixtures needs immediate attention to prevent electrical hazards and structural damage.</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-4">
                                                        <div className="warning-sign p-4" style={{backgroundColor: "#fff", border: "2px solid #E74C3C", borderRadius: "8px", height: "100%"}}>
                                                            <h4><i className="fas fa-water" style={{color: "#E74C3C"}}></i> Ceiling Stains Growing</h4>
                                                            <p className="mb-0">Brown or yellow stains that are expanding indicate active water intrusion that will worsen with the next rain.</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-4">
                                                        <div className="warning-sign p-4" style={{backgroundColor: "#fff", border: "2px solid #E74C3C", borderRadius: "8px", height: "100%"}}>
                                                            <h4><i className="fas fa-wind" style={{color: "#E74C3C"}}></i> Storm Damage</h4>
                                                            <p className="mb-0">Missing shingles, fallen branches, or visible holes after severe weather require immediate weatherproofing.</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-4">
                                                        <div className="warning-sign p-4" style={{backgroundColor: "#fff", border: "2px solid #E74C3C", borderRadius: "8px", height: "100%"}}>
                                                            <h4><i className="fas fa-home" style={{color: "#E74C3C"}}></i> Sagging Ceiling</h4>
                                                            <p className="mb-0">A bulging or sagging ceiling indicates water accumulation that could collapse—evacuate the area and call immediately.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="services-process-wrap">
                                                <h2 className="title">Our Emergency Response Process</h2>
                                                <div className="row justify-content-center mt-4">
                                                    <div className="col-lg-12">
                                                        <div className="services-process-content">
                                                            <ul className="list-wrap">
                                                                <li>
                                                                    <div className="services-process-item">
                                                                        <div className="icon">
                                                                            <span style={{fontSize: "24px", fontWeight: "bold", color: "#E74C3C"}}>1</span>
                                                                        </div>
                                                                        <div className="content">
                                                                            <h4 className="title">Immediate Phone Assessment (5 minutes)</h4>
                                                                            <p>When you call, we'll ask key questions to understand the severity and dispatch the right team with proper materials. We'll also provide immediate tips to minimize damage while we're en route.</p>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="services-process-item">
                                                                        <div className="icon">
                                                                            <span style={{fontSize: "24px", fontWeight: "bold", color: "#E74C3C"}}>2</span>
                                                                        </div>
                                                                        <div className="content">
                                                                            <h4 className="title">Rapid On-Site Response (2-4 hours)</h4>
                                                                            <p>Our emergency crew arrives with tarps, sealants, and equipment to stop water intrusion immediately. We'll secure the area and prevent further damage to your home's interior.</p>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="services-process-item">
                                                                        <div className="icon">
                                                                            <span style={{fontSize: "24px", fontWeight: "bold", color: "#E74C3C"}}>3</span>
                                                                        </div>
                                                                        <div className="content">
                                                                            <h4 className="title">Permanent Solution Planning (Same day)</h4>
                                                                            <p>Once the immediate threat is addressed, we'll thoroughly inspect to find the root cause and provide a detailed plan for permanent repairs, including costs and timeline.</p>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="what-to-do-section mt-5 mb-5 p-4" style={{backgroundColor: "#f8f9fa", borderRadius: "10px"}}>
                                                <h2 className="title-two text-center mb-4">What to Do While Waiting for Help</h2>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <h4><i className="fas fa-shield-alt" style={{color: "#E74C3C"}}></i> Protect Your Home:</h4>
                                                        <ul className="mb-4">
                                                            <li>Place buckets or tarps to catch dripping water</li>
                                                            <li>Move furniture and valuables away from leak</li>
                                                            <li>Turn off electricity to affected areas if safe</li>
                                                            <li>Take photos for insurance documentation</li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <h4><i className="fas fa-exclamation-circle" style={{color: "#E74C3C"}}></i> Safety First:</h4>
                                                        <ul>
                                                            <li>Never go on the roof during a storm</li>
                                                            <li>Avoid standing water near electrical outlets</li>
                                                            <li>Watch for sagging ceilings that could collapse</li>
                                                            <li>Keep family members away from affected areas</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="cost-section mt-5 mb-5">
                                                <h2 className="title-two">Emergency Repair Costs & Insurance</h2>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="cost-info p-4" style={{backgroundColor: "#fff", border: "1px solid #e0e0e0", borderRadius: "8px", height: "100%"}}>
                                                            <h4>Typical Emergency Service Costs:</h4>
                                                            <ul className="mt-3">
                                                                <li><strong>Emergency Tarp Installation:</strong> $200-$500</li>
                                                                <li><strong>Minor Leak Repair:</strong> $300-$800</li>
                                                                <li><strong>Major Storm Damage:</strong> $1,000-$3,000+</li>
                                                                <li><strong>After-Hours Service:</strong> No extra charge</li>
                                                            </ul>
                                                            <p className="mt-3 mb-0"><em>*Final costs depend on damage extent</em></p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="insurance-info p-4" style={{backgroundColor: "#E8F5E9", border: "1px solid #C8E6C9", borderRadius: "8px", height: "100%"}}>
                                                            <h4><i className="fas fa-file-invoice-dollar"></i> Insurance Coverage</h4>
                                                            <p className="mt-3"><strong>Good news:</strong> Most homeowner's insurance covers emergency roof repairs from:</p>
                                                            <ul>
                                                                <li>Storm and wind damage</li>
                                                                <li>Falling trees or branches</li>
                                                                <li>Hail damage</li>
                                                                <li>Sudden accidental damage</li>
                                                            </ul>
                                                            <p className="mb-0"><strong>We'll document everything and work directly with your insurance company!</strong></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="trust-indicators mt-5 mb-5 text-center">
                                                <div className="rating-badge d-inline-block p-3" style={{backgroundColor: "#f8f9fa", borderRadius: "10px"}}>
                                                    <h3 className="mb-3">Why Pittsburgh Trusts Us for Emergency Repairs</h3>
                                                    <div className="row">
                                                        <div className="col-md-3 col-6 mb-3">
                                                            <h4 style={{color: "#E74C3C"}}>2-4 Hours</h4>
                                                            <p className="mb-0">Average Response</p>
                                                        </div>
                                                        <div className="col-md-3 col-6 mb-3">
                                                            <h4 style={{color: "#E74C3C"}}>24/7/365</h4>
                                                            <p className="mb-0">Always Available</p>
                                                        </div>
                                                        <div className="col-md-3 col-6 mb-3">
                                                            <h4 style={{color: "#E74C3C"}}>28+ Years</h4>
                                                            <p className="mb-0">Local Experience</p>
                                                        </div>
                                                        <div className="col-md-3 col-6 mb-3">
                                                            <h4 style={{color: "#E74C3C"}}>5 Stars</h4>
                                                            <p className="mb-0">Customer Rating</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="guarantee-section mt-5 text-center p-4" style={{backgroundColor: "#E74C3C", color: "white", borderRadius: "10px"}}>
                                                <h3 className="mb-3">No-Risk Emergency Service Guarantee</h3>
                                                <p className="lead mb-3" style={{color:'white'}}>If we can't stop your leak, you don't pay for the service call.</p>
                                                <p className="mb-0" style={{color:'white'}}>That's our promise—because when you're dealing with an emergency, the last thing you need is added stress.</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-4 col-lg-6">
                                    <aside className="services-sidebar">
                                        <div className="services-widget" style={{
                                            backgroundImage: "url('/assets/img/services/roofing.jpg')",
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                            position: "relative",
                                            padding: "0",
                                            borderRadius: "10px",
                                            overflow: "hidden"
                                        }}>
                                            <div style={{
                                                backgroundColor: "rgba(68, 61, 60, 0.9)",
                                                padding: "30px 20px",
                                                height: "100%"
                                            }}>
                                                <h4 className="widget-title text-center" style={{color: "white", fontSize: "28px", fontWeight: "bold", marginBottom: "20px"}}>
                                                    <i className="fas fa-exclamation-triangle"></i> ROOF EMERGENCY?
                                                </h4>
                                                <div className="emergency-cta text-center">
                                                    <div style={{
                                                        backgroundColor: "rgba(60, 48, 48, 0.15)",
                                                        padding: "20px",
                                                        borderRadius: "8px",
                                                        marginBottom: "20px"
                                                    }}>
                                                        <h2 style={{color: "white", margin: "0", fontSize: "32px"}}>
                                                            <i className="fas fa-phone-alt"></i> (412) 219-7279
                                                        </h2>
                                                    </div>
                                                    <p className="mb-3" style={{fontSize: "18px", fontWeight: "500", color:'white'}}>Don't let damage get worse!</p>
                                                    <a href="tel:4122197279" className="btn btn-light btn-lg w-100" style={{fontWeight: "bold"}}>
                                                        <i className="fas fa-phone-alt"></i> Call Now for Help
                                                    </a>
                                                    <p className="mt-3 mb-0" style={{fontSize: "16px", color:'white'}}>
                                                        <i className="fas fa-clock"></i> Average response: 2-4 hours
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="services-widget">
                                            <h4 className="widget-title">Other Roofing Services</h4>
                                            <div className="our-services-list">
                                                <ul className="list-wrap">
                                                    <li><Link href="/services/roofing">Complete Roof Replacement<i className="fas fa-arrow-right" /></Link></li>
                                                    <li><Link href="/services/roofing/storm-damage-assessment">Storm Damage Assessment<i className="fas fa-arrow-right" /></Link></li>
                                                    <li><Link href="/services/roofing/preventive-maintenance">Preventive Maintenance<i className="fas fa-arrow-right" /></Link></li>
                                                    <li><Link href="/services/roofing/insurance-claim-help">Insurance Claim Help<i className="fas fa-arrow-right" /></Link></li>
                                                    <li><Link href="/services/roofing/gutter-protection">Gutter Protection<i className="fas fa-arrow-right" /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        
                                        <div className="services-widget">
                                            <h4 className="widget-title">Service Areas</h4>
                                            <div className="service-areas">
                                                <p>Emergency response available 24/7 in:</p>
                                                <ul className="list-wrap">
                                                    <li><i className="fas fa-map-marker-alt"></i> Pittsburgh</li>
                                                    <li><i className="fas fa-map-marker-alt"></i> Robinson Township</li>
                                                    <li><i className="fas fa-map-marker-alt"></i> Upper St. Clair</li>
                                                    <li><i className="fas fa-map-marker-alt"></i> Mt. Lebanon</li>
                                                    <li><i className="fas fa-map-marker-alt"></i> Bethel Park</li>
                                                    <li><i className="fas fa-map-marker-alt"></i> Moon Township</li>
                                                    <li><i className="fas fa-map-marker-alt"></i> Cranberry Township</li>
                                                    <li><i className="fas fa-map-marker-alt"></i> Sewickley</li>
                                                </ul>
                                                <p className="mt-3 mb-0"><strong>Don't see your area?</strong> Call anyway—we'll do our best to help!</p>
                                            </div>
                                        </div>
                                    </aside>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                    <div className="cta-area mt-60" style={{display:"flex", flexDirection:'column'}} >
                        <h2 className="title text-center">Need Emergency Roof Repair? We're Ready to Help!</h2>
                        <p className="text-center" style={{paddingBottom:"20px"}}><strong>For immediate assistance, call (412) 219-7279</strong></p>
                        <p className="text-center mb-4">For non-emergency repairs or to schedule a roof inspection, complete the form below:</p>
                        <div id="contact-form">
                            <MainContact/>
                        </div>
                    </div>
                    
                    <Brand3 />
                </div>
            </Layout>
        </>
    )
}

export async function getStaticProps() {
    return {
        props: {
            metaTitle: "24/7 Emergency Roof Leak Repair Pittsburgh | Kletz Contracting",
            metaDescription: "Roof leaking? Get emergency repair in 2-4 hours. Available 24/7 for urgent roof leaks, storm damage, and water intrusion. Call (412) 219-7279 now!",
            canonicalUrl: "https://www.kletzcontracting.com/services/roofing/emergency-leak-repair",
            serviceSchema: {
                "@context": "https://schema.org",
                "@type": "Service",
                "name": "Emergency Roof Leak Repair",
                "serviceType": "Emergency Roofing Services",
                "provider": {
                    "@type": "RoofingContractor",
                    "name": "Kletz Contracting",
                    "url": "https://kletzcontracting.com",
                    "telephone": "+14122197279",
                    "priceRange": "$$"
                },
                "areaServed": [
                    {
                        "@type": "City",
                        "name": "Pittsburgh"
                    },
                    {
                        "@type": "City",
                        "name": "Robinson Township"
                    },
                    {
                        "@type": "City",
                        "name": "Upper St. Clair"
                    },
                    {
                        "@type": "City",
                        "name": "Mt. Lebanon"
                    },
                    {
                        "@type": "City",
                        "name": "Bethel Park"
                    },
                    {
                        "@type": "City",
                        "name": "Moon Township"
                    },
                    {
                        "@type": "City",
                        "name": "Cranberry Township"
                    },
                    {
                        "@type": "City",
                        "name": "Sewickley"
                    }
                ],
                "description": "24/7 emergency roof leak repair services in Pittsburgh. Fast response times, insurance assistance, and guaranteed work to stop water damage immediately.",
                "hoursAvailable": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": [
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday",
                        "Saturday",
                        "Sunday"
                    ],
                    "opens": "00:00",
                    "closes": "23:59"
                },
                "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Emergency Roofing Services",
                    "itemListElement": [
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Emergency Leak Repair",
                                "description": "Immediate response to stop active roof leaks"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Emergency Tarp Installation",
                                "description": "Temporary weatherproofing to prevent further damage"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Storm Damage Response",
                                "description": "Rapid repair of storm-related roof damage"
                            }
                        }
                    ]
                }
            }
        },
    };
}