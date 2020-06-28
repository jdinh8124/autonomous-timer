import React from 'react';
import Button from './button';

export default function Timer(props) {

  function timeToRender() {
    return <h1>{props.time}</h1>;
  }

  function startOrPauseButton() {

    if (props.paused) {
      return <Button type="success" label="Start" functionality={props.setPausedState}/>;
    } else {
      return <Button type="pause" label="Pause" functionality={props.setPausedState} />;
    }
  }

  return (
    <div className="">
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
