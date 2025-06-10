import { useState } from "react";
import { isValidEmail, isValidPhone } from "../../util/validation";
import { useRouter } from "next/navigation";

export default function AppointmentVert() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    postalCode: "",
    notes: ""
  });
  const router = useRouter();

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation - check all fields are filled
    if (!form.firstName || !form.lastName || !form.phone || 
        !form.postalCode || !form.email || !form.notes) {
      setError("Please fill in all required fields.");
      return;
    }

    if (!isValidPhone(form.phone)) {
      setError("Please enter a valid 10-digit phone number.");
      return;
    }

    if (!isValidEmail(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError(""); // Clear error on valid submit

    try {
      const response = await fetch(`/api/submit-contact-form`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          phone: form.phone,
          address: "", // Sending empty string for address
          city: "", // Sending empty string for city
          state: "", // Sending empty string for state
          country: "US",
          postalCode: form.postalCode,
          notes: form.notes
        })
      });

      if (response.ok) {
        router.push('/thank-you');
      } else {
        const errorData = await response.json();
        setError("Submission failed: " + (errorData.error || "Unknown error"));
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <section className="appointment-area-two pb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 position-relative">
            {/* Inline background image replacement */}
            <img
              src="/assets/img/bg/appointment_bg.jpg"
              alt="Appointment background"
              width="1920"
              height="800"
              style={{
                position: "absolute",
                inset: 0,
                zIndex: -1,
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              loading="eager"
              fetchPriority="high"
            />

            <div className="appointment-inner-two tg-heading-subheading">
              <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "1rem" }}>
                <img
                  src="/assets/img/logo/kletz.png"
                  alt="Kletz Contracting logo"
                  width="120"
                  height="50"
                  loading="eager"
                />
                <h2 className="title">Schedule Your Free Estimate</h2>
              </div>

              <form onSubmit={handleSubmit} noValidate>
                <div className="row">
                  {error && (
                    <div className="col-12">
                      <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>
                    </div>
                  )}

                  <div className="col-lg-4">
                    <div className="form-grp">
                      <input
                        name="firstName"
                        type="text"
                        placeholder="Your Name"
                        value={form.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div className="form-grp">
                      <input
                        name="lastName"
                        type="text"
                        placeholder="Last Name"
                        value={form.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div className="form-grp">
                      <input
                        name="phone"
                        type="tel"
                        placeholder="Phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div className="form-grp">
                      <input
                        name="email"
                        type="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div className="form-grp">
                      <input
                        name="postalCode"
                        type="text"
                        placeholder="Service Zip Code"
                        value={form.postalCode}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div className="form-grp">
                      <textarea
                        name="notes"
                        placeholder="Project Details"
                        value={form.notes}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <button type="submit" className="btn">Submit</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}