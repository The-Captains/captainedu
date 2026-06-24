function ApplyNowButton({ universityId }) {
    const buttonStyle = {
        background: '#0d9488',
        color: 'white',
        border: 'none',
        padding: '14px 20px', // Larger padding for mobile touch
        borderRadius: '8px',
        fontSize: '16px', // Minimum 16px to prevent zoom on iOS
        fontWeight: '600',
        cursor: 'pointer',
        width: '100%',
        marginTop: '12px',
        transition: 'all 0.3s ease',
        // Better touch target
        minHeight: '48px',
        touchAction: 'manipulation',
        // Remove hover effects on touch devices
        '@media (hover: hover)': {
            ':hover': {
                background: '#0f766e',
                transform: 'translateY(-1px)'
            }
        }
    };

    return (
        <button 
            style={buttonStyle}
            onMouseEnter={(e) => {
                if (window.matchMedia('(hover: hover)').matches) {
                    e.target.style.background = '#0f766e';
                    e.target.style.transform = 'translateY(-1px)';
                }
            }}
            onMouseLeave={(e) => {
                e.target.style.background = '#0d9488';
                e.target.style.transform = 'translateY(0)';
            }}
            onClick={() => console.log(`Applying to: ${universityId}`)}
        >
            Apply Now →
        </button>
    );
}

export default ApplyNowButton;