import React from 'react';
import styles from '../styles/FishSuccessModal.module.css';

const FishSuccessModal = ({ isOpen = true, onClose = () => {} }) => {
  if (!isOpen) return null;

  const regionName = "제주시";
  const fishImage = "";
  const fishName = "갈치구이가 될 갈치";
  const restaurantName = "제주 갈치 식당";
  const restaurantAddress = "제주시 애월읍 174"
  const restaurantURL = "http://www.naver.com"
  const handleButtonClick = () => {
    window.open(restaurantURL, '_blank');
  };
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <div className={styles.content}>
          <h1 className={styles.regionName}>{regionName}</h1>
          <img className={styles.fishImage} src={fishImage} alt={fishName} />
          <h2 className={styles.fishName}>{fishName}</h2>
          <hr className={styles.separator} />
          <h1 className = {styles.restaurantTitle}>추천 식당</h1>
          <p className={styles.restaurantName}>{restaurantName}</p>
          <p className={styles.restaurantAddress}>{restaurantAddress}</p>
          <button className={styles.restaurantButton} onClick={handleButtonClick}>
            식당 홈페이지 방문
          </button>
        </div>
      </div>
    </div>
  );
};

export default FishSuccessModal;

