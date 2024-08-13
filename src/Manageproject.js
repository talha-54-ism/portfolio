import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from './firebase';

function ManageProject() {
  const [project, setproject] = useState([]);
  const [newproject, setnewproject] = useState({ Name: '', description: '' });
  const [selectedImage, setSelectedImage] = useState(null);


  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      // Perform any additional logic with the selected file if needed
      setSelectedImage(file);

    }
  };

  useEffect(() => {
    const fetchproject = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'Projects'));
        const fetchedproject = [];
        querySnapshot.forEach((doc) => {
          fetchedproject.push({ id: doc.id, ...doc.data() });
        });
        setproject(fetchedproject);
      } catch (error) {
        console.error('Error fetching project:', error);
      }
    };

    fetchproject();
  }, []);

  const addproject = async () => {
    try {
      const docRef = await addDoc(collection(db, 'Projects'), newproject);
      setproject((prevproject) => [...prevproject, { id: docRef.id, ...newproject }]);
      setnewproject({ Name: '', description: '' });
    } catch (error) {
      console.error('Error adding testimonial:', error);
    }
  };

  const updateproject = async (id) => {
    try {
      const testimonialDoc = doc(db, 'Projects', id);
      await updateDoc(testimonialDoc, newproject);
      setproject((prevproject) =>
        prevproject.map((testimonial) => (testimonial.id === id ? { ...testimonial, ...newproject } : testimonial))
      );
      setnewproject({ Name: '', description: '' });
    } catch (error) {
      console.error('Error updating testimonial:', error);
    }
  };

  const deleteproject = async (id) => {
    try {
      await deleteDoc(doc(db, 'Projects', id));
      setproject((prevproject) => prevproject.filter((testimonial) => testimonial.id !== id));
    } catch (error) {
      console.error('Error deleting testimonial:', error);
    }
  };

  return (
    <section className='Managetestinomials' id='ManageProjectsection'>
    <div>
      <h1 >Manage<span>project</span></h1>
      <div className='inputfields'>
        <input
          className='add-test'
          type="text"
          placeholder="Name"
          value={newproject.Name}
          onChange={(e) => setnewproject({ ...newproject, Name: e.target.value })}
        />
        <input
          className='add-test'
          type="text"
          placeholder="Description"
          value={newproject.description}
          onChange={(e) => setnewproject({ ...newproject, description: e.target.value })}
        />
         <input
           className='imageInput'
           type="file"
           accept="image/*" // Specify accepted file types, in this case, images
           onChange={handleImageChange}
           id="imageInput"
           />
        <button onClick={addproject}>Add project</button>
      </div>
     {/* Read Operation - Display project */}
        
         
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
              {project.map(testimonial => (
                  <tr key={testimonial.id} className='test-data'>
                      <td>{testimonial.id}</td>
                      <td>{testimonial.Name}</td>
                      <td>{testimonial.description}</td>
                      <td className='btn-manage'>
                      <button  className='btn-update' onClick={() => updateproject(testimonial.id)}>Update</button>
                      <button  className='btn-delete' onClick={() => deleteproject(testimonial.id)}>Delete</button>
                      </td>
                  </tr>
              ))}
          </tbody>
      </table>
    </div>
    </section>
  );
}

export default ManageProject;
