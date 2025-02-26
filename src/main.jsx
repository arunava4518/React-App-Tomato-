// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
// import App from './App.jsx';
// import './index.css';
// import StoreContextProvider from './context/StoreContext';

// createRoot(document.getElementById('root')).render(
//   <BrowserRouter>
//     <StoreContextProvider>
//       <App />
//     </StoreContextProvider>
//   </BrowserRouter>
// );
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
 import "./index.css"
import { BrowserRouter } from 'react-router-dom';
import  StoreContextProvider  from './context/StoreContext';
 ReactDOM.createRoot(document.getElementById('root')).render(
   <BrowserRouter>
     <StoreContextProvider>
       <App />
     </StoreContextProvider>
   </BrowserRouter>

);

