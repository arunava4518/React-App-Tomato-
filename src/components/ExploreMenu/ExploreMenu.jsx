import React from 'react';
 import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className="explore-menu" id='explore-menu'>
      <h2>Explore our Menu</h2>
      <p className='explore-menu-list'>choose your favourite dishes from the list and enjoy your day</p>
      <div className='explore-menu-list'>
  {menu_list.map((item, index) => {
    return (
      <div 
  key={index} 
  onClick={() => setCategory(prev => (prev === item.menu_name ? "All" : item.menu_name))} 
  className="explore-menu-list-item">
  <img className={category === item.menu_name ? "active" : ""} 
    src={item.menu_image}/>
  <p>{item.menu_name}</p>
</div>
    );
  })}
</div>
 
    </div>
  );
};

export default ExploreMenu;
