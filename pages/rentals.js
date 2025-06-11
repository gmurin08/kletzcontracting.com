import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Head from "next/head"

export default function Rentals() {
    return (
        <>
            <Head>
                <title>Rental Agreements | Kletz Contracting</title>
                <meta name="description" content="Access rental agreements for Kletz Contracting services including dumpster rentals. View terms, conditions, and important rental information." />
                <meta property="og:title" content="Rental Agreements | Kletz Contracting" />
                <meta property="og:description" content="Access rental agreements for Kletz Contracting services including dumpster rentals." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://kletzcontracting.com/rentals" />
            </Head>

            <Layout>
                {/* Hero Image Section */}
                <section className="banner-area-three" style={{
                    backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/assets/img/dumpsters/blue-trash-dump.webp)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '400px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h1 className="title" style={{ color: 'white', fontSize: '3rem', marginBottom: '0' }}>
                                    Rental Agreements
                                </h1>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Rental Agreement Section */}
                <section className="services-details-area pt-120 pb-120">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="services-details-wrap">
                                    <div className="services-details-content">
                                        <h2 className="title">Dumpster Rental Agreement</h2>
                                        
                                        <p>Before renting a dumpster from Kletz Contracting, please review and complete our rental agreement. This agreement outlines the terms and conditions of your rental, including:</p>
                                        
                                        <ul className="list-wrap" style={{ marginBottom: '30px' }}>
                                            <li><i className="fas fa-check-circle"></i>Rental period and pricing</li>
                                            <li><i className="fas fa-check-circle"></i>Acceptable and prohibited materials</li>
                                            <li><i className="fas fa-check-circle"></i>Weight limits and overage fees</li>
                                            <li><i className="fas fa-check-circle"></i>Delivery and pickup procedures</li>
                                            <li><i className="fas fa-check-circle"></i>Safety requirements and placement guidelines</li>
                                            <li><i className="fas fa-check-circle"></i>Damage waiver and liability terms</li>
                                        </ul>

                                        <p>Our rental agreement ensures a smooth rental experience and helps protect both you and Kletz Contracting throughout the rental period. The agreement is quick and easy to complete online.</p>

                                        <div className="text-center" style={{ marginTop: '40px', marginBottom: '40px' }}>
                                            <a 
                                                href="https://sendlink.co/documents/doc-form/6810e1bbbd56f4288f4db5bb?locale=en_US" 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="btn btn-two"
                                                style={{ fontSize: '18px', padding: '15px 40px' }}
                                            >
                                                View Rental Agreement <i className="fas fa-arrow-right" style={{ marginLeft: '10px' }}></i>
                                            </a>
                                        </div>

                                        <div style={{ backgroundColor: '#f8f9fa', padding: '30px', borderRadius: '10px', marginTop: '40px' }}>
                                            <h4 style={{ marginBottom: '15px' }}>Questions About Your Rental?</h4>
                                            <p style={{ marginBottom: '20px' }}>If you have any questions about the rental agreement or need assistance, our team is here to help.</p>
                                            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                                                <a href="tel:4122002475" className="btn">
                                                    <i className="fas fa-phone" style={{ marginRight: '8px' }}></i>
                                                    Call (412) 200-2475
                                                </a>
                                                <Link href="/contact" className="btn btn-two">
                                                    Contact Us Online
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}

export async function getStaticProps() {
    return {
        props: {},
    };
}