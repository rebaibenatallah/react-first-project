import React, { Fragment } from "react";
import { about } from "../data/dummydata";
import Heading from "../common/Heading";

function About() {
  return (
    <>
      <section className="about">
        <div className="container flex">
          {about.map((val, i) => (
            <Fragment key={i}>
              <div className="left">
                <img src={val.cover} alt="" />
              </div>
              <div className="right">
                <Heading title="about me" />
                <p>{val.desc}</p>
                <p>{val.desc1}</p>
                <button>Download CV</button>
                <button className="primeryBtn">Download CV</button>
              </div>
            </Fragment>
          ))}
        </div>
      </section>
    </>
  );
}

export default About;
