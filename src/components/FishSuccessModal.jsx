import React from 'react';
import styles from '../styles/FishSuccessModal.module.css';

const FishSuccessModal = (props,{ isOpen = true, onClose = () => {} }) => {
  if (!isOpen) return null;

  const {name} = props;


  fetch(`https://2fe3-123-214-153-130.ngrok-free.app/api/v1/fishing?location=${name}`, {
    method: 'GET'
  })
  .then(response => {
    if(response === 200) {
      return response.json();
    }
  }) 
  .then(data => {
    const fish = data.fish;
    const point = data.point;
    const placeName = data.placeName;
    const placeUrl = data.placeUrl;
    const roadAddressName = data.roadAddressName;

    const handleButtonClick = () => {
      window.open(placeUrl, '_blank');
    };
    return (
      <div className={styles.overlay}>
        <div className={styles.modal}>
          <button className={styles.closeButton} onClick={onClose}>×</button>
          <div className={styles.content}>
            <h1 className={styles.regionName}>{name}</h1>
            <img className={styles.fishImage} src={placeUrl} alt={fish} />
            <h2 className={styles.fishName}>{fish}</h2>
            <hr className={styles.separator} />
            <h1 className = {styles.restaurantTitle}>추천 식당</h1>
            <p className={styles.restaurantName}>{placeName}</p>
            <p className={styles.restaurantAddress}>{roadAddressName}</p>
            <button className={styles.restaurantButton} onClick={handleButtonClick}>
              식당 홈페이지 방문
            </button>
          </div>
        </div>
      </div>
    );
  })

 
};

export default FishSuccessModal;

