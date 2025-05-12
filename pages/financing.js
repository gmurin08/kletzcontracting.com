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

export default function Financing() {

    return (
        <>
            <Layout breadcrumbTitle="Financing">


                {/* history-area */}
                <section className="history-area pt-120 pb-120">
                <div className="container">
  <div className="row justify-content-center">
    <div className="col-lg-8">
      <div className="history-content text-center">
        <div className="section-title mb-20">
          <span className="sub-title">Finance Your Project</span>
          {/* <h2 className="title">Flexible Financing Options Through Dollar Bank</h2> */}
        </div>
        <p>
        Kletz Contracting, Inc refers its customers to
the following quality lender for their financing.
Click the logo to apply and enter Promo Code:<b> 0046-7940</b>.        </p>
        <div className="history-list mt-4">
          <a href="https://dollar.bank/personal/borrowing/financing-solutions">
            <img  style={{width:"40%"}}src="/assets/img/images/dblc.jpg" alt="Dollar Bank Loan Center Logo" />
            </a>
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
                <Work1/>


            </Layout>
        </>
    )
}

export async function getStaticProps() {
    return {
      props: {}, // you can pass props here if needed
    };
  }
  