import Footer from "../components/Footer.jsx"
import HeroSection from "../components/heroSection.jsx"
import LocationsSection from "../components/location.jsx"
import NavBar from "../components/Navbar.jsx"
import ServicesSection from "../components/Services.jsx"
import AboutSection from "./about.jsx"



export const LandingPage = () => {
    return(
        <>
        <NavBar/>
        <HeroSection/>
        <LocationsSection/>
        <AboutSection/>
        <ServicesSection/>
        <Footer/>
        </>
    )
}
