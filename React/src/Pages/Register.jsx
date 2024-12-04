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
                        <i className="fa fa-envelope" />{" "}
                        </span>
                    </div>
                    <form onSubmit={handleRegister}>
                        <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
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
                    <form onSubmit={handleRegister}>
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                        </form>
                        
                    </div>
                    <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-block" onClick={handleRegister}>
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
