import VideoPopup from "@/components/elements/VideoPopup"
import Layout from "@/components/layout/Layout"
import Brand3 from "@/components/sections/Brand3"
import Work1 from "@/components/sections/Work1"
import AboutBanner from "@/components/sections/AboutBanner"
import Link from "next/link"
import Slider from "react-slick"
import Script from "next/script";


const settings = {
    dots: true,
    autoplay: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
}

export default function About() {

    return (
        <>
            <Layout breadcrumbTitle="About Us">

                <AboutBanner/>
                {/* about-area-end */}
                {/* work-area */}
                <Work1/>
                {/* work-area-end */}
                {/* history-area */}
                <section className="history-area pt-120 pb-120">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="history-img-wrap">
                                    <ul className="list-wrap">
                                        <li>
                                            <img src="/assets/img/images/kletz_crew.jpg" alt="" />
                                        </li>
                                        <li>
                                            <img src="/assets/img/images/john.jpg" alt="" />
                                            {/* <VideoPopup /> */}
                                        </li>
                                        <li>
                                            <img src="/assets/img/images/kletz_roof.png" alt="" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="history-content">
                                    <div className="section-title mb-20">
                                        <span className="sub-title">Our Story</span>
                                        <h2 className="title">Pittsburgh Roofing Expertise Built on Trust & Hard Work</h2>
                                    </div>
                                    <p>
                                        Kletz Contracting was founded on the belief that every homeowner deserves reliable, high-quality roofing and exterior services delivered with honesty and professionalism. From our first project to today, we've built our reputation by showing up on time, standing behind our work, and treating our clients like neighbors—because they are.
                                    </p>
                                    <div className="history-list">
                                        <ul className="list-wrap">
                                            <li><i className="fas fa-check-circle" />Locally owned and operated with deep community ties</li>
                                            <li><i className="fas fa-check-circle" />Responsive service and clear communication</li>
                                            <li><i className="fas fa-check-circle" />Hands-on leadership and skilled crews</li>
                                            <li><i className="fas fa-check-circle" />Modern materials with time-tested craftsmanship</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* history-area-end */}
                {/* area-bg */}
                <div className="area-bg-five" data-background="/assets/img/bg/area_bg05.jpg">

                    {/* testimonial-area */}
                    <section className="inner-testimonial-area parallax pb-120 position-relative">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-6">
                                    <div className="section-title text-center mb-50">
                                        <span className="sub-title">Our Satisfied Customers</span>
                                        <h2 className="title">What Our Client Have to Say</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-lg-10">
                                    <div className="testimonial-inner">
                                    <Script
                                        src="https://reputationhub.site/reputation/assets/review-widget.js"
                                        strategy="afterInteractive"
                                        />
                                        <iframe
                                        className="lc_reviews_widget"
                                        src="https://reputationhub.site/reputation/widgets/review_widget/3xGyNbyyifHaQaEVS0Sx"
                                        frameBorder="0"
                                        scrolling="no"
                                        style={{ minWidth: "100%", width: "100%" }}
                                        ></iframe>

                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-avatar-wrap">
                                <ul className="list-wrap">
                                    <li>
                                        <img src="/assets/img/icon/houzz.png" className="layer" data-depth="0.1" alt="" />
                                    </li>
                                    <li>
                                        <img src="/assets/img/icon/angi.webp" className="layer" data-depth="0.2" alt="" />
                                    </li>
                                    <li>
                                        <img src="/assets/img/icon/google.png" className="layer" data-depth="0.05" alt="" />
                                    </li>
                                    <li>
                                        <img src="/assets/img/icon/yelp.png" className="layer" data-depth="0.2" alt="" />
                                    </li>
                                    <li>
                                    </li>
                                    <li>
                                        <img src="/assets/img/icon/thumbtack.png" className="layer" data-depth="0.1" alt="" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    {/* testimonial-area-end */}
                </div>
                {/* area-bg-end */}
                {/* brand-area */}
                <Brand3 />


            </Layout>
        </>
    )
}

export async function getStaticProps() {
    return {
      props: {}, // you can pass props here if needed
    };
  }
  