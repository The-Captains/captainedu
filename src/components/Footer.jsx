function Footer() {
    const year = new Date().getFullYear();
    
    const footerStyle = {
        background: '#ffffff',
        padding: '40px 24px',
        marginTop: '60px',
        textAlign: 'center',
        borderTop: '1px solid #e2e8f0'
    };

    return (
        <footer style={footerStyle}>
            <p style={{ color: '#4a5568', fontSize: '14px', margin: 0 }}>
                &copy; {year} CaptainEdu. All rights reserved. | Steering your future
            </p>
        </footer>
    );
}

export default Footer;