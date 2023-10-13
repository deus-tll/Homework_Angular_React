const ButtonValueChanger = ({ onChange, label }) => {
  return (
    <>
      <div className="d-flex justify-content-center mt-5">
        <button className="btn btn-dark w-50" onClick={onChange}>
          {label}
        </button>
      </div>
    </>
  );
};

export default ButtonValueChanger;