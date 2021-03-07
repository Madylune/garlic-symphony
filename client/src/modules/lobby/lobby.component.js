import React, { useState } from 'react';
import { withRouter } from 'react-router-dom'
import LinkIcon from '@material-ui/icons/Link';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import MicIcon from '@material-ui/icons/Mic';
import QueueMusicIcon from '@material-ui/icons/QueueMusic';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
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
  Games,
  GameButton,
  Settings,
  SettingItem,
  Label,
  Select,
  StartButton
} from './lobby.styled';
import Header from '../../components/header.component';
import WrapperFrame from '../../components/wrapperFrame.component';
import { getPath } from '../../utils/routes';

const games = [
  { id: 'game-1', title: 'Devine la chanson', icon: <HeadsetMicIcon /> },
  { id: 'game-2', title: 'Chante la suite', icon: <QueueMusicIcon /> }
];

const players = times(i => ({
  id: i
}), 30);

const Lobby = ({ history }) => {
  const [selectedGame, setSelectedGame] = useState(undefined);
  const onGameChange = id => setSelectedGame(id);

  const goBack = () => history.push(getPath('home'));

  const onStart = () => history.push(getPath('game', { id: '1234' }));

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
          <Games>
            {map(game => (
              <GameButton key={game.id} onClick={() => onGameChange(game.id)} selected={selectedGame === game.id}>
                {game.title}
                {game.icon}
              </GameButton>
            ), games)}
          </Games>
          <Settings>
            <SettingItem>
              <Label>
                <AutorenewIcon />
                <span>Durée de jeu</span>
              </Label>
              <Select name="rounds">
                <option value="short">court</option>
                <option value="normal">normal</option>
                <option value="long">long</option>
              </Select>
            </SettingItem>
            <SettingItem>
              <Label>
                <AccessAlarmIcon />
                <span>Temps</span>
              </Label>
              <Select name="time">
                <option value="10">10 seconds</option>
                <option value="20">20 seconds</option>
                <option value="30">30 seconds</option>
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
          <StartButton onClick={onStart}>
            <PlayArrowIcon />
            Démarrer
          </StartButton>
        </SettingsWrapper>
      </WrapperFrame>
    </Container>
  )
}

export default withRouter(Lobby);
