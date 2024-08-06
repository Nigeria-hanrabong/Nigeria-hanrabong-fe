import React from 'react';
import Ranking from '../components/Ranking';
import Logo from '../components/Logo';
import JejuMap from '../components/JejuMap';
import Chating from '../components/Chating';
import '../styles/Map.module.css'
const Map = () => {

    return (
    <div className = "Map">
      <Logo />
      <JejuMap />
      <Chating />
    </div>
    );
    
}

export default Map;

