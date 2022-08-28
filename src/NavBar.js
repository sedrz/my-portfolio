import React from "react";
// import { Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useState } from "react";

import { MdSchool } from "react-icons/md";
import { TiHome } from "react-icons/ti";
import { ImDownload2 } from "react-icons/im";
import { CgStack } from "react-icons/cg";

import "./main.css";

const NavBar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <nav role="navigation" aria-label="main navigation">
      <div className="nav">
        <a
          role="navigation"
          className={` ${isOpen && "is-active"}`}
          aria-label="menu"
          aria-expanded="false"
          onClick={() => setOpen(!isOpen)}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>

        <div className="allnav">
          <div className={`nav ${isOpen && "is-active"}`} >
            <ul className="NavBar">
              <li className="NavBarli">
                <NavLink className="Nav1" activeClassName="is-active" to="/">
                  <TiHome />
                  Home
                </NavLink>
              </li>
              <li className="NavBarli">
                <a
                  className="Nav2"
                  activeClassName="is-active"
                  href="https://drive.google.com/file/d/1a5SnjYJ-rvSfdibVTdIqVoDIurbVxrWW/view?usp=sharing"
                  target="_blank"
                  role="button"
                >
                  <ImDownload2 /> My CV
                </a>
              </li>
              <li className="NavBarli">
                <NavLink
                  className="Nav3"
                  activeClassName="is-active"
                  to="/AboutMe"
                  role="button"
                >
                  
                  <MdSchool />
                  About Me
                </NavLink>
              </li>
              <li className="NavBarli">
                <NavLink
                  className="Nav4"
                  activeClassName="is-active"
                  to="/Projects"
                  role="button"
                >
                  <CgStack />
                  Projects
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;