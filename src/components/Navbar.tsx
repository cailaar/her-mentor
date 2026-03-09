import React, { useState } from "react";
import { PageName } from "../types";

interface NavbarProps {
  goToPage: (page: PageName) => void;
}

const Navbar: React.FC<NavbarProps> = ({ goToPage }) => {
  const [open, setOpen] = useState(false);

  const links: { name: string; page: PageName }[] = [
    { name: "Home", page: "login" },
    { name: "Profile", page: "profile" },
    { name: "Survey", page: "survey" },
    { name: "Matches", page: "matches" },
  ];

  return (
    <nav className="navbar">
      <div className="logo" onClick={() => goToPage("login")}>
        👩‍💼 SheLeads
      </div>

      <div className="nav-links">
        {links.map((link) => (
          <button
            key={link.name}
            className="nav-link"
            onClick={() => goToPage(link.page)}
          >
            {link.name}
          </button>
        ))}
      </div>

      <button className="hamburger" onClick={() => setOpen(!open)}>
        {open ? "✖" : "☰"}
      </button>

      {open && (
        <div className="mobile-menu">
          {links.map((link) => (
            <button
              key={link.name}
              className="mobile-link"
              onClick={() => {
                goToPage(link.page);
                setOpen(false);
              }}
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;