import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { collection, doc, getDoc, getDocs } from "firebase/firestore"; 
import { db } from './firebase';
import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Project() {

  var settings = {
    autoplay:false,
    autoplaySpeed: 1000,
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll:1
  };



  const[project ,setproject]=useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const teamData = [];
        // const collectionRef = firestore.collection("project");
        const Team = collection(db, "Projects");
        //for Complete Collection
        const querySnapshot = await getDocs(collection(db, "Projects"));
        querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        teamData.push(doc.data())
    
      
});
setproject(teamData);
} catch (error) {
  console.error("Error fetching team data: ", error);
}
};

fetchData();
}, []);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      offset: 200,    // Offset (in pixels) from the original trigger point
    });
  }, [])

  return (
    <section id='projectsection' className='project'>
 
      <div className='service-head'>
          <h1 className='heading'>PROJECTS WE</h1>
          <h1 className='heading'><span>CREATED</span></h1>
          <p className='service-para'>Our WebWizards Portfolio project showcases our expertise in web development. With a sleek and modern design, it highlights our team's skills in creating visually appealing and responsive websites. Explore sections such as Home, Contact, Services, Testimonials, Team, and SignIn to get a comprehensive view of our capabilities.</p>
          <div className='lets-talk'>
          <button  className='btn-talk'>LET'S TALK</button>
          </div>
        </div>
      <div className='project-cards'>
      <Slider {...settings}>
        {project.map((Project) => (
        <div key={Project.id}  className='projectinfo' style={{ width: '25%' }}>
           <div className='pinfo'>
            <h1>{Project.Name}</h1>
            <p>{Project.description}</p>
            </div>
         
        </div>
         ))}
            </Slider>
         </div>
      
    </section>
  )
}

export default Project