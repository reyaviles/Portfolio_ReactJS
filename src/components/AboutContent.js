import "./AboutContentStyles.css";

import React from "react";
import { Link } from "react-router-dom";

import abt1 from "../assets/IMG-7375.JPG";
import abt2 from "../assets/cafe de paz.jpg";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h2>Who is 'Rey/Rey'?</h2>
        <p>
          My curious nature earned me the nickname 'Rey-Rey' at an early age. My
          family would say that they thought there were two of me given how I'd
          bounce around from place to place. While I certainly don't have as
          much energy these days, I still embrace this name and its origin as a
          symbol for my life philosophy:
        </p>
        <p>'Duality' is secretly 'unity'. </p>
        <br />
        <h2>What can you expect from my work?</h2>
        <p>
          I consider my work to be interdisciplinary. It's rare for stories to
          have only 1 dimension, and, as a designer, I expect the stories I tell
          to also contain multitudes.
        </p>
        <p>
          Expect thorough, yet <b>bold</b> work. My diversity of skills allows
          me to bring a refreshing take in any work situation. Every opportunity
          is a chance to learn something new and connect it to previous
          knowledge. I hope you can appreciate that.
        </p>
        <br />
        <h2>Why hire me?</h2>
        <p>
          I come from a hospitality background. I've worked as a
          barista/bartender/server/teacher/you-name-it. My work isn't purely
          transactional, it's an experience for both of us. I'm looking for
          opportunities that have challenging projects with an easy-going team.
          I'm looking for that perfect fit. I hope you are, too.
        </p>
        <Link to="/contact">
          <button className="btn">Let's connect.</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-ctn">
          <div className="img-stack top">
            <img src={abt1} alt="true" className="img" />
          </div>
          <div className="img-stack bottom">
            <img src={abt2} alt="true" className="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
