import React from "react";
import "./about.css";
import ME1 from "../../assets/ME1.jpg";
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
              <small>15+ Completed</small>
            </article>
          </div>

          <p>
            Hi, Nice to have you here! You can{" "}
            <span className="highlighted">untilt</span> my pic. <br />
            &nbsp; &nbsp; You're reading about one of the best in business, an
            upcoming Frontend Developer from India. I take great pride in my
            work for all projects I complete with utmost perfection and
            reliability in functionality. <br />
            &nbsp; &nbsp;{" "}
            <span className="highlighted">Here's something personal:</span> I
            have just recently embarked on this path of progrmaming, which of
            course feels like I've finally found my calling. I have been jumping
            through various career options and done some other exciting things
            in life. But the satisfaction of writing code to create and design
            web-applications is on another level. I, welcome you to my world of
            trendy and useful web-applications.
            <br />
            &nbsp; &nbsp; Some of my <strong>hobbies</strong>: &nbsp;
            Programming, Movies & Shows, Music, Food, Table Tennis, Travelling,
            Photography, etc.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
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
