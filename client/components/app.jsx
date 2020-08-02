import React from 'react';
import Announcement from './announcement';
import SoundSettings from './soundSettings';
import Input from './input';
import Timer from './timer';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 3600,
      paused: true,
      rotationNumber: 1,
      standTime: 3600,
      sitTime: 3600,
      breakTime: 500,
      bellSound: './sounds/analog-watch-alarm.mp3'
    };
    this.setPausedState = this.setPausedState.bind(this);
    this.resetTime = this.resetTime.bind(this);
    this.changeRotation = this.changeRotation.bind(this);
    this.changeRotationTime = this.changeRotationTime.bind(this);
    this.changeAlarmSound = this.changeAlarmSound.bind(this);
    this.bell = new Audio();
  }

  setPausedState() {
    if (this.state.paused) {
      this.setState(({ paused: false }));
      this.playAlarm(false);
      this.timerId = setInterval(
        () => this.timerTick(),
        1000
      );
    } else {
      this.setState(({ paused: true }));
      clearInterval(this.timerId);
    }
  }

  timerTick() {
    if (this.state.time === 0) {
      clearInterval(this.timerId);
      this.playAlarm(true);
      this.setState({ rotationNumber: 4 });
      return;
    }
    this.setState(previousState => ({ time: previousState.time - 1 }));
  }

  resetTime() {
    this.setState(({ paused: true }));
    clearInterval(this.timerId);
    this.checkRotationTime();
  }

  checkRotationTime() {
    if (this.state.rotationNumber === 1) {
      this.setState({ time: this.state.standTime });
    } else if (this.state.rotationNumber === 2) {
      this.setState({ time: this.state.sitTime });
    } else {
      this.setState({ time: this.state.breakTime });
    }
  }

  changeRotation() {
    if (this.state.rotationNumber === 1) {
      this.setState({ rotationNumber: 2 });
      this.setState({ time: this.state.sitTime });
    } else if (this.state.rotationNumber === 2) {
      this.setState({ rotationNumber: 3 });
      this.setState({ time: this.state.breakTime });
    } else {
      this.setState({ rotationNumber: 1 });
      this.setState({ time: this.state.standTime });
    }
    clearInterval(this.timerId);
    this.setState(({ paused: true }));
  }

  changeRotationTime(time) {
    const parsedTime = parseInt(time, 10) * 60;
    if (parsedTime > 0) {
      if (this.state.rotationNumber === 1) {
        this.setState({ standTime: parsedTime });
      } else if (this.state.rotationNumber === 2) {
        this.setState({ sitTime: parsedTime });
      } else {
        this.setState({ breakTime: parsedTime });
      }
      this.setState({ time: parsedTime });
    }
  }

  playAlarm(play) {
    if (play) {
      this.bell = new Audio(this.state.bellSound);
      this.bell.play();
    } else {
      this.bell.pause();
    }
  }

  changeAlarmSound(selectedNoise) {
    if (selectedNoise === 'clock') {
      this.setState({ bellSound: './sounds/analog-watch-alarm_daniel-simion.mp3' });
    } else if (selectedNoise === 'ring') {
      this.setState({ bellSound: './sounds/old-fashioned-school-bell-daniel_simon.mp3' });
    } else {
      this.setState({ bellSound: './sounds/zen-buddhist-temple.mp3' });
    }
  }

  render() {
    return (
      <div className="container pt-2">
        <div className="col-6 offset-3 ">
          <SoundSettings changeAlarmSound={this.changeAlarmSound} />
          <Announcement rotationNumber={this.state.rotationNumber}/>
          <hr />
          <Timer changeRotation={this.changeRotation} reset={this.resetTime} time={this.state.time} paused={this.state.paused} setPausedState={this.setPausedState} />
          <hr />
          <Input changeRotationTime={this.changeRotationTime} />
          <div className="row justify-content-center">
          </div>
        </div>
      </div>
    );
  }
}
