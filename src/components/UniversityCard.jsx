// UniversityCard.jsx
import { useState } from 'react';
import { trackEvent } from '../components/Analytics';

function UniversityCard({ universities, loading }) {
    const [expandedId, setExpandedId] = useState(null);

    const toggleExpand = (id, universityName) => {
        setExpandedId(expandedId === id ? null : id);
        // Track expand/collapse
        if (expandedId !== id) {
            trackEvent('University Card', 'Expand Description', universityName);
        } else {
            trackEvent('University Card', 'Collapse Description', universityName);
        }
    };

    // Handle card click to open prospectus
    const handleCardClick = (prospectusUrl, universityName) => {
        if (prospectusUrl) {
            // Track prospectus view
            trackEvent('University Card', 'View Prospectus', universityName);
            window.open(prospectusUrl, '_blank');
        }
    };

    // Handle website click
    const handleWebsiteClick = (universityName) => {
        trackEvent('University Card', 'Visit Website', universityName);
    };

    // Handle university view (when card is hovered)
    const handleUniversityView = (universityName) => {
        trackEvent('University Card', 'View', universityName);
    };

    // Simple styles - clean and minimal
    const containerStyle = {
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '20px',
        padding: '0',
        maxWidth: '100%',
        margin: '0 auto'
    };

    const cardStyle = {
        background: '#ffffff',
        border: '1px solid #e2e8f0',
        borderRadius: '12px',
        padding: '20px 16px',
        transition: 'all 0.3s ease',
        boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
        cursor: 'pointer',
        textAlign: 'center'
    };

    const logoContainerStyle = {
        width: '100%',
        maxWidth: '280px',
        height: '160px',
        margin: '0 auto 16px auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#f8fafc',
        borderRadius: '12px',
        padding: '16px',
        border: '2px solid #e2e8f0'
    };

    const logoStyle = {
        width: '100%',
        height: '100%',
        objectFit: 'contain',
        display: 'block'
    };

    const titleStyle = {
        fontSize: 'clamp(1.1rem, 3vw, 1.4rem)',
        fontWeight: '700',
        margin: '0 0 4px 0',
        color: '#1a202c'
    };

    const locationStyle = {
        fontSize: 'clamp(0.85rem, 2vw, 1rem)',
        color: '#64748b',
        marginBottom: '12px'
    };

    const descriptionStyle = {
        fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
        lineHeight: '1.6',
        color: '#4a5568',
        marginBottom: '6px',
        textAlign: 'left'
    };

    const seeMoreStyle = {
        color: '#0d9488',
        fontWeight: '600',
        cursor: 'pointer',
        background: 'none',
        border: 'none',
        fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
        padding: '0',
        textDecoration: 'underline'
    };

    const footerStyle = {
        marginTop: '16px',
        paddingTop: '16px',
        borderTop: '1px solid #e2e8f0',
        display: 'flex',
        justifyContent: 'center',
        gap: '12px',
        flexWrap: 'wrap'
    };

    const websiteButtonStyle = {
        padding: '12px 40px',
        borderRadius: '10px',
        fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        border: '2px solid #0d9488',
        background: 'transparent',
        color: '#0d9488',
        minWidth: '180px',
        touchAction: 'manipulation'
    };

    const loadingStyle = {
        textAlign: 'center',
        padding: '40px 20px',
        color: '#4a5568'
    };

    const emptyStyle = {
        textAlign: 'center',
        padding: '40px 20px',
        color: '#4a5568'
    };

    if (loading) {
        return <div style={loadingStyle}>📚 Loading universities...</div>;
    }

    if (!universities || universities.length === 0) {
        return <div style={emptyStyle}>🎓 No universities available.</div>;
    }

    return (
        <div style={containerStyle}>
            {universities.map((university) => {
                const isExpanded = expandedId === university.id;
                const description = university.description;
                const needsExpand = description.length > 150;
                const displayDescription = isExpanded ? description : description.slice(0, 150) + (needsExpand ? '...' : '');

                return (
                    <div
                        key={university.id}
                        style={cardStyle}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.12)';
                            e.currentTarget.style.transform = 'translateY(-2px)';
                            handleUniversityView(university.name);
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.08)';
                            e.currentTarget.style.transform = 'translateY(0)';
                        }}
                        onClick={() => handleCardClick(university.prospectusUrl, university.name)}
                    >
                        {/* Logo - Big and Visible */}
                        <div style={logoContainerStyle}>
                            <img
                                src={university.logo || '/default-university-logo.png'}
                                alt={university.name}
                                style={logoStyle}
                                onError={(e) => {
                                    e.target.src = '/default-university-logo.png';
                                }}
                            />
                        </div>

                        {/* University Name */}
                        <h2 style={titleStyle}>{university.name}</h2>

                        {/* Location */}
                        <div style={locationStyle}>
                            📍 {university.city}, {university.province}
                        </div>

                        {/* Description with See More */}
                        <div style={descriptionStyle}>
                            {displayDescription}
                            {needsExpand && (
                                <button
                                    style={seeMoreStyle}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        toggleExpand(university.id, university.name);
                                    }}
                                >
                                    {isExpanded ? ' Show less' : ' See more'}
                                </button>
                            )}
                        </div>

                        {/* Footer with Website Button */}
                        <div style={footerStyle}>
                            <a
                                href={university.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={websiteButtonStyle}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleWebsiteClick(university.name);
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.background = '#0d9488';
                                    e.target.style.color = 'white';
                                    e.target.style.transform = 'translateY(-2px)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.background = 'transparent';
                                    e.target.style.color = '#0d9488';
                                    e.target.style.transform = 'translateY(0)';
                                }}
                            >
                                🌐 Visit Website
                            </a>
                        </div>

                        {/* Prospectus Hint */}
                        {university.prospectusUrl && (
                            <div style={{
                                marginTop: '10px',
                                fontSize: 'clamp(0.7rem, 1.5vw, 0.8rem)',
                                color: '#94a3b8'
                            }}>
                                💡 Click card to view prospectus
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
}

export default UniversityCard;