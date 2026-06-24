// components/StructuredData.jsx
import { Helmet } from 'react-helmet-async';

function StructuredData() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        "name": "Captain Edu",
        "description": "University and TVET college application assistance platform for South African students.",
        "url": "https://captainedu.co.za",
        "logo": "https://captainedu.co.za/logo.png",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+27772528646",
            "contactType": "Sales",
            "email": "captainstechsolutions@gmail.com"
        }
    };

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(structuredData)}
            </script>
        </Helmet>
    );
}

export default StructuredData;