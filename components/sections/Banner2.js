import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export default function Banner2() {
    const [showVideo, setShowVideo] = useState(false);
    const videoRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShowVideo(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );

        if (videoRef.current) observer.observe(videoRef.current);

        return () => {
            if (videoRef.current) observer.unobserve(videoRef.current);
        };
    }, []);

    return (
        <section className="banner-area-two parallax">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-6 col-md-10 order-0 order-lg-2">
                        <div className="banner-img-wrap" ref={videoRef}>
                            {showVideo ? (
                                <video
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
                            ) : (
                                <img
                                    src="/assets/img/banner/banner_bg.jpg"
                                    alt="Kletz Contracting Preview"
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
                            <span className="sub-title wow fadeInUp" data-wow-delay=".2s">Pittsburgh's Premier Roofers</span>
                            <h2 className="title wow fadeInUp" data-wow-delay=".4s">Expert Roofing Solutions For Steel City Homes</h2>
                            <p className="wow fadeInUp" data-wow-delay=".6s">
                                Protecting Pittsburgh homes from harsh winters, summer storms, and everything in between with quality materials and craftsmanship.
                            </p>
                            <Link href="/projects" className="btn wow fadeInUp" data-wow-delay=".8s">Explore Our Work</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="banner-shape-wrap">
                <ul className="list-wrap">
                    {Array.from({ length: 7 }, (_, i) => (
                        <li key={i}>
                            <img
                                src={`/assets/img/banner/h3_banner_shape0${i + 1}.png`}
                                alt="Decorative Shape"
                                className={
                                    i === 4 ? "wow fadeInLeft" :
                                    i === 6 ? "rotateme" :
                                    "layer"
                                }
                                data-depth={i < 4 ? (0.1 + i * 0.1).toFixed(1) : undefined}
                                loading="lazy"
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
