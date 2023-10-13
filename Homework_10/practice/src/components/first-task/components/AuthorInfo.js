const AuthorInfo = ({author}) => {
  return (
    <div className="mt-5 mb-5">
      <h1>Загальна інформація про автора</h1>
      <div>
        <div className="d-flex justify-content-between">
          <p>Повне ім'я та прізвище:</p>
          <p>{author.fullname}</p>
        </div>

        <div className="d-flex justify-content-between">
          <p>Дата народження:</p>
          <p>{author.birth}</p>
        </div>

        <div className="d-flex justify-content-between">
          <p>Дата смерті:</p>
          <p>{author.death}</p>
        </div>

        <div className="d-flex justify-content-between">
          <p>Національність:</p>
          <p>{author.nationality}</p>
        </div>
      </div>
    </div>
  );
};

export default AuthorInfo;