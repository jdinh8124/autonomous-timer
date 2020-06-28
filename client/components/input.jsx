import React, { useState } from 'react';
import Button from './button';

export default function Input(props) {
  const [time] = useState('60:00');

  return (
    <div className="row justify-content-center">
      <input type="text" className="" aria-label="Text input with segmented dropdown button"></input>
      <Button type="success" label="Save"/>
      <Button type="danger" label="Reset"/>
    </div>

  );
}
