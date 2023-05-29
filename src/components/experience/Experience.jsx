import React from "react";
import "./experience.css";
import { FiCheckCircle } from "react-icons/fi";

const Experience = () => {
  return (
    <section id="experience">
      <h5>
        I don't know what you want. If you are looking for ransom, I can tell
        you I don't have money.
        <br />
        But what{" "}
        <span className="highlighted">
          I do have are a very particular set of skills,
        </span>{" "}
        skills I have acquired over a very long career.
        <br />
        Skills that make me a <span className="highlighted">
          useful asset
        </span>{" "}
        for people like you.
      </h5>

      <h2>My &nbsp; Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FiCheckCircle className="experience__details-icon" />
              <div>
                <h4>React.js</h4>
                <small className="text-light">Expert</small>
              </div>
            </article>

            <article className="experience__details">
              <FiCheckCircle className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Advance</small>
              </div>
            </article>

            <article className="experience__details">
              <FiCheckCircle className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Expert</small>
              </div>
            </article>

            <article className="experience__details">
              <FiCheckCircle className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Advance</small>
              </div>
            </article>

            <article className="experience__details">
              <FiCheckCircle className="experience__details-icon" />
              <div>
                <h4>jQuery</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <FiCheckCircle className="experience__details-icon" />
              <div>
                <h4>React Bootstrap</h4>
                <small className="text-light">Expereienced</small>
              </div>
            </article>
          </div>
        </div>

        {/* break */}

        <div className="experience__other">
          <h3>Other Essential Expertise</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FiCheckCircle className="experience__details-icon" />
              <div>
                <h4>Git Version Control System</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <FiCheckCircle className="experience__details-icon" />
              <div>
                <h4>Next.js</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <FiCheckCircle className="experience__details-icon" />
              <div>
                <h4>Redux Toolkit</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <FiCheckCircle className="experience__details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <FiCheckCircle className="experience__details-icon" />
              <div>
                <h4>Soft Skills</h4>
                <small className="text-light">Advance</small>
              </div>
            </article>

            <article className="experience__details">
              <FiCheckCircle className="experience__details-icon" />
              <div>
                <h4>C++ / DSA</h4>
                <small className="text-light">Intermidiate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
