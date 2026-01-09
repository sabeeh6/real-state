import React, { useEffect } from 'react';
import { motion as Motion } from 'framer-motion';
import Footer from "../components/Footer.jsx"
import HeroSection from "../components/heroSection.jsx"
import LocationsSection from "../components/location.jsx"
import NavBar from "../components/Navbar.jsx"
import PropertiesSection from "../components/Properties.jsx"
import ServicesSection from "../components/Services.jsx"
import AboutSection from "./about.jsx"
import ContactSection from "./Contact.jsx"

export const LandingPage = () => {
    useEffect(() => {
        // Smooth scroll behavior and remove scrollbars
        document.documentElement.style.scrollBehavior = 'smooth';
        document.body.style.overflowX = 'hidden';
        document.documentElement.style.overflowX = 'hidden';
        document.body.style.margin = '0';
        document.body.style.padding = '0';
        
        return () => {
            document.body.style.overflowX = 'auto';
            document.documentElement.style.overflowX = 'auto';
        };
    }, []);

    const sectionVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <div className="min-h-screen bg-white w-full max-w-[100vw] overflow-hidden">
            {/* Navigation - Fixed */}
            <div className="fixed top-0 left-0 right-0 z-50 w-full">
                <NavBar />
            </div>

            {/* Hero Section - Full Screen with gradient overlay */}
            <Motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={sectionVariants}
                id="home"
                className="relative bg-gradient-to-b from-slate-900 to-slate-800 w-full"
            >
                <HeroSection />
            </Motion.section>

            {/* Locations Section - White Background */}
            <Motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={sectionVariants}
                id="locations"
                className="relative bg-white w-full"
            >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-50/30 to-transparent pointer-events-none"></div>
                <div className="relative w-full">
                    <LocationsSection />
                </div>
            </Motion.section>

            {/* Decorative Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent w-full"></div>

            {/* About Section - Light Grey Background */}
            <Motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={sectionVariants}
                id="about"
                className="relative bg-gradient-to-b from-slate-50 via-slate-100 to-slate-50 w-full"
            >
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent pointer-events-none"></div>
                <div className="relative w-full">
                    <AboutSection />
                </div>
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
            </Motion.section>

            {/* Decorative Wave Divider */}
            <div className="relative h-24 bg-white w-full overflow-hidden">
                <svg
                    className="absolute bottom-0 w-full h-24"
                    viewBox="0 0 1440 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,64 C240,120 480,120 720,80 C960,40 1200,40 1440,80 L1440,120 L0,120 Z"
                        fill="#1e293b"
                        fillOpacity="0.05"
                    />
                    <path
                        d="M0,80 C240,40 480,40 720,64 C960,88 1200,88 1440,64 L1440,120 L0,120 Z"
                        fill="#1e293b"
                        fillOpacity="0.08"
                    />
                </svg>
            </div>

            {/* Properties Section - Dark Grey Background */}
            <Motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={sectionVariants}
                id="explore-properties"
                className="relative bg-gradient-to-b from-slate-800 via-slate-900 to-slate-800 w-full"
            >
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djItMnptMC0ydi0yIDJ6bTItMmgyLTJ6bS0yIDBoLTIgMnptLTItMmgyLTJ6bTIgMHYtMiAyem0wIDJ2MnYtMnptMCAyaDJ2LTJ6bS0yLTJ2Mmgtdi0yem0yLTJ2Mmgtdi0yem0wLTJoMnYtMnptMCAyaDJ2LTJ6bTAtMnYyaC0ydi0yem0tNC0yaC0ydi0yem00IDBoLTJ2LTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20 pointer-events-none"></div>
                <div className="relative w-full">
                    <PropertiesSection />
                </div>
            </Motion.section>

   {/* Services Section - White Background with accent */}
            <Motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={sectionVariants}
                id="services"
                className="relative bg-white w-full"
            >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-50/40 via-transparent to-transparent pointer-events-none"></div>
                <div className="relative w-full">
                    <ServicesSection />
                </div>
            </Motion.section>

            {/* Wave Transition to Contact */}
            <div className="relative h-24 bg-slate-800 w-full overflow-hidden">
                <svg
                    className="absolute top-0 w-full h-24"
                    viewBox="0 0 1440 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,40 C240,80 480,80 720,56 C960,32 1200,32 1440,56 L1440,0 L0,0 Z"
                        fill="#f8fafc"
                    />
                </svg>
            </div>

            {/* Contact Section - Light Background */}
            <Motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={sectionVariants}
                id="contact-us"
                className="relative bg-gradient-to-b from-slate-50 to-white w-full"
            >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-blue-50/60 via-transparent to-transparent pointer-events-none"></div>
                <div className="relative w-full">
                    <ContactSection />
                </div>
            </Motion.section>

            {/* Footer - Dark Background */}
            <Motion.footer
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={sectionVariants}
                className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 w-full"
            >
                <Footer />
            </Motion.footer>

            {/* Scroll to Top Button */}
            <ScrollToTop />
        </div>
    );
};

// Scroll to Top Component
const ScrollToTop = () => {
    const [isVisible, setIsVisible] = React.useState(false);

    React.useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <Motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
                opacity: isVisible ? 1 : 0, 
                scale: isVisible ? 1 : 0 
            }}
            transition={{ duration: 0.3 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-40 p-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 group"
            aria-label="Scroll to top"
        >
            <svg 
                className="w-6 h-6 group-hover:-translate-y-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
        </Motion.button>
    );
};

export default LandingPage;
