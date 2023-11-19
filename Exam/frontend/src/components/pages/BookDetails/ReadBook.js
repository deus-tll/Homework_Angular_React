import {useCallback, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getBookById, getBookTextById} from "../../../redux/actions/books";
import {useParams} from "react-router-dom";
import ReactPaginate from "react-paginate";

export const ReadBook = () => {
  const dispatch = useDispatch();
  const currentBook = useSelector((state) => state.books.currentBook);

  const [currentPage, setCurrentPage] = useState(1);
  const [displayedText, setDisplayedText] = useState("");
  const { id: bookId } = useParams();

  const pageSize = 2500;
  const totalPages = Math.ceil((currentBook.text || "").length / pageSize);
  const pagesToShow = 5;

  useEffect(() => {
    dispatch(getBookTextById(bookId));
    dispatch(getBookById(bookId));
  }, [dispatch, bookId]);

  useEffect(() => {
    const start = (currentPage - 1) * pageSize;
    const end = start + pageSize;
    setDisplayedText((currentBook.text || "").substring(start, end));
  }, [currentPage, pageSize, currentBook]);

  const handlePageChange = useCallback((newPage) => {
    setCurrentPage(newPage.selected + 1);
  }, []);

  return (
    <div className="container mt-4">
      <div  className="row">

        {currentBook && currentBook.text ? (
          <div  className="col-md-8 offset-md-2">
            <h1>{currentBook.bookTitle}</h1>

            <p style={{ minHeight: 'calc(100vh - 370px)' }}>{displayedText}</p>

            <div className="d-flex justify-content-center align-items-center">
              <div className="btn-group mb-3">
                <ReactPaginate
                  breakLabel={"..."}
                  pageCount={totalPages}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={pagesToShow}
                  onPageChange={handlePageChange}
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
          </div>
        ) : (
          <p>Loading...</p>
        )}

      </div>
    </div>
  );
};