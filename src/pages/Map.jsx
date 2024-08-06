import React from 'react';
import Ranking from '../components/Ranking';
import Logo from '../components/Logo';
import JejuMap from '../components/JejuMap';
import Chating from '../components/Chating';

const Map = () => {

    return (
    <div className = "Map">
      <Logo />
      <JejuMap />
      <Chating />
      <ChatingList />
    </div>
    );
    
}

export default Map;

