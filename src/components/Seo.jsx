// components/Seo.jsx
import { Helmet } from 'react-helmet-async';

function Seo({ 
    title, 
    description, 
    keywords, 
    image, 
    url,
    author = "Captain Edu",
    type = "website"
}) {
    const siteTitle = "Captain Edu - University Application Assistance";
    const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
    const fullDescription = description || "Get professional help with university and TVET college applications in South Africa. APS calculator, past papers, bursaries, and more.";
    const fullImage = image || "https://captainedu.captainstech.co.za/og-image.jpg";
    const fullUrl = url || "https://captainedu.captainstech.co.za";

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="title" content={fullTitle} />
            <meta name="description" content={fullDescription} />
            <meta name="keywords" content={keywords || "university application, tertiary education, APS calculator, South African universities, TVET colleges, bursaries, past papers"} />
            <meta name="author" content={author} />
            <meta name="robots" content="index, follow" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            
            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={fullDescription} />
            <meta property="og:image" content={fullImage} />
            <meta property="og:site_name" content="Captain Edu" />
            
            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={fullUrl} />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={fullDescription} />
            <meta property="twitter:image" content={fullImage} />
            
            {/* Additional SEO Tags */}
            <link rel="canonical" href={fullUrl} />
            <meta name="theme-color" content="#0d9488" />

            {/* Link to llms.txt for AI agents */}
            <link rel="llms" href="https://captainedu.captainstech.co.za/llms.txt" />
            <link rel="alternate" type="text/plain" href="https://captainedu.captainstech.co.za/llms.txt" title="llms.txt" />
        </Helmet>
    );
}

export default Seo;
