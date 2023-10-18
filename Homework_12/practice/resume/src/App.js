import "./App.css";
import { Resume } from "./resume/Resume";

function App() {
  return (
    <div>
      <div className="flex-container bg-dark">
        <div className="container row d-flex align-items-center justify-content-between bg-warning content-container w-auto h-auto mt-5 mb-5">
          <Resume />
        </div>
      </div>
    </div>
  );
}

export default App;
