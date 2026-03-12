import React from "react";
import { type PageName } from "../types";
import collabImg from "../assets/mentor-pic.PNG";

interface ProfilePageProps {
  goToPage: (page: PageName) => void;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ goToPage }) => {
  const startSurvey = () => goToPage("survey");

  return (
    <div className="page active">
      <div className="logo">
        {/* <h1>👩‍💼 SheLeads</h1> */}
        <img
          src={collabImg}
          alt="collab image"
          style={{ width: "200px", height: "80px" }}
        />
        <p className="tagline">Your journey starts here</p>
      </div>

      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
        What you'll find on SheLeads
      </h2>

      <div className="features-grid">
        <div className="feature-card">
          <div className="feature-icon">🎯</div>
          <h4>Perfect Matches</h4>
          <p>AI-powered matching to find your ideal mentor or mentee</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">📈</div>
          <h4>Career Growth</h4>
          <p>Structured guidance for promotions, pivots, and skill building</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">💪</div>
          <h4>Confidence Building</h4>
          <p>Develop leadership skills and professional confidence</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🤝</div>
          <h4>Safe Community</h4>
          <p>Connect with verified professionals in a supportive environment</p>
        </div>
      </div>

      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <button className="btn" onClick={startSurvey}>
          Start Your Journey
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
