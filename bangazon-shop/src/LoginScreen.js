import React, { Component } from 'react';

export default class LoginScreen extends Component {

  componentDidMount(){
    fetch('http://localhost:3000/users')
    .then((data)=>{
      return data.json();
    }).then((data2)=>{
        console.log(data2);
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <form>
        <input id="userLog" type="text" />
        </form>
      </div>
    );
  }
}