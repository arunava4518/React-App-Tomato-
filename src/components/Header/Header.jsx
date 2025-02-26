import React from 'react';
import './Header.css';  // Importing the CSS file

const Header = () => {
  return (
    <div className="header">
      <div className='header-contents'> 
      <h2>Order your favourite food here</h2>
      <p>Choose a delicious menu from the list and have a precious experience</p>
      <button>View Menu</button>
      </div>
    </div>
  );
}

export default Header;
