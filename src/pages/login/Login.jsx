import { useRef, useState } from 'react';
import './login.scss'




function Login() {

  return (
    <div className="login">
        <div className="top">
           <div className="wrapper">
            <img src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' alt=''/>
           </div>
        </div>
        <div className="container">
            <form action="">
                <h1>Sign In</h1>
                <input type="email" placeholder='Email Adress or phone number' />
                <input type="passowrd" placeholder='Password' />
                <button className="loginButtom">Sign In</button>
                <span>New to Netflix ? <b>Sign up now.</b></span>
                <small>
                    This app is protected by Google reCAPTCHA to ensure you're a bot
                    <b>Learn more</b>.
                </small>
            </form>
        </div>
    </div>
  )
}

export default Login