export const ReviewInfo = ({ review }) => {
  return(
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title">Review by: {review.email}</h5>
        <p className="card-text">{review.text}</p>
        <div className="d-flex justify-content-between align-items-center">
          <p className="card-text">
            <small className="text-muted">Rating: {review.rating}</small>
          </p>
        </div>
      </div>
    </div>
  );
};