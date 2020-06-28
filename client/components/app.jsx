import React from 'react';
import Announcement from './announcement';
import Input from './input';
import Timer from './timer';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 4000,
      paused: true,
      rotationNumber: 1,
      standTime: 4000,
      sitTime: 6000,
      breakTime: 500
    };
    this.setPausedState = this.setPausedState.bind(this);
    this.resetTime = this.resetTime.bind(this);
    this.changeRotation = this.changeRotation.bind(this);
    this.changeRotationTime = this.changeRotationTime.bind(this);

  }

  setPausedState() {
    if (this.state.paused) {
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
  }

  changeRotationTime(time) {
    const parsedTime = parseInt(time, 10);
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

  render() {
    return (
      <div className="container  col">
        <Announcement rotationNumber={this.state.rotationNumber}/>
        <Timer changeRotation={this.changeRotation} reset={this.resetTime} time={this.state.time} paused={this.state.paused} setPausedState={this.setPausedState} />
        <Input changeRotationTime={this.changeRotationTime} />
        <div className="row justify-content-center">
        </div>
      </div>
    );
  }
}
