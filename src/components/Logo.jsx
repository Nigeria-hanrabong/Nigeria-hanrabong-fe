import React, { useState } from 'react';
import Ranking from '../components/Ranking'
import styles from '../styles/Logo.module.css';
const Logo = () => {
  const [showRanking, setShowRanking] = useState(false);
  const [temp, setTemp] = useState("");

  const nickname = localStorage.getItem('nickname');
  
  const handleMouseEnter = () => {
    setShowRanking(true);
  };

  const handleMouseLeave = () => {
    setShowRanking(false);
  };
  
  
  fetch(`https://2fe3-123-214-153-130.ngrok-free.app/api/v1/users/score?nickname=ㅇㅇㅇ`, {
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
    console.log(json)
    
  })
  .catch(e => {
    console.log(e)
  })

  fetch("https://2fe3-123-214-153-130.ngrok-free.app/api/v1/temperature", {
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

        <div className={styles.title}>바다이야기</div>

        <div className={styles.temp}>{temp} asdasdasdas</div>
      
 
    </div>
  );
};

export default Logo;