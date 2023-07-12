import React, { useState } from 'react';
import ImageWithInfo from '../components/ImageWithInfo';
import project1 from '../images/project1.jpg';
import project2 from '../images/project2.jpg';
import project3 from '../images/project3.jpg';
import project4 from '../images/project4.jpg';
import project5 from '../images/project5.jpg';
import project6 from '../images/project6.jpg';
import project7 from '../images/project7.jpg';
import project8 from '../images/project8.jpg';
import project9 from '../images/project9.jpg';
import Lightbox from 'react-18-image-lightbox';
import 'react-18-image-lightbox/style.css';
import '../styles/Projects.css';

function Projects() {
  const images = [project1, project2, project3, project4, project5, project6, project7, project8, project9];
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index) => {
    setLightboxOpen(true);
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <section className="Projects-main">
      <div className="Projects-home-inside">
        {images.map((image, index) => (
          <ImageWithInfo
            key={index}
            src={image}
            alt={`Project ${index + 1}`}
            info={{ __html: '<h5>Демир Капија</h5><p>20KW</p>' }}
            onClick={() => openLightbox(index)}
          />
        ))}
      </div>

      {lightboxOpen && (
        <Lightbox
          mainSrc={images[lightboxIndex]}
          nextSrc={images[(lightboxIndex + 1) % images.length]}
          prevSrc={images[(lightboxIndex + images.length - 1) % images.length]}
          onCloseRequest={closeLightbox}
          onMovePrevRequest={() => setLightboxIndex((lightboxIndex + images.length - 1) % images.length)}
          onMoveNextRequest={() => setLightboxIndex((lightboxIndex + 1) % images.length)}
        />
      )}
    </section>
  );
}

export default Projects;



