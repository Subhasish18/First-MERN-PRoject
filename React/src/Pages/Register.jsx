import React, { useState } from 'react'
import './Register.css'
import  auth  from '../utils/Firebase';
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { Link } from "react-router-dom";


const Register = () => {
    const[name,setname]=useState('');
    const[email,setemail]=useState('');
    const[phone,setphone]=useState('');
    const [password, setPassword] = useState('');
    const provider = new GoogleAuthProvider();
    
    const handleEmailRegister = async (e) =>{
        e.preventdefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            alert('User created successfully!');
        } catch (error) {
            alert('error.message');
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
        <>
        <div className="container">
            <div className="card card1">
                <article className="card-body mx-auto" style={{ maxWidth: 400  }}>
                <h4 className="card-title mt-3 text-center">Create Account</h4>
                <p className="text-center">Get started with your free account</p>
                <p>
                    <a href="#" className="btn btn-block btn-google" onClick={handleGoogleSignIn}>
                    {" "}
                    <i className="fab fa-google" />Sign in with Google
                    </a>
                </p>
                {
                auth.currentUser &&<>
                <p>{auth.currentUser.email}</p>
                </>
                }
                <p className="divider-text">
                    <span className="bg-dark">OR</span>
                </p>
                <form>
                    <div className="form-group input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">
                        {" "}
                        <i className="fa fa-user" />{" "}
                        </span>
                    </div>
                    <input
                        name="full-name"
                        className="form-control"
                        placeholder="Full name"
                        type="text"
                    />
                    </div>
                    <div className="form-group input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">
                        {" "}
                        <i className="fa fa-envelope" />{" "}
                        </span>
                    </div>
                    <form onSubmit={handleEmailRegister}>
                    <input
                       type="email"
                       placeholder="Email"
                       value={email}
                       onChange={(e) => setemail(e.target.value)}
                       required
                    />
                    </form>
                    </div>
                    <div className="form-group input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">
                        {" "}
                        <i className="fa fa-phone" />{" "}
                        </span>
                    </div>
                    <select className="custom-select" style={{ maxWidth: 120 }}>
                        <option selected="">+91</option>
                        <option value={1}>+672</option>
                        <option value={2}>+61</option>
                        <option value={3}>+1</option>
                    </select>
                    <input
                        name="phone-number"
                        className="form-control"
                        placeholder="Phone number"
                        type="text"
                    />
                    </div>
                    <div className="form-group input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">
                        {" "}
                        <i className="fa fa-lock" />{" "}
                        </span>
                    </div>
                    <form onSubmit={handleEmailRegister}>
                    <input
                          type="password"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                    />
                    </form>
                    </div>
                    <div className="form-group input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">
                        {" "}
                        <i className="fa fa-lock" />{" "}
                        </span>
                    </div>
                    <form onSubmit={handleEmailRegister}>
                    <input
                          type="password"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                    />
                    </form>
                    </div>
                    <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-block">
                        {" "}
                        Create Account
                    </button>
                    </div>
                    <p className="small fw-bold mt-2 pt-1 mb-0">
                            Have an account?{" "}
                        <Link className="link-danger" to="/login">Login</Link>
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
                </form>
                </article>
            </div>
         </div>
        </>
  )
}

export default Register
