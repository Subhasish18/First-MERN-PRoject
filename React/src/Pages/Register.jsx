import React, { useState } from 'react';
// import './Register.css';
import auth from '../utils/Firebase';
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { Link } from "react-router-dom";

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const provider = new GoogleAuthProvider();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            alert("Registration successful!");
        } catch (err) {
            setError(err.message);
            console.log(err);
        }
    };

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
            <div className="card1">
                <article className="card-body mx-auto" style={{ maxWidth: 400 }}>
                    <h4 className="card-title mt-3 text-center">Create Account</h4>
                    <p className="text-center">Get started with your free account</p>
                    <p>
                        <button className="btn-google" onClick={handleGoogleSignIn}>
                            <i className="fab fa-google" /> Sign in with Google
                        </button>
                    </p>

                    <div className="divider-text">
                        <span>OR</span>
                    </div>

                    <form onSubmit={handleRegister}>
                        {/* Name Field */}
                        <div className="form-group input-group">
                            <input
                                type="text"
                                placeholder="Full Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>

                        {/* Email Field */}
                        <div className="form-group input-group">
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        {/* Phone Field */}
                        <div className="form-group input-group">
                            <input
                                type="text"
                                placeholder="Phone Number"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                            />
                        </div>

                        {/* Password Field */}
                        <div className="form-group input-group">
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        {/* Error message */}
                        {error && <p className="error-message">{error}</p>}

                        {/* Submit Button */}
                        <div className="form-group">
                            <button type="submit" className="btn-primary btn-block">
                                Create Account
                            </button>
                        </div>

                        {/* Login Link */}
                        <p className="small fw-bold mt-2 pt-1 mb-0">
                            Already have an account?{" "}
                            <Link className="link-danger" to="/login">Login</Link>
                        </p>

                        <hr className="my-4" />
                        <div className="footer-links">
                            <h6 className="mb-0">
                                <Link className="nav-link" to="/">
                                    <i className="fas fa-long-arrow-alt-left me-2" />
                                    Back to Home
                                </Link>
                            </h6>
                        </div>
                    </form>
                </article>
            </div>
        </div>
    );
};

export default Register;
