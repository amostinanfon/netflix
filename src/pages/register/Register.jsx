import { useRef, useState } from 'react';
import './register.scss'




function Register() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  }
  const handleFinish = () => {
    setPassword(passwordRef.current.value);
  }

  return (
    <div className="register">
        <div className="top">
           <div className="wrapper">
            <img src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' alt=''/>
            <button className="loginbutton">Sing In</button>
           </div>
        </div>
        <div className="container">
            <h1>Unlimited movies , TV shows, and more</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <p>
                Ready to watch ? Enter your Email to create or restart your membership
            </p>
            {
              !email ? (
                <div className="input">
                <input 
                type="email"
                placeholder='amostinanfon17@gmail.com'
                ref={emailRef}
                onClick={handleStart}
                 />
                 <button className="registerButton">
                    Get Started
                 </button>
            </div> ) : (
                 <div className="input">
                 <input 
                 type="password"
                 placeholder='password'
                 ref={passwordRef}
                 onClick={handleFinish}
                  />
                  <button className="registerButton">
                     Start
                  </button>
             </div>
            )
            }
        </div>
    </div>
  )
}

export default Register