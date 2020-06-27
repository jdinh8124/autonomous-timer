import React from 'react';

export default function Button(props) {

  function buttonToRender() {
    if (props.type === 'success') {
      return <button type="button" className="btn btn-success">Start</button>;
    } else {
      return <button type="button" className="btn btn-danger">Reset</button>;
    }
  }

  return (
    <div>
      {buttonToRender()}
    </div>
  );
}
