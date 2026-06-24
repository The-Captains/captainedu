// pages/Bursaries.jsx
import { useState } from "react";
import { bursaries, categories, levels } from "../data/bursariesData";
import Seo from "../components/Seo";

function Bursaries() {
    const [searchTerm, setSearchTerm] = useState("");
    const [filterCategory, setFilterCategory] = useState("All");
    const [filterLevel, setFilterLevel] = useState("All");

    const filteredBursaries = bursaries.filter(bursary => {
        const matchesSearch = bursary.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              bursary.provider.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              bursary.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = filterCategory === "All" || bursary.category === filterCategory;
        const matchesLevel = filterLevel === "All" || bursary.level === filterLevel;
        return matchesSearch && matchesCategory && matchesLevel;
    });

    // Styles
    const containerStyle = {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '20px 16px'
    };

    const titleStyle = {
        fontSize: 'clamp(1.5rem, 4vw, 2.2rem)',
        fontWeight: '700',
        color: '#1a202c',
        textAlign: 'center',
        marginBottom: '4px'
    };

    const subtitleStyle = {
        fontSize: 'clamp(0.85rem, 1.5vw, 1rem)',
        color: '#64748b',
        textAlign: 'center',
        marginBottom: '28px'
    };

    const filterSectionStyle = {
        background: '#f8fafc',
        padding: '16px',
        borderRadius: '12px',
        marginBottom: '24px',
        border: '1px solid #e2e8f0'
    };

    const filterGroupStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
    };

    const filterRowStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px',
        alignItems: 'center'
    };

    const filterLabelStyle = {
        fontSize: '13px',
        fontWeight: '600',
        color: '#1a202c',
        minWidth: '50px'
    };

    const buttonGroupStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '4px'
    };

    const filterButtonStyle = (isActive) => ({
        padding: '6px 14px',
        borderRadius: '16px',
        border: isActive ? 'none' : '1px solid #e2e8f0',
        background: isActive ? '#0d9488' : 'white',
        color: isActive ? 'white' : '#475569',
        cursor: 'pointer',
        fontSize: '12px',
        fontWeight: isActive ? '600' : '500',
        transition: 'all 0.2s ease',
        boxShadow: isActive ? '0 2px 8px rgba(13, 148, 136, 0.3)' : 'none'
    });

    const searchInputStyle = {
        padding: '6px 14px',
        borderRadius: '16px',
        border: '1px solid #e2e8f0',
        background: 'white',
        fontSize: '12px',
        outline: 'none',
        minWidth: '140px',
        flex: '1'
    };

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '16px'
    };

    const cardStyle = {
        background: '#ffffff',
        border: '1px solid #e2e8f0',
        borderRadius: '12px',
        padding: '16px',
        transition: 'all 0.3s ease',
        boxShadow: '0 1px 3px rgba(0,0,0,0.06)'
    };

    const cardHeaderStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        marginBottom: '8px'
    };

    const logoContainerStyle = {
        width: '48px',
        height: '48px',
        flexShrink: '0',
        borderRadius: '8px',
        overflow: 'hidden',
        border: '1px solid #e2e8f0',
        background: '#f8fafc',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    };

    const logoStyle = {
        width: '100%',
        height: '100%',
        objectFit: 'contain',
        padding: '4px'
    };

    const cardTitleStyle = {
        fontSize: 'clamp(1rem, 1.5vw, 1.1rem)',
        fontWeight: '600',
        color: '#1a202c',
        margin: 0
    };

    const providerStyle = {
        fontSize: '0.8rem',
        color: '#64748b'
    };

    const badgeContainerStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '6px',
        marginBottom: '8px'
    };

    const badgeStyle = (type) => ({
        fontSize: '11px',
        padding: '2px 10px',
        borderRadius: '12px',
        fontWeight: '500',
        background: type === 'Government' ? '#e6f7f5' : '#fef3c7',
        color: type === 'Government' ? '#0d9488' : '#92400e'
    });

    const amountBadgeStyle = {
        fontSize: '11px',
        padding: '2px 10px',
        borderRadius: '12px',
        fontWeight: '500',
        background: '#e0f2fe',
        color: '#0284c7'
    };

    const levelBadgeStyle = {
        fontSize: '11px',
        padding: '2px 10px',
        borderRadius: '12px',
        fontWeight: '500',
        background: '#f3e8ff',
        color: '#7c3aed'
    };

    const descriptionStyle = {
        fontSize: '0.85rem',
        lineHeight: '1.5',
        color: '#4a5568',
        marginBottom: '8px'
    };

    const footerStyle = {
        display: 'flex',
        gap: '12px',
        flexWrap: 'wrap',
        marginTop: '8px',
        paddingTop: '8px',
        borderTop: '1px solid #e2e8f0'
    };

    const linkStyle = {
        fontSize: '13px',
        color: '#0d9488',
        textDecoration: 'none',
        fontWeight: '500',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '4px',
        transition: 'all 0.2s ease'
    };

    const applyLinkStyle = {
        ...linkStyle,
        color: '#0d9488',
        fontWeight: '600'
    };

    const statsStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '8px',
        marginBottom: '16px',
        padding: '10px 14px',
        background: '#f8fafc',
        borderRadius: '8px'
    };

    const statsTextStyle = {
        fontSize: '13px',
        color: '#64748b'
    };

    const statsCountStyle = {
        fontWeight: '600',
        color: '#0d9488'
    };

    const noResultsStyle = {
        textAlign: 'center',
        padding: '40px 20px',
        color: '#64748b'
    };

    return (
        <>

        <Seo 
                title="Bursaries & Funding Opportunities"
                description="Find and apply for bursaries, scholarships, and funding opportunities in South Africa. NSFAS, Sasol, Eskom, and more."
                keywords="bursaries South Africa, NSFAS, scholarships, student funding, financial aid"
            />
        
                <div style={containerStyle}>
            <h1 style={titleStyle}>💰 Bursaries & Funding</h1>
            <p style={subtitleStyle}>
                Find and apply for bursaries, scholarships, and funding opportunities
            </p>

            {/* Filters */}
            <div style={filterSectionStyle}>
                <div style={filterGroupStyle}>
                    <div style={filterRowStyle}>
                        <span style={filterLabelStyle}>🔍</span>
                        <input
                            type="text"
                            placeholder="Search bursaries..."
                            style={searchInputStyle}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onFocus={(e) => e.target.style.borderColor = '#0d9488'}
                            onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                        />
                    </div>
                    <div style={filterRowStyle}>
                        <span style={filterLabelStyle}>📋</span>
                        <div style={buttonGroupStyle}>
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    style={filterButtonStyle(filterCategory === cat)}
                                    onClick={() => setFilterCategory(cat)}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div style={filterRowStyle}>
                        <span style={filterLabelStyle}>📚</span>
                        <div style={buttonGroupStyle}>
                            {levels.map(level => (
                                <button
                                    key={level}
                                    style={filterButtonStyle(filterLevel === level)}
                                    onClick={() => setFilterLevel(level)}
                                >
                                    {level}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats */}
            <div style={statsStyle}>
                <span style={statsTextStyle}>
                    💰 <span style={statsCountStyle}>{filteredBursaries.length}</span> bursaries found
                </span>
            </div>

            {/* Results */}
            <div style={gridStyle}>
                {filteredBursaries.map(bursary => (
                    <div 
                        key={bursary.id}
                        style={cardStyle}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
                            e.currentTarget.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.06)';
                            e.currentTarget.style.transform = 'translateY(0)';
                        }}
                    >
                        <div style={cardHeaderStyle}>
                            <div style={logoContainerStyle}>
                                <img 
                                    src={bursary.logo || '/default-logo.png'}
                                    alt={bursary.name}
                                    style={logoStyle}
                                    onError={(e) => {
                                        e.target.src = '/default-logo.png';
                                    }}
                                />
                            </div>
                            <div>
                                <h3 style={cardTitleStyle}>{bursary.name}</h3>
                                <div style={providerStyle}>by {bursary.provider}</div>
                            </div>
                        </div>

                        <div style={badgeContainerStyle}>
                            <span style={badgeStyle(bursary.category)}>{bursary.category}</span>
                            <span style={levelBadgeStyle}>{bursary.level}</span>
                            <span style={amountBadgeStyle}>{bursary.amount}</span>
                            <span style={{ fontSize: '11px', padding: '2px 10px', borderRadius: '12px', fontWeight: '500', background: '#fee2e2', color: '#dc2626' }}>
                                ⏰ {bursary.deadline}
                            </span>
                        </div>

                        <div style={descriptionStyle}>
                            {bursary.description}
                        </div>

                        <div style={footerStyle}>
                            <a 
                                href={bursary.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={linkStyle}
                                onMouseEnter={(e) => {
                                    e.target.style.color = '#0f766e';
                                    e.target.style.textDecoration = 'underline';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.color = '#0d9488';
                                    e.target.style.textDecoration = 'none';
                                }}
                            >
                                🌐 Visit Website
                            </a>
                            <a 
                                href={bursary.applyLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={applyLinkStyle}
                                onMouseEnter={(e) => {
                                    e.target.style.color = '#0f766e';
                                    e.target.style.textDecoration = 'underline';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.color = '#0d9488';
                                    e.target.style.textDecoration = 'none';
                                }}
                            >
                                📝 Apply Now →
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            {filteredBursaries.length === 0 && (
                <div style={noResultsStyle}>
                    <div style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '4px', color: '#1a202c' }}>
                        💰 No bursaries found
                    </div>
                    <div style={{ fontSize: '0.85rem', color: '#64748b' }}>
                        Try adjusting your filters
                    </div>
                </div>
            )}
        </div>
        </>
    );
}

export default Bursaries;