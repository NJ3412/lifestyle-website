import React from 'react';
import { Route, Routes } from 'react-router-dom';
import JBImage from '../Images/JBS.png';
import jumpImage from '../Images/jump.jpeg';
import snorkelImage from '../Images/snorkel.JPG';
import '../index.css';
import Fullpage, {FullPageSections, FullpageSection, FullpageNavigation}  from '@ap.cx/react-fullpage';

import TravelsPage from '../TravelsPage';


const IntroText = () => (
    <div>
      <h1 className ="center-content p3 title "> Welcome to my world !</h1>
      <p className="center-content p3 intro">
        Hilarious nights with fellow travellers -
        surrounded by unbelievable nature -
        mouth-watering food experience -
      </p>
    </div>
  );
  

const Navigation = () => (
    <nav className="center-content">

      <a className= "p3 navigation" href="/travels" target="_blank" rel="noopener noreferrer">
        <h1>see my travels</h1>
      </a>

      <a href='#' className= "p3 navigation">
        <h3>taste my food</h3>
      </a>

      <a href='#' className= "p3 navigation">
        <h3>be more healthy</h3>  
      </a>

      <a href='#' className= "p3 navigation">
        <h3>just watch some random photos</h3>
      </a>

    </nav>
  );



  const FullPageScroll = () => {
    const SectionStyle = {
      height: '100vh',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      position: 'relative', 
      zIndex: -1, 

    };
  
    return (
      <Fullpage>
        <FullpageNavigation />
        <FullPageSections>
          <FullpageSection style={{ backgroundImage: `url(${JBImage})`, backgroundSize: 'cover' }}>
            <IntroText />
            <Navigation />
          </FullpageSection>
          <FullpageSection style={{ backgroundImage: `url(${snorkelImage})`, backgroundSize: 'cover' }}>
            <IntroText />
            <Navigation />
          </FullpageSection>
          <FullpageSection style={{ backgroundImage: `url(${jumpImage})`, backgroundSize: 'cover' }} >
            <IntroText />
            <Navigation />
          </FullpageSection>
        </FullPageSections>
      </Fullpage>
    );
  };
  

  function Header() {
    return (
      <div>
        <IntroText />
        <Navigation />
        <FullPageScroll />
        <Routes>
          <Route path="/travels" element={<TravelsPage />} />
        </Routes>
      </div>
    );
  }

export default Header;