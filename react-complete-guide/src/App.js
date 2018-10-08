import React, { Component } from 'react';
import './App.css';
import {Person} from './Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Adam', age: 20},
      {name: 'Mike', age: 30},
    ],
  }

  handleClick = () => {
    this.setState({
      persons: [
        {name: 'Adam new', age: 200},
        {name: 'Mike new', age: 300},
      ],
    });
  }

  handleChanged = (event) => {
    this.setState({
      persons: [
        {name: event.target.value, age: 200},
        {name: 'Mike new', age: 300},
      ],
    });
  }

  render() {
    return (
      <div className="App">
      <h1>Hello there!!</h1>
      <Person
        name={this.state.persons[0].name}
        age={this.state.persons[0].age}
        changed={this.handleChanged}
      />
      <Person
        name={this.state.persons[1].name}
        age={this.state.persons[1].age}
      >I am a good boy
      </Person>
      <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}

export default App;
