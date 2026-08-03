import Layout from "@/components/layout/Layout"
import LocalBusinessSchema from "@/components/LocalBusinessSchema"
import Brand3 from "@/components/sections/Brand3"
import FaqSection from "@/components/sections/FaqSection"
import FaqSchema from "@/components/FaqSchema"
import DumpsterBookingCTA, { KD_BOOK } from "@/components/sections/DumpsterBookingCTA"
import Link from "next/link"
const finderStyle = {
    outline:'solid red'
}

const processSideImg = {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "center",
        borderRadius: '15px'
};

export default function DumpsterService() {

    return (
        <>
            <LocalBusinessSchema />
            <FaqSchema category={"dumpster"} />
            <Layout
                breadcrumbTitle="Dumpster Rentals"
                headTitle="Dumpster Rental Robinson Township PA | Roll Off Dumpster Service | Kletz Contracting"
                metaDescription="Affordable dumpster rental in Robinson Township and Pittsburgh. 10-20 yard roll off dumpsters for home renovations, construction debris, and cleanouts. Same-day delivery available. Licensed & insured."
                canonicalUrl="https://kletzcontracting.com/services/dumpster-service"
                keywords="dumpster rental Robinson Township PA, roll off dumpster Pittsburgh, construction dumpster rental, 10 yard dumpster Robinson Township, 20 yard dumpster Pittsburgh PA, waste management Robinson Township, debris removal Pittsburgh"
                ogImage="/assets/img/og/dumpster-og.webp"
            >
                <div>
                    <section className="services-details-area pt-120">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-8">
                                    <div className="services-details-wrap" >
                                        <div className="services-details-thumb">
                                            <img src="/assets/img/dumpster-service/roll%20off%20pickup%20angled%20shot%20from%20front%20right.webp" alt="Dumpster Rental" />
                                        </div>
                                        <div className="services-details-content">
                                            <h2 className="title">Get Your Dumpster Delivered Tomorrow—Book in 2 Minutes</h2>
                                            <p className="lead"><strong>Need to clear out debris fast? Skip the hassle of multiple trips to the dump.</strong></p>
                                            <p>We know your time is valuable. That's why we've made dumpster rental as easy as ordering pizza—book online in minutes, we deliver on time, and you only pay what we quote. No hidden fees, no surprises, just a dumpster where you need it, when you need it.</p>
                                            
                                            <div className="value-props mt-4 mb-4">
                                                <div className="row">
                                                    <div className="col-md-4 text-center mb-3">
                                                        <i className="fas fa-clock fa-3x mb-3" style={{color: "#E74C3C"}}></i>
                                                        <h5>Same-Day Booking</h5>
                                                        <p className="small">Order by 3pm for next-day delivery</p>
                                                    </div>
                                                    <div className="col-md-4 text-center mb-3">
                                                        <i className="fas fa-dollar-sign fa-3x mb-3" style={{color: "#E74C3C"}}></i>
                                                        <h5>Flat-Rate Pricing</h5>
                                                        <p className="small">No weight fees or surprises</p>
                                                    </div>
                                                    <div className="col-md-4 text-center mb-3">
                                                        <i className="fas fa-mobile-alt fa-3x mb-3" style={{color: "#E74C3C"}}></i>
                                                        <h5>Text Updates</h5>
                                                        <p className="small">Know exactly when we're coming</p>
                                                    </div>
                                                </div>
                                            </div>

<div className="pricing-section mt-5 mb-5 p-4" style={{backgroundColor: "#f8f9fa", borderRadius: "10px"}}>
    <h2 className="title text-center mb-4">Simple, Transparent Pricing</h2>
    <div className="row">
        <div className="col-md-6 mb-4">
            <div className="pricing-card p-4 text-center" style={{backgroundColor: "#fff", border: "2px solid #E74C3C", borderRadius: "8px", height: "100%"}}>
                <h3>12-Yard Dumpster</h3>
                <div className="price-display my-3">
                    <h2 style={{color: "#E74C3C"}}>$349</h2>
                    <p className="text-muted">All-inclusive price</p>
                </div>
                <ul className="list-unstyled text-left">
                    <li className="mb-2"><i className="fas fa-check" style={{color: "#28a745"}}></i> Perfect for single rooms & garages</li>
                    <li className="mb-2"><i className="fas fa-check" style={{color: "#28a745"}}></i> Holds ~6 pickup truck loads</li>
                    <li className="mb-2"><i className="fas fa-check" style={{color: "#28a745"}}></i> Dimensions: 12' L x 8' W x 4' H</li>
                    <li className="mb-2"><i className="fas fa-check" style={{color: "#28a745"}}></i> Includes 2 tons of debris</li>
                </ul>
                <a href={KD_BOOK} target="_blank" rel="noopener noreferrer" className="btn btn-danger btn-block">Book 12-Yard</a>
            </div>
        </div>
        <div className="col-md-6 mb-4">
            <div className="pricing-card p-4 text-center" style={{backgroundColor: "#fff", border: "2px solid #E74C3C", borderRadius: "8px", height: "100%"}}>
                <h3>15-Yard Dumpster</h3>
                <div className="price-display my-3">
                    <h2 style={{color: "#E74C3C"}}>$399</h2>
                    <p className="text-muted">All-inclusive price</p>
                </div>
                <ul className="list-unstyled text-left">
                    <li className="mb-2"><i className="fas fa-check" style={{color: "#28a745"}}></i> Great for whole-home cleanouts</li>
                    <li className="mb-2"><i className="fas fa-check" style={{color: "#28a745"}}></i> Holds ~8 pickup truck loads</li>
                    <li className="mb-2"><i className="fas fa-check" style={{color: "#28a745"}}></i> Dimensions: 15' L x 8' W x 4.5' H</li>
                    <li className="mb-2"><i className="fas fa-check" style={{color: "#28a745"}}></i> Includes 3 tons of debris</li>
                </ul>
                <a href={KD_BOOK} target="_blank" rel="noopener noreferrer" className="btn btn-danger btn-block">Book 15-Yard</a>
            </div>
        </div>
    </div>
    <div className="text-center mt-4">
        <p className="mb-0"><i className="fas fa-info-circle"></i> <strong>What's Included:</strong> Delivery, pickup, dump fees, and up to 7-day rental. No hidden charges!</p>
    </div>
</div>

                                            <div className="services-process-wrap">
                                                <div className="row justify-content-center">
                                                    <div className="col-lg-6 col-md-8" style={{paddingBottom:'40px', display:'flex', alignItems:'center', justifyContent:'center'}}>
                                                            <div>
                                                            <img style={processSideImg} src="/assets/john/dumptruck.webp" alt="Kletz Contracting branded dumpster delivery truck" />
                                                            </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="services-process-content">
                                                            <h2 className="title">3 Simple Steps to a Clean Property</h2>
                                                            <ul className="list-wrap">
                                                                <li>
                                                                    <div className="services-process-item">
                                                                        <div className="icon">
                                                                            <img src="/assets/img/icon/flat_check.svg" alt="" />
                                                                        </div>
                                                                        <div className="content">
                                                                            <h4 className="title">1. Book in 2 Minutes</h4>
                                                                            <p>Choose your size and date—our simple form takes less time than calling around for quotes. Instant confirmation, no waiting.</p>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="services-process-item">
                                                                        <div className="icon">
                                                                            <img src="/assets/img/icon/flat_check.svg" alt="" />
                                                                        </div>
                                                                        <div className="content">
                                                                            <h4 className="title">2. We Drop It Off</h4>
                                                                            <p>Your dumpster is delivered on time to your location. You don’t even need to be home—we’ll follow your placement notes.</p>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="services-process-item">
                                                                        <div className="icon">
                                                                            <img src="/assets/img/icon/flat_check.svg" alt="" />
                                                                        </div>
                                                                        <div className="content">
                                                                            <h4 className="title">3. Fill It & We're Gone</h4>
                                                                            <p>Take your time filling it up. When you're done, text us for pickup. We handle the dump fees—you're all done!</p>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="common-problems-section mt-5 mb-5">
                                                <h2 className="title-two">Common Dumpster Rental Headaches We Solve</h2>
                                                <div className="row mt-4">
                                                    <div className="col-md-6 mb-4">
                                                        <div className="problem-card p-4" style={{backgroundColor: "#fff", border: "1px solid #e0e0e0", borderRadius: "8px", height: "100%"}}>
                                                            <h4><i className="fas fa-question-circle" style={{color: "#E74C3C"}}></i> "What Size Do I Need?"</h4>
                                                            <p className="mb-2">Our 12-yard fits most home projects (think 6 pickup truck loads). 15-yard for bigger jobs. Still unsure? Text us a photo!</p>
                                                            <p className="text-success mb-0"><strong>✓ Free size consultation</strong></p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-4">
                                                        <div className="problem-card p-4" style={{backgroundColor: "#fff", border: "1px solid #e0e0e0", borderRadius: "8px", height: "100%"}}>
                                                            <h4><i className="fas fa-dollar-sign" style={{color: "#E74C3C"}}></i> Hidden Fees & Surprises</h4>
                                                            <p className="mb-2">Other companies hit you with weight fees, fuel charges, and "environmental fees." Our price is THE price. Period.</p>
                                                            <p className="text-success mb-0"><strong>✓ Flat-rate, all-inclusive pricing</strong></p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-4">
                                                        <div className="problem-card p-4" style={{backgroundColor: "#fff", border: "1px solid #e0e0e0", borderRadius: "8px", height: "100%"}}>
                                                            <h4><i className="fas fa-clock" style={{color: "#E74C3C"}}></i> Unreliable Delivery Times</h4>
                                                            <p className="mb-2">We get it—you've got work to do. We deliver when promised and text you updates. No more waiting around all day.</p>
                                                            <p className="text-success mb-0"><strong>✓ On-time guarantee</strong></p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-4">
                                                        <div className="problem-card p-4" style={{backgroundColor: "#fff", border: "1px solid #e0e0e0", borderRadius: "8px", height: "100%"}}>
                                                            <h4><i className="fas fa-phone-slash" style={{color: "#E74C3C"}}></i> Can't Get Anyone on the Phone</h4>
                                                            <p className="mb-2">Book online 24/7, get instant confirmation, and reach us by text anytime. Real people, real responses.</p>
                                                            <p className="text-success mb-0"><strong>✓ Text us anytime: (412) 219-7279</strong></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <h2 className="title-two">Why Pittsburgh Homeowners Choose Kletz</h2>
                                            <p>We're not the biggest dumpster company—we're the one that actually cares about your experience:</p>

                                            <div className="kletz-difference-section mt-5 mb-5">
                                                <h2 className="title-two text-center mb-4">The Kletz Difference</h2>
                                                <div className="row">
                                                    <div className="col-md-6 mb-4">
                                                        <div className="difference-card p-4" style={{backgroundColor: "#fff", border: "1px solid #e0e0e0", borderRadius: "8px", height: "100%"}}>
                                                            <h4><i className="fas fa-tag" style={{color: "#E74C3C"}}></i> Real Prices Online</h4>
                                                            <p className="mb-0">No games, no "call for pricing." See exactly what you'll pay before you book. Our online prices are our real prices.</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-4">
                                                        <div className="difference-card p-4" style={{backgroundColor: "#fff", border: "1px solid #e0e0e0", borderRadius: "8px", height: "100%"}}>
                                                            <h4><i className="fas fa-shield-alt" style={{color: "#E74C3C"}}></i> Driveway Protection</h4>
                                                            <p className="mb-0">We place protective boards under every dumpster. Your driveway stays crack-free and clean—guaranteed.</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-4">
                                                        <div className="difference-card p-4" style={{backgroundColor: "#fff", border: "1px solid #e0e0e0", borderRadius: "8px", height: "100%"}}>
                                                            <h4><i className="fas fa-calendar-check" style={{color: "#E74C3C"}}></i> Flexible Rental Period</h4>
                                                            <p className="mb-0">Need it longer? No problem. We work with your timeline, not against it. Fair daily rates if you need extra time.</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-4">
                                                        <div className="difference-card p-4" style={{backgroundColor: "#fff", border: "1px solid #e0e0e0", borderRadius: "8px", height: "100%"}}>
                                                            <h4><i className="fas fa-home" style={{color: "#E74C3C"}}></i> Local Family Business</h4>
                                                            <p className="mb-0">When you call or text, you reach us in Pittsburgh—not a call center. We're your neighbors, and we treat you like it.</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-4">
                                                        <div className="difference-card p-4" style={{backgroundColor: "#fff", border: "1px solid #e0e0e0", borderRadius: "8px", height: "100%"}}>
                                                            <h4><i className="fas fa-sparkles" style={{color: "#E74C3C"}}></i> Clean Equipment</h4>
                                                            <p className="mb-0">Our dumpsters are well-maintained and clean. No rust buckets or damaged containers on your property.</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-4">
                                                        <div className="difference-card p-4" style={{backgroundColor: "#fff", border: "1px solid #e0e0e0", borderRadius: "8px", height: "100%"}}>
                                                            <h4><i className="fas fa-star" style={{color: "#E74C3C"}}></i> 5-Star Service</h4>
                                                            <p className="mb-0">Don't take our word for it—check our reviews. We've built our reputation one happy customer at a time since 1996.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="gallery-section mt-5 mb-5">
                                                <h2 className="title-two text-center mb-4">Our Dumpster Fleet</h2>
                                                <div className="row">
                                                    <div className="col-md-4 mb-4">
                                                        <img
                                                            src="/assets/img/dumpster-service/dumpster%20shot%20froom%20street.webp"
                                                            alt="Dumpster delivered to customer location"
                                                            style={{width: "100%", height: "250px", objectFit: "cover", borderRadius: "8px"}}
                                                        />
                                                    </div>
                                                    <div className="col-md-4 mb-4">
                                                        <img
                                                            src="/assets/img/dumpster-service/new%20dumpster%20roll%20off%20truck%20angled%20shot%20from%20back%20right.webp"
                                                            alt="Kletz Contracting roll off dumpster truck"
                                                            style={{width: "100%", height: "250px", objectFit: "cover", borderRadius: "8px"}}
                                                        />
                                                    </div>
                                                    <div className="col-md-4 mb-4">
                                                        <img
                                                            src="/assets/img/dumpster-service/roll%20off%20pickup%20angled%20shot%20from%20front%20right.webp"
                                                            alt="Roll off dumpster pickup truck"
                                                            style={{width: "100%", height: "250px", objectFit: "cover", borderRadius: "8px"}}
                                                        />
                                                    </div>
                                                </div>
                                            </div>

<div className="trust-indicators mt-5 mb-5 text-center">
    <div className="rating-badge d-inline-block p-3" style={{backgroundColor: "#f8f9fa", borderRadius: "10px"}}>
        <div className="mb-2">
            <i className="fas fa-star" style={{color: "#FFD700", fontSize: "1.5rem"}}></i>
            <i className="fas fa-star" style={{color: "#FFD700", fontSize: "1.5rem"}}></i>
            <i className="fas fa-star" style={{color: "#FFD700", fontSize: "1.5rem"}}></i>
            <i className="fas fa-star" style={{color: "#FFD700", fontSize: "1.5rem"}}></i>
            <i className="fas fa-star" style={{color: "#FFD700", fontSize: "1.5rem"}}></i>
        </div>
        <h3 className="mb-0">5-Star Rated Dumpster Service</h3>
        <p className="mb-0 mt-2">Pittsburgh's most trusted dumpster rental since 1996</p>
    </div>
</div>

<DumpsterBookingCTA />

                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-4 col-lg-6">
                                    <aside className="services-sidebar">
                                        <div className="services-widget">
                                            <h4 className="widget-title">More Services</h4>
                                            <div className="our-services-list">
                                                <ul className="list-wrap">
                                                    <li><Link href="/services/dumpster-service/construction-debris-removal">Construction Debris Removal<i className="fas fa-arrow-right" /></Link></li>
                                                    <li><Link href="/services/dumpster-service/bulk-cleanouts">Bulk Cleanouts<i className="fas fa-arrow-right" /></Link></li>
                                                    <li><Link href="#">Recycling Support<i className="fas fa-arrow-right" /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* <div className="services-widget widget-bg" data-background="/assets/img/services/sw_bg.jpg">
                                            <h4 className="widget-title">Get a Free Quote</h4>
                                            <form action="#" className="sidebar-form">
                                                <div className="form-grp">
                                                    <input id="name" type="text" placeholder="Your Name" />
                                                </div>
                                                <div className="form-grp">
                                                    <input id="email" type="text" placeholder="Your Email Address" />
                                                </div>
                                                <div className="form-grp">
                                                    <textarea id="message" placeholder="Your Message" />
                                                </div>
                                                <button type="submit" className="btn btn-two">Contact Us</button>
                                            </form>
                                        </div>
                                        <div className="services-widget">
                                            <h4 className="widget-title">Downloads</h4>
                                            <div className="download-wrap">
                                                <Link href="/assets/docs/dumpster-service-details.pdf" download target="_blank"><i className="fas fa-cloud-download-alt" />Dumpster Service Guide.pdf</Link>
                                                <Link href="/assets/docs/dumpster-sizes.docx" download target="_blank"><i className="fas fa-file-pdf" />Dumpster Sizes & Limits.docx</Link>
                                            </div>
                                        </div> */}
                                    </aside>
                                </div>
                            </div>
                        </div>
                    </section>
                    <FaqSection category={'dumpster'}/>
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
