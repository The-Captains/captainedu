// pages/Apply.jsx
import { useState } from "react";
import emailjs from '@emailjs/browser';
import Seo from "../components/Seo";

function Apply() {
    const [formData, setFormData] = useState({
        // Personal Information
        firstName: "",
        lastName: "",
        idNumber: "",
        dateOfBirth: "",
        gender: "",
        nationality: "South African",
        
        // Contact Information
        email: "",
        cellPhone: "",
        homeAddress: {
            street: "",
            city: "",
            province: "",
            postalCode: ""
        },
        
        // Academic Information
        currentGrade: "Grade 12",
        schoolName: "",
        matricYear: "2025",
        
        // Parent/Guardian Information
        parentFirstName: "",
        parentLastName: "",
        parentEmail: "",
        parentPhone: "",
        parentRelationship: "",
        parentAddress: {
            street: "",
            city: "",
            province: "",
            postalCode: ""
        },
        parentEmployer: "",
        parentOccupation: "",
        
        // Application Choices
        institutionType: "university",
        firstChoice: "",
        secondChoice: "",
        thirdChoice: "",
        universityChoice: "",
        tvetCollege: "",
        tvetCollegeOther: "",
        tvetCourse: "",
        tvetCourseOther: "",
        
        // Documents
        idCopy: null,
        idCopyName: "",
        latestResults: null,
        latestResultsName: "",
        parentIdCopy: null,
        parentIdCopyName: "",
        
        // Additional
        hearAboutUs: "",
        additionalNotes: "",
        agreeTerms: false
    });
    
    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionId, setSubmissionId] = useState(null);

    // Universities
    const universities = [
        "University of Cape Town (UCT)",
        "University of the Witwatersrand (Wits)",
        "University of Stellenbosch",
        "University of Pretoria (UP)",
        "University of KwaZulu-Natal (UKZN)",
        "University of Johannesburg (UJ)",
        "North-West University (NWU)",
        "Rhodes University",
        "University of the Western Cape (UWC)",
        "University of Limpopo",
        "University of Venda",
        "University of Mpumalanga",
        "Nelson Mandela University",
        "Cape Peninsula University of Technology (CPUT)",
        "Durban University of Technology (DUT)",
        "Tshwane University of Technology (TUT)",
        "Vaal University of Technology",
        "Central University of Technology (CUT)",
        "Mangosuthu University of Technology (MUT)",
        "University of Zululand",
        "University of Fort Hare",
        "Sol Plaatje University",
        "Sefako Makgatho Health Sciences University"
    ];

    // TVET Colleges
    const tvetColleges = [
        "Buffalo City TVET College",
        "Capricorn TVET College",
        "Central Johannesburg TVET College",
        "Coastal TVET College",
        "College of Cape Town",
        "Eastcape Midlands TVET College",
        "Ekurhuleni East TVET College",
        "Ekurhuleni West TVET College",
        "Elangeni TVET College",
        "Ethekwini TVET College",
        "False Bay TVET College",
        "Flavius Mareka TVET College",
        "Gert Sibande TVET College",
        "Goldfields TVET College",
        "Ingwe TVET College",
        "King Hintsa TVET College",
        "King Sabata Dalindyebo TVET College",
        "Lephalale TVET College",
        "Letsitele TVET College",
        "Majuba TVET College",
        "Maluti TVET College",
        "Mopani South East TVET College",
        "Motheo TVET College",
        "Mthashana TVET College",
        "Nkangala TVET College",
        "Northern Cape Urban TVET College",
        "Northlink TVET College",
        "Orbit TVET College",
        "Port Elizabeth TVET College",
        "Ratlou TVET College",
        "Sedibeng TVET College",
        "Sekhukhune TVET College",
        "South Cape TVET College",
        "South West Gauteng TVET College",
        "Taletso TVET College",
        "Tshwane North TVET College",
        "Tshwane South TVET College",
        "Umfolozi TVET College",
        "Umgungundlovu TVET College",
        "Vhembe TVET College",
        "Vuselela TVET College",
        "Waterberg TVET College",
        "West Coast TVET College",
        "Western College for TVET",
        "Other"
    ];

    const provinces = [
        "Eastern Cape",
        "Free State",
        "Gauteng",
        "KwaZulu-Natal",
        "Limpopo",
        "Mpumalanga",
        "North West",
        "Northern Cape",
        "Western Cape"
    ];

    const relationships = [
        "Father",
        "Mother",
        "Guardian",
        "Stepfather",
        "Stepmother",
        "Sibling",
        "Grandparent",
        "Other"
    ];

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        
        // Handle nested address fields
        if (name.startsWith('homeAddress.') || name.startsWith('parentAddress.')) {
            const [parent, field] = name.split('.');
            setFormData({
                ...formData,
                [parent]: {
                    ...formData[parent],
                    [field]: value
                }
            });
        } else {
            setFormData({
                ...formData,
                [name]: type === 'checkbox' ? checked : value
            });
        }
    };

    const handleFileUpload = (e) => {
        const { name, files } = e.target;
        const file = files[0];
        if (file) {
            if (file.size > 5 * 1024 * 1024) {
                alert("File size exceeds 5MB. Please compress or use a smaller file.");
                e.target.value = "";
                return;
            }
            setFormData({
                ...formData,
                [name]: file,
                [name + "Name"]: file.name
            });
        }
    };

    // Send auto-reply email using EmailJS
    const sendAutoReply = async (email, userName, submissionId, formData) => {
        try {
            emailjs.init("hPNOARzBoj2eB1IpR");

            const now = new Date();
            const submissionDate = now.toLocaleDateString('en-ZA', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });

            const templateParams = {
                to_email: email,
                to_name: userName,
                full_name: userName + " " + formData.lastName,
                submission_id: submissionId,
                submission_date: submissionDate,
                institution_type: formData.institutionType === 'university' ? 'University' : 'TVET College',
                university: formData.universityChoice || 'N/A',
                tvet_college: formData.tvetCollege === 'Other' ? formData.tvetCollegeOther : formData.tvetCollege || 'N/A',
                tvet_course: formData.tvetCourse === 'Other' ? formData.tvetCourseOther : formData.tvetCourse || 'N/A',
                first_choice: formData.firstChoice,
                second_choice: formData.secondChoice || "Not provided",
                third_choice: formData.thirdChoice || "Not provided",
                id_number: formData.idNumber,
                phone: formData.cellPhone,
                reply_to: "captainstechsolutions@gmail.com",
            };

            const response = await emailjs.send(
                "service_djjqu42",
                "template_jfyo1nj",
                templateParams
            );
            
            console.log("Auto-reply email sent successfully:", response);
            return true;
        } catch (error) {
            console.error("Failed to send auto-reply:", error);
            return false;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Validation
        if (!formData.firstName || !formData.lastName || !formData.idNumber || 
            !formData.dateOfBirth || !formData.gender || !formData.nationality ||
            !formData.email || !formData.cellPhone || 
            !formData.homeAddress.street || !formData.homeAddress.city || 
            !formData.homeAddress.province || !formData.homeAddress.postalCode ||
            !formData.schoolName || !formData.firstChoice || !formData.secondChoice ||
            !formData.parentFirstName || !formData.parentLastName || 
            !formData.parentEmail || !formData.parentPhone || !formData.parentRelationship ||
            !formData.agreeTerms) {
            alert("Please fill in all required fields and agree to the terms");
            return;
        }

        // Institution-specific validation
        if (formData.institutionType === 'university' && !formData.universityChoice) {
            alert("Please select a university");
            return;
        }
        if (formData.institutionType === 'tvet') {
            if (!formData.tvetCollege) {
                alert("Please select a TVET College");
                return;
            }
            if (formData.tvetCollege === 'Other' && !formData.tvetCollegeOther) {
                alert("Please specify your TVET College");
                return;
            }
            if (!formData.tvetCourse) {
                alert("Please select a course");
                return;
            }
            if (formData.tvetCourse === 'Other' && !formData.tvetCourseOther) {
                alert("Please specify your course");
                return;
            }
        }

        if (!formData.idCopy) {
            alert("Please upload a certified copy of your ID");
            return;
        }
        if (!formData.latestResults) {
            alert("Please upload your latest results");
            return;
        }
        
        setIsSubmitting(true);
        
        const newId = "APP" + Date.now();
        setSubmissionId(newId);
        
        try {
            const formDataToSend = new FormData();
            
            formDataToSend.append('_captcha', 'false');
            formDataToSend.append('_subject', `New Application - ${formData.firstName} ${formData.lastName}`);
            
            // Personal Information
            formDataToSend.append('First Name', formData.firstName);
            formDataToSend.append('Last Name', formData.lastName);
            formDataToSend.append('ID Number', formData.idNumber);
            formDataToSend.append('Date of Birth', formData.dateOfBirth);
            formDataToSend.append('Gender', formData.gender);
            formDataToSend.append('Nationality', formData.nationality);
            
            // Contact Information
            formDataToSend.append('Email', formData.email);
            formDataToSend.append('Phone', formData.cellPhone);
            formDataToSend.append('Street Address', formData.homeAddress.street);
            formDataToSend.append('City', formData.homeAddress.city);
            formDataToSend.append('Province', formData.homeAddress.province);
            formDataToSend.append('Postal Code', formData.homeAddress.postalCode);
            
            // Parent/Guardian Information
            formDataToSend.append('Parent First Name', formData.parentFirstName);
            formDataToSend.append('Parent Last Name', formData.parentLastName);
            formDataToSend.append('Parent Email', formData.parentEmail);
            formDataToSend.append('Parent Phone', formData.parentPhone);
            formDataToSend.append('Parent Relationship', formData.parentRelationship);
            formDataToSend.append('Parent Street Address', formData.parentAddress.street || 'Same as applicant');
            formDataToSend.append('Parent City', formData.parentAddress.city || 'Same as applicant');
            formDataToSend.append('Parent Province', formData.parentAddress.province || 'Same as applicant');
            formDataToSend.append('Parent Postal Code', formData.parentAddress.postalCode || 'Same as applicant');
            formDataToSend.append('Parent Employer', formData.parentEmployer || 'Not provided');
            formDataToSend.append('Parent Occupation', formData.parentOccupation || 'Not provided');
            
            // Academic Information
            formDataToSend.append('Current Grade', formData.currentGrade);
            formDataToSend.append('Matric Year', formData.matricYear);
            formDataToSend.append('School', formData.schoolName);
            
            // Institution Type
            formDataToSend.append('Institution Type', formData.institutionType === 'university' ? 'University' : 'TVET College');
            
            // Application Choices
            if (formData.institutionType === 'university') {
                formDataToSend.append('Target Institution', formData.universityChoice);
                formDataToSend.append('Course/Faculty', formData.firstChoice);
            } else {
                const collegeName = formData.tvetCollege === 'Other' ? formData.tvetCollegeOther : formData.tvetCollege;
                const courseName = formData.tvetCourse === 'Other' ? formData.tvetCourseOther : formData.tvetCourse;
                formDataToSend.append('TVET College', collegeName);
                formDataToSend.append('Course', courseName);
            }
            
            formDataToSend.append('First Choice', formData.firstChoice);
            formDataToSend.append('Second Choice', formData.secondChoice);
            formDataToSend.append('Third Choice', formData.thirdChoice || 'Not provided');
            
            // Additional
            formDataToSend.append('How did you hear about us?', formData.hearAboutUs || 'Not provided');
            formDataToSend.append('Additional Notes', formData.additionalNotes || 'None');
            formDataToSend.append('Submission ID', newId);
            
            // Attach files
            if (formData.idCopy) {
                formDataToSend.append('ID Copy', formData.idCopy);
            }
            if (formData.latestResults) {
                formDataToSend.append('Latest Results', formData.latestResults);
            }
            if (formData.parentIdCopy) {
                formDataToSend.append('Parent ID Copy', formData.parentIdCopy);
            }
            
            const response = await fetch('https://formsubmit.co/captainstechsolutions@gmail.com', {
                method: 'POST',
                body: formDataToSend
            });
            
            if (response.ok) {
                await sendAutoReply(
                    formData.email, 
                    formData.firstName, 
                    newId,
                    formData
                );
                
                setIsSubmitting(false);
                setStep(2);
            } else {
                throw new Error('Form submission failed');
            }
            
        } catch (error) {
            console.error('Submission error:', error);
            alert('There was an issue submitting your application. Please try again or email us directly at captainstechsolutions@gmail.com');
            setIsSubmitting(false);
        }
    };

    // Styles - Mobile-First Design
    const containerStyle = {
        maxWidth: '100%',
        margin: '0 auto',
        padding: '12px 10px'
    };

    const titleStyle = {
        fontSize: 'clamp(1.3rem, 5vw, 1.8rem)',
        fontWeight: '700',
        color: '#1a202c',
        textAlign: 'center',
        marginBottom: '6px'
    };

    const subtitleStyle = {
        fontSize: '0.85rem',
        color: '#64748b',
        textAlign: 'center',
        marginBottom: '16px'
    };

    const formStyle = {
        background: '#ffffff',
        padding: '16px 12px',
        borderRadius: '12px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        border: '1px solid #e2e8f0'
    };

    const sectionStyle = {
        marginBottom: '24px',
        paddingBottom: '16px',
        borderBottom: '1px solid #e2e8f0'
    };

    const sectionTitleStyle = {
        fontSize: '1rem',
        fontWeight: '700',
        color: '#0d9488',
        marginBottom: '14px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
    };

    const formGroupStyle = {
        marginBottom: '14px',
        width: '100%'
    };

    const labelStyle = {
        display: 'block',
        marginBottom: '5px',
        fontWeight: '600',
        color: '#1a202c',
        fontSize: '13px'
    };

    const requiredStyle = {
        color: '#ef4444',
        marginLeft: '4px'
    };

    const inputStyle = {
        width: '100%',
        padding: '12px 14px',
        border: '1px solid #e2e8f0',
        borderRadius: '8px',
        fontSize: '16px', // Prevents zoom on mobile
        outline: 'none',
        boxSizing: 'border-box',
        transition: 'all 0.3s',
        WebkitAppearance: 'none',
        backgroundColor: '#fff'
    };

    const selectStyle = {
        width: '100%',
        padding: '12px 14px',
        border: '1px solid #e2e8f0',
        borderRadius: '8px',
        fontSize: '16px', // Prevents zoom on mobile
        outline: 'none',
        background: '#fff',
        cursor: 'pointer',
        boxSizing: 'border-box',
        WebkitAppearance: 'none',
        appearance: 'none',
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23333' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right 14px center',
        paddingRight: '40px'
    };

    const textareaStyle = {
        width: '100%',
        padding: '12px 14px',
        border: '1px solid #e2e8f0',
        borderRadius: '8px',
        fontSize: '16px',
        outline: 'none',
        boxSizing: 'border-box',
        fontFamily: 'inherit',
        resize: 'vertical',
        minHeight: '80px'
    };

    const fileInputStyle = {
        width: '100%',
        padding: '10px 14px',
        border: '1px solid #e2e8f0',
        borderRadius: '8px',
        fontSize: '14px',
        outline: 'none',
        boxSizing: 'border-box',
        background: '#f8fafc',
        cursor: 'pointer'
    };

    const fileUploadedStyle = {
        display: 'inline-block',
        background: '#e6f7f5',
        padding: '4px 12px',
        borderRadius: '4px',
        fontSize: '12px',
        color: '#0d9488',
        marginTop: '4px'
    };

    const buttonStyle = {
        width: '100%',
        padding: '14px',
        background: '#0d9488',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        fontSize: '16px',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'all 0.3s',
        touchAction: 'manipulation',
        WebkitTapHighlightColor: 'transparent'
    };

    const confirmationStyle = {
        background: '#f0fdfa',
        padding: '20px 16px',
        borderRadius: '12px',
        textAlign: 'center',
        border: '1px solid #0d9488'
    };

    const radioGroupStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        padding: '12px 14px',
        background: '#f8fafc',
        borderRadius: '8px',
        border: '1px solid #e2e8f0'
    };

    const radioLabelStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        fontSize: '15px',
        fontWeight: '500',
        cursor: 'pointer',
        padding: '6px 0'
    };

    const helperTextStyle = {
        fontSize: '12px',
        color: '#64748b',
        marginTop: '4px'
    };

    // Step 2: Confirmation
    if (step === 2) {
        return (
            <div style={containerStyle}>
                <div style={confirmationStyle}>
                    <div style={{ fontSize: '48px', marginBottom: '12px' }}>✅</div>
                    <h2 style={{ color: '#0d9488', marginBottom: '6px', fontSize: '1.3rem' }}>Application Sent!</h2>
                    <p style={{ color: '#1a202c', marginBottom: '12px', fontSize: '13px' }}>
                        Ref: <strong>{submissionId}</strong>
                    </p>
                    <p style={{ color: '#4a5568', marginBottom: '6px', fontSize: '13px' }}>
                        We've received your application. Check your email for confirmation.
                    </p>
                    <p style={{ color: '#4a5568', marginBottom: '18px', fontSize: '12px' }}>
                        📧 Auto-reply sent to: <strong>{formData.email}</strong>
                    </p>
                    
                    <div style={{ 
                        background: '#e6f7f5', 
                        padding: '12px', 
                        borderRadius: '8px', 
                        marginBottom: '16px',
                        textAlign: 'left',
                        fontSize: '12px'
                    }}>
                        <p style={{ margin: '0 0 6px', fontWeight: '600', color: '#0d9488' }}>
                            📄 Documents Attached:
                        </p>
                        <ul style={{ margin: 0, paddingLeft: '18px' }}>
                            {formData.idCopy && <li>✅ ID Copy: {formData.idCopyName}</li>}
                            {formData.latestResults && <li>✅ Results: {formData.latestResultsName}</li>}
                            {formData.parentIdCopy && <li>✅ Parent ID: {formData.parentIdCopyName}</li>}
                        </ul>
                    </div>
                    
                    <div style={{ background: '#fef3c7', padding: '12px', borderRadius: '8px', marginBottom: '16px', fontSize: '12px', textAlign: 'left' }}>
                        <p style={{ margin: '0 0 4px', fontWeight: '600', color: '#92400e' }}>💰 Payment Instructions:</p>
                        <p style={{ margin: '4px 0 0', fontSize: '11px', color: '#92400e' }}>
                            Bank: Capitec<br />
                            Account: Captain Edu<br />
                            Account No: 1655805396<br />
                            Ref: Your ID Number
                        </p>
                    </div>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <a href="https://wa.me/27772528646" target="_blank" rel="noopener noreferrer" style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '8px',
                            background: '#25D366',
                            color: 'white',
                            padding: '12px',
                            borderRadius: '8px',
                            textDecoration: 'none',
                            fontSize: '14px',
                            fontWeight: '600'
                        }}>
                            💬 WhatsApp Us
                        </a>
                        <a href="mailto:captainstechsolutions@gmail.com" style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '8px',
                            background: '#0d9488',
                            color: 'white',
                            padding: '12px',
                            borderRadius: '8px',
                            textDecoration: 'none',
                            fontSize: '14px',
                            fontWeight: '600'
                        }}>
                            ✉️ Email Us
                        </a>
                    </div>
                    
                    <button 
                        onClick={() => window.location.href = '/'}
                        style={{
                            ...buttonStyle,
                            background: '#f1f5f9',
                            color: '#475569',
                            marginTop: '16px'
                        }}
                    >
                        Return Home
                    </button>
                </div>
            </div>
        );
    }

    return (
        
        <>
        <Seo 
                title="Apply for Application Assistance"
                description="Get professional help with your university or TVET college application. Our team ensures your application is complete and submitted correctly for R80."
                keywords="university application help, TVET college application, application assistance, Captain Edu"
            />

        <div style={containerStyle}>
            <h1 style={titleStyle}>🎓 Tertiary Application Assistance</h1>
            <p style={subtitleStyle}>Complete this form to get professional help with your application</p>

            <div style={{ 
                background: '#e6f7f5', 
                padding: '12px', 
                borderRadius: '10px', 
                marginBottom: '16px',
                borderLeft: '4px solid #0d9488',
                fontSize: '13px'
            }}>
                <p style={{ margin: 0 }}>
                    <strong>💰 Fee:</strong> R80<br />
                    <strong>📧 Email:</strong> captainstechsolutions@gmail.com<br />
                    <strong>📄 What we help with:</strong> Application form completion, document checklist, deadline reminders, and submission guidance
                </p>
            </div>

            <form onSubmit={handleSubmit} style={formStyle}>
                {/* Section 1: Personal Information */}
                <div style={sectionStyle}>
                    <h3 style={sectionTitleStyle}>👤 Personal Information</h3>
                    
                    <div style={formGroupStyle}>
                        <label style={labelStyle}>
                            First Name(s) <span style={requiredStyle}>*</span>
                        </label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            style={inputStyle}
                            placeholder="e.g., Thabo"
                            required
                            onFocus={(e) => e.target.style.borderColor = '#0d9488'}
                            onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                        />
                    </div>

                    <div style={formGroupStyle}>
                        <label style={labelStyle}>
                            Surname <span style={requiredStyle}>*</span>
                        </label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            style={inputStyle}
                            placeholder="e.g., Mbeki"
                            required
                            onFocus={(e) => e.target.style.borderColor = '#0d9488'}
                            onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                        />
                    </div>

                    <div style={formGroupStyle}>
                        <label style={labelStyle}>
                            ID Number <span style={requiredStyle}>*</span>
                        </label>
                        <input
                            type="text"
                            name="idNumber"
                            value={formData.idNumber}
                            onChange={handleChange}
                            style={inputStyle}
                            placeholder="e.g., 2001010100080"
                            maxLength="13"
                            required
                            onFocus={(e) => e.target.style.borderColor = '#0d9488'}
                            onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                        />
                    </div>

                    <div style={formGroupStyle}>
                        <label style={labelStyle}>
                            Date of Birth <span style={requiredStyle}>*</span>
                        </label>
                        <input
                            type="date"
                            name="dateOfBirth"
                            value={formData.dateOfBirth}
                            onChange={handleChange}
                            style={inputStyle}
                            required
                            onFocus={(e) => e.target.style.borderColor = '#0d9488'}
                            onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                        />
                    </div>

                    <div style={formGroupStyle}>
                        <label style={labelStyle}>
                            Gender <span style={requiredStyle}>*</span>
                        </label>
                        <select
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            style={selectStyle}
                            required
                        >
                            <option value="">Select...</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div style={formGroupStyle}>
                        <label style={labelStyle}>
                            Nationality <span style={requiredStyle}>*</span>
                        </label>
                        <select
                            name="nationality"
                            value={formData.nationality}
                            onChange={handleChange}
                            style={selectStyle}
                            required
                        >
                            <option value="South African">South African</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                </div>

                {/* Section 2: Contact Information */}
                <div style={sectionStyle}>
                    <h3 style={sectionTitleStyle}>📧 Contact Information</h3>
                    
                    <div style={formGroupStyle}>
                        <label style={labelStyle}>
                            Email Address <span style={requiredStyle}>*</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            style={inputStyle}
                            placeholder="you@example.com"
                            required
                            onFocus={(e) => e.target.style.borderColor = '#0d9488'}
                            onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                        />
                    </div>

                    <div style={formGroupStyle}>
                        <label style={labelStyle}>
                            Cell Phone Number <span style={requiredStyle}>*</span>
                        </label>
                        <input
                            type="tel"
                            name="cellPhone"
                            value={formData.cellPhone}
                            onChange={handleChange}
                            style={inputStyle}
                            placeholder="+27 82 123 4567"
                            required
                            onFocus={(e) => e.target.style.borderColor = '#0d9488'}
                            onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                        />
                    </div>

                    <div style={formGroupStyle}>
                        <label style={labelStyle}>
                            Home Address <span style={requiredStyle}>*</span>
                        </label>
                        <input
                            type="text"
                            name="homeAddress.street"
                            value={formData.homeAddress.street}
                            onChange={handleChange}
                            style={inputStyle}
                            placeholder="Street address"
                            required
                            onFocus={(e) => e.target.style.borderColor = '#0d9488'}
                            onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                        />
                        <input
                            type="text"
                            name="homeAddress.city"
                            value={formData.homeAddress.city}
                            onChange={handleChange}
                            style={{...inputStyle, marginTop: '8px'}}
                            placeholder="City/Town"
                            required
                            onFocus={(e) => e.target.style.borderColor = '#0d9488'}
                            onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                        />
                        <select
                            name="homeAddress.province"
                            value={formData.homeAddress.province}
                            onChange={handleChange}
                            style={{...selectStyle, marginTop: '8px'}}
                            required
                        >
                            <option value="">Select Province</option>
                            {provinces.map(prov => (
                                <option key={prov} value={prov}>{prov}</option>
                            ))}
                        </select>
                        <input
                            type="text"
                            name="homeAddress.postalCode"
                            value={formData.homeAddress.postalCode}
                            onChange={handleChange}
                            style={{...inputStyle, marginTop: '8px'}}
                            placeholder="Postal Code"
                            required
                            onFocus={(e) => e.target.style.borderColor = '#0d9488'}
                            onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                        />
                    </div>
                </div>

                {/* Section 3: Parent/Guardian Information */}
                <div style={sectionStyle}>
                    <h3 style={sectionTitleStyle}>👨‍👩‍👦 Parent/Guardian Information</h3>
                    
                    <div style={formGroupStyle}>
                        <label style={labelStyle}>
                            Parent/Guardian First Name <span style={requiredStyle}>*</span>
                        </label>
                        <input
                            type="text"
                            name="parentFirstName"
                            value={formData.parentFirstName}
                            onChange={handleChange}
                            style={inputStyle}
                            placeholder="Parent's first name"
                            required
                            onFocus={(e) => e.target.style.borderColor = '#0d9488'}
                            onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                        />
                    </div>

                    <div style={formGroupStyle}>
                        <label style={labelStyle}>
                            Parent/Guardian Surname <span style={requiredStyle}>*</span>
                        </label>
                        <input
                            type="text"
                            name="parentLastName"
                            value={formData.parentLastName}
                            onChange={handleChange}
                            style={inputStyle}
                            placeholder="Parent's surname"
                            required
                            onFocus={(e) => e.target.style.borderColor = '#0d9488'}
                            onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                        />
                    </div>

                    <div style={formGroupStyle}>
                        <label style={labelStyle}>
                            Parent/Guardian Email <span style={requiredStyle}>*</span>
                        </label>
                        <input
                            type="email"
                            name="parentEmail"
                            value={formData.parentEmail}
                            onChange={handleChange}
                            style={inputStyle}
                            placeholder="parent@example.com"
                            required
                            onFocus={(e) => e.target.style.borderColor = '#0d9488'}
                            onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                        />
                    </div>

                    <div style={formGroupStyle}>
                        <label style={labelStyle}>
                            Parent/Guardian Phone <span style={requiredStyle}>*</span>
                        </label>
                        <input
                            type="tel"
                            name="parentPhone"
                            value={formData.parentPhone}
                            onChange={handleChange}
                            style={inputStyle}
                            placeholder="+27 82 123 4567"
                            required
                            onFocus={(e) => e.target.style.borderColor = '#0d9488'}
                            onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                        />
                    </div>

                    <div style={formGroupStyle}>
                        <label style={labelStyle}>
                            Relationship to Applicant <span style={requiredStyle}>*</span>
                        </label>
                        <select
                            name="parentRelationship"
                            value={formData.parentRelationship}
                            onChange={handleChange}
                            style={selectStyle}
                            required
                        >
                            <option value="">Select relationship...</option>
                            {relationships.map(rel => (
                                <option key={rel} value={rel}>{rel}</option>
                            ))}
                        </select>
                    </div>

                    <div style={formGroupStyle}>
                        <label style={labelStyle}>Parent/Guardian Address</label>
                        <p style={helperTextStyle}>
                            Leave blank if same as applicant's address
                        </p>
                        <input
                            type="text"
                            name="parentAddress.street"
                            value={formData.parentAddress.street}
                            onChange={handleChange}
                            style={inputStyle}
                            placeholder="Street address"
                            onFocus={(e) => e.target.style.borderColor = '#0d9488'}
                            onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                        />
                        <input
                            type="text"
                            name="parentAddress.city"
                            value={formData.parentAddress.city}
                            onChange={handleChange}
                            style={{...inputStyle, marginTop: '8px'}}
                            placeholder="City/Town"
                            onFocus={(e) => e.target.style.borderColor = '#0d9488'}
                            onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                        />
                        <select
                            name="parentAddress.province"
                            value={formData.parentAddress.province}
                            onChange={handleChange}
                            style={{...selectStyle, marginTop: '8px'}}
                        >
                            <option value="">Select Province</option>
                            {provinces.map(prov => (
                                <option key={prov} value={prov}>{prov}</option>
                            ))}
                        </select>
                        <input
                            type="text"
                            name="parentAddress.postalCode"
                            value={formData.parentAddress.postalCode}
                            onChange={handleChange}
                            style={{...inputStyle, marginTop: '8px'}}
                            placeholder="Postal Code"
                            onFocus={(e) => e.target.style.borderColor = '#0d9488'}
                            onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                        />
                    </div>

                    <div style={formGroupStyle}>
                        <label style={labelStyle}>Parent/Guardian Employer</label>
                        <input
                            type="text"
                            name="parentEmployer"
                            value={formData.parentEmployer}
                            onChange={handleChange}
                            style={inputStyle}
                            placeholder="Name of employer"
                            onFocus={(e) => e.target.style.borderColor = '#0d9488'}
                            onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                        />
                    </div>

                    <div style={formGroupStyle}>
                        <label style={labelStyle}>Parent/Guardian Occupation</label>
                        <input
                            type="text"
                            name="parentOccupation"
                            value={formData.parentOccupation}
                            onChange={handleChange}
                            style={inputStyle}
                            placeholder="Job title"
                            onFocus={(e) => e.target.style.borderColor = '#0d9488'}
                            onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                        />
                    </div>
                </div>

                {/* Section 4: Academic Information */}
                <div style={sectionStyle}>
                    <h3 style={sectionTitleStyle}>📚 Academic Information</h3>
                    
                    <div style={formGroupStyle}>
                        <label style={labelStyle}>
                            Current Grade <span style={requiredStyle}>*</span>
                        </label>
                        <select
                            name="currentGrade"
                            value={formData.currentGrade}
                            onChange={handleChange}
                            style={selectStyle}
                            required
                        >
                            <option value="Grade 12">Grade 12</option>
                            <option value="Grade 11">Grade 11</option>
                            <option value="Matric Completed">Matric Completed</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div style={formGroupStyle}>
                        <label style={labelStyle}>
                            Matric Year <span style={requiredStyle}>*</span>
                        </label>
                        <select
                            name="matricYear"
                            value={formData.matricYear}
                            onChange={handleChange}
                            style={selectStyle}
                            required
                        >
                            <option value="2025">2025</option>
                            <option value="2024">2024</option>
                            <option value="2023">2023</option>
                            <option value="2022">2022</option>
                            <option value="2021">2021</option>
                            <option value="2020">2020</option>
                        </select>
                    </div>

                    <div style={formGroupStyle}>
                        <label style={labelStyle}>
                            Current School <span style={requiredStyle}>*</span>
                        </label>
                        <input
                            type="text"
                            name="schoolName"
                            value={formData.schoolName}
                            onChange={handleChange}
                            style={inputStyle}
                            placeholder="Name of your school"
                            required
                            onFocus={(e) => e.target.style.borderColor = '#0d9488'}
                            onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                        />
                    </div>
                </div>

                {/* Section 5: Institution Type */}
                <div style={sectionStyle}>
                    <h3 style={sectionTitleStyle}>🏛️ Institution Type</h3>
                    
                    <div style={formGroupStyle}>
                        <label style={labelStyle}>
                            Select Institution Type <span style={requiredStyle}>*</span>
                        </label>
                        <div style={radioGroupStyle}>
                            <label style={radioLabelStyle}>
                                <input
                                    type="radio"
                                    name="institutionType"
                                    value="university"
                                    checked={formData.institutionType === 'university'}
                                    onChange={handleChange}
                                />
                                🏫 University
                            </label>
                            <label style={radioLabelStyle}>
                                <input
                                    type="radio"
                                    name="institutionType"
                                    value="tvet"
                                    checked={formData.institutionType === 'tvet'}
                                    onChange={handleChange}
                                />
                                🔧 TVET College
                            </label>
                        </div>
                    </div>
                </div>

                {/* Section 6: University Choices */}
                {formData.institutionType === 'university' && (
                    <div style={sectionStyle}>
                        <h3 style={sectionTitleStyle}>🏛️ University Selection</h3>
                        
                        <div style={formGroupStyle}>
                            <label style={labelStyle}>
                                Target University <span style={requiredStyle}>*</span>
                            </label>
                            <select
                                name="universityChoice"
                                value={formData.universityChoice}
                                onChange={handleChange}
                                style={selectStyle}
                                required
                            >
                                <option value="">Select a university...</option>
                                {universities.map(uni => (
                                    <option key={uni} value={uni}>{uni}</option>
                                ))}
                            </select>
                        </div>

                        <div style={formGroupStyle}>
                            <label style={labelStyle}>
                                First Choice Course <span style={requiredStyle}>*</span>
                            </label>
                            <input
                                type="text"
                                name="firstChoice"
                                value={formData.firstChoice}
                                onChange={handleChange}
                                style={inputStyle}
                                placeholder="e.g., Bachelor of Commerce"
                                required
                                onFocus={(e) => e.target.style.borderColor = '#0d9488'}
                                onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                            />
                        </div>

                        <div style={formGroupStyle}>
                            <label style={labelStyle}>
                                Second Choice Course <span style={requiredStyle}>*</span>
                            </label>
                            <input
                                type="text"
                                name="secondChoice"
                                value={formData.secondChoice}
                                onChange={handleChange}
                                style={inputStyle}
                                placeholder="Alternative course"
                                required
                                onFocus={(e) => e.target.style.borderColor = '#0d9488'}
                                onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                            />
                        </div>

                        <div style={formGroupStyle}>
                            <label style={labelStyle}>Third Choice Course</label>
                            <input
                                type="text"
                                name="thirdChoice"
                                value={formData.thirdChoice}
                                onChange={handleChange}
                                style={inputStyle}
                                placeholder="Another alternative (optional)"
                                onFocus={(e) => e.target.style.borderColor = '#0d9488'}
                                onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                            />
                        </div>
                    </div>
                )}

                {/* Section 7: TVET College Choices */}
                {formData.institutionType === 'tvet' && (
                    <div style={sectionStyle}>
                        <h3 style={sectionTitleStyle}>🔧 TVET College Selection</h3>
                        
                        <div style={formGroupStyle}>
                            <label style={labelStyle}>
                                TVET College <span style={requiredStyle}>*</span>
                            </label>
                            <select
                                name="tvetCollege"
                                value={formData.tvetCollege}
                                onChange={handleChange}
                                style={selectStyle}
                                required
                            >
                                <option value="">Select a TVET College...</option>
                                {tvetColleges.map(college => (
                                    <option key={college} value={college}>{college}</option>
                                ))}
                            </select>
                            {formData.tvetCollege === 'Other' && (
                                <input
                                    type="text"
                                    name="tvetCollegeOther"
                                    value={formData.tvetCollegeOther}
                                    onChange={handleChange}
                                    style={{...inputStyle, marginTop: '8px'}}
                                    placeholder="Please specify your TVET College"
                                    required
                                    onFocus={(e) => e.target.style.borderColor = '#0d9488'}
                                    onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                                />
                            )}
                        </div>

                        <div style={formGroupStyle}>
                            <label style={labelStyle}>
                                Course/Program <span style={requiredStyle}>*</span>
                            </label>
                            <select
                                name="tvetCourse"
                                value={formData.tvetCourse}
                                onChange={handleChange}
                                style={selectStyle}
                                required
                            >
                                <option value="">Select a course...</option>
                                <option value="Mechanical Engineering">Mechanical Engineering</option>
                                <option value="Electrical Engineering">Electrical Engineering</option>
                                <option value="Civil Engineering">Civil Engineering</option>
                                <option value="Information Technology">Information Technology</option>
                                <option value="Business Management">Business Management</option>
                                <option value="Financial Management">Financial Management</option>
                                <option value="Hospitality Management">Hospitality Management</option>
                                <option value="Early Childhood Development">Early Childhood Development</option>
                                <option value="Nursing">Nursing</option>
                                <option value="Graphic Design">Graphic Design</option>
                                <option value="Agriculture">Agriculture</option>
                                <option value="Other">Other (please specify)</option>
                            </select>
                            {formData.tvetCourse === 'Other' && (
                                <input
                                    type="text"
                                    name="tvetCourseOther"
                                    value={formData.tvetCourseOther}
                                    onChange={handleChange}
                                    style={{...inputStyle, marginTop: '8px'}}
                                    placeholder="Please specify your course"
                                    required
                                    onFocus={(e) => e.target.style.borderColor = '#0d9488'}
                                    onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                                />
                            )}
                        </div>

                        <div style={formGroupStyle}>
                            <label style={labelStyle}>
                                Alternative Course <span style={requiredStyle}>*</span>
                            </label>
                            <input
                                type="text"
                                name="secondChoice"
                                value={formData.secondChoice}
                                onChange={handleChange}
                                style={inputStyle}
                                placeholder="Alternative course"
                                required
                                onFocus={(e) => e.target.style.borderColor = '#0d9488'}
                                onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                            />
                        </div>
                    </div>
                )}

                {/* Section 8: Documents Upload */}
                <div style={sectionStyle}>
                    <h3 style={sectionTitleStyle}>📄 Document Upload</h3>
                    <p style={{ fontSize: '12px', color: '#64748b', marginBottom: '12px' }}>
                        Accepted: PDF, JPEG, PNG (Max 5MB per file)
                    </p>
                    
                    <div style={formGroupStyle}>
                        <label style={labelStyle}>
                            Certified ID Copy <span style={requiredStyle}>*</span>
                        </label>
                        <input
                            type="file"
                            name="idCopy"
                            onChange={handleFileUpload}
                            style={fileInputStyle}
                            accept=".pdf,.jpg,.jpeg,.png"
                            required
                        />
                        {formData.idCopyName && (
                            <div style={fileUploadedStyle}>✅ {formData.idCopyName} attached</div>
                        )}
                    </div>

                    <div style={formGroupStyle}>
                        <label style={labelStyle}>
                            Latest Results <span style={requiredStyle}>*</span>
                        </label>
                        <input
                            type="file"
                            name="latestResults"
                            onChange={handleFileUpload}
                            style={fileInputStyle}
                            accept=".pdf,.jpg,.jpeg,.png"
                            required
                        />
                        {formData.latestResultsName && (
                            <div style={fileUploadedStyle}>✅ {formData.latestResultsName} attached</div>
                        )}
                    </div>

                    <div style={formGroupStyle}>
                        <label style={labelStyle}>Parent/Guardian ID Copy</label>
                        <input
                            type="file"
                            name="parentIdCopy"
                            onChange={handleFileUpload}
                            style={fileInputStyle}
                            accept=".pdf,.jpg,.jpeg,.png"
                        />
                        {formData.parentIdCopyName && (
                            <div style={fileUploadedStyle}>✅ {formData.parentIdCopyName} attached</div>
                        )}
                    </div>
                </div>

                {/* Section 9: Additional Information */}
                <div style={sectionStyle}>
                    <h3 style={sectionTitleStyle}>📝 Additional Information</h3>
                    
                    <div style={formGroupStyle}>
                        <label style={labelStyle}>How did you hear about us?</label>
                        <select
                            name="hearAboutUs"
                            value={formData.hearAboutUs}
                            onChange={handleChange}
                            style={selectStyle}
                        >
                            <option value="">Select...</option>
                            <option value="Social Media">Social Media</option>
                            <option value="Friend/Family">Friend/Family</option>
                            <option value="School">School</option>
                            <option value="Google Search">Google Search</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div style={formGroupStyle}>
                        <label style={labelStyle}>Additional Notes</label>
                        <textarea
                            name="additionalNotes"
                            value={formData.additionalNotes}
                            onChange={handleChange}
                            style={textareaStyle}
                            rows="3"
                            placeholder="Any specific requirements or questions..."
                            onFocus={(e) => e.target.style.borderColor = '#0d9488'}
                            onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                        />
                    </div>
                </div>

                {/* Terms and Submit */}
                <div style={{ marginBottom: '16px' }}>
                    <label style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13px' }}>
                        <input
                            type="checkbox"
                            name="agreeTerms"
                            checked={formData.agreeTerms}
                            onChange={handleChange}
                            style={{ width: '20px', height: '20px', marginTop: '2px', flexShrink: 0 }}
                            required
                        />
                        <span>
                            I confirm all information and documents are accurate and complete. 
                            I understand a fee of <strong>R80</strong> applies. <span style={requiredStyle}>*</span>
                        </span>
                    </label>
                </div>

                <button 
                    type="submit" 
                    style={buttonStyle}
                    onMouseEnter={(e) => e.target.style.background = '#0f766e'}
                    onMouseLeave={(e) => e.target.style.background = '#0d9488'}
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Sending..." : "Submit Application →"}
                </button>

                <p style={{ fontSize: '11px', color: '#64748b', textAlign: 'center', marginTop: '12px' }}>
                    We'll contact you within 24 hours. For urgent inquiries, email us at <strong>captainstechsolutions@gmail.com</strong>
                </p>
            </form>
        </div>
        </>
    );
}

export default Apply;