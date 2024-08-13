import React from 'react'
import { useEffect, useState } from 'react';
import { db } from './firebase';
import picemp from './Images/mmp.jpg'
import picemp1 from './Images/emp30.jpg'
import picemp2 from './Images/final2.jpg'
import picemp3 from './Images/final.jpg'
import AOS from 'aos';
import employepic from '../src/Images/emp2.png'
import 'aos/dist/aos.css';
import { collection, doc, getDoc, getDocs } from "firebase/firestore"; 
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import wedding from './Images/wedding.jpg';
import rocks from './Images/rocks.jpg';
import falls2 from './Images/falls2.jpg';
import paris from './Images/paris.jpg';
import nature from './Images/nature.jpg';
import mist from './Images/mist.jpg';
import underwater from './Images/underwater.jpg';
import ocean from './Images/ocean.jpg';
import mountainskies from './Images/mountainskies.jpg';

function Team() {

    
  var settings = {
    autoplay: true,
    autoplaySpeed: 1000,
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll:1
  };

  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const teamData = [];
        // const collectionRef = firestore.collection("Teammembers");
        const Team = collection(db, "Teammembers");
        //for Complete Collection
        const querySnapshot = await getDocs(collection(db, "Teammembers"));
        querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        teamData.push(doc.data())
    
      
});
        setTeamMembers(teamData);
      } catch (error) {
        console.error("Error fetching team data: ", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1500, // Animation duration
      offset: 200,    // Offset (in pixels) from the original trigger point
    });
  }, [])

  return (

    <section id='teamsection' >
     <h1 className='team-head'>PROJECTS I <span>CREATED</span></h1>
        {/* <div  className="card-container">
        <Slider {...settings}>
        {teamMembers.map((Member) => (
          <div className='empty'>
        <div key={Member.id} data-aos="flip-up"  className="card">
        <div className="card-image">
            <img src={picemp2} />
          </div>
          <div className="card-content">
            <h2>{Member.Name}</h2>
            <p>{Member.description}</p>
          </div>
        </div>
        </div>
        
        
      ))}
       </Slider>
        </div> */}
 
 <div className="row">
      <div className="column">
        <img src={wedding} alt="wedding" />
        <img src={rocks} alt="rocks" />
        <img src={falls2} alt="falls2" />
        <img src={paris} alt="paris" />
        <img src={nature} alt="nature" />
        <img src={mist} alt="mist" />
        <img src={paris} alt="paris" />
      </div>
      <div className="column">
        <img src={underwater} alt="underwater" />
        <img src={ocean} alt="ocean" />
        <img src={wedding} alt="wedding" />
        <img src={mountainskies} alt="mountainskies" />
        <img src={rocks} alt="rocks" />
        <img src={underwater} alt="underwater" />
      </div>
      <div className="column">
      <img src={paris} alt="paris" />
        <img src={nature} alt="nature" />
        <img src={mist} alt="mist" />
        <img src={paris} alt="paris" />
        <img src={wedding} alt="wedding" />
        <img src={rocks} alt="rocks" />
        <img src={falls2} alt="falls2" />
      
      </div>
      <div className="column">
  
        <img src={rocks} alt="rocks" />
        <img src={underwater} alt="underwater" />
        <img src={underwater} alt="underwater" />
        <img src={ocean} alt="ocean" />
        <img src={wedding} alt="wedding" />
        <img src={mountainskies} alt="mountainskies" />
      </div>
    </div>
   </section>

  )
  
}

export default Team