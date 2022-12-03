import './App.css';
import WordList from './components/Word/WordList';
import FormComponent from "./components/Form/Form"
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <WordList/>
      <FormComponent />
      <Footer/>
    </div>
  );
}

export default App;
