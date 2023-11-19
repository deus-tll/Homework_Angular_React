import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addReview, getBookById, setExistingReviewError} from "../../../redux/actions/books";
import {Modal} from "../../service/Modal";


export const AddReview = ({ bookId }) => {
  const dispatch = useDispatch();
  const existingReviewError = useSelector((state) => state.books.existingReviewError);

  const [email, setEmail] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(1);

  const handleAddReview = async () => {
    if (!email || !reviewText || !rating) {
      dispatch(setExistingReviewError("Будь ласка, заповніть усі поля"));
      return;
    }

    dispatch(setExistingReviewError(null));

    const reviewData = {
      email: email,
      text: reviewText,
      rating: rating,
    };

    await dispatch(addReview(bookId, reviewData));
    await dispatch(getBookById(bookId));
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h2 className="text-center">Add Review</h2>

          {existingReviewError && (
            <Modal isOpen={existingReviewError}>
              <p>{existingReviewError}</p>
              <div className="d-flex justify-content-center align-items-center">
                <button
                  className="btn btn-dark"
                  onClick={() => dispatch(setExistingReviewError(null))}>
                  Close Modal
                </button>
              </div>
            </Modal>
          )}

          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              placeholder="Your email"/>
          </div>
          <div className="mb-3">
            <textarea
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              className="form-control"
              placeholder="Write your review"/>
          </div>
          <div className="mb-3">
            <input
              type="number"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              className="form-control"
              placeholder="Rating (1-5)"/>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <button className="btn btn-dark" onClick={handleAddReview}>
              Send Review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};