export const Skills = ({ hardSkills, softSkills }) => {
  return (
    <>
      <div className="d-flex flex-column block pe-1 ps-1 pb-2 col-lg-6">
        <h3 className="text-center">Хард Скілли</h3>
        <ul className="list-group">
          {hardSkills.map((skill, index) => (
            <li className="list-group-item bg-warning-subtle p-3" key={index}>
              <span className="fw-bold">{skill}</span>
              <br />
            </li>
          ))}
        </ul>
      </div>

      <div className="d-flex flex-column block pe-1 ps-1 pb-2 col-lg-6">
        <h3 className="text-center">Софт Скілли</h3>
        <ul className="list-group">
          {softSkills.map((skill, index) => (
            <li className="list-group-item bg-warning-subtle p-3" key={index}>
              <span className="fw-bold">{skill}</span>
              <br />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
