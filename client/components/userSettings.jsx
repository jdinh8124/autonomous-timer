import React, { useState } from 'react';
import SignInModal from './signInModal';
export default function UserSettings(props) {

  const [userMenuOpen, openMenu] = useState(false);

  function openSoundMenu() {
    if (userMenuOpen) {
      openMenu(false);
      props.setUserMenuOpen(false);
    } else {
      openMenu(true);
      props.setUserMenuOpen(true);
    }
  }

  function showUserMenu() {
    return userMenuOpen ? <SignInModal /> : undefined;
  }

  return (
    <div className="col d-flex">
      <i className="fas fa-user ml-auto click" onClick={openSoundMenu}></i>
      {showUserMenu()}
    </div>
  );

}
