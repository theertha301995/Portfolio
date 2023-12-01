
import React from 'react'
import { Outlet, Link } from "react-router-dom";

// import './photo.css'
const Layout = () => {


  return (
    <>
       <header className="bg-dark fixed-top">
        <nav className="container-xxl navbar navbar-expand-lg py-3 bg-dark navbar-dark">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand fw-bold fs-3" >
              HOME
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item mx-2">
                  <a href="#skills" className="nav-link">
                    SKILLS
                  </a>
                </li>
                <li className="nav-item mx-2">
                  <a  href="#portfolio" className="nav-link">
                    PORTFOLIO
                  </a>
                </li>
                <li className="nav-item mx-2">
                  <a href="#about" className="nav-link">
                    ABOUT
                  </a>
                </li>
                <li className="nav-item mx-2">
                  <a href="#cv" className="nav-link">
                    CURRICULUM VITAE
                  </a>
                </li>
                <li className="nav-item mx-2">
                  <Link to="/contact" className="nav-link">
                    CONTACT
                  </Link>
                </li>
                <li className="nav-item mx-2">
                  <Link to="/contactlist" className="nav-link">
                    CARD
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Layout;