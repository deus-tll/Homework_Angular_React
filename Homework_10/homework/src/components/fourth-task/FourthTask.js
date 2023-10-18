import { Pet } from "./components/Pet";
import Photo from "./assets/pet_photo.jpg"

const FourthTask = () => {
  const petInfo = {
    name: 'Ервін',
    breed: 'Амстафф',
    age: 2,
    photo: Photo
  };

  return (
    <>
      <Pet pet={petInfo}/>
    </>
  );
};

export default FourthTask;