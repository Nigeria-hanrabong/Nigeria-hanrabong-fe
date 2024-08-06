import React from 'react';
import styles from '../styles/Chating.module.css';

const Chating = () => {
  return (
    <div className={styles.chatingContainer}>
      <input type="text" className={styles.chatingInput} placeholder="메시지를 입력하세요" />
      <button className={styles.sendButton}>
      <span className = {styles.sendIcon}>&#10148;</span>
      </button>
      <button className={styles.ChatingDetails}>
      <span className = {styles.Details}>&#128172;</span>
      </button>
    </div>
  );
};

export default Chating;