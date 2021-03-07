import React, { Component } from 'react';
import MicRecorder from 'mic-recorder-to-mp3';
import StopIcon from '@material-ui/icons/Stop';
import MicIcon from '@material-ui/icons/Mic';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckIcon from '@material-ui/icons/Check';
import { Container, IconBtn, IconsWrapper } from './recorder.styled';

const Mp3Recorder = new MicRecorder({ bitRate: 128 });

class Recorder extends Component {
  state = {
    isRecording: false,
    blobURL: null,
    isBlocked: false,
    validated: false
  };

  componentDidMount() {
    navigator.getUserMedia({ audio: true },
      () => {
        this.setState({ isBlocked: false });
      },
      () => {
        this.setState({ isBlocked: true })
      },
    );
  };

  start = () => {
    if (!this.state.isBlocked) {
      Mp3Recorder
      .start()
      .then(() => {
        this.setState({ isRecording: true });
      }).catch((e) => console.error(e));
    }
  };

  stop = () => {
    Mp3Recorder
      .stop()
      .getMp3()
      .then(([buffer, blob]) => {
        const blobURL = URL.createObjectURL(blob)
        this.setState({ blobURL, isRecording: false });
      }).catch((e) => console.log(e));
  };

  clear = () => {
    if (this.state.blobURL) {
      this.setState({ blobURL: null });
      this.setState({ isValidated: false });
    }
  };

  validate = () => {
    if (this.state.blobURL) {
      this.setState({ validated: true });
    }
  };

  render() {
    const { isRecording, blobURL, validated } = this.state; 

    return (
      <Container>
        {blobURL ? (
          <IconsWrapper>
          <IconBtn onClick={this.clear}>
            <DeleteIcon />
          </IconBtn>
          <IconBtn onClick={this.validate} validated={validated}>
            <CheckIcon />
          </IconBtn>
          </IconsWrapper>
        ) : isRecording ? (
          <IconBtn onClick={this.stop}>
            <StopIcon />
          </IconBtn>
        ) : (
          <IconBtn onClick={this.start}>
            <MicIcon />
          </IconBtn>
        )}
        {blobURL && <audio src={blobURL} controls="controls" />}
      </Container>
    )
  }
}

export default Recorder;
