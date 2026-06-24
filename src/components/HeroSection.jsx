import { useState } from "react";
import { useNavigate } from "react-router-dom";

function HeroSection() {
    const navigate = useNavigate();
    const [isAssistHovered, setIsAssistHovered] = useState(false);
    const [hoveredCard, setHoveredCard] = useState(null);

    const sectionStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        padding: '20px 16px',
        background: 'linear-gradient(135deg, #f0fdfa 0%, #ffffff 100%)',
        gap: '30px'
    };

    const contentStyle = {
        flex: '1',
        minWidth: '280px',
        textAlign: 'left',
        width: '100%'
    };

    const titleStyle = {
        fontSize: 'clamp(1.8rem, 5vw, 3rem)',
        fontWeight: '800',
        color: '#1a202c',
        marginBottom: '12px',
        lineHeight: '1.2'
    };

    const highlightStyle = {
        color: '#0d9488',
        position: 'relative',
        display: 'inline-block'
    };

    const subtitleStyle = {
        fontSize: 'clamp(0.95rem, 2.5vw, 1.125rem)',
        color: '#4a5568',
        marginBottom: '20px',
        lineHeight: '1.6'
    };

    const featuresGridStyle = {
        display: 'grid',
        gridTemplateColumns: '1fr', // Single column on mobile
        gap: '12px',
        marginBottom: '24px'
    };

    const getFeatureCardStyle = (index) => ({
        background: '#ffffff',
        padding: '14px 16px',
        borderRadius: '12px',
        border: hoveredCard === index ? '2px solid #0d9488' : '1px solid #e2e8f0',
        display: 'flex',
        alignItems: 'center',
        gap: '14px',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        transform: hoveredCard === index ? 'translateY(-2px)' : 'translateY(0)',
        boxShadow: hoveredCard === index ? '0 4px 16px rgba(13, 148, 136, 0.15)' : 'none',
        width: '100%',
        boxSizing: 'border-box'
    });

    const getFeatureIconStyle = (index) => ({
        fontSize: 'clamp(22px, 4vw, 28px)',
        transition: 'transform 0.3s ease',
        transform: hoveredCard === index ? 'scale(1.1)' : 'scale(1)',
        flexShrink: '0'
    });

    const getFeatureTextStyle = (index) => ({
        fontSize: 'clamp(14px, 2vw, 16px)',
        fontWeight: '500',
        color: hoveredCard === index ? '#0d9488' : '#1a202c',
        margin: 0,
        transition: 'color 0.3s ease'
    });

    const featureSubStyle = {
        fontSize: 'clamp(11px, 1.5vw, 13px)',
        color: '#64748b',
        margin: '2px 0 0 0'
    };

    const buttonContainerStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '12px',
        marginBottom: '16px'
    };

    const buttonStyle = {
        background: '#0d9488',
        color: 'white',
        border: 'none',
        padding: '14px 24px',
        borderRadius: '8px',
        fontSize: 'clamp(14px, 2vw, 16px)',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        flex: '1',
        minWidth: '140px',
        touchAction: 'manipulation'
    };

    const buttonOutlineStyle = {
        background: 'transparent',
        color: '#0d9488',
        border: '2px solid #0d9488',
        padding: '12px 24px',
        borderRadius: '8px',
        fontSize: 'clamp(14px, 2vw, 16px)',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        flex: '1',
        minWidth: '140px',
        touchAction: 'manipulation'
    };

    const serviceNoticeStyle = {
        background: '#e6f7f5',
        padding: '16px',
        borderRadius: '12px',
        marginTop: '20px',
        borderLeft: '4px solid #0d9488',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '12px'
    };

    const serviceTextStyle = {
        fontSize: 'clamp(13px, 1.8vw, 15px)',
        lineHeight: '1.5',
        color: '#1a202c'
    };

    const assistButtonStyle = {
        background: isAssistHovered ? '#0f766e' : '#0d9488',
        color: 'white',
        border: 'none',
        padding: '12px 24px',
        borderRadius: '50px',
        fontSize: 'clamp(14px, 2vw, 15px)',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        boxShadow: isAssistHovered ? '0 4px 15px rgba(13, 148, 136, 0.4)' : '0 2px 8px rgba(13, 148, 136, 0.2)',
        transform: isAssistHovered ? 'translateY(-2px)' : 'translateY(0)',
        width: '100%',
        touchAction: 'manipulation'
    };

    const featureCards = [
        { 
            icon: "📊", 
            title: "APS Calculator", 
            sub: "Instant score calculation",
            path: "/aps-calculator"
        },
        { 
            icon: "📚", 
            title: "Prospectuses", 
            sub: "View & download",
            path: "/prospectus"
        },
        { 
            icon: "💰", 
            title: "NSFAS & Bursaries", 
            sub: "Funding information",
            path: "/bursaries"
        },
        { 
            icon: "📝", 
            title: "Past Papers", 
            sub: "With memos",
            path: "/question-papers"
        }
    ];

    return (
        <section style={sectionStyle}>
            <div style={contentStyle}>
                <h1 style={titleStyle}>
                    <span style={highlightStyle}>University Application</span> Made Simple
                </h1>
                <p style={subtitleStyle}>
                    Your complete platform for university applications in South Africa. 
                    We guide you from APS calculation to successful submission.
                </p>
                
                <div style={featuresGridStyle}>
                    {featureCards.map((card, index) => (
                        <div 
                            key={index}
                            style={getFeatureCardStyle(index)}
                            onMouseEnter={() => setHoveredCard(index)}
                            onMouseLeave={() => setHoveredCard(null)}
                            onClick={() => navigate(card.path)}
                        >
                            <span style={getFeatureIconStyle(index)}>{card.icon}</span>
                            <div>
                                <p style={getFeatureTextStyle(index)}>{card.title}</p>
                                <p style={featureSubStyle}>{card.sub}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div style={buttonContainerStyle}>
                    <button 
                        style={buttonStyle}
                        onMouseEnter={(e) => {
                            e.target.style.background = '#0f766e';
                            e.target.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.background = '#0d9488';
                            e.target.style.transform = 'translateY(0)';
                        }}
                        onClick={() => navigate("/aps-calculator")}
                    >
                        Calculate APS →
                    </button>
                    <button 
                        style={buttonOutlineStyle}
                        onMouseEnter={(e) => {
                            e.target.style.background = '#0d9488';
                            e.target.style.color = 'white';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.background = 'transparent';
                            e.target.style.color = '#0d9488';
                        }}
                        onClick={() => navigate("/prospectus")}
                    >
                        View Prospectuses
                    </button>
                </div>

                <div style={serviceNoticeStyle}>
                    <div style={serviceTextStyle}>
                        <strong>✨ Need help with your application?</strong> We assist with full applications for just <strong style={{color: '#0d9488'}}>R80 per application</strong>. 
                        Our team ensures your application is complete and submitted correctly.
                    </div>
                    <button 
                        style={assistButtonStyle}
                        onMouseEnter={() => setIsAssistHovered(true)}
                        onMouseLeave={() => setIsAssistHovered(false)}
                        onClick={() => navigate("/apply")}
                    >
                        🎓 Apply For Me →
                    </button>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;