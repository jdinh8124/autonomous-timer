import React, { useState } from 'react';
import Button from './button';

export default function Input(props) {
  const [minutes, setMinutes] = useState('');

  function handleSubmit() {
    props.changeRotationTime(minutes);
  }

  function inputtedMinutes(event) {
    setMinutes(event.target.value);
  }

  return (
    <div className="row justify-content-center">
      <form>
        <label>
          Change Minutes:
          <input type="text" name="minutes" onChange={inputtedMinutes}/>
        </label>
        <Button type="success" label="Save" functionality={handleSubmit} />
        <Button type="danger" label="Clear" />
      </form>
    </div>

  );
}
