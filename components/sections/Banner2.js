import { useEffect } from "react";
import Link from "next/link";

export default function Banner2() {
    // useEffect(() => {
    //     const video = document.createElement("video");
    //     video.src = "/assets/vid/Roof-Rise.mp4";
    //     video.autoplay = true;
    //     video.muted = true;
    //     video.loop = true;
    //     video.playsInline = true;
    //     video.style = "object-fit:cover;display:block;width:100%;height:100%;max-width:400px;";
    //     const container = document.querySelector(".banner-img-wrap .lazy-video-target");
    //     if (container) {
    //         container.innerHTML = "";
    //         container.appendChild(video);
    //     }
    // }, []);

    return (
        <>
            <section className="banner-area-two parallax">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6 col-md-10 order-0 order-lg-2">
                            <div className="banner-img-wrap">
                                <div className="lazy-video-target">
                                    <img
                                        src="/assets/img/banner/banner_bg.jpg"
                                        alt="Kletz Contracting Roofing Video Poster"
                                        width="400"
                                        height="303"
                                        style={{ objectFit: "cover", display: "block" }}
                                        loading="eager"
                                        fetchPriority="high"
                                    />
                                </div>
                                <div className="overly-text">
                                    <h2 className="title">Kletz Contracting</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="banner-content-two">
                                <span className="sub-title ">Pittsburgh's Premier Roofers</span>
                                <h2 className="title" style={{ visibility: "visible" }}>
                                Expert Roofing Solutions For Steel City Homes
                                </h2>

                                <p className="">
                                    Protecting Pittsburgh homes from harsh winters, summer storms, and everything in
                                    between with quality materials and craftsmanship.
                                </p>
                                <Link href="/projects" className="btn ">
                                    Explore Our Work
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="banner-shape-wrap">
                    <ul className="list-wrap">
                        <li><img src="/assets/img/banner/h3_banner_shape01.png" alt="" className="layer" data-depth="0.3" /></li>
                        <li><img src="/assets/img/banner/h3_banner_shape02.png" alt="" className="layer" data-depth="0.3" /></li>
                        <li><img src="/assets/img/banner/h3_banner_shape03.png" alt="" className="layer" data-depth="0.1" /></li>
                        <li><img src="/assets/img/banner/h3_banner_shape04.png" alt="" className="layer" data-depth="0.2" /></li>
                        <li><img src="/assets/img/banner/h3_banner_shape05.png" alt="" className="" /></li>
                        <li><img src="/assets/img/banner/h3_banner_shape06.png" alt="" /></li>
                        <li><img src="/assets/img/banner/h3_banner_shape07.png" alt="" className="rotateme" /></li>
                    </ul>
                </div> */}
            </section>
        </>
    );
}
