import './App.css';
import MultilineTextFields from './components/MultilineTextFields';
import BasicModal from './components/BasicModal';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>User Generated Poems</h1>
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
