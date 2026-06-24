// pages/ApsCalculator.jsx
import { useState } from "react";
import Seo from "../components/Seo";

function ApsCalculator() {
    const [subjects, setSubjects] = useState([
        { id: 1, name: "", level: "" },
        { id: 2, name: "", level: "" },
        { id: 3, name: "", level: "" },
        { id: 4, name: "", level: "" },
        { id: 5, name: "", level: "" },
        { id: 6, name: "", level: "" }
    ]);
    
    const [totalAPS, setTotalAPS] = useState(0);

    // Organized subjects according to South African Department of Education
    const subjectCategories = {
        "Official Languages (Home Language)": [
            "English Home Language", "Afrikaans Home Language", "IsiZulu Home Language", 
            "IsiXhosa Home Language", "IsiNdebele Home Language", "Sepedi Home Language", 
            "Sesotho Home Language", "Setswana Home Language", "SiSwati Home Language", 
            "Tshivenda Home Language", "Xitsonga Home Language"
        ],
        "Official Languages (First Additional Language)": [
            "English First Additional Language", "Afrikaans First Additional Language", 
            "IsiZulu First Additional Language", "IsiXhosa First Additional Language", 
            "IsiNdebele First Additional Language", "Sepedi First Additional Language", 
            "Sesotho First Additional Language", "Setswana First Additional Language", 
            "SiSwati First Additional Language", "Tshivenda First Additional Language", 
            "Xitsonga First Additional Language"
        ],
        "Official Languages (Second Additional Language)": [
            "English Second Additional Language", "Afrikaans Second Additional Language"
        ],
        "Non-Official Languages": [
            "French", "German", "Spanish", "Mandarin", "Portuguese", "Latin"
        ],
        "Core Sciences": [
            "Mathematics", "Mathematical Literacy", "Physical Sciences", "Life Sciences", 
            "Agricultural Sciences", "Technical Sciences", "Computer Applications Technology", 
            "Information Technology"
        ],
        "Commerce & Humanities": [
            "Accounting", "Business Studies", "Economics", "History", "Geography", 
            "Religion Studies", "Tourism", "Consumer Studies", "Hospitality Studies"
        ],
        "Creative & Technical": [
            "Visual Arts", "Design", "Dramatic Arts", "Dance Studies", "Music", 
            "Civil Technology", "Electrical Technology", "Mechanical Technology", 
            "Engineering Graphics and Design", "Agricultural Technology"
        ]
    };

    // Flatten subjects with category info for display
    const allSubjects = [];
    Object.entries(subjectCategories).forEach(([category, subjectsList]) => {
        subjectsList.forEach(subject => {
            allSubjects.push({ name: subject, category });
        });
    });

    // Level options
    const levels = [
        { value: "", label: "Select level", points: 0 },
        { value: "7", label: "Level 7 (80-100%)", points: 7 },
        { value: "6", label: "Level 6 (70-79%)", points: 6 },
        { value: "5", label: "Level 5 (60-69%)", points: 5 },
        { value: "4", label: "Level 4 (50-59%)", points: 4 },
        { value: "3", label: "Level 3 (40-49%)", points: 3 },
        { value: "2", label: "Level 2 (30-39%)", points: 2 },
        { value: "1", label: "Level 1 (0-29%)", points: 1 }
    ];

    // Get available subjects (not already selected)
    const getAvailableSubjects = (currentSubjectId, currentSubjectName) => {
        const selectedSubjects = subjects
            .filter(s => s.id !== currentSubjectId && s.name)
            .map(s => s.name);
        return allSubjects.filter(subject => !selectedSubjects.includes(subject.name));
    };

    // Group available subjects by category for rendering
    const getGroupedAvailableSubjects = (currentSubjectId, currentSubjectName) => {
        const available = getAvailableSubjects(currentSubjectId, currentSubjectName);
        const grouped = {};
        available.forEach(subject => {
            if (!grouped[subject.category]) {
                grouped[subject.category] = [];
            }
            grouped[subject.category].push(subject);
        });
        return grouped;
    };

    // Update subject or level
    const updateSubject = (id, field, value) => {
        const updatedSubjects = subjects.map(subject => {
            if (subject.id === id) {
                return { ...subject, [field]: value };
            }
            return subject;
        });
        setSubjects(updatedSubjects);
        
        // Calculate total APS
        const total = updatedSubjects.reduce((sum, subject) => {
            const level = levels.find(l => l.value === subject.level);
            return sum + (level ? level.points : 0);
        }, 0);
        setTotalAPS(total);
    };

    // Add new subject row
    const addSubject = () => {
        if (subjects.length >= 12) {
            alert("Maximum 12 subjects allowed");
            return;
        }
        const newId = Math.max(...subjects.map(s => s.id)) + 1;
        setSubjects([...subjects, { id: newId, name: "", level: "" }]);
    };

    // Remove subject row
    const removeSubject = (id) => {
        if (subjects.length <= 6) {
            alert("Minimum 6 subjects required for APS calculation");
            return;
        }
        const updatedSubjects = subjects.filter(subject => subject.id !== id);
        setSubjects(updatedSubjects);
        
        // Recalculate total
        const total = updatedSubjects.reduce((sum, subject) => {
            const level = levels.find(l => l.value === subject.level);
            return sum + (level ? level.points : 0);
        }, 0);
        setTotalAPS(total);
    };

    // Reset all
    const resetCalculator = () => {
        setSubjects([
            { id: 1, name: "", level: "" },
            { id: 2, name: "", level: "" },
            { id: 3, name: "", level: "" },
            { id: 4, name: "", level: "" },
            { id: 5, name: "", level: "" },
            { id: 6, name: "", level: "" }
        ]);
        setTotalAPS(0);
    };

    // Get APS rating description
    const getAPSRating = (aps) => {
        if (aps >= 45) return { text: "Excellent! You qualify for top universities (UCT, Wits, Stellenbosch)", color: "#10b981" };
        if (aps >= 38) return { text: "Very Good! You qualify for most degree programs", color: "#10b981" };
        if (aps >= 32) return { text: "Good! You qualify for many universities", color: "#0d9488" };
        if (aps >= 28) return { text: "Fair. You qualify for diploma programs", color: "#0d9488" };
        if (aps >= 23) return { text: "Average. Consider higher certificate programs", color: "#f59e0b" };
        if (aps >= 19) return { text: "Low. Consider TVET college", color: "#ef4444" };
        return { text: "Very low. Speak to a career counselor", color: "#ef4444" };
    };

    const rating = getAPSRating(totalAPS);

    // Styles
    const containerStyle = {
        maxWidth: '800px',
        margin: '0 auto',
        padding: '40px 16px'
    };

    const titleStyle = {
        fontSize: 'clamp(1.5rem, 5vw, 2rem)',
        fontWeight: '700',
        color: '#1a202c',
        textAlign: 'center',
        marginBottom: '8px'
    };

    const subtitleStyle = {
        fontSize: '0.9rem',
        color: '#64748b',
        textAlign: 'center',
        marginBottom: '32px'
    };

    const tableStyle = {
        width: '100%',
        borderCollapse: 'collapse',
        background: '#ffffff',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        marginBottom: '24px'
    };

    const thStyle = {
        textAlign: 'left',
        padding: '14px 16px',
        background: '#f8fafc',
        borderBottom: '2px solid #e2e8f0',
        fontWeight: '600',
        color: '#1a202c',
        fontSize: '14px'
    };

    const tdStyle = {
        padding: '12px 16px',
        borderBottom: '1px solid #e2e8f0'
    };

    const selectStyle = {
        width: '100%',
        minWidth: '180px',
        padding: '12px',
        border: '1px solid #e2e8f0',
        borderRadius: '8px',
        fontSize: '14px',
        outline: 'none',
        background: 'white',
        cursor: 'pointer',
        boxSizing: 'border-box'
    };

    // Style for optgroup categories
    const optGroupStyle = {
        fontWeight: 'bold',
        color: '#0d9488'
    };

    const removeButtonStyle = {
        background: 'none',
        border: 'none',
        color: '#ef4444',
        cursor: 'pointer',
        fontSize: '20px',
        padding: '8px',
        borderRadius: '4px',
        width: '36px',
        height: '36px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    };

    const buttonContainerStyle = {
        display: 'flex',
        gap: '16px',
        justifyContent: 'center',
        marginBottom: '32px',
        flexWrap: 'wrap'
    };

    const addButtonStyle = {
        padding: '12px 28px',
        background: 'transparent',
        color: '#0d9488',
        border: '2px solid #0d9488',
        borderRadius: '8px',
        cursor: 'pointer',
        fontSize: '14px',
        fontWeight: '600',
        transition: 'all 0.3s'
    };

    const resetButtonStyle = {
        padding: '12px 28px',
        background: '#f1f5f9',
        color: '#475569',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        fontSize: '14px',
        fontWeight: '600',
        transition: 'all 0.3s'
    };

    const resultContainerStyle = {
        background: '#f8fafc',
        padding: '32px 24px',
        borderRadius: '16px',
        textAlign: 'center'
    };

    const totalStyle = {
        fontSize: 'clamp(40px, 10vw, 56px)',
        fontWeight: '800',
        color: '#0d9488',
        marginBottom: '8px'
    };

    const ratingStyle = {
        fontSize: 'clamp(14px, 4vw, 18px)',
        fontWeight: '500',
        marginBottom: '16px'
    };

    const messageStyle = {
        fontSize: '13px',
        color: '#64748b'
    };

    const noteStyle = {
        fontSize: '12px',
        color: '#64748b',
        textAlign: 'center',
        marginTop: '24px',
        padding: '16px',
        background: '#fef3c7',
        borderRadius: '8px'
    };

    return (
        <>
        <Seo 
                title="APS Calculator"
                description="Calculate your Admission Point Score (APS) instantly. Find out if you qualify for your desired university course in South Africa."
                keywords="APS calculator, admission point score, university admission, calculate APS, South African universities"
            />

        <div style={containerStyle}>
            <h1 style={titleStyle}>🎓 APS Calculator</h1>
            <p style={subtitleStyle}>
                Select your subjects and achievement levels to calculate your APS score
            </p>

            {/* Mobile: Horizontal scroll for table */}
            <div style={{ overflowX: 'auto' }}>
                <table style={tableStyle}>
                    <thead>
                        <tr>
                            <th style={thStyle}>Subject</th>
                            <th style={thStyle}>Level</th>
                            <th style={{ ...thStyle, width: '50px' }}></th>
                        </tr>
                    </thead>
                    <tbody>
                        {subjects.map((subject) => {
                            const groupedSubjects = getGroupedAvailableSubjects(subject.id, subject.name);
                            return (
                                <tr key={subject.id}>
                                    <td style={tdStyle}>
                                        <select
                                            style={selectStyle}
                                            value={subject.name}
                                            onChange={(e) => updateSubject(subject.id, "name", e.target.value)}
                                            onFocus={(e) => e.target.style.borderColor = '#0d9488'}
                                            onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                                        >
                                            <option value="">Select subject...</option>
                                            {Object.entries(groupedSubjects).map(([category, subjectsList]) => (
                                                <optgroup key={category} label={category} style={optGroupStyle}>
                                                    {subjectsList.map(sub => (
                                                        <option key={sub.name} value={sub.name}>
                                                            {sub.name}
                                                        </option>
                                                    ))}
                                                </optgroup>
                                            ))}
                                        </select>
                                    </td>
                                    <td style={tdStyle}>
                                        <select
                                            style={selectStyle}
                                            value={subject.level}
                                            onChange={(e) => updateSubject(subject.id, "level", e.target.value)}
                                            disabled={!subject.name}
                                            onFocus={(e) => e.target.style.borderColor = '#0d9488'}
                                            onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                                        >
                                            {levels.map(level => (
                                                <option key={level.value} value={level.value}>
                                                    {level.label}
                                                </option>
                                            ))}
                                        </select>
                                    </td>
                                    <td style={tdStyle}>
                                        {subjects.length > 6 && (
                                            <button
                                                style={removeButtonStyle}
                                                onClick={() => removeSubject(subject.id)}
                                                title="Remove subject"
                                                onMouseEnter={(e) => e.target.style.background = '#fee2e2'}
                                                onMouseLeave={(e) => e.target.style.background = 'none'}
                                            >
                                                ✕
                                            </button>
                                        )}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            <div style={buttonContainerStyle}>
                <button 
                    style={addButtonStyle} 
                    onClick={addSubject}
                    onMouseEnter={(e) => {
                        e.target.style.background = '#0d9488';
                        e.target.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.background = 'transparent';
                        e.target.style.color = '#0d9488';
                    }}
                >
                    + Add Subject
                </button>
                <button 
                    style={resetButtonStyle} 
                    onClick={resetCalculator}
                    onMouseEnter={(e) => e.target.style.background = '#e2e8f0'}
                    onMouseLeave={(e) => e.target.style.background = '#f1f5f9'}
                >
                    Reset All
                </button>
            </div>

            <div style={resultContainerStyle}>
                <div style={totalStyle}>{totalAPS}</div>
                <div style={{ ...ratingStyle, color: rating.color }}>
                    {rating.text}
                </div>
                <div style={messageStyle}>
                    Based on {subjects.filter(s => s.level).length} subject(s) with levels selected
                </div>
            </div>

            <div style={noteStyle}>
                📌 <strong>How APS works:</strong> Each subject is scored from 1-7 based on your percentage. 
                Add up your best 6-7 subjects (excluding Life Orientation). 
                Different universities have different minimum requirements.
            </div>
        </div>
        </>
    );
}

export default ApsCalculator;