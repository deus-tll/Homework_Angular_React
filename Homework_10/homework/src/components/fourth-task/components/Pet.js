export const Pet = ({pet}) => {
  return (
    <> 
      <h1 className="text-center mt-4 mb-4">Домашній улюбленець</h1>
      <div className="d-flex align-items-center justify-content-center mt-4 mb-4 ">
        <img src={pet.photo} alt="фото" />
      </div>
      <div className="d-flex align-items-center justify-content-center mt-3 w-100">
        <div id="info" className="col-lg-8 d-flex flex-column">
          <div className="d-flex justify-content-between w-100 ">
            <p>Кличка:</p>
            <p>{pet.name}</p>
          </div>

          <div className="d-flex justify-content-between w-100">
            <p>Порода:</p>
            <p>{pet.breed}</p>
          </div>

          <div className="d-flex justify-content-between w-100">
            <p>Вік:</p>
            <p>{pet.age}</p>
          </div>
        </div>
      </div>
    </>
  );
};