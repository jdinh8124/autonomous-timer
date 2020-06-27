import React, { useState } from 'react';

export default function Timer(props) {
  const [time] = useState('60:00');

  function timeToRender() {
    return <h1>{time}</h1>;
  }

  return (
    <div className="row justify-content-center">
      {timeToRender()}
    </div>
  );
}
