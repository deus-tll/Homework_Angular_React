export const CityPhoto = ({ image }) => {
  return(
    <>
      <h1 className="text-center mt-4 mb-4">Фотографія міста</h1>
      <div className="d-flex align-items-center justify-content-center ">
        <img className='large-image' src={image} alt="cover" />
      </div>
    </>
  );
};