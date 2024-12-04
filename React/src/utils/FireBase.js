import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwcQnovtrBGvmTQcckd_EZF-rXwBWNxjA",
  authDomain: "rate-e-product.firebaseapp.com",
  projectId: "rate-e-product",
  storageBucket: "rate-e-product.firebasestorage.app",
  messagingSenderId: "993397680656",
  appId: "1:993397680656:web:ddb2797697c34b2274b895",
  measurementId: "G-S2PCLGF9JH"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth
