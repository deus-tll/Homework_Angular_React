import './App.css';
import { Form } from './components/Form';

function App() {
  return (
    <div>
      <div className="flex-container bg-dark main">
        <div className="container row d-flex align-items-center justify-content-between bg-warning content-container w-auto h-auto mt-5 mb-5">
          <Form/>
        </div>
      </div>
    </div>
  );
}

export default App;