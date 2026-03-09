import React, { useState } from "react";
import { type PageName, type Mentor } from "../types";
import collabImg from "../assets/mentor-pic.PNG";
import MentorModal from "../components/MentorModal";

interface MatchesPageProps {
  goToPage: (page: PageName) => void;
}

const mentors: Mentor[] = [
  {
    name: "Sarah Johnson",
    initials: "SJ",
    title: "VP of Engineering at TechCorp",
    experience: "15 years",
    skills: [
      "Leadership",
      "Career Pivots",
      "Team Management",
      "Strategic Thinking",
    ],
    style:
      "I believe in empowering women through actionable insights and honest feedback. Let's work together to unlock your full potential.",
    matchScore: 95,
  },
  {
    name: "Maria Patel",
    initials: "MP",
    title: "Senior Product Manager at InnovateCo",
    experience: "12 years",
    skills: [
      "Product Management",
      "Stakeholder Management",
      "Confidence Building",
      "Presentations",
    ],
    style:
      "I focus on building confidence and practical skills. Together we'll create a roadmap for your success.",
    matchScore: 92,
  },
  {
    name: "Lisa Chen",
    initials: "LC",
    title: "Director of Data Science at DataDrive",
    experience: "10 years",
    skills: [
      "Data Analysis",
      "Technical Skills",
      "Interview Prep",
      "Salary Negotiation",
    ],
    style:
      "I combine technical expertise with career strategy. Let's build your skills and confidence together.",
    matchScore: 88,
  },
];

const MatchesPage: React.FC<MatchesPageProps> = ({ goToPage }) => {
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);

  const selectMentor = (name: string) => {
    if (confirm(`Connect with ${name}?`)) goToPage("success");
  };

  const refreshMatches = () => alert("Loading new matches...");

  return (
    <div className="page active found">
      <div className="logo">
        <img
          src={collabImg}
          alt="collab image"
          style={{ width: "200px", height: "80px" }}
        />
        <p className="tagline">Your perfect matches</p>
      </div>

      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
        We found {mentors.length} amazing mentors for you!
      </h2>

      {mentors.map((mentor) => (
        <div key={mentor.name} className="mentor-card">
          <div className="mentor-header">
            <div
              className="mentor-avatar"
              style={{ cursor: "pointer" }}
              onClick={() => setSelectedMentor(mentor)}
            >
              {mentor.initials}
            </div>
            <div className="mentor-info">
              <h3>{mentor.name}</h3>
              <p>
                {mentor.title} | {mentor.experience} experience
              </p>
            </div>
            <div className="match-score">{mentor.matchScore}% Match</div>
          </div>
          <div style={{ margin: "15px 0" }}>
            <strong>Skills:</strong> {mentor.skills.join(", ")}
          </div>
          <div style={{ margin: "15px 0" }}>
            <strong>Mentoring Style:</strong> "{mentor.style}"
          </div>
          <button className="btn" onClick={() => selectMentor(mentor.name)}>
            Choose {mentor.name}
          </button>
          <button
            className="btn btn-secondary"
            style={{ marginLeft: "10px" }}
            onClick={() => setSelectedMentor(mentor)}
          >
            View Profile
          </button>
        </div>
      ))}

      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <button className="btn btn-secondary" onClick={refreshMatches}>
          🔄 Show Different Matches
        </button>
      </div>

      {/* Mentor Modal */}
      {selectedMentor && (
        <MentorModal
          mentor={selectedMentor}
          onClose={() => setSelectedMentor(null)}
        />
      )}
    </div>
  );
};

export default MatchesPage;
