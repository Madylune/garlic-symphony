import React from 'react';
import { Container, Logo, Title } from './header.styled';
import logo from '../assets/garlic-logo.png';

const Header = () =>
  <Container>
    <Logo src={logo} className="App-logo" alt="logo" />
    <Title>Garlic Symphony</Title>
  </Container>

export default Header;