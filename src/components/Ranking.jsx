import React, { useState } from 'react';
import styles from '../styles/Ranking.module.css';

const Ranking = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isButtonActive, setIsButtonActive] = useState(false);
  
  const rankings = [
    { id : 'Rank', name : "Name", score : "Score"},
    { id: 1, name: 'Player1', score: 100 },
    { id: 2, name: 'Player2', score: 90 },
    { id: 3, name: 'Player3', score: 80 },
    { id: 4, name: 'Player4', score: 70 },
    { id: 5, name: 'Player5', score: 60 },
    { id: 6, name: 'Player6', score: 50 },
    { id: 7, name: 'Player7', score: 40 },
    { id: 8, name: 'Player8', score: 30 },
    { id: 9, name: 'Player9', score: 20 },
    { id: 10, name: 'Player10', score: 10 },
    { id: 11, name: 'Player11', score: 30 },
  ];

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className={styles.rankingContainer}>
      <div className={styles.title}>
        <div className={styles.rankTitle}>현재 랭킹</div>
    
      </div>
      {isVisible && (
        <div className={styles.rankingList}>
          {rankings.map(player => (
            <div key={player.id} className={styles.rankingItem}>
              <span>{player.id}</span>
              <span>{player.name}</span>
              <span>{player.score}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Ranking;