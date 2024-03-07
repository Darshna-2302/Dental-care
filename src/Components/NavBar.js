import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

import { Link, NavLink } from "react-router-dom";

export default function NavBar(){
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = () => {
    const scrolled = window.scrollY > 0;
    if (scrolled) {
      document.querySelector(".nav-container-fluid").classList.add("scrolled");
    } else {
      document.querySelector(".nav-container-fluid").classList.remove("scrolled");
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
   <Container fluid className="nav-container-fluid scrolled awake sleep">
    <Container >
     <nav className="navbar-dark navbar-light">
      <Link to="/" className="title">
        DENTAL<span>CARE</span>
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
      <li>
          <NavLink to="/" className='Home-link'>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" className='About-link'>About</NavLink>
        </li>
        <li>
          <NavLink to="/services" className='Services-link'>Services</NavLink>
        </li>
        <li>
          <NavLink to="/doctor" className='Doctor-link'>Doctor</NavLink>
        </li>
        <li>
          <NavLink to="/blog" className='Blog-link'>Blog</NavLink>
        </li>
        <li>
          <NavLink to="/contact" className='Contact-link'>Contact</NavLink>
        </li>
          <Button variant="primary" >
          <Link to="/" className="appointment-link">Make an appointment</Link>
          </Button>
      </ul>
    </nav>
   </Container>
   </Container>
  );
};