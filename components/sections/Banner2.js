import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Banner2() {
    const videoRef = useRef(null);
    const [canPlay, setCanPlay] = useState(false);

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            const handleCanPlay = () => setCanPlay(true);
            video.addEventListener("canplay", handleCanPlay);
            return () => video.removeEventListener("canplay", handleCanPlay);
        }
    }, []);

    return (
        <section className="banner-area-two parallax">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-6 col-md-10 order-0 order-lg-2">
                        <div className="banner-img-wrap">
                            {canPlay && (
                                <video
                                    ref={videoRef}
                                    src="/assets/vid/Roof-Rise.mp4"
                                    width="400"
                                    height="303"
                                    style={{ objectFit: "cover", display: "block" }}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    preload="none"
                                    poster="/assets/img/banner/banner_bg.jpg"
                                />
                            )}
                            {!canPlay && (
                                <img
                                    src="/assets/img/banner/banner_bg.jpg"
                                    alt="Banner Placeholder"
                                    width="400"
                                    height="303"
                                    style={{ objectFit: "cover", display: "block" }}
                                />
                            )}
                            <div className="overly-text">
                                <h2 className="title">Kletz Contracting</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="banner-content-two">
                            <span className="sub-title wow fadeInUp">Pittsburgh's Premier Roofers</span>
                            <h2 className="title wow fadeInUp">Expert Roofing Solutions For Steel City Homes</h2>
                            <p className="wow fadeInUp">
                                Protecting Pittsburgh homes from harsh winters, summer storms, and everything in between with quality materials and craftsmanship.
                            </p>
                            <Link href="/projects" className="btn wow fadeInUp">
                                Explore Our Work
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="banner-shape-wrap">
                <ul className="list-wrap">
                    <li><img src="/assets/img/banner/h3_banner_shape01.png" alt="" className="layer" data-depth="0.3" /></li>
                    <li><img src="/assets/img/banner/h3_banner_shape02.png" alt="" className="layer" data-depth="0.3" /></li>
                    <li><img src="/assets/img/banner/h3_banner_shape03.png" alt="" className="layer" data-depth="0.1" /></li>
                    <li><img src="/assets/img/banner/h3_banner_shape04.png" alt="" className="layer" data-depth="0.2" /></li>
                    <li><img src="/assets/img/banner/h3_banner_shape05.png" alt="" className="wow fadeInLeft" /></li>
                    <li><img src="/assets/img/banner/h3_banner_shape06.png" alt="" /></li>
                    <li><img src="/assets/img/banner/h3_banner_shape07.png" alt="" className="rotateme" /></li>
                </ul>
            </div>
        </section>
    );
}
