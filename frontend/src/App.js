import './App.css';
import { Route,Switch } from 'react-router-dom'
import Home from './Pages/Home'
import Auction from './Pages/Auction'
import Profile from './Pages/Profile'
import Leaderboard from './Pages/Leaderboard'
import Trading from './Pages/Trading'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/auction" component={Auction} />
        <Route path="/profile" component={Profile} />
        <Route path="/leaderboard" component={Leaderboard} />
        <Route path="/trading" component={Trading} />
      </Switch>
    </div>
  );
}

export default App;
