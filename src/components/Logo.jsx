import React, { useState } from 'react';
import Ranking from '../components/Ranking'
import styles from '../styles/Logo.module.css';
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

        <button 
          className={styles.Ranking} 
          onMouseEnter={handleMouseEnter} 
          onMouseLeave={handleMouseLeave}
        >
          랭킹 보기
        </button>
        {showRanking && <Ranking />} 
        <div className={styles.title}>바다이야기</div>

      
      
 
    </div>
  );
};

export default Logo;