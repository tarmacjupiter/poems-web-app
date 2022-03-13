import "./App.css";
import MultilineTextFields from "./components/MultilineTextFields";
import BasicModal from "./components/BasicModal";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ color: "#cab1ab" }}>Chopped Salad 🥗</h1>
        <div className="forms">
          <MultilineTextFields />
        </div>
        <div>
          <BasicModal />
        </div>
      </header>
    </div>
  );
}

export default App;
