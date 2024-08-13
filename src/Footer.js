import React from 'react'
import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Footer() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      offset: 200,    // Offset (in pixels) from the original trigger point
    });
  }, [])

  return (
    <footer className="footer-container">
      <div className='footer-box'>     
        <div data-aos="flip-down" className='footer-content'>
         <h1> Web <span>Wizards.</span></h1>
         <p> A visual journey through my passion and proficiency, showcasing a collection of my creative work and technical skills."</p> 
           <a href='https://www.linkedin.com/feed/'><img src='https://img.icons8.com/glyph-neue/50/FFFFFF/instagram-new--v1.png'  className='insta-logo'></img></a>
         <img src="https://img.icons8.com/ios-filled/50/FFFFFF/facebook-new.png"  className='insta-logo'></img>
         <img src="https://img.icons8.com/ios-filled/50/FFFFFF/linkedin.png"  className='insta-logo'></img>
        </div>
         <div data-aos="flip-down" className='footer-content'>
          <h1>Address</h1>
            <h2>F3 Technology Dr, Zaraj Housing Society Sector B</h2>
            <h2>ta449011@gmail.com</h2>
            <h2>+92 3089460061</h2>
        </div>
        <div data-aos="flip-down" className='footer-content'>
          <h1>Quick links</h1>
          <h2>About Us</h2>
          <h2>Contact Us</h2>
          <h2>Services</h2>
        </div>
        <div data-aos="flip-down" className='footer-content'>
          <h1>News letter</h1>
          <h2>Email</h2>
          <h2>ta449011@gmail.com</h2>
          <h2>hack30765@gmail.com</h2>

        </div>
      </div>
      
     
  </footer>
  )
}

export default Footer