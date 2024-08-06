import React, { useState, useEffect } from 'react';
import styles from '../styles/Ranking.module.css';

const Ranking = () => {
  
  const [isVisible, setIsVisible] = useState(true);
  const [rankings, setRankings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  
  fetch("https://2fe3-123-214-153-130.ngrok-free.app/api/v1/users/ranking", {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  })
  .then(response => {
      
    

      return response.json();
  })
  .then(data => {
    console.log("Response:", data); // 응답 데이터를 콘솔에 출력
    setRankings(data.data || []); // 데이터를 설정
    setLoading(false);
  })
  .catch(error => {
    console.error("Fetch error:", error);
    setError(error.message);
    setLoading(false);
  });
    
    
  

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={styles.rankingContainer}>
      <div className={styles.title}>
        <div className={styles.rankTitle}>현재 랭킹</div>
        <button onClick={toggleVisibility}>
          {isVisible ? 'Hide' : 'Show'} Rankings
        </button>
      </div>
      {isVisible && (
        <div className={styles.rankingList}>
          {rankings.map((player, index) => (
            <div key={index} className={styles.rankingItem}>
              <span>{player.id}</span>
              <span>{player.nickname}</span>
              <span>{player.score}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Ranking;