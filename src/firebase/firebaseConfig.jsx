// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVslwAm0dGLMmVQeqZTUoTcRMo3cYVacE",
  authDomain: "eshop-4.firebaseapp.com",
  projectId: "eshop-4",
  storageBucket: "eshop-4.appspot.com",
  messagingSenderId: "150854025689",
  appId: "1:150854025689:web:d2057e59c63c751ccb59c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDb=getFirestore(app);
const auth=getAuth(app)
export {fireDb,auth}