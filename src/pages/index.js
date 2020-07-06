import React, { useRef, useContext, Profiler } from "react";
import { Link } from "gatsby";

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

import Hero from '../components/hero';
import About from '../components/about';
import Projects from '../components/projects';
import Contact from '../components/contact';
import './index.css';


const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const IndexPage = () => {
  const projectsRef = useRef();
  const projectsScroll = () => scrollToRef(projectsRef);
  const contactRef = useRef();
  const contactScroll = () => scrollToRef(contactRef);
  const aboutRef = useRef();
  const aboutScroll = () => scrollToRef(aboutRef);


  function testFunction() {
    console.log('hello testFunction')
  }

  return (
        <Layout
          onTest={testFunction}
          >
          <SEO title="Home" />
          {/* Nav bar starts here */}
          <ul style={{
            // listStyle: `none`,
            // display: `flex`,
            // margin: `0`,
            // padding: `0`,
            // justifyContent: `flex-end`,
          }}>
            <li><button onClick={aboutScroll} onKeyDown={aboutScroll}>About</button></li>
            <li><button onClick={projectsScroll} onKeyDown={projectsScroll}>Projects</button></li>
            <li><Link to="/resume/">Resume</Link></li>
            <li><button onClick={contactScroll} onKeyDown={contactScroll}>Contact</button></li>
          </ul>
          {/* Nav bar ends here */}
          <Hero />
          <span ref={aboutRef}>
            <About />
          </span>
          <span ref={projectsRef}>
            <Projects />
          </span>
          <span ref={contactRef}>
            <Contact />
          </span>
          <Link to="/resume/">Go to Resume</Link> <br />
        </Layout>
  )
}

export default IndexPage
