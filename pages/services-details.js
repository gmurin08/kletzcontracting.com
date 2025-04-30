import Layout from "@/components/layout/Layout"
import Brand3 from "@/components/sections/Brand3"
import Link from "next/link"
export default function ServiceDetails() {

    return (
        <>
            <Layout breadcrumbTitle="Service Details">
                <div>
                    <section className="services-details-area pt-120">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-8">
                                    <div className="services-details-wrap">
                                        <div className="services-details-thumb">
                                            <img src="/assets/img/services/services_details01.jpg" alt="" />
                                        </div>
                                        <div className="services-details-content">
                                            <h2 className="title">Modified roofing beautiful wooden house with big windows</h2>
                                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in somes form, by injected humour, or randomised words which don't look even slightlcy believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of textss. All the Lorem Ipsum generators on the Internet tend to repeat</p>
                                            <div className="services-process-wrap">
                                                <div className="row justify-content-center">
                                                    <div className="col-lg-6 col-md-8">
                                                        <div className="services-process-img">
                                                            <img src="/assets/img/services/sp_img01.jpg" alt="" />
                                                            <img src="/assets/img/services/sp_img02.jpg" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="services-process-content">
                                                            <h2 className="title">Our Service Process</h2>
                                                            <ul className="list-wrap">
                                                                <li>
                                                                    <div className="services-process-item">
                                                                        <div className="icon">
                                                                            <img src="/assets/img/icon/sp_icon01.svg" alt="" />
                                                                        </div>
                                                                        <div className="content">
                                                                            <h4 className="title">Creative Analysis</h4>
                                                                            <p>Creative analysis is important. It is common for marketers</p>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="services-process-item">
                                                                        <div className="icon">
                                                                            <img src="/assets/img/icon/sp_icon02.svg" alt="" />
                                                                        </div>
                                                                        <div className="content">
                                                                            <h4 className="title">Design  Scratches</h4>
                                                                            <p>Creative analysis is important. It is common for marketers</p>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="services-process-item">
                                                                        <div className="icon">
                                                                            <img src="/assets/img/icon/sp_icon01.svg" alt="" />
                                                                        </div>
                                                                        <div className="content">
                                                                            <h4 className="title">Development  Delivery</h4>
                                                                            <p>Creative analysis is important. It is common for marketers</p>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <h2 className="title-two">We Hope You Find What You are Looking for</h2>
                                            <p>There are many variations of passages of Lorem Ipsum available, but the majorty have suffered alteration in as some form by injected humour, or randomised words which don't look even slightly believable. If you are going a to use as passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of textss. All the Lorem Ipsum generators on the Internet tend to repeat</p>
                                            <div className="service-benefits-wrap">
                                                <div className="row">
                                                    <div className="col-lg-7 order-0 order-lg-2">
                                                        <div className="benefits-img">
                                                            <img src="/assets/img/services/sb_img01.jpg" alt="" />
                                                            <img src="/assets/img/services/sb_img02.jpg" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-5">
                                                        <div className="benefits-content">
                                                            <h2 className="title">Our Service Benefits</h2>
                                                            <p>There are many variations of passages of Lorem by injected humour, or randomised words whic Lorem Ipsum, you need to.</p>
                                                            <ul className="list-wrap">
                                                                <li><i className="fas fa-check-circle" />In id diam nec nisi congue tincidunt</li>
                                                                <li><i className="fas fa-check-circle" />Vestibulum tincidunt arcu vel nisl</li>
                                                                <li><i className="fas fa-check-circle" />Provide the best roof services</li>
                                                                <li><i className="fas fa-check-circle" />Sed tristique lorem non tesque</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6">
                                    <aside className="services-sidebar">
                                        <div className="services-widget">
                                            <h4 className="widget-title">Our All Service</h4>
                                            <div className="our-services-list">
                                                <ul className="list-wrap">
                                                    <li><Link href="#">Single play roofing<i className="fas fa-arrow-right" /></Link></li>
                                                    <li><Link href="#">Modified roofing<i className="fas fa-arrow-right" /></Link></li>
                                                    <li><Link href="#">Buil-up roofing<i className="fas fa-arrow-right" /></Link></li>
                                                    <li><Link href="#">Roof inspection<i className="fas fa-arrow-right" /></Link></li>
                                                    <li><Link href="#">Metal roofing<i className="fas fa-arrow-right" /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="services-widget widget-bg" data-background="/assets/img/services/sw_bg.jpg">
                                            <h4 className="widget-title">Get a free quote</h4>
                                            <form action="#" className="sidebar-form">
                                                <div className="form-grp">
                                                    <input id="name" type="text" placeholder="Your Name" />
                                                </div>
                                                <div className="form-grp">
                                                    <input id="email" type="text" placeholder="Your Email Address" />
                                                </div>
                                                <div className="form-grp">
                                                    <textarea id="message" placeholder="Your Message" />
                                                </div>
                                                <button type="submit" className="btn btn-two">Contact Us</button>
                                            </form>
                                        </div>
                                        <div className="services-widget">
                                            <h4 className="widget-title">Our Brochures Download</h4>
                                            <div className="download-wrap">
                                                <Link href="assets/img/services/services_details01.jpg" download target="_blank"><i className="fas fa-cloud-download-alt" />Service Details.pdf 65 KB</Link>
                                                <Link href="assets/img/services/services_details01.jpg" download target="_blank"><i className="fas fa-file-pdf" />Roofing Models.doc 48 KB</Link>
                                            </div>
                                        </div>
                                    </aside>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* services-details-area-end */}
                    {/* brand-area */}
                    <Brand3 />
                </div>

            </Layout>
        </>
    )
}