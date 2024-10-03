// Manageprojects.js
import React, { useEffect, useState } from 'react';
import { collection, getDocs, addDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from './firebase'; // Ensure this path is correct

const Manageprojects = () => {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({ Name: '', description: '', photoURL: '' });
  const [editingProject, setEditingProject] = useState(null);
  const [editData, setEditData] = useState({ Name: '', description: '', photoURL: '' });

  // Fetch projects from Firestore
  const fetchProjects = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'Projects'));
      const projectsList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProjects(projectsList);
    } catch (error) {
      console.error('Error fetching team projects:', error);
    }
  };

  useEffect(() => {
    fetchProjects(); // Fetch projects on component mount
  }, []);

  // Add a new project
  const handleAdd = async () => {
    try {
      await addDoc(collection(db, 'Projects'), newProject);
      setNewProject({ Name: '', description: '', photoURL: '' });
      fetchProjects(); // Refresh list
    } catch (error) {
      console.error('Error adding team project:', error);
    }
  };

  // Update an existing project
  const handleUpdate = async () => {
    try {
      const projectDoc = doc(db, 'Projects', editingProject.id);
      await updateDoc(projectDoc, editData);
      setEditingProject(null);
      setEditData({ Name: '', description: '', photoURL: '' });
      fetchProjects(); // Refresh list
    } catch (error) {
      console.error('Error updating team project:', error);
    }
  };

  // Delete a project
  const handleDelete = async (id) => {
    try {
      const projectDoc = doc(db, 'Projects', id);
      await deleteDoc(projectDoc);
      fetchProjects(); // Refresh list
    } catch (error) {
      console.error('Error deleting team project:', error);
    }
  };

  return (
    <div>
      <h1>Manage Team Projects</h1>
      
      {/* Add New Project Form */}
      <div>
        <h2>Add New Project</h2>
        <input
          type="text"
          placeholder="Name"
          value={newProject.Name}
          onChange={(e) => setNewProject({ ...newProject, Name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newProject.description}
          onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
        />
        <input
          type="text"
          placeholder="Photo URL"
          value={newProject.photoURL}
          onChange={(e) => setNewProject({ ...newProject, photoURL: e.target.value })}
        />
        <button onClick={handleAdd}>Add Project</button>
      </div>
      
      {/* Project List */}
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <img src={project.photoURL} alt={project.Name} />
            <h2>{project.Name}</h2>
            <p>{project.description}</p>
            <button onClick={() => { setEditingProject(project); setEditData(project); }}>
              Edit
            </button>
            <button onClick={() => handleDelete(project.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>

      {/* Edit Project Form */}
      {editingProject && (
        <div>
          <h2>Edit Project</h2>
          <input
            type="text"
            value={editData.Name}
            onChange={(e) => setEditData({ ...editData, Name: e.target.value })}
          />
          <input
            type="text"
            value={editData.description}
            onChange={(e) => setEditData({ ...editData, description: e.target.value })}
          />
          <input
            type="text"
            value={editData.photoURL}
            onChange={(e) => setEditData({ ...editData, photoURL: e.target.value })}
          />
          <button onClick={handleUpdate}>Update</button>
        </div>
      )}
    </div>
  );
};

export default Manageprojects;
