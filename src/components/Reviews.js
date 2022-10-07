import React from "react";
import { useState } from "react";
import ReviewItem from "./ReviewItem";

function Reviews() {
  const reviewItem = {
    background: "rgba(0, 0, 0, 0.24)",
    color: "white",
  }
  const [reviews, setReviews] = useState([]);

  const reviewsHeader = {
    color: "white",
    fontSize: "20px",
    padding: "0.3em 0em 0.3em 0.8em",
    marginTop: "0em",
    backgroundColor: "rgba(94, 151, 255, 0.4)",
    width: "34vw",
  };

  

  function addReview(newReview) {
    const updatedReviews = [...reviews, newReview];
    setReviews(updatedReviews);
  }



  return (
    <div>
      <div>
        <h3 style={reviewsHeader}>Reviews</h3>
      </div>
      <div>
        <ReviewItem addReview={addReview} />
      </div>
      <div>
        {reviews.map((review) => (
          <div key={review.title} style={reviewItem}>
            <h4>{review.title}: {review.comment}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;
