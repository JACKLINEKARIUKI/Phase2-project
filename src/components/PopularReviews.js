import React from "react";
import Review from "./Review";

function PopularReviews({reviews}) {
  return (
    <div>
      <div>
        <h3>Popular Reviews</h3>
        <h3>More</h3>
      </div>
      <div>
        {reviews.map((review) => (
          <Review review={review} key={review} />
        ))}
      </div>
    </div>
  );
}

export default PopularReviews;
