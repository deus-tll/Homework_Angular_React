import './App.css';
import { Weather } from './components/Weather';

function App() {
  return (
    <div className="flex-container">
        <div className="container row d-flex align-items-center justify-content-between bg-danger content-container w-100 h-auto mt-5 mb-5">
          <Weather/>
        </div>
      </div>
  );
}

export default App;