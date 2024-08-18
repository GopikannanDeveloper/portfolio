import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsappSquare } from "react-icons/fa";

const Footer = () => {
  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/gopikannan-k", "_blank");
  };

  return (
    <div className="d-flex gap-3">
      <span>
        <MdOutlineEmail />
        <span className="fnt-light-color f-12 ms-2">gopik.kumaresan@gmail.com</span>
      </span>
      <span onClick={handleLinkedInClick} style={{ cursor: "pointer" }}>
        <FaLinkedin />
        <span className="fnt-light-color f-12 ms-2">www.linkedin.com/in/gopikannan-k</span>
      </span>
      <span>
      <FaWhatsappSquare />
        <span className="fnt-light-color f-12 ms-2">+91 99763 14640</span>
      </span>
    </div>
  );
};

export default Footer;
