import {Link} from "react-router-dom";

export const BookLinkItem = ({book}) => {
  return(
    <Link to={`/book/${book.id}`} className="text-dark-emphasis text-decoration-none">
      <p className="mb-1 mt-1">{`"${book.bookTitle}" by ${book.author}`}</p>
    </Link>
  );
}