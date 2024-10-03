import React, { useState ,useEffect } from 'react'
import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword } from "firebase/auth";
import ReactDOM from 'react-dom';
import { useHistory } from 'react-router-dom';
import { getAllByAltText } from '@testing-library/react';
import loginbro from './Images/Login.gif'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Main from './Main';
import Dashboard from './Dashboard';


function Login() {

    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration
          offset: 200,    // Offset (in pixels) from the original trigger point
        });
      }, [])
     
const auth=getAuth()
const [email,setEmail]=useState("")
const [password ,setPassword]=useState("")
    
const signup=()=>{
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log(user)
            alert("account created successfully")
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorCode)
            // ..
          }); 
    }
    const signin=()=>{
        const auth = getAuth();
       signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert("signin successfully")
    // ...
    checkUserRole(user.uid);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorCode);
  });
    }


     // Function to check user role
  const checkUserRole = (userId) => {


  
    const userRole = 'admin'; 

    // Redirect based on user role
    if (userRole === 'admin') {
      ReactDOM.render(<Dashboard/>, document.getElementById('root')); // Redirect to admin dashboard
    } else {
     alert("invalid credentials") // Redirect to user app
    }
  };

  return (
    <section  id='usersection' className='usersection'>
     
    <div data-aos="slide-right" className='signup'>
        <h1>SIGN<span>IN</span></h1>
        <input type={'email'} placeholder="enter your email" onChange={(e)=>setEmail(e.target.value)}></input>
        <input type={'Password'} placeholder="enter Password" onChange={(e)=>setPassword(e.target.value)}></input>
        <div className='btn-action'>
        <button onClick={signup} className='createacc'>Sign up</button>
        <button onClick={signin} className='createacc'>Sign in</button>
        </div>
    </div>
    <div data-aos="slide-left" className='login-logo'>
      <img src={loginbro}></img>
    </div>
    </section>
  )
}

export default Login