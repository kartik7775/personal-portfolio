import React from "react";
import "./experience.css";
import { FiCheckCircle } from "react-icons/fi";

const Experience = () => {
  return (
    <section id="experience">
      <h5>Working knowledge</h5>
      <h2>My &nbsp; Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FiCheckCircle className="experience__details-icon" />
              <div>
                <h4>React.js</h4>
                <small className="text-light">Advance</small>
              </div>
            </article>

            <article className="experience__details">
              <FiCheckCircle className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Expert</small>
              </div>
            </article>

            <article className="experience__details">
              <FiCheckCircle className="experience__details-icon" />
              <div>
                <h4>HTML 5</h4>
                <small className="text-light">Expert</small>
              </div>
            </article>

            <article className="experience__details">
              <FiCheckCircle className="experience__details-icon" />
              <div>
                <h4>CSS 3</h4>
                <small className="text-light">Expert</small>
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
                <h4>Bootstrap</h4>
                <small className="text-light">Advance</small>
              </div>
            </article>

            <article className="experience__details">
              <FiCheckCircle className="experience__details-icon" />
              <div>
                <h4>Tailwind CSS</h4>
                <small className="text-light">Advance</small>
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
                <h4>Version Control</h4>
                <small className="text-light">Advance</small>
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
                <h4>Next.js</h4>
                <small className="text-light">Experienced</small>
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
                <h4>Firebase</h4>
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
                <h4>C++ | DSA</h4>
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
