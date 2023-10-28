export const PageStructure = (props) => {
  return (
    <div className="flex-container">
      <div className="container row d-flex align-items-center justify-content-between bg-warning content-container w-50 h-auto mt-5 mb-5">
        {props.children}
      </div>
    </div>
  );
};
