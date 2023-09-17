import React from "react";
import "./experience.css";
import { FiCheckCircle } from "react-icons/fi";
import {
    html,
    css,
    js,
    reactjs,
    tailwindcss,
    bootstrap,
    jquery,
    firebase,
    mongodb,
    git,
    github,
    cpp,
    uiux,
    figma,
    nextjs,
    ts,
} from "./index";

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
                            <div className="experience__skills">
                                <img src={reactjs} alt="react logo" />
                                <h4>React.js</h4>
                                <FiCheckCircle className="experience__details-icon" />
                            </div>
                        </article>

                        <article className="experience__details">
                            <div className="experience__skills">
                                <img src={js} alt="javascript logo" />
                                <h4>JavaScript</h4>
                                <FiCheckCircle className="experience__details-icon" />
                            </div>
                        </article>

                        <article className="experience__details">
                            <div className="experience__skills">
                                <img src={html} alt="html logo" />
                                <h4>HTML 5</h4>
                                <FiCheckCircle className="experience__details-icon" />
                            </div>
                        </article>

                        <article className="experience__details">
                            <div className="experience__skills">
                                <img src={css} alt="css logo" />
                                <h4>CSS 3</h4>
                                <FiCheckCircle className="experience__details-icon" />
                            </div>
                        </article>

                        <article className="experience__details">
                            <div className="experience__skills">
                                <img src={jquery} alt="jquery logo" />
                                <h4>jQuery</h4>
                                <FiCheckCircle className="experience__details-icon" />
                            </div>
                        </article>

                        <article className="experience__details">
                            <div className="experience__skills">
                                <img src={bootstrap} alt="bootstrap logo" />
                                <h4>Bootstrap</h4>
                                <FiCheckCircle className="experience__details-icon" />
                            </div>
                        </article>

                        <article className="experience__details">
                            <div className="experience__skills">
                                <img
                                    src={tailwindcss}
                                    alt="tailwind css logo"
                                />
                                <h4>Tailwind CSS</h4>
                                <FiCheckCircle className="experience__details-icon" />
                            </div>
                        </article>

                        <article className="experience__details">
                            <div className="experience__skills">
                                <img src={uiux} alt="ui ux design" />
                                <h4>UI UX Design</h4>
                                <FiCheckCircle className="experience__details-icon" />
                            </div>
                        </article>

                        <article className="experience__details">
                            <div className="experience__skills">
                                <img src={figma} alt="figma" />
                                <h4>Figma</h4>
                                <FiCheckCircle className="experience__details-icon" />
                            </div>
                        </article>
                    </div>
                </div>

                {/* break */}

                <div className="experience__other">
                    <h3>Other Essential Expertise</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <div className="experience__skills">
                                <img src={git} alt="git logo" />
                                <h4>Git</h4>
                                <FiCheckCircle className="experience__details-icon" />
                            </div>
                        </article>

                        <article className="experience__details">
                            <div className="experience__skills">
                                <img src={github} alt="github logo" />
                                <h4>GitHub</h4>
                                <FiCheckCircle className="experience__details-icon" />
                            </div>
                        </article>

                        <article className="experience__details">
                            <div className="experience__skills">
                                <img src={nextjs} alt="next.js logo" />
                                <h4>Next.js</h4>
                                <FiCheckCircle className="experience__details-icon" />
                            </div>
                        </article>

                        <article className="experience__details">
                            <div className="experience__skills">
                                <img src={ts} alt="typescript logo" />
                                <h4>TypeScript.js</h4>
                                <FiCheckCircle className="experience__details-icon" />
                            </div>
                        </article>

                        <article className="experience__details">
                            <div className="experience__skills">
                                <img src={mongodb} alt="mongodb logo" />
                                <h4>MongoDB</h4>
                                <FiCheckCircle className="experience__details-icon" />
                            </div>
                        </article>

                        <article className="experience__details">
                            <div className="experience__skills">
                                <img src={firebase} alt="firebase logo" />
                                <h4>Firebase</h4>
                                <FiCheckCircle className="experience__details-icon" />
                            </div>
                        </article>

                        <article className="experience__details">
                            <div className="experience__skills">
                                <img src={cpp} alt="logo" />
                                <h4>C++ | DSA</h4>
                                <FiCheckCircle className="experience__details-icon" />
                            </div>
                        </article>

                        <article className="experience__details">
                            <div className="experience__skills">
                                <h4>Redux Toolkit</h4>
                                <FiCheckCircle className="experience__details-icon" />
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
