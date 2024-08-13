import React, { useState } from 'react';
import ManageTeam from './ManageTeam';
import TestimonialsCRUD from './Managetestinomials';
import ManageProject from './Manageproject';
import Navbar from './Navbar';
import myvideo from './Images/bgvideo.mp4'

const Dashboard = () => {
  const [activeContent, setActiveContent] = useState(null);

  const showContent = (contentType) => {
    setActiveContent(contentType);
  };

  return (
    <section className='dash'>
       <video autoPlay loop muted className="video-background__video">
        <source src={myvideo} type="video/mp4" />
      </video>
      <div className='dashboard'>

        <div className='hamburger'>
          <img width="40" height="40" src="https://img.icons8.com/ios-filled/50/FAB005/menu--v6.png" alt="menu--v6" />
        </div>

        <a onClick={() => showContent('manageTeam')}><img width="40" height="40" src="https://img.icons8.com/ios-filled/50/FAB005/conference-background-selected.png" alt="conference-background-selected" /><span>Manage Projects</span></a>
        <a onClick={() => showContent('manageTestimonials')}><img width="40" height="40" src="https://img.icons8.com/ios-filled/50/FAB005/popular-topic.png" alt="popular-topic" /><span>Manage Testimonials</span></a>
        {/* <a onClick={() => showContent('manageProject')}><img width="40" height="40" src="https://img.icons8.com/ios-filled/50/FAB005/group-of-projects.png" alt="group-of-projects" /><span>Manage Projects</span></a> */}
        {/* <button className='TEAM' onClick={() => showContent('manageTeam')}>Manage Team</button>
      <button className="TEST" onClick={() => showContent('manageTestimonials')}>Manage Testimonials</button>
      <button className='PROJECTS' onClick={() => showContent('manageProject')}>Manage Projects</button> */}
      </div>
      <div className='dashboard-cont'>


        {activeContent === 'manageTeam' && (
          <div>
            <ManageTeam />
          </div>
        )}
        {activeContent === 'manageTestimonials' && (
          <div>
            <TestimonialsCRUD />
          </div>
        )}
        {activeContent === 'manageProject' && (
          <div>
            <ManageProject />
          </div>
        )}
      </div>
     


    </section>
  );
};

export default Dashboard;
