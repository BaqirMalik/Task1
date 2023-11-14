import '../Nav.css';
import {BrowserRouter, Route, Link, Routes, Router} from 'react-router-dom';
import About from "./About";

function Navbar() {
    return (
<BrowserRouter> 
<nav className="navbar navbar-expand-lg navbar-light bg-dark custom_nav">
  <div className="container-fluid">
    <a href="#">
  <img
          src='./baqir.jpg'
          height="60px"
          alt="Muhammad Baqir"
          loading="lazy"
          className='logo_baqir'
        />
</a>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto m-auto mb-2 mb-lg-0 fill">
        <li className="nav-item">
        <a href="#home_section" className='nav-link'>Home</a>
        </li>
        <li className="nav-item">
          <a href="#about_section" className='nav-link'
          >About</a>
        </li>
        <li className="nav-item">
          <a href="#skills_section" className='nav-link'>Skills</a>
        </li>
        <li className="nav-item">
        <a href="#contact_section" className='nav-link'>Contact Me</a>
        </li>
        <li className="nav-item">
        <a href="#education_section" className='nav-link'>Education Qualification</a>
        </li>
      </ul>
    </div>
    
    </div>


</nav>
</BrowserRouter> 
);
}
export default Navbar;