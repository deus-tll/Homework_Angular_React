export const About = ({artist}) => {
  return (
    <>
      <h1 className="text-center mt-4 mb-4">Information About Artist</h1>
      <div className="d-flex align-items-center justify-content-center ">
        <img className='painting' src={artist.image} alt="cover" />
      </div>
      <div className="d-flex align-items-center justify-content-center mt-3 w-100">
        <div id="info" className="col-lg-8 d-flex flex-column">
          <div className="d-flex justify-content-between w-100 ">
            <p>Full name:</p>
            <p>{artist.name}</p>
          </div>

          <div className="d-flex justify-content-between w-100">
            <p>Born:</p>
            <p>{artist.born}</p>
          </div>

          <div className="d-flex justify-content-between w-100">
            <p>Died:</p>
            <p>{artist.died}</p>
          </div>

          <div className="d-flex justify-content-between w-100">
            <p>Movement:</p>
            <p>{artist.movement}</p>
          </div>

          <div className="mt-4">
            <h5>Biography</h5>
            <p className="mt-3">{artist.biography}</p>
          </div>
        </div>
      </div>
    </>
  );
};