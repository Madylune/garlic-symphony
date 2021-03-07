import React, { useCallback, useState } from 'react';
import { withRouter } from 'react-router-dom'
import { Container } from './home.styled';
import Header from '../../components/header.component';
import LoginForm from './login.component';
import { findPlayerName, storePlayerName } from '../../repositories/playerName.repository';
import { getPath } from '../../utils/routes';

const Home = ({ history }) => {
  const [playerName, setPlayerName] = useState(findPlayerName());
  const updatePlayerName = useCallback(
    name => setPlayerName(name)
    ,[]
  );

  const onSubmit = () => {
    storePlayerName(playerName);
    history.push(getPath('lobby'));
  };

  return (
    <Container>
      <Header />
      <LoginForm playerName={playerName} onChangeName={updatePlayerName} onSubmit={onSubmit} />
    </Container>
  )
}

export default withRouter(Home);
