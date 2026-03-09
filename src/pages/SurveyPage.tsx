import React, { useState } from "react";
import type { PageName } from "../types";
import collabImg from "../assets/mentor-pic.PNG";

interface SurveyPageProps {
  goToPage: (page: PageName) => void;
}

const SurveyPage: React.FC<SurveyPageProps> = ({ goToPage }) => {
  const totalSteps = 4;
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [checkboxes, setCheckboxes] = useState<{ [key: string]: boolean }>({});

  const skills = [
    "Leadership",
    "Public Speaking",
    "Project Management",
    "Data Analysis",
    "Strategic Thinking",
    "Negotiation",
    "Team Management",
    "Product Management",
    "Marketing",
    "Finance",
    "Coding",
    "Design Thinking",
  ];

  const toggleSkill = (skill: string) => {
    setSelectedSkills((prev) => {
      if (prev.includes(skill)) return prev.filter((s) => s !== skill);
      if (prev.length < 5) return [...prev, skill];
      alert("You can select up to 5 skills");
      return prev;
    });
  };

  const toggleCheckbox = (name: string) => {
    setCheckboxes((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) setCurrentStep((prev) => prev + 1);
    else goToPage("matches"); // end of survey
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep((prev) => prev - 1);
  };

  const progressPercent = (currentStep / totalSteps) * 100;

  return (
    <div className="page active matches">
      <div className="logo">
        {/* <h1>👩‍💼 SheLeads</h1> */}
        <img
          src={collabImg}
          alt="collab image"
          style={{ width: "200px", height: "80px" }}
        />
        <p className="tagline">Let's find your perfect match</p>
      </div>

      {/* Progress Bar */}
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Step Contents */}
      {currentStep === 1 && (
        <div className="survey-step">
          <h2>About You</h2>
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Your name" />
          </div>
          <div className="form-group">
            <label>Age</label>
            <select>
              <option>Select age range</option>
              <option>18-24</option>
              <option>25-34</option>
              <option>35-44</option>
              <option>45-54</option>
              <option>55+</option>
            </select>
          </div>
          <div className="form-group">
            <label>Occupation</label>
            <input type="text" placeholder="Your current role" />
          </div>
        </div>
      )}

      {currentStep === 2 && (
        <div className="survey-step">
          <h2>Your Goals</h2>
          <div className="checkbox-group">
            {[
              "Improve CV",
              "Interview prep",
              "Get promoted",
              "Pivot career",
              "Build confidence",
              "Negotiate salary",
            ].map((goal) => (
              <div
                key={goal}
                className={`checkbox-item ${checkboxes[goal] ? "checked" : ""}`}
                onClick={() => toggleCheckbox(goal)}
              >
                <input
                  type="checkbox"
                  checked={checkboxes[goal] || false}
                  readOnly
                />
                <label>{goal}</label>
              </div>
            ))}
          </div>
        </div>
      )}

      {currentStep === 3 && (
        <div className="survey-step">
          <h2>Skills to Learn</h2>
          <div className="skill-bubbles">
            {skills.map((skill) => (
              <div
                key={skill}
                className={`skill-bubble ${selectedSkills.includes(skill) ? "selected" : ""}`}
                onClick={() => toggleSkill(skill)}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      )}

      {currentStep === 4 && (
        <div className="survey-step">
          <h2>Preferences</h2>
          <div className="form-group">
            <label>Meeting style preference</label>
            <div className="checkbox-group">
              {["Video calls", "Phone calls", "In-person", "Chat/Email"].map(
                (pref) => (
                  <div
                    key={pref}
                    className={`checkbox-item ${checkboxes[pref] ? "checked" : ""}`}
                    onClick={() => toggleCheckbox(pref)}
                  >
                    <input
                      type="checkbox"
                      checked={checkboxes[pref] || false}
                      readOnly
                    />
                    <label>{pref}</label>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="navigation-buttons">
        <button
          className="btn btn-secondary"
          onClick={prevStep}
          style={{ display: currentStep > 1 ? "inline-block" : "none" }}
        >
          Previous
        </button>
        <button className="btn" onClick={nextStep}>
          {currentStep === totalSteps ? "Find Matches" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default SurveyPage;
