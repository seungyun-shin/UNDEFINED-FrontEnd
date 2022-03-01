import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

function FadeInSection2(props) {
    // const [isVisible, setVisible] = useState(false);
    const domRef = useRef();
    useEffect(() => {
      const observer = new IntersectionObserver(entries => {    

           
      if (entries[0].isIntersecting) {
        // entries.forEach(entry => setVisible(entry.isIntersecting));

        gsap.to(entries[0].target, {  
          y: 0,
          ease: "power4.out",
          stagger: {
              amount: 0.3
          },
          opacity:1,
          duration:2,
          delay: 0.5,
      });

        // gsap.from(entries[0].target, {  
        //     y: 100,
        //     ease: "power4.out",
        //     stagger: {
        //         amount: 0.3
        //     },
        //     opacity:0,
        //     duration:2,
        //     delay: 0.5,
        // });

        observer.unobserve(domRef.current);
      }

      });
      observer.observe(domRef.current);

      return () => observer && observer.disconnect();
    }, []);


    return (
      <div
        // className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
        className={`work-observer-container2`}
        ref={domRef}
      >
        {props.children}
      </div>
    );
  }

export default FadeInSection2