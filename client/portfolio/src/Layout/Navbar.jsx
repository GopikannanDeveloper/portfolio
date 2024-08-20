import React from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineWorkHistory } from "react-icons/md";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { Avatar } from "@mui/material";
import Profile from "../assets/images/profile-pic.png";
import Home from "../assets/images/homeIcon.png";
import About from "../assets/images/workExperience.png";
import Skills from "../assets/images/skills.png";
import Projects from "../assets/images/project.png";

const Navbar = () => {
  return (
    <div className="row">
      <div className="d-lg-block d-none col-2">
        <div className=" d-flex gap-lg-4 gap-2 justify-content-end  align-items-center mt-2 ">
          <Avatar
            src={Profile}
            sx={{ width: 56, height: 56 }}
          />
        </div>
      </div>
      <nav className="col-8 d-flex gap-lg-4 gap-4 ms-4 ms-lg-1 justify-content-lg-end justify-content-center align-items-center WorkSans-Regular">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `d-flex ms-5 ms-lg-0 gap-1 align-items-center nav-link ${
              isActive ? "chip active active" : "chip"
            }`
          }
        >
          <i className="d-block d-lg-none material-symbols-outlined icons-nav fnt-nav-color">
            <Avatar sx={{ backgroundColor: "white" }}>
              <img src={Home} style={{ height: "24px", width: "24px" }} />
            </Avatar>
          </i>
          <div className="d-lg-block d-none fnt-nav-link fnt-nav-color">
            Home
          </div>
        </NavLink>
        <NavLink
          to="about"
          className={({ isActive }) =>
            `d-flex gap-1 align-items-center nav-link   ${
               isActive ? "chip active active" : "chip"
            }`
          }
        >
          <span class="d-block d-lg-none material-symbols-outlined icons-nav fnt-nav-color">
            <Avatar sx={{ backgroundColor: "white" }}>
              <img src={About} style={{ height: "24px", width: "24px" }} />
            </Avatar>
          </span>
          <div className="d-lg-block d-none fnt-nav-link fnt-nav-color">
            About
          </div>
        </NavLink>
        <NavLink
          to="myTech"
          className={({ isActive }) =>
            ` d-flex gap-1 align-items-center nav-link ${
               isActive ? "chip active active" : "chip"
            }`
          }
        >
          <span className="d-block d-lg-none material-symbols-outlined icons-nav fnt-nav-color">
            <Avatar sx={{ backgroundColor: "white" }}>
              <img src={Skills} style={{ height: "24px", width: "24px" }} />
            </Avatar>
          </span>
          <div className="d-lg-block d-none fnt-nav-link  fnt-nav-color text-nowrap">
            Tech Stack
          </div>
        </NavLink>
        <NavLink
          to="projects"
          className={({ isActive }) =>
            ` d-flex gap-1 align-items-center nav-link ${
              isActive ? "chip active active" : "chip"
            }`
          }
        >
          <span className="d-block d-lg-none material-symbols-outlined icons-nav fnt-nav-color">
            <Avatar sx={{ backgroundColor: "white" }}>
              <img src={Projects} style={{ height: "24px", width: "24px" }} />
            </Avatar>
          </span>
          <span className="d-lg-block d-none fnt-nav-link  fnt-nav-color">
            Projects
          </span>
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
