import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput';
import UserOutput from './UserOutput';

class App extends Component {
  state = {
    userName: 'User1',
  };

  handleOnChange = (event) => {
    this.setState({userName: event.target.value});
  }

  render() {
    return (
      <div className="App">
        <h1>Hello App</h1>
        <UserInput 
          userName={this.state.userName}
          changed={this.handleOnChange}
        />
        <UserOutput 
          userName={this.state.userName}
        />
      </div>
    );
  }
}

export default App;
