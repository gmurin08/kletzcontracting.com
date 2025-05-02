import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'
import Counter2 from "@/components/sections/Counter2"
import CtaContact from "@/components/sections/CtaContact"
export default function Service() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <Layout breadcrumbTitle="Service Areas">
                <div>
                    <section className="inner-services-area pt-115 pb-90">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-6">
                                <div className="section-title text-center mb-50">
                                    <span className="sub-title">Where We Work</span>
                                    <h2 className="title">Proudly Serving Western Pennsylvania</h2>
                                    <p>We provide professional roofing, siding, and exterior solutions across Allegheny County, Beaver County, Washington County, and parts of Butler County.</p>
                                    </div>  
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                {[
                                    { id: 1, title: 'Allegheny County', bg: '/assets/img/areas/allegheny.jpg', slug: 'allegheny-county' },
                                    { id: 2, title: 'Beaver County', bg: '/assets/img/areas/beaver.jpg', slug: 'beaver-county' },
                                    { id: 3, title: 'Washington County', bg: '/assets/img/areas/washington.jpg', slug: 'washington-county' },
                                    { id: 4, title: 'Southern Butler County', bg: '/assets/img/areas/butler.jpg', slug: 'butler-county' },
                                ].map(area => (
                                    <div className="col-lg-4 col-md-6 col-sm-10" key={area.id}>
                                    <div className="services-item" data-background={area.bg}>
                                        <div className="services-content">
                                        <h2 className="title">
                                            <Link href={`/service-areas/${area.slug}`}>{area.title}</Link>
                                        </h2>
                                        </div>
                                    </div>
                                    </div>
                                ))}
                                </div>
                        </div>
                    </section>
                    {/* services-area-end */}
                    {/* area-bg */}
                    <div className="area-bg">
                        <div className="area-background-img jarallax" data-background="/assets/img/bg/area_bg01.jpg" />
                        {/* counter-area */}
                        <Counter2 />
                        {/* counter-area-end */}
                        {/* appointment-area */}
                                <div style={{}}>
                                    <CtaContact/>
                                </div>
                        {/* appointment-area-end */}
                    </div>
                    {/* area-bg-end */}
                    {/* support-area */}
                    <section className="support-area pt-115 pb-70">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-xl-4 col-md-6">
                <div className="support-item">
                    <div className="support-icon">
                        <img src="/assets/img/icon/support_icon01.svg" alt="Fast Roofing Estimates Icon" />
                    </div>
                    <div className="support-content">
                        <h4 className="title">Fast, Reliable Estimates</h4>
                        <p>We respond quickly and show up on time—because your project shouldn’t have to wait. Most estimates are delivered within 24–48 hours.</p>
                    </div>
                </div>
            </div>
            <div className="col-xl-4 col-md-6">
                <div className="support-item">
                    <div className="support-icon">
                        <img src="/assets/img/icon/support_icon02.svg" alt="Workmanship Guarantee Icon" />
                    </div>
                    <div className="support-content">
                        <h4 className="title">Quality Workmanship Guaranteed</h4>
                        <p>We stand behind every job with honest craftsmanship, durable materials, and attention to detail—no shortcuts, no compromises.</p>
                    </div>
                </div>
            </div>
            <div className="col-xl-4 col-md-6">
                <div className="support-item">
                    <div className="support-icon">
                        <img src="/assets/img/icon/support_icon03.svg" alt="Local Experts Icon" />
                    </div>
                    <div className="support-content">
                        <h4 className="title">Local Experts You Can Trust</h4>
                        <p>Serving Allegheny, Beaver, Washington, and Butler counties—we know the local codes, weather, and what it takes to protect your home.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

                </div>

            </Layout>
        </>
    )
}

export async function getStaticProps() {
    return {
      props: {}, // you can pass props here if needed
    };
  }
  