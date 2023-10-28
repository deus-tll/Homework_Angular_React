import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Game } from "./components/Game";

function App() {
  return (
    <Provider store={store}>
      <div className="flex-container">
        <div className="container row d-flex align-items-center justify-content-between bg-warning content-container w-100 h-auto mt-5 mb-5">
          <Game />
        </div>
      </div>
    </Provider>
  );
}

export default App;