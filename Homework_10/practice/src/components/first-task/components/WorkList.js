const WorkList = ({ works, onWorkClick }) => {
  return (
    <div className="mt-5 mb-5">
      <h2>Роботи</h2>
      <div className="d-flex justify-content-center">
        <div className="list-group w-50">
          {works.map((work, index) => (
            <button
              key={index}
              className="list-group-item list-group-item-action"
              onClick={() => onWorkClick(work)}
            >
              {work.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkList;
