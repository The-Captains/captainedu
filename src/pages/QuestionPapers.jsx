// pages/QuestionPapers.jsx
import { useState } from "react";
import { 
    allPapers, 
    languageSubjects, 
    years, 
    sessions, 
    getAllSubjects,
   // cleanFileName 
} from "../data/questionPapersData";
import Seo from "../components/Seo";

function QuestionPapers() {
    const [selectedYear, setSelectedYear] = useState("2024");
    const [selectedSession, setSelectedSession] = useState("November");
    const [selectedSubject, setSelectedSubject] = useState("All");
    const [selectedType, setSelectedType] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");

    // Filter papers
    const filteredPapers = allPapers.filter(paper => {
        const matchYear = paper.year === selectedYear;
        const matchSession = paper.session === selectedSession;
        const matchSubject = selectedSubject === "All" || paper.subject === selectedSubject;
        const matchSearch = paper.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           paper.paperName.toLowerCase().includes(searchTerm.toLowerCase());
        return matchYear && matchSession && matchSubject && matchSearch;
    });

    // Group papers by subject
    const papersBySubject = {};
    filteredPapers.forEach(paper => {
        if (!papersBySubject[paper.subject]) {
            papersBySubject[paper.subject] = [];
        }
        papersBySubject[paper.subject].push(paper);
    });

    // Filter by type
    const getDisplayItems = (paper) => {
        const items = [];
        
        if (selectedType === "All" || selectedType === "Question Paper") {
            items.push({
                type: "Question Paper",
                file: paper.paperFile,
                name: paper.paperName,
                icon: "📄"
            });
        }
        
        if (paper.hasMemo && paper.memoFile && (selectedType === "All" || selectedType === "Memo")) {
            items.push({
                type: "Memo",
                file: paper.memoFile,
                name: `${paper.paperName} (Memo)`,
                icon: "📝"
            });
        }
        
        return items;
    };

    // Separate languages from non-languages
    const nonLanguages = {};
    const languages = {};

    Object.entries(papersBySubject).forEach(([subject, papers]) => {
        if (languageSubjects.includes(subject)) {
            languages[subject] = papers;
        } else {
            nonLanguages[subject] = papers;
        }
    });

    // Get file URL
    const getFileUrl = (fileName) => {
        if (!fileName) return "#";
        return `/question-papers/${fileName}`;
    };

    // Open file in new tab
    const openFile = (fileName) => {
        if (!fileName) {
            alert("File not available");
            return;
        }
        const url = getFileUrl(fileName);
        window.open(url, '_blank');
    };

    // Reset filters
    const resetFilters = () => {
        setSelectedYear("2024");
        setSelectedSession("November");
        setSelectedSubject("All");
        setSelectedType("All");
        setSearchTerm("");
    };

    // Count total items
    let totalItems = 0;
    Object.values(papersBySubject).forEach(papers => {
        papers.forEach(paper => {
            totalItems += getDisplayItems(paper).length;
        });
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

    const selectStyle = {
        padding: '6px 14px',
        borderRadius: '16px',
        border: '1px solid #e2e8f0',
        background: 'white',
        color: '#475569',
        cursor: 'pointer',
        fontSize: '12px',
        fontWeight: '500',
        outline: 'none',
        minWidth: '120px'
    };

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

    const resetButtonStyle = {
        padding: '6px 14px',
        borderRadius: '16px',
        border: '1px solid #e2e8f0',
        background: 'white',
        color: '#64748b',
        cursor: 'pointer',
        fontSize: '12px',
        fontWeight: '500',
        transition: 'all 0.2s ease'
    };

    const statsStyle = {
        display: 'flex',
        justifyContent: 'space-between',
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

    const categoryStyle = {
        marginBottom: '28px'
    };

    const categoryTitleStyle = {
        fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
        fontWeight: '700',
        color: '#0d9488',
        marginBottom: '12px',
        paddingBottom: '6px',
        borderBottom: '2px solid #0d9488',
        display: 'inline-block'
    };

    const subjectStyle = {
        marginBottom: '16px',
        border: '1px solid #e2e8f0',
        borderRadius: '8px',
        overflow: 'hidden',
        background: 'white'
    };

    const subjectTitleStyle = {
        fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)',
        fontWeight: '600',
        color: '#1a202c',
        padding: '10px 14px',
        background: '#f8fafc',
        borderBottom: '1px solid #e2e8f0',
        margin: 0,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '6px'
    };

    const paperCountStyle = {
        fontSize: '11px',
        color: '#64748b',
        fontWeight: '400'
    };

    const paperItemStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 14px',
        borderBottom: '1px solid #f1f5f9',
        flexWrap: 'wrap',
        gap: '6px',
        cursor: 'pointer',
        transition: 'background 0.2s ease'
    };

    const paperNameStyle = {
        fontSize: '13px',
        color: '#1a202c',
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        flex: '1'
    };

    const fileTypeStyle = {
        fontSize: '11px',
        color: '#94a3b8',
        marginLeft: '4px'
    };

    const linkStyle = {
        fontSize: '13px',
        color: '#0d9488',
        textDecoration: 'none',
        fontWeight: '500',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '4px',
        padding: '4px 0',
        transition: 'all 0.2s ease'
    };

    const noPapersStyle = {
        textAlign: 'center',
        padding: '40px 20px',
        color: '#64748b'
    };

    const noPapersTitleStyle = {
        fontSize: '1.1rem',
        fontWeight: '600',
        marginBottom: '4px',
        color: '#1a202c'
    };

    const noPapersSubStyle = {
        fontSize: '0.85rem',
        color: '#64748b'
    };

    const renderSubjectTable = (subject, papers) => {
        const allItems = [];
        papers.forEach(paper => {
            const items = getDisplayItems(paper);
            items.forEach(item => {
                allItems.push({
                    ...item,
                    paperRef: paper
                });
            });
        });

        if (allItems.length === 0) return null;

        return (
            <div key={subject} style={subjectStyle}>
                <div style={subjectTitleStyle}>
                    <span>{subject}</span>
                    <span style={paperCountStyle}>{allItems.length} file{allItems.length !== 1 ? 's' : ''}</span>
                </div>
                {allItems.map((item, idx) => (
                    <div 
                        key={idx} 
                        style={paperItemStyle}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = '#f8fafc';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'transparent';
                        }}
                        onClick={() => openFile(item.file)}
                    >
                        <div style={paperNameStyle}>
                            {item.icon} {item.name}
                            <span style={fileTypeStyle}>• {item.type}</span>
                        </div>
                        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                            <span style={{ fontSize: '12px', color: '#94a3b8' }}>↗</span>
                            <a
                                href={getFileUrl(item.file)}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={linkStyle}
                                onClick={(e) => e.stopPropagation()}
                                onMouseEnter={(e) => {
                                    e.target.style.color = '#0f766e';
                                    e.target.style.textDecoration = 'underline';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.color = '#0d9488';
                                    e.target.style.textDecoration = 'none';
                                }}
                            >
                                Download
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <>

        <Seo 
                title="Past Exam Papers & Memos"
                description="Download free past exam papers and memos for South African high school subjects. Practice with real exam questions."
                keywords="past exam papers, matric papers, NSC papers, exam papers with memos, free downloads"
            />

        <div style={containerStyle}>
            <h1 style={titleStyle}>📝 Past Exam Papers</h1>
            <p style={subtitleStyle}>Free download of question papers and memos</p>

            {/* Filters */}
            <div style={filterSectionStyle}>
                <div style={filterGroupStyle}>
                    <div style={filterRowStyle}>
                        <span style={filterLabelStyle}>📅</span>
                        <div style={buttonGroupStyle}>
                            {years.map(year => (
                                <button
                                    key={year}
                                    style={filterButtonStyle(selectedYear === year)}
                                    onClick={() => setSelectedYear(year)}
                                >
                                    {year}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div style={filterRowStyle}>
                        <span style={filterLabelStyle}>📋</span>
                        <div style={buttonGroupStyle}>
                            {sessions.map(session => (
                                <button
                                    key={session}
                                    style={filterButtonStyle(selectedSession === session)}
                                    onClick={() => setSelectedSession(session)}
                                >
                                    {session}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div style={filterRowStyle}>
                        <span style={filterLabelStyle}>🔍</span>
                        <select 
                            style={selectStyle}
                            value={selectedSubject}
                            onChange={(e) => setSelectedSubject(e.target.value)}
                        >
                            {getAllSubjects().map(subject => (
                                <option key={subject} value={subject}>{subject}</option>
                            ))}
                        </select>
                        <select 
                            style={selectStyle}
                            value={selectedType}
                            onChange={(e) => setSelectedType(e.target.value)}
                        >
                            <option value="All">All Files</option>
                            <option value="Question Paper">📄 Papers</option>
                            <option value="Memo">📝 Memos</option>
                        </select>
                        <input
                            type="text"
                            placeholder="Search..."
                            style={searchInputStyle}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onFocus={(e) => e.target.style.borderColor = '#0d9488'}
                            onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                        />
                        <button
                            style={resetButtonStyle}
                            onClick={resetFilters}
                            onMouseEnter={(e) => {
                                e.target.style.background = '#e2e8f0';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.background = 'white';
                            }}
                        >
                            Reset
                        </button>
                    </div>
                </div>
            </div>

            {/* Stats */}
            {totalItems > 0 && (
                <div style={statsStyle}>
                    <span style={statsTextStyle}>
                        📚 <span style={statsCountStyle}>{totalItems}</span> files · 
                        <span style={statsCountStyle}> {Object.keys(papersBySubject).length}</span> subjects
                    </span>
                    <span style={statsTextStyle}>
                        {selectedYear} • {selectedSession}
                    </span>
                </div>
            )}

            {/* Results */}
            {Object.keys(nonLanguages).length === 0 && Object.keys(languages).length === 0 ? (
                <div style={noPapersStyle}>
                    <div style={noPapersTitleStyle}>📂 No papers found</div>
                    <div style={noPapersSubStyle}>Try changing your filters</div>
                </div>
            ) : (
                <>
                    {Object.keys(nonLanguages).length > 0 && (
                        <div style={categoryStyle}>
                            <h2 style={categoryTitleStyle}>📘 Non-Languages</h2>
                            {Object.entries(nonLanguages).map(([subject, papers]) => renderSubjectTable(subject, papers))}
                        </div>
                    )}
                    
                    {Object.keys(languages).length > 0 && (
                        <div style={categoryStyle}>
                            <h2 style={categoryTitleStyle}>📖 Languages</h2>
                            {Object.entries(languages).map(([subject, papers]) => renderSubjectTable(subject, papers))}
                        </div>
                    )}
                </>
            )}
        </div>
        </>
    );
}

export default QuestionPapers;