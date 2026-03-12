import React, { useState } from "react";
import { type PageName } from "../types";

interface RolePageProps {
  goToPage: (page: PageName) => void;
}

const RolePage: React.FC<RolePageProps> = ({ goToPage }) => {
  const [selectedRole, setSelectedRole] = useState<string>("");

  const proceed = () => {
    if (!selectedRole) {
      alert("Please select a role");
      return;
    }
    goToPage("profile");
  };

  return (
    <div className="page active">
      <h2>Choose your role</h2>
      <div className="role-selector">
        <div
          className={`role-card ${selectedRole === "mentee" ? "selected" : ""}`}
          onClick={() => setSelectedRole("mentee")}
        >
          <div className="role-icon">🌱</div>
          <h3>Mentee</h3>
        </div>
        <div
          className={`role-card ${selectedRole === "mentor" ? "selected" : ""}`}
          onClick={() => setSelectedRole("mentor")}
        >
          <div className="role-icon">🌟</div>
          <h3>Mentor</h3>
        </div>
      </div>

      <button className="btn" onClick={proceed}>
        Continue
      </button>
    </div>
  );
};

export default RolePage;
