// pages/Prospectus.jsx
import { useState } from "react";
import { southAfricanUniversities, provinces } from "../script";
import Seo from "../components/Seo";
import { trackEvent } from "../components/Analytics";

function Prospectus() {
    const [searchTerm, setSearchTerm] = useState("");
    const [filterProvince, setFilterProvince] = useState("All Provinces");

    const filteredUniversities = southAfricanUniversities.filter(uni => {
        const matchesSearch = uni.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesProvince = filterProvince === "All Provinces" || uni.province === filterProvince;
        return matchesSearch && matchesProvince;
    });

    // Track functions
    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        if (value.length > 2) {
            trackEvent('Prospectus', 'Search', value);
        }
    };

    const handleProvinceFilter = (province) => {
        setFilterProvince(province);
        trackEvent('Prospectus', 'Filter Province', province);
    };

    const handleProspectusView = (universityName) => {
        trackEvent('Prospectus', 'View', universityName);
    };

    const handleUniversityHover = (universityName) => {
        trackEvent('Prospectus', 'View', universityName);
    };

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
        marginBottom: '8px',
        textAlign: 'center'
    };

    const subtitleStyle = {
        fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)',
        color: '#64748b',
        textAlign: 'center',
        marginBottom: '30px'
    };

    const filterContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        marginBottom: '28px',
        maxWidth: '600px',
        margin: '0 auto 28px auto'
    };

    const searchBoxStyle = {
        width: '100%',
        padding: '12px 16px',
        fontSize: '16px',
        border: '2px solid #e2e8f0',
        borderRadius: '10px',
        outline: 'none',
        transition: 'all 0.3s',
        boxSizing: 'border-box'
    };

    const selectStyle = {
        width: '100%',
        padding: '12px 16px',
        fontSize: '16px',
        border: '2px solid #e2e8f0',
        borderRadius: '10px',
        outline: 'none',
        background: 'white',
        cursor: 'pointer',
        boxSizing: 'border-box',
        appearance: 'none',
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23333' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right 14px center'
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
        boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
        display: 'flex',
        alignItems: 'center',
        gap: '16px'
    };

    const logoContainerStyle = {
        width: '64px',
        height: '64px',
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

    const infoStyle = {
        flex: '1',
        minWidth: '0'
    };

    const universityNameStyle = {
        fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
        fontWeight: '600',
        color: '#1a202c',
        marginBottom: '4px'
    };

    const locationStyle = {
        fontSize: 'clamp(0.75rem, 1.5vw, 0.85rem)',
        color: '#64748b',
        marginBottom: '4px'
    };

    const linkStyle = {
        color: '#0d9488',
        fontSize: 'clamp(0.75rem, 1.5vw, 0.85rem)',
        textDecoration: 'none',
        fontWeight: '500',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '4px',
        transition: 'all 0.3s'
    };

    const emptyStyle = {
        textAlign: 'center',
        padding: '60px 20px',
        color: '#64748b'
    };

    return (
        <>
            <Seo
                title="University Prospectuses"
                description="Browse and download official university prospectuses for 2025/2026 academic year from all South African universities."
                keywords="university prospectus, university application guide, course information, South African universities"
            />

            <div style={containerStyle}>
                <h1 style={titleStyle}>📚 University Prospectuses</h1>
                <p style={subtitleStyle}>
                    Browse and access official university prospectuses for 2025/2026
                </p>

                <div style={filterContainerStyle}>
                    <input
                        type="text"
                        placeholder="🔍 Search university..."
                        style={searchBoxStyle}
                        value={searchTerm}
                        onChange={handleSearch}
                        onFocus={(e) => e.target.style.borderColor = '#0d9488'}
                        onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                    />
                    <select
                        style={selectStyle}
                        value={filterProvince}
                        onChange={(e) => handleProvinceFilter(e.target.value)}
                    >
                        {provinces.map(province => (
                            <option key={province} value={province}>{province}</option>
                        ))}
                    </select>
                </div>

                {/* Mobile View */}
                <div style={gridStyle}>
                    {filteredUniversities.map((uni) => (
                        <div
                            key={uni.id}
                            style={cardStyle}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
                                e.currentTarget.style.transform = 'translateY(-2px)';
                                handleUniversityHover(uni.name);
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.06)';
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}
                        >
                            <div style={logoContainerStyle}>
                                <img
                                    src={uni.logo || '/default-university-logo.png'}
                                    alt={uni.name}
                                    style={logoStyle}
                                    onError={(e) => {
                                        e.target.src = '/default-university-logo.png';
                                    }}
                                />
                            </div>
                            <div style={infoStyle}>
                                <div style={universityNameStyle}>{uni.name}</div>
                                <div style={locationStyle}>📍 {uni.city}, {uni.province}</div>
                                <a
                                    href={uni.prospectusUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={linkStyle}
                                    onClick={() => handleProspectusView(uni.name)}
                                    onMouseEnter={(e) => {
                                        e.target.style.color = '#0f766e';
                                        e.target.style.textDecoration = 'underline';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.color = '#0d9488';
                                        e.target.style.textDecoration = 'none';
                                    }}
                                >
                                    📄 View Prospectus →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredUniversities.length === 0 && (
                    <div style={emptyStyle}>
                        🔍 No universities found matching "{searchTerm}"
                    </div>
                )}
            </div>
        </>
    );
}

export default Prospectus;