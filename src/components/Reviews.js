import React, { useState, useEffect } from 'react';

const Reviews = ({ placeId }) => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getReviews = async () => {
        try {
          const response = await fetch(`https://cors.iamnd.eu.org/?url=https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=AIzaSyBr8JRRQRFAs3wJPKg_R5T2ridERl8w_gI`);
          const data = await response.json();
          console.log(`https://cors.iamnd.eu.org/?url=https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=AIzaSyBr8JRRQRFAs3wJPKg_R5T2ridERl8w_gI`);

          if (data && data.result && data.result.reviews) {
            setReviews(data.result.reviews.slice(0, 3));
          }
        } catch (error) {
          console.error(error);
          setError('Failed to load reviews');
        }
      };
      
      
  
    getReviews();
  }, [placeId]);
  

  return (
    <>
      {error && <div>{error}</div>}
      {reviews.length > 0 && (
        <div>
          <h2>Latest reviews</h2>
          <ul>
            {reviews.map(review => (
              <li key={review.time}>
                <p>{review.text}</p>
                <p>Rating: {review.rating}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default Reviews;



