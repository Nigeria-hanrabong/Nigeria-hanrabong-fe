import React from 'react';

import Logo from '../components/Logo';
import JejuMap from "../components/JejuMap"
import Chating from "../components/Chating"
import styles from '../styles/Map.module.css'


const Map = () => {

    return (
    <div className={styles.Map}>
      <Logo />
      <JejuMap />
      <Chating /> 

    </div>
    );
    
}

export default Map;

