import React, { useState, useRef, useEffect } from 'react';
import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import styles from '../styles/Chating.module.css';

const Chating = () => {
  const [showChatingList, setShowChatingList] = useState(false);
  const [messages, setMessages] = useState([
    { content: "안녕하세요", sender: "Alice" },
    { content: "어떻게 지내세요?", sender: "Bob" },
    { content: "좋은 하루 보내세요", sender: "Alice" },
    { content: "안녕히 계세요", sender: "Bob" },
    { content: "안녕하세요", sender: "Alice" },
    { content: "어떻게 지내세요?", sender: "Bob" },
    { content: "좋은 하루 보내세요", sender: "Alice" },
    { content: "안녕히 계세요", sender: "Bob" },
  ]);
  const [content, setContent] = useState(''); // 입력 필드에서 사용자가 입력한 채팅 메시지 내용을 상태로 관리
  const messagesEndRef = useRef(null);
  const clientRef = useRef(null);

  const nickname = localStorage.getItem('nickname');
  const handleButtonClick = () => {
    setShowChatingList(!showChatingList);
  };

  useEffect(() => {
    const socket = new SockJS('http://19f1-123-214-153-130.ngrok-free.app/sendmessage'); // 백엔드 엔드포인트
    const client = new Client({
      webSocketFactory: () => socket,
      onConnect: () => {
        client.subscribe('/topic/messages', (message) => { // STOMP 프로토콜 요청 엔드포인트
          const body = JSON.parse(message.body);
          setMessages((prevMessages) => [...prevMessages, body]);
        });
      },
      onStompError: (error) => {
        console.error('Error: ', error);
      },
    });
    client.activate();
    clientRef.current = client;

    return () => {
      client.deactivate();
    };
  }, []);

  const sendMessage = () => {
    if (content.trim() && clientRef.current.connected) {
      const message = { content: content, sender: {nickname} }; // 여기서 username을 적절히 설정해야 합니다
      clientRef.current.publish({
        destination: '/app/sendMessage',
        body: JSON.stringify(message),
      });
      setMessages((prevMessages) => [...prevMessages, message]); // 로컬에서도 메시지 추가
    }
    setContent('');
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {showChatingList && (
        <div className={styles.chatLog}>
          {messages.map((message, index) => (
            <div key={index} className={styles.chatMessage}>
              <strong>{message.sender}: </strong>
              {message.content}
            </div>
          ))}
          <div ref={messagesEndRef}></div>
        </div>
      )}
      
      <div className={styles.chatingContainer}>
        <input 
          type="text" 
          className={styles.chatingInput} 
          placeholder="메시지를 입력하세요" 
          value={content}
          onChange={(e) => setContent(e.target.value)} 
        />
        <button className={styles.sendButton} onClick={sendMessage}>
          <span className={styles.sendIcon}>&#10148;</span>
        </button>
        <button className={styles.ChatingDetails} onClick={handleButtonClick}>
          <span className={styles.details}>&#128172;</span>
        </button>
      </div>
    </>
  );
};

export default Chating;