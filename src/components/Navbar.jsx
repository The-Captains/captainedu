import { useState, useEffect } from "react";

function Navbar() {
    const [isHovered, setIsHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const navStyle = {
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: isMobile ? '16px' : '40px',
        padding: isMobile ? '16px' : '16px 24px',
        background: '#ffffff',
        borderBottom: '1px solid #e2e8f0',
        position: 'sticky',
        top: 0,
        zIndex: 1000
    };

    const brandStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        textDecoration: 'none'
    };

    const captainIconStyle = {
        fontSize: isMobile ? '24px' : '28px'
    };

    const brandTextStyle = {
        fontSize: isMobile ? '20px' : '22px',
        fontWeight: '700',
        background: 'linear-gradient(135deg, #0d9488, #0f766e)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
    };

    const buttonStyle = {
        background: isHovered ? '#0f766e' : '#0d9488',
        color: 'white',
        border: 'none',
        padding: isMobile ? '10px 20px' : '12px 28px',
        borderRadius: '50px',
        fontSize: isMobile ? '14px' : '15px',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        textDecoration: 'none',
        display: 'inline-block',
        width: isMobile ? '100%' : 'auto',
        textAlign: 'center',
        boxShadow: isHovered ? '0 4px 12px rgba(13, 148, 136, 0.4)' : 'none',
        transform: isHovered ? 'translateY(-2px)' : 'translateY(0)'
    };

    return (
        <nav style={navStyle}>
            <a href="/" style={brandStyle}>
                <span style={captainIconStyle}>👨‍✈️</span>
                <span style={brandTextStyle}>Captain Edu</span>
            </a>
            <a 
                href="/apply" 
                style={buttonStyle}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                🎓 Apply For Me →
            </a>
        </nav>
    );
}

export default Navbar;