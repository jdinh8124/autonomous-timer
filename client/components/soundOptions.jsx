import React from 'react';

export default function SoundOptions(props) {
  function generateSoundOptions() {
    const options = ['ring', 'bell', 'clock'];
    return options.map(noises => {
      return <div className="click pb-2" onClick={() => changeSound(noises)} key={noises}>{noises}</div>;
    });
  }

  function changeSound(noises) {
    props.changeAlarmSound(noises);
    props.closeMenu();
  }

  return (
    <div className="absolute-menu">
      {generateSoundOptions()}
    </div>
  );

}
