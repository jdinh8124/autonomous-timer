import React, { useState } from 'react';

export default function Announcement(props) {
  const [announcement, changeAnnouncement] = useState('Time to stand');

  function announcementToRender(announcementArg) {
    // if (announcementArg === 'hello') {
    //   changeAnnouncement('Time to stand');
    // } else if (announcementArg === 'lost') {
    //   changeAnnouncement('Time to sit');
    // } else {
    //   changeAnnouncement('Time to take a break');
    // }
    return <h1>{announcement}</h1>;
  }

  return (
    <div className="row justify-content-center">
      {announcementToRender('hello')}
    </div>
  );

}
