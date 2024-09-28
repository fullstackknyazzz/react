import React from 'react';
import './Message.css'; // Подключаем стили

const Message = ({ text }) => {
  return (
    <div className="message-container">
      <p>{text}</p>
    </div>
  );
};

export default Message;
