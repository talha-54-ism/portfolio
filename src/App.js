
import './App.css';
import Navbar from './Navbar';
import Main from './Main';
import Contact from './Contact';
import Services from './Services';
import Projects from './Projects';
import Testinomials from './Testinomials';
import './task.css'
import Footer from './Footer';
import Project from './Project';
import Communication from './Communication';
import Dashboard from './Dashboard';
import Contacform from './Contacform';
import Success from './Success';
import About from './About';
import Login from './Login';

import { BrowserRouter, Routes, Route } from 'react-router-dom'



function App() {
  return (
    <>
      <div className='styles'>
        <BrowserRouter>
          <Navbar />
          <Main />
          <About />
          <Projects />
          <Success />
          <Services />
          {/* <Project /> */}
          <Contacform />
          <Communication />
          {/* <Testinomials /> */}
          <Login />


          {/* Routed components (for specific paths) */}
          <Routes>

            <Route path='/signup' element={<Contacform />} />
            {/* <Route path='/dashboard' element={<Dashboard />} /> */}

          </Routes>

          <Footer />
        </BrowserRouter>
      </div>

    </>

  );

}

export default App;
