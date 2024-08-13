import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import mainpic from './Images/zedge.jpg'
function Main() {


  const handleLinkClick = (url) => {
    window.open(url, '_blank');
  };

  const startproject = () => {
    <a href='#signinsection'></a>
  }


  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration
      offset: 200,    // Offset (in pixels) from the original trigger point
    });
  }, [])

  return (
    <section id='Homesection' className='Main'>

      <div className='leftside'>

        <h4 > Hi!</h4>
        <h3>THIS IS TALHA ASGHAR </h3>
        <h3>INNOVATIVE AND PROFESSIONAL <span>WEB CREATORS AND  DESIGNER</span></h3>
        <p>we are seasoned web developers with a passion for creating dynamic and responsive digital solutions.Our enthusiasm is reflected in a diverse portfolio of successful projects that highlight our skills and creativity. This portfolio stands as a testament to our commitment to delivering high-quality web development solutions.</p>
        <div className='CV'>
          <a href='#signinsection'><button className='btn1'>START A PROJECT</button></a>
          <a href='#signinsection'><button className='btn1'>MY RESUME</button></a>
        </div>



      </div>
      <div data-aos="zoom-in" className='rightside'>
        <img src={mainpic}></img>
        <a href="https://www.freepik.com/free-vector/programmer-working-flat-style_4911013.htm#fromView=search&page=1&position=6&uuid=0078cd42-07a9-4ea2-ac18-3124c68c13bc"></a>
      </div>
    </section>
  )
}

export default Main