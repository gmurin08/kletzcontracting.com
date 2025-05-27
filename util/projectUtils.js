// Utility functions for project management

/**
 * Generate a URL-friendly slug from a title
 * @param {string} title 
 * @returns {string}
 */
export function generateSlug(title) {
    return title
        .toLowerCase()
        .replace(/[^\w\s-]/g, '') // Remove special characters
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
        .trim('-'); // Remove leading/trailing hyphens
}

/**
 * Validate project data structure
 * @param {object} project 
 * @returns {object} validation result
 */
export function validateProject(project) {
    const required = ['id', 'title', 'category', 'headerImage', 'startDate', 'client'];
    const missing = required.filter(field => !project[field]);
    
    const errors = [];
    
    if (missing.length > 0) {
        errors.push(`Missing required fields: ${missing.join(', ')}`);
    }
    
    // Validate date format
    if (project.startDate && !isValidDate(project.startDate)) {
        errors.push('Invalid startDate format. Use YYYY-MM-DD');
    }
    
    if (project.endDate && !isValidDate(project.endDate)) {
        errors.push('Invalid endDate format. Use YYYY-MM-DD');
    }
    
    // Validate URLs
    if (project.headerImage && !isValidUrl(project.headerImage)) {
        errors.push('Invalid headerImage URL');
    }
    
    if (project.client?.website && !isValidUrl(project.client.website)) {
        errors.push('Invalid client website URL');
    }
    
    return {
        isValid: errors.length === 0,
        errors
    };
}

/**
 * Helper function to validate date format
 * @param {string} dateString 
 * @returns {boolean}
 */
function isValidDate(dateString) {
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    if (!regex.test(dateString)) return false;
    
    const date = new Date(dateString);
    return date instanceof Date && !isNaN(date) && dateString === date.toISOString().split('T')[0];
}

/**
 * Helper function to validate URL format
 * @param {string} url 
 * @returns {boolean}
 */
function isValidUrl(url) {
    try {
        new URL(url.startsWith('http') ? url : `https://${url}`);
        return true;
    } catch {
        return false;
    }
}

/**
 * Create a new project template with default values
 * @param {object} overrides 
 * @returns {object}
 */
export function createProjectTemplate(overrides = {}) {
    const defaultProject = {
        id: "",
        slug: "",
        title: "",
        category: "",
        subcategory: "",
        headerImage: "",
        thumbnailImage: "",
        galleryImages: [],
        startDate: new Date().toISOString().split('T')[0],
        endDate: "",
        status: "planned",
        client: {
            name: "",
            website: "",
            industry: ""
        },
        description: {
            short: "",
            detailed: "",
            challenge: "",
            solution: ""
        },
        tags: [],
        features: [],
        specifications: {},
        location: {
            city: "",
            state: "",
            country: "USA"
        },
        testimonial: {
            quote: "",
            author: "",
            position: ""
        },
        featured: false,
        priority: 99
    };
    
    const merged = { ...defaultProject, ...overrides };
    
    // Auto-generate slug if not provided
    if (!merged.slug && merged.title) {
        merged.slug = generateSlug(merged.title);
    }
    
    // Auto-generate ID if not provided
    if (!merged.id && merged.slug) {
        merged.id = merged.slug;
    }
    
    return merged;
}

/**
 * Sort projects by priority and date
 * @param {array} projects 
 * @returns {array}
 */
export function sortProjects(projects) {
    return projects.sort((a, b) => {
        // First sort by priority (lower number = higher priority)
        if (a.priority !== b.priority) {
            return a.priority - b.priority;
        }
        
        // Then sort by start date (newer first)
        return new Date(b.startDate) - new Date(a.startDate);
    });
}

/**
 * Filter projects by criteria
 * @param {array} projects 
 * @param {object} filters 
 * @returns {array}
 */
export function filterProjects(projects, filters = {}) {
    let filtered = [...projects];
    
    if (filters.category && filters.category !== 'all') {
        filtered = filtered.filter(p => p.category === filters.category);
    }
    
    if (filters.status) {
        filtered = filtered.filter(p => p.status === filters.status);
    }
    
    if (filters.featured !== undefined) {
        filtered = filtered.filter(p => p.featured === filters.featured);
    }
    
    if (filters.search) {
        const searchTerm = filters.search.toLowerCase();
        filtered = filtered.filter(p => 
            p.title.toLowerCase().includes(searchTerm) ||
            p.description.short.toLowerCase().includes(searchTerm) ||
            p.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
            p.client.name.toLowerCase().includes(searchTerm)
        );
    }
    
    if (filters.dateRange) {
        const { start, end } = filters.dateRange;
        filtered = filtered.filter(p => {
            const projectStart = new Date(p.startDate);
            return projectStart >= new Date(start) && projectStart <= new Date(end);
        });
    }
    
    return filtered;
}

/**
 * Get project statistics
 * @param {array} projects 
 * @returns {object}
 */
export function getProjectStats(projects) {
    const stats = {
        total: projects.length,
        completed: projects.filter(p => p.status === 'completed').length,
        inProgress: projects.filter(p => p.status === 'in-progress').length,
        planned: projects.filter(p => p.status === 'planned').length,
        featured: projects.filter(p => p.featured).length,
        categories: [...new Set(projects.map(p => p.category))].length,
        clients: [...new Set(projects.map(p => p.client.name))].length
    };
    
    stats.completionRate = stats.total > 0 ? Math.round((stats.completed / stats.total) * 100) : 0;
    
    return stats;
}

/**
 * Get related projects based on category and tags
 * @param {object} currentProject 
 * @param {array} allProjects 
 * @param {number} limit 
 * @returns {array}
 */
export function getRelatedProjects(currentProject, allProjects, limit = 3) {
    const related = allProjects
        .filter(p => p.id !== currentProject.id)
        .map(project => {
            let score = 0;
            
            // Same category gets highest score
            if (project.category === currentProject.category) {
                score += 10;
            }
            
            // Same subcategory gets bonus points
            if (project.subcategory === currentProject.subcategory) {
                score += 5;
            }
            
            // Shared tags get points
            const sharedTags = project.tags.filter(tag => 
                currentProject.tags.includes(tag)
            );
            score += sharedTags.length * 2;
            
            // Same client gets points
            if (project.client.name === currentProject.client.name) {
                score += 3;
            }
            
            return { ...project, relationScore: score };
        })
        .filter(p => p.relationScore > 0)
        .sort((a, b) => b.relationScore - a.relationScore)
        .slice(0, limit);
    
    return related;
}

/**
 * Format project duration in human-readable format
 * @param {string} startDate 
 * @param {string} endDate 
 * @returns {string}
 */
export function formatDuration(startDate, endDate) {
    if (!endDate) return 'Ongoing';
    
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays <= 7) {
        return `${diffDays} day${diffDays !== 1 ? 's' : ''}`;
    } else if (diffDays <= 30) {
        const weeks = Math.ceil(diffDays / 7);
        return `${weeks} week${weeks !== 1 ? 's' : ''}`;
    } else {
        const months = Math.ceil(diffDays / 30);
        return `${months} month${months !== 1 ? 's' : ''}`;
    }
}

/**
 * Export projects data to different formats
 * @param {array} projects 
 * @param {string} format - 'json', 'csv', 'summary'
 * @returns {string}
 */
export function exportProjects(projects, format = 'json') {
    switch (format) {
        case 'csv':
            const headers = ['Title', 'Category', 'Client', 'Start Date', 'End Date', 'Status'];
            const rows = projects.map(p => [
                p.title,
                p.category,
                p.client.name,
                p.startDate,
                p.endDate || 'Ongoing',
                p.status
            ]);
            return [headers, ...rows].map(row => row.join(',')).join('\n');
            
        case 'summary':
            const stats = getProjectStats(projects);
            return `Project Summary:
Total Projects: ${stats.total}
Completed: ${stats.completed}
In Progress: ${stats.inProgress}
Planned: ${stats.planned}
Completion Rate: ${stats.completionRate}%
Categories: ${stats.categories}
Unique Clients: ${stats.clients}`;
            
        default:
            return JSON.stringify({ projects }, null, 2);
    }
}