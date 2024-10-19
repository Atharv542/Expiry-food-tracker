import React, { useState } from "react";
import "./LoginSignup.css";
import { useNavigate } from 'react-router-dom';

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);

  };
  const navigate =useNavigate(); 

  
  const goHome=() =>{
    navigate('/')
  }
  


  return (
    <div className="container">
      {isLogin ? (
        <div className="form-box">
          <h2 className="white-text">Login</h2>
          <form>
            <div className="input-group">
              <input type="email" placeholder="Email" required />
            </div>
            <div className="input-group">
              <input type="password" placeholder="Password" required />
            </div>
            <button onClick={goHome} className="btn" type="submit">
              Login
            </button>
          </form>
          <p className="switch-text">
            Don't have an account?{" "}
            <span className="toggle" onClick={toggleForm}>
              Sign up here
            </span>
          </p>
        </div>
      ) : (
        <div className="form-box">
          <h2 className="white-text">Sign Up</h2>
          <form>
            <div className="input-group">
              <input type="text" placeholder="Name" required />
            </div>
            <div className="input-group">
              <input type="email" placeholder="Email" required />
            </div>
            <div className="input-row">
              <input type="password" placeholder="Password" required />
              <input type="tel" placeholder="Phone Number" required />
            </div>
            <button className="btn" type="submit">
              Sign Up
            </button>
          </form>
          <p className="switch-text">
            Already have an account?{" "}
            <span className="toggle" onClick={toggleForm}>
              Log in here
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default LoginSignup;

