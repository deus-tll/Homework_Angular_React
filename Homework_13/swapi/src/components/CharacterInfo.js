import { Line } from "./Line";

export const CharacterInfo = ({ character }) => {
  return (
    <>
      <Line name={"Height:"} value={character.height}/>
      <Line name={"Mass:"} value={character.mass}/>
      <Line name={"Hair Color:"} value={character.hair_color}/>
      <Line name={"Skin Color:"} value={character.skin_color}/>
      <Line name={"Eye Color:"} value={character.eye_color}/>
      <Line name={"Birth Year:"} value={character.birth_year}/>
      <Line name={"Gender:"} value={character.gender}/>
    </>
  );
};
