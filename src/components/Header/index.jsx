import React from 'react';
import { Link } from 'react-router-dom';

import MenuBars from '../MenuBars';

import './index.css'

function Header() {
  return (
    <div id="header">
      <div className="primary-area">
        <div className="main-header">
          <MenuBars />
          <div className='profile-photo'>
            <Link to="/" className="landing-main-text">
              <img src={'https://avatars0.githubusercontent.com/u/50757312?s=460&u=f6cfeb6e4d6d727059382f52226d81824640c555&v=4'} alt="Ubirajara Junior"/>
            </Link>
                      
          </div>
        </div>

        <div className="landing-text">
          <h1>SCXPN</h1>

          <p>The more beautiful world is make with codes.</p>
        </div>
      </div>
      
    </div>
  );
};

export default Header;
