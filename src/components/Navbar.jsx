import "./NavbarStyles.css";

import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  //These states detect clicks for mobile menu view. it alternates bt hamburger menu & esc icon
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  //This state looks for scrolls to determine if the header overlay should be active or not
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to={"/"}>
        <h1>ReyRey</h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/dev">Dev</Link>
        </li>
        <li>
          <Link to="/design">Design</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};
export default Navbar;
