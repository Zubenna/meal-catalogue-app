import React from 'react';
import Style from '../styles/AboutStyle.module.css';

const About = () => (
  <div className={Style.setAbout}>
    <div>
      <h2 className={Style.headerColor}>About Dezyno Restaurant Recipe</h2>
    </div>
    <div className={Style.aboutText}>
      <p>
        DEZYNO RESTAURANT is the first restaurant located in Eliowhani city county.
        This restaurant was established in 1998. We are specialist in serving delicious,
        healthy and organic food. We care so much for your health.
        That is why our dieticians work so hard to ensure that you
        eat healthy meals in our restaurant. Our management ensures
        that quality is maintained always Our staff are well taken care
        of to ensure that they serve you well.
      </p>
    </div>
  </div>
);

export default About;
