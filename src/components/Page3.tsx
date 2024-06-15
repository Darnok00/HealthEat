import React from 'react';
import TileSelector from './TileSelector';
import wegan from '../assets/images/wegan.jpeg';
import wegeterian from '../assets/images/wegetarian.jpeg';
import meiso from '../assets/images/meiso.jpg';
import { scroller } from 'react-scroll';

const Page3: React.FC<{ onTileSelect: (tiles: any) => void }> = ({ onTileSelect }) => {
  const tiles = [
    { id: 1, title: 'Mieśna', selected: false, imageUrl: meiso },
    { id: 2, title: 'Wegetariańska', selected: false, imageUrl: wegeterian },
    { id: 3, title: 'Wegańska', selected: false, imageUrl: wegan },
  ];

  const scrollToPrevious = () => {
    scroller.scrollTo('page2', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  const scrollToNext = () => {
    scroller.scrollTo('page4', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <div>
      <TileSelector text="Select your diet type:" tiles={tiles} onTileSelect={onTileSelect} />
      <div className="navigation-buttons">
        <button onClick={scrollToPrevious} className="btn btn-custom">Back</button>
        <button onClick={scrollToNext} className="btn btn-custom">Next</button>
      </div>
    </div>
  );
};

export default Page3;
