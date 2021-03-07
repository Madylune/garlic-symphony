import React from 'react';
import { Container, InputWrapper, InputLabel, Input, Button } from './login.styled';

const LoginForm = ({ playerName, onChangeName, onSubmit }) => {
  return (
    <Container>
      <InputWrapper>
        <InputLabel>
          Ton petit nom:
        </InputLabel>
        <Input 
          value={playerName}
          onChange={e => onChangeName(e.target.value)}
        />
      </InputWrapper>
      <Button onClick={onSubmit}>Nouvelle partie</Button>
    </Container>
  )
}

export default LoginForm;
