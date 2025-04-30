import BlogPost from "@/components/blog/BlogPost"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Blog() {

    return (
        <>
            <Layout breadcrumbTitle="Blog">
                <section className="inner-blog-area pt-120 pb-120">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-8">
                                <div className="row">
                                <BlogPost showItem={6} showPagination />
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-10">
                                <aside className="blog-sidebar">
                                    <div className="blog-widget">
                                        <div className="sidebar-search">
                                            <h4 className="widget-title">Search</h4>
                                            <form action="#">
                                                <input id="search" type="text" placeholder="Search" />
                                                <button type="submit"><i className="fas fa-search" /></button>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="blog-widget">
                                        <h4 className="widget-title">Categories</h4>
                                        <div className="categories-list">
                                            <ul className="list-wrap">
                                                <li><Link href="/#">Business Consulting <span>(05)</span></Link></li>
                                                <li><Link href="/#">Financial Investment <span>(07)</span></Link></li>
                                                <li><Link href="/#">IT Consultations <span>(03)</span></Link></li>
                                                <li><Link href="/#">Digital Analytics <span>(04)</span></Link></li>
                                                <li><Link href="/#">Payment Processing <span>(02)</span></Link></li>
                                                <li><Link href="/#">Software Solutions <span>(09)</span></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="blog-widget">
                                        <h4 className="widget-title">Recent News</h4>
                                        <div className="rc-post-wrap">
                                            <div className="rc-post-item">
                                                <div className="rc-post-thumb">
                                                    <Link href="/blog-details"><img src="/assets/img/blog/rc_post01.jpg" alt="" /></Link>
                                                </div>
                                                <div className="rc-post-content">
                                                    <h5 className="title"><Link href="/blog-details">Aerial view of a private house with on roof</Link></h5>
                                                    <span><i className="fas fa-calendar-alt" />22 Jan {new Date().getFullYear()}</span>
                                                </div>
                                            </div>
                                            <div className="rc-post-item">
                                                <div className="rc-post-thumb">
                                                    <Link href="/blog-details"><img src="/assets/img/blog/rc_post02.jpg" alt="" /></Link>
                                                </div>
                                                <div className="rc-post-content">
                                                    <h5 className="title"><Link href="/blog-details">Medium shot men working on roof presentation</Link></h5>
                                                    <span><i className="fas fa-calendar-alt" />22 Jan {new Date().getFullYear()}</span>
                                                </div>
                                            </div>
                                            <div className="rc-post-item">
                                                <div className="rc-post-thumb">
                                                    <Link href="/blog-details"><img src="/assets/img/blog/rc_post03.jpg" alt="" /></Link>
                                                </div>
                                                <div className="rc-post-content">
                                                    <h5 className="title"><Link href="/blog-details">Free photo cute family a roof above their head</Link></h5>
                                                    <span><i className="fas fa-calendar-alt" />22 Jan {new Date().getFullYear()}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="blog-widget">
                                        <h4 className="widget-title">Popular Tags</h4>
                                        <div className="tag-list-wrap">
                                            <ul className="list-wrap">
                                                <li><Link href="/#">Construction</Link></li>
                                                <li><Link href="/#">Roofing</Link></li>
                                                <li><Link href="/#">Repairer</Link></li>
                                                <li><Link href="/#">Maintenance</Link></li>
                                                <li><Link href="/#">Remodeling</Link></li>
                                                <li><Link href="/#">Roof</Link></li>
                                                <li><Link href="/#">Roofing Service</Link></li>
                                                <li><Link href="/#">Consulting</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="blog-widget widget-bg" data-background="/assets/img/blog/widget_bg.jpg">
                                        <h4 className="widget-title">Need Help</h4>
                                        <div className="sidebar-content">
                                            <h4 className="title">Beautiful red brick house with decorative lights</h4>
                                            <p>Sit amet consectetur adipiscing elseds do eius mod tempor incididunt</p>
                                            <Link href="/contact" className="btn btn-two">Contact Us</Link>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    )
}