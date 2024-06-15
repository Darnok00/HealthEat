import React, { useState } from 'react';
import { Element, scroller } from 'react-scroll';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Page4 from './components/Page4';
import './index.css'; 

const App: React.FC = () => {
  const [formData, setFormData] = useState({});

  const handleTileSelect = (page: string, tiles: any) => {
    setFormData(prevData => ({
      ...prevData,
      [page]: tiles,
    }));
  };

  const handleFormSubmit = (data: any) => {
    setFormData(prevData => ({
      ...prevData,
      page4: data,
    }));
    handleSubmit();
  };

  const scrollToPage = (page: string) => {
    scroller.scrollTo(page, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <div>
      <Element name="page1" className="element">
        <Page1 onTileSelect={(tiles) => handleTileSelect('page1', tiles)} />
      </Element>
      <Element name="page2" className="element">
        <Page2 onTileSelect={(tiles) => handleTileSelect('page2', tiles)} />
      </Element>
      <Element name="page3" className="element">
        <Page3 onTileSelect={(tiles) => handleTileSelect('page2', tiles)} />
      </Element>
      <Element name="page4" className="element">
        <Page4 onSubmit={handleFormSubmit} />
      </Element>
      <div className="navigation-buttons">
        <button onClick={() => scrollToPage('page1')} className="btn btn-custom">Page 1</button>
        <button onClick={() => scrollToPage('page2')} className="btn btn-custom">Page 2</button>
        <button onClick={() => scrollToPage('page4')} className="btn btn-custom">Page 4</button>
      </div>
    </div>
  );
};

export default App;
