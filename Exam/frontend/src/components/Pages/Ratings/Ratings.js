import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getTopBooks, getTopBooksByAuthor, getTopBooksByGenre} from "../../../redux/actions/books";
import {BookLinkItem} from "../../service/BookLinkItem";

export const Ratings = () => {
  const dispatch = useDispatch();
  const topBooks = useSelector((state) => state.books.topBooks);
  const topBooksByGenre = useSelector((state) => state.books.topBooksByGenre);
  const topBooksByAuthor = useSelector((state) => state.books.topBooksByAuthor);

  const [activeTab, setActiveTab] = useState("topBooks");
  const [genre, setGenre] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    dispatch(getTopBooks());
  }, [dispatch]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleGenreSubmit = (e) => {
    e.preventDefault();
    dispatch(getTopBooksByGenre(genre));
  };

  const handleAuthorSubmit = (e) => {
    e.preventDefault();
    dispatch(getTopBooksByAuthor(author));
  };

  const renderBooks = () => {
    switch (activeTab) {
      case "topBooks":
        return topBooks.map((book) => (
          <li key={book.id} className="list-group-item">
            <BookLinkItem book={book} />
          </li>
        ));
      case "topBooksByGenre":
        return topBooksByGenre.map((book) => (
          <li key={book.id} className="list-group-item">
            <BookLinkItem book={book} />
          </li>
        ));
      case "topBooksByAuthor":
        return topBooksByAuthor.map((book) => (
          <li key={book.id} className="list-group-item">
            <BookLinkItem book={book} />
          </li>
        ));
      default:
        return null;
    }
  };

  return(
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="d-flex justify-content-center align-items-center">
            <div className="btn-group mb-3">
              <button
                className={`btn ${
                  activeTab === "topBooks" ? "btn-primary" : "btn-secondary"
                }`}
                onClick={() => handleTabChange("topBooks")}>
                Top Books
              </button>
              <button
                className={`btn ${
                  activeTab === "topBooksByGenre" ? "btn-primary" : "btn-secondary"
                }`}
                onClick={() => handleTabChange("topBooksByGenre")}>
                Top Books by Genre
              </button>
              <button
                className={`btn ${
                  activeTab === "topBooksByAuthor" ? "btn-primary" : "btn-secondary"
                }`}
                onClick={() => handleTabChange("topBooksByAuthor")}>
                Top Books by Author
              </button>
            </div>
          </div>


          {activeTab === "topBooksByGenre" && (
            <form onSubmit={handleGenreSubmit}>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter genre"
                  value={genre}
                  onChange={(e) => setGenre(e.target.value)}/>
                <button type="submit" className="btn btn-outline-dark">
                  Get Top Books
                </button>
              </div>
            </form>
          )}

          {activeTab === "topBooksByAuthor" && (
            <form onSubmit={handleAuthorSubmit}>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter author"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}/>
                <button type="submit" className="btn btn-outline-dark">
                  Get Top Books
                </button>
              </div>
            </form>
          )}

          <h3 className="text-center mt-5">Results</h3>
          <ul className="list-group mt-5">{renderBooks()}</ul>
        </div>
      </div>
    </div>
  );
};