// import PropType from 'prop-types';
import React from 'react';
import { SectionTitle } from '../utils/headings';

const About = (props) => (
    <section
      ref={props.aboutRef}
      style={{
        minHeight: `100%`,
        height: `auto`,
      }}
    >
      <SectionTitle title="About me" />
      <p>
        I have been fascinated by web design since I realized that I could use HTML to change the
        design of my blog in high school. In the years since, as I became a teacher and
        instructional designer, I found that in my projects there was usually something I was
        hoping to customize, something more I was wanting to build to make my idea work, and that
        coding was the best way to accomplish it. Now, my dream is to help other people make their
        ideas come to life.
      </p>
      <p>
        If I won the lottery, I'd probably spend (some of) the money on learning something new. I
        love taking classes and learning new things, and some of my learning endeavors over the
        years (aside from learning to code) have included math, Spanish, Japanese, and sewing.
      </p>
      <p>
        My other interests include fitness and nutrition, cooking, and cookie-decorating. As an
        adult, I have called Hawaii, Oregon, Canada, Japan, Florida, and New Mexico home. I
        currently live in beautiful Destin, Florida, where I am a proud military spouse and mom of
        two.
      </p>
      <p>
        Using the links below, you can view my work on GitHub, find me on LinkedIn, or email me.
      </p>

    </section>
)

export default About;