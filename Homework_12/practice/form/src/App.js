import "./App.css";
import { RegistrationForm } from "./components/RegistrationForm";

function App() {
  return (
    <div>
      <div className="flex-container bg-dark main">
        <div className="container row d-flex align-items-center justify-content-between bg-warning content-container w-auto h-auto mt-5 mb-5">
          <RegistrationForm/>
        </div>
      </div>
    </div>
  );
}

export default App;
