import {BookFormFields} from "../../service/BookFormFields";
import {useEffect, useState} from "react";
import {getBookById, updateBook} from "../../../redux/actions/books";
import {useDispatch, useSelector} from "react-redux";

export const EditForm = ({ onCancelEdit}) => {
  const dispatch = useDispatch();
  const currentBook = useSelector((state) => state.books.currentBook);
  const [updatedBookData, setUpdatedBookData] = useState({ ...currentBook });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setUpdatedBookData({ ...currentBook });
  }, [currentBook]);

  const validateForm = () => {
    const newErrors = {};

    ["bookTitle", "author", "genre", "publicationYear"].forEach((field) => {
      if (!updatedBookData[field]) {
        newErrors[field] = "Це поле обов'язкове";
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSaveEdit = async () => {
    if (validateForm()) {
      const formData = new FormData();
      formData.append("bookTitle", updatedBookData.bookTitle);
      formData.append("author", updatedBookData.author);
      formData.append("genre", updatedBookData.genre);
      formData.append("publicationYear", updatedBookData.publicationYear);
      formData.append("textFile", updatedBookData.textFile);

      await dispatch(updateBook(currentBook.id, formData));
      await dispatch(getBookById(currentBook.id));

      onCancelEdit();
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.currentTarget;
    setUpdatedBookData({ ...updatedBookData, [name]:value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleFileChange = (e) => {
    const file = e.currentTarget.files[0];

    if(file) {
      setUpdatedBookData({ ...updatedBookData, textFile: file });
    }
  };

  return (
    <div className="container mt-4">
      <BookFormFields
        errors={errors}
        bookData={updatedBookData}
        onInputChange={handleInputChange}
        onFileChange={handleFileChange}/>

      <div className="mb-3">
        <button className="btn btn-primary" onClick={handleSaveEdit}>
          Save
        </button>
        <button className="btn btn-secondary ms-2" onClick={() => {
          onCancelEdit();
          setUpdatedBookData({ ...currentBook });
        }}>
          Cancel
        </button>
      </div>
    </div>
  );
};