import React from 'react'
import { Link } from "react-router-dom";
// import './products.css'
import blue from '../assets/blue.jpg'
import head from '../assets/head.jpg'
import play from '../assets/play.jpg'
import vr from '../assets/vr.jpg'

const Products = () => {
  return (
   
      <>
  {/* TOP */}
  <section className="n shop-feature grid">
    <h2 className=" fs-poppins fs-300 bold-800">All Products</h2>
  </section>
  {/* CONTAINER */}
  <main className="shop-main-container grid">
    <div>
      <div className="shop-title flex">
        <div>
          <h2 className="fs-poppins fs-300 bold-800">Shop</h2>
          <p className="fs-montserrat">Showing 1-9 of 10 results</p>
        </div>
        <div>
          <select name="text" className="g fs-poppins">
            <option value="text">Default Sorting</option>
            <option value="text">Sort By Popularity</option>
            <option value="text">Sort By Rating</option>
            <option value="text">Sort By Latest</option>
            <option value="text">Sort By Price</option>
            <option value="text">Sort By Low to High</option>
            <option value="text">Sort By High to Low</option>
          </select>
        </div>
      </div>
      <section className="best-seller">
        <div className="productt grid">
          <img
            src={head}
            alt=""
          />
          <p className="White">Over 500+ designs and style of ksncfasknffnfb</p>
          <button className="j fs-montserrat">Add To Cart</button>
          <p className="fs-poppins bold-600">$995.00</p>
          <div className="product-details grid bg-red"></div>
        </div>
        <div className="productt grid">
          <img src={play} alt="" />
          <p className="White">
            Strong steel body and flexible sjfasososigsgng
          </p>
          <button className="j fs-montserrat">Add To Cart</button>
          <p className="fs-poppins bold-600">$805.00</p>
          <div className="product-details grid bg-red"></div>
        </div>
        <div className="productt grid">
          <img src={blue} alt="" />
          <p className="White">White EliteBook Tablet 810 with bla bla</p>
          <button className="j fs-montserrat">Add To Cart</button>
          <p className="fs-poppins bold-600">$1995.20</p>
          <div className="product-details grid bg-red"></div>
        </div>
        <div className="productt grid">
          <img src={vr} alt="" />
          <p className="White">Virtual Reality Set along with other GameSets</p>
          <button className="j fs-montserrat">Add To Cart</button>
          <p className="fs-poppins bold-600">$5995.50</p>
          <div className="product-details grid bg-red"></div>
        </div>
        <div className="pop-up">
          <p className="fs-poppins">Sale</p>
        </div>
        <div className="pop-upp">
          <p className="fs-poppins">Sale</p>
        </div>
        {/* <div class="message">
              <p class="fs-poppins">Sale</p>
          </div> */}
      </section>
    </div>
  </main>
  <hr className="my-4" />
<div className="pt-5">
  <h6 className="mb-0">
  <Link className="nav-link " to="/">
      <i className="fas fa-long-arrow-alt-left me-2" />
      Back to Home
    </Link>
  </h6>
</div>

  
</>

  )
}

export default Products