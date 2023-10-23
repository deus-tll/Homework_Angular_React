import { useEffect, useState } from "react";
import { CharacterInfo } from "./CharacterInfo";
import { CharacterFilms } from "./CharacterFilms";

export const SwapApi = () => {
  const swapiPeopleUrl = "https://swapi.dev/api/people";
  const swapiFilmsUrl = "https://swapi.dev/api/films/";
  const [charactersData, setCharactersData] = useState([]);
  const [filmsData, setFilmsData] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await fetch(swapiPeopleUrl);
      if (response.ok) {
        const data = await response.json();
        return data.results;
      }
      throw new Error("Failed to fetch characters data");
    };

    const fetchFilms = async () => {
      const response = await fetch(swapiFilmsUrl);
      if (response.ok) {
        const data = await response.json();
        return data.results;
      }
      throw new Error("Failed to fetch films data");
    };

    Promise.all([fetchCharacters(), fetchFilms()])
      .then(([characters, films]) => {
        const filmsData = films;

        setFilmsData(filmsData);

        const charactersDataWithFilms = characters.map((character) => {
          const characterFilmsData = character.films.map((filmUrl) => {
            const film = filmsData.find((film) => film.url === filmUrl);
            return film;
          });

          return {
            ...character,
            filmsData: characterFilmsData,
          };
        });

        setCharactersData(charactersDataWithFilms);
      })
      .catch((error) => console.error(error));
  }, [swapiPeopleUrl, swapiFilmsUrl]);

  return (
    <>
      {charactersData && (
        <div className="accordion accordion-flush" id="accordion">
          {charactersData.map((item, index) => (
            <div key={index} className="accordion-item">
              <h2 className="accordion-header" id={`flush-heading_${index}`}>
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse_${index}`} aria-expanded="false" aria-controls={`flush-collapse_${index}`}>
                  {item.name}
                </button>
              </h2>
              <div id={`flush-collapse_${index}`} className={`accordion-collapse collapse`} aria-labelledby={`flush-heading_${index}`} data-bs-parent="#accordion">
                <div className="accordion-body">
                  <div className="d-flex align-items-center justify-content-center mt-3 w-100">
                    <div className="col-lg-8 d-flex flex-column">
                      <CharacterInfo character={item} />
                      <CharacterFilms filmsData={item.filmsData} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
