export const BookInfo = ({ book }) => {
  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-body">
          <h1 className="card-title">{book.bookTitle}</h1>
          <p className="card-text">Author: {book.author}</p>
          <p className="card-text">Genre: {book.genre}</p>
          <p className="card-text">Publication Year: {book.publicationYear}</p>
          <p className="card-text">
            Rating: {book.rating !== null ? book.rating : 'Rating not available yet'}
          </p>
        </div>
      </div>
    </div>
  );
};