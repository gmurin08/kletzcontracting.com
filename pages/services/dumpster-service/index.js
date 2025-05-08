import Layout from "@/components/layout/Layout"
import Brand3 from "@/components/sections/Brand3"
import { useState } from "react"
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

export default function ServiceDetails() {

        // State for form data and submission status
        const [formData, setFormData] = useState({
            name: '',
            email: '',
            phone: '',
            dumpster_size: '',
            address: '',
            service_date: ''
        });
        const [isSubmitting, setIsSubmitting] = useState(false);
        const [submitStatus, setSubmitStatus] = useState({
            success: false,
            error: null
        });
    
        // Handle input changes
        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData(prevData => ({
                ...prevData,
                [name]: value
            }));
        };
    
        // Handle form submission
        const handleSubmit = async (e) => {
            e.preventDefault();
            setIsSubmitting(true);
            setSubmitStatus({ success: false, error: null });
            
            try {
                const response = await fetch('/api/dumpster-service/book', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });
                
                const data = await response.json();
                
                if (!response.ok) {
                    throw new Error(data.error || 'Failed to submit booking');
                }
                
                // Success
                setSubmitStatus({ success: true, error: null });
                // Reset form
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    dumpster_size: '',
                    address: '',
                    service_date: ''
                });
            } catch (error) {
                setSubmitStatus({ success: false, error: error.message });
            } finally {
                setIsSubmitting(false);
            }
        };
    
    return (
        <>
            <Layout breadcrumbTitle="Dumpster Rentals">
                <div>
                    <section className="services-details-area pt-120">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-8">
                                    <div className="services-details-wrap" >
                                        <div className="services-details-thumb">
                                            <img src="/assets/img/services/dumpster.jpg" alt="Dumpster Rental" />
                                        </div>
                                        <div className="services-details-content">
                                            <h2 className="title">Reliable Dumpster Rentals Made Easy</h2>
                                            <p>Renting a dumpster shouldn't be complicated. Our streamlined online booking system makes it quick and easy to choose your dumpster size, reserve your date, and pay securely. Whether you're cleaning out a home, managing a job site, or tackling a renovation, our flat-rate pricing and fast drop-offs mean less stress for you.</p>

                                            <div className="services-process-wrap">
                                                <div className="row justify-content-center">
                                                    <div className="col-lg-6 col-md-8" style={{paddingBottom:'40px', display:'flex', alignItems:'center', justifyContent:'center'}}>
                                                            <div>
                                                            <img style={processSideImg} src="/assets/img/services/dumpster-process1.jpg" alt="" />
                                                            </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="services-process-content">
                                                            <h2 className="title">How It Works</h2>
                                                            <ul className="list-wrap">
                                                                <li>
                                                                    <div className="services-process-item">
                                                                        <div className="icon">
                                                                            <img src="/assets/img/icon/calendar.svg" alt="" />
                                                                        </div>
                                                                        <div className="content">
                                                                            <h4 className="title">Book Online</h4>
                                                                            <p>Select your dumpster size, delivery date, and enter your info. You'll receive a confirmation email with your booking details.</p>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="services-process-item">
                                                                        <div className="icon">
                                                                            <img src="/assets/img/icon/truck.svg" alt="" />
                                                                        </div>
                                                                        <div className="content">
                                                                            <h4 className="title">We Deliver</h4>
                                                                            <p>Your dumpster is delivered on time to your location. You don’t even need to be home—we’ll follow your placement notes.</p>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="services-process-item">
                                                                        <div className="icon">
                                                                            <img src="/assets/img/icon/credit-card.svg" alt="" />
                                                                        </div>
                                                                        <div className="content">
                                                                            <h4 className="title">Secure Payment</h4>
                                                                            <p>All payments are handled securely through our Stripe checkout. Future charges like overweight fees or late pickups can be handled easily through your saved method.</p>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <h2 className="title-two">Why Choose Us?</h2>
                                            <p>We believe in transparency and reliability. Our service is designed around your convenience—from easy online booking to dependable pickups and clear communication.</p>

                                            <div className="service-benefits-wrap">
                                                <div className="row">
                                                    <div className="col-lg-7 order-0 order-lg-2">
                                                        <div className="benefits-img">
                                                            <img src="/assets/img/services/dumpster_benefits1.jpg" alt="" />
                                                            <img src="/assets/img/services/dumpster_benefits2.jpg" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-5">
                                                        <div className="benefits-content">
                                                            <h2 className="title">Service Highlights</h2>
                                                            <ul className="list-wrap">
                                                                <li><i className="fas fa-check-circle" />Flat-rate pricing, no hidden fees</li>
                                                                <li><i className="fas fa-check-circle" />Save your payment method for easy recharges</li>
                                                                <li><i className="fas fa-check-circle" />Text notifications before delivery and pickup</li>
                                                                <li><i className="fas fa-check-circle" />Friendly, local service team</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="cta-area text-center mt-60">
                                                <h2 className="title">Ready to Book Your Dumpster?</h2>
                                                <p>Fill out the form below to begin your rental. We’ll confirm availability and follow up with next steps.</p>

                                                <form onSubmit={handleSubmit} className="booking-form mt-4">
                                                <div className="form-row">
                                                    <div className="col-md-6 mb-3">
                                                        <input 
                                                            type="text" 
                                                            name="name" 
                                                            value={formData.name}
                                                            onChange={handleChange}
                                                            className="form-control" 
                                                            placeholder="Full Name" 
                                                            required 
                                                        />
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <input 
                                                            type="email" 
                                                            name="email" 
                                                            value={formData.email}
                                                            onChange={handleChange}
                                                            className="form-control" 
                                                            placeholder="Email Address" 
                                                            required 
                                                        />
                                                    </div>
                                                </div>
                                                <div className="form-row">
                                                    <div className="col-md-6 mb-3">
                                                        <input 
                                                            type="tel" 
                                                            name="phone" 
                                                            value={formData.phone}
                                                            onChange={handleChange}
                                                            className="form-control" 
                                                            placeholder="Phone Number" 
                                                            required 
                                                        />
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <select 
                                                            name="dumpster_size" 
                                                            value={formData.dumpster_size}
                                                            onChange={handleChange}
                                                            className="form-control" 
                                                            required
                                                        >
                                                            <option value="">Select Dumpster Size</option>
                                                            <option value="10">10 Yard</option>
                                                            <option value="15">15 Yard</option>
                                                            <option value="20">20 Yard</option>
                                                            <option value="30">30 Yard</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="form-row">
                                                    <div className="col-md-12 mb-3">
                                                        <input 
                                                            type="text" 
                                                            name="address" 
                                                            value={formData.address}
                                                            onChange={handleChange}
                                                            className="form-control" 
                                                            placeholder="Drop-Off Address" 
                                                            required 
                                                        />
                                                    </div>
                                                    <div className="col-md-12 mb-3">
                                                        <input 
                                                            type="date" 
                                                            name="service_date" 
                                                            value={formData.service_date}
                                                            onChange={handleChange}
                                                            className="form-control" 
                                                            required 
                                                        />
                                                    </div>
                                                </div>
                                                <button 
                                                    type="submit" 
                                                    className="btn btn-primary btn-lg"
                                                    disabled={isSubmitting}
                                                >
                                                    {isSubmitting ? 'Processing...' : 'Reserve My Dumpster'}
                                                </button>
                                            </form>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-4 col-lg-6">
                                    <aside className="services-sidebar">
                                        <div className="services-widget">
                                            <h4 className="widget-title">More Services</h4>
                                            <div className="our-services-list">
                                                <ul className="list-wrap">
                                                    <li><Link href="#">Commercial Dumpsters<i className="fas fa-arrow-right" /></Link></li>
                                                    <li><Link href="#">Construction Debris Removal<i className="fas fa-arrow-right" /></Link></li>
                                                    <li><Link href="#">Bulk Cleanouts<i className="fas fa-arrow-right" /></Link></li>
                                                    <li><Link href="#">Recycling Support<i className="fas fa-arrow-right" /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="services-widget widget-bg" data-background="/assets/img/services/sw_bg.jpg">
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
                                        </div>
                                    </aside>
                                </div>
                            </div>
                        </div>
                    </section>
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
