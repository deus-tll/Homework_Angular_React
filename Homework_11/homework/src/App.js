import './App.css';
import MainStructure from './components/MainStructure';
import { FootballClubs } from './components/football-clubs/FootballClubs';
import { MagicBall } from './components/magic-ball/MagicBall';

function App() {
  return (
    <div>
      <MainStructure>
        <FootballClubs/>
      </MainStructure>

      <MainStructure>
        <MagicBall/>
      </MainStructure>
    </div>
  );
}

export default App;