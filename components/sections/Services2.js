import Link from "next/link";

export default function Services2() {
  // Define consistent sizing styles
  const cardStyle = {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    marginBottom: "30px"
  };
  
  const thumbStyle = {
    height: "300px", // Fixed height for all image containers
    overflow: "hidden",
    position: "relative"
  };
  
  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover", // This ensures images maintain aspect ratio while filling container
    objectPosition: "center"
  };
  
  const contentStyle = {
    flex: "1",
    padding: "25px",
    display: "flex"
  };

  return (
    <section className="services-area-two pb-90">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="section-title white-title text-center mb-60 tg-heading-subheading animation-style3">
              <span className="sub-title tg-element-title">Discover Our Company</span>
              <h2 className="title tg-element-title">Explore Our Expert Services</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {/* Roofing Replacement */}
          <div className="col-lg-6" style={{ marginBottom: "30px" }}>
            <div className="services-item-two" style={cardStyle}>
              <div className="services-thumb-two" style={thumbStyle}>
                <Link href="/services/roofing-replacement">
                  <img 
                    src="/assets/img/services/roofing.jpg" 
                    alt="Roofing Replacement" 
                    style={imageStyle}
                  />
                </Link>
              </div>
              <div className="services-content-two" style={contentStyle}>
                <div className="icon">
                  RR
                </div>
                <div className="content">
                  <h2 className="title">
                    <Link href="/services/roofing-replacement">Roofing Replacement</Link>
                  </h2>
                  <p>Secure your property with our premier roofing services, combining style and durability for optimal protection.</p>
                </div>
              </div>
            </div>
          </div>
          {/* Kitchen Renovations */}
          <div className="col-lg-6" style={{ marginBottom: "30px" }}>
            <div className="services-item-two" style={cardStyle}>
              <div className="services-thumb-two" style={thumbStyle}>
                <Link href="/services/kitchen-renovations">
                  <img 
                    src="/assets/img/services/kitchen.jpg" 
                    alt="Kitchen Renovations" 
                    style={imageStyle}
                  />
                </Link>
              </div>
              <div className="services-content-two" style={contentStyle}>
                <div className="icon">
                  KR
                </div>
                <div className="content">
                  <h2 className="title">
                    <Link href="/services/kitchen-renovations">Kitchen Renovations</Link>
                  </h2>
                  <p>Transform your kitchen into a host's haven, prioritizing functionality and style for memorable gatherings.</p>
                </div>
              </div>
            </div>
          </div>
          {/* Flooring Replacement */}
          <div className="col-lg-6" style={{ marginBottom: "30px" }}>
            <div className="services-item-two" style={cardStyle}>
              <div className="services-thumb-two" style={thumbStyle}>
                <Link href="/services/flooring-replacement">
                  <img 
                    src="/assets/img/services/flooring.jpg" 
                    alt="Flooring Replacement" 
                    style={imageStyle}
                  />
                </Link>
              </div>
              <div className="services-content-two" style={contentStyle}>
                <div className="icon">
                  FR
                </div>
                <div className="content">
                  <h2 className="title">
                    <Link href="/services/flooring-replacement">Flooring Replacement</Link>
                  </h2>
                  <p>Revitalize your space with our versatile flooring options, blending style, comfort, and longevity seamlessly.</p>
                </div>
              </div>
            </div>
          </div>
          {/* Commercial Build-outs */}
          <div className="col-lg-6" style={{ marginBottom: "30px" }}>
            <div className="services-item-two" style={cardStyle}>
              <div className="services-thumb-two" style={thumbStyle}>
                <Link href="/services/commercial-build-outs">
                  <img 
                    src="/assets/img/services/commercial_build_outs.jpg" 
                    alt="Commercial Build-outs" 
                    style={imageStyle}
                  />
                </Link>
              </div>
              <div className="services-content-two" style={contentStyle}>
                <div className="icon">
                  CB
                </div>
                <div className="content">
                  <h2 className="title">
                    <Link href="/services/commercial-build-outs">Commercial Build-outs</Link>
                  </h2>
                  <p>Revitalize your office with our commercial build-outs, marrying function, luxury, and practicality for a workspace that inspires success.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}