import React from 'react';
import Announcement from './announcement';
import Input from './input';
import Timer from './timer';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 6000,
      paused: true,
      rotationNumber: 1,
      standTime: 6000,
      sitTime: 6000,
      breakTime: 500
    };
    this.setPausedState = this.setPausedState.bind(this);
    this.resetTime = this.resetTime.bind(this);
    this.changeRotation = this.changeRotation.bind(this);
  }

  setPausedState(pause) {
    if (pause) {
      this.setState(({ paused: false }));
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
    this.setState(previousState => ({ time: previousState.time - 1 }));
  }

  resetTime() {
    this.setState(({ time: 6000 }));
    this.setState(({ paused: true }));
    clearInterval(this.timerId);
  }

  changeRotation() {
    if (this.state.rotationNumber !== 3) {
      this.setState(previousState => ({ rotationNumber: previousState.rotationNumber + 1 }));
    } else {
      this.setState({ rotationNumber: 1 });
    }
    this.resetTime();
  }

  render() {
    return (
      <div className="container  col">
        <Announcement rotationNumber={this.state.rotationNumber}/>
        <Timer changeRotation={this.changeRotation} reset={this.resetTime} time={this.state.time} paused={this.state.paused} setPausedState={this.setPausedState} />
        <Input />
        <div className="row justify-content-center">
        </div>
      </div>
    );
  }
}
