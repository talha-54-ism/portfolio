
import { signInWithPopup,getAuth , GoogleAuthProvider} from "@firebase/auth";
import { initializeApp} from "firebase/app";

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
export const auth =getAuth();
const provider=new GoogleAuthProvider();

export const SigninwithGoogle=()=>signInWithPopup(auth,provider) 