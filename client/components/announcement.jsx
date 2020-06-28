import React from 'react';

export default function Announcement(props) {

  function announcementToRender() {
    let announcement;
    if (props.rotationNumber === 1) {
      announcement = 'Time To Stand';
    } else if (props.rotationNumber === 2) {
      announcement = 'Time To Sit';
    } else {
      announcement = 'Time For A Break';
    }
    return <h1>{announcement}</h1>;
  }

  return (
    <div className="row justify-content-center">
      {announcementToRender()}
    </div>
  );

}
