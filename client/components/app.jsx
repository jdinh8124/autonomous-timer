import React from 'react';
import Announcement from './announcement';
import Input from './input';
import Timer from './timer';
import ToolTip from './toolTip';

export default function App() {
  const [time, setTime] = React.useState(3600);
  const [timerPaused, setPausedTimer] = React.useState(true);
  const [rotation, setRotation] = React.useState(1);
  const [standTime, setStandingTime] = React.useState(3600);
  const [sitTime, setSittingTime] = React.useState(3600);
  const [breakTime, setBreakTime] = React.useState(500);
  const [bellRingSound, setBellRingSound] = React.useState('./sounds/analog-watch-alarm.mp3');
  let bell = new Audio();
  let timerId;

  const setPausedState = () => {
    if (timerPaused) {
      console.log('hello');
      setPausedTimer(false);
      playAlarm(false);
      timerId = setInterval(
        () => timerTick(),
        1000
      );
    } else {
      setPausedTimer(true);
      clearInterval(timerId);
    }
  };

  const timerTick = () => {
    if (time === 0) {
      clearInterval(timerId);
      playAlarm(true);
      setRotation(4);
      return;
    }
    setTime(time - 1);
    console.log('timer tick');
  };

  const resetTime = () => {
    setPausedTimer(true);
    clearInterval(timerId);
    checkRotationTime();
  };

  const checkRotationTime = () => {
    if (rotation === 1) {
      setTime(standTime);
    } else if (rotation === 2) {
      setTime(sitTime);
    } else {
      setTime(breakTime);
    }
  };

  const changeRotation = () => {
    if (rotation === 1) {
      setRotation(2);
      setTime(sitTime);
    } else if (rotation === 2) {
      setRotation(3);
      setTime(breakTime);
    } else {
      setRotation(1);
      setTime(standTime);
    }
    clearInterval(timerId);
    setPausedTimer(true);
  };

  const changeRotationTime = time => {
    const parsedTime = parseInt(time, 10) * 60;
    if (parsedTime > 0) {
      if (rotation === 1) {
        setStandingTime(parsedTime);
      } else if (rotation === 2) {
        setSittingTime(parsedTime);
      } else {
        setBreakTime(parsedTime);
      }
      setTime(parsedTime);
    }
  };

  const playAlarm = play => {
    if (play) {
      bell = new Audio(bellRingSound);
      bell.play();
    } else {
      bell.pause();
    }
  };

  const changeAlarmSound = selectedNoise => {
    if (selectedNoise === 'clock') {
      setBellRingSound('./sounds/analog-watch-alarm_daniel-simion.mp3');
    } else if (selectedNoise === 'ring') {
      setBellRingSound('./sounds/old-fashioned-school-bell-daniel_simon.mp3');
    } else {
      setBellRingSound('./sounds/zen-buddhist-temple.mp3');
    }
  };

  return (
    <div className="container pt-2">
      <div className="col-6 offset-3 ">
        <ToolTip changeAlarmSound={changeAlarmSound}/>
        <Announcement rotationNumber={rotation}/>
        <hr />
        <Timer changeRotation={changeRotation} reset={resetTime} time={time} paused={timerPaused} setPausedState={setPausedState} />
        <hr />
        <Input label="Change Minutes:" handleSubmit={changeRotationTime} />
        <div className="row justify-content-center">
        </div>
      </div>
    </div>
  );
}
