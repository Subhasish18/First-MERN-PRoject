import React, { useState } from 'react';
import './Login.css';
import auth from '../utils/Firebase';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { Link } from "react-router-dom";
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const provider = new GoogleAuthProvider();

    // Handle email login
    const handleLogin = async (e) => {
        e.preventDefault();
    
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Get the Firebase ID token after login
            const idToken = await user.getIdToken();

            // Send the token to the backend for validation
            const response = await axios.post(
                'http://localhost:5000/api/login',  // Replace with your backend URL
                {},
                {
                    headers: {
                        Authorization: `Bearer ${idToken}`,
                    },
                }
            );

            alert("Login successful!");

        } catch (err) {
            setError(err.message);
        }
    };

    // Handle Google login
    const handleGoogleSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            // Get the Firebase ID token after Google login
            const idToken = await user.getIdToken();

            // Send the token to the backend for validation
            const response = await axios.post(
                'http://localhost:5000/api/login',
                {},
                {
                    headers: {
                        Authorization: `Bearer ${idToken}`,
                    },
                }
            );

            alert('User signed in with Google!');
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="login-inputs">
                        <div className="input-container">
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="input-container">
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className="button-container">
                        <button type="submit" className="login-button">Login</button>
                    </div>
                </form>

                <div className="google-signin">
                    <button onClick={handleGoogleSignIn} className="google-btn">
                        <i className="fab fa-google"></i> Sign in with Google
                    </button>
                </div>

                {error && <div className="error-message">{error}</div>}

                <div className="footer-links">
                    <p>Don't have an account? <Link to="/register">Register</Link></p>
                    <p><Link to="/">Back to Home</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
