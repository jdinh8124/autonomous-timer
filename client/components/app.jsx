import React from 'react';
import Button from './button';
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
        <Timer />
        <div className="row justify-content-center">
          <Button type="success" />
          <Button type="stop" />
        </div>
      </div>
    );
  }
}
