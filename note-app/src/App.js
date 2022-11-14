import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import NoteList from './components/NoteList';

function App() {
  return (
    <div className="container">
      <div className='wrapper'>
        <Header />
        <br/>
        <br/>
        <Form />
        <NoteList />
      </div>
    </div>
  );
}

export default App;
