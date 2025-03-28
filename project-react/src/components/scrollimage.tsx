import { useEffect, useState } from 'react';
import '../index.css';

interface ScrollImageProps {
  speed?: 'slow' | 'medium' | 'fast';
  showContent?: boolean;
  overlay?: boolean;
}

const ScrollImage = ({
  speed = 'medium',
  showContent = false,
  overlay = false
}: ScrollImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Celebrity images - replace these URLs with your actual images
  const celebrities = [
    { id: 1, name: "Margot Robbie", image: "src/assets/images/celebrities/barbie.jpg" },
    { id: 2, name: "Ryan Gosling", image: "src/assets/images/celebrities/barbie.jpg" },
    { id: 3, name: "Jennifer Lawrence", image: "src/assets/images/celebrities/barbie.jpg" },
    { id: 4, name: "Michael B. Jordan", image: "src/assets/images/celebrities/barbie.jpg" },
    { id: 5, name: "Emma Stone", image: "src/assets/images/celebrities/barbie.jpg" },
    { id: 6, name: "Chris Hemsworth", image: "src/assets/images/celebrities/barbie.jpg" },
    { id: 7, name: "Zendaya", image: "src/assets/images/celebrities/barbie.jpg" },
    { id: 8, name: "Timothée Chalamet", image: "src/assets/images/celebrities/barbie.jpg" },
    { id: 9, name: "Florence Pugh", image: "src/assets/images/celebrities/barbie.jpg" },
    { id: 10, name: "Tom Holland", image: "src/assets/images/celebrities/barbie.jpg" },
  ];

  // Set animation speed based on prop
  const getAnimationDuration = () => {
    switch(speed) {
      case 'slow': return '60s';
      case 'fast': return '25s';
      default: return '40s';
    }
  };

  // Set loaded state after images are ready
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="hero-container position-relative overflow-hidden">
      {/* Gradient Overlay - Only shown if overlay is true */}
      {overlay && (
        <div className="position-absolute w-100 h-100 z-10" style={{
          background: 'linear-gradient(to right, rgba(143, 135, 241, 0.9), rgba(198, 142, 253, 0.8), rgba(233, 165, 241, 0.9))',
          pointerEvents: 'none'
        }}></div>
      )}
      
      {/* Content Overlay - Only shown if showContent is true */}
      {showContent && (
        <div className="position-absolute w-100 h-100 d-flex flex-column justify-content-center align-items-center text-white z-20">
          <div className="container text-center">
            <h1 className="display-4 fw-bold mb-3">TwinFace AI</h1>
            <p className="lead mb-4">Find your celebrity doppelgänger with our facial comparison technology</p>
            <a href="#upload-section" className="btn btn-light btn-lg px-4 py-2 fw-medium text-purple-700 shadow-sm rounded-pill">
              <span className="d-flex align-items-center">
                Try Now <i className="bi bi-arrow-right ms-2"></i>
              </span>
            </a>
          </div>
        </div>
      )}
      
      {/* Single Row Sliding Animation Container */}
      <div className="sliding-background-container">
        <div className="sliding-row" style={{
          animationDuration: getAnimationDuration(),
          opacity: isLoaded ? 1 : 0,
          top: '50%', 
          transform: 'translateY(-50%)'
        }}>
          {celebrities.map((celebrity, index) => (
            <div key={`row-${celebrity.id}-${index}`} className="sliding-item">
              <img 
                src={celebrity.image} 
                alt={celebrity.name} 
                className="celebrity-image"
                loading="eager"
              />
            </div>
          ))}
          {celebrities.map((celebrity, index) => (
            <div key={`row-dup-${celebrity.id}-${index}`} className="sliding-item">
              <img 
                src={celebrity.image} 
                alt={celebrity.name} 
                className="celebrity-image"
                loading="eager"
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Styles */}
      <style>
        {`
        .hero-container {
          height: 30vh; /* Drastically reduced from 70vh */
          min-height: 200px; /* Drastically reduced from 400px */
          max-height: 250px; /* Hard limit on maximum height */
          width: 100%;
          margin-top: 0; /* Reset margin, will position with padding instead */
          padding-top: 85px; /* Space for navbar + small gap */
          background-color: transparent;
          overflow: hidden;
        }
        
        .sliding-background-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 1;
          padding-top: 280px; /* Match container padding */
        }
        
        .sliding-row {
          display: flex;
          position: absolute;
          width: max-content;
          animation: slideLeft linear infinite;
          transition: opacity 0.5s ease;
          pointer-events: none; /* Disable click interactions */
          top: 50%; /* Center in the available space (after navbar) */
        }
        
        .sliding-item {
          flex: 0 0 auto;
          height: 80px; /* Fixed height instead of vh units */
          width: 80px; /* Much smaller width */
          margin: 0 6px; /* Even smaller margins */
        }
        
        .celebrity-image {
          height: 100%;
          width: 100%;
          object-fit: cover;
          object-position: center top;
          border-radius: 6px; /* Smaller radius */
          filter: grayscale(20%);
          box-shadow: 0 2px 6px rgba(0,0,0,0.1); /* Lighter shadow */
        }
        
        @keyframes slideLeft {
          0% {
            transform: translateY(-50%) translateX(0);
          }
          100% {
            transform: translateY(-50%) translateX(calc(-100% / 2));
          }
        }
        
        @media (max-width: 768px) {
          .hero-container {
            height: 25vh;
            min-height: 180px;
          }
          
          .sliding-item {
            width: 100px;
            height: 130px;
            margin: 0 4px;
          }
        }
        `}
      </style>
    </div>
  );
};

export default ScrollImage;