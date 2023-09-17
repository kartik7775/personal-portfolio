import React from "react";
import "./about.css";
import ME1 from "../../assets/kartik-new.jpeg"
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About &nbsp; Me</h2>

            <div className="container about__container">
                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className="about__icon" />
                            <h5>Experience</h5>
                            <small>1+ Years of Web Development</small>
                        </article>

                        <article className="about__card">
                            <FiUsers className="about__icon" />
                            <h5>Clients</h5>
                            <small>World-Wide</small>
                        </article>

                        <article className="about__card">
                            <VscFolderLibrary className="about__icon" />
                            <h5>Projects</h5>
                            <small>10+ Completed</small>
                        </article>
                    </div>

                    <p>
                        Hi, Nice to have you here! <br />
                        &nbsp; &nbsp; I'm a Front-end developer with skills in
                        React.js, JavaScript, HTML5, CSS3, jQuery, etc. I am
                        passionate about creating user-friendly and responsive
                        web applications. I have experience in designing
                        efficient UI layouts and developing user interactive
                        sites using modern technologies like React.js and
                        Next.js. I am dedicated to writing clean, maintainable,
                        and easy-to-understand code. I am also familiar with
                        popular front-end development tools, frameworks and
                        libraries like TailwindCSS, Bootstrap, Redux, and
                        GitHub. I am excited to continue learning and growing as
                        a developer while contributing to innovative projects.
                        <br />
                        <br />
                        &nbsp; &nbsp;{" "}
                        <span className="highlighted">
                            Here's something personal:
                        </span>{" "}
                        I have just recently embarked on this path of
                        progrmaming, which of course feels like I've finally
                        found my calling. I have been jumping through various
                        career options and done some other exciting things in
                        life. But the satisfaction of writing code to create and
                        design web-applications is on another level.
                        <br />
                        &nbsp; &nbsp; Some of my <strong>interests</strong>:
                        &nbsp; Learning, Coding, Designing, Bikes, Table Tennis, Photography, etc.
                    </p>

                    <a href="#contact" className="btn btn-primary">
                        Let's Chat
                    </a>
                </div>

                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME1} alt="my_image" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
