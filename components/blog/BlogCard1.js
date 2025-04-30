import Link from "next/link"

export default function BlogCard1({ item }) {
    return (
        <>
            {/* <div className="inner-blog-item">
                <div className="inner-blog-thumb">
                    <Link href={`/blog/${item.id}`}><img src={`/assets/img/blog/${item.img}`} alt="" /></Link>
                </div>
                <div className="inner-blog-content">
                    <div className="blog-meta-two">
                        <ul className="list-wrap">
                            <li className="tag"><Link href={`/blog/${item.id}`}>Sector</Link></li>
                            <li><i className="fal fa-clock" />5 Min</li>
                            <li><i className="fal fa-calendar" />{item.date}</li>
                            <li>By <Link href={`/blog/${item.id}`}>{item.author}</Link></li>
                        </ul>
                    </div>
                    <h2 className="title"><Link href={`/blog/${item.id}`}>{item.title}</Link></h2>
                    <p>Lorem ipsum dolor sit amet, sed nulla ante amet, elementum tincidunt arcu sed laoreet, natoque ac eget imperdiet. Ac scelerisque nibh dolores consectetuer, nulla aptent est pede. Scelerisque euismod varius mi, congue eget sed vestibulum, ornare cras sed nec.</p>
                    <Link href={`/blog/${item.id}`} className="rade-more-btn">Read More</Link>
                </div>
            </div> */}

            <div className="col-lg-6 col-md-6">
                <div className="blog-post-item">
                    <div className="blog-post-thumb">
                        <Link href={`/blog/${item.id}`}><img src={`/assets/img/blog/${item.img}`} alt="" /></Link>
                    </div>
                    <div className="blog-post-content">
                        <Link href="/blog" className="tag">{item.category}</Link>
                        <div className="blog-meta">
                            <ul className="list-wrap">
                                <li><i className="far fa-user" /> By <Link href={`/blog/${item.id}`}>{item.author}</Link></li>
                                <li><i className="fas fa-calendar-alt" />23 Dec {new Date().getFullYear()}</li>
                            </ul>
                        </div>
                        <h2 className="title"><Link href={`/blog/${item.id}`}>{item.title}</Link>
                        </h2>
                        <Link href={`/blog/${item.id}`} className="link-btn">Read More<i className="fas fa-arrow-right" /></Link>
                    </div>
                </div>
            </div>

        </>
    )
}
