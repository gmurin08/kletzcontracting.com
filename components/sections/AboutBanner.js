import Link from "next/link"

const containerStyle ={
    paddingTop:'20px'
}
export default function AboutBanner() {
    return (
        <>
            <section className="about-area inner-about-area pt-120 pb-120" style={containerStyle}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-7 col-lg-6 order-0 order-lg-2">
                            {/* Desktop: van + nailer images */}
                            <div className="about-img-wrap d-none d-lg-block">
                            <img
                                src="/assets/john/van.webp"
                                alt="Kletz Contracting branded service van in Pittsburgh"
                                className="wow fadeInRight"
                                data-wow-delay=".4s"
                                style={{ width: '369px', height: '550px', objectFit: 'cover' }}
                                />
                                <img src="/assets/img/images/roof-nailer.jpg" alt=""
                                className="wow fadeInRight" data-wow-delay=".2s"
                                style={{ width: '233px', height: '473px', objectFit: 'cover' }} />
                                <div className="about-experiences-wrap">
                                    <div className="experiences-item">
                                        <div className="icon">
                                            <img src="/assets/img/icon/about_icon01.svg" alt="" />
                                        </div>
                                        <div className="content">
                                            <h6 className="title">Over 29 years of experience</h6>
                                        </div>
                                    </div>
                                    <div className="experiences-item">
                                        <div className="icon">
                                            <img src="/assets/img/icon/about_icon02.svg" alt="" />
                                        </div>
                                        <div className="content">
                                            <h6 className="title">Professional & Experienced Team</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Mobile: John & Julian trust image */}
                            <div className="d-lg-none text-center mb-4">
                                <img
                                    src="/assets/john/Trusted Narrow Form.png"
                                    alt="John and Julian Kletz - Trusted by Pittsburgh since 1996"
                                    style={{ width: '100%', maxWidth: '400px', height: 'auto', borderRadius: '8px' }}
                                />
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6">
                            <div className="about-content">
                                <div className="section-title mb-25">
                                    <span className="sub-title">About Kletz Contracting</span>
                                    <h2 className="title">Your Trusted Partner for Roofing & Exterior Solutions</h2>
                                </div>
                                <p>
                                    At Kletz Contracting, we take pride in delivering high-quality roofing, siding, and exterior services backed by integrity, craftsmanship, and local expertise. Whether it’s a complete roof replacement or a minor repair, our team treats every home like it’s our own—with attention to detail and a commitment to doing the job right the first time.
                                </p>
                                <div className="about-list">
                                    <ul className="list-wrap">
                                        <li><i className="fas fa-check" />Locally owned and operated in Pittsburgh, PA</li>
                                        <li><i className="fas fa-check" />Licensed, insured, and backed by 5-star client reviews</li>
                                        <li><i className="fas fa-check" />Full-service roofing, siding, gutters, and more</li>
                                    </ul>
                                </div>
                                <Link href="/about" className="btn">Learn More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
