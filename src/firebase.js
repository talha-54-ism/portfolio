import { initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Provider } from "react-redux";

const firebaseConfig = {
  apiKey: "AIzaSyBJjZkHNZy-PB_qF2-6ZDFxViOgI8OEE5k",
  authDomain: "login-e2699.firebaseapp.com",
  projectId: "login-e2699",
  storageBucket: "login-e2699.appspot.com",
  messagingSenderId: "1048214897769",
  appId: "1:1048214897769:web:201ac60d7c82cef71e4ef8",
  measurementId: "G-ZEDF82FKD8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider= new GoogleAuthProvider();
console.log("run successfully", db)
export { db,app ,auth};