import React, { useState } from 'react';
import Button from './button';

export default function Timer(props) {
  const [time] = useState('60:00');

  function timeToRender() {
    debugger;
    return <h1>{time}</h1>;
  }

  return (
    <div className="">
      <div className="row justify-content-center">
        {timeToRender()}
      </div>
      <div className="row justify-content-center">
        <Button type="success" label="Start" />
        <Button type="stop" label="Stop" />
      </div>
    </div>
  );

}
