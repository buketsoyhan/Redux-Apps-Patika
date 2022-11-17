import './App.css';
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import Detail from './pages/Detail';
import Quotes from './pages/Quotes';
function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Charcters</Link>
          </li>
          <li>
            <Link to="/quotes">Quotes</Link>
          </li>
        </ul>
      </nav>
      <div>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/char/:char_id' element={<Detail/>} />
          <Route path='/quotes' element={<Quotes/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
