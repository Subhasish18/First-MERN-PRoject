import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAwcQnovtrBGvmTQcckd_EZF-rXwBWNxjA",
  authDomain: "rate-e-product.firebaseapp.com",
  projectId: "rate-e-product",
  storageBucket: "rate-e-product.appspot.com",
  messagingSenderId: "993397680656",
  appId: "1:993397680656:web:ddb2797697c34b2274b895",
  measurementId: "G-S2PCLGF9JH"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);