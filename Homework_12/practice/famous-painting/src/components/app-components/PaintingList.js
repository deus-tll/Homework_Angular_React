import './PaintingList.css'

export const PaintingList = ({paintings}) => {
  return (
    <div>
      <h1 className="text-center mt-4 mb-4">Information About Artist</h1>
      <div className="mt-5">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 w-100 ">
          {paintings.map((painting, index) => (
            <div key={index} className="col d-flex justify-content-center">
              <div className="block w-100 d-flex justify-content-center">
                <div className="painting-list-item d-block mt-3 ">
                  <div>
                    <img src={painting.painting} alt="cover" />
                  </div>
                  <p className="mt-3 text-center">{painting.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};