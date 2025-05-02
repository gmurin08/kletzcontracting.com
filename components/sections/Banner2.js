import Link from "next/link";

export default function Banner2() {
    return (
        <section
            className="banner-area-two"
            style={{
                backgroundImage: "url('/assets/img/banner/banner_bg.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                padding: "80px 0",
            }}
        >
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    {/* Image Column */}
                    <div className="col-lg-6 col-md-10 order-0 order-lg-2">
                        <div className="banner-img-wrap">
                            <img
                                src="/assets/img/banner/banner_bg.jpg"
                                alt="Kletz Contracting Roofing"
                                width="400"
                                height="303"
                                style={{
                                    objectFit: "cover",
                                    display: "block",
                                    width: "100%",
                                    height: "auto",
                                    maxWidth: "400px",
                                }}
                                loading="eager"
                                fetchPriority="high"
                            />
                            <div className="overly-text">
                                <h2 className="title">Kletz Contracting</h2>
                            </div>
                        </div>
                    </div>

                    {/* Content Column */}
                    <div className="col-lg-6">
                        <div className="banner-content-two">
                            <span className="sub-title">Pittsburgh's Premier Roofers</span>
                            <h2 className="title">
                                Expert Roofing Solutions For Steel City Homes
                            </h2>
                            <p>
                                Protecting Pittsburgh homes from harsh winters, summer storms,
                                and everything in between with quality materials and craftsmanship.
                            </p>
                            <Link href="/projects" className="btn">
                                Explore Our Work
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
