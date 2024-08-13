import React from 'react'
import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Success() {

    useEffect(() => {
        AOS.init({
          duration: 1500, // Animation duration
          offset: 200,    // Offset (in pixels) from the original trigger point
        });
      }, [])

  return (
   <section className='success'>
    <h1 className='succcess-head'>Our <span> Success</span></h1>
    <div className='success-icons'>
        <div data-aos="slide-up" className='success-icon'>
        <img width="100" height="100" src="https://img.icons8.com/ios-filled/100/FD7E14/group-foreground-selected.png" alt="group-foreground-selected"/>
           <h1>40k+</h1>
           <h2>Happy Clients</h2>
        </div>
        <div data-aos="slide-down" className='success-icon'>
        <img width="100" height="100" src="https://img.icons8.com/ios-filled/100/FD7E14/microsoft-visio.png" alt="microsoft-visio"/>
           <h1>10+</h1>
           <h2>Products</h2>
        </div>
        <div data-aos="slide-up" className='success-icon'>
        <img width="100" height="100" src="https://img.icons8.com/ios-filled/100/FD7E14/marker.png" alt="marker"/>
           <h1>8+</h1>
           <h2>Locations</h2>
        </div>
        <div data-aos="slide-down" className='success-icon'>
        <img width="100" height="100" src="https://img.icons8.com/ios-filled/100/FD7E14/conference-background-selected.png" alt="conference-background-selected"/>
           <h1>400+</h1>
           <h2>Employees</h2>
        </div>
    </div>
   </section>
  )
}

export default Success