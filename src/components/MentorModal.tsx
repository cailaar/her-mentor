import React from "react";

interface MentorModalProps {
  mentor: {
    name: string;
    title: string;
    experience: string;
    skills: string[];
    style: string;
  } | null;
  onClose: () => void;
}

const MentorModal: React.FC<MentorModalProps> = ({ mentor, onClose }) => {
  if (!mentor) return null;

  return (
    <>
      <div className="modal-backdrop" onClick={onClose} />
      <div className="modal-content">
        <h2>{mentor.name}</h2>
        <p>
          <strong>{mentor.title}</strong>
        </p>
        <p>{mentor.experience}</p>
        <p>
          <strong>Skills:</strong> {mentor.skills.join(", ")}
        </p>
        <p>
          <strong>Mentoring Style:</strong> {mentor.style}
        </p>
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>

      <style>{`
        .modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0,0,0,0.4);
          z-index: 300;
        }
        .modal-content {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: white;
          border-radius: 12px;
          padding: 30px;
          max-width: 500px;
          width: 90%;
          z-index: 301;
          box-shadow: 0 20px 60px rgba(0,0,0,0.3);
        }
        .close-btn {
          margin-top: 20px;
          padding: 10px 20px;
          border: none;
          border-radius: 8px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          font-weight: 600;
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

export default MentorModal;
