import React, { useState } from 'react';
import styles from '../styles/ChatingList.module.css';

const ChatingList= () => {
  const [showData, setShowData] = useState(false);
  const data = Array.from({ length: 10 }, (_, i) => `${i + 1}번째 채팅 목록이에요!`);
  const nicknameArray = ['danny','haliey','ian','theo','alan']

  const handleMouseEnter = () => {
    setShowData(true);
  };

  const handleMouseLeave = () => {
    setShowData(false);
  };

  return (
    <div className = {styles.dataSort}>
    <div 
      className={styles.dataContainer} 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave} 
    >
      <div className={styles.dataDisplay}>유저들의 응원 메시지를 확인해보세요!</div>
      {showData && (
        <div className={styles.hoverData}>
          {data.map((item, index)   => (
            <div key={index} className={styles.dataItem}>
              <div className={styles.dataItemDetail}>{nicknameArray[index % 5]}: {item}</div>
              
            </div>
          ))}
        </div>
      )}
    </div>
    </div>
  );
};

export default ChatingList;