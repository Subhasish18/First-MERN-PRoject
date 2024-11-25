import React from 'react'
import './Home.css'
import logo from '../assets/logo.jpg'
import avatar from '../assets/avatar.png'
import shopping from '../assets/shopping-cart.png'
import register from '../assets/register.png'
import gengar from '../assets/gengar.jpg'
import { Link } from "react-router-dom";

const HomePage = () => {
  return (  
<section id="bann">
  <div s>
      <nav className="navbar navbar-expand-lg navbar-dark mx-4">
    <div id="support">
      <a className="navbar-brand" href="#">
          <img src={logo} height="50px" width="50px" /> RATEit
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
    </div>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-4  mg-lg-0">
        <li className="nav-item">
          <Link className="nav-link" to="/products"
            id="navbarDropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Products
          </Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link " to="/contact">
            Contact Us
          </Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link " to="/login">
              <img src={avatar} height="35px" width="35px" className="p-1" />
              Log in
            </Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link " to="/register">
              <img
                src={register}
                height="32px"
                width="32px"
                className="p-1"
              />
              Register
            </Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link " to="/cart">
              <img src={shopping} height="40px" width="40px" /> Cart
            </Link>
        </li>
      </ul>
    </div>
  </nav>
    </div>
  <div className="row">
    <div
      className="card text-white card border-info bg-info mb-3 col-md-6 mang"
      style={{ maxWidth: "35rem" }}
    >
      <div className="card-header">Power up your game</div>
      <div className="card-body">
        <h5 className="card-title">Pokemon Infinite Fusion</h5>
        <p className="card-text">Now Available on PC &amp; Console.</p>
        <button type="submit" id="redly">
          Buy Now
        </button>
      </div>
    </div>
    <div className="col-md-6 gengar1 mb-n5">
    <img
          src={gengar}
          width="600px"
          height="650px"
          style={{ width: 600, height: 689, objectFit: "cover", borderRadius: 10}}
          fetchpriority="high"
        />
    </div>
  </div>
</section>
  )
}

export default HomePage
