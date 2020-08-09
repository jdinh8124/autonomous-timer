import React from 'react';

export default function Announcement(props) {

  function announcementToRender() {
    let announcement;
    if (props.rotationNumber === 1) {
      announcement = 'Time To Stand';
    } else if (props.rotationNumber === 2) {
      announcement = 'Time To Sit';
    } else if (props.rotationNumber === 3) {
      announcement = 'Time For A Break';
    } else {
      announcement = 'Time is up!!!';
    }
    return <h1>{announcement}</h1>;
  }

  return (
    <div className="row justify-content-center text-center">
      {announcementToRender()}
    </div>
  );

}
