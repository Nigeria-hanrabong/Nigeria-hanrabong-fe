import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from'../styles/JejuMap.module.css';
const JejuMap = () => {
    const navigate = useNavigate();

    const handlePinClick = (location,name) => {
      alert(`${location}에 오신것을 환영합니다!`);
      navigate(`/details/${name}`);
    };
  
    return (
      

        <div className={styles.mapContainer}>
        <img
          src="https://www.urbanbrush.net/web/wp-content/uploads/edd/2021/02/urbanbrush-20210218222336410564.jpg"
          alt="Jeju Map"
          className={styles.jejuMap}
        />
        <div
          className={styles.mapPin}
          onClick={() => handlePinClick('제주시','제주')}
        >
          <span className={styles.pinLabel}>제주시</span>
          
        </div>


        <div
          className={styles.mapPin2}
          onClick={() => handlePinClick('서귀포시','서귀포')}
        >
          <span className={styles.pinLabel}>서귀포시</span>
          
        </div>
        
        <div
          className={styles.mapPin3}
          onClick={() => handlePinClick('성산읍','성산읍')}
        >
          <span className={styles.pinLabel}>성산읍</span>
          
        </div>

        <div
          className={styles.mapPin4}

          onClick={() => handlePinClick('구좌읍','구좌')}
        >
          <span className={styles.pinLabel}>구좌읍</span>
          
        </div>

        <div
          className={styles.mapPin5}

          onClick={() => handlePinClick('표선면','표선')}
        >
          <span className={styles.pinLabel}>표선면</span>
          
        </div>

        <div
          className={styles.mapPin6}

          onClick={() => handlePinClick('조천읍','조천')}
        >
          <span className={styles.pinLabel}>조천읍</span>
          
        </div>

        <div
          className={styles.mapPin7}

          onClick={() => handlePinClick('남원읍','남원읍')}
        >
          <span className={styles.pinLabel}>남원읍</span>
          
        </div>

        <div
          className={styles.mapPin8}
  
          onClick={() => handlePinClick('중문','중문')}
        >
          <span className={styles.pinLabel}>중문</span>
          
        </div>

        <div
          className={styles.mapPin9}

          onClick={() => handlePinClick('애월읍','애월')}
        >
          <span className={styles.pinLabel}>애월읍</span>
          
        </div>

        <div
          className={styles.mapPin10}

          onClick={() => handlePinClick('한림읍','한림')}
        >
          <span className={styles.pinLabel}>한림읍</span>
          
        </div>

        <div
          className={styles.mapPin11}

          onClick={() => handlePinClick('한경면','한경')}
        >
          <span className={styles.pinLabel}>한경면</span>
          
        </div>
        {/* 다른 핀 추가 가능 */}
      </div>

    );
};

export default JejuMap;