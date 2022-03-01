import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

function FadeInSection7(props) {

    // const [isVisible, setVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
      const observer = new IntersectionObserver(entries => {    

           
      if (entries[0].isIntersecting) {
        // entries.forEach(entry => setVisible(entry.isIntersecting));

        gsap.to(".small-stack-pic-container", {  
            rotationX: 0,
            rotationY: 0,
            rotationZ: 0,
            ease: "power4.out",
            opacity: 1,
            duration: 4.9,
        });

        observer.unobserve(domRef.current);
      }

      });
      observer.observe(domRef.current);

      return () => observer && observer.disconnect();
    }, []);

    const style = {
      display:'flex',
      justifyContent: "center",
      alignItems: "center",
      width:"100%",
      height:"100%"
    }

    return (
      <div
        // className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
        className={`work-observer-container6`}
        ref={domRef}
        style={style}
      >
        {props.children}
      </div>
    );
  }

export default FadeInSection7