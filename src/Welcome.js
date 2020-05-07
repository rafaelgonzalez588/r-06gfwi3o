import React, { Component } from 'react';

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.name = props.name;
  }

  render() {
    return (
        <h1>Hola {this.name}</h1>
    );
  }
}

export default Welcome;