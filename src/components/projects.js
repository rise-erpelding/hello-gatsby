import React from 'react';
import { SectionTitle, SectionHeading } from '../utils/headings';

const Projects = (props) => (
    <section>
      <SectionTitle title="Projects" />
      <SectionHeading heading="FarmPicks" />
      <p>
        FarmPicks is a directory app that allows users seeking information about local farms
        to search and browse farms and get information about them. Users can also save farms
        to their favorites to revisit later, and be part of the community effort to improve
        existing information about farms.
      </p>
      <SectionHeading heading="Rabbit Hole" />
      <p>
        Rabbit Hole is a search engine that allows users to find educational podcasts. Users
        can listen to podcasts in the app, and also see links to Wikipedia articles that may
        be related to the podcast episode they are listening to. Users also have the option to
        search Wikipedia or click on links to other wikipedia articles inside the app, allowing
        for a user experience akin to &quot;falling down a rabbit hole.&quot;
      </p>
      <SectionHeading heading="GRE Quiz App" />
      <p>
        This is a quiz app built using JavaScript and jQuery. The app tests users’ knowledge of
        GRE vocabulary words via multiple-choice questions, giving examples of the words in a
        context similar to what a user might encounter in graduate-level studies.
      </p>
    </section>
  )

  export default Projects;
