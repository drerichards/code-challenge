import React from 'react';

const About = ({match}) => (
  <div>
    <h2>{match.params.categoryid}</h2>
  </div>
);

export default About;
