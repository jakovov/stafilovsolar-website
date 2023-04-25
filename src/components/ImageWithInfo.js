import React, { useState } from 'react';
import '../styles/ImageWithInfo.css';

const ImageWithInfo = ({ src, alt, info }) => {
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
    <div className="image-container1">
      <img
        src={src}
        alt={alt}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      {showInfo && (
        <div className="info-container" onMouseEnter={handleInfoMouseEnter} onMouseLeave={handleInfoMouseLeave}>
          <div dangerouslySetInnerHTML={info} />
        </div>
      )}
    </div>
  );
};

export default ImageWithInfo;



