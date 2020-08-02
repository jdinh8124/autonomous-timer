import React, { useState } from 'react';
import Button from './button';

export default function Input(props) {
  const [minutes, setMinutes] = useState('');

  function handleSubmit() {
    props.changeRotationTime(minutes);
    setMinutes('');
  }

  function clearInput() {
    setMinutes('');
  }

  function inputtedMinutes(event) {
    setMinutes(event.target.value);
  }

  return (
    <div className="row justify-content-center">
      <form className="d-flex flex-column flex-xl-row">
        <div className="pt-2">
          <span>Change Minutes:</span>
          <input className="mx-2 pt-1 pb-1" type="text" name="minutes" value={minutes} onChange={inputtedMinutes}/>
        </div>
        <Button type="success" label="Save" functionality={handleSubmit} />
        <Button type="danger" label="Clear" functionality={clearInput} />
      </form>
    </div>

  );
}
