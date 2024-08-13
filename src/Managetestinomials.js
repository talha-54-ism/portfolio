import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from './firebase';

function TestimonialsCRUD() {
  const [testimonials, setTestimonials] = useState([]);
  const [newTestimonial, setNewTestimonial] = useState({ Name: '', description: '' });
  const [selectedImage, setSelectedImage] = useState(null);


  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      // Perform any additional logic with the selected file if needed
      setSelectedImage(file);

    }
  };

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'Testinomials'));
        const fetchedTestimonials = [];
        querySnapshot.forEach((doc) => {
          fetchedTestimonials.push({ id: doc.id, ...doc.data() });
        });
        setTestimonials(fetchedTestimonials);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      }
    };

    fetchTestimonials();
  }, []);

  const addTestimonial = async () => {
    try {
      const docRef = await addDoc(collection(db, 'Testinomials'), newTestimonial);
      setTestimonials((prevTestimonials) => [...prevTestimonials, { id: docRef.id, ...newTestimonial }]);
      setNewTestimonial({ Name: '', description: '' });
    } catch (error) {
      console.error('Error adding testimonial:', error);
    }
  };

  const updateTestimonial = async (id) => {
    try {
      const testimonialDoc = doc(db, 'Testinomials', id);
      await updateDoc(testimonialDoc, newTestimonial);
      setTestimonials((prevTestimonials) =>
        prevTestimonials.map((testimonial) => (testimonial.id === id ? { ...testimonial, ...newTestimonial } : testimonial))
      );
      setNewTestimonial({ Name: '', description: '' });
    } catch (error) {
      console.error('Error updating testimonial:', error);
    }
  };

  const deleteTestimonial = async (id) => {
    try {
      await deleteDoc(doc(db, 'Testinomials', id));
      setTestimonials((prevTestimonials) => prevTestimonials.filter((testimonial) => testimonial.id !== id));
    } catch (error) {
      console.error('Error deleting testimonial:', error);
    }
  };

  return (
    <section className='Managetestinomials' id='managetestsection'>
    <div>
      <h1 >Manage<span>Testimonials</span></h1>
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
        <button onClick={addTestimonial}>Add Testimonial</button>
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
                      <button  className='btn-update' onClick={() => updateTestimonial(testimonial.id)}>Update</button>
                      <button  className='btn-delete' onClick={() => deleteTestimonial(testimonial.id)}>Delete</button>
                      </td>
                  </tr>
              ))}
          </tbody>
      </table>
    </div>
    </section>
  );
}

export default TestimonialsCRUD;
