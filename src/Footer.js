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
         <p> Living, learning, & leveling up one day at a time.</p> 
        </div>
        <div className="links">
        <a href='https://www.linkedin.com/feed/'><img src='https://img.icons8.com/glyph-neue/50/FFFFFF/instagram-new--v1.png'  className='insta-logo'></img></a>
         <img src="https://img.icons8.com/ios-filled/50/FFFFFF/facebook-new.png"  className='insta-logo'></img>
         <img src="https://img.icons8.com/ios-filled/50/FFFFFF/linkedin.png"  className='insta-logo'></img>
        </div>
  
      </div>
      
     
  </footer>
  )
}

export default Footer