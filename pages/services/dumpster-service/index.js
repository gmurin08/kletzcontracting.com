import Layout from "@/components/layout/Layout"
import LocalBusinessSchema from "@/components/LocalBusinessSchema"
import Brand3 from "@/components/sections/Brand3"
import FaqSection from "@/components/sections/FaqSection"
import FaqSchema from "@/components/FaqSchema"
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
            city: '',
            state: 'PA',
            zip: '',
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
                    city: '',
                    state: 'PA',
                    zip: '',
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
                <a href="#booking-form" className="btn btn-danger btn-block">Book 12-Yard</a>
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
                <a href="#booking-form" className="btn btn-danger btn-block">Book 15-Yard</a>
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
                                                            <p className="text-success mb-0"><strong>✓ Text us anytime: (412) 200-2475</strong></p>
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

<div className="cta-area text-center mt-60" id="booking-form">
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
                            placeholder="Street Address" 
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
                        <i className="fas fa-city" style={{
                            position: 'absolute',
                            left: '15px',
                            top: '15px',
                            color: '#666'
                        }}></i>
                        <input 
                            type="text" 
                            name="city" 
                            value={formData.city}
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
                            placeholder="City" 
                            required 
                        />
                    </div>
                </div>
                <div className="col-md-3 mb-3">
                    <div style={{
                        position: 'relative',
                        marginBottom: '20px'
                    }}>
                        <i className="fas fa-flag-usa" style={{
                            position: 'absolute',
                            left: '15px',
                            top: '15px',
                            color: '#666'
                        }}></i>
                        <select 
                            name="state" 
                            value={formData.state}
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
                            <option value="PA">PA</option>
                        </select>
                    </div>
                </div>
                <div className="col-md-3 mb-3">
                    <div style={{
                        position: 'relative',
                        marginBottom: '20px'
                    }}>
                        <i className="fas fa-hashtag" style={{
                            position: 'absolute',
                            left: '15px',
                            top: '15px',
                            color: '#666'
                        }}></i>
                        <input 
                            type="text" 
                            name="zip" 
                            value={formData.zip}
                            onChange={handleChange}
                            pattern="[0-9]{5}(-[0-9]{4})?"
                            style={{
                                padding: '15px 15px 15px 45px',
                                fontSize: '16px',
                                borderRadius: '4px',
                                border: '1px solid #ddd',
                                width: '100%',
                                transition: 'border-color 0.3s',
                                boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.1)'
                            }}
                            placeholder="ZIP Code" 
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
