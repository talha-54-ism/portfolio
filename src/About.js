import React from 'react'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


function About() {

  const handleLinkClick = (url) => {
    window.open(url, '_blank');
  };


  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      offset: 200,    // Offset (in pixels) from the original trigger point
    });
  }, [])

  return (
    <>
      <section id='aboutsection' class="about">
        <div className='aboutup'>
          <div data-aos="flip-right" className='about-info'>
            <div className='info-left'>
              <h1>About Me</h1>
              <p>"Embark on a transformative journey with our Innovative IT Solutions. We are dedicated to delivering cutting-edge technology solutions that transcend traditional boundaries, empowering your business to reach new heights. Our expertise spans from robust software development to fortifying secure network infrastructure, guaranteeing a seamless integration of technology tailored to meet your ever-evolving needs. At the heart of our mission lies a commitment to making your success our topmost priority in navigating the dynamic terrain of the digital landscape."</p>
              <div className='about-logo'>
                <a href='#' onClick={() => handleLinkClick('https://pk.linkedin.com/')}   ><img width="50" height="50" src="https://img.icons8.com/ios-filled/50/4D4D4D/linkedin.png" alt="linkedin" /></a>
                <a href='#' onClick={() => handleLinkClick('https://www.facebook.com/Meta')} ><img width="50" height="50" src="https://img.icons8.com/ios-filled/50/4D4D4D/twitter.png" alt="twitter" /></a>
                <a href='#' onClick={() => handleLinkClick('https://www.facebook.com/Meta')} ><img width="50" height="50" src="https://img.icons8.com/ios-filled/50/4D4D4D/facebook-new.png" alt="facebook-new" /></a>
                <a href='#' onClick={() => handleLinkClick('https://www.instagram.com/accounts/login/')} ><img width="50" height="50" src="https://img.icons8.com/ios-filled/50/4D4D4D/instagram-new--v1.png" alt="instagram-new--v1" /></a>
              </div>
            </div>
            <div className='info-rgt'>
              <span className='experienceee'>02</span>
              <h3>Years Of Experience</h3>
            </div>
            <div className='about-logos'>

            </div>
          </div>


        </div>
        <div className='aboutdown'>
          <div data-aos="fade-in" className='exp'>
            <img width="100" height="100" src="https://img.icons8.com/ios-filled/100/FD7E14/bullish.png" alt="bullish" />
            <h1>2 YEARS</h1>
            <h2>Global Markete</h2>
          </div>
          <div data-aos="fade-in" className='exp'>
            <img width="100" height="100" src="https://img.icons8.com/ios-filled/100/FD7E14/briefcase-settings.png" alt="briefcase-settings" />
            <h1>2 YEARS</h1>
            <h2>Industry experience</h2>
          </div>
          <div data-aos="fade-in" className='exp'>
            <img width="100" height="100" src="https://img.icons8.com/ios-filled/100/FD7E14/signing-a-document.png" alt="signing-a-document" />
            <h1>1000 HOURS</h1>
            <h2>Content</h2>
          </div>
          <div data-aos="fade-in" className='exp'>
            <img width="100" height="100" src="https://img.icons8.com/ios-filled/100/FD7E14/around-the-globe.png" alt="around-the-globe" />
            <h1>20+ CLIENTS</h1>
            <h2>World Wide</h2>
          </div>
        </div>
      </section>
    </>
  )
}

export default About