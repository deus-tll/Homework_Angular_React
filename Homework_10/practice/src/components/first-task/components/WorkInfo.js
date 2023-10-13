const WorkInfo = ({work}) => {
  return (
    <div className="mt-5 mb-5">
      <h1>Інформація про вибраний твір</h1>
      <div>
        <div className="d-flex justify-content-between">
          <p>Назва:</p>
          <p>{work.title}</p>
        </div>

        <div className="d-flex justify-content-between">
          <p>Жанр:</p>
          <p>{work.genre}</p>
        </div>

        <div className="d-flex justify-content-between">
          <p>Рік написання:</p>
          <p>{work.year}</p>
        </div>

        <div className="d-block">
          <p>Опис:</p>
          <p>{work.description}</p>
        </div>
      </div>
    </div>
  );
};

export default WorkInfo;