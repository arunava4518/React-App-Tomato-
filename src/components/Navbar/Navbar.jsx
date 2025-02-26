// import React, { useState } from 'react';
// import './Navbar.css';
// import { assets } from './../../assets/assets';
// const Navbar = () => {
//   const [menu, setMenu] = useState("home");
//   return (
//     <div className='navbar'>
//       <img src={assets.logo} alt="Logo" className='logo' />
//       <ul className='Navbar-menu'>
//         <li className={menu === "home" ? "active" : ""} onClick={() => setMenu("home")}>Home</li>
//         <li className={menu === "menu" ? "active" : ""} onClick={() => setMenu("menu")}>Menu</li>
//         <li className={menu === "mobile-app" ? "active" : ""} onClick={() => setMenu("mobile-app")}>Mobile App</li>
//         <li className={menu === "contact-us" ? "active" : ""} onClick={() => setMenu("contact-us")}>Contact Us</li>
//       </ul>
//       <div className='navbar-right'>
//         <img src={assets.search_icon} alt="Search Icon" />
//         <div className='navbar-search-icon'>
//           <img src={assets.basket_icon} alt="Basket Icon" />
//           <div className='dot'></div>
//         </div>
//         <button>Sign In</button>
//       </div>
//     </div>
//   );
// }
// export default Navbar;
import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom'; // Ensure Link is imported

const Navbar = ({ setshowLogin }) => {
  const [menu, setMenu] = useState("menu");

  return (
    <div className='navbar'>
      <Link to='/'>
        <img src={assets.logo} alt="no" className='logo' />
      </Link>
      <ul className='navbar-menu'>
        <li onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</li>
        <li onClick={() => setMenu('menu')} className={menu === "menu" ? "active" : ""}>Menu</li>
        <li onClick={() => setMenu('mobile-app')} className={menu === "mobile-app" ? "active" : ""}>Mobile-App</li>
        <li onClick={() => setMenu('contact-us')} className={menu === "contact-us" ? "active" : ""}>Contact Us</li>
      </ul>
      <div className='navbar-right'>
        <img src={assets.search_icon} alt="" />
        <div className='navbar-search-icon'>
          <Link to='/Cart'>
            <img src={assets.basket_icon} alt="" />
          </Link>
          <div className='dot'></div>
        </div>
        <button onClick={() => setshowLogin(true)}>sign in</button>
      </div>
    </div>
  );
};

export default Navbar;


