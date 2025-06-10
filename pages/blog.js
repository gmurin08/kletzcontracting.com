import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { getPublishedPosts } from "@/lib/blog-utils"
import { useState, useEffect } from "react"
import { useRouter } from "next/router"

export default function Blog({ posts, categories, tags }) {
    const router = useRouter()
    const [filteredPosts, setFilteredPosts] = useState(posts)
    const [selectedCategory, setSelectedCategory] = useState(router.query.category || '')
    const [selectedTag, setSelectedTag] = useState(router.query.tag || '')
    const [currentPage, setCurrentPage] = useState(1)
    const postsPerPage = 6

    useEffect(() => {
        let filtered = posts
        
        if (selectedCategory) {
            filtered = filtered.filter(post => post.categories?.includes(selectedCategory))
        }
        
        if (selectedTag) {
            filtered = filtered.filter(post => post.tags?.includes(selectedTag))
        }
        
        setFilteredPosts(filtered)
        setCurrentPage(1)
    }, [selectedCategory, selectedTag, posts])

    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost)
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage)

    return (
        <>
            <Layout breadcrumbTitle="Blog">
                <section className="inner-blog-area pt-120 pb-120">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-8">
                                <div className="row">
                                    {currentPosts.length === 0 ? (
                                        <div className="col-12">
                                            <h3>No blog posts found.</h3>
                                        </div>
                                    ) : (
                                        currentPosts.map((post) => (
                                            <div key={post.slug} className="col-md-6 mb-4">
                                                <div className="blog-post-item">
                                                    <div className="blog-post-thumb">
                                                        <Link href={`/blog/${post.slug}`}>
                                                            <img src={post.coverImage} alt={post.title} />
                                                        </Link>
                                                        {post.categories && post.categories[0] && (
                                                            <Link href={`/blog?category=${post.categories[0]}`} className="tag">
                                                                {post.categories[0]}
                                                            </Link>
                                                        )}
                                                    </div>
                                                    <div className="blog-post-content">
                                                        <div className="blog-meta">
                                                            <ul className="list-wrap">
                                                                <li><i className="far fa-user" /> {post.author?.name || "Kletz Team"}</li>
                                                                <li><i className="fas fa-calendar-alt" /> {new Date(post.date).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}</li>
                                                            </ul>
                                                        </div>
                                                        <h2 className="title"><Link href={`/blog/${post.slug}`}>{post.title}</Link></h2>
                                                        <p>{post.excerpt}</p>
                                                        <Link href={`/blog/${post.slug}`} className="read-more">
                                                            Read More <i className="fas fa-arrow-right" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    )}
                                </div>
                                
                                {/* Pagination */}
                                {totalPages > 1 && (
                                    <div className="pagination-wrap">
                                        <nav aria-label="Page navigation">
                                            <ul className="pagination">
                                                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                                    <a 
                                                        className="page-link" 
                                                        href="#" 
                                                        onClick={(e) => {
                                                            e.preventDefault()
                                                            setCurrentPage(currentPage - 1)
                                                        }}
                                                    >
                                                        <i className="fas fa-angle-left" />
                                                    </a>
                                                </li>
                                                {[...Array(totalPages)].map((_, index) => (
                                                    <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                                                        <a 
                                                            className="page-link" 
                                                            href="#" 
                                                            onClick={(e) => {
                                                                e.preventDefault()
                                                                setCurrentPage(index + 1)
                                                            }}
                                                        >
                                                            {index + 1}
                                                        </a>
                                                    </li>
                                                ))}
                                                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                                                    <a 
                                                        className="page-link" 
                                                        href="#" 
                                                        onClick={(e) => {
                                                            e.preventDefault()
                                                            setCurrentPage(currentPage + 1)
                                                        }}
                                                    >
                                                        <i className="fas fa-angle-right" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                )}
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-10">
                                <aside className="blog-sidebar">
                                    <div className="blog-widget">
                                        <h4 className="widget-title">Categories</h4>
                                        <div className="categories-list">
                                            <ul className="list-wrap">
                                                <li className={!selectedCategory ? 'active' : ''}>
                                                    <a 
                                                        href="#" 
                                                        onClick={(e) => {
                                                            e.preventDefault()
                                                            setSelectedCategory('')
                                                        }}
                                                    >
                                                        All Categories <span>({posts.length})</span>
                                                    </a>
                                                </li>
                                                {categories.map(category => {
                                                    const count = posts.filter(post => post.categories?.includes(category)).length
                                                    return (
                                                        <li key={category} className={selectedCategory === category ? 'active' : ''}>
                                                            <a 
                                                                href="#" 
                                                                onClick={(e) => {
                                                                    e.preventDefault()
                                                                    setSelectedCategory(category)
                                                                }}
                                                            >
                                                                {category} <span>({count})</span>
                                                            </a>
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                    {posts.length > 0 && (
                                        <div className="blog-widget">
                                            <h4 className="widget-title">Recent Posts</h4>
                                            <div className="rc-post-wrap">
                                                {posts.slice(0, 3).map((post) => (
                                                    <div key={post.slug} className="rc-post-item">
                                                        <div className="rc-post-thumb">
                                                            <Link href={`/blog/${post.slug}`}>
                                                                <img src={post.coverImage} alt={post.title} />
                                                            </Link>
                                                        </div>
                                                        <div className="rc-post-content">
                                                            <h5 className="title">
                                                                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                                                            </h5>
                                                            <span>
                                                                <i className="fas fa-calendar-alt" />
                                                                {new Date(post.date).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}
                                                            </span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                    <div className="blog-widget">
                                        <h4 className="widget-title">Popular Tags</h4>
                                        <div className="tag-list-wrap">
                                            <ul className="list-wrap">
                                                {tags.map(tag => (
                                                    <li key={tag} className={selectedTag === tag ? 'active' : ''}>
                                                        <a 
                                                            href="#" 
                                                            onClick={(e) => {
                                                                e.preventDefault()
                                                                setSelectedTag(selectedTag === tag ? '' : tag)
                                                            }}
                                                        >
                                                            {tag}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="blog-widget widget-bg" data-background="/assets/img/blog/widget_bg.jpg">
  <h4 className="widget-title">Need Roofing Help?</h4>
  <div className="sidebar-content">
    <h4 className="title">Trusted Pittsburgh Roofing & Exterior Experts</h4>
    <p>Have questions about your roof, gutters, or siding? Kletz Contracting is here to help with honest answers and reliable solutions.</p>
    <Link href="/contact" className="btn btn-two">Get in Touch</Link>
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


export async function getStaticProps() {
    const posts = getPublishedPosts()
    
    // Extract unique categories and tags
    const categoriesSet = new Set()
    const tagsSet = new Set()
    
    posts.forEach(post => {
        post.categories?.forEach(cat => categoriesSet.add(cat))
        post.tags?.forEach(tag => tagsSet.add(tag))
    })
    
    return {
        props: {
            posts: posts.map(({ content, ...post }) => post), // Remove content from list view
            categories: Array.from(categoriesSet).sort(),
            tags: Array.from(tagsSet).sort()
        },
        revalidate: 3600,
    }
}