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

    //====================NON-LANGUAGES====================//

    // ========== ACCOUNTING 2025 ==========
    { year: "2025", session: "November", subject: "Accounting", paperName: "Paper 1 (Afrikaans)", paperFile: "2025/november/Accounting/Accounting_P1_Nov_2025_Afr.pdf", memoFile: "2025/november/Accounting/Accounting_P1_Nov_2025_MG_Afr.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Accounting", paperName: "Paper 1 (English)", paperFile: "2025/november/Accounting/Accounting_P1_Nov_2025_Eng.pdf", memoFile: "2025/november/Accounting/Accounting_P1_Nov_2025_MG_Eng.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Accounting", paperName: "Paper 2 (Afrikaans)", paperFile: "2025/november/Accounting/Accounting_P2_Nov_2025_Afr.pdf", memoFile: "2025/november/Accounting/Accounting_P2_Nov_2025_MG_Afr.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Accounting", paperName: "Paper 2 (English)", paperFile: "2025/november/Accounting/Accounting_P2_Nov_2025_Eng.pdf", memoFile: "2025/november/Accounting/Accounting_P2_Nov_2025_MG_Eng.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Accounting", paperName: "Answer Book (Afrikaans)", paperFile: "2025/november/Accounting/Accounting_P1_Nov_2025_Answer_Book_Afr.pdf", memoFile: null, hasMemo: false },
    { year: "2025", session: "November", subject: "Accounting", paperName: "Answer Book (English)", paperFile: "2025/november/Accounting/Accounting_P1_Nov_2025_Answer_Book_Eng.pdf", memoFile: null, hasMemo: false },
    { year: "2025", session: "November", subject: "Accounting", paperName: "Answer Book P2 (Afrikaans)", paperFile: "2025/november/Accounting/Accounting_P2_Nov_2025_Answer_Book_Afr.pdf", memoFile: null, hasMemo: false },
    { year: "2025", session: "November", subject: "Accounting", paperName: "Answer Book P2 (English)", paperFile: "2025/november/Accounting/Accounting_P2_Nov_2025_Answer_Book_Eng.pdf", memoFile: null, hasMemo: false },

// ========== AGRICULTURAL TECHNOLOGY 2025 ==========
    { year: "2025", session: "November", subject: "Agricultural Technology", paperName: "Paper (English)", paperFile: "2025/november/agricultural technology/Agricultural_Technology_Nov_2025_Eng.pdf", memoFile: "2025/november/agricultural technology/Agricultural_Technology_Nov_2025_Memo_Eng.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Agricultural Technology", paperName: "Paper (Afrikaans)", paperFile: "2025/november/agricultural technology/Agricultural_Technology_Nov_2025_Afr.pdf", memoFile: "2025/november/agricultural technology/Agricultural_Technology_Nov_2025_Memo_Afr.pdf", hasMemo: true },

// ========== AGRICULTURAL SCIENCES 2025 ==========
    { year: "2025", session: "November", subject: "Agricultural Sciences", paperName: "Paper 1 (English)", paperFile: "2025/november/agricultural science/Agricultural_Sciences_P1_Nov_2025_Eng.pdf", memoFile: "2025/november/agricultural science/Agricultural_Sciences_P1_Nov_2025_Memo_Eng.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Agricultural Sciences", paperName: "Paper 1 (Afrikaans)", paperFile: "2025/november/agricultural science/Agricultural_Sciences_P1_Nov_2025_Afr.pdf", memoFile: "2025/november/agricultural science/Agricultural_Sciences_P1_Nov_2025_Memo_Afr.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Agricultural Sciences", paperName: "Paper 2 (English)", paperFile: "2025/november/agricultural science/Agricultural_Sciences_P2_Nov_2025_Eng.pdf", memoFile: "2025/november/agricultural science/Agricultural_Sciences_P2_Nov_2025_Memo_Eng.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Agricultural Sciences", paperName: "Paper 2 (Afrikaans)", paperFile: "2025/november/agricultural science/Agricultural_Sciences_P2_Nov_2025_Afr.pdf", memoFile: "2025/november/agricultural science/Agricultural_Sciences_P2_Nov_2025_Memo_Afr.pdf", hasMemo: true },

// ========== AGRICULTURAL MANAGEMENT PRACTICES 2025 ==========
    { year: "2025", session: "November", subject: "Agricultural Management Practices", paperName: "Paper 1 (English)", paperFile: "2025/november/agricultural management practices/Agricultural_Management_Practices_Nov_2025_Eng.pdf", memoFile: "2025/november/agricultural management practices/Agricultural_Management_Practices_Nov_2025_Memo_Eng.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Agricultural Management Practices", paperName: "Paper 1 (Afrikaans)", paperFile: "2025/november/agricultural management practices/Agricultural_Management_Practices_Nov_2025_Afr.pdf", memoFile: "2025/november/agricultural management practices/Agricultural_Management_Practices_Nov_2025_Memo_Afr.pdf", hasMemo: true },

// ========== BUSINESS STUDIES 2025 ==========
    { year: "2025", session: "November", subject: "Business Studies", paperName: "Paper 1 (English)", paperFile: "2025/november/Business Studies/Business_Studies_P1_Nov_2025_Eng.pdf", memoFile: "2025/november/Business Studies/Business_Studies_P1_Nov_2025_Memo_Eng.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Business Studies", paperName: "Paper 1 (Afrikaans)", paperFile: "2025/november/Business Studies/Business_Studies_P1_Nov_2025_Afr.pdf", memoFile: "2025/november/Business Studies/Business_Studies_P1_Nov_2025_Memo_Afr.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Business Studies", paperName: "Paper 2 (English)", paperFile: "2025/november/Business Studies/Business_Studies_P2_Nov_2025_Eng.pdf", memoFile: "2025/november/Business Studies/Business_Studies_P2_Nov_2025_Memo_Eng.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Business Studies", paperName: "Paper 2 (Afrikaans)", paperFile: "2025/november/Business Studies/Business_Studies_P2_Nov_2025_Afr.pdf", memoFile: "2025/november/Business Studies/Business_Studies_P2_Nov_2025_Memo_Afr.pdf", hasMemo: true },

    // ========== CIVIL TECHNOLOGY 2025 ==========
    // Civil Services
    { year: "2025", session: "November", subject: "Civil Technology - Civil Services", paperName: "Paper (English)", paperFile: "2025/november/Civil Technology/Civil Technology Nov 2025 (Civil Services) Eng.pdf", memoFile: "2025/november/Civil Technology/Civil Technology Final Nov 2025 (Civil Services) Memo Eng.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Civil Technology - Civil Services", paperName: "Paper (Afrikaans)", paperFile: "2025/november/Civil Technology/Civil Technology Nov 2025 (Civil Services) Afr.pdf", memoFile: "2025/november/Civil Technology/Civil Technology Final Nov 2025 (Civil Services) Memo Afr.pdf", hasMemo: true },

    // Woodworking
    { year: "2025", session: "November", subject: "Civil Technology - Woodworking", paperName: "Paper (English)", paperFile: "2025/november/Civil Technology/Civil Technology Nov 2025 (Woodworking) Eng.pdf", memoFile: "2025/november/Civil Technology/Civil Technology Nov 2025 Woodworking Memo Eng.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Civil Technology - Woodworking", paperName: "Paper (Afrikaans)", paperFile: "2025/november/Civil Technology/Civil Technology Nov 2025 (Woodworking) Afr.pdf", memoFile: "2025/november/Civil Technology/Civil Technology Nov 2025 (Woodworking) Memo Afr.pdf", hasMemo: true },

    // Construction
    { year: "2025", session: "November", subject: "Civil Technology - Construction", paperName: "Paper (English)", paperFile: "2025/november/Civil Technology/Civil Technology Nov 2025 (Construction) Eng.pdf", memoFile: "2025/november/Civil Technology/Civil Technology Nov 2025 (Construction) Memo Eng.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Civil Technology - Construction", paperName: "Paper (Afrikaans)", paperFile: "2025/november/Civil Technology/Civil Technology Nov 2025 (Construction) Afr.pdf", memoFile: "2025/november/Civil Technology/Civil Technology Nov 2025 (Construction) Memo Afr.pdf", hasMemo: true },

// ===========COMPUTER APPLICATION TECHNOLOGY==============//
    { year: "2025", session: "November", subject: "Computer Applications Technology", paperName: "Paper 1 (English)", paperFile: "2025/november/Computer Application Technology/ComputerApplicationsTechnologyP1Nov2025Eng.pdf", memoFile: null, hasMemo: false },
    { year: "2025", session: "November", subject: "Computer Applications Technology", paperName: "Paper 2 (English)", paperFile: "2025/november/Computer Application Technology/ComputerApplicationsTechnologyP2Nov2025Eng.pdf", memoFile: "2025/november/Computer Application Technology/ComputerApplicationsTechnologyP2Nov2025MemoEng.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Computer Applications Technology", paperName: "Paper 1 (Afrikaans)", paperFile: "2025/november/Computer Application Technology/ComputerApplicationsTechnologyP1Nov2025Afr.pdf", memoFile: "2025/november/Computer Application Technology/ComputerApplicationsTechnologyP1Nov2025MGAfr.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Computer Applications Technology", paperName: "Paper 2 (Afrikaans)", paperFile: "2025/november/Computer Application Technology/ComputerApplicationsTechnologyP2Nov2025Afr.pdf", memoFile: "2025/november/Computer Application Technology/ComputerApplicationsTechnologyP2Nov2025MemoAfr.pdf", hasMemo: true },

// ========== CONSUMER STUDIES 2025 ==========
    { year: "2025", session: "November", subject: "Consumer Studies", paperName: "Paper (English)", paperFile: "2025/november/Consumer Studies/ConsumerStudiesNov2025Eng.pdf", memoFile: "2025/november/Consumer Studies/ConsumerStudiesNov2025MGEng.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Consumer Studies", paperName: "Paper (Afrikaans)", paperFile: "2025/november/Consumer Studies/Consumer2.StudiesNov2025MGAfr(1).pdf", memoFile: "2025/november/Consumer Studies/ConsumerStudiesNov2025MGAfr.pdf", hasMemo: true },

// ========== DANCE STUDIES 2025 ==========
    { year: "2025", session: "November", subject: "Dance Studies", paperName: "Paper (English)", paperFile: "2025/november/Dance Studies/DanceStudiesNov2025Eng.pdf", memoFile: "2025/november/Dance Studies/DanceStudiesNov2025MGEng.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Dance Studies", paperName: "Paper (Afrikaans)", paperFile: "2025/november/Dance Studies/DanceStudiesNov2025Afr.pdf", memoFile: "2025/november/Dance Studies/DanceStudiesNov2025MGAfr.pdf", hasMemo: true },

// ========== DESIGN 2025 ==========
    { year: "2025", session: "November", subject: "Design", paperName: "Paper 1 (English)", paperFile: "2025/november/Design/DesignP1Nov2025Eng.pdf", memoFile: "2025/november/Design/DesignP1Nov2025MGEng.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Design", paperName: "Paper 1 (Afrikaans)", paperFile: "2025/november/Design/DesignP1Nov2025Afr.pdf", memoFile: "2025/november/Design/DesignP1Nov2025MGAfr.pdf", hasMemo: true },

// ========== DRAMATIC ARTS 2025 ==========
    { year: "2025", session: "November", subject: "Dramatic Arts", paperName: "Paper (English)", paperFile: null, memoFile: "2025/november/Dramatic Arts/DramaticArtsNov2025MGEng.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Dramatic Arts", paperName: "Paper (Afrikaans)", paperFile: null, memoFile: "2025/november/Dramatic Arts/DramaticArtsNov2025MGAfr.pdf", hasMemo: true },

    // ========== ECONOMICS 2025 ==========
    { year: "2025", session: "November", subject: "Economics", paperName: "Paper 1 (English)", paperFile: "2025/november/Economics/EconomicsP1Nov2025Eng.pdf", memoFile: "2025/november/Economics/EconomicsP1Nov2025MGEng.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Economics", paperName: "Paper 1 (Afrikaans)", paperFile: "2025/november/Economics/EconomicsP1Nov2025Afr.pdf", memoFile: "2025/november/Economics/EconomicsP1Nov2025MGAfr.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Economics", paperName: "Paper 2 (English)", paperFile: "2025/november/Economics/EconomicsP2Nov2025Eng.pdf", memoFile: "2025/november/Economics/EconomicsP2Nov2025MGEng.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Economics", paperName: "Paper 2 (Afrikaans)", paperFile: "2025/november/Economics/EconomicsP2Nov2025Afr.pdf", memoFile: "2025/november/Economics/EconomicsP2Nov2025MGAfr.pdf", hasMemo: true },

// ========== ELECTRICAL TECHNOLOGY 2025 ==========
// Digital Electronics
    { year: "2025", session: "November", subject: "Electrical Technology - Digital Electronics", paperName: "Paper (English)", paperFile: "2025/november/Electrical Technology/ElectricalTechnologyNov2025(Digital)Eng.pdf", memoFile: "2025/november/Electrical Technology/ElectricalTechnologyNov2025(Digital)MGEng.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Electrical Technology - Digital Electronics", paperName: "Paper (Afrikaans)", paperFile: "2025/november/Electrical Technology/ElectricalTechnologyNov2025(Digital)Afr.pdf", memoFile: "2025/november/Electrical Technology/ElectricalTechnologyNov2025(Digital)MGAfr.pdf", hasMemo: true },

// Electronics
    { year: "2025", session: "November", subject: "Electrical Technology - Electronics", paperName: "Paper (English)", paperFile: "2025/november/Electrical Technology/ElectricalTechnologyNov2025(Electronics)Eng.pdf", memoFile: "2025/november/Electrical Technology/ElectricalTechnologyNov2025(Electronics)MGEng.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Electrical Technology - Electronics", paperName: "Paper (Afrikaans)", paperFile: "2025/november/Electrical Technology/ElectricalTechnologyNov2025(Electronics)Afr.pdf", memoFile: "2025/november/Electrical Technology/ElectricalTechnologyNov2025(Electronics)MGAfr.pdf", hasMemo: true },

// Power Systems
    { year: "2025", session: "November", subject: "Electrical Technology - Power Systems", paperName: "Paper (English)", paperFile: "2025/november/Electrical Technology/ElectricalTechnologyNov2025(Power Systems)Eng.pdf", memoFile: "2025/november/Electrical Technology/ElectricalTechnologyNov2025(Power Systems)MGEng.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Electrical Technology - Power Systems", paperName: "Paper (Afrikaans)", paperFile: "2025/november/Electrical Technology/ElectricalTechnologyNov2025(Power Systems)Afr.pdf", memoFile: "2025/november/Electrical Technology/ElectricalTechnologyNov2025(Power Systems)MGAfr.pdf", hasMemo: true },

// ========== ENGINEERING GRAPHICS AND DESIGN 2025 ==========
    { year: "2025", session: "November", subject: "Engineering Graphics and Design", paperName: "Paper 1 (English)", paperFile: "2025/november/Engineering Graphic and Design/EngineeringGraphics&DesignP1Nov2025Eng.pdf", memoFile: "2025/november/Engineering Graphic and Design/Engineering Graphics & Design P1 Nov 2025 MG Eng.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Engineering Graphics and Design", paperName: "Paper 1 (Afrikaans)", paperFile: "2025/november/Engineering Graphic and Design/EngineeringGraphics&DesignP1Nov2025Afr.pdf", memoFile: "2025/november/Engineering Graphic and Design/EngineeringGraphics&DesignP1Nov2025MGAfr.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Engineering Graphics and Design", paperName: "Paper 1 Question 4 A3 (Afrikaans)", paperFile: "2025/november/Engineering Graphic and Design/Engineering Graphics & Design P1 Nov 2025 Q4  A3 MG Afr.pdf", memoFile: null, hasMemo: false },
    { year: "2025", session: "November", subject: "Engineering Graphics and Design", paperName: "Paper 1 Question 4 A3 (English)", paperFile: "2025/november/Engineering Graphic and Design/Engineering Graphics & Design P1 Nov 2025 Q4  A3 MG Eng.pdf", memoFile: null, hasMemo: false },
    { year: "2025", session: "November", subject: "Engineering Graphics and Design", paperName: "Paper 2 (English)", paperFile: "2025/november/Engineering Graphic and Design/Engineering Graphics & Design P2 Nov 2025 Eng.pdf", memoFile: "2025/november/Engineering Graphic and Design/Engineering Graphics & Design P2 Nov 2025 MG Eng.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Engineering Graphics and Design", paperName: "Paper 2 (Afrikaans)", paperFile: "2025/november/Engineering Graphic and Design/Engineering Graphics & Design P2 Nov 2025 Afr.pdf", memoFile: "2025/november/Engineering Graphic and Design/Engineering Graphics & Design P2 Nov 2025 MG Afr.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Engineering Graphics and Design", paperName: "Paper 2 Question 4 A3 (Afrikaans)", paperFile: "2025/november/Engineering Graphic and Design/Engineering Graphics & Design P2 Nov 2025 Q4 A3 MG Afr.pdf", memoFile: null, hasMemo: false },
    { year: "2025", session: "November", subject: "Engineering Graphics and Design", paperName: "Paper 2 Question 4 A3 (English)", paperFile: "2025/november/Engineering Graphic and Design/Engineering Graphics & Design P2 Nov 2025 Q4 A3 MG Eng.pdf", memoFile: null, hasMemo: false },

// ========== GEOGRAPHY 2025 ==========
    { year: "2025", session: "November", subject: "Geography", paperName: "Paper 1 (English)", paperFile: "2025/november/Geography/GeographyP1Nov2025Eng.pdf", memoFile: "2025/november/Geography/GeographyP1Nov2025MGEng.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Geography", paperName: "Paper 1 (Afrikaans)", paperFile: "2025/november/Geography/GeographyP1Nov2025Afr.pdf", memoFile: "2025/november/Geography/GeographyP1Nov2025MGAfr.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Geography", paperName: "Paper 2 (English)", paperFile: "2025/november/Geography/GeographyP2Nov2025Eng.pdf", memoFile: "2025/november/Geography/GeographyP2Nov2025MGEng.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Geography", paperName: "Paper 2 (Afrikaans)", paperFile: "2025/november/Geography/GeographyP2Nov2025Afr.pdf", memoFile: "2025/november/Geography/GeographyP2Nov2025MGAfr.pdf", hasMemo: true },

// ========== HISTORY 2025 ==========
    { year: "2025", session: "November", subject: "History", paperName: "Paper 1 (English)", paperFile: "2025/november/History/HistoryP1Nov2025Eng.pdf", memoFile: "2025/november/History/HistoryP1Nov2025MGEng.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "History", paperName: "Paper 1 (Afrikaans)", paperFile: "2025/november/History/HistoryP1Nov2025Afr.pdf", memoFile: "2025/november/History/HistoryP1Nov2025MGAfr.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "History", paperName: "Paper 1 Addendum (English)", paperFile: "2025/november/History/HistoryP1Nov2025AddendumEng.pdf", memoFile: null, hasMemo: false },
    { year: "2025", session: "November", subject: "History", paperName: "Paper 1 Addendum (Afrikaans)", paperFile: "2025/november/History/HistoryP1Nov2025AddendumAfr.pdf", memoFile: null, hasMemo: false },
    { year: "2025", session: "November", subject: "History", paperName: "Paper 2 (English)", paperFile: "2025/november/History/HistoryP2Nov2025Eng.pdf", memoFile: "2025/november/History/HistoryP2Nov2025MGEng.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "History", paperName: "Paper 2 (Afrikaans)", paperFile: "2025/november/History/HistoryP2Nov2025Afr.pdf", memoFile: "2025/november/History/HistoryP2Nov2025MGAfr.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "History", paperName: "Paper 2 Addendum (English)", paperFile: "2025/november/History/HistoryP2Nov2025AddendumEng.pdf", memoFile: null, hasMemo: false },
    { year: "2025", session: "November", subject: "History", paperName: "Paper 2 Addendum (Afrikaans)", paperFile: "2025/november/History/HistoryP2Nov2025AddendumAfr.pdf", memoFile: null, hasMemo: false },

    // ========== HOSPITALITY STUDIES 2025 ==========
    { year: "2025", session: "November", subject: "Hospitality Studies", paperName: "Paper (English)", paperFile: "2025/november/Hospitality Studies/Hospitality Studies Nov 2025 Eng.pdf", memoFile: "2025/november/Hospitality Studies/Hospitality Studies Nov 2025 MG Eng.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Hospitality Studies", paperName: "Paper (Afrikaans)", paperFile: "2025/november/Hospitality Studies/Hospitality Studies Nov 2025 Afr.pdf", memoFile: "2025/november/Hospitality Studies/Hospitality Studies Nov 2025 MG Afr.pdf", hasMemo: true },

    // ========== INFORMATION TECHNOLOGY 2025 ==========
    { year: "2025", session: "November", subject: "Information Technology", paperName: "Paper 1 (English)", paperFile: "2025/november/Information Technology/Information Technology P1 Nov 2025 Eng.pdf", memoFile: "2025/november/Information Technology/Information Technology P1 Nov 2025 MG Eng.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Information Technology", paperName: "Paper 1 (Afrikaans)", paperFile: "2025/november/Information Technology/Information Technology P1 Nov 2025 Afr.pdf", memoFile: "2025/november/Information Technology/Information Technology P1 Nov 2025 MG Afr.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Information Technology", paperName: "Paper 2 (English)", paperFile: "2025/november/Information Technology/Information Technology P2 Nov 2025 Eng.pdf", memoFile: "2025/november/Information Technology/Information Technology P2 Nov 2025 MG Eng.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Information Technology", paperName: "Paper 2 (Afrikaans)", paperFile: "2025/november/Information Technology/Information Technology P2 Nov 2025 Afr.pdf", memoFile: "2025/november/Information Technology/Information Technology P2 Nov 2025 MG Afr.pdf", hasMemo: true },

    // ========== LIFE ORIENTATION 2025 ==========
    { year: "2025", session: "September", subject: "Life Orientation", paperName: "Common Assessment Task (English)", paperFile: "2025/september/Life Orientation/Life Orientation September 2025 Eng.pdf", memoFile: "2025/september/Life Orientation/Life Orientation September 2025 MG Eng.pdf", hasMemo: true },
    { year: "2025", session: "September", subject: "Life Orientation", paperName: "Common Assessment Task (Afrikaans)", paperFile: "2025/september/Life Orientation/Life Orientation September 2025 Afr.pdf", memoFile: "2025/september/Life Orientation/Life Orientation September 2025 MG Afr.pdf", hasMemo: true },

// ========== LIFE SCIENCES 2025 ==========
    { year: "2025", session: "November", subject: "Life Sciences", paperName: "Paper 1 (English)", paperFile: "2025/november/Life Sciences/Life Sciences P1 Nov 2025 Eng.pdf", memoFile: "2025/november/Life Sciences/Life Sciences P1 Nov 2025 MG Eng.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Life Sciences", paperName: "Paper 1 (Afrikaans)", paperFile: "2025/november/Life Sciences/Life Sciences P1 Nov 2025 Afr.pdf", memoFile: "2025/november/Life Sciences/Life Sciences P1 Nov 2025 MG Afr.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Life Sciences", paperName: "Paper 2 (English)", paperFile: "2025/november/Life Sciences/Life Sciences P2 Nov 2025 Eng.pdf", memoFile: "2025/november/Life Sciences/Life Sciences P2 Nov 2025 MG Eng.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Life Sciences", paperName: "Paper 2 (Afrikaans)", paperFile: "2025/november/Life Sciences/Life Sciences P2 Nov 2025 Afr.pdf", memoFile: "2025/november/Life Sciences/Life Sciences P2 Nov 2025 MG Afr.pdf", hasMemo: true },

// ========== MARINE SCIENCES 2025 ==========
    { year: "2025", session: "November", subject: "Marine Sciences", paperName: "Paper 1 (English)", paperFile: "2025/november/Marine Sciences/Marine Sciences P1 Nov 2025 Eng.pdf", memoFile: "2025/november/Marine Sciences/Marine Sciences P1 Nov 2025 MG Eng.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Marine Sciences", paperName: "Paper 1 (Afrikaans)", paperFile: "2025/november/Marine Sciences/Marine Sciences P1 Nov 2025 Afr.pdf", memoFile: null, hasMemo: false },
    { year: "2025", session: "November", subject: "Marine Sciences", paperName: "Paper 2 (English)", paperFile: "2025/november/Marine Sciences/Marine Sciences P2 Nov 2025 Eng.pdf", memoFile: "2025/november/Marine Sciences/Marine Sciences P2 Nov 2025 MG Eng.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Marine Sciences", paperName: "Paper 2 (Afrikaans)", paperFile: "2025/november/Marine Sciences/Marine Sciences P2 Nov 2025 Afr.pdf", memoFile: null, hasMemo: false },

// ========== MATHEMATICAL LITERACY 2025 ==========
    { year: "2025", session: "November", subject: "Mathematical Literacy", paperName: "Paper 1 (English)", paperFile: "2025/november/Mathematical Literacy/Mathematical Literacy P1 Nov 2025 Eng.pdf", memoFile: "2025/november/Mathematical Literacy/Mathematical Literacy P1 Nov 2025 MG Afr & Eng.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Mathematical Literacy", paperName: "Paper 1 (Afrikaans)", paperFile: "2025/november/Mathematical Literacy/Mathematical Literacy P1 Nov 2025 Afr.pdf", memoFile: "2025/november/Mathematical Literacy/Mathematical Literacy P1 Nov 2025 MG Afr & Eng.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Mathematical Literacy", paperName: "Answer Book P1 (English)", paperFile: "2025/november/Mathematical Literacy/Mathematical Literacy P1 Nov 2025 Answer Book Eng.pdf", memoFile: null, hasMemo: false },
    { year: "2025", session: "November", subject: "Mathematical Literacy", paperName: "Answer Book P1 (Afrikaans)", paperFile: "2025/november/Mathematical Literacy/Mathematical Literacy P1 Nov 2025 Answer Book Afr.pdf", memoFile: null, hasMemo: false },
    { year: "2025", session: "November", subject: "Mathematical Literacy", paperName: "Paper 2 (English)", paperFile: "2025/november/Mathematical Literacy/Mathematical Literacy P2 Nov 2025 Eng.pdf", memoFile: "2025/november/Mathematical Literacy/Mathematical Literacy P2 Nov 2025 MG Afr & Eng.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Mathematical Literacy", paperName: "Paper 2 (Afrikaans)", paperFile: "2025/november/Mathematical Literacy/Mathematical Literacy P2 Nov 2025 Afr.pdf", memoFile: "2025/november/Mathematical Literacy/Mathematical Literacy P2 Nov 2025 MG Afr & Eng.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Mathematical Literacy", paperName: "Answer Book P2 (English)", paperFile: "2025/november/Mathematical Literacy/Mathematical Literacy P2 Nov 2025 Answer Book Eng.pdf", memoFile: null, hasMemo: false },
    { year: "2025", session: "November", subject: "Mathematical Literacy", paperName: "Answer Book P2 (Afrikaans)", paperFile: "2025/november/Mathematical Literacy/Mathematical Literacy P2 Nov 2025 Answer Book Afr.pdf", memoFile: null, hasMemo: false },

    // ========== MATHEMATICS 2025 ==========
    { year: "2025", session: "November", subject: "Mathematics", paperName: "Paper 1", paperFile: "2025/november/Mathematics/Mathematics P1 Nov 2025 Eng.pdf", memoFile: "2025/november/Mathematics/Mathematics P1 Nov 2025 MG Afr & Eng.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Mathematics", paperName: "Paper 2", paperFile: "2025/november/Mathematics/Mathematics P2 Nov 2025 Eng.pdf", memoFile: "2025/november/Mathematics/Mathematics P2 Nov 2025 MG Afr & Eng.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Mathematics", paperName: "Paper 1 (Afrikaans)", paperFile: "2025/november/Mathematics/Mathematics P1 Nov 2025 Afr.pdf", memoFile: null, hasMemo: false },
    { year: "2025", session: "November", subject: "Mathematics", paperName: "Answer Book P2", paperFile: "2025/november/Mathematics/Mathematics P2 Nov 2025 Answer Book Afr & Eng.pdf", memoFile: null, hasMemo: false },

    // ========== MECHANICAL TECHNOLOGY 2025 ==========
    // Automotive
    { year: "2025", session: "November", subject: "Mechanical Technology - Automotive", paperName: "Paper (English)", paperFile: "2025/november/Mechanical Technology/Mechanical Technology Nov 2025 (Automotive) Eng.pdf", memoFile: "2025/november/Mechanical Technology/Mechanical Technology Nov 2025 (Automotive) MG Eng.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Mechanical Technology - Automotive", paperName: "Paper (Afrikaans)", paperFile: "2025/november/Mechanical Technology/Mechanical Technology Nov 2025 (Automotive) Afr.pdf", memoFile: "2025/november/Mechanical Technology/Mechanical Technology Nov 2025 (Automotive) MG Afr.pdf", hasMemo: true },

    // Fitting and Machining
    { year: "2025", session: "November", subject: "Mechanical Technology - Fitting and Machining", paperName: "Paper (English)", paperFile: "2025/november/Mechanical Technology/Mechanical Technology Nov 2025 (Fitting and Machining) Eng.pdf", memoFile: "2025/november/Mechanical Technology/Mechanical Technology Nov 2025 (Fitting and Machining) MG Eng.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Mechanical Technology - Fitting and Machining", paperName: "Paper (Afrikaans)", paperFile: "2025/november/Mechanical Technology/Mechanical Technology Nov 2025 (Fitting and Machining) Afr.pdf", memoFile: "2025/november/Mechanical Technology/Mechanical Technology Nov 2025 (Fitting and Machining) MG Afr.pdf", hasMemo: true },

    // Welding and Metal Work
    { year: "2025", session: "November", subject: "Mechanical Technology - Welding and Metal Work", paperName: "Paper (English)", paperFile: "2025/november/Mechanical Technology/Mechanical Technology Nov 2025 (Welding & Metal Work) Eng.pdf", memoFile: "2025/november/Mechanical Technology/Mechanical Technology Nov 2025 (Welding and Metal Work) MG Eng.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Mechanical Technology - Welding and Metal Work", paperName: "Paper (Afrikaans)", paperFile: "2025/november/Mechanical Technology/Mechanical Technology Nov 2025 (Welding & Metal Work) Afr.pdf", memoFile: "2025/november/Mechanical Technology/Mechanical Technology Nov 2025 (Welding & Metal Work) MG Afr.pdf", hasMemo: true },

// ========== Music 2025 ==========
    { year: "2025", session: "November", subject: "Music", paperName: "Paper 1 (English)", paperFile: "2025/november/Music/Music P1 Nov 2025 Eng.pdf", memoFile: "2025/november/Music/Music P1 Nov 2025 MG Eng.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Music", paperName: "Paper 1 (Afrikaans)", paperFile: "2025/november/Music/Music P1 Nov 2025 Afr.pdf", memoFile: "2025/november/Music/Music P1 Nov 2025 MG Afr.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Music", paperName: "Paper 2 (English)", paperFile: "2025/november/Music/Music P2 Nov 2025 Eng.pdf", memoFile: "2025/november/Music/Music P2 Nov 2025 MG Eng.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Music", paperName: "Paper 2 (Afrikaans)", paperFile: "2025/november/Music/Music P2 Nov 2025 Afr.pdf", memoFile: "2025/november/Music/Music P2 Nov 2025 MG Afr.pdf", hasMemo: true },

// ========== PHYSICAL SCIENCES 2025 ==========
    { year: "2025", session: "November", subject: "Physical Sciences", paperName: "Paper 1 (Physics) English", paperFile: "2025/november/Physical Sciences/Physical Sciences P1 Nov 2025 Eng.pdf", memoFile: "2025/november/Physical Sciences/Physical Sciences P1 Nov 2025 MG Afr & Eng.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Physical Sciences", paperName: "Paper 1 (Physics) Afrikaans", paperFile: "2025/november/Physical Sciences/Physical Sciences P1 Nov 2025 Afr.pdf", memoFile: "2025/november/Physical Sciences/Physical Sciences P1 Nov 2025 MG Afr & Eng.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Physical Sciences", paperName: "Paper 2 (Chemistry) English", paperFile: "2025/november/Physical Sciences/Physical Sciences P2 Nov 2025 Eng.pdf", memoFile: "2025/november/Physical Sciences/Physical Sciences P2 Nov 2025 MG Afr & Eng.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Physical Sciences", paperName: "Paper 2 (Chemistry) Afrikaans", paperFile: "2025/november/Physical Sciences/Physical Sciences P2 Nov 2025 Afr.pdf", memoFile: "2025/november/Physical Sciences/Physical Sciences P2 Nov 2025 MG Afr & Eng.pdf", hasMemo: true },

    // ========== RELIGION STUDIES 2025 ==========
    { year: "2025", session: "November", subject: "Religion Studies", paperName: "Paper 1 (English)", paperFile: "2025/november/Religion Studies/Religion Studies P1 Nov 2025 Eng.pdf", memoFile: "2025/november/Religion Studies/Religion Studies P1 Nov 2025 MG Eng.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Religion Studies", paperName: "Paper 1 (Afrikaans)", paperFile: "2025/november/Religion Studies/Religion Studies P1 Nov 2025 Afr.pdf", memoFile: "2025/november/Religion Studies/Religion Studies P1 Nov 2025 MG Afr.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Religion Studies", paperName: "Paper 2 (English)", paperFile: "2025/november/Religion Studies/Religion Studies P2 Nov 2025 Eng.pdf", memoFile: "2025/november/Religion Studies/Religion Studies P2 Nov 2025 MG Eng.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Religion Studies", paperName: "Paper 2 (Afrikaans)", paperFile: "2025/november/Religion Studies/Religion Studies P2 Nov 2025 Afr.pdf", memoFile: "2025/november/Religion Studies/Religion Studies P2 Nov 2025 MG Afr.pdf", hasMemo: true },

    // ========== TECHNICAL MATHEMATICS 2025 ==========
    { year: "2025", session: "November", subject: "Technical Mathematics", paperName: "Paper 1 (English)", paperFile: "2025/november/Technical Mathematics/Technical Mathematics P1 Nov 2025 Eng.pdf", memoFile: "2025/november/Technical Mathematics/Technical Mathematics P1 Nov 2025 MG Afr & Eng.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Technical Mathematics", paperName: "Paper 1 (Afrikaans)", paperFile: "2025/november/Technical Mathematics/Technical Mathematics P1 Nov 2025 Afr.pdf", memoFile: "2025/november/Technical Mathematics/Technical Mathematics P1 Nov 2025 MG Afr & Eng.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Technical Mathematics", paperName: "Answer Book P1", paperFile: "2025/november/Technical Mathematics/Technical Mathematics P1 Nov 2025 Answer Book Eng & Afr.pdf", memoFile: null, hasMemo: false },
    { year: "2025", session: "November", subject: "Technical Mathematics", paperName: "Paper 2 (English)", paperFile: "2025/november/Technical Mathematics/Technical Mathematics P2 Nov 2025 Eng.pdf", memoFile: "2025/november/Technical Mathematics/Technical Mathematics P2 Nov 2025 MG Afr & Eng.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Technical Mathematics", paperName: "Paper 2 (Afrikaans)", paperFile: "2025/november/Technical Mathematics/Technical Mathematics P2 Nov 2025 Afr.pdf", memoFile: "2025/november/Technical Mathematics/Technical Mathematics P2 Nov 2025 MG Afr & Eng.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Technical Mathematics", paperName: "Answer Book P2", paperFile: "2025/november/Technical Mathematics/Technical Mathematics P2 Nov 2025 Answer Book Eng & Afr.pdf", memoFile: null, hasMemo: false },

    // ========== TECHNICAL SCIENCES 2025 ==========
    { year: "2025", session: "November", subject: "Technical Sciences", paperName: "Paper 1 (English)", paperFile: "2025/november/Technical Sciences/Technical Sciences P1 Nov 2025 Eng.pdf", memoFile: "2025/november/Technical Sciences/Technical Sciences P1 Nov 2025 MG Afr & Eng.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Technical Sciences", paperName: "Paper 1 (Afrikaans)", paperFile: "2025/november/Technical Sciences/Technical Sciences P1 Nov 2025 Afr.pdf", memoFile: "2025/november/Technical Sciences/Technical Sciences P1 Nov 2025 MG Afr & Eng.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Technical Sciences", paperName: "Paper 2 (English)", paperFile: "2025/november/Technical Sciences/Technical Sciences P2 Nov 2025 Eng.pdf", memoFile: "2025/november/Technical Sciences/Technical Sciences P2 Nov 2025 MG Afr & Eng.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Technical Sciences", paperName: "Paper 2 (Afrikaans)", paperFile: "2025/november/Technical Sciences/Technical Sciences P2 Nov 2025 Afr.pdf", memoFile: "2025/november/Technical Sciences/Technical Sciences P2 Nov 2025 MG Afr & Eng.pdf", hasMemo: true },

    // ========== TOURISM 2025 ==========
    { year: "2025", session: "November", subject: "Tourism", paperName: "Paper (English)", paperFile: "2025/november/Tourism/Tourism Nov 2025 Eng.pdf", memoFile: "2025/november/Tourism/Tourism Nov 2025 MG Eng.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Tourism", paperName: "Paper (Afrikaans)", paperFile: "2025/november/Tourism/Tourism Nov 2025 Afr.pdf", memoFile: "2025/november/Tourism/Tourism Nov 2025 MG Afr.pdf", hasMemo: true },

    // ========== VISUAL ARTS 2025 ==========
    { year: "2025", session: "November", subject: "Visual Arts", paperName: "Paper 1 (English)", paperFile: "2025/november/Visual Arts/Visual Arts P1 Nov 2025 Eng.pdf", memoFile: "2025/november/Visual Arts/Visual Arts P1 Nov 2025 MG Eng.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Visual Arts", paperName: "Paper 1 (Afrikaans)", paperFile: "2025/november/Visual Arts/Visual Arts P1 Nov 2025 Afr.pdf", memoFile: "2025/november/Visual Arts/Visual Arts P1 Nov 2025 MG Afr.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Visual Arts", paperName: "Paper 2 (English)", paperFile: "2025/november/Visual Arts/Visual Arts P2 Nov 2025 Eng.pdf", memoFile: null, hasMemo: false },
    { year: "2025", session: "November", subject: "Visual Arts", paperName: "Paper 2 (Afrikaans)", paperFile: "2025/november/Visual Arts/Visual Arts P2 Nov 2025 Afr.pdf", memoFile: null, hasMemo: false },



    //===============LANGUAGES================//

// ========== AFRIKAANS EERSTE ADDISIONELE TAAL (FAL) 2025 ==========
    { year: "2025", session: "November", subject: "Afrikaans Eerste Addisionele Taal", paperName: "Vraestel 1", paperFile: "2025/november/Afrikaans/Afrikaans FAL P1 Nov 2025.pdf", memoFile: "2025/november/Afrikaans/Afrikaans FAL P1 Nov 2025 MG.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Afrikaans Eerste Addisionele Taal", paperName: "Vraestel 2", paperFile: "2025/november/Afrikaans/Afrikaans FAL P2 Nov 2025.pdf", memoFile: "2025/november/Afrikaans/Afrikaans FAL P2 Nov 2025 MG.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Afrikaans Eerste Addisionele Taal", paperName: "Vraestel 3", paperFile: "2025/november/Afrikaans/Afrikaans FAL P3 Nov 2025.pdf", memoFile: "2025/november/Afrikaans/Afrikaans FAL P3 Nov 2025 MG.pdf", hasMemo: true },

// ========== AFRIKAANS HUISTAAL (HL) 2025 ==========
    { year: "2025", session: "November", subject: "Afrikaans Huistaal", paperName: "Vraestel 1", paperFile: "2025/november/Afrikaans/Afrikaans HL P1 Nov 2025.pdf", memoFile: "2025/november/Afrikaans/Afrikaans HL P1 Nov 2025 MG.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Afrikaans Huistaal", paperName: "Vraestel 2", paperFile: "2025/november/Afrikaans/Afrikaans HL P2 Nov 2025.pdf", memoFile: "2025/november/Afrikaans/Afrikaans HL P2 Nov 2025 MG.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Afrikaans Huistaal", paperName: "Vraestel 3", paperFile: "2025/november/Afrikaans/Afrikaans HL P3 Nov 2025.pdf", memoFile: "2025/november/Afrikaans/Afrikaans HL P3 Nov 2025 MG.pdf", hasMemo: true },

// ========== AFRIKAANS TWEEDE ADDISIONELE TAAL (SAL) 2025 ==========
    { year: "2025", session: "November", subject: "Afrikaans Tweede Addisionele Taal", paperName: "Vraestel 1", paperFile: "2025/november/Afrikaans/Afrikaans SAL P1 Nov 2025.pdf", memoFile: "2025/november/Afrikaans/Afrikaans SAL P1 Nov 2025 MG.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Afrikaans Tweede Addisionele Taal", paperName: "Vraestel 2", paperFile: "2025/november/Afrikaans/Afrikaans SAL P2 Nov 2025.pdf", memoFile: "2025/november/Afrikaans/Afrikaans SAL P2 Nov 2025 MG.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Afrikaans Tweede Addisionele Taal", paperName: "Vraestel 3", paperFile: "2025/november/Afrikaans/Afrikaans SAL P3 Nov 2025.pdf", memoFile: "2025/november/Afrikaans/Afrikaans SAL P3 Nov 2025 MG.pdf", hasMemo: true },

// ========== ENGLISH FIRST ADDITIONAL LANGUAGE (FAL) 2025 ==========
{ year: "2025", session: "May/June", subject: "English First Additional Language", paperName: "Paper 2", paperFile: "2025/november/English/English FAL P2 May-June 2025.pdf", memoFile: null, hasMemo: false },
{ year: "2025", session: "May/June", subject: "English First Additional Language", paperName: "Paper 3", paperFile: "2025/november/English/English FAL P2 May-June 2025.pdf", memoFile: null, hasMemo: false },
{ year: "2025", session: "November", subject: "English First Additional Language", paperName: "Paper 1", paperFile: null, memoFile: "2025/november/English/English FAL P1 Nov 2025 MG.pdf", hasMemo: true },
{ year: "2025", session: "November", subject: "English First Additional Language", paperName: "Paper 2", paperFile: null, memoFile: "2025/november/English/English FAL P2 Nov 2025 MG.pdf", hasMemo: true },
{ year: "2025", session: "November", subject: "English First Additional Language", paperName: "Paper 3", paperFile: null, memoFile: "2025/november/English/English FAL P3 Nov 2025 MG.pdf", hasMemo: true },

// ========== ENGLISH HOME LANGUAGE (HL) 2025 ==========
{ year: "2025", session: "November", subject: "English Home Language", paperName: "Paper 1", paperFile: "2025/november/English/English HL P1 Nov 2025.pdf", memoFile: "2025/november/English/English HL P1 Nov 2025 MG.pdf", hasMemo: true },
{ year: "2025", session: "November", subject: "English Home Language", paperName: "Paper 2", paperFile: "2025/november/English/English HL P2 Nov 2025.pdf", memoFile: "2025/november/English/English HL P2 Nov 2025 MG.pdf", hasMemo: true },
{ year: "2025", session: "November", subject: "English Home Language", paperName: "Paper 3", paperFile: "2025/november/English/English HL P3 Nov 2025.pdf", memoFile: "2025/november/English/English HL P3 Nov 2025 MG.pdf", hasMemo: true },

// ========== ENGLISH SECOND ADDITIONAL LANGUAGE (SAL) 2025 ==========
{ year: "2025", session: "November", subject: "English Second Additional Language", paperName: "Paper 1", paperFile: "2025/november/English/English SAL P1 Nov 2025.pdf", memoFile: "2025/november/English/English SAL P1 Nov 2025 MG.pdf", hasMemo: true },
{ year: "2025", session: "November", subject: "English Second Additional Language", paperName: "Paper 2", paperFile: "2025/november/English/English SAL P2 Nov 2025.pdf", memoFile: "2025/november/English/English SAL P2 Nov 2025 MG.pdf", hasMemo: true },
{ year: "2025", session: "November", subject: "English Second Additional Language", paperName: "Paper 3", paperFile: "2025/november/English/English SAL P3 Nov 2025.pdf", memoFile: "2025/november/English/English SAL P3 Nov 2025 MG.pdf", hasMemo: true },


// ========== ISINDEBELE 2025 ==========
{ year: "2025", session: "November", subject: "IsiNdebele", paperName: "FAL P1", paperFile: "2025/november/isiNdebele/IsiNdebele FAL P1 Nov 2025.pdf", memoFile: "2025/november/isiNdebele/IsiNdebele FAL P1 Nov 2025 MG.pdf", hasMemo: true },
{ year: "2025", session: "November", subject: "IsiNdebele", paperName: "FAL P2", paperFile: "2025/november/isiNdebele/IsiNdebele FAL P2 Nov 2025.pdf", memoFile: "2025/november/isiNdebele/IsiNdebele FAL P2 Nov 2025 MG.pdf", hasMemo: true },
{ year: "2025", session: "November", subject: "IsiNdebele", paperName: "FAL P3", paperFile: "2025/november/isiNdebele/IsiNdebele FAL P3 Nov 2025.pdf", memoFile: "2025/november/isiNdebele/IsiNdebele FAL P3 Nov 2025 MG.pdf", hasMemo: true },

{ year: "2025", session: "November", subject: "IsiNdebele", paperName: "HL P1", paperFile: "2025/november/isiNdebele/IsiNdebele HL P1 Nov 2025.pdf", memoFile: "2025/november/isiNdebele/IsiNdebele HL P1 Nov 2025 MG.pdf", hasMemo: true },
{ year: "2025", session: "November", subject: "IsiNdebele", paperName: "HL P2", paperFile: "2025/november/isiNdebele/IsiNdebele HL P2 Nov 2025.pdf", memoFile: "2025/november/isiNdebele/IsiNdebele HL P2 Nov 2025 MG.pdf", hasMemo: true },
{ year: "2025", session: "November", subject: "IsiNdebele", paperName: "HL P3", paperFile: "2025/november/isiNdebele/IsiNdebele HL P3 Nov 2025.pdf", memoFile: "2025/november/isiNdebele/IsiNdebele HL P3 Nov 2025 MG.pdf", hasMemo: true },

{ year: "2025", session: "November", subject: "IsiNdebele", paperName: "SAL P1", paperFile: "2025/november/isiNdebele/IsiNdebele SAL P1 Nov 2025.pdf", memoFile: "2025/november/isiNdebele/IsiNdebele SAL P1 Nov 2025 MG.pdf", hasMemo: true },
{ year: "2025", session: "November", subject: "IsiNdebele", paperName: "SAL P2", paperFile: "2025/november/isiNdebele/IsiNdebele SAL P2 Nov 2025.pdf", memoFile: "2025/november/isiNdebele/IsiNdebele SAL P2 Nov 2025 MG.pdf", hasMemo: true },
{ year: "2025", session: "November", subject: "IsiNdebele", paperName: "SAL P3", paperFile: "2025/november/isiNdebele/IsiNdebele SAL P3 Nov 2025.pdf", memoFile: "2025/november/isiNdebele/IsiNdebele SAL P3 Nov 2025 MG.pdf", hasMemo: true },

    // ========== ISIXHOSA 2025 ==========
    { year: "2025", session: "November", subject: "IsiXhosa", paperName: "IsiXhosa FAL P1 Nov 2025", paperFile: "2025/november/IsiXhosa/IsiXhosa FAL P1 Nov 2025.pdf", memoFile: "2025/november/IsiXhosa/IsiXhosa FAL P1 Nov 2025 MG.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "IsiXhosa", paperName: "IsiXhosa FAL P2 Nov 2025", paperFile: "2025/november/IsiXhosa/IsiXhosa FAL P2 Nov 2025.pdf", memoFile: "2025/november/IsiXhosa/IsiXhosa FAL P2 Nov 2025 MG.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "IsiXhosa", paperName: "IsiXhosa FAL P3 Nov 2025", paperFile: "2025/november/IsiXhosa/IsiXhosa FAL P3 Nov 2025.pdf", memoFile: "2025/november/IsiXhosa/IsiXhosa FAL P3 Nov 2025 MG.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "IsiXhosa", paperName: "IsiXhosa HL P1 Nov 2025", paperFile: "2025/november/IsiXhosa/IsiXhosa HL P1 Nov 2025.pdf", memoFile: "2025/november/IsiXhosa/IsiXhosa HL P1 Nov 2025 MG.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "IsiXhosa", paperName: "IsiXhosa HL P2 Nov 2025", paperFile: "2025/november/IsiXhosa/IsiXhosa HL P2 Nov 2025.pdf", memoFile: "2025/november/IsiXhosa/IsiXhosa HL P2 Nov 2025 MG.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "IsiXhosa", paperName: "IsiXhosa HL P3 Nov 2025", paperFile: "2025/november/IsiXhosa/IsiXhosa HL P3 Nov 2025.pdf", memoFile: "2025/november/IsiXhosa/IsiXhosa HL P3 Nov 2025 MG.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "IsiXhosa", paperName: "IsiXhosa SAL P1 Nov 2025", paperFile: "2025/november/IsiXhosa/IsiXhosa SAL P1 Nov 2025.pdf", memoFile: "2025/november/IsiXhosa/IsiXhosa SAL P1 Nov 2025 MG.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "IsiXhosa", paperName: "IsiXhosa SAL P2 Nov 2025", paperFile: "2025/november/IsiXhosa/IsiXhosa SAL P2 Nov 2025.pdf", memoFile: "2025/november/IsiXhosa/IsiXhosa SAL P2 Nov 2025 MG.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "IsiXhosa", paperName: "IsiXhosa SAL P3 Nov 2025", paperFile: "2025/november/IsiXhosa/IsiXhosa SAL P3 Nov 2025.pdf", memoFile: "2025/november/IsiXhosa/IsiXhosa SAL P3 Nov 2025 MG.pdf", hasMemo: true },

// ========== ISIZULU 2025 ==========
    { year: "2025", session: "November", subject: "IsiZulu", paperName: "IsiZulu FAL P1 Nov 2025", paperFile: "2025/november/IsiZulu/IsiZulu FAL P1 Nov 2025.pdf", memoFile: "2025/november/IsiZulu/IsiZulu FAL P1 Nov 2025 MG.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "IsiZulu", paperName: "IsiZulu FAL P2 Nov 2025", paperFile: "2025/november/IsiZulu/IsiZulu FAL P2 Nov 2025.pdf", memoFile: "2025/november/IsiZulu/IsiZulu FAL P2 Nov 2025 MG.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "IsiZulu", paperName: "IsiZulu FAL P3 Nov 2025", paperFile: "2025/november/IsiZulu/IsiZulu FAL P3 Nov 2025.pdf", memoFile: "2025/november/IsiZulu/IsiZulu FAL P3 Nov 2025 MG.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "IsiZulu", paperName: "IsiZulu HL P1 Nov 2025", paperFile: "2025/november/IsiZulu/IsiZulu HL P1 Nov 2025.pdf", memoFile: "2025/november/IsiZulu/IsiZulu HL P1 Nov 2025 MG.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "IsiZulu", paperName: "IsiZulu HL P2 Nov 2025", paperFile: "2025/november/IsiZulu/IsiZulu HL P2 Nov 2025.pdf", memoFile: "2025/november/IsiZulu/IsiZulu HL P2 Nov 2025 MG.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "IsiZulu", paperName: "IsiZulu HL P3 Nov 2025", paperFile: "2025/november/IsiZulu/IsiZulu HL P3 Nov 2025.pdf", memoFile: "2025/november/IsiZulu/IsiZulu HL P3 Nov 2025 MG.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "IsiZulu", paperName: "IsiZulu SAL P1 Nov 2025", paperFile: "2025/november/IsiZulu/IsiZulu SAL P1 Nov 2025.pdf", memoFile: "2025/november/IsiZulu/IsiZulu SAL P1 Nov 2025 MG.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "IsiZulu", paperName: "IsiZulu SAL P2 Nov 2025", paperFile: "2025/november/IsiZulu/IsiZulu SAL P2 Nov 2025.pdf", memoFile: "2025/november/IsiZulu/IsiZulu SAL P2 Nov 2025 MG.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "IsiZulu", paperName: "IsiZulu SAL P3 Nov 2025", paperFile: "2025/november/IsiZulu/IsiZulu SAL P3 Nov 2025.pdf", memoFile: "2025/november/IsiZulu/IsiZulu SAL P3 Nov 2025 MG.pdf", hasMemo: true },


// ========== SEPEDI 2025 ==========
    { year: "2025", session: "November", subject: "Sepedi", paperName: "Sepedi FAL P1 Nov 2025", paperFile: "2025/november/Sepedi/Sepedi FAL P1 Nov 2025.pdf", memoFile: "2025/november/Sepedi/Sepedi FAL P1 Nov 2025 MG.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Sepedi", paperName: "Sepedi FAL P2 Nov 2025", paperFile: "2025/november/Sepedi/Sepedi FAL P2 Nov 2025.pdf", memoFile: "2025/november/Sepedi/Sepedi FAL P2 Nov 2025 MG.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Sepedi", paperName: "Sepedi FAL P3 Nov 2025", paperFile: "2025/november/Sepedi/Sepedi FAL P3 Nov 2025.pdf", memoFile: "2025/november/Sepedi/Sepedi FAL P3 Nov 2025 MG.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Sepedi", paperName: "Sepedi HL P1 Nov 2025", paperFile: "2025/november/Sepedi/Sepedi HL P1 Nov 2025.pdf", memoFile: "2025/november/Sepedi/Sepedi HL P1 Nov 2025 MG.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Sepedi", paperName: "Sepedi HL P2 Nov 2025", paperFile: "2025/november/Sepedi/Sepedi HL P2 Nov 2025.pdf", memoFile: "2025/november/Sepedi/Sepedi HL P2 Nov 2025 MG.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Sepedi", paperName: "Sepedi HL P3 Nov 2025", paperFile: "2025/november/Sepedi/Sepedi HL P3 Nov 2025.pdf", memoFile: "2025/november/Sesotho/Sesotho HL P3 Nov 2025 MG.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Sepedi", paperName: "Sepedi SAL P1 Nov 2025", paperFile: "2025/november/Sepedi/Sepedi SAL P1 Nov 2025.pdf", memoFile: "2025/november/Sepedi/Sepedi SAL P1 Nov 2025 MG.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Sepedi", paperName: "Sepedi SAL P2 Nov 2025 Gauteng", paperFile: "2025/november/Sepedi/Sepedi SAL P2 Nov 2025 Gauteng.pdf", memoFile: "2025/november/Sepedi/Sepedi SAL P2 Nov 2025 MG Gauteng.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Sepedi", paperName: "Sepedi SAL P2 Nov 2025 Limpopo", paperFile: "2025/november/Sepedi/Sepedi SAL P2 Nov 2025 Limpopo.pdf", memoFile: "2025/november/Sepedi/Sepedi SAL P2 Nov 2025 MG Limpopo.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Sepedi", paperName: "Sepedi SAL P3 Nov 2025", paperFile: "2025/november/Sepedi/Sepedi SAL P3 Nov 2025", memoFile: "2025/november/Sepedi/Sepedi SAL P3 Nov 2025 MG.pdf", hasMemo: true },

// ========== SESOTHO 2025 ==========
    { year: "2025", session: "November", subject: "Sesotho", paperName: "Sesotho FAL P1 Nov 2025", paperFile: "2025/november/Sesotho/Sesotho FAL P1 Nov 2025.pdf", memoFile: "2025/november/Sesotho/Sesotho FAL P1 Nov 2025 MG.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Sesotho", paperName: "Sesotho FAL P2 Nov 2025", paperFile: "2025/november/Sesotho/Sesotho FAL P2 Nov 2025.pdf", memoFile: "2025/november/Sesotho/Sesotho FAL P2 Nov 2025 MG.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Sesotho", paperName: "Sesotho FAL P3 Nov 2025", paperFile: "2025/november/Sesotho/Sesotho FAL P3 Nov 2025.pdf", memoFile: "2025/november/Sesotho/Sesotho FAL P3 Nov 2025 MG.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Sesotho", paperName: "Sesotho HL P1 Nov 2025", paperFile: "2025/november/Sesotho/Sesotho HL P1 Nov 2025.pdf", memoFile: "2025/november/Sesotho/Sesotho HL P1 Nov 2025 MG.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Sesotho", paperName: "Sesotho HL P2 Nov 2025", paperFile: "2025/november/Sesotho/Sesotho HL P2 Nov 2025.pdf", memoFile: "2025/november/Sesotho/Sesotho HL P2 Nov 2025 MG.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Sesotho", paperName: "Sesotho HL P3 Nov 2025", paperFile: "2025/november/Sesotho/Sesotho HL P3 Nov 2025.pdf", memoFile: "2025/november/Sesotho/Sesotho HL P3 Nov 2025 MG.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Sesotho", paperName: "Sesotho SAL P1 Nov 2025", paperFile: "2025/november/Sesotho/Sesotho SAL P1 Nov 2025.pdf", memoFile: "2025/november/Sesotho/Sesotho SAL P1 Nov 2025 MG.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Sesotho", paperName: "Sesotho SAL P2 Nov 2025", paperFile: "2025/november/Sesotho/Sesotho SAL P2 Nov 2025.pdf", memoFile: "2025/november/Sesotho/Sesotho SAL P2 Nov 2025 MG.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Sesotho", paperName: "Sesotho SAL P3 Nov 2025", paperFile: null, memoFile: "2025/november/Sesotho/Sesotho SAL P3 Nov 2025 MG.pdf", hasMemo: true },

// ========== SETSWANA 2025 ==========
    { year: "2025", session: "November", subject: "Setswana", paperName: "Setswana FAL P1 Nov 2025", paperFile: "2025/november/Setswana/Setswana FAL P1 Nov 2025.pdf", memoFile: "2025/november/Setswana/Setswana FAL P1 Nov 2025 MG.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Setswana", paperName: "Setswana FAL P2 Nov 2025", paperFile: "2025/november/Setswana/Setswana FAL P2 Nov 2025.pdf", memoFile: "2025/november/Setswana/Setswana FAL P2 Nov 2025 MG.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Setswana", paperName: "Setswana FAL P3 Nov 2025", paperFile: "2025/november/Setswana/Setswana FAL P3 Nov 2025.pdf", memoFile: "2025/november/Setswana/Setswana FAL P3 Nov 2025 MG.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Setswana", paperName: "Setswana HL P1 Nov 2025", paperFile: "2025/november/Setswana/Setswana HL P1 Nov 2025.pdf", memoFile: "2025/november/Setswana/Setswana HL P1 Nov 2025 MG.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Setswana", paperName: "Setswana HL P2 Nov 2025", paperFile: "2025/november/Setswana/Setswana HL P2 Nov 2025.pdf", memoFile: "2025/november/Setswana/Setswana HL P2 Nov 2025 MG.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Setswana", paperName: "Setswana HL P3 Nov 2025", paperFile: "2025/november/Setswana/Setswana HL P3 Nov 2025.pdf", memoFile: "2025/november/Setswana/Setswana HL P3 Nov 2025 MG.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Setswana", paperName: "Setswana SAL P1 Nov 2025", paperFile: "2025/november/Setswana/Setswana SAL P1 Nov 2025.pdf", memoFile: null, hasMemo: false },
    { year: "2025", session: "November", subject: "Setswana", paperName: "Setswana SAL P2 Nov 2025", paperFile: "2025/november/Setswana/Setswana SAL P2 Nov 2025.pdf", memoFile: null, hasMemo: false },
    { year: "2025", session: "November", subject: "Setswana", paperName: "Setswana SAL P3 Nov 2025", paperFile: "2025/november/Setswana/Setswana SAL P3 Nov 2025.pdf", memoFile: null, hasMemo: false },

//========== SISWATI 2025 ==========
    { year: "2025", session: "November", subject: "SiSwati", paperName: "Siswati FAL P1 Nov 2025", paperFile: "2025/november/Siswati/Siswati FAL P1 Nov 2025.pdf", memoFile: "2025/november/Siswati/Siswati FAL P1 Nov 2025 MG.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "SiSwati", paperName: "Siswati FAL P2 Nov 2025", paperFile: "2025/november/Siswati/Siswati FAL P2 Nov 2025.pdf", memoFile: "2025/november/Siswati/Siswati FAL P2 Nov 2025 MG.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "SiSwati", paperName: "Siswati FAL P3 Nov 2025", paperFile: "2025/november/Siswati/Siswati FAL P3 Nov 2025.pdf", memoFile: null, hasMemo: false },
    { year: "2025", session: "November", subject: "SiSwati", paperName: "Siswati HL P1 Nov 2025", paperFile: "2025/november/Siswati/Siswati HL P1 Nov 2025.pdf", memoFile: "2025/november/Siswati/Siswati HL P1 Nov 2025 MG.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "SiSwati", paperName: "Siswati HL P2 Nov 2025", paperFile: "2025/november/Siswati/Siswati HL P2 Nov 2025.pdf", memoFile: "2025/november/Siswati/Siswati HL P2 Nov 2025 MG.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "SiSwati", paperName: "Siswati HL P3 Nov 2025", paperFile: "2025/november/Siswati/Siswati HL P3 Nov 2025.pdf", memoFile: "2025/november/Siswati/Siswati HL P3 Nov 2025 MG.pdf", hasMemo: true },

    //=========== SOUTH AFRICAN SIGN LANGUAGE ============
    { year: "2025", session: "May-June", subject: "South African Sign Language", paperName: "SASL HL P1 May-June 2025 QP Transcript", paperFile: "2025/november/South African Sign Language (Final)/SASL HL P1 May-June 2025 QP Transcription.pdf", memoFile: null, hasMemo: false },
    { year: "2025", session: "May-June", subject: "South African Sign Language", paperName: "SASL HL P2 May-June 2025 QP Transcript", paperFile: "2025/november/South African Sign Language (Final)/SASL HL P2 May-June 2025 QP Transcription.pdf", memoFile: null, hasMemo: false },
    { year: "2025", session: "May-June", subject: "South African Sign Language", paperName: "SASL HL P3 May-June 2025 QP Transcript", paperFile: "2025/november/South African Sign Language (Final)/SASL HL P3 May-June 2025 QP Transcription.pdf", memoFile: null, hasMemo: false },
    { year: "2025", session: "November", subject: "South African Sign Language", paperName: "SASL HL P1 Nov 2025 ", paperFile: null, memoFile: "2025/november/South African Sign Language (Final)/SASL HL P1 Nov 2025 MG.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "South African Sign Language", paperName: "SASL HL P2 Nov 2025 ", paperFile: null, memoFile: "2025/november/South African Sign Language (Final)/SASL HL P2 Nov 2025 MG.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "South African Sign Language", paperName: "SASL HL P3 Nov 2025 ", paperFile: null, memoFile: "2025/november/South African Sign Language (Final)/SASL HL P3 Nov 2025 MG.pdf", hasMemo: true },

    //=========== TSHIVENDA ============
    { year: "2025", session: "May-June", subject: "Tshivenda", paperName: "Tshivenda FAL P3 May-June 2025", paperFile: null, memoFile: "2025/november/Tshivenda/Tshivenda FAL P1 May-June 2025 MG.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Tshivenda", paperName: "Tshivenda FAL P1 Nov 2025", paperFile: "2025/november/Tshivenda/Tshivenda FAL P1 Nov 2025.pdf", memoFile: "2025/november/Tshivenda/Tshivenda FAL P1 Nov 2025 MG.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Tshivenda", paperName: "Tshivenda FAL P2 Nov 2025", paperFile: "2025/november/Tshivenda/Tshivenda FAL P2 Nov 2025.pdf", memoFile: "2025/november/Tshivenda/Tshivenda FAL P2 Nov 2025 MG.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Tshivenda", paperName: "Tshivenda FAL P3 Nov 2025", paperFile: "2025/november/Tshivenda/Tshivenda FAL P3 Nov 2025.pdf", memoFile: "2025/november/Tshivenda/Tshivenda FAL P3 Nov 2025 MG.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Tshivenda", paperName: "Tshivenda HL P1 Nov 2025", paperFile: "2025/november/Tshivenda/Tshivenda HL P1 Nov 2025.pdf", memoFile: "2025/november/Tshivenda/Tshivenda HL P1 Nov 2025 MG.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Tshivenda", paperName: "Tshivenda HL P2 Nov 2025", paperFile: "2025/november/Tshivenda/Tshivenda HL P2 Nov 2025.pdf", memoFile: "2025/november/Tshivenda/Tshivenda HL P2 Nov 2025 MG.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Tshivenda", paperName: "Tshivenda HL P3 Nov 2025", paperFile: "2025/november/Tshivenda/Tshivenda HL P3 Nov 2025.pdf", memoFile: "2025/november/Tshivenda/Tshivenda HL P3 Nov 2025 MG.pdf", hasMemo: true },

    //=========== XITSONGA ============
    { year: "2025", session: "November", subject: "Xitsonga", paperName: "Xitsonga FAL P1 Nov 2025", paperFile: "2025/november/Xitsonga/Xitsonga FAL P1 Nov 2025.pdf", memoFile: "2025/november/Xitsonga/Xitsonga FAL P1 Nov 2025 MG.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Xitsonga", paperName: "Xitsonga FAL P2 Nov 2025", paperFile: "2025/november/Xitsonga/Xitsonga FAL P2 Nov 2025.pdf", memoFile: "2025/november/Xitsonga/Xitsonga FAL P2 Nov 2025 MG.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Xitsonga", paperName: "Xitsonga FAL P3 Nov 2025", paperFile: "2025/november/Xitsonga/Xitsonga FAL P3 Nov 2025.pdf", memoFile: "2025/november/Xitsonga/Xitsonga FAL P3 Nov 2025 MG.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Xitsonga", paperName: "Xitsonga HL P1 Nov 2025", paperFile: "2025/november/Xitsonga/Xitsonga HL P1 Nov 2025.pdf", memoFile: "2025/november/Xitsonga/Xitsonga HL P1 Nov 2025 MG.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Xitsonga", paperName: "Xitsonga HL P2 Nov 2025", paperFile: "2025/november/Xitsonga/Xitsonga HL P2 Nov 2025.pdf", memoFile: "2025/november/Xitsonga/Xitsonga HL P2 Nov 2025 MG.pdf", hasMemo: true },
    { year: "2025", session: "November", subject: "Xitsonga", paperName: "Xitsonga HL P3 Nov 2025", paperFile: "2025/november/Xitsonga/Xitsonga HL P3 Nov 2025.pdf", memoFile: "2025/november/Xitsonga/Xitsonga HL P3 Nov 2025 MG.pdf", hasMemo: true },




];

// Language subjects list
export const languageSubjects = [
    "English Home Language", "English First Additional Language", "English Second Additional Language", "Afrikaans Tweede Addisionele Taal",
    "Afrikaans Huistaal", "Afrikaans Eerste Addisionele Taal", "IsiZulu", "Sepedi", "Sesotho",
    "Setswana", "Xitsonga", "SiSwati", "Tshivenda", "IsiNdebele", "IsiXhosa", "IsiZulu", "South African Sign Language"
];

// Available options
export const years = ["2020", "2021", "2022", "2023", "2024", "2025"];
export const sessions = ["November", "May-June", "March", "September"];

// Get unique subjects from all papers
export const getAllSubjects = () => {
    const subjects = allPapers.map(paper => paper.subject);
    return ["All", ...new Set(subjects)];
};