const MainStructure = (props) => {
  return (
    <div class="flex-container bg-dark">
      <div class="container row d-flex align-items-center justify-content-between bg-warning content-container w-auto h-auto mt-5 mb-5">
        {props.children}
      </div>
    </div>
  );
};

export default MainStructure;