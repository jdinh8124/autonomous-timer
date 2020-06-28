import React from 'react';
import Announcement from './announcement';
import Input from './input';
import Timer from './timer';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="container  col">
        <Announcement />
        <Timer />
        <Input />
        <div className="row justify-content-center">
        </div>
      </div>
    );
  }
}
