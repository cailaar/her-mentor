import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1rem 1.5rem",
        background: "#1a1a1a",
        color: "white",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      {/* Logo */}
      <div style={{ fontWeight: "bold", fontSize: "1.3rem" }}>MentorMatch</div>

      {/* Desktop links */}
      <div
        className="nav-links"
        style={{
          display: "none",
          gap: "1.5rem",
        }}
      >
        <a href="#" className="nav-link">
          Home
        </a>
        <a href="#" className="nav-link">
          Chatbot
        </a>
        <a href="#" className="nav-link">
          Matches
        </a>
        <a href="#" className="nav-link">
          About
        </a>
      </div>

      {/* Mobile hamburger */}
      <button
        aria-label="Toggle navigation menu"
        onClick={() => setOpen(!open)}
        style={{
          background: "none",
          border: "none",
          color: "white",
          fontSize: "1.8rem",
          cursor: "pointer",
          display: "block",
        }}
        className="hamburger"
      >
        {open ? "✖" : "☰"}
      </button>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            right: 0,
            background: "#1a1a1a",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            padding: "1rem 0",
            borderTop: "1px solid #333",
          }}
        >
          <a className="mobile-link" href="#" style={linkStyle}>
            Home
          </a>
          <a className="mobile-link" href="#" style={linkStyle}>
            Chatbot
          </a>
          <a className="mobile-link" href="#" style={linkStyle}>
            Matches
          </a>
          <a className="mobile-link" href="#" style={linkStyle}>
            About
          </a>
        </div>
      )}
    </nav>
  );
}

const linkStyle = {
  padding: "1rem",
  textAlign: "center",
  color: "white",
  textDecoration: "none",
  fontSize: "1.1rem",
};
