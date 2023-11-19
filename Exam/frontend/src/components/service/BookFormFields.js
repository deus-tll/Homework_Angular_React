import {ErrorLine} from "./ErrorLine";

export const BookFormFields = ({errors, bookData, onInputChange, onFileChange}) => {

  return (
    <>
      <div className="mb-3">
        <label className="form-label w-100">
          Title:
          <input
            className="form-control"
            type="text"
            name="bookTitle"
            value={bookData.bookTitle}
            onChange={onInputChange}
          />
        </label>
        <ErrorLine errors={errors} source={"bookTitle"}/>
      </div>

      <div className="mb-3">
        <label className="form-label w-100">
          Author:
          <input
            className="form-control"
            type="text"
            name="author"
            value={bookData.author}
            onChange={onInputChange}
          />
        </label>
        <ErrorLine errors={errors} source={"author"}/>
      </div>

      <div className="mb-3">
        <label className="form-label w-100">
          Genre:
          <input
            className="form-control"
            type="text"
            name="genre"
            value={bookData.genre}
            onChange={onInputChange}
          />
        </label>
        <ErrorLine errors={errors} source={"genre"}/>
      </div>

      <div className="mb-3">
        <label className="form-label w-100">
          Publication Year:
          <input
            className="form-control"
            type="number"
            name="publicationYear"
            value={bookData.publicationYear}
            onChange={onInputChange}
          />
        </label>
        <ErrorLine errors={errors} source={"publicationYear"}/>
      </div>

      <div className="mb-3">
        <label className="form-label w-100">
          Content (upload as text file):
          <input
            id="fileInput"
            className="form-control"
            type="file"
            name="textFile"
            onChange={onFileChange}
          />
        </label>
        <ErrorLine errors={errors} source={"textFile"}/>
      </div>
    </>
  );
};