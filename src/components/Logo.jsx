import React, { useState, useEffect } from 'react';
import Ranking from '../components/Ranking'
import styles from '../styles/Logo.module.css';
import { backend, frontend } from '../constants/domain'

const Logo = () => {
  const [showRanking, setShowRanking] = useState(false);
  const [score, setScore] = useState("");
  
  const nickname = localStorage.getItem('nickname');
  
  const handleMouseEnter = () => {
    setShowRanking(true);
  };

  const handleMouseLeave = () => {
    setShowRanking(false);
  };
  
  useEffect(() => {
    const getScore = () => {
      fetch(`${backend}/api/v1/users/score?nickname=${nickname}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      })
      .then(response => {
        if(response.ok) {
          return response.json(); 
        }
      }) 
      .then(json => {
        console.log(json.data);
        
      })
    }

    getScore();
  }, []);
 



  fetch(`${backend}/api/v1/temperature`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  })
  .then(response => {
    if(response.status === 200) {
      return response.json();
    }
  }) 
  .then(data => { 
    setScore(data.data)
    
  })



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

        <div className={styles.title}>sistory</div>

        <div className={styles.score}>수온 {score}</div>
 
    </div>
  );
};

export default Logo;