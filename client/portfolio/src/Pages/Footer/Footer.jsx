import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsappSquare } from "react-icons/fa";
import Profile from "../../assets/images/profile-pic.png";
import { Avatar } from "@mui/material";
const Footer = () => {
  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/gopikannan-k", "_blank");
  };

  return (
    <div className="d-flex justify-content-between mt-3">
      <div className="d-flex justify-content-center align-items-center fnt-light-color">
        <span className="me-2">By:</span> <Avatar src={Profile} sx={{width:"24px",height:"24px"}}/>{" "}
        <span className="ms-1 ">Gopikannan K</span>
      </div>
      <div className="d-flex gap-3">
        <span>
          <MdOutlineEmail />
          <span className="fnt-light-color f-12 ms-2">
            gopik.kumaresan@gmail.com
          </span>
        </span>
        <span onClick={handleLinkedInClick} style={{ cursor: "pointer" }}>
          <FaLinkedin />
          <span className="fnt-light-color f-12 ms-2">
            www.linkedin.com/in/gopikannan-k
          </span>
        </span>
        <span>
          <FaWhatsappSquare />
          <span className="fnt-light-color f-12 ms-2">+91 99763 14640</span>
        </span>
      </div>
    </div>
  );
};

export default Footer;
