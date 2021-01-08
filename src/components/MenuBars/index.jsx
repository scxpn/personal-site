import React from 'react';
import { Button } from '@material-ui/core';
import { GoThreeBars } from 'react-icons/go';

import './index.css';

function MenuBars() {
  return (
    <div id="menu-bars">
      <GoThreeBars size={30} className="three-bars" />
    </div>
  );
};

export default MenuBars;
