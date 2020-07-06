// import PropType from 'prop-types';
import React from 'react';
import { SectionTitle, ResHeading, ResSectionHeading } from '../utils/headings';

const Resume = () => (
<main>
      <SectionTitle title="Resume" />
      <ResHeading heading="Summary" />
      <p>
        I am a full-stack JavaScript developer proficient in ES6, React, Node, and PostgreSQL
        with six years’ experience in STEM education. I am passionate about learning technologies
        and online learning.
      </p>
      <ResHeading heading="Web Development Skills" />
      <ul>
        <li>
          Front-End: JavaScript, React, React Router, Enzyme, jQuery, HTML5, CSS3
        </li>
        <li>
          Back-End: Node.js, Express.js, PostgreSQL, Mocha and Chai, RESTful APIs
        </li>
        <li>
          Dev. Tools: Git, GitHub, Chrome Dev Tools, Heroku
        </li>
      </ul>
      <ResHeading heading="Recent Projects" />
      <ResSectionHeading heading="FarmPicks" />
      <ul>
        <li>
          Full-stack web app that enables users to get information about local small farms,
          add/update information about existing farms, and save farms to a favorites list.
          Project for Bloc web development program.
        </li>
        <li>
          Tech: React, React Router, Node.js, Express.js, JavaScript(ES6), CSS3, PostgreSQL,
          Jest, Mocha, Chai
        </li>
      </ul>
      <ResSectionHeading heading="Rabbit Hole" />
      <ul>
        <li>
          jQuery web app that uses ListenNotes and Dandelion APIs to enable users to search
          podcasts, listen to selected episodes, and explore related Wikipedia articles.
          Project for Bloc web development program.
        </li>
        <li>
          Tech: JavaScript(ES6), HTML5, CSS3, jQuery
        </li>
      </ul>
      <ResSectionHeading heading="GRE Vocabulary Quiz" />
      <ul>
        <li>
          jQuery web app that helps users to study English vocabulary words that may appear
          on the Verbal Reasoning section of the GRE and see the words in context in popular
          literature and current publications. Project for Bloc web development program.
        </li>
        <li>
          Tech: JavaScript(ES6), HTML5, CSS3, jQuery
        </li>
      </ul>
      <ResHeading heading="Experience" />
      <ResSectionHeading
        heading="Valiant Childbirth | Instructional Designer | July 2017 - June 2019"
      />
      <ul>
        <li>
          Developed, launched, and maintained an online, six-part childbirth education course
          for expectant families, working with a subject-matter expert.
        </li>
      </ul>
      <ResSectionHeading
        heading="318th Special Operations Squadron, USAF | Lead Spouse, Key Spouse Mentor | October 2015 - May 2019"
      />
      <ul>
        <li>
          Led and mentored a volunteer team of 5 key spouses to coordinate family outreach,
          fundraising, and social events to support families of a 125-person active duty special
          operations flying unit.
        </li>
      </ul>
      <ResSectionHeading
        heading="24/7 Teach | Intern | May 2015 - August 2015"
      />
      <ul>
        <li>
          Trained 4-person team in the creation of original financial literacy learning content
          and animated videos.
        </li>
      </ul>
      <ResSectionHeading
        heading="Navarre High School | Teacher, Virtual Learning Facilitator | August 2011 - June 2014"
      />
      <ul>
        <li>
          Developed and delivered the high school math curriculum.
        </li>
        <li>
          Maintained communication with students, parents, administrators, and guidance counselors
          to modify instruction to accommodate students’ learning needs.
        </li>
        <li>
          Trained peers to administer online credit recovery system for students.
        </li>
      </ul>
      <ResHeading heading="Education" />
      <ResSectionHeading heading="Bloc | Immersive Web Development Program | Expected Graduation Date: August 2020" />
      <ul>
        <li>
          Currently completing intensive full-stack web-development course, learning HTML and CSS,
          JavaScript, jQuery, React, Node.js, Express, PostgreSQL, and data structures and
          algorithms, developing projects while keeping in mind agile best practices, web
          accessibility, mobile-first development, and test-driven development.
        </li>
      </ul>
      <ResSectionHeading heading="Florida State University | M.S., Instructional Systems and Learning Technology | GPA: 3.98" />
      <ul>
        <li>
          Completed 36-credit-hour online master’s degree program, learning about instructional
          design, learning psychology, emerging learning technologies, and performance improvement.
        </li>
      </ul>
      <ResSectionHeading heading="University of Portland | B.A., Sociology | GPA: 3.6" />
      <ul>
        <li>
          Completed 120-credit-hour undergraduate degree program, learning about social research,
          patterns, and processes.
        </li>
      </ul>
    </main>
)

export default Resume;