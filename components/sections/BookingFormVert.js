import { useState } from "react";
import { isValidEmail,isValidPhone} from '../../util/validation'
export default function AppointmentVert() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    zip: "",
    email: "",
    message: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
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

    const params = new URLSearchParams(form).toString();
    const ghlFormURL = `https://your-ghl-form.com/?${params}`;

    window.location.href = ghlFormURL;
  };

  return (
    <section className="appointment-area-two pb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div
              className="appointment-inner-two tg-heading-subheading animation-style3"
              data-background="/assets/img/bg/appointment_bg.jpg">
              <div style={{display:'flex', flexDirection:'row', alignItems:'baseline'}}>
              <img src="./assets/img/logo/kletz.png" style={{width:'120px', height:'50px'}} alt="" />
              <h2 className="title tg-element-title">Schedule Your Free Estimate</h2>
              </div>
              <form onSubmit={handleSubmit}>
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
                      />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="form-grp">
                      <input
                        name="zip"
                        type="number"
                        placeholder="Service Zip Code"
                        value={form.zip}
                        onChange={handleChange}
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
