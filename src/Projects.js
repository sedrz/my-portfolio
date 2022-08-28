import React from "react";
import NavBar from "./NavBar.js";

import "./main.css";

function Projects() {
  return (
    <div className="projects">
      <NavBar />

      <div className="projects1">
        <h2 className="h2-projects">Projects</h2>

        <p className="p-projects">
          {" "}
          - My Portfolio blog : This is my portfolio which I did it from scratch, based on what I learnt through self-studying and some online or intensive courses.
          {" "}
          <a href="https://github.com/sedrz/my-portfolio">view my project here </a>
        </p>

        <p className="p-projects">
          During my studies and before and after that, I did some projects that I put in
          my Github account. And in the social section in my portfolio, I put
          the link. You can find explanations about them here which are located
          in my github account:{" "}

        </p>
          
        <p className="p-projects">
          {" "} 
          - A website about an Iranian music band: It is built with HTML5 and CSS3
          in 2019, I change something in css and page's design in 2021{" "}
          <a href="https://github.com/sedrz/music-band">view my project here</a>
        </p>
        <p className="p-projects">
          {" "}
          - A Calculator: It is built with Javascript and CSS3
          in 2019, I changed something on css3 in 2022 and put it on my Github{" "}
          <a href="https://github.com/sedrz/calculator">view my project here</a>
          <a href="https://sedrz.github.io/calculator/"></a>
        </p>
        <p className="p-projects">
          {" "} 
          - A website about online shopping: It is built with reactjs and using bootstrap. it is an short online course in 2021 and was about how to use bootstrap in reactjs.{" "}
          <a href="https://github.com/sedrz/shopping-web-.git">view my project here</a>
        </p>
        <p className="p-projects">
          {" "}
          - there are 2 repositories that contain 4 games. I built them in2021 with Javascript, and I push them on my Github in 2022. 
          <br />
          <a href="https://github.com/sedrz/minesweeper">view minesweeper here</a>
          <br />
          <a href="https://github.com/sedrz/games">view games here</a>
        </p> 
        <p className="p-projects">
          {" "}
          - Missionx: which I have done it for my final. it is about frontend
          was a part of a group project.{" "}
           <a href=" https://github.com/sedrz/MissionX">view my project here</a>
        </p>
        <p className="p-projects">
          {" "}
          - Missionx: my final group project at mission ready course. We have
          done the backend using Scale Grid Trial. We built the tables in SQL
          and Used Scale Grid to build the database. Since we were usising the
          trial version it is now expired, so I will use knex and SQLITE3 to
          rebuild the database.
          <br />
          <a href="https://github.com/sedrz/mission-x-frontend">
            view front-end project here{" "}
          </a>
          <br />
          <a href="https://github.com/sedrz/missionx-backend">
            view back-end project here{" "}
          </a>
        </p>
      </div>
      
    </div>
  );
}
export default Projects;