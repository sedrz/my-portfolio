import React from "react";

import { RiThumbUpFill } from "react-icons/ri";
import { RiFlashlightLine } from "react-icons/ri";
import { BsQuestionSquare } from "react-icons/bs";
import { ImDownload2 } from "react-icons/im";
import { AiOutlineGithub } from "react-icons/ai";

import { ImFacebook2 } from "react-icons/im";
import { ImTwitter } from "react-icons/im";
import { ImYoutube } from "react-icons/im";
import { ImLinkedin } from "react-icons/im";
import { ImInstagram } from "react-icons/im";

import "./main.css";

function Body() {
  return (
    <div className="Body grid-wrapper">
        {/* <div className=""> */}
      <div className="grid1">
        <h1 className="h1">Personal Info</h1>
        <p className="p3"> Name:</p>
        <p className="p2">Sue Raisianzadeh</p>
        <p className="p3">Phone:</p>
        <p className="p2">0212049836</p>
        <p className="p3">Email:</p>
        <p className="p2">Raisianz@gmail.com</p>
        <h1 className="hh4">About</h1>
        <p className="p4">Full Stack Web Developer.</p>
        <h4>Tech Skills:</h4>{" "}
        <p className="p4">
          {" "}
          HTML5, css3, Java Script, Reactjs, ISTQB, SQL, Postman, Heroku, Github, Adobe Dream
          weaver, Adobe Photoshop, visual studio. The capacity for structural
          and design thinking. Also I have Skills in cabling, socket handling and
          networking.
        </p>
      </div>
      <div className="grid2">
        <h1>
          {" "}
          <BsQuestionSquare /> What do I do?
        </h1>
        <p class="p1">
        Junior full stack web developer and Tech Enthusiast, and have a great passion for web development, I really enjoy improving my skills and becoming more experienced. 
        </p>

        <h1>
          {" "}
          <RiFlashlightLine /> Why hire me?
        </h1>
        <p class="p1">
          {" "}
          Enthusiastic, adaptive and organized person with a broad and special
          interest and great passion in developing and developing new skills.
          and experience with a certifications of Technology Product Development
          Essentials (Full Stack Web Development), combined with about 7 years
          experiences in computer workshop supervisor in high schools and love
          of computers, programming and networks makes me a suitable candidate.
          I do my best to succeed and I have confidence in my ability. I am a great team player and work perfectly in an agile working environment.
        </p>
        <h1 className="hh5">Download</h1>
        <p className="pp4">
          {" "}
          Need a printable version of my CV? Download it here{" "}
          <a href="cvSue Raisianzadeh.pdf" download>
            {" "}
            <ImDownload2 />
          </a>
        </p>
      </div>

      <div className="grid3">
        <h1>
          <RiThumbUpFill /> How do I do it?
        </h1>
        <p className="p1">
          {" "}
          I use agile methods in projects to increase the efficiency and
          collaborate better with my team. I Communicate effectively using
          positive and actionable feedback, reflects on what can be improved,
          open communication while striving to use technology to make a positive
          impact on the community around us.
        </p>

        <div className="Social">
          <h2 className="social2">Social</h2>
          {/* <a className="social2"  href="https://www.facebook.com/sedighe.raisianzade"><ImFacebook2 /></a> */}
          <a
            className="social2"
            href="https://www.linkedin.com/in/sue-raisianzadeh/"
          >
            <ImLinkedin />
          </a>
          {/* <a className="social2" href="https://twitter.com"><ImTwitter /></a>
    <a className="social2" href="https://instagram.com/"><ImInstagram /></a>
    <a className="social2" href="https://Youtube.com"><ImYoutube /></a> */}
          <a
            className="social2"
            href="https://github.com/sedrz?tab=repositories"
          >
            <AiOutlineGithub />
          </a>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}
export default Body;