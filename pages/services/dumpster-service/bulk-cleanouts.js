import Layout from "@/components/layout/Layout"
import PageHead from "@/components/layout/PageHead"
import LocalBusinessSchema from "@/components/LocalBusinessSchema"
import Brand3 from "@/components/sections/Brand3"
import DumpsterBookingCTA, { KD_BOOK } from "@/components/sections/DumpsterBookingCTA"
import Link from "next/link"

export default function BulkCleanouts() {
    return (
        <>
            <PageHead 
                headTitle="Bulk Cleanout Services Pittsburgh | Estate & Hoarding Cleanouts | Kletz Contracting"
                metaDescription="Compassionate bulk cleanout services in Pittsburgh. Estate cleanouts, hoarding situations, downsizing, and major decluttering. Same-day service, respectful handling."
                canonicalUrl="https://kletzcontracting.com/services/dumpster-service/bulk-cleanouts"
                keywords="bulk cleanout Pittsburgh, estate cleanout services, hoarding cleanup Pittsburgh, downsizing services, property cleanout, junk removal Pittsburgh"
            />
            <LocalBusinessSchema />
            
            <Layout breadcrumbTitle="Bulk Cleanout Services">
                <div>
                    <section className="services-details-area pt-120">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-8">
                                    <div className="services-details-wrap">
                                        <div className="services-details-thumb">
                                            <img src="/assets/img/services/dumpster.jpg" alt="Bulk Cleanout Services Pittsburgh" />
                                        </div>
                                        <div className="services-details-content">
                                            <h2 className="title">Compassionate Cleanout Services When Life Changes</h2>
                                            <p className="lead"><strong>Whether you're settling an estate, helping a loved one, or reclaiming your space—we understand this isn't just about trash removal.</strong></p>
                                            <p>Major cleanouts are often emotional and overwhelming. That's why we approach every situation with respect, patience, and understanding. Our experienced team has helped hundreds of Pittsburgh families through difficult transitions, always treating your property and belongings with care.</p>
                                            
                                            <div className="value-props mt-4 mb-4">
                                                <div className="row">
                                                    <div className="col-md-4 text-center mb-3">
                                                        <i className="fas fa-heart fa-3x mb-3" style={{color: "#E74C3C"}}></i>
                                                        <h5>Respectful Service</h5>
                                                        <p className="small">We understand these are difficult times</p>
                                                    </div>
                                                    <div className="col-md-4 text-center mb-3">
                                                        <i className="fas fa-hands-helping fa-3x mb-3" style={{color: "#E74C3C"}}></i>
                                                        <h5>We Can Help Sort</h5>
                                                        <p className="small">Donate, keep, or dispose guidance</p>
                                                    </div>
                                                    <div className="col-md-4 text-center mb-3">
                                                        <i className="fas fa-shield-alt fa-3x mb-3" style={{color: "#E74C3C"}}></i>
                                                        <h5>Discreet & Private</h5>
                                                        <p className="small">Your situation stays confidential</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="cleanout-situations mt-5 mb-5">
                                                <h2 className="title-two text-center mb-4">We Help With All Types of Cleanouts</h2>
                                                <div className="row">
                                                    <div className="col-md-6 mb-4">
                                                        <div className="situation-card p-4" style={{backgroundColor: "#f8f9fa", borderRadius: "8px", height: "100%"}}>
                                                            <h4><i className="fas fa-home" style={{color: "#E74C3C"}}></i> Estate Cleanouts</h4>
                                                            <p>Settling an estate is hard enough without worrying about the physical cleanup. We work respectfully and efficiently, understanding that every item might hold memories.</p>
                                                            <ul className="list-unstyled mt-3">
                                                                <li className="mb-2">✓ Work with estate attorneys & realtors</li>
                                                                <li className="mb-2">✓ Flexible scheduling around family needs</li>
                                                                <li className="mb-2">✓ Can coordinate donation pickups</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-4">
                                                        <div className="situation-card p-4" style={{backgroundColor: "#f8f9fa", borderRadius: "8px", height: "100%"}}>
                                                            <h4><i className="fas fa-box-open" style={{color: "#E74C3C"}}></i> Hoarding Situations</h4>
                                                            <p>No judgment, just help. We've assisted many families dealing with hoarding situations, always maintaining dignity and privacy throughout the process.</p>
                                                            <ul className="list-unstyled mt-3">
                                                                <li className="mb-2">✓ Experienced with sensitive situations</li>
                                                                <li className="mb-2">✓ Can work in stages for comfort</li>
                                                                <li className="mb-2">✓ Discrete, unmarked dumpsters available</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-4">
                                                        <div className="situation-card p-4" style={{backgroundColor: "#f8f9fa", borderRadius: "8px", height: "100%"}}>
                                                            <h4><i className="fas fa-truck-moving" style={{color: "#E74C3C"}}></i> Downsizing & Moving</h4>
                                                            <p>Moving to a smaller home or senior living? We make the transition easier by handling all the items that won't make the move with you.</p>
                                                            <ul className="list-unstyled mt-3">
                                                                <li className="mb-2">✓ Perfect timing with your move</li>
                                                                <li className="mb-2">✓ Help identify donation items</li>
                                                                <li className="mb-2">✓ Leave property move-in ready</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-4">
                                                        <div className="situation-card p-4" style={{backgroundColor: "#f8f9fa", borderRadius: "8px", height: "100%"}}>
                                                            <h4><i className="fas fa-broom" style={{color: "#E74C3C"}}></i> Property Cleanouts</h4>
                                                            <p>Preparing a rental property or clearing out after tenants? We'll help you get it market-ready fast with thorough cleanout service.</p>
                                                            <ul className="list-unstyled mt-3">
                                                                <li className="mb-2">✓ Fast turnaround for landlords</li>
                                                                <li className="mb-2">✓ Handle abandoned belongings</li>
                                                                <li className="mb-2">✓ Multiple units? Volume discounts</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="how-we-help-section mt-5 mb-5 p-4" style={{backgroundColor: "#E8F5E9", borderRadius: "10px"}}>
                                                <h2 className="title-two text-center mb-4">How We Make Cleanouts Easier</h2>
                                                <div className="row">
                                                    <div className="col-md-4 mb-3">
                                                        <div className="help-item text-center">
                                                            <i className="fas fa-calendar-check fa-3x mb-3" style={{color: "#E74C3C"}}></i>
                                                            <h5>Flexible Timing</h5>
                                                            <p>Keep the dumpster as long as needed. No rush—work at your own pace.</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 mb-3">
                                                        <div className="help-item text-center">
                                                            <i className="fas fa-users fa-3x mb-3" style={{color: "#E74C3C"}}></i>
                                                            <h5>Extra Hands Available</h5>
                                                            <p>Need help moving heavy items? We can arrange labor assistance.</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 mb-3">
                                                        <div className="help-item text-center">
                                                            <i className="fas fa-hand-holding-heart fa-3x mb-3" style={{color: "#E74C3C"}}></i>
                                                            <h5>Donation Coordination</h5>
                                                            <p>We'll help arrange charity pickups for items that can be donated.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="what-we-take-section mt-5 mb-5">
                                                <h2 className="title-two">What We Can Take</h2>
                                                <div className="row mt-4">
                                                    <div className="col-md-6">
                                                        <h4 className="mb-3"><i className="fas fa-check-circle" style={{color: "#28a745"}}></i> Household Items</h4>
                                                        <ul className="list-unstyled">
                                                            <li className="mb-2">✓ Furniture (sofas, beds, tables, chairs)</li>
                                                            <li className="mb-2">✓ Appliances (refrigerators, washers, stoves)</li>
                                                            <li className="mb-2">✓ Electronics (TVs, computers, printers)</li>
                                                            <li className="mb-2">✓ Clothing and textiles</li>
                                                            <li className="mb-2">✓ Books, papers, and documents</li>
                                                            <li className="mb-2">✓ Kitchen items and dishware</li>
                                                            <li className="mb-2">✓ Decorations and artwork</li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <h4 className="mb-3"><i className="fas fa-check-circle" style={{color: "#28a745"}}></i> Outdoor/Garage Items</h4>
                                                        <ul className="list-unstyled">
                                                            <li className="mb-2">✓ Lawn equipment and tools</li>
                                                            <li className="mb-2">✓ Outdoor furniture</li>
                                                            <li className="mb-2">✓ Sports equipment</li>
                                                            <li className="mb-2">✓ Holiday decorations</li>
                                                            <li className="mb-2">✓ Paint cans (dried out)</li>
                                                            <li className="mb-2">✓ Boxes and storage containers</li>
                                                            <li className="mb-2">✓ General garage clutter</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="alert alert-info mt-4" role="alert">
                                                    <h5><i className="fas fa-info-circle"></i> Special Items:</h5>
                                                    <p className="mb-0">For hazardous materials, medications, or items requiring special disposal, we'll guide you to the proper disposal methods and facilities.</p>
                                                </div>
                                            </div>

                                            <div className="pricing-section mt-5 mb-5 p-4" style={{backgroundColor: "#f8f9fa", borderRadius: "10px"}}>
                                                <h2 className="title text-center mb-4">Simple, Compassionate Pricing</h2>
                                                <div className="row">
                                                    <div className="col-md-6 mb-4">
                                                        <div className="pricing-card p-4 text-center" style={{backgroundColor: "#fff", border: "2px solid #E74C3C", borderRadius: "8px", height: "100%"}}>
                                                            <h3>12-Yard Dumpster</h3>
                                                            <div className="price-display my-3">
                                                                <h2 style={{color: "#E74C3C"}}>$349</h2>
                                                                <p className="text-muted">Perfect for single rooms</p>
                                                            </div>
                                                            <ul className="list-unstyled text-left">
                                                                <li className="mb-2"><i className="fas fa-check" style={{color: "#28a745"}}></i> Ideal for 1-2 room cleanouts</li>
                                                                <li className="mb-2"><i className="fas fa-check" style={{color: "#28a745"}}></i> Garage or basement clearing</li>
                                                                <li className="mb-2"><i className="fas fa-check" style={{color: "#28a745"}}></i> Small apartment cleanout</li>
                                                                <li className="mb-2"><i className="fas fa-check" style={{color: "#28a745"}}></i> Keep up to 7 days</li>
                                                            </ul>
                                                            <a href={KD_BOOK} target="_blank" rel="noopener noreferrer" className="btn btn-danger btn-block">Reserve 12-Yard</a>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-4">
                                                        <div className="pricing-card p-4 text-center" style={{backgroundColor: "#fff", border: "2px solid #E74C3C", borderRadius: "8px", height: "100%"}}>
                                                            <h3>15-Yard Dumpster</h3>
                                                            <div className="price-display my-3">
                                                                <h2 style={{color: "#E74C3C"}}>$399</h2>
                                                                <p className="text-muted">For whole-home cleanouts</p>
                                                            </div>
                                                            <ul className="list-unstyled text-left">
                                                                <li className="mb-2"><i className="fas fa-check" style={{color: "#28a745"}}></i> Full house cleanouts</li>
                                                                <li className="mb-2"><i className="fas fa-check" style={{color: "#28a745"}}></i> Estate settlements</li>
                                                                <li className="mb-2"><i className="fas fa-check" style={{color: "#28a745"}}></i> Major downsizing projects</li>
                                                                <li className="mb-2"><i className="fas fa-check" style={{color: "#28a745"}}></i> Extended rental available</li>
                                                            </ul>
                                                            <a href={KD_BOOK} target="_blank" rel="noopener noreferrer" className="btn btn-danger btn-block">Reserve 15-Yard</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="text-center mt-4">
                                                    <p className="mb-2"><i className="fas fa-heart" style={{color: "#E74C3C"}}></i> <strong>Compassionate Pricing:</strong> We never take advantage during difficult times.</p>
                                                    <p className="mb-0"><strong>Need more time?</strong> Reasonable daily rates for extended rentals.</p>
                                                </div>
                                            </div>

                                            <div className="testimonial-section mt-5 mb-5 p-4" style={{backgroundColor: "#f8f9fa", borderRadius: "10px"}}>
                                                <h3 className="text-center mb-4">What Families Say About Our Service</h3>
                                                <div className="testimonial-item p-4 bg-white mb-3" style={{borderRadius: "8px", borderLeft: "4px solid #E74C3C"}}>
                                                    <p className="mb-3"><em>"After my mother passed, cleaning out her home felt impossible. Kletz treated us with such kindness and respect. They even helped us set aside items for donation. I can't thank them enough."</em></p>
                                                    <p className="mb-0"><strong>- Margaret S., Bethel Park</strong></p>
                                                </div>
                                                <div className="testimonial-item p-4 bg-white mb-3" style={{borderRadius: "8px", borderLeft: "4px solid #E74C3C"}}>
                                                    <p className="mb-3"><em>"Downsizing from our family home of 40 years was emotional. The Kletz team was patient, helpful, and made the process so much easier. Highly recommend."</em></p>
                                                    <p className="mb-0"><strong>- Robert & Linda T., Mt. Lebanon</strong></p>
                                                </div>
                                            </div>

                                            <div className="trust-indicators mt-5 mb-5 text-center">
                                                <div className="rating-badge d-inline-block p-3" style={{backgroundColor: "#f8f9fa", borderRadius: "10px"}}>
                                                    <div className="mb-3">
                                                        <i className="fas fa-star" style={{color: "#FFD700", fontSize: "1.5rem"}}></i>
                                                        <i className="fas fa-star" style={{color: "#FFD700", fontSize: "1.5rem"}}></i>
                                                        <i className="fas fa-star" style={{color: "#FFD700", fontSize: "1.5rem"}}></i>
                                                        <i className="fas fa-star" style={{color: "#FFD700", fontSize: "1.5rem"}}></i>
                                                        <i className="fas fa-star" style={{color: "#FFD700", fontSize: "1.5rem"}}></i>
                                                    </div>
                                                    <h3 className="mb-2">Trusted for Sensitive Situations Since 1996</h3>
                                                    <p className="mb-0">Family-owned • Respectful • Understanding</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-4 col-lg-6">
                                    <aside className="services-sidebar">
                                        <div className="services-widget" style={{
                                            backgroundImage: "url('/assets/img/services/dumpster.jpg')",
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
                                                <h4 className="widget-title text-center" style={{color: "white", fontSize: "24px", fontWeight: "bold", marginBottom: "20px"}}>
                                                    <i className="fas fa-phone-alt"></i> Need Help? We're Here
                                                </h4>
                                                <div className="help-cta text-center">
                                                    <div style={{
                                                        backgroundColor: "rgba(60, 48, 48, 0.15)",
                                                        padding: "20px",
                                                        borderRadius: "8px",
                                                        marginBottom: "20px"
                                                    }}>
                                                        <h2 style={{color: "white", margin: "0", fontSize: "32px"}}>
                                                            (412) 219-7279
                                                        </h2>
                                                    </div>
                                                    <p className="mb-3" style={{fontSize: "16px", color:'white'}}>Compassionate service when you need it most</p>
                                                    <a href="tel:4122197279" className="btn btn-light btn-lg w-100" style={{fontWeight: "bold"}}>
                                                        <i className="fas fa-phone-alt"></i> Call for Free Consultation
                                                    </a>
                                                    <p className="mt-3 mb-0" style={{fontSize: "14px", color:'white'}}>
                                                        No pressure • Just helpful advice
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="services-widget">
                                            <h4 className="widget-title">Helpful Resources</h4>
                                            <div className="our-services-list">
                                                <ul className="list-wrap">
                                                    <li><Link href="#donation-info">Local Donation Centers<i className="fas fa-arrow-right" /></Link></li>
                                                    <li><Link href="#special-disposal">Special Item Disposal Guide<i className="fas fa-arrow-right" /></Link></li>
                                                    <li><Link href="/services/dumpster-service">All Dumpster Services<i className="fas fa-arrow-right" /></Link></li>
                                                    <li><Link href="#booking-form">Book a Dumpster<i className="fas fa-arrow-right" /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        
                                        <div className="services-widget">
                                            <h4 className="widget-title">We Serve All Pittsburgh</h4>
                                            <div className="service-areas">
                                                <p>Providing respectful cleanout services throughout:</p>
                                                <ul className="list-wrap">
                                                    <li><i className="fas fa-map-marker-alt"></i> Pittsburgh</li>
                                                    <li><i className="fas fa-map-marker-alt"></i> Robinson Township</li>
                                                    <li><i className="fas fa-map-marker-alt"></i> Upper St. Clair</li>
                                                    <li><i className="fas fa-map-marker-alt"></i> Mt. Lebanon</li>
                                                    <li><i className="fas fa-map-marker-alt"></i> Bethel Park</li>
                                                    <li><i className="fas fa-map-marker-alt"></i> Moon Township</li>
                                                    <li><i className="fas fa-map-marker-alt"></i> Sewickley</li>
                                                    <li><i className="fas fa-map-marker-alt"></i> All surrounding areas</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </aside>
                                </div>
                            </div>
                        </div>
                    </section>

                    <DumpsterBookingCTA
                        title="Let Us Help You Through This"
                        description="Reserve your dumpster online through Kletz Dumpsters, our dedicated roll-off division. Pick your size, see your exact price, and choose a delivery date — we're here to make this easier."
                    />

                    <Brand3 />
                </div>
            </Layout>
        </>
    )
}

export async function getStaticProps() {
    return {
        props: {},
    };
}