//Reference the Project.js to pull each JS file.

import React from "react";
import Project from "./Project";

const projects = [
  {
    id: 1,
    title: "Tech Blog",
    languages: "html, handlebars, js",
    packages: "bcrypt, connect-session-sequelize, dotenv, Express.js, express-handlebars, express-session, heroku, mysql2, sequelize",
    image: "/img/techblog.png",
    description: "Allows you to edit and post blogs. You can also leave comments on your own blog or the blogs of others.",
    repo: "https://github.com/sabrtraveler/my-online-blog-tech-it-out-ohya",
    live: "https://my-online-blog-tech-it-out.herokuapp.com/",
  },
  {
    id: 4,
    title: "Note Taker App",
    languages: "html, css, js",
    packages: "Express.js, Generate Unique IDs",
    image: "/img/noted.png",
    description: "Write extensive notes and keep track of tasks, then save them for later reading or deletion.",
    repo: "https://github.com/sabrtraveler/got-notes-ohya",
    live: "https://got-notes-ohya.herokuapp.com/",
  },
  {
    id: 5,
    title: "Basic Portfolio",
    languages: "html, css",
    packages: "none",
    image: "/img/work-portfolio.png",
    description: "A basic work portfolio that holds my projects for the full stack development class.",
    repo: "https://github.com/sabrtraveler/my-portfolio-is-bomb-ohya",
    live: "https://sabrtraveler.github.io/my-portfolio-is-bomb-ohya/",
  },
  {
    id: 6,
    title: "Weather Dashboard",
    languages: "html, css, js",
    packages: "none",
    image: "/img/weather-app.png",
    description: "A basic app that allows you to see the weather for a specific searched or saved city.",
    repo: "https://github.com/sabrtraveler/hows-the-weather-over-there-ohya",
    live: "https://sabrtraveler.github.io/hows-the-weather-over-there-ohya/",
  },
];

function Portfolio() {
  return (
    <div>
      <p className="content is-medium">Portfolio</p>
      <hr />

      <Project projects={projects} />
    </div>
  );
}

export default Portfolio;
