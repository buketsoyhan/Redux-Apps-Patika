import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import NoteList from './components/NoteList';

function App() {
  return (
    <div className="App">
      <Header />
      <Form />
      <NoteList />
    </div>
  );
}

export default App;
