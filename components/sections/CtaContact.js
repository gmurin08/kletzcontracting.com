const ctaCopy = {
    roofing: {
      subTitle: "Get a Free Roofing Estimate",
      title: "Have Questions About Your Roof? Let’s Talk.",
    },
    siding: {
      subTitle: "Protect & Elevate Your Home",
      title: "Request a Free Siding Consultation Today",
    },
    gutters: {
      subTitle: "Keep Water Away from Your Foundation",
      title: "Ask Us About Seamless Gutter Installation",
    },
    windows: {
      subTitle: "Energy-Efficient Window Upgrades",
      title: "Explore Window Replacement Options",
    },
    dumpster: {
        subTitle: "Fast, Reliable Dumpster Rentals",
        title: "Reserve a Dumpster for Your Next Project",
      }
  }
  

export default function CtaContact({category="roofing"}) {
    const content = ctaCopy[category] || ctaCopy.roofing;

    return (
        <>
            <section className="newsletter-area jarallax newsletter-bg" data-background="/assets/img/bg/newsletter_bg.jpg">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-5">
                            <div className="newsletter-content">
                                <div className="section-title white-title-two tg-heading-subheading animation-style3">
                                    <span className="sub-title tg-element-title">{content.subTitle}</span>
                                    <h2 className="title tg-element-title">{content.title}</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7">
                            <div className="newsletter-form">
                                <form action="#">
                                    <div className="form-grp">
                                        <input type="text" placeholder="Name*" />
                                    </div>
                                    <div className="form-grp">
                                        <input type="text" placeholder="Phone*" />
                                    </div>
                                    <div className="form-grp">
                                        <input type="text" placeholder="Email*" />
                                    </div>
                                    <button type="submit" className="btn btn-two">Submit Now</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
