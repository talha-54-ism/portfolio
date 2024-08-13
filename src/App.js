
import './App.css';
import Navbar from './Navbar';
import Main from './Main';
import Contact from './Contact';
import Services from './Services';
import Team from './Team';
import Testinomials from './Testinomials';
import './task.css'
import Footer from './Footer';
import Project from './Project';
import Communication from './Communication';
import Dashboard from './Dashboard';
import Contacform from './Contacform';
import Success from './Success';
import About from './About';
import Createnewaccount from './Createnewaccount';



function App() {
  return (
    <>
      <div className='styles'>
          <Navbar />
         {/* <Dashboard/> */}
           <Main/>
           <About/>
           <Team/> 
           <Success/>
           <Services/>
           <Project/>
          <Contacform/>
          <Testinomials/>
          <Createnewaccount/>
           <Footer />
          
      </div>

    </>
     
  );
  
}

export default App;
