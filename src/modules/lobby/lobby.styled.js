import styled from 'styled-components';
import Face from '@material-ui/icons/Face';

export const Container = styled.div`
  position: relative;
  height: 100vh;
  background: linear-gradient(#E4DEFE, #BFE4FF, #FFF9DA);
  text-align: center;
`;

export const PlayerList = styled.div`
  height: 95%;
  width: 30%;
  background-color: #b8ade8;
  border-radius: 10px;
  overflow-y: auto;
`;

export const Player = styled.div`
  height: 80px;
  width: 90%;
  margin: 10px auto;
  display: flex;
  align-items: center;
  background-color: rgba(255,255,255,0.7);
  border-radius: 10px;
`;

export const FaceIcon = styled(Face)`
  && {
    margin: 10px;
    color: rgba(0,0,0,0.3);
    font-size: 65px;
  }
`;

export const PlayerName = styled.div`
  color: #c5bde6;
  font-size: 20px;
  text-transform: uppercase;
`;

export const BackButton = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  height: 40px;
  width: 140px;
  background-color: #ffffff;
  border-radius: 10px;
  border-color: #9e8dea;
  box-shadow: 2px 2px 2px #9e8dea;
  font-size: 12px;
  font-family: 'Fredoka One', cursive;
  text-transform: uppercase;
  color: #9e8dea;
`;

export const SettingsWrapper = styled.div`
  height: 95%;
  width: 50%;
  background-color: #b8ade8;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CodeWrapper = styled.div`
  height: 50px;
  width: 80%;
  margin: 10px auto;
  border-radius: 10px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: #464646;

  svg {
    margin-right: 10px;
  }
`;

export const Settings = styled.div`
  margin-top: 20px;
`;

export const SettingItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`

export const Label = styled.label`
  display: flex;
  align-items: center;
  color: #ffffff;
  text-transform: uppercase;
  font-size: 20px;

  span {
    margin-left: 5px;
  }
`;

export const Select = styled.select`
  height: 50px;
  width: 250px;
  margin: 5px 0 10px;
  padding-left: 10px;
  background-color: transparent;
  border-radius: 10px;
  border: 2px solid #ffffff;
  font-family: 'Fredoka One', cursive;
  text-transform: uppercase;
  font-size: 16px;
  color: #ffffff;
`;

export const StartButton = styled.button`
  height: 60px;
  width: 250px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  border-radius: 10px;
  border-color: #9e8dea;
  box-shadow: 3px 3px 2px #9e8dea;
  font-size: 23px;
  font-family: 'Fredoka One', cursive;
  text-transform: uppercase;
  color: #9e8dea;

  svg {
    font-size: 40px;
    margin-right: 5px;
  }
`;
