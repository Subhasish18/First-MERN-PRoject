import React, { useState } from 'react';
import './Login.css';
import auth from '../utils/Firebase';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { Link } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const provider = new GoogleAuthProvider();

    // Handle email login
    const handleLogin = async (e) => {
        e.preventDefault();
    
        try {
          await signInWithEmailAndPassword(auth, email, password);
          alert("Login successful!");
        } catch (err) {
          setError(err.message);
        }
      };

    // Handle Google login
    const handleGoogleSignIn = async () => {
        try {
            await signInWithPopup(auth, provider);
            alert('User signed in with Google!');
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className="container">
            <section className="vh-100">
                <div className="container-fluid h-custom">
                    <div className="row d-flex justify-content-center align-items-center h-100 ">
                        <div className="col-md-9 col-lg-6 col-xl-5">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                className="img-fluid"
                                alt="Sample image"
                            />
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            {/* Form for Email Login */}
                            <form onSubmit={handleLogin}>
                                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                    <p className="lead fw-normal mb-0 me-3">Log in with</p>
                                    <button
                                        type="button"
                                        className="btn btn-primary btn-floating mx-1"
                                        onClick={handleGoogleSignIn}
                                    >
                                        <i className="fab fa-google" />
                                    </button>
                                </div>

                                <div className="divider d-flex align-items-center my-4">
                                    <p className="text-center fw-bold mx-3 mb-0">Or</p>
                                </div>

                                {/* Email input */}
                                <div className="form-outline mb-4">
                                <form onSubmit={handleLogin}>
                                    <input
                                        type="email"
                                        id="form3Example3"
                                        className="form-control form-control-lg"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                    <label className="form-label" htmlFor="form3Example3">Email address</label>
                                    </form>
                                </div>

                                {/* Password input */}
                                <div className="form-outline mb-4">
                                <form onSubmit={handleLogin}>
                                    <input
                                        type="password"
                                        id="form3Example4"
                                        className="form-control form-control-lg"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                    <label className="form-label" htmlFor="form3Example4">Password</label>
                                    </form>
                                </div>

                                <div className="d-flex justify-content-between align-items-center">
                                    {/* Remember me checkbox */}
                                    <div className="form-check mb-0">
                                        <input
                                            className="form-check-input me-2"
                                            type="checkbox"
                                            defaultValue=""
                                            id="form2Example3"
                                        />
                                        <label className="form-check-label" htmlFor="form2Example3">
                                            Remember me
                                        </label>
                                    </div>
                                    <a href="#!" className="text-body">Forgot password?</a>
                                </div>

                                {/* Submit button */}
                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-lg"
                                        style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                                        onClick={handleLogin}
                                    >
                                        Login
                                    </button>
                                    <p className="small fw-bold mt-2 pt-1 mb-0">
                                        Don't have an account?{" "}
                                        <Link className="link-danger" to="/register">Register</Link>
                                    </p>
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
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;
