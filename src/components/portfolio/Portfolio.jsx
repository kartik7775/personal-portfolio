import React from "react";
import "./portfolio.css";
// import IMG from "../../assets/projects.jpg";
import IMG1 from "../../assets/imagenerator.png";
import IMG2 from "../../assets/getprompts.png";
import IMG3 from "../../assets/kred-bank.png"
import IMG4 from "../../assets/just-did-it.png";
import IMG5 from "../../assets/cafe-ratik.png";
import IMG6 from "../../assets/fungram.png";

const data = [
    {
        id: 1,
        image: IMG1,
        title: "imagenerator",
        info: "AI Powered Image Generator with given promtps, A Full Stack Application",
        github: "https://github.com/kartik7775/imagenerator",
        demo: "https://ai-imagenerator.vercel.app/",
    },
    {
        id: 2,
        image: IMG2,
        title: "getPrompts",
        info: "A Full Stack CRUD Applicaiton, AI Prompts Sharing Web Application, Share your imagination with the community.",
        github: "https://github.com/kartik7775/getPrompts",
        demo: "https://get-prompts.vercel.app/",
    },
    {
        id: 3,
        image: IMG3,
        title: "Kred Bank",
        info: "A Front-end project for a Modern Day Banking Website Promotion",
        github: "https://github.com/kartik7775/Kred-Bank",
        demo: "https://kred-bank.netlify.app/",
    },
    {
        id: 4,
        image: IMG4,
        title: "Task Manager",
        info: "'Just Did It !' is a Task Manager web aplication built with Next.js and TypeScript",
        github: "https://github.com/kartik7775/just-did-it",
        demo: "https://just-did-it.netlify.app/",
    },
    
    {
        id: 5,
        image: IMG5,
        title: "Café Ratik",
        info: "A Front-end project of a popular resto - café website to explore menu and book table/event.",
        github: "https://github.com/kartik7775/Cafe-Ratik",
        demo: "https://cafe-ratik.netlify.app/",
    },
    {
        id: 6,
        image: IMG6,
        title: "FunGram",
        info: "A Front-end project, FunGram is a mockup, a social media application like Instagram, etc.",
        github: "https://github.com/kartik7775/Fungram",
        demo: "https://fungram-social-media.netlify.app/",
    },
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
                                    className="btn"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    View Code
                                </a>
                                <a
                                    href={demo}
                                    className="btn"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Checkout Live
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
