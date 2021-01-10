import React from 'react';
import { Link } from 'react-router-dom';

import { GoThreeBars } from 'react-icons/go';
import { AiOutlineClose } from 'react-icons/ai';
//  import { MdKeyboardBackspace } from 'react-icons/md';

import './index.css';


class MenuBars extends React.Component {

  state = { showMenu: false }

  toggleMenu = () => {
  this.setState({
    showMenu: !this.state.showMenu
  })
  }

  render() {
  const barsButton = this.state.showMenu ? 'transparent' : 'white';
  const arrowButton = this.state.showMenu ? 'white' : 'transparent';
  const menu = this.state.showMenu ? 'active' : '';
    return (     
  <nav id="navbar">
    
    <div className="navbar-brand">
      <GoThreeBars className="bars-button" size={25} color={barsButton} onClick={this.toggleMenu} />

      <div className={`navbar-burger-${menu}`}>
        <div className="itens-menu">
          
            <AiOutlineClose className="close-button" size={25} color={arrowButton} onClick={this.toggleMenu} />

            <Link to="/" className="item">Home</Link>
            <Link to="/about" className="item">About</Link>
            <Link to="/portfolio" className="item">Portfolio</Link>

            {/* <Link to="/">
              <MdKeyboardBackspace className="back-button" size={28} color="white"></MdKeyboardBackspace>
            </Link> */}
            
         
        </div>
      </div>
    </div>
  </nav>)
  }
};

export default MenuBars;