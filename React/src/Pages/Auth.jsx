import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import  auth  from '../utils/Firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const AuthPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const provider = new GoogleAuthProvider();
  
    const handleEmailSignUp = async (e) => {
      e.preventDefault();
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        alert('User created successfully!');
      } catch (error) {
        alert(error.message);
      }
    };
  
    const handleEmailSignIn = async (e) => {
      e.preventDefault();
      try {
        await signInWithEmailAndPassword(auth, email, password);
        alert('User signed in successfully!');
      } catch (error) {
        alert(error.message);
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
    <div>
        <Navbar />
        <div>
      <h2>Sign In</h2>
      <form onSubmit={handleEmailSignIn}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign In</button>
      </form>

      <h2>Sign Up</h2>
      <form onSubmit={handleEmailSignUp}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>

      <button onClick={handleGoogleSignIn}>Sign in with Google</button>
    </div>
    {
      auth.currentUser &&<>
        <p>{auth.currentUser.email}</p>
      </>
    }
    </div>
  )
}

export default AuthPage
