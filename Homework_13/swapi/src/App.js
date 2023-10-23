import "./App.css";
import { SwapApi } from "./components/SwapiApi";

function App() {
  return (
    <>
      <h1 className="text-center mt-5">Star Wars Characters</h1>
      <div className="flex-container">
        <div className="container row d-flex align-items-center justify-content-between bg-warning content-container w-100 h-auto mt-5 mb-5">
          <SwapApi />
        </div>
      </div>
    </>
  );
}

export default App;