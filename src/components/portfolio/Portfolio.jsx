import React from "react";
import "./portfolio.css";
// import IMG from "../../assets/projects.jpg";
import IMG1 from "../../assets/imagenerator.png";
import IMG2 from "../../assets/getprompts.png";
import IMG3 from "../../assets/guessthenumber.png";
import IMG4 from "../../assets/quizzeroma.png";
import IMG5 from "../../assets/disney.png";
// import IMG6 from "../../assets/cars.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "imagenerator",
    info: "AI Powered Image Generator Full Stack Application",
    github: "https://github.com/kartik7775/imagenerator",
    demo: "https://imagenerator-ai.vercel.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "getPrompts",
    info: "AI Prompts Sharing Web Application",
    github: "https://github.com/kartik7775/getPrompts",
    demo: "https://get-prompts.vercel.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Guess The Number",
    github: "https://github.com/kartik7775/Guess-The-Number-Game",
    info: "A fun for all, number geussing game application.",
    demo: "https://numberguessing.vercel.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Quizzeroma",
    info: "A Quiz / Trivia Game Application",
    github: "https://github.com/kartik7775/quizzeroma",
    demo: "https://quizzeroma.netlify.app/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Disney+",
    info: "Website Clone (currently working on)",
    github: "https://github.com/kartik7775",
    demo: "https://dribbble.com/kartikN775/collections",
  },
  // {
  //   id: 6,
  //   image: IMG6,
  //   title: "Car Showroom",
  //   info: "Landing Page",
  //   github: "https://github.com/kartik7775",
  //   demo: "https://dribbble.com/kartikN775/collections",
  // },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Most Recently Completed Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, info, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt="title" />
              </div>

              <div className="title-info">
                <h3>{title}</h3>
                <p>{info}</p>
              </div>

              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn border"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Code
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
