import Link from "next/link"

export default function Blog1() {
    return (
        <>
            <section className="blog-area pt-115 pb-90">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section-title text-center mb-60 tg-heading-subheading animation-style3">
                                <span className="sub-title tg-element-title">Our News</span>
                                <h2 className="title tg-element-title">Read Our Latest News  Blog</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-xl-4 col-md-6">
                            <div className="blog-post-item">
                                <div className="blog-post-thumb">
                                    <Link href="/blog-details"><img src="/assets/img/blog/blog_img01.jpg" alt="" /></Link>
                                </div>
                                <div className="blog-post-content">
                                    <Link href="/blog" className="tag">Quality Materials</Link>
                                    <div className="blog-meta">
                                        <ul className="list-wrap">
                                            <li><i className="far fa-user" /> By <Link href="/blog-details">Admin</Link></li>
                                            <li><i className="fas fa-calendar-alt" />23 Dec {new Date().getFullYear()}</li>
                                        </ul>
                                    </div>
                                    <h2 className="title"><Link href="/blog-details">Building worker help each other with at construction site</Link></h2>
                                    <Link href="/blog-details" className="link-btn">Read More<i className="fas fa-arrow-right" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="blog-post-item">
                                <div className="blog-post-thumb">
                                    <Link href="/blog-details"><img src="/assets/img/blog/blog_img02.jpg" alt="" /></Link>
                                </div>
                                <div className="blog-post-content">
                                    <Link href="/blog" className="tag">House Roof Work</Link>
                                    <div className="blog-meta">
                                        <ul className="list-wrap">
                                            <li><i className="far fa-user" /> By <Link href="/blog-details">Admin</Link></li>
                                            <li><i className="fas fa-calendar-alt" />23 Dec {new Date().getFullYear()}</li>
                                        </ul>
                                    </div>
                                    <h2 className="title"><Link href="/blog-details">Full shot roofers working together with helmets</Link></h2>
                                    <Link href="/blog-details" className="link-btn">Read More<i className="fas fa-arrow-right" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="blog-post-item">
                                <div className="blog-post-thumb">
                                    <Link href="/blog-details"><img src="/assets/img/blog/blog_img03.jpg" alt="" /></Link>
                                </div>
                                <div className="blog-post-content">
                                    <Link href="/blog" className="tag">Construction Engineer</Link>
                                    <div className="blog-meta">
                                        <ul className="list-wrap">
                                            <li><i className="far fa-user" /> By <Link href="/blog-details">Admin</Link></li>
                                            <li><i className="fas fa-calendar-alt" />23 Dec {new Date().getFullYear()}</li>
                                        </ul>
                                    </div>
                                    <h2 className="title"><Link href="/blog-details">Hard hatswork at the heavy manufacturing factory industrial</Link></h2>
                                    <Link href="/blog-details" className="link-btn">Read More<i className="fas fa-arrow-right" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
