import {Link} from "react-router-dom";

export const ActionButtons = ({ bookId, isAddingReview, onToggleAddReview, onDelete, onEdit, onDownload }) => (
  <div className="d-flex justify-content-center w-75">
    <div className="d-flex justify-content-center w-100">
      <div className="d-block w-100">
        <div className="mt-2 mb-2">
          <button className="btn btn-dark w-100" onClick={onDelete}>Delete</button>
        </div>
        <div className="mt-2 mb-2">
          <button className="btn btn-dark w-100" onClick={onEdit}>Edit</button>
        </div>
        <div className="mt-2 mb-2">
          <button className="btn btn-dark w-100" onClick={onDownload}>Download</button>
        </div>
        <div className="mt-2 mb-2">
          <Link className="btn btn-dark w-100" to={`/book/${bookId}/read`}>Read Book</Link>
        </div>
        <div className="mt-2 mb-2">
          <button className="btn btn-dark w-100" onClick={onToggleAddReview}>
            {isAddingReview ? "Cancel Review" : "Review"}
          </button>
        </div>
      </div>
    </div>
  </div>
);