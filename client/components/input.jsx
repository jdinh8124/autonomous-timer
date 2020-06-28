import React from 'react';
import Button from './button';

export default function Input(props) {

  return (
    <div className="row justify-content-center">
      <input type="text" className="" aria-label="Text input with segmented dropdown button"></input>
      <Button type="success" label="Save"/>
      <Button type="danger" label="Clear"/>
    </div>

  );
}
