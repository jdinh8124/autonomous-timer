import React from 'react';

export default function Button(props) {

  function buttonToRender() {
    if (props.type === 'success') {
      return <button type="button" onClick={() => props.functionality(true)} className="btn btn-success">{props.label}</button>;
    } else if (props.type === 'pause') {
      return <button type="button" onClick={() => props.functionality(false)} className="btn btn-warning">{props.label}</button>;
    } else {
      return <button type="button" onClick={() => props.functionality()} className="btn btn-danger">{props.label}</button>;
    }
  }

  return (
    <>
      {buttonToRender()}
    </>
  );
}
