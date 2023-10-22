export const AboutCity = ({ city }) => {
  return (
    <>
      <h1 className="text-center mt-5 mb-5">Інформація про місто</h1>

      <div className="d-flex justify-content-center mt-5 mb-5">
        <div className="w-50">
          <div className="d-flex justify-content-between">
            <p>Назва міста:</p>
            <p>{city.name}</p>
          </div>

          <div className="d-flex justify-content-between">
            <p>Країна:</p>
            <p>{city.country}</p>
          </div>

          <div className="d-flex justify-content-between">
            <p>Рік заснування:</p>
            <p>{city.year}</p>
          </div>

          <div className="d-flex justify-content-between">
            <p>Населення:</p>
            <p>{city.population}</p>
          </div>

          <div className="d-flex justify-content-between">
            <p>Площа:</p>
            <p>{city.area}</p>
          </div>

          <div className="d-flex justify-content-between">
            <p>Поштовий індекс:</p>
            <p>{city.postIndex}</p>
          </div>

          <div className="d-flex justify-content-between">
            <p>Координати:</p>
            <p>{city.coords}</p>
          </div>
        </div>
      </div>
    </>
  );
};
