import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './modules/home/home.component';
import Lobby from './modules/lobby/lobby.component';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/lobby" component={Lobby} />
        {/* <Route exact path="/:roomid" component={Multiplayer} /> */}
      </Switch>
    </Router>
  )
};

export default App;
