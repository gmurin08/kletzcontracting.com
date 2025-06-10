import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'
import Counter2 from "@/components/sections/Counter2"
import CtaContact from "@/components/sections/CtaContact"
import Head from "next/head"
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
            <Head>
                <title>Pittsburgh Service Areas | Roofing & Remodeling in Allegheny, Beaver, Washington Counties</title>
                <meta name="description" content="Kletz Contracting serves Pittsburgh and surrounding areas including Allegheny County, Beaver County, Washington County, and Butler County. Professional roofing, siding, and remodeling services in Western Pennsylvania." />
                <meta property="og:title" content="Pittsburgh Service Areas | Roofing & Remodeling in Allegheny, Beaver, Washington Counties" />
                <meta property="og:description" content="Kletz Contracting serves Pittsburgh and surrounding areas including Allegheny County, Beaver County, Washington County, and Butler County. Professional roofing, siding, and remodeling services in Western Pennsylvania." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://kletzcontracting.com/service-areas" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Pittsburgh Service Areas | Roofing & Remodeling in Allegheny, Beaver, Washington Counties" />
                <meta name="twitter:description" content="Kletz Contracting serves Pittsburgh and surrounding areas including Allegheny County, Beaver County, Washington County, and Butler County. Professional roofing, siding, and remodeling services in Western Pennsylvania." />
            </Head>
            <Layout breadcrumbTitle="Service Areas">
                <div>
                    <section className="inner-services-area pt-115 pb-90">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-6">
                                <div className="section-title text-center mb-50">
                                    <span className="sub-title">Where We Work</span>
                                    <h2 className="title">Proudly Serving Western Pennsylvania</h2>
                                    <p>We provide professional roofing, siding, and exterior solutions across Allegheny County, Beaver County, Washington County, and parts of Butler County. From downtown Pittsburgh to the suburban communities of Cranberry Township, Mt. Lebanon, Upper St. Clair, and Peters Township, we bring quality craftsmanship to your neighborhood.</p>
                                    </div>  
                                </div>
                            </div>
                            <div className="row">
                                {[
                                    { 
                                        title: 'Allegheny County', 
                                        description: 'Our largest service area includes Pittsburgh and surrounding communities like Mt. Lebanon, Upper St. Clair, and Bethel Park.',
                                        communities: 'Pittsburgh, Mt. Lebanon, Upper St. Clair, Bethel Park, South Park, Whitehall',
                                        slug: 'allegheny-county',
                                        url:'/assets/img/areas/allegheny.webp'
                                    },
                                    { 
                                        title: 'Beaver County', 
                                        description: 'Serving the scenic communities along the Ohio River including Sewickley and Economy Borough.',
                                        communities: 'Sewickley, Economy, Beaver, Aliquippa, Rochester, Baden',
                                        slug: 'beaver-county',
                                        url:'/assets/img/areas/beaver.webp'
                                    },
                                    { 
                                        title: 'Washington County', 
                                        description: 'Professional services for Peters Township, McMurray, Canonsburg and the growing southwestern suburbs.',
                                        communities: 'Peters Township, McMurray, Canonsburg, Washington, South Fayette',
                                        slug: 'washington-county',
                                        url:'/assets/img/areas/washington.webp'
                                    },
                                    { 
                                        title: 'Southern Butler County', 
                                        description: 'Quality roofing and remodeling for Cranberry Township, Mars, and the northern suburban communities.',
                                        communities: 'Cranberry Township, Mars, Wexford, Pine Township, Adams Township',
                                        slug: 'butler-county',
                                        url:'/assets/img/areas/butler.webp'
                                    },
                                ].map((area, index) => (
                                    <div className="col-lg-6 col-md-12 mb-4" key={index}>
                                        <div style={{
                                            backgroundColor: '#fff',
                                            borderRadius: '8px',
                                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                                            overflow: 'hidden',
                                            border: '1px solid #e0e0e0'
                                        }}>
                                            {/* Image placeholder */}
                                            <div style={{
                                                width: '100%',
                                                height: '200px',
                                                backgroundImage: `url(${area.url})`,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontSize: '14px',
                                                color: '#999',
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center'
                                            }}>
                                                Area Image Placeholder
                                            </div>
                                            
                                            {/* Content */}
                                            <div style={{ padding: '20px' }}>
                                                <h3 style={{ 
                                                    fontSize: '1.5rem', 
                                                    fontWeight: '600', 
                                                    marginBottom: '12px',
                                                    color: '#333'
                                                }}>
                                                    <Link href={`/service-areas/${area.slug}`} style={{ color: '#333', textDecoration: 'none' }}>
                                                        {area.title}
                                                    </Link>
                                                </h3>
                                                
                                                <p style={{ 
                                                    fontSize: '0.95rem', 
                                                    color: '#666',
                                                    marginBottom: '15px',
                                                    lineHeight: '1.5'
                                                }}>
                                                    {area.description}
                                                </p>
                                                
                                                <div style={{ marginBottom: '15px' }}>
                                                    <strong style={{ fontSize: '0.9rem', color: '#333' }}>Communities Served:</strong>
                                                    <p style={{ 
                                                        fontSize: '0.85rem', 
                                                        color: '#777',
                                                        margin: '5px 0 0 0',
                                                        lineHeight: '1.4'
                                                    }}>
                                                        {area.communities}
                                                    </p>
                                                </div>
                                                
                                                {/* <Link href={`/service-areas/${area.slug}`} style={{
                                                    display: 'inline-block',
                                                    padding: '8px 16px',
                                                    backgroundColor: '#007bff',
                                                    color: 'white',
                                                    textDecoration: 'none',
                                                    borderRadius: '4px',
                                                    fontSize: '0.9rem',
                                                    fontWeight: '500'
                                                }}>
                                                    Learn More
                                                </Link> */}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                </div>
                        </div>
                    </section>
                    {/* Local Communities Section */}
                    <section className="communities-area pt-60 pb-60">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-10">
                                    <div className="section-title text-center mb-40">
                                        <h3 className="title">Local Communities We Serve</h3>
                                        <p>Our experienced team proudly serves homeowners and businesses throughout the greater Pittsburgh area:</p>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-3 col-sm-6">
                                            <ul className="communities-list">
                                                <li>Pittsburgh</li>
                                                <li>Mt. Lebanon</li>
                                                <li>Upper St. Clair</li>
                                                <li>Peters Township</li>
                                                <li>Bethel Park</li>
                                                <li>South Park</li>
                                            </ul>
                                        </div>
                                        <div className="col-md-3 col-sm-6">
                                            <ul className="communities-list">
                                                <li>Cranberry Township</li>
                                                <li>Mars</li>
                                                <li>Wexford</li>
                                                <li>Pine Township</li>
                                                <li>Sewickley</li>
                                                <li>Moon Township</li>
                                            </ul>
                                        </div>
                                        <div className="col-md-3 col-sm-6">
                                            <ul className="communities-list">
                                                <li>Robinson Township</li>
                                                <li>Coraopolis</li>
                                                <li>McMurray</li>
                                                <li>South Fayette</li>
                                                <li>Canonsburg</li>
                                                <li>Washington</li>
                                            </ul>
                                        </div>
                                        <div className="col-md-3 col-sm-6">
                                            <ul className="communities-list">
                                                <li>Beaver</li>
                                                <li>Economy</li>
                                                <li>Whitehall</li>
                                                <li>Brentwood</li>
                                                <li>Castle Shannon</li>
                                                <li>Baldwin</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="text-center mt-30">
                                        <p><strong>Don't see your community listed?</strong> We serve many areas throughout Western Pennsylvania. <Link href="/contact">Contact us</Link> to confirm service availability in your area.</p>
                                    </div>
                                </div>
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
  