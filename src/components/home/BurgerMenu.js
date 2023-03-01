import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './menu.css'





const BurgerMenu = (props) => {
  return (

      <Menu right>
      
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/order">
        Order service
      </a>
      <a className="menu-item" href="/ggifting">
        Gifting
      </a>
      <a className="menu-item" href="/desserts">
        Desserts
      </a>
    
      
      </Menu>
 
  );
};

export default BurgerMenu;
