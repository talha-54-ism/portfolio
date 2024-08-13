import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from './firebase';

function ManageTeam() {
  const [member, setmember] = useState([]);
  const [newmember, setnewmember] = useState({ Name: '', description: '' });
  const [selectedImage, setSelectedImage] = useState(null);


  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      // Perform any additional logic with the selected file if needed
      setSelectedImage(file);

    }
  };

  useEffect(() => {
    const fetchmember = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'Teammembers'));
        const fetchedmember = [];
        querySnapshot.forEach((doc) => {
          fetchedmember.push({ id: doc.id, ...doc.data() });
        });
        setmember(fetchedmember);
      } catch (error) {
        console.error('Error fetching member:', error);
      }
    };

    fetchmember();
  }, []);

  const addMember = async () => {
    try {
      const docRef = await addDoc(collection(db, 'Teammembers'), newmember);
      setmember((prevmember) => [...prevmember, { id: docRef.id, ...newmember }]);
      setnewmember({ Name: '', description: '' });
    } catch (error) {
      console.error('Error adding testimonial:', error);
    }
  };

  const updateMember = async (id) => {
    try {
      const testimonialDoc = doc(db, 'Teammembers', id);
      await updateDoc(testimonialDoc, newmember);
      setmember((prevmember) =>
        prevmember.map((testimonial) => (testimonial.id === id ? { ...testimonial, ...newmember } : testimonial))
      );
      setnewmember({ Name: '', description: '' });
    } catch (error) {
      console.error('Error updating testimonial:', error);
    }
  };

  const deleteMember = async (id) => {
    try {
      await deleteDoc(doc(db, 'Teammembers', id));
      setmember((prevmember) => prevmember.filter((testimonial) => testimonial.id !== id));
    } catch (error) {
      console.error('Error deleting testimonial:', error);
    }
  };

  return (
    <section className='Managetestinomials' id='manageteamsection'>
    <div>
      <h1 >Manage<span>Projects</span></h1>
      <div className='inputfields'>
        <input
          className='add-test'
          type="text"
          placeholder="Name"
          value={newmember.Name}
          onChange={(e) => setnewmember({ ...newmember, Name: e.target.value })}
        />
        <input
          className='add-test'
          type="text"
          placeholder="Description"
          value={newmember.description}
          onChange={(e) => setnewmember({ ...newmember, description: e.target.value })}
        />
         <input
           className='imageInput'
           type="file"
           accept="image/*" // Specify accepted file types, in this case, images
           onChange={handleImageChange}
           id="imageInput"
           />
        <button onClick={addMember}>Add Project</button>
      </div>
     {/* Read Operation - Display member */}
        
         
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
              {member.map(testimonial => (
                  <tr key={testimonial.id} className='test-data'>
                      <td>{testimonial.id}</td>
                      <td>{testimonial.Name}</td>
                      <td>{testimonial.description}</td>
                      <td className='btn-manage'>
                      <button  className='btn-update' onClick={() => updateMember(testimonial.id)}>Update</button>
                      <button  className='btn-delete' onClick={() => deleteMember(testimonial.id)}>Delete</button>
                      </td>
                  </tr>
              ))}
          </tbody>
      </table>
    </div>
    </section>
  );
}

export default ManageTeam;
