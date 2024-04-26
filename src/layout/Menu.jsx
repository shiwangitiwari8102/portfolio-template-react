import React from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Menu = ({ isVisible }) => {
  console.log("Menu component rendered");

  return (
    <ul className={`navigation onepage text-white ${isVisible ? "visible" : "hidden"}`}>
      <li>
        <ScrollLink to="home" smooth={true} duration={100}>Home</ScrollLink>
      </li>
      <li>
        <ScrollLink to="about" smooth={true} duration={100}>About</ScrollLink>
      </li>
      <li>
        <ScrollLink to="resume" smooth={true} duration={100}>Resume</ScrollLink>
      </li>
      <li>
        <ScrollLink to="services" smooth={true} duration={100}>Services</ScrollLink>
      </li>
      <li>
        <ScrollLink to="skills" smooth={true} duration={100}>Skills</ScrollLink>
      </li>
      <li>
        <ScrollLink to="portfolio" smooth={true} duration={100}>Projects</ScrollLink>
      </li>
      <li>
        <ScrollLink to="testonmial" smooth={true} duration={100}>Testimonial</ScrollLink>
      </li>
      <li>
        <ScrollLink to="contact" smooth={true} duration={100}>Contact</ScrollLink>
      </li>
    </ul>
  );
};

export default Menu;
