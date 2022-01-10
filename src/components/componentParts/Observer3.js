import React, {useState, useEffect, useRef } from 'react'
import gsap from 'gsap'

function FadeInSection3(props) {
    const [isVisible, setVisible] = useState(false);
    const domRef = useRef();
    useEffect(() => {
      const observer = new IntersectionObserver(entries => {    

           
      if (entries[0].isIntersecting) {
        entries.forEach(entry => setVisible(entry.isIntersecting));

        gsap.to(entries[0].target, 1.5, {  
            width: '100%',
            ease: "power4.out",
        });

        observer.unobserve(domRef.current);
      }

      });
      observer.observe(domRef.current);

      return () => observer && observer.disconnect();
    }, []);

    const style = {
      width:"0"
    }

    return (
      <div
        // className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
        className={`work-observer-container3`}
        ref={domRef}
        style={style}
      >
        {props.children}
      </div>
    );
  }

export default FadeInSection3