import React from 'react';

export default function Button(props) {

  function buttonToRender() {
    if (props.type === 'success') {
      return <button type="button" className="btn btn-success">{props.label}</button>;
    } else if (props.type === 'pause') {
      return <button type="button" className="btn btn-warning">{props.label}</button>;
    } else {
      return <button type="button" className="btn btn-danger">{props.label}</button>;
    }
  }

  return (
    <div>
      {buttonToRender()}
    </div>
  );
}
