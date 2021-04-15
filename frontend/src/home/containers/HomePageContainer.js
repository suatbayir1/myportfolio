import React, { Component } from 'react'
import Header from "../../shared/Header";
import Footer from "../../shared/Footer";
import Home from "../../home/components/Home";
import About from "../../home/components/About"
import Resume from "../../home/components/Resume"
import Services from "../../home/components/Services"
import Skills from "../../home/components/Skills"
import Projects from "../../home/components/Projects"
import Blog from "../../home/components/Blog";
import Counter from "../../home/components/Counter";
import Freelance from "../../home/components/Freelance";
import Contact from "../../home/components/Contact";



class HomePageContainer extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <Home />
                <About />
                <Resume />
                <Services />
                <Skills />
                <Projects />
                <Blog />
                <Counter />
                <Freelance />
                <Contact />
                <Footer />
            </React.Fragment>
        )
    }
}

export default HomePageContainer;