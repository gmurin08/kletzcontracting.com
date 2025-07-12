import Head from 'next/head'

const PageHead = ({ headTitle, metaDescription, canonicalUrl, ogImage, keywords, structuredData }) => {
    const defaultTitle = "Kletz Contracting - Roofing, Siding & Dumpster Services in Robinson Township, PA"
    const defaultDescription = "Expert roofing, siding installation, and dumpster rental services in Robinson Township and Greater Pittsburgh. Family-owned contractor serving Allegheny, Beaver, Butler & Washington counties. Free estimates."
    const defaultOgImage = "/assets/img/og/Kletz-OG-Home.png"
    const defaultKeywords = "roofing contractor Robinson Township PA, siding installation Pittsburgh, dumpster rental Robinson Township, roofing services Allegheny County, home improvement contractor Pittsburgh PA"
    
    const title = headTitle || defaultTitle
    const description = metaDescription || defaultDescription
    const relativeImage = ogImage || defaultOgImage
    // Convert relative image paths to absolute URLs for OG tags
    const image = relativeImage.startsWith('http') 
        ? relativeImage 
        : `https://kletzcontracting.com${relativeImage}`
    
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords || defaultKeywords} />
                
                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
                <meta property="og:image" content={image} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:locale" content="en_US" />
                
                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={image} />
                
                {/* Canonical URL */}
                {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
                
                {/* Geo Tags for Local SEO */}
                <meta name="geo.region" content="US-PA" />
                <meta name="geo.placename" content="Robinson Township" />
                <meta name="geo.position" content="40.4542;-80.1263" />
                <meta name="ICBM" content="40.4542, -80.1263" />
                
                {/* Additional SEO Tags */}
                <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
                <meta name="author" content="Kletz Contracting" />
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                
                {/* Structured Data */}
                {structuredData && (
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
                    />
                )}
            </Head>
        </>
    )
}

export default PageHead