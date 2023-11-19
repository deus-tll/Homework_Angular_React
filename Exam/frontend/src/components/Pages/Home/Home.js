import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {clearSearchResults, deleteBook, loadBooks, searchBooks} from "../../../redux/actions/books";
import { Link } from "react-router-dom";
import {Modal} from "../../service/Modal";
import {BookList} from "./BookList";
import {SearchForm} from "./SearchForm";
import ReactPaginate from "react-paginate";


export const Home = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);
  const searchResults = useSelector((state) => state.books.searchResults);

  const [deleteConfirmation, setDeleteConfirmation] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(5);

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = searchResults && searchResults.length > 0
    ? searchResults.slice(indexOfFirstBook, indexOfLastBook)
    : books && books.length > 0
      ? books.slice(indexOfFirstBook, indexOfLastBook)
      : [];
  const pageCount = Math.ceil((searchResults.length > 0 ? searchResults.length : books.length) / booksPerPage);

  useEffect(() => {
    dispatch(loadBooks());
  }, [dispatch]);

  const handleDeleteBook = (bookId) => {
    setDeleteConfirmation(bookId);
  };

  const handleConfirmDelete = async () => {
    if (deleteConfirmation) {
      await dispatch(deleteBook(deleteConfirmation));
      setDeleteConfirmation(null);
      await dispatch(loadBooks());
    }
  };

  const handleCancelDelete = () => {
    setDeleteConfirmation(null);
  };

  const handleSearch = async (searchParams) => {
    await dispatch(searchBooks(searchParams));
  };

  const handleClearSearch = () => {
    dispatch(clearSearchResults());
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <h1 className="mb-4">Books</h1>

          <div className="mb-3">
            <Link to={"/add-book"} className="btn btn-dark">
              Add New Book
            </Link>
          </div>

          <SearchForm onSearch={handleSearch} onClear={handleClearSearch} />

          <BookList books={currentBooks} onDelete={handleDeleteBook} />

          <div className="d-flex justify-content-center align-items-center">
            <div className="btn-group mb-3">
              <ReactPaginate
                breakLabel={"..."}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={(data) => paginate(data.selected + 1)}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"}
                previousClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextClassName={"page-item"}
                nextLinkClassName={"page-link"}
                breakClassName={"page-item"}
                breakLinkClassName={"page-link"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
              />
            </div>
          </div>



          <Modal isOpen={deleteConfirmation !== null} onClose={handleCancelDelete}>
            <p>Are you sure you want to delete this book?</p>
            <button className="btn btn-danger" onClick={handleConfirmDelete}>
              Yes
            </button>
            <button className="btn btn-secondary" onClick={handleCancelDelete}>
              No
            </button>
          </Modal>
        </div>
      </div>
    </div>
  );
};