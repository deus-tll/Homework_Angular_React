import "./BookInfo.css";

const BookInfo = ({ name, author, genre, pages, reviews, cover }) => {
  return (
    <>
      <div className="d-flex ps-0">
        <div className="col-lg-4 d-flex flex-column align-items-center">
          <img src={cover} alt="cover" />
        </div>
        <div id="info" className="col-lg-8 d-flex flex-column">
          <div className="d-flex justify-content-between">
            <p>Назва:</p>
            <p>{name}</p>
          </div>

          <div className="d-flex justify-content-between">
            <p>Автор:</p>
            <p>{author}</p>
          </div>

          <div className="d-flex justify-content-between">
            <p>Жанр:</p>
            <p>{genre}</p>
          </div>

          <div className="d-flex justify-content-between w-100">
            <p>Кількість сторінок:</p>
            <p>{pages}</p>
          </div>

          <div className="mt-4">
            <h4>Рецензії</h4>
            <ul className="list-group">
              {reviews.map((review, index) => (
                <li className="list-group-item bg-warning-subtle p-3" key={index}>
                  <span className="fw-bold">[{review.reviewer}]</span>:<br/>
                  {review.review}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookInfo;
