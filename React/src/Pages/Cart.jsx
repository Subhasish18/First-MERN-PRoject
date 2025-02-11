import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Cart.css';

const Cart = () => {
  const [quantities, setQuantities] = useState({
    1: 1,  // Product 1, starting with quantity 1
    2: 1,  // Product 2, starting with quantity 1
    3: 1,  // Product 3, starting with quantity 1
  });

  // Handle increment for specific product
  const increment = (productId) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [productId]: prevQuantities[productId] + 1,
    }));
  };

  // Handle decrement for specific product
  const decrement = (productId) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [productId]: Math.max(prevQuantities[productId] - 1, 0),
    }));
  };

  return (
    <div>
      <section className="h-100 h-custom" style={{ backgroundColor: "#d2c9ff" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12">
              <div className="card card-registration card-registration-2" style={{ borderRadius: 15 }}>
                <div className="card-body p-0">
                  <div className="row g-0">
                    <div className="col-lg-8">
                      <div className="p-5">
                        <div className="d-flex justify-content-between align-items-center mb-5">
                          <h1 className="fw-bold mb-0">Shopping Cart</h1>
                          <h6 className="mb-0 text-muted">3 items</h6>
                        </div>
                        <hr className="my-4" />
                        <div className="row mb-4 d-flex justify-content-between align-items-center">
                          <div className="col-md-2 col-lg-2 col-xl-2">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img5.webp" className="img-fluid rounded-3" alt="Cotton T-shirt" />
                          </div>
                          <div className="col-md-3 col-lg-3 col-xl-3">
                            <h6 className="text-muted">Shirt</h6>
                            <h6 className="mb-0">Cotton T-shirt</h6>
                          </div>
                          <div className="col-md-3 col-lg-3 col-xl-3 d-flex">
                            <button className="btn btn-link px-2" onClick={() => decrement(1)}>
                              <i className="fas fa-minus" />
                            </button>
                            <input
                              id="form1"
                              min={0}
                              name="quantity"
                              value={quantities[1]} // Display quantity for product 1
                              onChange={(e) => setQuantities({ ...quantities, [1]: Math.max(e.target.value, 0) })}
                              type="number"
                              className="form-control form-control-sm"
                            />
                            <button className="btn btn-link px-2" onClick={() => increment(1)}>
                              <i className="fas fa-plus" />
                            </button>
                          </div>
                          <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                            <h6 className="mb-0">€ 44.00</h6>
                          </div>
                          <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                            <a href="#!" className="text-muted">
                              <i className="fas fa-times" />
                            </a>
                          </div>
                        </div>
                        {/* Repeat the above block for other products */}
                        <hr className="my-4" />
                      </div>
                    </div>
                    <div className="col-lg-4 bg-body-tertiary">
                      <div className="p-5">
                        <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                        <hr className="my-4" />
                        <div className="d-flex justify-content-between mb-4">
                          <h5 className="text-uppercase">items 3</h5>
                          <h5>€ 132.00</h5>
                        </div>
                        <h5 className="text-uppercase mb-3">Shipping</h5>
                        <div className="mb-4 pb-2">
                          <select>
                            <option value={1}>Standard-Delivery- €5.00</option>
                            {/* Additional options */}
                          </select>
                        </div>
                        <h5 className="text-uppercase mb-3">Give code</h5>
                        <div className="mb-5">
                          <input type="text" id="form3Examplea2" className="form-control form-control-lg" />
                          <label className="form-label" htmlFor="form3Examplea2">Enter your code</label>
                        </div>
                        <hr className="my-4" />
                        <div className="d-flex justify-content-between mb-5">
                          <h5 className="text-uppercase">Total price</h5>
                          <h5>€ 137.00</h5>
                        </div>
                        <button type="button" className="btn btn-dark btn-block btn-lg">Register</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="my-4" />
              <div className="pt-5">
                <h6 className="mb-0">
                  <Link className="nav-link" to="/">
                    <i className="fas fa-long-arrow-alt-left me-2" />
                    Back to Home
                  </Link>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cart;
