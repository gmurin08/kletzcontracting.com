import Layout from "@/components/layout/Layout"
import PageHead from "@/components/layout/PageHead"
import LocalBusinessSchema from "@/components/LocalBusinessSchema"
import Brand3 from "@/components/sections/Brand3"
import DumpsterBookingCTA, { KD_BOOK } from "@/components/sections/DumpsterBookingCTA"
import Link from "next/link"

export default function ConstructionDebrisRemoval() {
    return (
        <>
            <PageHead 
                headTitle="Construction Debris Removal Pittsburgh | Dumpster Rental for Contractors | Kletz Contracting"
                metaDescription="Construction dumpster rental in Pittsburgh. Perfect for contractors, renovators, and DIYers. Same-day delivery, contractor-friendly pricing, and flexible rental periods."
                canonicalUrl="https://kletzcontracting.com/services/dumpster-service/construction-debris-removal"
                keywords="construction debris removal Pittsburgh, contractor dumpster rental, construction waste disposal, building material disposal Pittsburgh, renovation debris removal, demolition dumpster rental"
            />
            <LocalBusinessSchema />
            
            <Layout breadcrumbTitle="Construction Debris Removal">
                <div>
                    <section className="services-details-area pt-120">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-8">
                                    <div className="services-details-wrap">
                                        <div className="services-details-thumb">
                                            <img src="/assets/img/services/dumpster.jpg" alt="Construction Debris Removal Pittsburgh" />
                                        </div>
                                        <div className="services-details-content">
                                            <h2 className="title">Construction Debris Removal That Works Around Your Schedule</h2>
                                            <p className="lead"><strong>Got a job site full of debris? We get it—you need it gone fast so you can keep working.</strong></p>
                                            <p>Whether you're a professional contractor or weekend warrior, construction debris can bring your project to a halt. Our contractor-friendly dumpster service is designed for the realities of construction work: unpredictable schedules, varying debris types, and the need for reliable, fast service.</p>
                                            
                                            <div className="value-props mt-4 mb-4">
                                                <div className="row">
                                                    <div className="col-md-4 text-center mb-3">
                                                        <i className="fas fa-truck-loading fa-3x mb-3" style={{color: "#E74C3C"}}></i>
                                                        <h5>Same-Day Delivery</h5>
                                                        <p className="small">Order by 3pm, get it today</p>
                                                    </div>
                                                    <div className="col-md-4 text-center mb-3">
                                                        <i className="fas fa-hard-hat fa-3x mb-3" style={{color: "#E74C3C"}}></i>
                                                        <h5>Contractor Accounts</h5>
                                                        <p className="small">Net 30 terms available</p>
                                                    </div>
                                                    <div className="col-md-4 text-center mb-3">
                                                        <i className="fas fa-recycle fa-3x mb-3" style={{color: "#E74C3C"}}></i>
                                                        <h5>We Sort & Recycle</h5>
                                                        <p className="small">Eco-friendly disposal</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="acceptable-materials mt-5 mb-5 p-4" style={{backgroundColor: "#f8f9fa", borderRadius: "10px"}}>
                                                <h2 className="title-two text-center mb-4">What We Accept (Almost Everything!)</h2>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <h4 className="mb-3"><i className="fas fa-check-circle" style={{color: "#28a745"}}></i> Common Construction Debris</h4>
                                                        <ul className="list-unstyled">
                                                            <li className="mb-2">✓ Drywall and sheetrock</li>
                                                            <li className="mb-2">✓ Lumber and wood scraps</li>
                                                            <li className="mb-2">✓ Shingles and roofing materials</li>
                                                            <li className="mb-2">✓ Concrete and brick (small amounts)</li>
                                                            <li className="mb-2">✓ Siding and trim</li>
                                                            <li className="mb-2">✓ Flooring materials</li>
                                                            <li className="mb-2">✓ Insulation</li>
                                                            <li className="mb-2">✓ Windows and doors</li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <h4 className="mb-3"><i className="fas fa-check-circle" style={{color: "#28a745"}}></i> Renovation Waste</h4>
                                                        <ul className="list-unstyled">
                                                            <li className="mb-2">✓ Kitchen cabinets</li>
                                                            <li className="mb-2">✓ Bathroom fixtures</li>
                                                            <li className="mb-2">✓ Carpet and padding</li>
                                                            <li className="mb-2">✓ Tiles and ceramics</li>
                                                            <li className="mb-2">✓ Plumbing fixtures</li>
                                                            <li className="mb-2">✓ Light fixtures</li>
                                                            <li className="mb-2">✓ Deck materials</li>
                                                            <li className="mb-2">✓ Fencing</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="alert alert-warning mt-4" role="alert">
                                                    <h5><i className="fas fa-exclamation-triangle"></i> Special Handling Required:</h5>
                                                    <p className="mb-0">Hazardous materials (paint, chemicals, asbestos), tires, and appliances with freon need special disposal. Call us—we can help arrange proper disposal.</p>
                                                </div>
                                            </div>

                                            <div className="contractor-benefits mt-5 mb-5">
                                                <h2 className="title-two">Why Contractors Choose Our Service</h2>
                                                <div className="row mt-4">
                                                    <div className="col-md-6 mb-4">
                                                        <div className="benefit-card p-4" style={{backgroundColor: "#fff", border: "1px solid #e0e0e0", borderRadius: "8px", height: "100%"}}>
                                                            <h4><i className="fas fa-calendar-alt" style={{color: "#E74C3C"}}></i> Flexible Scheduling</h4>
                                                            <p className="mb-2">Job delayed? No problem. We work with your timeline, not against it. Easy rescheduling with no penalties.</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-4">
                                                        <div className="benefit-card p-4" style={{backgroundColor: "#fff", border: "1px solid #e0e0e0", borderRadius: "8px", height: "100%"}}>
                                                            <h4><i className="fas fa-exchange-alt" style={{color: "#E74C3C"}}></i> Swap Service</h4>
                                                            <p className="mb-2">Dumpster full? We'll swap it for an empty one same-day. Keep your project moving without delays.</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-4">
                                                        <div className="benefit-card p-4" style={{backgroundColor: "#fff", border: "1px solid #e0e0e0", borderRadius: "8px", height: "100%"}}>
                                                            <h4><i className="fas fa-shield-alt" style={{color: "#E74C3C"}}></i> Site Protection</h4>
                                                            <p className="mb-2">We always use driveway protection boards. Your client's property stays damage-free, protecting your reputation.</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-4">
                                                        <div className="benefit-card p-4" style={{backgroundColor: "#fff", border: "1px solid #e0e0e0", borderRadius: "8px", height: "100%"}}>
                                                            <h4><i className="fas fa-file-invoice-dollar" style={{color: "#E74C3C"}}></i> Simple Billing</h4>
                                                            <p className="mb-2">One invoice, all costs included. No weight fees or surprises. Net 30 terms for established contractors.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="weight-limits-section mt-5 mb-5 p-4" style={{backgroundColor: "#E8F5E9", borderRadius: "10px"}}>
                                                <h3 className="text-center mb-4">Smart Tips for Heavy Debris</h3>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <h5><i className="fas fa-weight-hanging"></i> Heavy Materials Strategy:</h5>
                                                        <ul>
                                                            <li>Mix heavy items (concrete, dirt) with lighter debris</li>
                                                            <li>Consider a concrete-only load for big demo jobs</li>
                                                            <li>Ask about our heavy debris discount pricing</li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <h5><i className="fas fa-lightbulb"></i> Pro Loading Tips:</h5>
                                                        <ul>
                                                            <li>Break down materials to maximize space</li>
                                                            <li>Load evenly to prevent shifting</li>
                                                            <li>Keep it level with the top (road legal)</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="pricing-section mt-5 mb-5 p-4" style={{backgroundColor: "#f8f9fa", borderRadius: "10px"}}>
                                                <h2 className="title text-center mb-4">Construction Dumpster Pricing</h2>
                                                <div className="row">
                                                    <div className="col-md-6 mb-4">
                                                        <div className="pricing-card p-4 text-center" style={{backgroundColor: "#fff", border: "2px solid #E74C3C", borderRadius: "8px", height: "100%"}}>
                                                            <h3>12-Yard Dumpster</h3>
                                                            <div className="price-display my-3">
                                                                <h2 style={{color: "#E74C3C"}}>$349</h2>
                                                                <p className="text-muted">Flat rate - no weight fees!</p>
                                                            </div>
                                                            <ul className="list-unstyled text-left">
                                                                <li className="mb-2"><i className="fas fa-check" style={{color: "#28a745"}}></i> Perfect for bathroom/kitchen remodels</li>
                                                                <li className="mb-2"><i className="fas fa-check" style={{color: "#28a745"}}></i> Holds 70-80 sheets of drywall</li>
                                                                <li className="mb-2"><i className="fas fa-check" style={{color: "#28a745"}}></i> Up to 2 tons included</li>
                                                                <li className="mb-2"><i className="fas fa-check" style={{color: "#28a745"}}></i> 7-day rental included</li>
                                                            </ul>
                                                            <a href={KD_BOOK} target="_blank" rel="noopener noreferrer" className="btn btn-danger btn-block">Book 12-Yard</a>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-4">
                                                        <div className="pricing-card p-4 text-center" style={{backgroundColor: "#fff", border: "2px solid #E74C3C", borderRadius: "8px", height: "100%"}}>
                                                            <h3>15-Yard Dumpster</h3>
                                                            <div className="price-display my-3">
                                                                <h2 style={{color: "#E74C3C"}}>$399</h2>
                                                                <p className="text-muted">Most popular for construction</p>
                                                            </div>
                                                            <ul className="list-unstyled text-left">
                                                                <li className="mb-2"><i className="fas fa-check" style={{color: "#28a745"}}></i> Ideal for whole-home renovations</li>
                                                                <li className="mb-2"><i className="fas fa-check" style={{color: "#28a745"}}></i> Holds 100+ sheets of drywall</li>
                                                                <li className="mb-2"><i className="fas fa-check" style={{color: "#28a745"}}></i> Up to 3 tons included</li>
                                                                <li className="mb-2"><i className="fas fa-check" style={{color: "#28a745"}}></i> Extended rentals available</li>
                                                            </ul>
                                                            <a href={KD_BOOK} target="_blank" rel="noopener noreferrer" className="btn btn-danger btn-block">Book 15-Yard</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="text-center mt-4">
                                                    <p><strong>Volume Discounts:</strong> Need multiple dumpsters? Save 10% on 3+ rentals.</p>
                                                    <p className="mb-0"><strong>Contractor Accounts:</strong> Net 30 terms • Priority delivery • Dedicated support</p>
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
                                                    <h3 className="mb-2">Trusted by Pittsburgh Contractors Since 1996</h3>
                                                    <p className="mb-0">Join hundreds of contractors who rely on us for every job</p>
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
                                                <h4 className="widget-title text-center" style={{color: "white", fontSize: "28px", fontWeight: "bold", marginBottom: "20px"}}>
                                                    <i className="fas fa-phone-alt"></i> Contractor Hotline
                                                </h4>
                                                <div className="contractor-cta text-center">
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
                                                    <p className="mb-3" style={{fontSize: "18px", fontWeight: "500", color:'white'}}>Same-day delivery available!</p>
                                                    <a href="tel:4122197279" className="btn btn-light btn-lg w-100" style={{fontWeight: "bold"}}>
                                                        <i className="fas fa-phone-alt"></i> Call for Instant Quote
                                                    </a>
                                                    <p className="mt-3 mb-0" style={{fontSize: "16px", color:'white'}}>
                                                        Ask about contractor accounts
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="services-widget">
                                            <h4 className="widget-title">Quick Links</h4>
                                            <div className="our-services-list">
                                                <ul className="list-wrap">
                                                    <li><Link href="/services/dumpster-service">All Dumpster Services<i className="fas fa-arrow-right" /></Link></li>
                                                    <li><Link href="/services/dumpster-service/bulk-cleanouts">Bulk Cleanouts<i className="fas fa-arrow-right" /></Link></li>
                                                    <li><Link href="#booking-form">Book a Dumpster<i className="fas fa-arrow-right" /></Link></li>
                                                    <li><Link href="/services/roofing">Roofing Services<i className="fas fa-arrow-right" /></Link></li>
                                                    <li><Link href="/services/remodeling">Remodeling Services<i className="fas fa-arrow-right" /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        
                                        <div className="services-widget">
                                            <h4 className="widget-title">Service Areas</h4>
                                            <div className="service-areas">
                                                <p>Fast delivery to all Pittsburgh job sites:</p>
                                                <ul className="list-wrap">
                                                    <li><i className="fas fa-map-marker-alt"></i> Pittsburgh</li>
                                                    <li><i className="fas fa-map-marker-alt"></i> Robinson Township</li>
                                                    <li><i className="fas fa-map-marker-alt"></i> Moon Township</li>
                                                    <li><i className="fas fa-map-marker-alt"></i> Cranberry Township</li>
                                                    <li><i className="fas fa-map-marker-alt"></i> Upper St. Clair</li>
                                                    <li><i className="fas fa-map-marker-alt"></i> Mt. Lebanon</li>
                                                    <li><i className="fas fa-map-marker-alt"></i> Bethel Park</li>
                                                    <li><i className="fas fa-map-marker-alt"></i> Peters Township</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </aside>
                                </div>
                            </div>
                        </div>
                    </section>

                    <DumpsterBookingCTA
                        title="Book Your Construction Dumpster Now"
                        description="Quick online booking through Kletz Dumpsters, our dedicated roll-off division. Same-day delivery available and contractor-friendly rental terms."
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