import { useEffect, useState } from "react";
import './BackToTop.css'
function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add scroll event listener to toggle visibility
    function handleScroll(){
        if(window.scrollY>300){
            setIsVisible(true)
        }else{
            setIsVisible(false)
        }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, []);

  function scrollToTop() {
    // Implement smooth scroll to top
    window.scrollTo({
        top:0,
        behavior:'smooth'
    })
  }
  return (
    <div className="backToTop">
      <h1>Back To Top</h1>
      {/* Add some content to enable scrolling */}
        {
            [...Array(100)].map((_,i) => (
                <p key={i}>This is a paragraph {i+1}</p>
            ))
        }
      <div className="container">
        {/* Show this button only after scrolling down */}
        {
            isVisible && (
                <button className="backtotop-btn" onClick={scrollToTop} data-testid="back-to-top-btn">Back to Top</button>
            )
        }

      </div>
    </div>
  );
}
export default BackToTop;
