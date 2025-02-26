// import React, { Component } from 'react';

// export default class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: 'hi',
//     };
//     console.log('constructor');
//   }

//   componentDidMount() {
//     console.log('componentDidMount');
//   }

//   render() {
//     console.log('render');
//     return (
//       <div>
//         <h1>Component Did Mount</h1>
//         <h2>Name: {this.state.name}</h2>
//         <button onClick={() => this.setState({ name: 'bye' })}>
//           Change Name
//         </button>
//       </div>
//     );
//   }
// }
// import React, { Component } from 'react';

// export default class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0,
//     };
//     console.log("constructor")
//   }

//   // componentDidUpdate() {
//   //   console.log('componentDidUpdate');
//   // }
//   shouldComponentUpdate(){

//      console.log("shouldcomponentupdate",this.state.count)
//      if(this.state.count<5)
//      {
//       return true
//      }
//      else{
//       return false
//      }
//   }

//   render() {
//     console.log('render');
//     return (
//       <div>
//         <h1>Count: {this.state.count}</h1>
//         <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//           Update
//         </button>
//       </div>
//     );
//   }
// }

//  import React, { Component } from 'react'
 
//  export default class App extends Component {
//   state={
//     isshow:false
//   }
//    render() {
//      return (
//        <>
//         <h1>{this.state.isshow?"im online":"im offline"}</h1>
//        </>
//      )
//    }
//  }
 
// import React, { Component } from 'react';
// import Whatsapp from './whatsapp.jsx';
// import Instagram from './Instagram.jsx';

// export default class App extends Component {
//   state = {
//     isshow: true
//   };

//   render() {
//     return (
//       <div>
//         <h1>{this.state.isshow ? <Whatsapp /> : <Instagram />}</h1>
//         <button onClick={() => this.setState({ isshow: !this.state.isshow })}>
//           Toggle
//         </button>
//       </div>
//     );
//   }
// }

// import React, { Component } from 'react'
// export default class extends Component {
//   componentDidMount(){
//     let h1tag=document.querySelector('h1')
//     console.log(h1tag);
//   }
//   render() {
//     return (
//       <div>
//         <h1>hello</h1>
//       </div>
//     )
//   }
// }
// import React, { Component, createRef } from 'react'

// export default class App extends Component {
//   constructor() {
//     super();
//     this.h1tag = createRef();
//   }

//   componentDidMount() {
//     console.log(this.h1tag.current)
//   }

//   handleChange = () => {
//     this.h1tag.current.style.color = "red"
//   };

//   render() {
//     return (
//       <div>
//         <h1 ref={this.h1tag}>Hello</h1>
//         <button onClick={this.handleChange}> Color</button>
//       </div>
//     );
//   }
// }
// import React from 'react'
// import Navbar from './components/Navbar/Navbar'
// import { Routes,Route } from 'react-router-dom'
// const App = () => {
//   return (
//     <div className='app'>
//       <Navbar/>
//       <Routes>
//         <Route path='/' element={<Home/>}/>
//         <Route path='' element={<Cart/>}/>
//         <Route path='' element={<Placeorder/>}/>
//       </Routes>
//     </div>
//   )
// }
// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar/Navbar';
// import Home from './pages/Home/Home';
// import Cart from './pages/Cart/Cart';
// import Placeorder from './pages/Placeorder/Placeorder';

// const App = () => {
//   return (
//     <div className="app">
//       <Navbar />
//       <Routes>
//         <Route path="/home" element={<Home />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/placeorder" element={<Placeorder />} />
//       </Routes>
//     </div>
//   );
// };

// export default App;






import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import Placeorder from './pages/Placeorder/Placeorder';
import Footer from './components/Footer/Footer';
import LoginPopUp from './components/LoginPopUp/LoginPopUp';

const App = () => {
  const[showLogin,setshowLogin]=useState(false)
  return (
    <>
    {showLogin?<LoginPopUp setshowLogin={setshowLogin}/>:<></>}
    <div className='app'>
      <Navbar setshowLogin={setshowLogin}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} /> 
        <Route path="/Placeorder" element={<Placeorder />} />
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App




// import React, { useEffect, useState } from 'react';
// import axios from 'axios'

// const App = () => {
//   const [state, setState] = useState([])

//   const getApi = async () => {
//     const { data } = await axios.get('https://api.github.com/users')
//     setState(data)
//     console.log(data);
//   };

//   useEffect(() => {
//     getApi();
//   }, [])

//   return (
//     <div>
//       {state.map((x) => ( 
//         <div> 
//           <h1>{x.id}</h1>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default App;
