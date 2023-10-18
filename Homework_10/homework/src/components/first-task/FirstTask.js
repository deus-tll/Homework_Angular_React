import './components/MovieInfo.css'
import { MovieInfo } from "./components/MovieInfo";


const FirstTask = () => {
  const movieData = {
    poster: 'https://m.media-amazon.com/images/M/MV5BMjE2NTgyMzM0NV5BMl5BanBnXkFtZTgwNzkwNDE1MzE@._V1_SX300.jpg',
    title: 'Filth',
    year: 2013,
    runtime: '97 min',
    director: 'Jon S. Baird',
    studios: [
      'Steel Mill Pictures',
      'Logie Pictures',
      'Altitude Film Entertainment',
      'Egoli Tossell Film',
      'Entre Chien et Loup',
      'Film House Germany',
      'Film i Väst',
      'Filmgate Films',
      'Maven Pictures'
    ],
    actors: [
      'James McAvoy',
      'Jamie Bell',
      'Eddie Marsan'
    ],
    plot: 'Scheming Bruce Robertson (James McAvoy), a bigoted and corrupt policeman, is in line for a promotion and will stop at nothing to get what he wants. Enlisted to solve a brutal murder and threatened by the aspirations of his colleagues, including Ray Lennox (Jamie Bell), Bruce sets about ensuring their ruin, right under the nose of unwitting Chief Inspector Toal. As he turns his colleagues against one another by stealing their wives and exposing their secrets, Bruce starts to lose himself in a web of deceit that he can no longer control. His past is slowly catching up with him, and a missing wife, a crippling drug habit and suspicious colleagues start to take their toll on his sanity. The question is: can he keep his grip on reality long enough to disentangle himself from the filth?'
  };

  return (
    <>
      <MovieInfo 
      poster={movieData.poster}
      title={movieData.title}
      year={movieData.year}
      runtime={movieData.runtime}
      director={movieData.director}
      studios={movieData.studios}
      actors={movieData.actors}
      plot={movieData.plot} />
    </>
  );
};

export default FirstTask;