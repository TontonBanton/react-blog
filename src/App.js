//import './App.css';   use index.js as the general style
import NavBar from './Navbar';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className='content'>
        <Home/>
      </div>
    </div>
  );
}

export default App;
