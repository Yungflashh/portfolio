import Nav from "../nav/Nav";
import Project from "../project/Project";
import About from "../aboutme/About";
import Contact from "../contact/Contact";
import Experience from "../Experience/Experience";
import Footer from "../footer/Footer";
import Profile from "../profile/Profile";

function Index(){
    return(
        <>
        <Nav/>
        <Profile/>
        <About/>
        <Experience/>
        <Project/>
        <Contact/>
        <Footer/>
        </>
    )
}

export default Index;