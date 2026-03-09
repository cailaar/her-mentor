import React from "react";
import { type PageName } from "../types";

interface LoginPageProps {
  goToPage: (page: PageName) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ goToPage }) => {
  const login = () => goToPage("role");

  return (
    <div className="page active">
      <div className="logo">
        <h1>👩‍💼 SheLeads</h1>
        <p className="tagline">From potential to power</p>
      </div>

      <div className="form-group">
        <label>Email</label>
        <input type="email" placeholder="Enter your email" />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input type="password" placeholder="Enter your password" />
      </div>

      <button className="btn" style={{ width: "100%" }} onClick={login}>
        Login
      </button>
    </div>
  );
};

export default LoginPage;
