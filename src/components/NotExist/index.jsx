import React from 'react';
import { Link } from 'react-router-dom';

import { MdKeyboardBackspace } from 'react-icons/md';

import './index.css';

function NotExist() {
  return (
    <div id="not-exist">
      <Link to="/">
        <MdKeyboardBackspace className="back-button" size={28} color="white"></MdKeyboardBackspace>
      </Link>
      <div className="not-page">This page doesn't yet exist, try in a few days.</div>
    </div>
  );
};

export default NotExist;
