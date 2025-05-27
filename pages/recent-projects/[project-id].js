import Layout from "@/components/layout/Layout"
import Brand3 from "@/components/sections/Brand3"
import Link from "next/link"
import { useState } from 'react'

export default function ProjectDetails({ project, relatedProjects }) {
    const [selectedImage, setSelectedImage] = useState(0)
    
    if (!project) {
        return (
            <Layout breadcrumbTitle="Project Not Found">
                <div className="container pt-120 pb-120 text-center">
                    <h2>Project Not Found</h2>
                    <Link href="/recent-projects" className="btn">Back to Projects</Link>
                </div>
            </Layout>
        )
    }

    const allImages = [project.headerImage, ...project.galleryImages]

    return (
        <>
            <Layout breadcrumbTitle={project.title}>
                <div>
                    <section className="project-details-area pt-120">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="project-details-wrap">
                                        {/* Main Image */}
                                        <div className="project-details-thumb" style={{height:"500px"}}>
                                            <img style={{height:"500px"}}
                                                src={allImages[selectedImage]} 
                                                alt={project.title}
                                                className="main-image"
                                            />
                                        </div>

                                        {/* Image Gallery Thumbs */}
                                        {allImages.length > 1 && (
                                            <div className="image-gallery mb-4">
                                                {allImages.map((image, index) => (
                                                    <div 
                                                        key={index}
                                                        className={`gallery-thumb ${selectedImage === index ? 'active' : ''}`}
                                                        onClick={() => setSelectedImage(index)}
                                                    >
                                                        <img src={image} alt={`View ${index + 1}`} />
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        <div className="project-details-content">
                                            <h2 className="title">{project.title}</h2>
                                            <p className="info-one">{project.description}</p>
                                            
                                            {/* Challenge & Solution */}
                                            <div className="project-challenge-wrap">
                                                <div className="row">
                                                    <div className="col-xl-6">
                                                        <div className="challenge-content">
                                                            <h3 className="challenge-title">The Challenge</h3>
                                                            <p>{project.challenge}</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-6">
                                                        <div className="solution-content">
                                                            <h3 className="solution-title">Our Solution</h3>
                                                            <p>{project.solution}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Features */}
                                            <h2 className="title-two">What We Did</h2>
                                            <ul className="list-wrap">
                                                {project.features.map((feature, index) => (
                                                    <li key={index}>
                                                        <i className="fas fa-check-circle" />
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>

                                            {/* Testimonial */}
                                            {project.testimonial && (
                                                <div className="testimonial-section">
                                                    <blockquote>
                                                        <p>"{project.testimonial.quote}"</p>
                                                        <footer>- {project.testimonial.author}</footer>
                                                    </blockquote>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Sidebar */}
                                <div className="col-lg-4">
                                    <aside className="project-sidebar">
                                        <div className="project-widget">
                                            <h4 className="widget-title">Project Details</h4>
                                            <div className="project-info-list">
                                                <ul className="list-wrap">
                                                    <li><span>Date:</span> {project.date}</li>
                                                    <li><span>Location:</span> {project.location}</li>
                                                    <li><span>Category:</span> {project.category}</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="project-widget">
                                            <h4 className="widget-title">Need Your Help?</h4>
                                            <div className="project-contact">
                                                <ul className="list-wrap">
                                                    <li><i className="fas fa-phone-alt" />(412) 200-2475</li>
                                                    <li><i className="fas fa-envelope" />john@kletzcontracting.com</li>
                                                    <li><i className="fas fa-map-marker-alt" />1468 Steubenville Pike Suite D<br />Pittsburgh, PA 15205</li>
                                                </ul>
                                            </div>
                                        </div>

                                        {/* Related Projects */}
                                        {relatedProjects && relatedProjects.length > 0 && (
                                            <div className="project-widget">
                                                <h4 className="widget-title">Similar Projects</h4>
                                                <div className="related-projects">
                                                    {relatedProjects.map((related) => (
                                                        <div key={related.id} className="related-item">
                                                            <div className="related-thumb">
                                                                <Link href={`/recent-projects/${related.slug}`}>
                                                                    <img src={related.thumbnailImage} alt={related.title} />
                                                                </Link>
                                                            </div>
                                                            <div className="related-content">
                                                                <span className="related-category">{related.category}</span>
                                                                <h5>
                                                                    <Link href={`/recent-projects/${related.slug}`}>
                                                                        {related.title.length > 40 
                                                                            ? related.title.substring(0, 40) + '...' 
                                                                            : related.title}
                                                                    </Link>
                                                                </h5>
                                                                <span className="related-date">{related.date}</span>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </aside>
                                </div>
                            </div>

                            {/* Back Button */}
                            <div className="row mt-5">
                                <div className="col-12 text-center">
                                    <Link href="/recent-projects" style={{backgroundColor:'#990000', color:"#FFFFFF", padding:"20px 30px"}}>
                                        <i className="fas fa-arrow-left"></i> Back to Projects
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>

                    <Brand3 />
                </div>
            </Layout>

            <style jsx>{`
                .main-image {
                    width: 100%;
                    height: 400px;
                    object-fit: cover;
                    border-radius: 8px;
                }
                
                .image-gallery {
                    display: flex;
                    gap: 10px;
                    flex-wrap: wrap;
                    margin-top: 20px;
                }
                
                .gallery-thumb {
                    width: 80px;
                    height: 60px;
                    border-radius: 4px;
                    overflow: hidden;
                    cursor: pointer;
                    border: 2px solid transparent;
                    transition: border-color 0.3s ease;
                }
                
                .gallery-thumb.active {
                    border-color: #007bff;
                }
                
                .gallery-thumb img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                
                .challenge-title,
                .solution-title {
                    color: #007bff;
                    margin-bottom: 15px;
                }
                
                .testimonial-section {
                    background: #f8f9fa;
                    padding: 30px;
                    border-radius: 8px;
                    margin: 30px 0;
                }
                
                .testimonial-section blockquote {
                    margin: 0;
                    font-style: italic;
                }
                
                .testimonial-section p {
                    font-size: 1.1rem;
                    margin-bottom: 15px;
                }
                
                .testimonial-section footer {
                    font-weight: bold;
                    color: #666;
                }
                
                .related-item {
                    display: flex;
                    gap: 15px;
                    margin-bottom: 20px;
                    padding-bottom: 20px;
                    border-bottom: 1px solid #eee;
                }
                
                .related-item:last-child {
                    border-bottom: none;
                    margin-bottom: 0;
                    padding-bottom: 0;
                }
                
                .related-thumb {
                    flex-shrink: 0;
                    width: 60px;
                    height: 50px;
                    border-radius: 4px;
                    overflow: hidden;
                }
                
                .related-thumb img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                
                .related-content {
                    flex: 1;
                }
                
                .related-category {
                    background: #e9ecef;
                    color: #495057;
                    padding: 2px 8px;
                    border-radius: 10px;
                    font-size: 10px;
                    font-weight: 600;
                    text-transform: uppercase;
                }
                
                .related-content h5 {
                    margin: 8px 0 5px;
                    font-size: 13px;
                    line-height: 1.3;
                }
                
                .related-content h5 a {
                    color: #212529;
                    text-decoration: none;
                }
                
                .related-content h5 a:hover {
                    color: #007bff;
                }
                
                .related-date {
                    color: #6c757d;
                    font-size: 11px;
                }
                
                @media (max-width: 768px) {
                    .main-image {
                        height: 250px;
                    }
                    
                    .related-item {
                        flex-direction: column;
                        gap: 10px;
                    }
                    
                    .related-thumb {
                        width: 100%;
                        height: 120px;
                    }
                }
            `}</style>
        </>
    )
}

export async function getStaticPaths() {
    const fs = require('fs')
    const path = require('path')
    
    const filePath = path.join(process.cwd(), 'data', 'projects.json')
    const jsonData = fs.readFileSync(filePath, 'utf8')
    const data = JSON.parse(jsonData)
    
    const paths = data.projects.map((project) => ({
        params: { 'project-id': project.slug }
    }))

    return {
        paths,
        fallback: 'blocking'
    }
}

export async function getStaticProps({ params }) {
    const fs = require('fs')
    const path = require('path')
    
    const filePath = path.join(process.cwd(), 'data', 'projects.json')
    const jsonData = fs.readFileSync(filePath, 'utf8')
    const data = JSON.parse(jsonData)
    
    const project = data.projects.find(p => p.slug === params['project-id'])
    
    if (!project) {
        return { notFound: true }
    }
    
    // Get related projects (same category, excluding current project)
    const relatedProjects = data.projects
        .filter(p => p.category === project.category && p.id !== project.id)
        .slice(0, 2)

    return {
        props: {
            project,
            relatedProjects
        },
        revalidate: 3600
    }
}