import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { getPostBySlug, getPublishedPosts } from "@/lib/blog-utils"
import { useRouter } from "next/router"
import readingTime from "reading-time"

export default function BlogPost({ post, relatedPosts }) {
    const router = useRouter()

    if (router.isFallback) {
        return <div>Loading...</div>
    }

    if (!post) {
        return <div>Post not found</div>
    }

    return (
        <>
            <Layout breadcrumbTitle={post.title}>
                <section className="blog-details-area pt-120 pb-120">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-8">
                                <div className="blog-details-wrap">
                                    <div className="blog-details-thumb">
                                        <img src={post.coverImage} alt={post.title} className="w-100" />
                                    </div>
                                    <div className="blog-details-content">
                                        <div className="blog-meta">
                                            <ul className="list-wrap">
                                                <li><i className="far fa-user" /> By <Link href="#">{post.author?.name || "Kletz Team"}</Link></li>
                                                <li><i className="fas fa-calendar-alt" />{new Date(post.date).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}</li>
                                                {post.readingTime && (
                                                    <li><i className="far fa-clock" />{post.readingTime}</li>
                                                )}
                                                {post.categories && (
                                                    <li><i className="far fa-folder" />{post.categories.join(", ")}</li>
                                                )}
                                            </ul>
                                        </div>
                                        <h2 className="title">{post.title}</h2>
                                        
                                        {/* Render markdown content as HTML */}
                                        <div className="blog-content" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
                                        
                                        <div className="blog-details-bottom">
                                            <div className="row align-items-center">
                                                <div className="col-lg-8">
                                                    {post.tags && (
                                                        <div className="post-tags">
                                                            <h5 className="title">Tags:</h5>
                                                            <ul className="list-wrap">
                                                                {post.tags.map((tag, index) => (
                                                                    <li key={index}><Link href={`/blog?tag=${tag}`}>#{tag}</Link></li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="col-lg-4">
                                                    <div className="blog-post-share">
                                                        <h5 className="title">Share:</h5>
                                                        <ul className="list-wrap">
                                                            <li><Link href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://kletzcontracting.com/blog/${post.slug}`)}`} target="_blank"><i className="fab fa-facebook-f" /></Link></li>
                                                            <li><Link href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(`https://kletzcontracting.com/blog/${post.slug}`)}&text=${encodeURIComponent(post.title)}`} target="_blank"><i className="fab fa-twitter" /></Link></li>
                                                            <li><Link href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://kletzcontracting.com/blog/${post.slug}`)}`} target="_blank"><i className="fab fa-linkedin-in" /></Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Related Posts */}
                                    {relatedPosts && relatedPosts.length > 0 && (
                                        <div className="related-posts-wrap">
                                            <h3 className="title">Related Articles</h3>
                                            <div className="row">
                                                {relatedPosts.map((relatedPost) => (
                                                    <div key={relatedPost.slug} className="col-md-6">
                                                        <div className="blog-post-item">
                                                            <div className="blog-post-thumb">
                                                                <Link href={`/blog/${relatedPost.slug}`}>
                                                                    <img src={relatedPost.coverImage} alt={relatedPost.title} />
                                                                </Link>
                                                            </div>
                                                            <div className="blog-post-content">
                                                                <div className="blog-meta">
                                                                    <ul className="list-wrap">
                                                                        <li><i className="fas fa-calendar-alt" />{new Date(relatedPost.date).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}</li>
                                                                    </ul>
                                                                </div>
                                                                <h4 className="title"><Link href={`/blog/${relatedPost.slug}`}>{relatedPost.title}</Link></h4>
                                                                <p>{relatedPost.excerpt}</p>
                                                                <Link href={`/blog/${relatedPost.slug}`} className="read-more">Read More <i className="fas fa-arrow-right" /></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* CTA Section */}
                                    <div className="blog-cta-wrap">
                                        <div className="cta-content">
                                            <h3>Need Help With Your Project?</h3>
                                            <p>Our experienced team at Kletz Contracting is here to help with all your roofing, siding, and home improvement needs.</p>
                                            <Link href="/contact" className="btn btn-two">Get Free Quote</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-xl-4 col-lg-6 col-md-10">
                                <aside className="blog-sidebar">
                                    {/* About Widget */}
                                    <div className="blog-widget">
                                        <h4 className="widget-title">About Kletz Contracting</h4>
                                        <div className="about-widget-content">
                                            <p>Pittsburgh's trusted contractor for roofing, siding, decks, and home improvements. Family-owned and operated since 2005.</p>
                                            <Link href="/about" className="read-more">Learn More <i className="fas fa-arrow-right" /></Link>
                                        </div>
                                    </div>

                                    {/* Services Widget */}
                                    <div className="blog-widget">
                                        <h4 className="widget-title">Our Services</h4>
                                        <div className="categories-list">
                                            <ul className="list-wrap">
                                                <li><Link href="/services/roofing">Roofing <i className="fas fa-arrow-right" /></Link></li>
                                                <li><Link href="/services/siding">Siding <i className="fas fa-arrow-right" /></Link></li>
                                                <li><Link href="/services/deck-construction">Deck Construction <i className="fas fa-arrow-right" /></Link></li>
                                                <li><Link href="/services/home-additions">Home Additions <i className="fas fa-arrow-right" /></Link></li>
                                                <li><Link href="/services/remodeling">Remodeling <i className="fas fa-arrow-right" /></Link></li>
                                                <li><Link href="/services/dumpster-service">Dumpster Service <i className="fas fa-arrow-right" /></Link></li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Contact Widget */}
                                    <div className="blog-widget widget-bg" data-background="/assets/img/blog/widget_bg.jpg">
                                        <h4 className="widget-title">Get Your Free Quote</h4>
                                        <div className="sidebar-content">
                                            <h4 className="title">Professional Contractors You Can Trust</h4>
                                            <p>Contact us today for a free consultation and estimate on your next project.</p>
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

export async function getStaticPaths() {
    const posts = getPublishedPosts()
    
    const paths = posts.map((post) => ({
        params: { slug: post.slug },
    }))

    return {
        paths,
        fallback: true,
    }
}

export async function getStaticProps({ params }) {
    const { slug } = params
    const post = getPostBySlug(slug)
    
    if (!post || post.status !== 'published') {
        return {
            notFound: true,
        }
    }

    // Calculate reading time
    const stats = readingTime(post.content)

    // Convert markdown to HTML
    const { remark } = await import('remark')
    const html = await import('remark-html')
    
    const processedContent = await remark()
        .use(html.default)
        .process(post.content)
    
    const contentHtml = processedContent.toString()

    // Get related posts (same category)
    const allPosts = getPublishedPosts()
    const relatedPosts = allPosts
        .filter(p => p.slug !== post.slug && p.categories?.some(cat => post.categories?.includes(cat)))
        .slice(0, 2)
        .map(({ content, contentHtml, ...post }) => post) // Remove content from related posts

    // Remove raw content from post object
    const { content, ...postWithoutContent } = post

    return {
        props: {
            post: {
                ...postWithoutContent,
                contentHtml,
                readingTime: stats.text
            },
            relatedPosts
        },
        revalidate: 3600,
    }
}