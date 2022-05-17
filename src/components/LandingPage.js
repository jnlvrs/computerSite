import React from 'react';
import './LandingPage.css';

export default function LandingPage() {
  return (
    <div className="outer-container">
      <div className='h2-outer'>
        <div className='h2-container'>
          <h2>IF YOU DREAM IT. WE CAN BUILD IT.</h2>
      </div>
      </div>
      <div className="first-info-container">
        <div className="h1-container">
          <h1>Velztorm</h1>
          <h2>Custom Desktops</h2>
          {/* <h2>UNRIVALED CUSTOM-BUILT PCS.</h2> */}
          {/* <h3>WE WILL BUILD YOUR PERFECT DESKTOP, TAILORED TO ALL OF YOUR GAMING NECESSITIES</h3> */}
        </div>
        <div className="img-container">
          <img className="first-img" src="https://velztorm.com/assets/images/Banner_new.jpg"></img>
        </div>
      </div>
    </div>
  );
}
