import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './modules/home/home.component';
import Lobby from './modules/lobby/lobby.component';
import Game from './modules/game/game.component';
import { getPath } from './utils/routes';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={getPath('home')} component={Home} />
        <Route exact path={getPath('lobby')} component={Lobby} />
        <Route exact path={getPath('game', { id: ':id' })} component={Game} />
      </Switch>
    </Router>
  )
};

export default App;
