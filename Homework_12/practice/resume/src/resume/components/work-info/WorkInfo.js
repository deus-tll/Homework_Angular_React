import { Experience } from "./Experience";
import { Skills } from "./Skills";

export const WorkInfo = ({
  hardSkills,
  softSkills,
  experiences,
  certificates,
}) => {
  return (
    <>
      <div className="d-flex">
        <div className="d-flex col-lg-12">
          <Skills hardSkills={hardSkills} softSkills={softSkills} />
        </div>
      </div>

      <div className="d-flex">
        <div className="d-flex col-lg-12">
          <Experience experiences={experiences} certificates={certificates} />
        </div>
      </div>
    </>
  );
};
