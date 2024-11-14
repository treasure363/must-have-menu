import React from 'react';
import './ChatBoxIcon.css'; // Import the CSS file for styling

const ChatBoxIcon = () => {
  return (
    <div className="chatbox-icon">
      <div className="chat-icon">
        <div className="chat-bubble">
            <img
              src="/chat.png"
              alt="logo"
              loading="lazy"
            />
        </div>
      </div>
    </div>
  );
};

export default ChatBoxIcon;
