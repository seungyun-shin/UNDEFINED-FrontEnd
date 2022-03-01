import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

function FadeInSection(props) {
    // const [isVisible, setVisible] = useState(false);
    const domRef = useRef();
    useEffect(() => {
      const observer = new IntersectionObserver(entries => {    

           
      if (entries[0].isIntersecting) {
        // entries.forEach(entry => setVisible(entry.isIntersecting));

        // gsap.from(entries[0].target, { 
        //     duration: 1, 
        //     // rotation: '-360deg', 
        //     y: '10vh',
        //     opacity : 0,
        //     stagger: .2 
        // });

        gsap.to(entries[0].target, { 
            duration: 1, 
            // rotation: '-360deg', 
            y: '-10vh',
            opacity : 1,
            stagger: .2 
        });

        observer.unobserve(domRef.current);
      }

      });
      observer.observe(domRef.current);

      return () => observer && observer.disconnect();
    }, []);
    return (
      <div
        // className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
        className={`work-observer-container`}
        ref={domRef}
      >
        {props.children}
      </div>
    );
  }

export default FadeInSection