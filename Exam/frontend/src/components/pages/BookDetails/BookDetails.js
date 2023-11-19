import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Modal} from "../../service/Modal";
import { saveAs } from 'file-saver';
import {deleteBook, downloadTextFileById, getBookById} from "../../../redux/actions/books";
import {AddReview} from "./AddReview";
import {EditForm} from "./EditForm";
import {BookInfoSection} from "./BookInfoSection";
import {ActionButtons} from "./ActionButtons";
import {ReviewsSection} from "./ReviewsSection";

export const BookDetails = () => {
  const dispatch = useDispatch();
  const currentBook = useSelector(state => state.books.currentBook);
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);

  const [isEditing, setIsEditing] = useState(false);
  const [isAddingReview, setIsAddingReview] = useState(false);

  const { id: bookId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getBookById(bookId));
  }, [dispatch, bookId]);

  const handleDeleteBook = () => {
    setDeleteConfirmation(true);
  };

  const handleConfirmDelete = async () => {
    await dispatch(deleteBook(currentBook.id));
    setDeleteConfirmation(false);
    navigate("/");
  };

  const handleCancelDelete = () => {
    setDeleteConfirmation(false);
  };

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const handleToggleAddReview = () => {
    setIsAddingReview(!isAddingReview);
  };

  const handleDownload = async () => {
    try {
      const fileContent = await dispatch(downloadTextFileById(currentBook.id));
      saveAs(new Blob([fileContent]), `${currentBook.bookTitle}.txt`);
    } catch (error) {
      console.error("Помилка завантаження файлу: ", error);
    }
  };

  return (
    <>
      {currentBook && (
        <>
          <div className="d-flex justify-content-between align-items-center">
            <BookInfoSection book={currentBook}/>
            <ActionButtons
              bookId={currentBook.id}
              onDelete={handleDeleteBook}
              onEdit={handleEdit}
              onDownload={handleDownload}
              onToggleAddReview={handleToggleAddReview}/>
          </div>

          {isAddingReview && <AddReview bookId={bookId} />}

          {isEditing ? (
            <EditForm onCancelEdit={handleCancelEdit}/>
          ) : null}

          {currentBook.reviews && (
            <ReviewsSection reviews={currentBook.reviews} />
          )}
        </>
      )}

      <Modal isOpen={deleteConfirmation}>
        <p>Are you sure you want to delete this book?</p>
        <div className="d-flex justify-content-around align-items-center">
          <button className="btn btn-danger" onClick={handleConfirmDelete}>
            Yes
          </button>
          <button className="btn btn-secondary" onClick={handleCancelDelete}>
            No
          </button>
        </div>
      </Modal>
    </>
  );
};