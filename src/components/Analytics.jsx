// components/Analytics.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

// Initialize Google Analytics
export const initGA = () => {
    // Your Measurement ID from Google Analytics
    ReactGA.initialize(import.meta.env.VITE_GA_MEASUREMENT_ID);
    console.log('📊 Google Analytics initialized');
};

// Track page views (automatically called on route change)
export const trackPageView = (path) => {
    ReactGA.send({
        hitType: "pageview",
        page: path
    });
};

// Track custom events (button clicks, form submissions, etc.)
export const trackEvent = (category, action, label = null) => {
    ReactGA.event({
        category: category,
        action: action,
        label: label
    });
    console.log(`📊 Event: ${category} - ${action}${label ? ' - ' + label : ''}`);
};

function Analytics() {
    const location = useLocation();

    useEffect(() => {
        // Track page view whenever URL changes
        trackPageView(location.pathname + location.search);
    }, [location]);

    return null;
}

export default Analytics;