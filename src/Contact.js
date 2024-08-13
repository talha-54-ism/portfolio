
import React from 'react'
function Contact() {

return(
    <>
    <section id='contactsection'  classNameName='contact'>
    
    <div className="contactcontainer">
      <div className="contact-items">
        <div  className="contact-item">
          <div className="icon"><img src="https://img.icons8.com/bubbles/50/000000/phone.png" /></div>
          <div className="contact-info">
            <h1>Phone</h1>
            <h2>+92 3089490061</h2>
            <h2>+92 3052011202</h2>
          </div>
        </div>
        <div className="contact-item">
          <div className="icon"><img src="https://img.icons8.com/bubbles/50/000000/new-post.png" /></div>
          <div className="contact-info">
            <h1>Email</h1>
            <h2>ta449011@gmail.com</h2>
            <h2>hack30765@gmail.com</h2>
          </div>
        </div>
        <div className="contact-item">
          <div className="icon"><img src="https://img.icons8.com/bubbles/50/000000/map-marker.png" /></div>
          <div className="contact-info">
            <h1>Address</h1>
            <h2>Zaraj Housing Society Sector B Islamabad</h2>
          </div>
        </div>
      </div>
      
    </div>
  </section>
   
  </>
  )
}

export default Contact