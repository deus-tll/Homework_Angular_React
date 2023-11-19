import {BookLinkItem} from "../../service/BookLinkItem";

export const BookList = ({ books, onDelete }) => {
  return (
    <ul style={{ minHeight: 'calc(100vh - 500px)' }} className="list-group">
      {books.map((book) => (
        <li key={book.id} className={`list-group-item list-group-item-action d-flex justify-content-between align-items-center`}>
          <BookLinkItem book={book} />
          <button className="btn btn-danger" onClick={() => onDelete(book.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};