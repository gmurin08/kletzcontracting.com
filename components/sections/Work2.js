import { useState } from "react"


export default function Work2() {
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
            <section className="work-area-two work-bg" data-background="/assets/img/bg/work_bg.jpg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="section-title text-center mb-60 tg-heading-subheading animation-style3">
                                <span className="sub-title tg-element-title">Precision Roofing, Trusted Craftsmanship</span>
                                <h2 className="title tg-element-title">Our Step-by-Step Approach to Roof Installation & Repair</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="work-inner" data-background="/assets/img/images/h3_work_img.jpg">
                                <div className="work-tooltip-wrap">
                                    <div className={isActive.key == 1 ? "tooltip-item top active" : "tooltip-item top"} onClick={() => handleToggle(1)}>
                                        <div className="tooltip-btn pulse">
                                            <i className="fas fa-plus" />
                                        </div>
                                        <div className="tooltip-content">
                                            <h2 className="title">Roof Deck Inspection</h2>
                                            <p>We begin by thoroughly inspecting the roof deck for signs of rot, sagging, or moisture damage—ensuring a solid foundation before installation begins.</p>
                                        </div>
                                    </div>
                                    <div className={isActive.key == 2 ? "tooltip-item top active" : "tooltip-item top"} onClick={() => handleToggle(2)}>
                                        <div className="tooltip-btn pulse">
                                            <i className="fas fa-plus" />
                                        </div>
                                        <div className="tooltip-content">
                                            <h2 className="title">Ice & Water Shield</h2>
                                            <p>We install a high-performance barrier along valleys and edges to prevent water infiltration caused by ice dams or heavy rain.</p>
                                        </div>
                                    </div>
                                    <div className={isActive.key == 3 ? "tooltip-item active" : "tooltip-item"} onClick={() => handleToggle(3)}>
                                        <div className="tooltip-btn pulse">
                                            <i className="fas fa-plus" />
                                        </div>
                                        <div className="tooltip-content">
                                            <h2 className="title">Synthetic Underlayment</h2>
                                            <p>This modern, breathable layer protects your roof from wind-driven rain and acts as a second line of defense beneath the shingles.</p>
                                        </div>
                                    </div>
                                    <div className={isActive.key == 4 ? "tooltip-item active" : "tooltip-item"} onClick={() => handleToggle(4)}>
                                        <div className="tooltip-btn pulse">
                                            <i className="fas fa-plus" />
                                        </div>
                                        <div className="tooltip-content">
                                            <h2 className="title">Drip Edge Flashing</h2>
                                            <p>We install metal drip edge flashing along eaves and rakes to guide water away from fascia and into your gutters, preventing long-term damage.</p>
                                        </div>
                                    </div>
                                    <div className={isActive.key == 5 ? "tooltip-item active" : "tooltip-item"} onClick={() => handleToggle(5)}>
                                        <div className="tooltip-btn pulse">
                                            <i className="fas fa-plus" />
                                        </div>
                                        <div className="tooltip-content">
                                            <h2 className="title">Starter Strip Shingles</h2>
                                            <p>Our starter strip shingles provide a secure foundation for your first row of shingles, improving wind resistance and long-term durability.</p>
                                        </div>
                                    </div>
                                    <div className={isActive.key == 6 ? "tooltip-item active" : "tooltip-item"} onClick={() => handleToggle(6)}>
                                        <div className="tooltip-btn pulse">
                                            <i className="fas fa-plus" />
                                        </div>
                                        <div className="tooltip-content">
                                            <h2 className="title">Ridge Vent & Cap Shingles</h2>
                                            <p>We complete your roof with ridge ventilation and matching cap shingles to ensure proper attic airflow and a clean, finished appearance.</p>
                                        </div>
                                    </div>
                                    <div className={isActive.key == 7 ? "tooltip-item active" : "tooltip-item"} onClick={() => handleToggle(7)}>
                                        <div className="tooltip-btn pulse">
                                            <i className="fas fa-plus" />
                                        </div>
                                        <div className="tooltip-content">
                                            <h2 className="title">Architectural Shingle Installation</h2>
                                            <p>We install dimensional shingles with precision to give your home a bold, layered look with superior weather protection.</p>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
