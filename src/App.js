import './App.css';
import NavBar from './Navbar';
import Home from './Home';

function App() {
  const title = 'This is the title variable'
  const num  = 13
  const link = 'https://www.youtube.com/watch?v=pnhO8UaCgxg&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=4'
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
