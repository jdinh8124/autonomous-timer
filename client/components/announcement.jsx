import React, { useState } from 'react';

export default function Announcement(props) {
  const [announcement, changeAnnouncement] = useState('Time to stand');

  function announcementToRender(announcementArg) {
    return <h1>{announcement}</h1>;
  }

  return (
    <div className="row justify-content-center">
      {announcementToRender('hello')}
    </div>
  );

}
