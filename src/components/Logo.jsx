import React, { useState } from 'react';
import Ranking from './Ranking';
import styles from '../styles/Logo.module.css';
import ChatingList from './ChatingList'
const Logo = () => {
  const [showRanking, setShowRanking] = useState(false);

  const handleMouseEnter = () => {
    setShowRanking(true);
  };

  const handleMouseLeave = () => {
    setShowRanking(false);
  };

  return (
    <div className={styles.logoContainer}>
      <div className={styles.title}>바다이야기</div>

      <div className={styles.buttons}>
        <button 
          className={styles.Ranking} 
          onMouseEnter={handleMouseEnter} 
          onMouseLeave={handleMouseLeave}
        >
          랭킹 보기
        </button>
        {showRanking && <Ranking />}
      </div>
    </div>
  );
};

export default Logo;