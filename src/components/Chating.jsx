import React, { useState } from 'react';
import styles from '../styles/Chating.module.css';
import ChatingList from './ChatingList'
const Chating = () => {
  const [showChatingList, setShowChatingList] = useState(false);

  const handleButtonClick = () => {
    setShowChatingList(!showChatingList);
  };

  return (
    <div className={styles.chatingContainer}>
        {showChatingList && <ChatingList />}
      <input type="text" className={styles.chatingInput} placeholder="메시지를 입력하세요" />
      <button className={styles.sendButton}>
        <span className={styles.sendIcon}>&#10148;</span>
      </button>
      <button className={styles.ChatingDetails} onClick={handleButtonClick}>
        <span className={styles.details}>&#128172;</span>

      </button>
    </div>
  );
};

export default Chating;