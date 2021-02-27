import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 75%;
  width: 75%;
  margin: 10px auto;
  border-radius: 10px;
  border: 4px rgba(255,255,255,.7) solid;
  box-shadow: inset 0px 2px 0px 0px rgb(255 255 255 / 15%), 0px 3px 0px 0px rgb(255 255 255 / 15%);
`

const WrapperFrame = ({ children, style }) => 
  <Wrapper style={style}>
    {children}
  </Wrapper>

export default WrapperFrame;
