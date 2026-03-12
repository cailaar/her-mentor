// src/components/ChatButton.tsx
import React from "react";

interface ChatButtonProps {
  onClick: () => void;
}

const ChatButton: React.FC<ChatButtonProps> = ({ onClick }) => {
  return (
    <>
      <button className="chat-button" onClick={onClick}>
        💬
      </button>

      <style>{`
        .chat-button {
          position: fixed;
          bottom: 30px;
          right: 30px;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          border: none;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          font-size: 28px;
          cursor: pointer;
          box-shadow: 0 5px 15px rgba(0,0,0,0.3);
          transition: transform 0.2s, box-shadow 0.3s;
          z-index: 200;
        }

        .chat-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(118, 75, 162, 0.3);
        }

        @media (max-width: 768px) {
          .chat-button {
            width: 50px;
            height: 50px;
            font-size: 24px;
            bottom: 20px;
            right: 20px;
          }
        }
      `}</style>
    </>
  );
};

export default ChatButton;
