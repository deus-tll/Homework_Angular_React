export const FamousPainting = ({famousPainting}) => {
  return (
    <>
      <h1 className="text-center mt-4 mb-4">Information About Artist</h1>
      <div className="d-flex align-items-center justify-content-center ">
        <img className='painting' src={famousPainting.painting} alt="cover" />
      </div>
      <div className="d-flex align-items-center justify-content-center mt-3 w-100">
        <div id="info" className="col-lg-8 d-flex flex-column">
          <div className="d-flex justify-content-between w-100 ">
            <p>Name:</p>
            <p>{famousPainting.name}</p>
          </div>

          <div className="d-flex justify-content-between w-100">
            <p>Year:</p>
            <p>{famousPainting.year}</p>
          </div>

          <div className="d-flex justify-content-between w-100">
            <p>Medium:</p>
            <p>{famousPainting.medium}</p>
          </div>

          <div className="d-flex justify-content-between w-100">
            <p>Location:</p>
            <p>{famousPainting.location}</p>
          </div>

          <div className="mt-4">
            <h5>Description</h5>
            <p className="mt-3">{famousPainting.description}</p>
          </div>
        </div>
      </div>

    </>
  );
};