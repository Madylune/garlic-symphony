import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const IconBtn = styled(IconButton)`
  && {
    margin: 30px;
    &&.MuiButtonBase-root {
      background-color: ${({ validated }) => validated ? '#56cc41' : '#ffa012'};
    }
    svg {
      font-size: 45px;
      color: #ffffff;
    }
  }
`;

export const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
`;
