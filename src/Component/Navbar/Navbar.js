import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const [Mobile, setMobile] = useState(false);
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="start">
          <li>
            <img
              src="https://dopniceu5am9m.cloudfront.net/static/assets/230705/logoX1.svg"
              className="brand-logo"
            />
          </li>
        </Link>

        <ul
          className={Mobile ? "nav-links-mobile" : "nav-links"}
          onClick={() => setMobile(false)}
        >
          <Link to="/project" className="about">
            <li>Product</li>
          </Link>
          <Link to="/works" className="services">
            <li>How it works</li>
          </Link>
          <Link to="/Features" className="Features">
            <li>Features</li>
          </Link>
          <Link to="/Pricing" className="Pricing">
            <li>Pricing</li>
          </Link>

          <Link to="/Testimonials" className="Testimonials">
            <li>Testimonials</li>
          </Link>
          <Link to="/Projects" className="Projects">
            <li>Projects</li>
          </Link>
          <Link to="/mission" className="mission">
            <li>Mission</li>
          </Link>
          <Link to="/company" className="company">
            <li>Company</li>
          </Link>
        </ul>

        <div>
          <Link to="/login" className="login">
            <button className="login-btn">Login</button>
          </Link>
          <Link to="/signup" className="signup">
            <button className="signup-btn">Signup</button>
          </Link>
        </div>
        {/* 
        whenever we click on button = setMobile(!Mobile) ==  is mobile oppsite to setMobile 
        */}
        <button className="mobile-menu-icon" onClick={() => setMobile(!Mobile)}>
          {Mobile ? <ImCross /> : <FaBars />}
        </button>
      </nav>
    </>
  );
};
export default Navbar;
