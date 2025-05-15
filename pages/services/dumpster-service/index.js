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

export default function DumpsterService() {

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
                                                                            <img src="/assets/img/icon/flat_check.svg" alt="" />
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
                                                                            <img src="/assets/img/icon/flat_check.svg" alt="" />
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
                                                                            <img src="/assets/img/icon/flat_check.svg" alt="" />
                                                                        </div>
                                                                        <div className="content">
                                                                            <h4 className="title">Secure Payment</h4>
                                                                            <p>All payments are handled securely through Stripe.</p>
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
<div className="form-header" style={{
        width: '100%',
        borderRadius: '8px 8px 0 0',
        overflow: 'hidden',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
    }}>
        <img 
            src="/assets/img/banner/dumpster_form_banner.png" 
            alt="Ready to Book Your Dumpster?" 
            style={{
                width: '100%',
                height: 'auto',
                display: 'block'
            }}
        />
    </div>

    <div style={{
        background: 'white',
        padding: '30px',
        borderRadius: '0 0 8px 8px',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
        border: '1px solid #eaeaea',
        borderTop: 'none'
    }}>
        <form onSubmit={handleSubmit} className="booking-form">
            <div className="form-row">
                <div className="col-md-6 mb-3">
                    <div style={{
                        position: 'relative',
                        marginBottom: '20px'
                    }}>
                        <i className="fas fa-user" style={{
                            position: 'absolute',
                            left: '15px',
                            top: '15px',
                            color: '#666'
                        }}></i>
                        <input 
                            type="text" 
                            name="name" 
                            value={formData.name}
                            onChange={handleChange}
                            style={{
                                padding: '15px 15px 15px 45px',
                                fontSize: '16px',
                                borderRadius: '4px',
                                border: '1px solid #ddd',
                                width: '100%',
                                transition: 'border-color 0.3s',
                                boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.1)'
                            }}
                            placeholder="Full Name" 
                            required 
                        />
                    </div>
                </div>
                <div className="col-md-6 mb-3">
                    <div style={{
                        position: 'relative',
                        marginBottom: '20px'
                    }}>
                        <i className="fas fa-envelope" style={{
                            position: 'absolute',
                            left: '15px',
                            top: '15px',
                            color: '#666'
                        }}></i>
                        <input 
                            type="email" 
                            name="email" 
                            value={formData.email}
                            onChange={handleChange}
                            style={{
                                padding: '15px 15px 15px 45px',
                                fontSize: '16px',
                                borderRadius: '4px',
                                border: '1px solid #ddd',
                                width: '100%',
                                transition: 'border-color 0.3s',
                                boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.1)'
                            }}
                            placeholder="Email Address" 
                            required 
                        />
                    </div>
                </div>
            </div>
            <div className="form-row">
                <div className="col-md-6 mb-3">
                    <div style={{
                        position: 'relative',
                        marginBottom: '20px'
                    }}>
                        <i className="fas fa-phone" style={{
                            position: 'absolute',
                            left: '15px',
                            top: '15px',
                            color: '#666'
                        }}></i>
                        <input 
                            type="tel" 
                            name="phone" 
                            value={formData.phone}
                            onChange={handleChange}
                            style={{
                                padding: '15px 15px 15px 45px',
                                fontSize: '16px',
                                borderRadius: '4px',
                                border: '1px solid #ddd',
                                width: '100%',
                                transition: 'border-color 0.3s',
                                boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.1)'
                            }}
                            placeholder="Phone Number" 
                            required 
                        />
                    </div>
                </div>
                <div className="col-md-6 mb-3">
                    <div style={{
                        position: 'relative',
                        marginBottom: '20px'
                    }}>
                        <i className="fas fa-trash" style={{
                            position: 'absolute',
                            left: '15px',
                            top: '15px',
                            color: '#666'
                        }}></i>
                        <select 
                            name="dumpster_size" 
                            value={formData.dumpster_size}
                            onChange={handleChange}
                            style={{
                                padding: '15px 15px 15px 45px',
                                fontSize: '16px',
                                borderRadius: '4px',
                                border: '1px solid #ddd',
                                width: '100%',
                                transition: 'border-color 0.3s',
                                boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.1)',
                                appearance: 'none',
                                backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23666%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'right 15px top 50%',
                                backgroundSize: '10px auto'
                            }}
                            required
                        >
                            <option value="">Select Dumpster Size</option>
                            <option value="10">10 Yard</option>
                            <option value="12">12 Yard</option>
                            <option value="15">15 Yard</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="form-row">
                <div className="col-md-12 mb-3">
                    <div style={{
                        position: 'relative',
                        marginBottom: '20px'
                    }}>
                        <i className="fas fa-map-marker-alt" style={{
                            position: 'absolute',
                            left: '15px',
                            top: '15px',
                            color: '#666'
                        }}></i>
                        <input 
                            type="text" 
                            name="address" 
                            value={formData.address}
                            onChange={handleChange}
                            style={{
                                padding: '15px 15px 15px 45px',
                                fontSize: '16px',
                                borderRadius: '4px',
                                border: '1px solid #ddd',
                                width: '100%',
                                transition: 'border-color 0.3s',
                                boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.1)'
                            }}
                            placeholder="Drop-Off Address" 
                            required 
                        />
                    </div>
                </div>
                <div className="col-md-12 mb-3">
                    <div style={{
                        position: 'relative',
                        marginBottom: '20px'
                    }}>
                        <i className="fas fa-calendar" style={{
                            position: 'absolute',
                            left: '15px',
                            top: '15px',
                            color: '#666'
                        }}></i>
                        <input 
                            type="date" 
                            name="service_date" 
                            value={formData.service_date}
                            onChange={handleChange}
                            style={{
                                padding: '15px 15px 15px 45px',
                                fontSize: '16px',
                                borderRadius: '4px',
                                border: '1px solid #ddd',
                                width: '100%',
                                transition: 'border-color 0.3s',
                                boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.1)'
                            }}
                            required 
                        />
                    </div>
                </div>
            </div>
            <button 
                type="submit" 
                className="btn"
                style={{
                    background: 'linear-gradient(to right,#990000,rgb(99, 99, 99))',
                    color: 'white',
                    fontSize: '18px',
                    fontWeight: '600',
                    padding: '15px 40px',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 15px rgba(255, 95, 109, 0.3)',
                    marginTop: '10px',
                    display: 'inline-block',
                    textTransform: 'uppercase',
                }}
                disabled={isSubmitting}
                onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
                {isSubmitting ? 
                    <span>
                        <i className="fas fa-circle-notch fa-spin" style={{marginRight: '10px'}}></i>
                        Processing...
                    </span> : 
                    <span>
                        <i className="fas fa-truck" style={{marginRight: '10px'}}></i>
                        Request My Dumpster
                    </span>
                }
            </button>
        </form>
    </div>
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
                                                    <li><Link href="#">Construction Debris Removal<i className="fas fa-arrow-right" /></Link></li>
                                                    <li><Link href="#">Bulk Cleanouts<i className="fas fa-arrow-right" /></Link></li>
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
