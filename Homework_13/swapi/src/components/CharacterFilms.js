import { Line } from "./Line";

export const CharacterFilms = ({ filmsData }) => {
  return (
    <>
      <div className="mt-4">
        <h3>Movies with this character</h3>
        <ol>
          {filmsData.map((film, index) => (
            <li key={index} className="mt-5 mb-5 block p-3">
              <ul>
                <li>
                  <Line name={"Title:"} value={film.title} />
                </li>

                <li>
                  <Line name={"Director:"} value={film.director} />
                </li>

                <li>
                  <Line name={"Producer:"} value={film.producer} />
                </li>

                <li>
                  <Line name={"Release Date:"} value={film.release_date} />
                </li>
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};
