
import { Link, Route, Routes } from 'react-router-dom';
import Matches from './components/matches';
import Leagues from './components/leagues';
import './App.css'


function App() {
  return (
    <main>
    <div className="App">
      <div className='Container'>
      <nav>
        <div className="menu">
          <Link to="/decbet">leagues</Link>
          <Link to="/decbet/matches">matches</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/decbet" Component={Leagues} />
        <Route path="/decbet/matches" Component={Matches} />
      </Routes>
      </div>
    </div>
    </main>
  )
}

export default App
