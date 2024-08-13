import React from 'react'
import { collection, doc, getDoc, getDocs ,addDoc , query, orderBy, onSnapshot , updateDoc, deleteDoc} from "firebase/firestore"; 
import { db } from './firebase';
import { useEffect, useState } from 'react';



function Managetestinomials() {
    const [testimonials, setTestimonials] = useState([]);
    const [newTestimonial, setNewTestimonial] = useState({ Name: '', description: '' });
    const [selectedImage, setSelectedImage] = useState(null);

     // Add a function to upload Image
    const handleImageChange = (e) => {
        const file = e.target.files[0];
    
        if (file) {
          // Perform any additional logic with the selected file if needed
          setSelectedImage(file);

        }
      };
    
  
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
    setTestimonials(teamData);
    } catch (error) {
      console.error("Error fetching team data: ", error);
    }
    };
    
    fetchData();
    }, []);
    

  // Add a function to handle ADD a testimonial
    
    const addTestimonial = async () => {
        try {
          const docRef = await addDoc(collection(db, "Testinomials"), newTestimonial);
          setTestimonials((prevTestimonials) => [...prevTestimonials, { id: docRef.id, ...newTestimonial }]);
          setNewTestimonial({ Name: '', description: '' }); // Clear the input fields after adding
        } catch (error) {
          console.error("Error adding testimonial: ", error);
        }
      };
      
    // Add a function to handle updating a testimonial
const updateTestimonial = async (id) => {
  try {
    const docRef = doc(db, "Testinomials", id);
    await updateDoc(docRef, newTestimonial);
    setTestimonials((prevTestimonials) => {
      return prevTestimonials.map((testimonial) =>
        testimonial.id === id ? { ...testimonial, ...newTestimonial } : testimonial
      );
    });
    setNewTestimonial({ Name: '', description: '' }); // Clear the input fields after updating
  } catch (error) {
    console.error("Error updating testimonial: ", error);
  }
};

  // Add a function to handle deleting a testimonial

  
  const deleteTestimonial = async (id) => {
    try {
      await deleteDoc(doc(db, "Testimonials", id));
  
      // Update the state by filtering out the deleted testimonial
      setTestimonials((prevTestimonials) =>
        prevTestimonials.filter((testimonial) => testimonial.id !== id)
      );
    } catch (error) {
      console.error("Error deleting testimonial:", error.message);
    }
  };
  
    return (
        <section className='Managetestinomials' id='managetestsection'>
      <div>
        <h1 >Manage<span>Testimonials</span></h1>
  
        {/* Create Operation - Add Testimonial */}
        <div className='inputfields'>
          <input
          className='add-test'
            type="text"
            placeholder="Name"
            value={newTestimonial.Name}
            onChange={(e) => setNewTestimonial({ ...newTestimonial, Name: e.target.value })}
          />
          <input
          className='add-test'
            type="text"
            placeholder="Description"
            value={newTestimonial.description}
            onChange={(e) => setNewTestimonial({ ...newTestimonial, description: e.target.value })}
          />
           <input
           className='imageInput'
           type="file"
           accept="image/*" // Specify accepted file types, in this case, images
           onChange={handleImageChange}
           id="imageInput"
      />
          
          <button onClick={addTestimonial}>Add Testimonials</button>
        </div>
  
        {/* Read Operation - Display Testimonials */}
        
         
          <table>
          <thead>
              <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Actions</th>
              </tr>
          </thead>
          <tbody>
              {testimonials.map(testimonial => (
                  <tr key={testimonial.id} className='test-data'>
                      <td>{testimonial.id}</td>
                      <td>{testimonial.Name}</td>
                      <td>{testimonial.description}</td>
                      <td className='btn-manage'>
                          <button className='btn-update' onClick={() => updateTestimonial(testimonial.id, { Name: 'Updated Name', description: 'Updated Description' })}>Update</button>
                          <button className='btn-delete' onClick={() => deleteTestimonial(testimonial.id)}>Delete</button>
                      </td>
                  </tr>
              ))}
          </tbody>
      </table>
          
      </div>
      </section>
    );
 
}

export default Managetestinomials
