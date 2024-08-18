import React from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineWorkHistory} from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { Avatar } from "@mui/material";
import Profile from "../assets/images/profile-pic.png"
const Navbar = () => {
  return (
    <div className="row">
        <div className="d-flex gap-4 justify-content-end  align-items-center col-2">
        <Avatar alt="Remy Sharp" src={Profile}/>
    </div>
      <nav className="col-8 d-flex gap-4 justify-content-lg-end justify-content-around align-items-center WorkSans-Regular">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `d-flex ms-3 ms-lg-0 gap-1 align-items-center nav-link ${
              isActive ? "active" : ""
            }`
          }
        >
          <i className="d-block d-lg-none material-symbols-outlined icons-nav fnt-nav-color">
            home
          </i>
          <div className="d-lg-block d-none fnt-nav-link fnt-nav-color">
            Home
          </div>
        </NavLink>
        <NavLink
          to="about"
          className={({ isActive }) =>
            `d-flex gap-1 align-items-center nav-link   ${
              isActive ? "active" : ""
            }`
          }
        >
          <span class="d-block d-lg-none material-symbols-outlined icons-nav fnt-nav-color">
          <MdOutlineWorkHistory />
          </span>
          <div className="d-lg-block d-none fnt-nav-link fnt-nav-color">
            About
          </div>
        </NavLink>
        <NavLink
          to="myTech"
          className={({ isActive }) =>
            ` d-flex gap-1 align-items-center nav-link ${
              isActive ? "active" : ""
            }`
          }
        >
          <span className="d-block d-lg-none material-symbols-outlined icons-nav fnt-nav-color">
          <GiSkills />
          </span>
          <div className="d-lg-block d-none fnt-nav-link  fnt-nav-color text-nowrap">
            Tech Stack
          </div>
        </NavLink>
        <NavLink
          to="projects"
          className={({ isActive }) =>
            ` d-flex gap-1 align-items-center nav-link ${
              isActive ? "active" : ""
            }`
          }
        >
          <span className="d-block d-lg-none material-symbols-outlined icons-nav fnt-nav-color">
            settings
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
