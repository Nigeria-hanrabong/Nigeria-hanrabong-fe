import React, { useState, useRef, useEffect } from "react";
import { Client } from "@stomp/stompjs";
import SockJS from "sockjs-client";

import styles from "../styles/Home.module.css";

const Home = ({username}) => {
  const [messages, setMessages] = useState([]);
  const [content, setContent] = useState(""); // 입력 필드에서 사용자가 입력한 채팅 메시지 내용을 상태로 관리
  const messagesEndRef = useRef(null);
  const clientRef = useRef(null);

  useEffect(() => {
    const socket = new SockJS("http://localhost:8080/chat"); // 백엔드 엔드포인트 
    const client = new Client({
      webSocketFactory: () => socket,
      onConnect: () => {
        client.subscribe("/topic/messages", (message) => { // STOMP 프로토콜 요청 엔드포인트
          const body = JSON.parse(message.body);
          setMessages((prevMessages) => [...prevMessages, body]);
        }); // body insert
      },
      onStompError: (error) => {
        console.error("Error: ", error);
      },
    });
    client.activate();
    clientRef.current = client;

    return () => {
      client.deactivate();
    };
  }, []); // 여기까지 이해 완

  const sendMessage = () => {
    if (content.trim() && clientRef.current.connected) {
      const message = { content: content, sender: {username} };
      clientRef.current.publish({
        destination: "/app/sendMessage", // 수정된 부분
        body: JSON.stringify(message),
      });
    }
    setContent("");
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className={styles.HomeBody}>
        <div className={styles.chatBox}>
          {messages.map((msg, index) => (
            <div key={index} className={styles.chatMessage}>
              <strong>{msg.sender}: </strong>
              {msg.content}
            </div>
          ))}
          <div ref={messagesEndRef}></div>
        </div>
        <div className={styles.chatInputBox}>
          <input
            className={styles.chatInput}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></input>
          <button onClick={sendMessage}>보내기</button>
        </div>
      </div>
    </>
  );
};

export default Home;
