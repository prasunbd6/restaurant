// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkKMT6ubkm9JWwLTwEcxRM8CeO4BIsyO8",
  authDomain: "fir-auth-527cc.firebaseapp.com",
  projectId: "fir-auth-527cc",
  storageBucket: "fir-auth-527cc.appspot.com",
  messagingSenderId: "987942723457",
  appId: "1:987942723457:web:77de71a04b08ce7be05280",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app); // For Authentication
export default app;
