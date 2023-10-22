import './LandmarkList.css'

export const LandmarkList = ({ landmarks }) => {
  return(
    <div>
      <h1 className="text-center mt-4 mb-4">Пам'ятки</h1>
      <div className="mt-5">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 w-100 ">
          {landmarks.map((landmark, index) => (
            <div key={index} className="col d-flex justify-content-center">
              <div className="w-100 d-flex justify-content-center">
                <div className="landmark-list-item d-block mt-3 ">
                  <div>
                    <img src={landmark.photo} alt="landmark" />
                  </div>
                  <p className="mt-3 text-center">{landmark.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};