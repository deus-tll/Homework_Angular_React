import './components/BandInfo.css'
import BandInfo from "./components/BandInfo";

const SecondTask = () => {
  const BandData = {
    name: 'Mother Mother',
    members: [
      'Ryan Guldemond',
      'Molly Guldemond',
      'Ali Siadat',
      'Jasmin Parkin',
      'Mike Young'
    ],
    pastMembers: [
      'Kenton Lowin',
      'Debra-Jean Creelman',
      'Jeremy Page'
    ],
    albums: [
      {
        cover: 'https://upload.wikimedia.org/wikipedia/en/e/e4/Mother_Mother_-_Touch_Up_cover_art.jpg?20210405225132',
        name: 'Touch Up'
      },
      {
        cover: 'https://upload.wikimedia.org/wikipedia/en/7/74/O_My_Heart.jpg?20180425220520',
        name: 'O My Heart'
      },
      {
        cover: 'https://upload.wikimedia.org/wikipedia/en/e/e5/Eurekamm.jpg',
        name: 'Eureka'
      },
    ]
  };

  return (
    <>
      <BandInfo
       name={BandData.name}
       members={BandData.members}
       pastMembers = {BandData.pastMembers}
       albums={BandData.albums} />
    </>
  );
}

export default SecondTask;