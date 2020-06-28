import React, { useState } from 'react';
import Button from './button';

export default function Timer(props) {
  const [time] = useState('60:00');
  const [paused, isPaused] = useState(true);

  function timeToRender() {
    return <h1>{time}</h1>;
  }

  function startOrPauseButton() {
    if (paused) {
      return <Button type="success" label="Start" onClick={() => isPaused(false) } />;
    } else {
      return <Button type="pause" label="Pause" onClick={() => isPaused(true)} />;
    }
  }

  return (
    <div className="">
      <div className="row justify-content-center">
        {timeToRender()}
      </div>
      <div className="row justify-content-center">
        {startOrPauseButton()}
        <Button type="stop" label="Reset" />
      </div>
    </div>
  );

}
