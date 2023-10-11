import "./App.css";
import MainStructure from "./components/MainStructure";
import SecondTask from "./components/SecondTask";
import ThirdTask from "./components/ThirdTask";
import FourthTask from "./components/FourthTask";

function App() {
  return (
    <div className="App">
      <MainStructure>
        <SecondTask />
      </MainStructure>

      <MainStructure>
        <ThirdTask />
      </MainStructure>

      <MainStructure>
        <FourthTask />
      </MainStructure>
    </div>
  );
}

export default App;
