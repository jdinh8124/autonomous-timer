import React, { useState } from 'react';
import SoundOptions from './soundOptions';

export default function SoundSettings(props) {

  const [soundMenuOpen, openMenu] = useState(false);

  function openSoundMenu() {
    soundMenuOpen ? openMenu(false) : openMenu(true);
  }

  function showSoundMenu() {
    return soundMenuOpen ? <SoundOptions changeAlarmSound={props.changeAlarmSound} closeMenu={openSoundMenu}/> : undefined;
  }

  return (
    <div className="col d-flex">
      <i className="fas fa-cog ml-auto click" onClick={openSoundMenu}></i>
      {showSoundMenu()}
    </div>
  );

}
