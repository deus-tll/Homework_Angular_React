import {BookFormFields} from "../../service/BookFormFields";

export const AddForm = ({ newBook, errors, onInputChange, onFileChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <BookFormFields
        errors={errors}
        bookData={newBook}
        onInputChange={onInputChange}
        onFileChange={onFileChange}/>

      <div className="d-flex justify-content-center align-items-center">
        <button type="submit" className="btn btn-dark">
          Confirm
        </button>
      </div>
    </form>
  );
};