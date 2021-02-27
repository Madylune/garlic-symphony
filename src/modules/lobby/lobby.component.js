import React from 'react';
import { withRouter } from 'react-router-dom'
import LinkIcon from '@material-ui/icons/Link';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import MicIcon from '@material-ui/icons/Mic';
import map from 'lodash/fp/map';
import times from 'lodash/fp/times';
import { 
  Container,
  PlayerList,
  Player, FaceIcon,
  PlayerName,
  BackButton,
  SettingsWrapper,
  CodeWrapper,
  Settings,
  SettingItem,
  Label,
  Select,
  StartButton
} from './lobby.styled';
import Header from '../../components/header.component';
import WrapperFrame from '../../components/wrapperFrame.component';

const players = times(i => ({
  id: i
}), 30)

const Lobby = ({ history }) => {
  const goBack = () => history.push('/');

  return (
    <Container>
      <BackButton onClick={goBack}>Retour accueil</BackButton>
      <Header />
      <WrapperFrame style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
        <PlayerList>
          {map(player => (
            <Player key={player.id}>
              <FaceIcon />
              <PlayerName>{player.name ? player.name : "Libre"}</PlayerName>
            </Player>
          ), players)}
        </PlayerList>
        <SettingsWrapper>
          <CodeWrapper>
            <LinkIcon />
            {window.location.href}
          </CodeWrapper>
          <Settings>
            <SettingItem>
              <Label>
                <AccessAlarmIcon />
                <span>Durée</span>
              </Label>
              <Select name="time">
                <option value="10">10 seconds</option>
                <option value="20">20 seconds</option>
                <option value="30">30 seconds</option>
              </Select>
            </SettingItem>
            <SettingItem>
              <Label>
                <AutorenewIcon />
                <span>Tours</span>
              </Label>
              <Select name="rounds">
                <option value="5">5</option>
                <option value="7">7</option>
                <option value="10">10</option>
              </Select>
            </SettingItem>
            <SettingItem>
              <Label>
                <MicIcon />
                <span>Voix</span>
              </Label>
              <Select name="rounds">
                <option value="normal">Normal</option>
                <option value="chipmunk">Chipmunk</option>
                <option value="robot">Robot</option>
              </Select>
            </SettingItem>
          </Settings>
          <StartButton onClick={history.push('/:roomid')}>
            <PlayArrowIcon />
            Démarrer
          </StartButton>
        </SettingsWrapper>
      </WrapperFrame>
    </Container>
  )
}

export default withRouter(Lobby);
