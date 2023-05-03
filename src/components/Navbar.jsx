import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import "../App.css"
import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <header>
      <img src={Logo} alt="logo" />
      <nav ref={navRef}>
        <a href="/#">Home</a>
        <a href="/#">Exercises</a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
};

export default Navbar;
