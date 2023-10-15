import "./App.css";

import MainStructure from "./components/MainStructure";

import FirstTask from "./components/first-task/FirstTask";
import SecondTask from "./components/second-task/SecondTask";
import ThirdTask from "./components/third-task/ThirdTask";
import FourthTask from "./components/fourth-task/FourthTask";

function App() {
  return (
    <div>
      <MainStructure>
        <FirstTask />
      </MainStructure>

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