import React, { useState } from 'react';
import styles from '../styles/ChatingList.module.css';

const ChatingList = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    "안녕하세요",
    "어떻게 지내세요?",
    "좋은 하루 보내세요",
    "안녕히 계세요",
    "안녕하세요",
    "어떻게 지내세요?",
    "좋은 하루 보내세요",
    "안녕히 계세요"
  ]);

  const handleSend = () => {
    let copyChat = [...messages];
    if(input != '') {
      copyChat.push(input);
      setMessages(copyChat);
      setInput('');
    }
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className={styles.chatLog}>
      {messages.map((message, index) => (
        <div key={index} className={styles.chatMessage}>
          {message}
        </div>
      ))}
    </div>
  );
};

export default ChatingList;