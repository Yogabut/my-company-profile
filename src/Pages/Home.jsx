import React from "react";
import Hero from "../Components/Hero/index.jsx";
import About from "../Components/About/index.jsx";
import Services from "../Components/Services/index.jsx";
import Testimonial from "../Components/Testimonials/index.jsx";
import Contact from "../Components/Contact/index.jsx";
import Client from "../Components/Client/index.jsx";
import Project from "../Components/Project/index.jsx";

const Home = () => {
    return (
        <>  
            <section id="hero">
                <Hero />
            </section>
            <section id="about">
                <About />
            </section>
            <section id="client">
                <Client />
            </section>
            <section id="services">
                <Services />
            </section>
            <section id="project">
                <Project />
            </section>
            <section id="testimonial">
                <Testimonial />
            </section>
            <section id="contact">
                <Contact />
            </section>
        </>
    )
}

export default Home;