import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import employepic from '../src/Images/emp2.png'
import { collection,  getDocs } from "firebase/firestore"; 
import { db } from './firebase';
import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { query, orderBy, onSnapshot} from "firebase/firestore"



function Testinomial() {
  
  var settings = {
    autoplay: false,
    autoplaySpeed: 1000,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll:1
  };


//FIREBASE SETUP
  const[test ,settest]=useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const teamData = [];
        // const collectionRef = firestore.collection("test");
        const Team = collection(db, "Testinomials");
        //for Complete Collection
        const querySnapshot = await getDocs(collection(db, "Testinomials"));
        querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        teamData.push(doc.data())
    
      
});
settest(teamData);
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
    <section id='testinomialssection' className='testinomials'>
        <div className="testimonial-container">
        <div className="left-column">
        <h2>"CLIENT <span>TESTINOMIALS"</span></h2>
        </div>
        
        <div className='right-column'>
        <Slider {...settings}>
        {test.map((test) => (
        <div key={test.id}   className="rgt-up"  style={{ width: '25%' }}>
          <div className='imgg'> 
            <img src={employepic}></img></div>
         <div className='infoo'> 
          <h3>{test.Name}</h3>
          <p>{test.description}</p></div>
        </div>      
        
      ))}
       </Slider>
        </div>
    </div>
    </section>


   
  )
}

export default Testinomial











