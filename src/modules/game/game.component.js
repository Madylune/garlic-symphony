import React from 'react';
import {
  Container,
  Title
} from './game.styled';
import Recorder from '../../components/recorder.component';

const Game = () => {
  return (
    <Container>
      <Title>Chante quelque chose !</Title>
      <Recorder />
    </Container>
  )
}

export default Game;