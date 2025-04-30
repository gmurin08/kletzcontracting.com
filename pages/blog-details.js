import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function BlogDetails() {

    return (
        <>
            <Layout breadcrumbTitle="Blog Details">
                <section className="blog-details-area pt-120 pb-120">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-8">
                                <div className="blog-details-wrap">
                                    <div className="blog-details-thumb">
                                        <img src="/assets/img/blog/blog_details01.jpg" alt="" />
                                    </div>
                                    <div className="blog-details-content">
                                        <div className="blog-meta">
                                            <ul className="list-wrap">
                                                <li><i className="far fa-user" /> By <Link href="/blog-details">Admin</Link></li>
                                                <li><i className="fas fa-calendar-alt" />23 Dec {new Date().getFullYear()}</li>
                                                <li><i className="far fa-comments" />05</li>
                                                <li><i className="far fa-eye" />1,526 VIEWS</li>
                                            </ul>
                                        </div>
                                        <h2 className="title">Building worker help each other with at construction site</h2>
                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at it as layout. The point of using Lorem Ipsum is that it has a more normal distribution.Collaboratively pontificat bleed aedge resources with inexpensive methodologies globally initiate multidisciplinary compatible architectures as our aspiteously repurpose leading edge growth strategies</p>
                                        <blockquote>
                                            <p>Which Podcasts Should Web Designer And Developers Be Listening To Ultimate Digital Clean our
                                                Checklist Prepare eadable when content of a page when looking at its layout.</p>
                                            <cite>David H. Molina</cite>
                                        </blockquote>
                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at it as layout. The point of using Lorem Ipsum is that it has a more normal distribution.</p>
                                        <div className="bd-inner-img-wrap">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <img src="/assets/img/blog/blog_details02.jpg" alt="" />
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="bd-inner-content">
                                                        <p>The point of using Lorm Ipsum is that it has a our more normal our distribution Collaboratively pontificat bleed edge as resources with inexpensive thje methodologie
                                                            sglobally initiate multidisciplinary.</p>
                                                        <ul className="list-wrap">
                                                            <li><i className="fas fa-check-circle" />Information Tecaccumulation of technologies</li>
                                                            <li><i className="fas fa-check-circle" />Autonomous house with its garden and office</li>
                                                            <li><i className="fas fa-check-circle" />Self-expression through decor and art</li>
                                                            <li><i className="fas fa-check-circle" />Regular update monitoring</li>
                                                            <li><i className="fas fa-check-circle" />Functional minimalism</li>
                                                            <li><i className="fas fa-check-circle" />Regular update monitoring</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in a our some form, by injected humour, or randomised words which don't look even slightly believable. If you are going our as to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle the of text. All the Lorem Ipsum generators on the Internet tend.</p>
                                        <div className="blog-details-bottom">
                                            <div className="row align-items-center">
                                                <div className="col-lg-8">
                                                    <div className="post-tags">
                                                        <h5 className="title">Tag:</h5>
                                                        <ul className="list-wrap">
                                                            <li><Link href="#">#Construction</Link></li>
                                                            <li><Link href="#">#Roofing Service</Link></li>
                                                            <li><Link href="#">#Roofing</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4">
                                                    <div className="blog-post-share">
                                                        <h5 className="title">Share:</h5>
                                                        <ul className="list-wrap">
                                                            <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                                            <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                                            <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                                            <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pev-next-post-wrap">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="post-item">
                                                    <div className="post-inner">
                                                        <div className="thumb">
                                                            <Link href="/blog-details"><img src="/assets/img/blog/pb_post_img01.jpg" alt="" /></Link>
                                                        </div>
                                                        <div className="content">
                                                            <h2 className="title"><Link href="/blog-details">Portrait smiling professional engineer laptop</Link></h2>
                                                            <span><i className="far fa-calendar-alt" />22 Jan {new Date().getFullYear()}</span>
                                                        </div>
                                                    </div>
                                                    <div className="post-btn">
                                                        <Link href="/blog-details"><i className="fas fa-arrow-left" />Prev</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="post-item next-post-item">
                                                    <div className="post-inner">
                                                        <div className="thumb">
                                                            <Link href="/blog-details"><img src="/assets/img/blog/pb_post_img02.jpg" alt="" /></Link>
                                                        </div>
                                                        <div className="content">
                                                            <h2 className="title"><Link href="/blog-details">Full shot man with helmet sitting on roof</Link></h2>
                                                            <span><i className="far fa-calendar-alt" />22 Jan {new Date().getFullYear()}</span>
                                                        </div>
                                                    </div>
                                                    <div className="post-btn next-btn">
                                                        <Link href="/blog-details"><i className="fas fa-arrow-right" />next</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="comments-wrap">
                                        <h4 className="comments-wrap-title">Comments (04)</h4>
                                        <div className="latest-comments">
                                            <ul className="list-wrap">
                                                <li>
                                                    <div className="comments-box">
                                                        <div className="comments-avatar">
                                                            <img src="/assets/img/blog/comment_avatar01.png" alt="" />
                                                        </div>
                                                        <div className="comments-text">
                                                            <div className="avatar-name">
                                                                <h6 className="name">
                                                                    Abubokkor Siddik
                                                                    <Link href="#" className="comment-reply-link"><i className="fas fa-reply" />Reply</Link>
                                                                </h6>
                                                                <span className="date">September 6, {new Date().getFullYear()}</span>
                                                            </div>
                                                            <p>Lorem ipsum dolor sit amet consectetur. Ut tellus suspendisse nulla aliquam. Risus rutrum tellus ultrices.</p>
                                                        </div>
                                                    </div>
                                                    <ul className="list-wrap children">
                                                        <li>
                                                            <div className="comments-box">
                                                                <div className="comments-avatar">
                                                                    <img src="/assets/img/blog/comment_avatar02.png" alt="" />
                                                                </div>
                                                                <div className="comments-text">
                                                                    <div className="avatar-name">
                                                                        <h6 className="name">
                                                                            Admin
                                                                            <Link href="#" className="comment-reply-link"><i className="fas fa-reply" />Reply</Link>
                                                                        </h6>
                                                                        <span className="date">September 6, {new Date().getFullYear()}</span>
                                                                    </div>
                                                                    <p>Lorem ipsum dolor sit amet consectetur. Ut tellus suspendisse nulla aliquam. Risus rutrum tellus ultrices.</p>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <div className="comments-box">
                                                        <div className="comments-avatar">
                                                            <img src="/assets/img/blog/comment_avatar03.png" alt="" />
                                                        </div>
                                                        <div className="comments-text">
                                                            <div className="avatar-name">
                                                                <h6 className="name">
                                                                    Elliot Alderson
                                                                    <Link href="#" className="comment-reply-link"><i className="fas fa-reply" />Reply</Link>
                                                                </h6>
                                                                <span className="date">September 6, {new Date().getFullYear()}</span>
                                                            </div>
                                                            <p>Lorem ipsum dolor sit amet consectetur. Ut tellus suspendisse nulla aliquam. Risus rutrum tellus.</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="comments-box">
                                                        <div className="comments-avatar">
                                                            <img src="/assets/img/blog/comment_avatar04.png" alt="" />
                                                        </div>
                                                        <div className="comments-text">
                                                            <div className="avatar-name">
                                                                <h6 className="name">
                                                                    Enanath Jhon
                                                                    <Link href="#" className="comment-reply-link"><i className="fas fa-reply" />Reply</Link>
                                                                </h6>
                                                                <span className="date">September 6, {new Date().getFullYear()}</span>
                                                            </div>
                                                            <p>Lorem ipsum dolor sit amet consectetur. Ut tellus suspendisse nulla aliquam. Risus rutrum tellus eget ultrices pretium.</p>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="comment-respond">
                                        <h3 className="comment-reply-title">Write Your Comment</h3>
                                        <form className="comment-form" action="#">
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <div className="form-grp">
                                                        <input type="text" placeholder="Name *" />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-grp">
                                                        <input type="email" placeholder="Email *" />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-grp">
                                                        <input type="url" placeholder="Website*" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-grp">
                                                <textarea name="message" placeholder="Comment *" />
                                            </div>
                                            <button type="submit" className="btn btn-two">Post Comment</button>
                                        </form>
                                    </div>
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
                                                <li><Link href="#">Business Consulting <span>(05)</span></Link></li>
                                                <li><Link href="#">Financial Investment <span>(07)</span></Link></li>
                                                <li><Link href="#">IT Consultations <span>(03)</span></Link></li>
                                                <li><Link href="#">Digital Analytics <span>(04)</span></Link></li>
                                                <li><Link href="#">Payment Processing <span>(02)</span></Link></li>
                                                <li><Link href="#">Software Solutions <span>(09)</span></Link></li>
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
                                                    <h5 className="title"><Link href="/blog-details">Aerial view of a private house with on roof</Link>
                                                    </h5>
                                                    <span><i className="fas fa-calendar-alt" />22 Jan {new Date().getFullYear()}</span>
                                                </div>
                                            </div>
                                            <div className="rc-post-item">
                                                <div className="rc-post-thumb">
                                                    <Link href="/blog-details"><img src="/assets/img/blog/rc_post02.jpg" alt="" /></Link>
                                                </div>
                                                <div className="rc-post-content">
                                                    <h5 className="title"><Link href="/blog-details">Medium shot men working on roof presentation</Link>
                                                    </h5>
                                                    <span><i className="fas fa-calendar-alt" />22 Jan {new Date().getFullYear()}</span>
                                                </div>
                                            </div>
                                            <div className="rc-post-item">
                                                <div className="rc-post-thumb">
                                                    <Link href="/blog-details"><img src="/assets/img/blog/rc_post03.jpg" alt="" /></Link>
                                                </div>
                                                <div className="rc-post-content">
                                                    <h5 className="title"><Link href="/blog-details">Free photo cute family a roof above their head</Link>
                                                    </h5>
                                                    <span><i className="fas fa-calendar-alt" />22 Jan {new Date().getFullYear()}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="blog-widget">
                                        <h4 className="widget-title">Popular Tags</h4>
                                        <div className="tag-list-wrap">
                                            <ul className="list-wrap">
                                                <li><Link href="#">Construction</Link></li>
                                                <li><Link href="#">Roofing</Link></li>
                                                <li><Link href="#">Repairer</Link></li>
                                                <li><Link href="#">Maintenance</Link></li>
                                                <li><Link href="#">Remodeling</Link></li>
                                                <li><Link href="#">Roof</Link></li>
                                                <li><Link href="#">Roofing Service</Link></li>
                                                <li><Link href="#">Consulting</Link></li>
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