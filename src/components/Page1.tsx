import React from 'react';
import TileSelector from './TileSelector';
import kolacjaImg from '../assets/images/kolacja.jpg';
import obiadImg from '../assets/images/obiad.jpg';
import przekaskaImg from '../assets/images/przekąska.jpg';
import sniadanieImg from '../assets/images/śniadanie.jpg';
import { scroller } from 'react-scroll';

const Page1: React.FC<{ onTileSelect: (tiles: any) => void }> = ({ onTileSelect }) => {
  const tiles = [
    { id: 1, title: 'Kolacja', selected: false, imageUrl: kolacjaImg },
    { id: 2, title: 'Obiad', selected: false, imageUrl: obiadImg },
    { id: 3, title: 'Przekąska', selected: false, imageUrl: przekaskaImg },
    { id: 4, title: 'Śniadanie', selected: false, imageUrl: sniadanieImg },
  ];

  const scrollToNext = () => {
    scroller.scrollTo('page2', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <div>
      <TileSelector text="Select your dinner options:" tiles={tiles} onTileSelect={onTileSelect} />
      <div className="navigation-buttons">
        <button onClick={scrollToNext} className="btn btn-custom">Next</button>
      </div>
    </div>
  );
};

export default Page1;
