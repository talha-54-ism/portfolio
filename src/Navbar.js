import React from 'react'
import ReactDOM from 'react-dom';
import { useState } from 'react';
import Dashboard from './Dashboard';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route, Link } from 'react-router-dom';
import { signInWithGoogle } from './firebase';

function Navbar() {

  const Username = "admin"
  const Password = "admin@123"
  ////dashboard//////////////////////////////////////////////////
  const dash = () => {

    var username = prompt("Enter your username:");
    var password = prompt("Enter your password:");

    // Here you can implement your login logic
    // For simplicity, let's just display the entered credentials
    alert("Username: " + username + "\nPassword: " + password);
    if (password === Password && username === Username) {
      // Render the Dashboard component in the current window
      ReactDOM.render(<Dashboard />, document.getElementById('root'));
    } else {
      alert("Invalid username or password");
    }


  }

  ////////////////////////////////////////////////////////////////////////////
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (

    <div className='navbar'>
      <div className='logo'>
        <h1 className='logo-title'>WEB<span>WIZARDS.</span></h1>
      </div>

      <div className='nav-items'>
        <ul>
          <a href='#Homesection'>Home</a>
          <a href='#contactsection'>Contact</a>
          <a href='#servicesection'>Services</a>
          <a href='#testinomialssection'>Testimonials</a>
          <a href='#teamsection'>Team</a>
          <a href='#signinsection'>Contact us</a>
          <a href='#usersection'>Signin</a>

        </ul>

      </div>
      <div className='dashhh'>
        <button className='dashbtn' onClick={dash}>Dashboard</button>
      </div>


    </div>

  )
}

export default Navbar