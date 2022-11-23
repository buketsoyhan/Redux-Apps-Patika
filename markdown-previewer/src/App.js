import './App.css';
import Content from './components/Content';
import Preview from './components/Preview';
import TextPanel from './components/TextPanel';

function App() {
  return (
    <div className="App">
      <Content/>
      <TextPanel/>
      <Preview/>
    </div>
  );
}

export default App;
