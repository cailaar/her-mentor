import React from "react";
import { type PageName } from "../types";

interface SuccessPageProps {
  goToPage: (page: PageName) => void;
}

const SuccessPage: React.FC<SuccessPageProps> = ({ goToPage }) => {
  const goToDashboard = () => alert("Dashboard would open here");

  return (
    <div className="page active">
      <div className="logo">
        <h1>👩‍💼 SheLeads</h1>
        <p className="tagline">Congratulations!</p>
      </div>

      <div style={{ textAlign: "center", padding: "40px 0" }}>
        <div style={{ fontSize: "72px", marginBottom: "20px" }}>🎉</div>
        <h2>You're all set!</h2>
        <p style={{ margin: "20px 0", color: "#666" }}>
          Your mentor will receive your request and connect with you within
          24-48 hours.
        </p>
        <p style={{ margin: "20px 0", color: "#666" }}>
          In the meantime, prepare your goals and questions for your first
          meeting.
        </p>
        <button className="btn" onClick={goToDashboard}>
          Go to Dashboard
        </button>
      </div>
    </div>
  );
};

export default SuccessPage;
