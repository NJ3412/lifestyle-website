import React, { useState } from 'react';
import './index.css';
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from '@ap.cx/react-fullpage';
import madeiraImage from './Images/madeira.jpeg';
import azoresImage from './Images/azores.jpg';
import portugalImage from './Images/portugal.jpeg';
import israelImage from './Images/israel.jpg';
import moroccoImage from './Images/morocco.jpeg';
import maldivesImage from './Images/maldives.jpeg';
import * as functions from './TravelsPageRight.js';


// PICTURE WHEN CLICK ON COUNTRY
function TravelsPage() {
  const [selectedCountry, setSelectedCountry] = useState("Maldives");

  // Create state to track the currently clicked country
  const [clickedCountry, setClickedCountry] = useState("Maldives");

  const [rightPage, setRightPage] = useState("maldives");


  const handleCountryClick = (country) => {
    setSelectedCountry(country);

    // Update the clickedCountry state to the newly clicked country
    setClickedCountry(country);

    setRightPage(country);
  };



  const countryImages = {
    Maldives: maldivesImage,
    Azores: azoresImage,
    Portugal: portugalImage,
    Israel: israelImage,
    Morocco: moroccoImage,
    Madeira: madeiraImage,
  };


  // RIGHTPAGE
  const rightContent = {
    Maldives : functions.maldives(),
    Azores : functions.azores(),
    Morroco : functions.morocco(),
    Israel : functions.israel(),
    Maldives : functions.maldives(),
    Azores : functions.azores(),
  }

  
  return (
    <div>
      <h1 className="center-content p3 title">Random stuff about my travels</h1>
      <div class="container">
        <div className="p3 left ">
          <h1 className="center">Where have I been?</h1>
          <div className="center">
            <img
              className="images"
              // Accessing the value of the key-value pair dictionary
              src={countryImages[selectedCountry]}
              alt={selectedCountry}
              style={{ height: '500px' }}
            />
          </div>
          <p>
            <h5 className="center">
              <span
                onClick={() => handleCountryClick('Maldives')}
                className={clickedCountry === 'Maldives' ? 'selected-country' : ''}
              >
                Maldives
              </span>
              <span className= 'space'>-</span>
              <span
                onClick={() => handleCountryClick('Azores')}
                className={clickedCountry === 'Azores' ? 'selected-country' : ''}
              >
                Azores
              </span>
              <span className= 'space'>-</span>
              <span
                onClick={() => handleCountryClick('Portugal')}
                className={clickedCountry === 'Portugal' ? 'selected-country' : ''}
              >
                Portugal
              </span>
              <span className= 'space'>-</span>
              <span
                onClick={() => handleCountryClick('Israel')}
                className={clickedCountry === 'Israel' ? 'selected-country' : ''}
              >
                Israel
              </span>
              <span className= 'space'>-</span>
              <span
                onClick={() => handleCountryClick('Morocco')}
                className={clickedCountry === 'Morocco' ? 'selected-country' : ''}
              >
                Morocco
              </span>
              <span className= 'space'>-</span>
              <span
                onClick={() => handleCountryClick('Madeira')}
                className={clickedCountry === 'Madeira' ? 'selected-country' : ''}
              >
                Madeira
              </span>
            </h5>
          </p>

          <h1>Best experienced location?</h1>
          <p>Maldives</p>
          <h1>6 tips for an unforgettable trip!</h1>
          <ol>
            <li>location</li>
            <li>time</li>
            <li>social</li>
            <li></li>
          </ol>
        </div>

        <div class="right">
          {rightContent[rightPage]}
        </div>
      </div>
    </div>
  );
}

export default TravelsPage;
