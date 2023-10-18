export const MovieInfo = ({
  poster,
  title,
  year,
  runtime,
  director,
  studios,
  actors,
  plot,
}) => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center ">
        <img src={poster} alt="cover" />
      </div>
      <div className="d-flex align-items-center justify-content-center mt-3 w-100">
        <div id="info" className="col-lg-8 d-flex flex-column">
          <div className="d-flex justify-content-between w-100 ">
            <p>Назва:</p>
            <p>{title}</p>
          </div>

          <div className="d-flex justify-content-between w-100">
            <p>Рік:</p>
            <p>{year}</p>
          </div>

          <div className="d-flex justify-content-between w-100">
            <p>Тривалість:</p>
            <p>{runtime}</p>
          </div>

          <div className="d-flex justify-content-between w-100">
            <p>Режисер:</p>
            <p>{director}</p>
          </div>

          <div className="mt-4">
            <h5 className="text-center">Studios</h5>
            <ul className="list-group">
              {studios.map((studio, index) => (
                <li className="list-group-item bg-warning-subtle p-3" key={index}>
                  <span className="fw-bold">{studio}</span>
                  <br />
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4">
            <h5 className="text-center">Actors</h5>
            <ul className="list-group">
              {actors.map((actor, index) => (
                <li className="list-group-item bg-warning-subtle p-3" key={index}>
                  <span className="fw-bold">{actor}</span>
                  <br />
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4">
            <h5>Опис</h5>
            <p className="mt-3">{plot}</p>
          </div>
        </div>
      </div>
    </>
  );
};
