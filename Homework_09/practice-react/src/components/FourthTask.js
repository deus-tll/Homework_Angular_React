const FourthTask = () => {
  const name = "Очаків";
  const country = "Україна";
  const year = 1492;

  const photos = [
    "https://upload.wikimedia.org/wikipedia/commons/2/2a/%D0%9C%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D1%97%D0%B2%D1%81%D1%8C%D0%BA%D0%B0_%D1%86%D0%B5%D1%80%D0%BA%D0%B2%D0%B0_%D0%9E%D1%87%D0%B0%D0%BA%D1%96%D0%B2.JPG",
    "https://upload.wikimedia.org/wikipedia/commons/2/28/%D0%9E%D1%87%D0%B0%D0%BA%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D0%BF%D0%BB%D1%8F%D0%B6.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/7/7c/Monument_of_Pyotr_Schmidt_in_Ochakiv.JPG",
    "https://upload.wikimedia.org/wikipedia/commons/e/e6/%D0%9F%D0%B0%D0%BC%D1%8F%D1%82%D0%BD%D0%B8%D0%BA-%D0%98_%D0%9F_%D0%93%D0%BE%D1%80%D0%B8%D1%87%D1%83-%D0%B2-%D0%9E%D1%87%D0%B0%D0%BA%D0%BE%D0%B2%D0%B5-%D0%BD%D0%B0%D1%87%D0%B0%D0%BB%D0%BE-%D0%A5%D0%A5-%D0%B2%D0%B5%D0%BA%D0%B0.jpg",
  ];

  return (
    <>
      <h1>Інформація про місто</h1>

      <div className="d-flex justify-content-center mt-5 mb-5">
        <div className="w-50">
          <div className="d-flex justify-content-between">
            <p>Назва міста:</p>
            <p>{name}</p>
          </div>

          <div className="d-flex justify-content-between">
            <p>Країна:</p>
            <p>{country}</p>
          </div>

          <div className="d-flex justify-content-between">
            <p>Рік заснування:</p>
            <p>{year}</p>
          </div>
        </div>
      </div>

      <div className="w-100 d-flex justify-content-center">
        <div id="photos">
          {photos.map((item, index) => (
            <div className="photo d-block">
              <div>
                <img key={index} src={item} alt={`Фото ${index}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FourthTask;
