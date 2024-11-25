import React from 'react'
import { Link } from "react-router-dom";
import './contact.css'


const Contact = () => {
  return (
    <>
    <section id='cont'>
    <div className="head1">
      <h2>Need a Hand?</h2>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-6 p-4">
          <div className="bgwht py-2">
            <h1>Contact Us</h1>
            <p>subhash@gmail.com</p>  
            <p>9875436553</p>
            <p>95,Shantigarh</p>
            <p>Kolkata,700040</p>
          </div>
        </div>
        <div className="col-md-6 p-3">
          <div className="bgwht">
            <label htmlFor="fname" className="form-label">
              First Name
            </label>
            <input type="text" className="form-control" id="fname" />
            <label htmlFor="lname" className="form-label">
              Last Name
            </label>
            <input type="text" className="form-control" id="lname" />
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input type="email" className="form-control" id="email" />
            <label htmlFor="phone" className="form-label">
              Phone
            </label>
            <input type="text" className="form-control" id="phone" />
            <div className="form-floating">
              <label htmlFor="floatingTextarea">Comments</label>
              <textarea
                className="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea"
                defaultValue={""}
              />
            </div>
            <button type="button" className="btn btn-lg">
              Submit
            </button>
            <hr className="my-4" />
                  <div className="pt-5">
                    <h6 className="mb-0">
                    <Link className="nav-link " to="/">
                        <i className="fas fa-long-arrow-alt-left me-2" />
                        Back to Home
                      </Link>
                    </h6>
                  </div>
          </div>
        </div>
      </div>
    </div>
</section>

    </>
  )
}

export default Contact
