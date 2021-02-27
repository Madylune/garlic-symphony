import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`

export const Logo = styled.img`
  margin: 5px;
  height: 120px;

  @media (prefers-reduced-motion: no-preference) {
    animation: App-logo-spin infinite 1s linear alternate;
  }

  @keyframes App-logo-spin {
    from { transform: rotate(-5deg); }
    to { transform: rotate(5deg); }
  }
`;

export const Title = styled.h1`
  color: #2d8d27;
  text-transform: uppercase;
  font-size: 25px;
  margin: 0;
  text-shadow:
    3px 3px 0 #fff,
    -1px -1px 0 #fff,  
    1px -1px 0 #fff,
    -1px 1px 0 #fff,
    1px 1px 0 #fff;
`;
