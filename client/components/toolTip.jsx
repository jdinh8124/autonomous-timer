import React, { useState } from 'react';
import SoundSettings from './soundSettings';

export default function ToolTip(props) {
  // const node = useRef();
  const [isVisible, setToolTipVisibility] = useState(false);
  const [soundOpen, setSoundMenuOpen] = useState(false);

  // function handleClick({ target }) {
  //   if (node.current.contains(target)) {
  //     // inside click
  //     return;
  //   }
  //   // outside click
  //   setState(false);
  // }

  function handleMouseIn() {
    if (!soundOpen) {
      setToolTipVisibility(true);
    }
  }

  function handleMouseOut() {
    console.log('bye');
    setToolTipVisibility(false);
  }

  return (
    <>
      <div onMouseDown={handleMouseOut} onMouseOver={handleMouseIn} onMouseOut={handleMouseOut}>
        <SoundSettings setSoundMenuOpen={setSoundMenuOpen} changeAlarmSound={props.changeAlarmSound} />
      </div>

      <div className={isVisible ? 'tool-tip' : 'hidden'}>
        Change Alert Sounds
      </div>
    </>
  );
}
