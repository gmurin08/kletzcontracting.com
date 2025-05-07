import { useState } from "react";
import { isValidEmail, isValidPhone } from "../../util/validation";
import { useRouter } from "next/navigation";
import { ClientPageRoot } from "next/dist/client/components/client-page";
export default function AppointmentVert() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    zip: "",
    email: "",
    message: ""
  });
  const router = useRouter()

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.phone || !form.zip || !form.email) {
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

    const url = window.location.href

    try {
      const response = await fetch(`/api/ghl-submit`,
        {
          method:'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify({
            name:form.name,
            phone:form.phone,
            url:url,
            zip:form.zip,
            email:form.email,
            notes:form.note
          })
        }
      )

      if (response.status === 200){
          router.push('/thank-you')
      }
    } catch (error) {
      console.log(error)
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
                        name="name"
                        type="text"
                        placeholder="Your Name"
                        value={form.name}
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
                        name="zip"
                        type="text"
                        placeholder="Service Zip Code"
                        value={form.zip}
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
                      <textarea
                        name="message"
                        placeholder="Details"
                        value={form.message}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-lg-4">
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
