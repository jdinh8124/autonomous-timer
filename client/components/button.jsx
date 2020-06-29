import React from 'react';

export default function Button(props) {

  function buttonToRender() {
    if (props.type === 'success') {
      return <button type="button" onClick={() => props.functionality()} className="btn btn-success m-2">{props.label}</button>;
    } else if (props.type === 'pause') {
      return <button type="button" onClick={() => props.functionality()} className="btn btn-warning m-2">{props.label}</button>;
    } else {
      return <button type="button" onClick={() => props.functionality()} className="btn btn-danger m-2">{props.label}</button>;
    }
  }

  return (
    <>
      {buttonToRender()}
    </>
  );
}
