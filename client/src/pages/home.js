import React, { useRef, useEffect } from "react";
import { TweenMax, Power3 } from "gsap";

function Home() {
    let Title = useRef(null);
    let textItem = useRef(null)
  
    useEffect(() => {
      console.log(Title);
     TweenMax.to(Title, .8 , { opacity: 1, y: -20, ease: Power3.easeOut} )
     TweenMax.to(textItem, .8 , { opacity: 1, y: -20, ease: Power3.easeOut, delay: .2} )
      
    }, [])



    return (
        <div>
           <h1 ref={el => {Title = el}} strong>BAG A CAT</h1> 
           <p ref ={el => {textItem = el}} strong>furr babies</p>
        </div>
    )
}

export default Home
