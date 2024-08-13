import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Services() {
  useEffect(() => {
    AOS.init({
      duration: 1500, // Animation duration
      offset: 200,    // Offset (in pixels) from the original trigger point
    });
  }, []);
  
  return (
    <section id='servicesection' className='service'>
      <h1 className='service-title'>MY <span>SKILLS</span></h1>

      <div className='banner'>
        <div className='slider' style={{ '--quantity': 10 }}>
          <div className='item' style={{ '--position': 1 }}>
            <div className='border'>
              <div className='serviceimg'>
                <img width="480" height="480" src="https://img.icons8.com/color/480/html-5--v1.png" alt="html-5--v1"/>
              </div>
            
            </div>
          </div>
          <div className='item' style={{ '--position': 2 }}>
            <div className='border'>
              <div className='serviceimg'>
              <img width="480" height="480" src="https://img.icons8.com/wired/512/javascript-logo.png" alt="javascript-logo"/>
              </div>
            </div>
          </div>
          <div className='item' style={{ '--position': 3 }}>
            <div className='border'>
              <div className='serviceimg'>
              <img width="480" height="480" src="https://img.icons8.com/color-glass/480/bootstrap.png" alt="bootstrap"/>
              </div>
            </div>
          </div>
          <div className='item' style={{ '--position': 4 }}>
            <div className='border'>
              <div className='serviceimg'>
              <img width="480" height="480" src="https://img.icons8.com/ios-filled/500/typescript.png" alt="typescript"/>
              </div>
            </div>
          </div>
          <div className='item' style={{ '--position': 5 }}>
            <div className='border'>
              <div className='serviceimg'>
              <img width="480" height="480" src="https://img.icons8.com/color/480/python--v1.png" alt="python--v1"/>
              </div>
            </div>
          </div>
          <div className='item' style={{ '--position': 6 }}>
            <div className='border'>
              <div className='serviceimg'>
              <img width="480" height="480" src="https://img.icons8.com/nolan/512/django.png" alt="django"/>
              </div>
            </div>
          </div>
          <div className='item' style={{ '--position': 7 }}>
            <div className='border'>
              <div className='serviceimg'>
              <img width="460" height="460" src="https://img.icons8.com/color/480/nodejs.png" alt="nodejs"/>
              </div>
            </div>
          </div>
          <div className='item' style={{ '--position': 8 }}>
            <div className='border'>
              <div className='serviceimg'>
              <img width="60" height="60" src="https://img.icons8.com/papercut/60/sql.png" alt="sql"/>
              </div>
            </div>
          </div>
          <div className='item' style={{ '--position': 9 }}>
            <div className='border'>
              <div className='serviceimg'>
              <img width="480" height="480" src="https://img.icons8.com/ios-filled/500/css3.png" alt="css3"/>
              </div>
            </div>
          </div>
          <div className='item' style={{ '--position': 10 }}>
            <div className='border'>
              <div className='serviceimg'>
              <img width="480" height="480" src="https://img.icons8.com/color/480/firebase.png" alt="firebase"/>
              </div>
            </div>
          </div>
        </div>
        <script src="Script.js"></script>
      </div>
      
    </section>
  );
}

export default Services;
