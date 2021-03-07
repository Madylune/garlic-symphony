import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  height: 100vh;
  background: linear-gradient(#FFBFDD, #FFCAA8, #FFF9DA);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.h1`
  color: #ffa012;
  text-shadow:
    3px 3px 0 #fff,
    -1px -1px 0 #fff,  
    1px -1px 0 #fff,
    -1px 1px 0 #fff,
    1px 1px 0 #fff;
`;
