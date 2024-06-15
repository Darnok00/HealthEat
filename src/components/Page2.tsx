import React from 'react';
import TileSelector from './TileSelector';
import amerykanskaImg from '../assets/images/am.jpeg';
import azjatyckaImg from '../assets/images/azjatycka.jpeg';
import bliskowschodniaImg from '../assets/images/bw.jpeg';
import indyjskaImg from '../assets/images/indyjska.jpeg';
import polskaImg from '../assets/images/polska.jpeg';
import wloskaImg from '../assets/images/włoska.jpeg';
import { scroller } from 'react-scroll';

const Page2: React.FC<{ onTileSelect: (tiles: any) => void }> = ({ onTileSelect }) => {
  const tiles = [
    { id: 1, title: 'Amerykańska', selected: false, imageUrl: amerykanskaImg },
    { id: 2, title: 'Azjatycka', selected: false, imageUrl: azjatyckaImg },
    { id: 3, title: 'Bliskowschodnia', selected: false, imageUrl: bliskowschodniaImg },
    { id: 4, title: 'Indyjska', selected: false, imageUrl: indyjskaImg },
    { id: 5, title: 'Polska', selected: false, imageUrl: polskaImg },
    { id: 6, title: 'Włoska', selected: false, imageUrl: wloskaImg },
  ];

  const scrollToPrevious = () => {
    scroller.scrollTo('page1', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  const scrollToNext = () => {
    scroller.scrollTo('page3', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <div>
      <TileSelector text="Select your kitchen type:" tiles={tiles} onTileSelect={onTileSelect} />
      <div className="navigation-buttons">
        <button onClick={scrollToPrevious} className="btn btn-custom">Back</button>
        <button onClick={scrollToNext} className="btn btn-custom">Next</button>
      </div>
    </div>
  );
};

export default Page2;
