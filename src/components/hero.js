import React from 'react';
import { SectionTitle } from '../utils/headings';

const Hero = (props) => (
    <section
      style={{
        minHeight: `100vh`,
        height: `auto`,
      }}
    >
      <SectionTitle title="Hi! I'm Risé." />
      <p>
        I am a full-stack JavaScript developer proficient in ES6, React, Node, and PostgreSQL with
        six years’ experience in STEM education. I am passionate about learning technologies and
        online learning.
      </p>
    </section>
)

export default Hero;