import { initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import 'firebase/storage'
import { Provider } from "react-redux";

const firebaseConfig = {
  apiKey: "AIzaSyAvapAmeIKg2PlFBfDZgbtAy-oRvhxPHKU",
  authDomain: "myprofile-9eb6d.firebaseapp.com",
  projectId: "myprofile-9eb6d",
  storageBucket: "myprofile-9eb6d.appspot.com",
  messagingSenderId: "881083602523",
  appId: "1:881083602523:web:6db8a64e2e9ddaa1e7517e",
  measurementId: "G-LYPMZ6LP3F"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider= new GoogleAuthProvider();
console.log("run successfully", db)
export const signInWithGoogle=()=>signInWithPopup(auth , provider)
export { db,app ,auth};