import React, { useState, useEffect } from 'react';
import '../styles/ImageWithInfo.css';

const ImageWithInfo = ({ src, alt, className, info, onClick }) => {
  const [showInfo, setShowInfo] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Set initial mobile state
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleInteraction = () => {
    if (isMobile) {
      setShowInfo(!showInfo);
    }
  };

  return (
    <div
      className="image-container1"
      onClick={onClick}
      onMouseEnter={!isMobile ? () => setShowInfo(true) : undefined}
      onMouseLeave={!isMobile ? () => setShowInfo(false) : undefined}
      onTouchStart={handleInteraction}
    >
      <img src={src} alt={alt} className={className} />
      {(showInfo || isMobile) && (
        <div className="info-container">
          <div dangerouslySetInnerHTML={info} />
        </div>
      )}
    </div>
  );
};

export default ImageWithInfo;







