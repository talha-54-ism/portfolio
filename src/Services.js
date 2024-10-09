import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Services() {
  const [isHovering, setIsHovering] = useState(false);

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
        <div
          className='slider'
          style={{
            '--quantity': 10,
            animationPlayState: isHovering ? 'paused' : 'running', // Pause or run animation based on hover state
          }}
        >
          <div className='item' style={{ '--position': 1 }}>
            <div className='border'>
              <div className='serviceimg'>
                <img
                  width="480"
                  height="480"
                  src="https://img.icons8.com/color/480/html-5--v1.png"
                  alt="html-5--v1"
                  onMouseEnter={() => setIsHovering(true)} // Set hover state to true on mouse enter
                  onMouseLeave={() => setIsHovering(false)} // Set hover state to false on mouse leave
                />
              </div>
            </div>
          </div>
          <div className='item' style={{ '--position': 2 }}>
            <div className='border'>
              <div className='serviceimg'>
                <img
                  width="480"
                  height="480"
                  src="https://img.icons8.com/wired/512/javascript-logo.png"
                  alt="javascript-logo"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                />
              </div>
            </div>
          </div>
          <div className='item' style={{ '--position': 3 }}>
            <div className='border'>
              <div className='serviceimg'>
                <img
                  width="480"
                  height="480"
                  src="https://img.icons8.com/color-glass/480/bootstrap.png"
                  alt="bootstrap"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                />
              </div>
            </div>
          </div>
          <div className='item' style={{ '--position': 4 }}>
            <div className='border'>
              <div className='serviceimg'>
                <img
                  width="480"
                  height="480"
                  src="https://img.icons8.com/ios-filled/500/typescript.png"
                  alt="typescript"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                />
              </div>
            </div>
          </div>
          <div className='item' style={{ '--position': 5 }}>
            <div className='border'>
              <div className='serviceimg'>
                <img
                  width="480"
                  height="480"
                  src="https://img.icons8.com/color/480/python--v1.png"
                  alt="python--v1"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                />
              </div>
            </div>
          </div>
          <div className='item' style={{ '--position': 6 }}>
            <div className='border'>
              <div className='serviceimg'>
                <img
                  width="480"
                  height="480"
                  src="https://img.icons8.com/nolan/512/django.png"
                  alt="django"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                />
              </div>
            </div>
          </div>
          <div className='item' style={{ '--position': 7 }}>
            <div className='border'>
              <div className='serviceimg'>
                <img
                  width="460"
                  height="460"
                  src="https://img.icons8.com/color/480/nodejs.png"
                  alt="nodejs"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                />
              </div>
            </div>
          </div>
          <div className='item' style={{ '--position': 8 }}>
            <div className='border'>
              <div className='serviceimg'>
                <img
                  width="60"
                  height="60"
                  src="https://img.icons8.com/papercut/60/sql.png"
                  alt="sql"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                />
              </div>
            </div>
          </div>
          <div className='item' style={{ '--position': 9 }}>
            <div className='border'>
              <div className='serviceimg'>
                <img
                  width="480"
                  height="480"
                  src="https://img.icons8.com/ios-filled/500/css3.png"
                  alt="css3"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                />
              </div>
            </div>
          </div>
          <div className='item' style={{ '--position': 10 }}>
            <div className='border'>
              <div className='serviceimg'>
                <img
                  width="480"
                  height="480"
                  src="https://img.icons8.com/color/480/firebase.png"
                  alt="firebase"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
