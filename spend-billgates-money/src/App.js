import './App.css';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Profile from './components/Profile';
import Receipt from './components/Receipt';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Profile/>
      <div className='products'>
        <Products/>
      </div>
      <Receipt/>
    </div>
  );
}

export default App;
