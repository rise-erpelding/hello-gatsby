import React, { useRef, useContext, Profiler } from "react";
import { Link } from "gatsby";

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

import Hero from '../components/hero';
import About from '../components/about';
import Projects from '../components/projects';
import Contact from '../components/contact';


const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const IndexPage = () => {
  const projectsRef = useRef();
  const projectsScroll = () => scrollToRef(projectsRef);
  const contactRef = useRef();
  const contactScroll = () => scrollToRef(contactRef);
  const aboutRef = useRef();
  const aboutScroll = () => scrollToRef(aboutRef);
  // const contactRef = useRef(null);
  // const executeContScroll = () => scrollToRef(contactRef);

  // TODO: dynamically render this stuff
  // const aboutRef = useRef(null);
  // const projectsRef = useRef(null);
  // const contactRef = useRef(null);
  // const scrollToAbout = () => scrollToRef(aboutRef);
  // const scrollToProjects = () => scrollToRef(projectsRef);
  // const scrollToContact = () => scrollToRef(contactRef);

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
          <div ref={aboutRef}>About
          </div>
          <About />
          <div ref={projectsRef}>Projects</div>
          <Projects />
          <div ref={contactRef}>Contact</div>
          <Contact />
          <Link to="/resume/">Go to Resume</Link> <br />
          <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
        </Layout>
  )
}

export default IndexPage
