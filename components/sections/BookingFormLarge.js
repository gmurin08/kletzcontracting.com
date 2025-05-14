import { useState, useEffect } from 'react';

const usStates = [
    "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA",
    "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD",
    "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ",
    "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC",
    "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"
  ];

  
  
export default function BookingFormLarge() {
    const [isInUSA, setIsInUSA] = useState(true);
    const [geoChecked, setGeoChecked] = useState(false);
    const [geoError, setGeoError] = useState("");

    useEffect(() => {
        fetch("https://ipapi.co/json/")
            .then((res) => res.json())
            .then((data) => {
                setIsInUSA(data.country === "US");
                setGeoChecked(true);
            })
            .catch(() => {
                setGeoError("Location check failed. Please try again later.");
                setGeoChecked(true);
            });
    }, []);
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!isInUSA) {
            alert("Sorry, we currently only accept form submissions from within the United States.");
            return;
        }
    
        const form = e.target;
        
        try {
            // Get current page URL for source tracking
            const currentUrl = window.location.href;
            
            // Prepare the data for our API route
            const formData = {
                firstName: form.name.value,
                lastName: form.lastName.value,
                phone: form.phone.value,
                email: form.email.value,
                address: form.location.value,
                city: form.city.value,
                state: form.state.value,
                country: "US", // Default to US
                postalCode: "", // Not captured in this form
                notes: form.message.value,
                agreeToTerms: true // Default to true since no consent checkbox
            };
            
            // Show loading state if desired
            // setIsSubmitting(true); // Uncomment if you add this state
            
            // Call our API route
            const response = await fetch('/api/submit-contact-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            
            const result = await response.json();
            
            if (!response.ok) {
                throw new Error(result.error || "Form submission failed");
            }
            
            // Form submitted successfully
            alert("Thank you for your submission! We'll get back to you shortly.");
            
            // Reset form
            form.reset();
            
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("There was an error submitting your form. Please try again later.");
        } finally {
            // Hide loading state if desired
            // setIsSubmitting(false); // Uncomment if you add this state
        }
    };
    
    return (
        <>
            <section className="appointment-area pt-115">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title white-title mb-60">
                                <span className="sub-title">Ready to Get Started?</span>
                                <h2 className="title">Contact Us</h2>
                            </div>
                        </div>
                    </div>
                    <div className="appointment-inner" data-background="/assets/img/bg/appointment_bg.jpg">
                        <div className="row">
                            <div className="col-xl-7">
                                <div className="appointment-form">
                                    <form onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-grp">
                                                    <input id="name" type="text" placeholder="Fast Name" />
                                                    <label htmlFor="name"><i className="fas fa-user" /></label>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-grp">
                                                    <input id="lastName" type="text" placeholder="Last Name" />
                                                    <label htmlFor="lastName"><i className="fas fa-user" /></label>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-grp">
                                                    <input id="phone" type="text" placeholder="Phone Number" />
                                                    <label htmlFor="phone"><i className="fas fa-phone-alt" /></label>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-grp">
                                                    <input id="email" type="text" placeholder="Email Address" />
                                                    <label htmlFor="email"><i className="fas fa-envelope" /></label>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-grp">
                                                    <input id="location" type="text" placeholder="Address" />
                                                    <label htmlFor="location"><i className="fas fa-map-marker-alt" /></label>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-grp">
                                                    <input id='city' placeholder="City" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                            <div className="form-grp select-grp">
                                                <select name="state" className="orderby">
                                                    <option value="">Select State</option>
                                                    {[
                                                        "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA",
                                                        "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD",
                                                        "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ",
                                                        "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC",
                                                        "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"
                                                    ].map((abbr) => (
                                                        <option key={abbr} value={abbr}>{abbr}</option>
                                                    ))}
                                                </select>
                                            </div>

                                            </div>
                                        </div>
                                        <div className="form-grp">
                                            <textarea name="message" placeholder="Message" />
                                        </div>
                                        <button type="submit" className="btn">Submit</button>
                                    </form>
                                    {!isInUSA && geoChecked && (
                                        <div style={{ color: "red", marginBottom: "20px", fontWeight: "600" }}>
                                            Sorry, we currently only accept form submissions from within the United States.
                                        </div>
                                    )}
                                    {geoError && (
                                        <div style={{ color: "orange", marginBottom: "20px" }}>
                                            {geoError}
                                        </div>
                                    )}

                                </div>
                            </div>
                            <div className="col-xl-5">
                                <div className="appointment-img">
                                    <img src="/assets/img/images/appointment_img.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
