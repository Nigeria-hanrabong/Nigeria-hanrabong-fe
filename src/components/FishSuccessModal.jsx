import React from 'react';
import styles from '../styles/FishSuccessModal.module.css';
import { backend, frontend } from '../constants/domain'
import 고등어 from '../assets/물고기/고등어.png';
import 감성돔 from '../assets/물고기/감성돔.png';
import 다금바리 from '../assets/물고기/다금바리.png';
import 돌돔 from '../assets/물고기/돌돔.png';
import 무늬오징어 from '../assets/물고기/무늬오징어.png';
import 방어 from '../assets/물고기/방어.png';
import 벵에돔 from '../assets/물고기/벵에돔.png';
import 쓰레기 from '../assets/물고기/쓰레기.png';
import 우럭 from '../assets/물고기/우럭.png';
import 참돔 from '../assets/물고기/참돔.png';
import 한치 from '../assets/물고기/한치.png';

const FishSuccessModal = (props) => {
  // if (!isOpen) return null;

  const {name, fish, point, placeName, placeUrl, roadAddressName, showModal} = props;

  const fishImages = {
    '고등어': 고등어,
    '감성돔': 감성돔,
    '다금바리': 다금바리,
    '돌돔': 돌돔,
    '무늬오징어': 무늬오징어,
    '방어': 방어,
    '벵에돔': 벵에돔,
    '쓰레기': 쓰레기,
    '우럭': 우럭,
    '참돔': 참돔,
    '한치': 한치,
    '뚱이': 쓰레기,
    '나이지리아산 한라봉': 쓰레기,
    '징징이': 쓰레기,
    '돌멩이': 쓰레기,
    '앨런': 쓰레기
  };
  
  const image = fishImages[fish];
  
    const handleButtonClick = () => {
      window.open(placeUrl, '_blank');
    };




    return (
      <div className={styles.overlay}>
        <div className={styles.modal}>
          <button className={styles.closeButton} onClick={showModal}>×</button>
          <div className={styles.content}>
            <h1 className={styles.regionName}>{name}</h1>
            <img className={styles.fishImage} src={image} alt='대체이미지' />
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
  

 
};

export default FishSuccessModal;

