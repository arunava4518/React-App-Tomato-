// import React, { createContext, useState } from 'react';
// import { food_list } from '../assets/assets';
// export const StoreContext = createContext(null);
// const StoreContextProvider = (props) => {
//   const [cartItems, setCartItems] = useState({});
//   const addToCart = (itemId) => {
//     setCartItems((prev) => ({
//       ...prev,
//       [itemId]: (prev[itemId] || 0) + 1,
//     }));
//   };
//   const removeFromCart = (itemId) => {
//     setCartItems((prev) => {
//       const updated = { ...prev };
//       updated[itemId] -= 1;
//       if (updated[itemId] <= 0) delete updated[itemId];
//       return updated;
//     });
//   };
//   const contextValue = {
//     food_list,
//     cartItems,
//     addToCart,
//     removeFromCart,
//   };
//   return (
//     <StoreContext.Provider value={contextValue}>
//       {props.children}
//     </StoreContext.Provider>
//   );
// };
// export default StoreContextProvider;'

import { createContext, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1, // Increment count or initialize to 1
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      if (updatedCart[itemId] > 1) {
        updatedCart[itemId] -= 1; // Decrement count
      } else {
        delete updatedCart[itemId]; // Remove item if count is 0
      }
      return updatedCart;
    });
  };

  const contextValue = {
    food_list,
    cartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
