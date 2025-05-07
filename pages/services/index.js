import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'
import Counter2 from "@/components/sections/Counter2"
import BookingFormLarge from "@/components/sections/BookingFormLarge"
import SupportingFacts from "@/components/sections/SupportingFacts"

const services = [
    { id: 1, title: "Roofing", image: "/assets/img/services/roofing.jpg", icon: "/assets/img/icon/services_icon02.svg", slug: "roofing" },
    { id: 2, title: "Siding", image: "/assets/img/services/siding.jpg", icon: "/assets/img/icon/services_icon01.svg", slug: "siding" },
    { id: 3, title: "Residential Remodeling", image: "/assets/img/services/residential.jpg", icon: "/assets/img/icon/services_icon04.svg", slug: "residential-remodeling" },
    { id: 4, title: "Commercial Remodeling", image: "/assets/img/services/commercial.jpg", icon: "/assets/img/icon/commercial.svg", slug: "commercial-remodeling" },
    { id: 5, title: "Home Additions", image: "/assets/img/services/additions.jpg", icon: "/assets/img/icon/addition.svg", slug: "home-additions" },
    { id: 6, title: "Deck Construction", image: "/assets/img/services/decks.jpg", icon: "/assets/img/icon/deck.svg", slug: "deck-construction" },
    { id: 7, title: "Dumpster Services", image: "/assets/img/services/dumpster.jpg", icon: "/assets/img/icon/dumpster.svg", slug: "dumpster-service" },
]
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
            <Layout breadcrumbTitle="Services">
                <div>
                    <div className="row justify-content-center">
                        {services.map((service) => (
                            <div className="col-lg-4 col-md-6 col-sm-10" key={service.id}>
                            <div
                                className="services-item wow fadeInUp"
                                data-wow-delay={`.${service.id * 2}s`}
                                data-background={service.image}
                                onMouseEnter={() => handleToggle(service.id)}
                                onMouseLeave={() => handleToggle(service.id)}
                            >
                                <div className="services-icon" style={{ display: isActive.key === service.id ? "none" : "flex" }}>
                                <img src={service.icon} alt={`${service.title} Icon`} />
                                </div>
                                <div className="services-content">
                                <h2 className="title" style={{ display: isActive.key === service.id ? "none" : "block" }}>
                                    <Link href={`/services/${service.slug}`}>{service.title}</Link>
                                </h2>
                                <h2 className="number">{String(service.id).padStart(2, "0")}</h2>
                                </div>
                                <div className="services-overlay-content" style={{ display: isActive.key === service.id ? "block" : "none" }}>
                                <h2 className="title"><Link href={`/services/${service.slug}`}>{service.title}</Link></h2>
                                <p>Learn more about our {service.title.toLowerCase()} services, trusted by homeowners and businesses throughout Western Pennsylvania.</p>
                                <Link href={`/services/${service.slug}`} className="read-more">
                                    Learn More <i className="fas fa-arrow-right" />
                                </Link>
                                </div>
                            </div>
                            </div>
                            ))}
                    </div>

                    <div className="area-bg">
                        <div className="area-background-img jarallax" data-background="/assets/img/bg/area_bg01.jpg" />
                        <Counter2 />
                        <BookingFormLarge/>
                    </div>
                    <SupportingFacts/>
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
  