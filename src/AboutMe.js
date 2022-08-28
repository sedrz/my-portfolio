import React from "react";
import NavBar from "./NavBar.js";
import developer1 from "./Assets/developer1.jpg";
import "./main.css";
import { MdDeveloperBoard } from "react-icons/md";

function AboutMe() {
  return (
    <div className="AboutMe">
      <img className="img" src={developer1} alt="Computer" />
      <div className="navme-position">
        <NavBar />
      </div>
      <div>
        <h1 className="h-me2">About Me</h1>
        <p className="p-me2">
          
          I am a full stack software developer <b>with a passion for technology.</b> I
          used to be a computer science teacher in my home country, Iran, and was
          also supervising computer workshops in high schools. As the workshop
          supervisor  <b>I sat up 2 computer workshops in a high school from scratch </b> 
          including cabling, socket handling and networking, windows
          Installation and network configuration in all computers. Parts of my
          duties were to do troubleshooting on PCs as well as repairing desktop
          computers.<br /> Now, after more than 5 years as a baker in New Zealand, I
          tried to do something for my passion. So I did <b>a course in full stack
          web development</b> which was held by Mission Ready in Otago University.
          It was a 3 months hands on, intensive course working in a team
          environment and I graduated with a certifications of Technology in
          Product Development Essentials <b>(NZQA-L4) from Otago Polytechnic</b> .
          <br />After finishing my course, I continued to learn and improve my knowledge and skills through self-study. 
          <br />I completed two online courses in <b>ISTQB</b>. I am preparing myself to participate in the international ISTQB exam. 
          <br />In addition, I am taking another online course on udemy, the subject of which is <b>web development from zero to master</b>.  During this course, I made my blog portfolio more complete.
          <br />
</p>
      </div>
    </div>
  );
}
export default AboutMe;