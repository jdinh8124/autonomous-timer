import React from 'react';
import Button from './button';

export default function Timer(props) {

  function timeToRender() {
    const min = Math.floor(props.time / 60);
    let sec = (props.time - min * 60);
    if (sec === 0) {
      sec = '00';
    } else if (sec < 10) {
      sec = '0' + sec;
    }

    return <h1>{min + ':' + sec}</h1>;
  }

  function startOrPauseButton() {
    if (props.paused) {
      return <Button type="success" label="Start" functionality={props.setPausedState}/>;
    } else {
      return <Button type="pause" label="Pause" functionality={props.setPausedState} />;
    }
  }

  return (
    <div>
      <div className="row justify-content-center">
        {timeToRender()}
      </div>
      <div className="row justify-content-center">
        <div>
          {startOrPauseButton()}
        </div>
        <Button functionality={props.reset} type="stop" label="Reset" />
        <Button functionality={props.changeRotation} type="pause" label="Change" />
      </div>
    </div>
  );

}
