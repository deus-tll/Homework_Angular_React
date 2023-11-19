import {BookInfo} from "./BookInfo";

export const BookInfoSection = ({ book }) => (
  <div className="w-75 d-flex justify-content-lg-start align-items-center">
    <div>
      <BookInfo book={book} />
    </div>
  </div>
);
