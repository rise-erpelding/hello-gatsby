import React from "react";
import { Link } from "gatsby";


const NavBar = () => {
  // const { projectsScroll } = this.context;
  // const { contactScroll } = this.context;

  // handleAbout = () => console.log('hello About');
  // const { aboutScroll } = this.context;
  // aboutScroll();

  

  function handleClick(e) {
    e.preventDefault();
    console.log('Click');
    // aboutScroll();
  }

  return (
    <ul style={{
      listStyle: `none`,
      display: `flex`,
      margin: `0`,
      padding: `0`,
      justifyContent: `flex-end`,
    }}>
      <li><button onClick={handleClick} onKeyDown={handleClick}>About</button></li>
      {/* <li><button onClick={handleProjects} onKeyDown={handleProjects}>Projects</button></li> */}
      <li><Link to="/resume/">Resume</Link></li>
      {/* <li><button onClick={handleContact} onKeyDown={handleContact}>Contact</button></li> */}
    </ul>
  )
}

export default NavBar;
