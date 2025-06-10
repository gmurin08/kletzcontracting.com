import Link from "next/link"

export default function Banner2() {
    return (
        <>
            <section className="banner-area-two parallax">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6 col-md-10 order-0 order-lg-2">
                            <div className="banner-img-wrap">
                            <video
                                    src="/assets/vid/Roof-Rise.mp4"
                                    width="400"
                                    height="303"
                                    poster="/assets/img/banner/banner_bg.jpg"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    style={{
                                        objectFit: "cover",
                                        display: "block",
                                        width: "100%",
                                        height: "100%",
                                        maxWidth: "400px"
                                    }}
                                />
                                <div className="overly-text">
                                    <h2 className="title">Kletz Contracting</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
    <div className="banner-content-two">
        <span className="sub-title wow fadeInUp" data-wow-delay=".2s">Pittsburgh's Premier Roofers</span>
        <h2 className="title wow fadeInUp" data-wow-delay=".4s">Protecting What Matters — One Home at a Time</h2>
        <p className="wow fadeInUp" data-wow-delay=".6s">Protecting Pittsburgh homes from harsh winters, summer storms, and everything in between with quality materials and craftsmanship.</p>
        <Link href="/recent-projects" className="btn wow fadeInUp" data-wow-delay=".8s">Explore Our Work</Link>
    </div>
</div>
                    </div>
                </div>
                <div className="banner-shape-wrap">
                    <ul className="list-wrap">
                        <li><img src="/assets/img/banner/h3_banner_shape01.png" alt="" className="layer" data-depth="0.3" /></li>
                        <li><img src="/assets/img/banner/h3_banner_shape02.png" alt="" className="layer" data-depth="0.3" /></li>
                        <li><img src="/assets/img/banner/h3_banner_shape03.png" alt="" className="layer" data-depth="0.1" /></li>
                        <li><img src="/assets/img/banner/h3_banner_shape04.png" alt="" className="banner-img-wrap" data-depth="0.2" /></li>
                        <li><img src="/assets/img/banner/h3_banner_shape05.png" alt="" className="wow fadeInLeft" data-wow-delay=".4s" /></li>
                        <li><img src="/assets/img/banner/h3_banner_shape06.png" alt="" /></li>
                        <li><img src="/assets/img/banner/h3_banner_shape07.png" alt="" className="rotateme" /></li>
                    </ul>
                </div>
            </section>

        </>
    )
}
