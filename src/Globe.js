// src/Globe.js
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const Globe = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Set up scene, camera, renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Add a simple colored globe
    const globeGeometry = new THREE.SphereGeometry(5, 32, 32);
    const globeMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff }); // Blue color
    const globeMesh = new THREE.Mesh(globeGeometry, globeMaterial);
    scene.add(globeMesh);

    // Add city markers with white color
    const cityGeometry = new THREE.SphereGeometry(0.1, 8, 8);
    const cityMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff }); // White color

    const cities = [
      { lat: 40.7128, lon: -74.0060 }, // Example: New York City
      // Add more cities if needed
    ];

    cities.forEach(({ lat, lon }) => {
      const latRad = THREE.MathUtils.degToRad(lat);
      const lonRad = THREE.MathUtils.degToRad(lon);
      const x = 5 * Math.cos(latRad) * Math.cos(lonRad);
      const y = 5 * Math.sin(latRad);
      const z = 5 * Math.cos(latRad) * Math.sin(lonRad);
      const dotMesh = new THREE.Mesh(cityGeometry, cityMaterial);
      dotMesh.position.set(x, y, z);
      scene.add(dotMesh);
    });

    // Add controls
    const controls = new OrbitControls(camera, renderer.domElement);

    // Camera position
    camera.position.z = 12;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    // Handle resizing
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      mountRef.current.removeChild(renderer.domElement);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100vw', height: '100vh' }} />;
};

export default Globe;
