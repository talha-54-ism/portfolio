import React, { useEffect, useState } from "react";
import {auth} from './Fireauthentication'

const Contacform = () => {


  // displaying map



  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };

  // connect with firebase
  const submitData = async (event) => {
    event.preventDefault();
    const { firstName, lastName, phone, email, address, message } = userData;

    if (firstName && lastName && phone && email && address && message) {
      const res = fetch('https://practice-9592e-default-rtdb.firebaseio.com/userdataRecords.json',
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            phone,
            email,
            address,
            message,
          }),
        }
      );
    
      if (res) {
        setUserData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          address: "",
          message: "",
        });
        alert("Data Stored");
      } else {
        alert("plz fill the data");
      }
    } else {
      alert("plz fill the data");
    }
  };

  return (
    <>
       <section id='signinsection' className='Sign'>
             
                <div className="signinform">
                  <form className='FORM' method="POST">
                        <h1 className="signin-head">GET IN<span>TOUCH</span></h1>
                        <input type="text" name="firstName" id=""className="form-control" placeholder="First Name" value={userData.firstName} onChange={postUserData}/>
                        <input type="text" name="lastName" id=""className="form-control"placeholder="Last Name" value={userData.lastName} onChange={postUserData}/>
                        <input type="text" name="phone" id=""className="form-control"  placeholder="Phone Number "value={userData.phone}  onChange={postUserData}/>
                        <input type="text"  name="email" id=""className="form-control" placeholder="Email ID"  value={userData.email} onChange={postUserData}/>
                        <input type="text" name="address" id=""className="form-control" placeholder="Add Address" value={userData.address} onChange={postUserData}/>
                        <input type="text" name="message" id=""className="form-control1"  placeholder="Enter Your Message" value={userData.message} onChange={postUserData}/>
                        <input class="form-check-input" type="checkbox" value=""/>
                        <button type="submit"className="btn-submit" onClick={submitData}>Submit</button>
                  </form>
                </div>
                <div className='map'>
      <iframe style={{ width: "600px", height: "450px", border: "0" }}  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13305.946833502176!2d73.1513582!3d33.5147293!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dff274290408b7%3A0xde84a16e46c58b7!2sF3%20Technologies!5e0!3m2!1sen!2s!4v1707723493447!5m2!1sen!2s" ></iframe>
      </div>
              
             
      </section> 
    </>
  );
};

export default Contacform;