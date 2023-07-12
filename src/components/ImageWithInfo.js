import React, { useState } from 'react';
import '../styles/ImageWithInfo.css';

const ImageWithInfo = ({ src, alt, className, info, onClick }) => {
  const [showInfo, setShowInfo] = useState(false);

  const handleMouseEnter = () => {
    setShowInfo(true);
  };

  const handleMouseLeave = () => {
    setShowInfo(false);
  };

  const handleInfoMouseEnter = () => {
    setShowInfo(true);
  };

  const handleInfoMouseLeave = () => {
    setShowInfo(false);
  };

  return (
    <div
      className="image-container1"
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={src} alt={alt} className={className} />
      {showInfo && (
        <div className="info-container" onMouseEnter={handleInfoMouseEnter} onMouseLeave={handleInfoMouseLeave}>
          <div dangerouslySetInnerHTML={info} />
        </div>
      )}
    </div>
  );
};

export default ImageWithInfo;





