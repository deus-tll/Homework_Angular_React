export const FamousLandmark = ({ landmark }) => {
  return(
    <>
      <h1 className="text-center mt-4 mb-4">Найвідоміша пам'ятка</h1>
      <div className="d-flex align-items-center justify-content-center ">
        <img className='large-image' src={landmark.photo} alt="cover" />
      </div>
      <div className="d-flex align-items-center justify-content-center mt-3 w-100">
        <div id="info" className="col-lg-8 d-flex flex-column">
          <div className="d-flex justify-content-between w-100 ">
            <p>Назва:</p>
            <p>{landmark.name}</p>
          </div>

          <div className="mt-4">
            <h3>Опис</h3>
            {
              landmark.description.map((parag, index) => (
                <p key={index} className="mt-3">{parag} <br/> </p>
              ))
            }
          </div>

          <div className="mt-4">
            <h3>Інформація</h3>
            {
              landmark.info.map((parag, index) => (
                <p key={index} className="mt-3">{parag} <br/> </p>
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
};