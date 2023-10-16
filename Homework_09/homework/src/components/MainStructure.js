const MainStructure = (props) => {
  return (
    <div className="flex-container bg-dark">
      <div className="container row d-flex align-items-center justify-content-between bg-warning content-container h-auto mt-5 mb-5">
        {props.children}
      </div>
    </div>
  );
};

export default MainStructure;