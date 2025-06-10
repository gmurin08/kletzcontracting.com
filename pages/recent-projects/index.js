import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState, useEffect } from 'react'

export default function RecentProjects({ projects }) {
    const [filteredProjects, setFilteredProjects] = useState(projects)
    const [selectedCategory, setSelectedCategory] = useState('all')

    // Get unique categories
    const categories = ['all', ...new Set(projects.map(project => project.category))]

    // Filter by category
    useEffect(() => {
        if (selectedCategory === 'all') {
            setFilteredProjects(projects)
        } else {
            setFilteredProjects(projects.filter(project => project.category === selectedCategory))
        }
    }, [selectedCategory, projects])

    return (
        <>
            <Layout breadcrumbTitle="Recent Projects">
                <section style={{ padding: '80px 0' }}>
                    <div className="container">
                        {/* Header */}
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                                    <span style={{ 
                                        color: '#dc2626', 
                                        fontSize: '16px', 
                                        fontWeight: '500',
                                        textTransform: 'uppercase',
                                        letterSpacing: '1px'
                                    }}>
                                        Our Projects
                                    </span>
                                    <h2 style={{ 
                                        fontSize: '2.5rem', 
                                        fontWeight: 'bold', 
                                        color: '#333',
                                        marginTop: '10px',
                                        marginBottom: '0'
                                    }}>
                                        Our Latest Projects
                                    </h2>
                                </div>
                            </div>
                        </div>

                        {/* Category Filter */}
                        <div className="row justify-content-center" style={{ marginBottom: '50px' }}>
                            <div className="col-lg-8">
                                <div style={{ textAlign: 'center' }}>
                                    {categories.map(category => (
                                        <button
                                            key={category}
                                            onClick={() => setSelectedCategory(category)}
                                            style={{
                                                background: selectedCategory === category ? '#dc2626' : 'transparent',
                                                color: selectedCategory === category ? '#fff' : '#666',
                                                border: selectedCategory === category ? '1px solid #dc2626' : '1px solid #ddd',
                                                padding: '10px 25px',
                                                margin: '0 8px 15px',
                                                borderRadius: '25px',
                                                fontSize: '14px',
                                                fontWeight: '500',
                                                cursor: 'pointer',
                                                transition: 'all 0.3s ease'
                                            }}
                                            onMouseOver={(e) => {
                                                if (selectedCategory !== category) {
                                                    e.target.style.borderColor = '#dc2626'
                                                    e.target.style.color = '#dc2626'
                                                }
                                            }}
                                            onMouseOut={(e) => {
                                                if (selectedCategory !== category) {
                                                    e.target.style.borderColor = '#ddd'
                                                    e.target.style.color = '#666'
                                                }
                                            }}
                                        >
                                            {category === 'all' ? 'All Projects' : category}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Projects Grid */}
                        <div className="row">
                            {filteredProjects.map((project, index) => (
                                <div key={project.id} className="col-lg-4 col-md-6" style={{ marginBottom: '30px' }}>
                                    <div 
                                        className="custom-project-card"
                                        style={{
                                            position: 'relative',
                                            height: '300px',
                                            borderRadius: '12px',
                                            overflow: 'hidden',
                                            cursor: 'pointer',
                                            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                                            transition: 'all 0.3s ease'
                                        }}
                                        onMouseOver={(e) => {
                                            e.currentTarget.style.transform = 'translateY(-5px)'
                                            e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)'
                                        }}
                                        onMouseOut={(e) => {
                                            e.currentTarget.style.transform = 'translateY(0)'
                                            e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)'
                                        }}
                                    >
                                        {/* Background Image */}
                                        <div
                                            style={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                right: 0,
                                                bottom: 0,
                                                backgroundImage: `url(${project.thumbnailImage})`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                                transition: 'transform 0.3s ease'
                                            }}
                                        ></div>

                                        {/* Featured Badge */}
                                        {project.featured && (
                                            <div
                                                style={{
                                                    position: 'absolute',
                                                    top: '20px',
                                                    right: '20px',
                                                    background: '#dc2626',
                                                    color: '#fff',
                                                    padding: '8px 16px',
                                                    borderRadius: '20px',
                                                    fontSize: '12px',
                                                    fontWeight: '600',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '0.5px',
                                                    zIndex: 3
                                                }}
                                            >
                                                Featured
                                            </div>
                                        )}

                                        {/* Overlay */}
                                        <div
                                            style={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                right: 0,
                                                bottom: 0,
                                                background: 'linear-gradient(135deg, rgba(220, 38, 38, 0.8), rgba(0, 0, 0, 0.6))',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                padding: '30px',
                                                textAlign: 'center',
                                                color: '#fff'
                                            }}
                                        >
                                            {/* Title */}
                                            <h3
                                                style={{
                                                    fontSize: '1.4rem',
                                                    fontWeight: 'bold',
                                                    lineHeight: '1.3',
                                                    marginBottom: '20px',
                                                    maxWidth: '250px',
                                                    color: '#fff'
                                                }}
                                            >
                                                {project.title}
                                            </h3>

                                            {/* Date & Location */}
                                            <div
                                                style={{
                                                    fontSize: '13px',
                                                    opacity: '0.8',
                                                    marginBottom: '25px'
                                                }}
                                            >
                                                <div style={{ marginBottom: '5px' }}>{project.date}</div>
                                                <div>{project.location}</div>
                                            </div>

                                            {/* More Details Button */}
                                            <Link 
                                                href={`/recent-projects/${project.slug}`}
                                                style={{
                                                    background: '#fff',
                                                    color: '#dc2626',
                                                    padding: '12px 24px',
                                                    borderRadius: '25px',
                                                    fontSize: '14px',
                                                    fontWeight: '600',
                                                    textDecoration: 'none',
                                                    transition: 'all 0.3s ease',
                                                    display: 'inline-block'
                                                }}
                                                onMouseOver={(e) => {
                                                    e.target.style.background = '#f8f8f8'
                                                    e.target.style.transform = 'translateY(-2px)'
                                                }}
                                                onMouseOut={(e) => {
                                                    e.target.style.background = '#fff'
                                                    e.target.style.transform = 'translateY(0)'
                                                }}
                                            >
                                                More Details
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}

export async function getStaticProps() {
    const fs = require('fs')
    const path = require('path')
    
    const filePath = path.join(process.cwd(), 'data', 'projects.json')
    const jsonData = fs.readFileSync(filePath, 'utf8')
    const data = JSON.parse(jsonData)
    
    // Sort projects: featured first, then by date
    const sortedProjects = data.projects.sort((a, b) => {
        if (a.featured && !b.featured) return -1
        if (!a.featured && b.featured) return 1
        return new Date(b.date) - new Date(a.date)
    })

    return {
        props: {
            projects: sortedProjects,
        },
        revalidate: 3600,
    }
}