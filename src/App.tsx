
import { Link, Route, Routes } from 'react-router-dom';
import Matches from './components/matches';
import Leagues from './components/leagues';
import './App.css'


function App() {
  return (
    <main>
    <div className="App">
      <nav>
        <div className="menu">
          <Link to="/">leagues</Link>
          <Link to="/matches">matches</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" Component={Leagues} />
        <Route path="/matches" Component={Matches} />
      </Routes>
    </div>
    </main>
  )
}

export default App
