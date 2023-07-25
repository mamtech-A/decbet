
import { Link, Route, Routes } from 'react-router-dom';
import Matches from './components/matches';
import Tournament from './components/Tournament';
import './App.css'


function App() {
  return (
    <div className="App">
      <div className='Container'>
      <nav>
        <div className="menu">
          <Link to="/decbet">Tournament</Link>
          <Link to="/decbet/matches">matches</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/decbet" Component={Tournament} />
        <Route path="/decbet/matches" Component={Matches} />
      </Routes>
      </div>
    </div>
  )
}

export default App
