import Layout from "@/components/layout/Layout"
import Brand3 from "@/components/sections/Brand3"
export default function ProjectDetails() {

    return (
        <>
            <Layout breadcrumbTitle="Project Details">
                <div>
                    <section className="project-details-area pt-120">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="project-details-wrap">
                                        <div className="project-details-thumb">
                                            <img src="/assets/img/project/project_details01.jpg" alt="" />
                                        </div>
                                        <div className="project-details-content">
                                            <h2 className="title">Medium shot man working on roof restaurant building at sunset</h2>
                                            <p className="info-one">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in somes form, by injected humour, or randomised words which don't look even slightlcy believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of textss. All the Lorem Ipsum generators on the Internet tend to repeat</p>
                                            <p className="info-two">On the other hand, we denounce with righteous <span>indignation and dislike men</span> who are so our beguiled and demor alized by the charms of <span>pleasure of the moment</span>, so blinded by desire, that they cannot foresee.</p>
                                            <div className="project-challenge-wrap">
                                                <div className="row">
                                                    <div className="col-xl-5">
                                                        <div className="challenge-content">
                                                            <h2 className="title">The Challenge of Project</h2>
                                                            <p className="info-three">Sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum gen erators on the Internet tend our as a to repeat predefined chunks as necessary</p>
                                                            <p className="info-four">making this the firsttrue generator our on the Internet. It uses a dictionary of over as words, combined with a</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-7">
                                                        <div className="challenge-img">
                                                            <img src="/assets/img/project/project_details02.jpg" alt="" />
                                                            <img src="/assets/img/project/project_details03.jpg" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <h2 className="title-two">Project requirement</h2>
                                            <p className="info-five">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in somes form, by injected humour, or randomised words which don't look even slightlcy believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing.</p>
                                            <ul className="list-wrap">
                                                <li><i className="fas fa-check-circle" />Usability testing existing products</li>
                                                <li><i className="fas fa-check-circle" />Systems reviews</li>
                                                <li><i className="fas fa-check-circle" />Technical stakeholder interviews</li>
                                                <li><i className="fas fa-check-circle" />Usability testing existing products</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <aside className="project-sidebar">
                                        <div className="project-widget">
                                            <h4 className="widget-title">Project Details</h4>
                                            <div className="project-info-list">
                                                <ul className="list-wrap">
                                                    <li><span>Start Date :</span> 27 Dec {new Date().getFullYear()}</li>
                                                    <li><span>End Date :</span> 03 Jan {new Date().getFullYear()}</li>
                                                    <li><span>Clients :</span> Avabil</li>
                                                    <li><span>Tags:</span> Roofing Business</li>
                                                    <li><span>Website :</span> avabil.com</li>
                                                    <li><span>Category :</span> Roofing</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="project-widget">
                                            <h4 className="widget-title">Need Your Help?</h4>
                                            <div className="project-contact">
                                                <ul className="list-wrap">
                                                    <li><i className="fas fa-phone-alt" />+(323) 750-1234</li>
                                                    <li><i className="fas fa-envelope" />infoyour@albashti.com</li>
                                                    <li><i className="fab fa-skype" />Abubokkor AK</li>
                                                    <li><i className="fas fa-map-marker-alt" />374 FA Tower, William S Blvd <br /> 2721, IL, USA</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </aside>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* project-details-area-end */}
                    {/* brand-area */}
                    <Brand3 />
                </div>

            </Layout>
        </>
    )
}