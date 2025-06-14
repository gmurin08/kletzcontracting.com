import Link from "next/link"
import useMobileResponse from "@/hooks/useMobileResponse"

export default function Breadcrumb({ breadcrumbTitle }) {
    const isMobile = useMobileResponse()
    return (
        <>
            <section 
  className="breadcrumb-area breadcrumb-bg" 
  style={{ 
    backgroundImage: `url(${!isMobile ? "/assets/img/bg/breadcrumb_bg1.jpg" : "/assets/img/bg/kletz-mobile-banner.png"})` 
  }}
>
                <div className="breadcrumb-shape" data-background="/assets/img/images/breadcrumb_shape.png" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb-content">
                                <h2 className="title">{breadcrumbTitle}</h2>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">{breadcrumbTitle}</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
