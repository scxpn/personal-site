import React from 'react';
import { GoThreeBars } from 'react-icons/go';
import { AiOutlineArrowLeft } from 'react-icons/ai';

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
          
            <AiOutlineArrowLeft className="arrow-button" size={25} color={arrowButton} onClick={this.toggleMenu} />
         
        </div>
      </div>
    </div>
  </nav>)
  }
};

export default MenuBars;