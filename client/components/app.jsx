import React from 'react';
import Button from './button';
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
        <Timer />
        <Input />
        <div className="row justify-content-center">
          <Button type="success" />
          <Button type="stop" />
        </div>
      </div>
    );
  }
}
