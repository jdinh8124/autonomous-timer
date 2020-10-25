import React, { useState } from 'react';
import SoundSettings from './soundSettings';
import UserSettings from './userSettings';

export default function ToolTip(props) {
  const [isSoundSettingVisible, setSoundToolTipVisibility] = useState(false);
  const [isUserSettingVisible, setUserToolTipVisibility] = useState(false);
  const [soundOpen, setSoundMenuOpen] = useState(false);

  function handleSoundMouseIn() {
    if (!soundOpen) {
      setSoundToolTipVisibility(true);
    }
  }

  function handleSoundMouseOut() {
    setSoundToolTipVisibility(false);
  }

  function handleUserMouseIn() {
    if (!soundOpen) {
      setUserToolTipVisibility(true);
    }
  }

  function handleUserMouseOut() {
    setUserToolTipVisibility(false);
  }

  return (
    <>
      <div className="row">
        <div className="ml-auto" onMouseDown={handleSoundMouseOut} onMouseOver={handleSoundMouseIn} onMouseOut={handleSoundMouseOut}>
          <SoundSettings setSoundMenuOpen={setSoundMenuOpen} changeAlarmSound={props.changeAlarmSound} />
          <div className={isSoundSettingVisible ? 'tool-tip' : 'hidden'}>
            Change Alert Sounds
          </div>
        </div>
        <div onMouseDown={handleUserMouseOut} onMouseOver={handleUserMouseIn} onMouseOut={handleUserMouseOut}>
          <UserSettings setSoundMenuOpen={setSoundMenuOpen} changeAlarmSound={props.changeAlarmSound} />
          <div className={isUserSettingVisible ? 'tool-tip' : 'hidden'}>
            Login
          </div>
        </div>
      </div>
    </>
  );
}
