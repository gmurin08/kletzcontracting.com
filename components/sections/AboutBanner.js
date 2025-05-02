import Link from "next/link"

export default function About1() {
    return (
        <>
                <section className="about-area inner-about-area pt-120 pb-120">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-7 col-lg-6 order-0 order-lg-2">
                                <div className="about-img-wrap">
                                <img
                                    src="/assets/img/images/roof-nailer.jpg"
                                    alt=""
                                    className="wow fadeInRight"
                                    data-wow-delay=".4s"
                                    style={{ width: '369px', height: '550px', objectFit: 'cover' }}
                                    />
                                    <img src="/assets/img/images/about_img02.jpg" alt="" 
                                    className="wow fadeInRight" data-wow-delay=".2s"
                                    style={{ width: '233px', height: '473px', objectFit: 'cover' }} />
                                    <div className="about-experiences-wrap">
                                        <div className="experiences-item">
                                            <div className="icon">
                                                <img src="/assets/img/icon/about_icon01.svg" alt="" />
                                            </div>
                                            <div className="content">
                                                <h6 className="title">Over 25 years of experiences</h6>
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
                            </div>
                            <div className="col-xl-5 col-lg-6">
                                <div className="about-content">
                                    <div className="section-title mb-25">
                                        <span className="sub-title">About Our Company</span>
                                        <h2 className="title">We’re Committed to Roofing Excellence</h2>
                                    </div>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majori have suffered
                                        alteration in some form, by injected humour, or randomised word which don't look even slightly
                                        believable.</p>
                                    <div className="about-list">
                                        <ul className="list-wrap">
                                            <li><i className="fas fa-check" />32k Partners have worked us.</li>
                                            <li><i className="fas fa-check" />Professional and experienced human resources.</li>
                                            <li><i className="fas fa-check" />Provide the best roof services</li>
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
