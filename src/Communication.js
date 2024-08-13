import React from 'react'
import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Communication() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      offset: 200,    // Offset (in pixels) from the original trigger point
    });
  }, [])


  return (
   <section className='Communicate'>
    <div className='cmain'>
        <div  className='c1image'>

        </div>
        <div data-aos="flip-right"  className='c1-content'>
           <h1  data-aos="flip-left" >We engage positive communication</h1>
            <p data-aos="flip-right" >"Our dynamic development team thrives on fostering positive communication, creating a collaborative environment where ideas flow seamlessly. Committed to excellence, our team members bring a wealth of diverse skills, and their open and constructive dialogue ensures efficient problem-solving and a vibrant atmosphere for innovation. Together, they embody a culture that values teamwork, creativity, and mutual support, driving the success of our projects."</p>
            <button className='btn-communicate'>Check for Details</button>
        </div>
        </div>
   </section>
  )
}

export default Communication