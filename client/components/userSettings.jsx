import React, { useState } from 'react';
import SoundOptions from './soundOptions';

export default function UserSettings(props) {

  const [userMenuOpen, openMenu] = useState(false);

  function openSoundMenu() {
    if (userMenuOpen) {
      openMenu(false);
      props.setuserMenuOpen(false);
    } else {
      openMenu(true);
      props.setuserMenuOpen(true);
    }
  }

  function showUserMenu() {
    return userMenuOpen ? <SoundOptions changeAlarmSound={props.changeAlarmSound} closeMenu={openSoundMenu}/> : undefined;
  }

  return (
    <div className="col d-flex">
      <i className="fas fa-user ml-auto click" onClick={openSoundMenu}></i>
      {showUserMenu()}
    </div>
  );

}
