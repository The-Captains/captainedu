// data/questionPapersData.js

// ============================================
// HELPER FUNCTION: Clean filename for download
// Replaces spaces with underscores
// ============================================
export const cleanFileName = (filename) => {
    if (!filename) return filename;
    return filename.replace(/ /g, '_');
};

// ============================================
// ALL PAPERS WITH CORRECT FILE NAMES
// Just copy/paste original filenames - spaces are fine!
// ============================================
export const allPapers = [
    // ========== ACCOUNTING 2025 ==========
    { year: "2025", session: "November", subject: "Accounting", paperName: "Paper 1 (Afrikaans)", paperFile: "Accounting_P1_Nov_2025_Afr.pdf", memoFile: "Accounting_P1_Nov_2025_Memo_Afr.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Accounting", paperName: "Paper 1 (English)", paperFile: "Accounting_P1_Nov_2025_Eng.pdf", memoFile: "Accounting_P1_Nov_2025_Memo_Eng.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Accounting", paperName: "Paper 2 (Afrikaans)", paperFile: "Accounting_P2_Nov_2025_Afr.pdf", memoFile: "Accounting_P2_Nov_2025_Memo_Afr.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Accounting", paperName: "Paper 2 (English)", paperFile: "Accounting_P2_Nov_2025_Eng.pdf", memoFile: "Accounting_P2_Nov_2025_Memo_Eng.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Accounting", paperName: "Answer Book (Afrikaans)", paperFile: "Accounting_P1_Nov_2025_Answer_Book_Afr.pdf", memoFile: null, hasMemo: false },
    { year: "2025", session: "November", subject: "Accounting", paperName: "Answer Book (English)", paperFile: "Accounting_P1_Nov_2025_Answer_Book_Eng.pdf", memoFile: null, hasMemo: false },
    { year: "2025", session: "November", subject: "Accounting", paperName: "Answer Book P2 (Afrikaans)", paperFile: "Accounting_P2_Nov_2025_Answer_Book_Afr.pdf", memoFile: null, hasMemo: false },
    { year: "2025", session: "November", subject: "Accounting", paperName: "Answer Book P2 (English)", paperFile: "Accounting_P2_Nov_2025_Answer_Book_Eng.pdf", memoFile: null, hasMemo: false },

    // ========== MATHEMATICS 2025 ==========
    { year: "2025", session: "November", subject: "Mathematics", paperName: "Paper 1", paperFile: "Mathematics P1 Nov 2025 Eng.pdf", memoFile: "Mathematics P1 Nov 2025 MG Afr & Eng.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Mathematics", paperName: "Paper 2", paperFile: "Mathematics P2 Nov 2025 Eng.pdf", memoFile: "Mathematics P2 Nov 2025 MG Afr & Eng.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Mathematics", paperName: "Answer Book P1", paperFile: "Mathematics P1 Nov 2025 Answer Book Eng & Afr.pdf", memoFile: null, hasMemo: false },
    { year: "2025", session: "November", subject: "Mathematics", paperName: "Answer Book P2", paperFile: "Mathematics P2 Nov 2025 Answer Book Afr & Eng.pdf", memoFile: null, hasMemo: false },

    // ========== MATHEMATICAL LITERACY 2025 ==========
    { year: "2025", session: "November", subject: "Mathematical Literacy", paperName: "Paper 1 (English)", paperFile: "Mathematical Literacy P1 Nov 2025 Eng.pdf", memoFile: "Mathematical Literacy P1 Nov 2025 MG Afr & Eng.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Mathematical Literacy", paperName: "Paper 1 (Afrikaans)", paperFile: "Mathematical Literacy P1 Nov 2025 Afr.pdf", memoFile: "Mathematical Literacy P1 Nov 2025 MG Afr & Eng.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Mathematical Literacy", paperName: "Answer Book P1 (English)", paperFile: "Mathematical Literacy P1 Nov 2025 Answer Book Eng.pdf", memoFile: null, hasMemo: false },
    { year: "2025", session: "November", subject: "Mathematical Literacy", paperName: "Answer Book P1 (Afrikaans)", paperFile: "Mathematical Literacy P1 Nov 2025 Answer Book Afr.pdf", memoFile: null, hasMemo: false },
    { year: "2025", session: "November", subject: "Mathematical Literacy", paperName: "Paper 2 (English)", paperFile: "Mathematical Literacy P2 Nov 2025 Eng.pdf", memoFile: "Mathematical Literacy P2 Nov 2025 MG Afr & Eng.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Mathematical Literacy", paperName: "Paper 2 (Afrikaans)", paperFile: "Mathematical Literacy P2 Nov 2025 Afr.pdf", memoFile: "Mathematical Literacy P2 Nov 2025 MG Afr & Eng.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Mathematical Literacy", paperName: "Answer Book P2 (English)", paperFile: "Mathematical Literacy P2 Nov 2025 Answer Book Eng.pdf", memoFile: null, hasMemo: false },
    { year: "2025", session: "November", subject: "Mathematical Literacy", paperName: "Answer Book P2 (Afrikaans)", paperFile: "Mathematical Literacy P2 Nov 2025 Answer Book Afr.pdf", memoFile: null, hasMemo: false },

    // ========== TECHNICAL MATHEMATICS 2025 ==========
    { year: "2025", session: "November", subject: "Technical Mathematics", paperName: "Paper 1 (English)", paperFile: "Technical Mathematics P1 Nov 2025 Eng.pdf", memoFile: "Technical Mathematics P1 Nov 2025 MG Afr & Eng.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Technical Mathematics", paperName: "Paper 1 (Afrikaans)", paperFile: "Technical Mathematics P1 Nov 2025 Afr.pdf", memoFile: "Technical Mathematics P1 Nov 2025 MG Afr & Eng.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Technical Mathematics", paperName: "Answer Book P1", paperFile: "Technical Mathematics P1 Nov 2025 Answer Book Eng & Afr.pdf", memoFile: null, hasMemo: false },
    { year: "2025", session: "November", subject: "Technical Mathematics", paperName: "Paper 2 (English)", paperFile: "Technical Mathematics P2 Nov 2025 Eng.pdf", memoFile: "Technical Mathematics P2 Nov 2025 MG Afr & Eng.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Technical Mathematics", paperName: "Paper 2 (Afrikaans)", paperFile: "Technical Mathematics P2 Nov 2025 Afr.pdf", memoFile: "Technical Mathematics P2 Nov 2025 MG Afr & Eng.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Technical Mathematics", paperName: "Answer Book P2", paperFile: "Technical Mathematics P2 Nov 2025 Answer Book Eng & Afr.pdf", memoFile: null, hasMemo: false },

    // ========== PHYSICAL SCIENCES 2025 ==========
    { year: "2025", session: "November", subject: "Physical Sciences", paperName: "Paper 1 (Physics) English", paperFile: "Physical Sciences P1 Nov 2025 Eng.pdf", memoFile: "Physical Sciences P1 Nov 2025 MG Afr & Eng.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Physical Sciences", paperName: "Paper 1 (Physics) Afrikaans", paperFile: "Physical Sciences P1 Nov 2025 Afr.pdf", memoFile: "Physical Sciences P1 Nov 2025 MG Afr & Eng.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Physical Sciences", paperName: "Paper 2 (Chemistry) English", paperFile: "Physical Sciences P2 Nov 2025 Eng.pdf", memoFile: "Physical Sciences P2 Nov 2025 MG Afr & Eng.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Physical Sciences", paperName: "Paper 2 (Chemistry) Afrikaans", paperFile: "Physical Sciences P2 Nov 2025 Afr.pdf", memoFile: "Physical Sciences P2 Nov 2025 MG Afr & Eng.pdf", hasMemo: true },

    // ========== TECHNICAL SCIENCES 2025 ==========
    { year: "2025", session: "November", subject: "Technical Sciences", paperName: "Paper 1 (English)", paperFile: "Technical Sciences P1 Nov 2025 Eng.pdf", memoFile: "Technical Sciences P1 Nov 2025 MG Afr & Eng.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Technical Sciences", paperName: "Paper 1 (Afrikaans)", paperFile: "Technical Sciences P1 Nov 2025 Afr.pdf", memoFile: "Technical Sciences P1 Nov 2025 MG Afr & Eng.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Technical Sciences", paperName: "Paper 2 (English)", paperFile: "Technical Sciences P2 Nov 2025 Eng.pdf", memoFile: "Technical Sciences P2 Nov 2025 MG Afr & Eng.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Technical Sciences", paperName: "Paper 2 (Afrikaans)", paperFile: "Technical Sciences P2 Nov 2025 Afr.pdf", memoFile: "Technical Sciences P2 Nov 2025 MG Afr & Eng.pdf", hasMemo: true },

    // ========== LIFE SCIENCES 2025 ==========
    { year: "2025", session: "November", subject: "Life Sciences", paperName: "Paper 1", paperFile: "Life_Sciences_P1_Nov_2025.pdf", memoFile: "Life_Sciences_P1_Nov_2025_Memo.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Life Sciences", paperName: "Paper 2", paperFile: "Life_Sciences_P2_Nov_2025.pdf", memoFile: "Life_Sciences_P2_Nov_2025_Memo.pdf", hasMemo: true },

    // ========== TOURISM 2025 ==========
    { year: "2025", session: "November", subject: "Tourism", paperName: "Paper (English)", paperFile: "Tourism Nov 2025 Eng.pdf", memoFile: "Tourism Nov 2025 MG Eng.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Tourism", paperName: "Paper (Afrikaans)", paperFile: "Tourism Nov 2025 Afr.pdf", memoFile: "Tourism Nov 2025 MG Afr.pdf", hasMemo: true },

    // ========== VISUAL ARTS 2025 ==========
    { year: "2025", session: "November", subject: "Visual Arts", paperName: "Paper 1 (English)", paperFile: "Visual Arts P1 Nov 2025 Eng.pdf", memoFile: "Visual Arts P1 Nov 2025 MG Eng.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Visual Arts", paperName: "Paper 1 (Afrikaans)", paperFile: "Visual Arts P1 Nov 2025 Afr.pdf", memoFile: "Visual Arts P1 Nov 2025 MG Afr.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Visual Arts", paperName: "Paper 2 (English)", paperFile: "Visual Arts P2 Nov 2025 Eng.pdf", memoFile: null, hasMemo: false },
    { year: "2025", session: "November", subject: "Visual Arts", paperName: "Paper 2 (Afrikaans)", paperFile: "Visual Arts P2 Nov 2025 Afr.pdf", memoFile: null, hasMemo: false },

    // ========== RELIGION STUDIES 2025 ==========
    { year: "2025", session: "November", subject: "Religion Studies", paperName: "Paper 1 (English)", paperFile: "Religion Studies P1 Nov 2025 Eng.pdf", memoFile: "Religion Studies P1 Nov 2025 MG Eng.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Religion Studies", paperName: "Paper 1 (Afrikaans)", paperFile: "Religion Studies P1 Nov 2025 Afr.pdf", memoFile: "Religion Studies P1 Nov 2025 MG Afr.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Religion Studies", paperName: "Paper 2 (English)", paperFile: "Religion Studies P2 Nov 2025 Eng.pdf", memoFile: "Religion Studies P2 Nov 2025 MG Eng.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Religion Studies", paperName: "Paper 2 (Afrikaans)", paperFile: "Religion Studies P2 Nov 2025 Afr.pdf", memoFile: "Religion Studies P2 Nov 2025 MG Afr.pdf", hasMemo: true },

    // ========== MARINE SCIENCES 2025 ==========
    { year: "2025", session: "November", subject: "Marine Sciences", paperName: "Paper 1 (English)", paperFile: "Marine Sciences P1 Nov 2025 Eng.pdf", memoFile: "Marine Sciences P1 Nov 2025 MG Eng.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Marine Sciences", paperName: "Paper 1 (Afrikaans)", paperFile: "Marine Sciences P1 Nov 2025 Afr.pdf", memoFile: null, hasMemo: false },
    { year: "2025", session: "November", subject: "Marine Sciences", paperName: "Paper 2 (English)", paperFile: "Marine Sciences P2 Nov 2025 Eng.pdf", memoFile: "Marine Sciences P2 Nov 2025 MG Eng.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Marine Sciences", paperName: "Paper 2 (Afrikaans)", paperFile: "Marine Sciences P2 Nov 2025 Afr.pdf", memoFile: null, hasMemo: false },

    // ========== MECHANICAL TECHNOLOGY 2025 ==========
    // Automotive
    { year: "2025", session: "November", subject: "Mechanical Technology - Automotive", paperName: "Paper (English)", paperFile: "Mechanical Technology Nov 2025 (Automotive) Eng.pdf", memoFile: "Mechanical Technology Nov 2025 (Automotive) MG Eng.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Mechanical Technology - Automotive", paperName: "Paper (Afrikaans)", paperFile: "Mechanical Technology Nov 2025 (Automotive) Afr.pdf", memoFile: "Mechanical Technology Nov 2025 (Automotive) MG Afr.pdf", hasMemo: true },
    
    // Fitting and Machining
    { year: "2025", session: "November", subject: "Mechanical Technology - Fitting and Machining", paperName: "Paper (English)", paperFile: "Mechanical Technology Nov 2025 (Fitting and Machining) Eng.pdf", memoFile: "Mechanical Technology Nov 2025 (Fitting and Machining) MG Eng.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Mechanical Technology - Fitting and Machining", paperName: "Paper (Afrikaans)", paperFile: "Mechanical Technology Nov 2025 (Fitting and Machining) Afr.pdf", memoFile: "Mechanical Technology Nov 2025 (Fitting and Machining) MG Afr.pdf", hasMemo: true },
    
    // Welding and Metal Work
    { year: "2025", session: "November", subject: "Mechanical Technology - Welding and Metal Work", paperName: "Paper (English)", paperFile: "Mechanical Technology Nov 2025 (Welding & Metal Work) Eng.pdf", memoFile: "Mechanical Technology Nov 2025 (Welding & Metal Work) MG Eng.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Mechanical Technology - Welding and Metal Work", paperName: "Paper (Afrikaans)", paperFile: "Mechanical Technology Nov 2025 (Welding & Metal Work) Afr.pdf", memoFile: "Mechanical Technology Nov 2025 (Welding & Metal Work) MG Afr.pdf", hasMemo: true },

    // ========== CIVIL TECHNOLOGY 2025 ==========
    // Civil Services
    { year: "2025", session: "November", subject: "Civil Technology - Civil Services", paperName: "Paper (English)", paperFile: "Civil Technology Nov 2025 (Civil Services) Eng.pdf", memoFile: "Civil Technology Final Nov 2025 (Civil Services) MG Eng.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Civil Technology - Civil Services", paperName: "Paper (Afrikaans)", paperFile: "Civil Technology Nov 2025 (Civil Services) Afr.pdf", memoFile: "Civil Technology Final Nov 2025 (Civil Services) MG Afr.pdf", hasMemo: true },
    
    // Woodworking
    { year: "2025", session: "November", subject: "Civil Technology - Woodworking", paperName: "Paper (English)", paperFile: "Civil Technology Nov 2025 (Woodworking) Eng.pdf", memoFile: "Civil Technology Nov 2025 Woodworking Memo Eng.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Civil Technology - Woodworking", paperName: "Paper (Afrikaans)", paperFile: "Civil Technology Nov 2025 (Woodworking) Afr.pdf", memoFile: "Civil Technology Nov 2025 Woodworking Memo Afr.pdf", hasMemo: true },
    
    // Construction
    { year: "2025", session: "November", subject: "Civil Technology - Construction", paperName: "Paper (English)", paperFile: "Civil Technology Nov 2025 (Construction) Eng.pdf", memoFile: "Civil Technology Nov 2025 (Construction) MG Eng.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Civil Technology - Construction", paperName: "Paper (Afrikaans)", paperFile: "Civil Technology Nov 2025 (Construction) Afr.pdf", memoFile: "Civil Technology Nov 2025 (Construction) MG Afr.pdf", hasMemo: true },

    // ========== LIFE ORIENTATION 2025 ==========
{ year: "2025", session: "September", subject: "Life Orientation", paperName: "Common Assessment Task (English)", paperFile: "Life Orientation September 2025 Eng.pdf", memoFile: "Life Orientation September 2025 MG Eng.pdf", hasMemo: true },
{ year: "2025", session: "September", subject: "Life Orientation", paperName: "Common Assessment Task (Afrikaans)", paperFile: "Life Orientation September 2025 Afr.pdf", memoFile: "Life Orientation September 2025 MG Afr.pdf", hasMemo: true },

// ========== INFORMATION TECHNOLOGY 2025 ==========
{ year: "2025", session: "November", subject: "Information Technology", paperName: "Paper 1 (English)", paperFile: "Information Technology P1 Nov 2025 Eng.pdf", memoFile: "Information Technology P1 Nov 2025 MG Eng.pdf", hasMemo: true },
{ year: "2025", session: "November", subject: "Information Technology", paperName: "Paper 1 (Afrikaans)", paperFile: "Information Technology P1 Nov 2025 Afr.pdf", memoFile: "Information Technology P1 Nov 2025 MG Afr.pdf", hasMemo: true },
{ year: "2025", session: "November", subject: "Information Technology", paperName: "Paper 2 (English)", paperFile: "Information Technology P2 Nov 2025 Eng.pdf", memoFile: "Information Technology P2 Nov 2025 MG Eng.pdf", hasMemo: true },
{ year: "2025", session: "November", subject: "Information Technology", paperName: "Paper 2 (Afrikaans)", paperFile: "Information Technology P2 Nov 2025 Afr.pdf", memoFile: "Information Technology P2 Nov 2025 MG Afr.pdf", hasMemo: true },

// ========== HOSPITALITY STUDIES 2025 ==========
{ year: "2025", session: "November", subject: "Hospitality Studies", paperName: "Paper (English)", paperFile: "Hospitality Studies Nov 2025 Eng.pdf", memoFile: "Hospitality Studies Nov 2025 MG Eng.pdf", hasMemo: true },
{ year: "2025", session: "November", subject: "Hospitality Studies", paperName: "Paper (Afrikaans)", paperFile: "Hospitality Studies Nov 2025 Afr.pdf", memoFile: "Hospitality Studies Nov 2025 MG Afr.pdf", hasMemo: true },

// ========== GEOGRAPHY 2025 ==========
{ year: "2025", session: "November", subject: "Geography", paperName: "Paper 1 (English)", paperFile: "GeographyP1Nov2025Eng.pdf", memoFile: "GeographyP1Nov2025MGEng.pdf", hasMemo: true },
{ year: "2025", session: "November", subject: "Geography", paperName: "Paper 1 (Afrikaans)", paperFile: "GeographyP1Nov2025Afr.pdf", memoFile: "GeographyP1Nov2025MGAfr.pdf", hasMemo: true },
{ year: "2025", session: "November", subject: "Geography", paperName: "Paper 2 (English)", paperFile: "GeographyP2Nov2025Eng.pdf", memoFile: "GeographyP2Nov2025MGEng.pdf", hasMemo: true },
{ year: "2025", session: "November", subject: "Geography", paperName: "Paper 2 (Afrikaans)", paperFile: "GeographyP2Nov2025Afr.pdf", memoFile: "GeographyP2Nov2025MGAfr.pdf", hasMemo: true },

// ========== HISTORY 2025 ==========
{ year: "2025", session: "November", subject: "History", paperName: "Paper 1 (English)", paperFile: "HistoryP1Nov2025Eng.pdf", memoFile: "HistoryP1Nov2025MGEng.pdf", hasMemo: true },
{ year: "2025", session: "November", subject: "History", paperName: "Paper 1 (Afrikaans)", paperFile: "HistoryP1Nov2025Afr.pdf", memoFile: "HistoryP1Nov2025MGAfr.pdf", hasMemo: true },
{ year: "2025", session: "November", subject: "History", paperName: "Paper 1 Addendum (English)", paperFile: "HistoryP1Nov2025AddendumEng.pdf", memoFile: null, hasMemo: false },
{ year: "2025", session: "November", subject: "History", paperName: "Paper 1 Addendum (Afrikaans)", paperFile: "HistoryP1Nov2025AddendumAfr.pdf", memoFile: null, hasMemo: false },
{ year: "2025", session: "November", subject: "History", paperName: "Paper 2 (English)", paperFile: "HistoryP2Nov2025Eng.pdf", memoFile: "HistoryP2Nov2025MGEng.pdf", hasMemo: true },
{ year: "2025", session: "November", subject: "History", paperName: "Paper 2 (Afrikaans)", paperFile: "HistoryP2Nov2025Afr.pdf", memoFile: "HistoryP2Nov2025MGAfr.pdf", hasMemo: true },
{ year: "2025", session: "November", subject: "History", paperName: "Paper 2 Addendum (English)", paperFile: "HistoryP2Nov2025AddendumEng.pdf", memoFile: null, hasMemo: false },
{ year: "2025", session: "November", subject: "History", paperName: "Paper 2 Addendum (Afrikaans)", paperFile: "HistoryP2Nov2025AddendumAfr.pdf", memoFile: null, hasMemo: false },

// ========== ENGINEERING GRAPHICS AND DESIGN 2025 ==========
{ year: "2025", session: "November", subject: "Engineering Graphics and Design", paperName: "Paper 1 (English)", paperFile: "EngineeringGraphics&DesignP1Nov2025Eng.pdf", memoFile: "Engineering Graphics & Design P1 Nov 2025 MG Eng.pdf", hasMemo: true },
{ year: "2025", session: "November", subject: "Engineering Graphics and Design", paperName: "Paper 1 (Afrikaans)", paperFile: "EngineeringGraphics&DesignP1Nov2025Afr.pdf", memoFile: "EngineeringGraphics&DesignP1Nov2025MGAfr.pdf", hasMemo: true },
{ year: "2025", session: "November", subject: "Engineering Graphics and Design", paperName: "Paper 1 Question 4 A3 (Afrikaans)", paperFile: "Engineering Graphics & Design P1 Nov 2025 Q4  A3 MG Afr.pdf", memoFile: null, hasMemo: false },
{ year: "2025", session: "November", subject: "Engineering Graphics and Design", paperName: "Paper 1 Question 4 A3 (English)", paperFile: "Engineering Graphics & Design P1 Nov 2025 Q4  A3 MG Eng.pdf", memoFile: null, hasMemo: false },
{ year: "2025", session: "November", subject: "Engineering Graphics and Design", paperName: "Paper 2 (English)", paperFile: "Engineering Graphics & Design P2 Nov 2025 Eng.pdf", memoFile: "Engineering Graphics & Design P2 Nov 2025 MG Eng.pdf", hasMemo: true },
{ year: "2025", session: "November", subject: "Engineering Graphics and Design", paperName: "Paper 2 (Afrikaans)", paperFile: "Engineering Graphics & Design P2 Nov 2025 Afr.pdf", memoFile: "Engineering Graphics & Design P2 Nov 2025 MG Afr.pdf", hasMemo: true },
{ year: "2025", session: "November", subject: "Engineering Graphics and Design", paperName: "Paper 2 Question 4 A3 (Afrikaans)", paperFile: "Engineering Graphics & Design P2 Nov 2025 Q4 A3 MG Afr.pdf", memoFile: null, hasMemo: false },
{ year: "2025", session: "November", subject: "Engineering Graphics and Design", paperName: "Paper 2 Question 4 A3 (English)", paperFile: "Engineering Graphics & Design P2 Nov 2025 Q4 A3 MG Eng.pdf", memoFile: null, hasMemo: false },

// ========== ELECTRICAL TECHNOLOGY 2025 ==========
// Digital Electronics
{ year: "2025", session: "November", subject: "Electrical Technology - Digital Electronics", paperName: "Paper (English)", paperFile: "ElectricalTechnologyNov2025(Digital)Eng.pdf", memoFile: "ElectricalTechnologyNov2025(Digital)MGEng.pdf", hasMemo: true },
{ year: "2025", session: "November", subject: "Electrical Technology - Digital Electronics", paperName: "Paper (Afrikaans)", paperFile: "ElectricalTechnologyNov2025(Digital)Afr.pdf", memoFile: "ElectricalTechnologyNov2025(Digital)MGAfr.pdf", hasMemo: true },

// Electronics
{ year: "2025", session: "November", subject: "Electrical Technology - Electronics", paperName: "Paper (English)", paperFile: "ElectricalTechnologyNov2025(Electronics)Eng.pdf", memoFile: "ElectricalTechnologyNov2025(Electronics)MGEng.pdf", hasMemo: true },
{ year: "2025", session: "November", subject: "Electrical Technology - Electronics", paperName: "Paper (Afrikaans)", paperFile: "ElectricalTechnologyNov2025(Electronics)Afr.pdf", memoFile: "ElectricalTechnologyNov2025(Electronics)MGAfr.pdf", hasMemo: true },

// Power Systems
{ year: "2025", session: "November", subject: "Electrical Technology - Power Systems", paperName: "Paper (English)", paperFile: "ElectricalTechnologyNov2025(Power Systems)Eng.pdf", memoFile: "ElectricalTechnologyNov2025(Power Systems)MGEng.pdf", hasMemo: true },
{ year: "2025", session: "November", subject: "Electrical Technology - Power Systems", paperName: "Paper (Afrikaans)", paperFile: "ElectricalTechnologyNov2025(Power Systems)Afr.pdf", memoFile: "ElectricalTechnologyNov2025(Power Systems)MGAfr.pdf", hasMemo: true },

// ========== ECONOMICS 2025 ==========
{ year: "2025", session: "November", subject: "Economics", paperName: "Paper 1 (English)", paperFile: "EconomicsP1Nov2025Eng.pdf", memoFile: "EconomicsP1Nov2025MGEng.pdf", hasMemo: true },
{ year: "2025", session: "November", subject: "Economics", paperName: "Paper 1 (Afrikaans)", paperFile: "EconomicsP1Nov2025Afr.pdf", memoFile: "EconomicsP1Nov2025MGAfr.pdf", hasMemo: true },
{ year: "2025", session: "November", subject: "Economics", paperName: "Paper 2 (English)", paperFile: "EconomicsP2Nov2025Eng.pdf", memoFile: "EconomicsP2Nov2025MGEng.pdf", hasMemo: true },
{ year: "2025", session: "November", subject: "Economics", paperName: "Paper 2 (Afrikaans)", paperFile: "EconomicsP2Nov2025Afr.pdf", memoFile: "EconomicsP2Nov2025MGAfr.pdf", hasMemo: true },

// ========== CONSUMER STUDIES 2025 ==========
{ year: "2025", session: "November", subject: "Consumer Studies", paperName: "Paper (English)", paperFile: "ConsumerStudiesNov2025Eng.pdf", memoFile: "ConsumerStudiesNov2025MGEng.pdf", hasMemo: true },
{ year: "2025", session: "November", subject: "Consumer Studies", paperName: "Paper (Afrikaans)", paperFile: "Consumer2.StudiesNov2025MGAfr(1).pdf", memoFile: "ConsumerStudiesNov2025MGAfr.pdf", hasMemo: true },

// ========== DANCE STUDIES 2025 ==========
{ year: "2025", session: "November", subject: "Dance Studies", paperName: "Paper (English)", paperFile: "DanceStudiesNov2025Eng.pdf", memoFile: "DanceStudiesNov2025MGEng.pdf", hasMemo: true },
{ year: "2025", session: "November", subject: "Dance Studies", paperName: "Paper (Afrikaans)", paperFile: "DanceStudiesNov2025Afr.pdf", memoFile: "DanceStudiesNov2025MGAfr.pdf", hasMemo: true },

// ========== DESIGN 2025 ==========
{ year: "2025", session: "November", subject: "Design", paperName: "Paper 1 (English)", paperFile: "DesignP1Nov2025Eng.pdf", memoFile: "DesignP1Nov2025MGEng.pdf", hasMemo: true },
{ year: "2025", session: "November", subject: "Design", paperName: "Paper 1 (Afrikaans)", paperFile: "DesignP1Nov2025Afr.pdf", memoFile: "DesignP1Nov2025MGAfr.pdf", hasMemo: true },

// ========== DRAMATIC ARTS 2025 ==========
{ year: "2025", session: "November", subject: "Dramatic Arts", paperName: "Paper (English)", paperFile: "DramaticArtsNov2025Eng.pdf", memoFile: "DramaticArtsNov2025MGEng.pdf", hasMemo: true },
{ year: "2025", session: "November", subject: "Dramatic Arts", paperName: "Paper (Afrikaans)", paperFile: "DramaticArtsNov2025Afr.pdf", memoFile: "DramaticArtsNov2025MGAfr.pdf", hasMemo: true },

// ========== CIVIL TECHNOLOGY 2025 ==========
// Civil Services
{ year: "2025", session: "November", subject: "Civil Technology - Civil Services", paperName: "Paper (English)", paperFile: "Civil_Technology_Nov_2025_(Civil Services)_Eng.pdf", memoFile: "Civil_Technology_Final_Nov_2025_(Civil Services)_Memo_Eng.pdf", hasMemo: true },
{ year: "2025", session: "November", subject: "Civil Technology - Civil Services", paperName: "Paper (Afrikaans)", paperFile: "Civil_Technology_Nov_2025_(Civil Services)_Afr.pdf", memoFile: "Civil_Technology_Final_Nov_2025_(Civil Services)_Memo_Afr.pdf", hasMemo: true },

// Construction
{ year: "2025", session: "November", subject: "Civil Technology - Construction", paperName: "Paper (English)", paperFile: "Civil_Technology_Nov_2025_(Construction)_Eng.pdf", memoFile: "Civil_Technology_Nov_2025_(Construction)_Memo_Eng.pdf", hasMemo: true },
{ year: "2025", session: "November", subject: "Civil Technology - Construction", paperName: "Paper (Afrikaans)", paperFile: "Civil_Technology_Nov_2025_(Construction)_Afr.pdf", memoFile: "Civil_Technology_Nov_2025_(Construction)_Memo_Afr.pdf", hasMemo: true },

// Woodworking
{ year: "2025", session: "November", subject: "Civil Technology - Woodworking", paperName: "Paper (English)", paperFile: "Civil_Technology_Nov_2025_(Woodworking)_Eng.pdf", memoFile: "Civil_Technology_Nov_2025_Woodworking_Memo_Eng.pdf", hasMemo: true },
{ year: "2025", session: "November", subject: "Civil Technology - Woodworking", paperName: "Paper (Afrikaans)", paperFile: "Civil_Technology_Nov_2025_(Woodworking)_Afr.pdf", memoFile: "Civil_Technology_Nov_2025_(Woodworking)_Memo_Afr.pdf", hasMemo: true },

// ========== AGRICULTURAL TECHNOLOGY 2025 ==========
{ year: "2025", session: "November", subject: "Agricultural Technology", paperName: "Paper (English)", paperFile: "Agricultural_Technology_Nov_2025_Eng.pdf", memoFile: "Agricultural_Technology_Nov_2025_Memo_Eng.pdf", hasMemo: true },
{ year: "2025", session: "November", subject: "Agricultural Technology", paperName: "Paper (Afrikaans)", paperFile: "Agricultural_Technology_Nov_2025_Afr.pdf", memoFile: "Agricultural_Technology_Nov_2025_Memo_Afr.pdf", hasMemo: true },

// ========== AGRICULTURAL SCIENCES 2025 ==========
{ year: "2025", session: "November", subject: "Agricultural Sciences", paperName: "Paper 1 (English)", paperFile: "Agricultural_Sciences_P1_Nov_2025_Eng.pdf", memoFile: "Agricultural_Sciences_P1_Nov_2025_Memo_Eng.pdf", hasMemo: true },
{ year: "2025", session: "November", subject: "Agricultural Sciences", paperName: "Paper 1 (Afrikaans)", paperFile: "Agricultural_Sciences_P1_Nov_2025_Afr.pdf", memoFile: "Agricultural_Sciences_P1_Nov_2025_Memo_Afr.pdf", hasMemo: true },
{ year: "2025", session: "November", subject: "Agricultural Sciences", paperName: "Paper 2 (English)", paperFile: "Agricultural_Sciences_P2_Nov_2025_Eng.pdf", memoFile: "Agricultural_Sciences_P2_Nov_2025_Memo_Eng.pdf", hasMemo: true },
{ year: "2025", session: "November", subject: "Agricultural Sciences", paperName: "Paper 2 (Afrikaans)", paperFile: "Agricultural_Sciences_P2_Nov_2025_Afr.pdf", memoFile: "Agricultural_Sciences_P2_Nov_2025_Memo_Afr.pdf", hasMemo: true },

// ========== AGRICULTURAL MANAGEMENT PRACTICES 2025 ==========
{ year: "2025", session: "November", subject: "Agricultural Management Practices", paperName: "Paper 1 (English)", paperFile: "Agricultural_Management_Practices_Nov_2025_Eng.pdf", memoFile: "Agricultural_Management_Practices_Nov_2025_Memo_Eng.pdf", hasMemo: true },
{ year: "2025", session: "November", subject: "Agricultural Management Practices", paperName: "Paper 1 (Afrikaans)", paperFile: "Agricultural_Management_Practices_Nov_2025_Afr.pdf", memoFile: "Agricultural_Management_Practices_Nov_2025_Memo_Afr.pdf", hasMemo: true },

// ========== BUSINESS STUDIES 2025 ==========
{ year: "2025", session: "November", subject: "Business Studies", paperName: "Paper 1 (English)", paperFile: "Business_Studies_P1_Nov_2025_Eng.pdf", memoFile: "Business_Studies_P1_Nov_2025_Memo_Eng.pdf", hasMemo: true },
{ year: "2025", session: "November", subject: "Business Studies", paperName: "Paper 1 (Afrikaans)", paperFile: "Business_Studies_P1_Nov_2025_Afr.pdf", memoFile: "Business_Studies_P1_Nov_2025_Memo_Afr.pdf", hasMemo: true },
{ year: "2025", session: "November", subject: "Business Studies", paperName: "Paper 2 (English)", paperFile: "Business_Studies_P2_Nov_2025_Eng.pdf", memoFile: "Business_Studies_P2_Nov_2025_Memo_Eng.pdf", hasMemo: true },
{ year: "2025", session: "November", subject: "Business Studies", paperName: "Paper 2 (Afrikaans)", paperFile: "Business_Studies_P2_Nov_2025_Afr.pdf", memoFile: "Business_Studies_P2_Nov_2025_Memo_Afr.pdf", hasMemo: true },

// ========== ENGLISH FIRST ADDITIONAL LANGUAGE (FAL) 2025 ==========
{ year: "2025", session: "May/June", subject: "English First Additional Language", paperName: "Paper 2", paperFile: "English FAL P2 May-June 2025.pdf", memoFile: null, hasMemo: false },
{ year: "2025", session: "November", subject: "English First Additional Language", paperName: "Paper 1", paperFile: "English FAL P1 Nov 2025.pdf", memoFile: "English FAL P1 Nov 2025 MG.pdf", hasMemo: true },
{ year: "2025", session: "November", subject: "English First Additional Language", paperName: "Paper 2", paperFile: "English FAL P2 Nov 2025.pdf", memoFile: "English FAL P2 Nov 2025 MG.pdf", hasMemo: true },
{ year: "2025", session: "November", subject: "English First Additional Language", paperName: "Paper 3", paperFile: "English FAL P3 Nov 2025.pdf", memoFile: "English FAL P3 Nov 2025 MG.pdf", hasMemo: true },

// ========== ENGLISH HOME LANGUAGE (HL) 2025 ==========
{ year: "2025", session: "November", subject: "English Home Language", paperName: "Paper 1", paperFile: "English HL P1 Nov 2025.pdf", memoFile: "English HL P1 Nov 2025 MG.pdf", hasMemo: true },
{ year: "2025", session: "November", subject: "English Home Language", paperName: "Paper 2", paperFile: "English HL P2 Nov 2025.pdf", memoFile: "English HL P2 Nov 2025 MG.pdf", hasMemo: true },
{ year: "2025", session: "November", subject: "English Home Language", paperName: "Paper 3", paperFile: "English HL P3 Nov 2025.pdf", memoFile: "English HL P3 Nov 2025 MG.pdf", hasMemo: true },

// ========== ENGLISH SECOND ADDITIONAL LANGUAGE (SAL) 2025 ==========
{ year: "2025", session: "November", subject: "English Second Additional Language", paperName: "Paper 1", paperFile: "English SAL P1 Nov 2025.pdf", memoFile: "English SAL P1 Nov 2025 MG.pdf", hasMemo: true },
{ year: "2025", session: "November", subject: "English Second Additional Language", paperName: "Paper 2", paperFile: "English SAL P2 Nov 2025.pdf", memoFile: "English SAL P2 Nov 2025 MG.pdf", hasMemo: true },
{ year: "2025", session: "November", subject: "English Second Additional Language", paperName: "Paper 3", paperFile: "English SAL P3 Nov 2025.pdf", memoFile: "English SAL P3 Nov 2025 MG.pdf", hasMemo: true },

// ========== AFRIKAANS EERSTE ADDISIONELE TAAL (FAL) 2025 ==========
{ year: "2025", session: "November", subject: "Afrikaans Eerste Addisionele Taal", paperName: "Vraestel 1", paperFile: "Afrikaans FAL P1 Nov 2025.pdf", memoFile: "Afrikaans FAL P1 Nov 2025 MG.pdf", hasMemo: true },
{ year: "2025", session: "November", subject: "Afrikaans Eerste Addisionele Taal", paperName: "Vraestel 2", paperFile: "Afrikaans FAL P2 Nov 2025.pdf", memoFile: "Afrikaans FAL P2 Nov 2025 MG.pdf", hasMemo: true },
{ year: "2025", session: "November", subject: "Afrikaans Eerste Addisionele Taal", paperName: "Vraestel 3", paperFile: "Afrikaans FAL P3 Nov 2025.pdf", memoFile: "Afrikaans FAL P3 Nov 2025 MG.pdf", hasMemo: true },

// ========== AFRIKAANS HUISTAAL (HL) 2025 ==========
{ year: "2025", session: "November", subject: "Afrikaans Huistaal", paperName: "Vraestel 1", paperFile: "Afrikaans HL P1 Nov 2025.pdf", memoFile: "Afrikaans HL P1 Nov 2025 MG.pdf", hasMemo: true },
{ year: "2025", session: "November", subject: "Afrikaans Huistaal", paperName: "Vraestel 2", paperFile: "Afrikaans HL P2 Nov 2025.pdf", memoFile: "Afrikaans HL P2 Nov 2025 MG.pdf", hasMemo: true },
{ year: "2025", session: "November", subject: "Afrikaans Huistaal", paperName: "Vraestel 3", paperFile: "Afrikaans HL P3 Nov 2025.pdf", memoFile: "Afrikaans HL P3 Nov 2025 MG.pdf", hasMemo: true },

// ========== AFRIKAANS TWEEDE ADDISIONELE TAAL (SAL) 2025 ==========
{ year: "2025", session: "November", subject: "Afrikaans Tweede Addisionele Taal", paperName: "Vraestel 1", paperFile: "Afrikaans SAL P1 Nov 2025.pdf", memoFile: "Afrikaans SAL P1 Nov 2025 MG.pdf", hasMemo: true },
{ year: "2025", session: "November", subject: "Afrikaans Tweede Addisionele Taal", paperName: "Vraestel 2", paperFile: "Afrikaans SAL P2 Nov 2025.pdf", memoFile: "Afrikaans SAL P2 Nov 2025 MG.pdf", hasMemo: true },
{ year: "2025", session: "November", subject: "Afrikaans Tweede Addisionele Taal", paperName: "Vraestel 3", paperFile: "Afrikaans SAL P3 Nov 2025.pdf", memoFile: "Afrikaans SAL P3 Nov 2025 MG.pdf", hasMemo: true },

// ========== ISINDEBELE 2025 ==========
{ year: "2025", session: "November", subject: "IsiNdebele", paperName: "FAL P1", paperFile: "IsiNdebele FAL P1 Nov 2025.pdf", memoFile: "IsiNdebele FAL P1 Nov 2025 MG.pdf", hasMemo: true },
{ year: "2025", session: "November", subject: "IsiNdebele", paperName: "FAL P2", paperFile: "IsiNdebele FAL P2 Nov 2025.pdf", memoFile: "IsiNdebele FAL P2 Nov 2025 MG.pdf", hasMemo: true },
{ year: "2025", session: "November", subject: "IsiNdebele", paperName: "FAL P3", paperFile: "IsiNdebele FAL P3 Nov 2025.pdf", memoFile: "IsiNdebele FAL P3 Nov 2025 MG.pdf", hasMemo: true },

{ year: "2025", session: "November", subject: "IsiNdebele", paperName: "HL P1", paperFile: "IsiNdebele HL P1 Nov 2025.pdf", memoFile: "IsiNdebele HL P1 Nov 2025 MG.pdf", hasMemo: true },
{ year: "2025", session: "November", subject: "IsiNdebele", paperName: "HL P2", paperFile: "IsiNdebele HL P2 Nov 2025.pdf", memoFile: "IsiNdebele HL P2 Nov 2025 MG.pdf", hasMemo: true },
{ year: "2025", session: "November", subject: "IsiNdebele", paperName: "HL P3", paperFile: "IsiNdebele HL P3 Nov 2025.pdf", memoFile: "IsiNdebele HL P3 Nov 2025 MG.pdf", hasMemo: true },

{ year: "2025", session: "November", subject: "IsiNdebele", paperName: "SAL P1", paperFile: "IsiNdebele SAL P1 Nov 2025.pdf", memoFile: "IsiNdebele SAL P1 Nov 2025 MG.pdf", hasMemo: true },
{ year: "2025", session: "November", subject: "IsiNdebele", paperName: "SAL P2", paperFile: "IsiNdebele SAL P2 Nov 2025.pdf", memoFile: "IsiNdebele SAL P2 Nov 2025 MG.pdf", hasMemo: true },
{ year: "2025", session: "November", subject: "IsiNdebele", paperName: "SAL P3", paperFile: "IsiNdebele SAL P3 Nov 2025.pdf", memoFile: "IsiNdebele SAL P3 Nov 2025 MG.pdf", hasMemo: true },
];

// Language subjects list
export const languageSubjects = [
    "English HL", "English FAL", "English SAL", 
    "Afrikaans", "IsiZulu", "Sepedi", "Sesotho", 
    "Setswana", "Xitsonga", "SiSwati", "Tshivenda", "IsiNdebele"
];

// Available options
export const years = ["2020", "2021", "2022", "2023", "2024", "2025"];
export const sessions = ["November", "May-June", "March", "September"];

// Get unique subjects from all papers
export const getAllSubjects = () => {
    const subjects = allPapers.map(paper => paper.subject);
    return ["All", ...new Set(subjects)];
};