import React, { useState } from "react";
import { type PageName } from "../types";
import LogoImg from "../assets/logo.PNG";

interface NavbarProps {
  goToPage: (page: PageName) => void;
}

const Navbar: React.FC<NavbarProps> = ({ goToPage }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (page: PageName) => {
    goToPage(page);
    setMobileOpen(false); // close mobile menu on click
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <div className="logoNav" onClick={() => handleNavClick("profile")}>
          <img
            src={LogoImg}
            alt="logo image"
            className="logoImg"
            style={{ width: "150px", height: "150px" }}
          />
        </div>

        {/* Desktop Links */}
        <ul className="nav-links" style={{ listStyle: "none" }}>
          <li onClick={() => handleNavClick("profile")}>Profile</li>
          <li onClick={() => handleNavClick("survey")}>Survey</li>
          <li onClick={() => handleNavClick("matches")}>Matches</li>
          <li onClick={() => handleNavClick("success")}>Success</li>
        </ul>

        {/* Mobile Hamburger */}
        <div
          className={`hamburger ${mobileOpen ? "open" : ""}`}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span />
          <span />
          <span />
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <ul className="mobile-nav-links">
          <li onClick={() => handleNavClick("profile")}>Profile</li>
          <li onClick={() => handleNavClick("survey")}>Survey</li>
          <li onClick={() => handleNavClick("matches")}>Matches</li>
          <li onClick={() => handleNavClick("success")}>Success</li>
        </ul>
      )}

      {/* Styles */}
      <style>{`
        .navbar {
          position: sticky;
          top: 0;
          width: 100%;
          z-index: 100;
          background: white;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        .nav-container {
          max-width: 900px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 20px;
          height: 80px;
        }

        .logoNav {
          display: flex;

          font-size: 24px;
          font-weight: 700;
          color: #764ba2;
          cursor: pointer;
        }

        .nav-links {
          display: flex;
          gap: 20px;
        }

        .nav-links li {
          cursor: pointer;
          padding: 8px 16px;
          border-radius: 8px;
          font-weight: 500;
          transition: all 0.3s;
        }

        .nav-links li:hover {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          transform: translateY(-2px);
        }

        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
        }

        .hamburger span {
          display: block;
          width: 25px;
          height: 3px;
          background: #764ba2;
          border-radius: 2px;
          transition: all 0.3s;
        }

        .hamburger.open span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }

        .hamburger.open span:nth-child(2) {
          opacity: 0;
        }

        .hamburger.open span:nth-child(3) {
          transform: rotate(-45deg) translate(5px, -5px);
        }

        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          gap: 10px;
          background: white;
          padding: 10px 20px;
          border-top: 1px so§lid #e0e0e0;
        }

        .mobile-nav-links li {
          padding: 10px;
          border-radius: 8px;
          transition: all 0.3s;
        }

        .mobile-nav-links li:hover {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
          .hamburger {
            display: flex;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
