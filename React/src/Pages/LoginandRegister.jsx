import React from 'react'
import './LGRG.css';
import { Link } from "react-router-dom";

const LoginandRegister = () => {
  return (
    <>
  <div className="wrapper">
  <nav className="nav">
    <div className="nav-logo">
      <p>LOGO .</p>
    </div>
    <div className="nav-menu" id="navMenu">
      <ul>
        <li>
          <a href="#" className="link active">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="link">
            Blog
          </a>
        </li>
        <li>
          <a href="#" className="link">
            Services
          </a>
        </li>
        <li>
          <a href="#" className="link">
            About
          </a>
        </li>
      </ul>
    </div>
    <div className="nav-button">
      <button className="btn white-btn" id="loginBtn" onclick="login()">
        Sign In
      </button>
      <button className="btn" id="registerBtn" onclick="register()">
        Sign Up
      </button>
    </div>
    <div className="nav-menu-btn">
      <i className="bx bx-menu" onclick="myMenuFunction()" />
    </div>
  </nav>
  {/*--------------------------- Form box ---------------------------------*/}
  <div className="form-box">
    {/*----------------- login form ------------------------*/}
    <div className="login-container" id="login">
      <div className="top">
        <span>
          Don't have an account?{" "}
          <a href="#" onclick="register()">
            Sign Up
          </a>
        </span>
        <header>Login</header>
      </div>
      <div className="input-box">
        <input
          type="text"
          className="input-field"
          placeholder="Username or Email"
        />
        <i className="bx bx-user" />
      </div>
      <div className="input-box">
        <input type="password" className="input-field" placeholder="Password" />
        <i className="bx bx-lock-alt" />
      </div>
      <div className="input-box">
        <input type="submit" className="submit" defaultValue="Sign In" />
      </div>
      <div className="two-col">
        <div className="one">
          <input type="checkbox" id="login-check" />
          <label htmlFor="login-check"> Remember Me</label>
        </div>
        <div className="two">
          <label>
            <a href="#">Forgot password?</a>
          </label>
        </div>
      </div>
    </div>
    {/*----------------- registration form ------------------------*/}
    <div className="register-container" id="register">
      <div className="top2">
        {/* <span>Have an account? <a href="#" onclick="login()">Login</a></span> */}
        <header>Sign Up</header>
      </div>
      <div className="two-forms">
        <div className="input-box">
          <input type="text" className="input-field" placeholder="Firstname" />
          <i className="bx bx-user" />
        </div>
        <div className="input-box">
          <input type="text" className="input-field" placeholder="Lastname" />
          <i className="bx bx-user" />
        </div>
      </div>
      <div className="two-forms">
        <div className="input-box">
          <input
            type="number"
            className="input-field"
            placeholder="Phone Number"
          />
          <i className="bx bx-phone" />
        </div>
        <div className="input-box">
          <input type="number" className="input-field" placeholder="Pin Code" />
          <i className="bx bx-home" />
        </div>
      </div>
      <div className="input-box">
        <input type="text" className="input-field" placeholder="Address" />
        <i className="bx bx-home" />
      </div>
      <div className="input-box">
        <input type="text" className="input-field" placeholder="Email" />
        <i className="bx bx-envelope" />
      </div>
      <div className="input-box">
        <input type="password" className="input-field" placeholder="Password" />
        <i className="bx bx-lock-alt" />
      </div>
      <div className="input-box">
        <input type="submit" className="submit" defaultValue="Register" />
      </div>
      <div className="two-col">
        <div className="one">
          <input type="checkbox" id="register-check" />
          <label htmlFor="register-check"> Remember Me</label>
        </div>
        <div className="two">
          <label>
            <a href="#">Terms &amp; conditions</a>
          </label>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default LoginandRegister
