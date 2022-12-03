import './App.css';
import Timer from './components/Timer';
import WordList from './components/Word/WordList';
import FormComponent from "./components/Form/Form"
function App() {
  return (
    <div className="App">
      <Timer/>
      <WordList/>
      <FormComponent />
    </div>
  );
}

export default App;
