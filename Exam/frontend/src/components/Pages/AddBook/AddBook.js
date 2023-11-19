import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import { addBook } from "../../../redux/actions/books";
import {AddForm} from "./AddForm";

export const AddBook = () => {
  const dispatch = useDispatch();
  const [newBook, setNewBook] = useState({
    bookTitle: "",
    author: "",
    genre: "",
    publicationYear: "",
    textFile: null,
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setErrors({});
  }, [newBook.bookTitle, newBook.author, newBook.genre, newBook.publicationYear, newBook.textFile]);

  const handleInputChange = (e) => {
    const { name, value } = e.currentTarget;
    setNewBook({ ...newBook, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleFileChange = (e) => {
    const file = e.currentTarget.files[0];

    if (file) {
      setNewBook({ ...newBook, textFile: file });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    ["bookTitle", "author", "genre", "publicationYear", "textFile"].forEach((field) => {
      if (!newBook[field]) {
        newErrors[field] = "Це поле обов'язкове";
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAddBook = (e) => {
    e.preventDefault();

    if(validateForm()) {
      const formData = new FormData();
      formData.append("bookTitle", newBook.bookTitle);
      formData.append("author", newBook.author);
      formData.append("genre", newBook.genre);
      formData.append("publicationYear", newBook.publicationYear);
      formData.append("textFile", newBook.textFile);

      dispatch(addBook(formData));

      const fileInput = document.getElementById('fileInput');
      if (fileInput) {
        fileInput.value = '';
      }

      setNewBook({
        bookTitle: "",
        author: "",
        genre: "",
        publicationYear: "",
        textFile: null,
      });
    }
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="d-flex justify-content-center align-items-center">
          <div className="w-50">
            <h1 className="mb-4 text-center">Add a New Book</h1>
            <AddForm
              newBook={newBook}
              errors={errors}
              onInputChange={handleInputChange}
              onFileChange={handleFileChange}
              onSubmit={handleAddBook}
            />
          </div>
        </div>
      </div>
    </div>
  );
};