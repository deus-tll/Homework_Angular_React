import {ReviewInfo} from "./ReviewInfo";

export const ReviewsSection = ({ reviews }) => (
  <div className="container mt-4">
    <h4>Reviews</h4>
    {reviews.map((review, index) => (
      <ReviewInfo key={index} review={review} />
    ))}
  </div>
);