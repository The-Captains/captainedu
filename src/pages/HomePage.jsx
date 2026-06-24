import { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import UniversityCard from "../components/UniversityCard";
import { southAfricanUniversities } from "../script";
import Seo from "../components/Seo";

export default function HomePage() {
    const [loading, setLoading] = useState(true);
    const [universities, setUniversities] = useState([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setUniversities(southAfricanUniversities);
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    // Page container style
    const pageStyle = {
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #ffffff 100%)',
        display: 'flex',
        flexDirection: 'column'
    };

    // Main content style - mobile first
    const mainContentStyle = {
        flex: '1',
        maxWidth: '1280px',
        width: '100%',
        margin: '0 auto',
        padding: '20px 16px 40px',
        boxSizing: 'border-box'
    };

    return (
        <>
        <Seo 
                title="Home"
                description="Your complete platform for university applications in South Africa. Get help with APS calculation, prospectuses, bursaries, and past exam papers."
                keywords="university application, APS calculator, South African universities, study in SA"
            />

        <div style={pageStyle}>
            <main style={mainContentStyle}> <HeroSection />
                <UniversityCard 
                    universities={universities} 
                    loading={loading} 
                />
            </main>
        </div>
        </>
    );
}