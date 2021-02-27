import React, { useCallback, useState } from 'react';
import { withRouter } from 'react-router-dom'
import { Container, Logo, Title } from './home.styled';
import logo from '../../assets/garlic-logo.png';
import LoginForm from './login.component';
import { findPlayerName, storePlayerName } from '../../repositories/playerName.repository';

const Home = ({ history }) => {
  const [playerName, setPlayerName] = useState(findPlayerName());
  const updatePlayerName = useCallback(
    name => setPlayerName(name)
    ,[]
  );

  const onSubmit = () => {
    storePlayerName(playerName);
    history.push('/lobby');
  };

  return (
    <Container>
      <Logo src={logo} className="App-logo" alt="logo" />
      <Title>Garlic Symphony</Title>
      <LoginForm playerName={playerName} onChangeName={updatePlayerName} onSubmit={onSubmit} />
    </Container>
  )
}

export default withRouter(Home);
