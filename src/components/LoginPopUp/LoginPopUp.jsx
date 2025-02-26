import React, { useState } from 'react'
import './LoginPopUp.css'
import { assets } from '../../assets/assets'
const LoginPopUp = ({setshowLogin}) => {
    const[currState,setCurrState]=useState("Login")
  return (
    <div className='login-popup'>
      <form className='login-popup-container'>
      <div className='login-popup-title'>
      <h2>{currState}</h2>
      <img onClick={()=>setshowLogin(false)} src={assets.cross_icon} alt="" />
      </div> 
      <div className='login-popup-inputs'>
      {currState === "Login" ? <></> : <input type="text" placeholder="your name" required />}
         <input type='email' placeholder='your email'
         required/>
         <input type='text' placeholder='your password'
         required/>
      </div>
      <button>{currState==='sign up'?'Create account':'Login'}</button>
      <div className='login-popup-condition'>
       <input type="checkbox" required />  
       <p>I am Agree for terms & privacy policy</p>
      </div>
      {currState==="Login"
      ?<p>Create a New Account?<span onClick={()=>{setCurrState("sign Up")}}>click here</span></p>
      :<p>Already have an Account?<span onClick={()=>{setCurrState("Login")}}>Click here</span></p>
    } 
</form>

    </div>
  )
}

export default LoginPopUp
