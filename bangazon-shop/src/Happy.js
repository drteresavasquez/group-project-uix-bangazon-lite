import React, { Component } from 'react';

class Happy extends Component {
  render() {
    return (
      <div>
          <h1>Dont Worry! BE happy, {this.props.user.first_name}!</h1>
        </div>
    );
  }
}

export default Happy;
