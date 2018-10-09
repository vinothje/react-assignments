import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent';
import CharComponent from './CharComponent';

class App extends Component {
  state = {
    text: '',
  }

  handleChangeText = (event) => {
    this.setState({text: event.target.value});
  }

  handleCharClick = (event, index) => {
      const letters = this.state.text.split('');
      letters.splice(index, 1);
      this.setState({text: letters.join('')});
  }

  render() {
    return (
      <div className="App">
        <input type="text" onChange={this.handleChangeText} value={this.state.text} />
        <p>Length is {this.state.text.length}</p>
        <ValidationComponent
          textLength={this.state.text.length}
        />
        {this.state.text.split('').map((letter, index) => {
          return (
            <CharComponent
              key={index}
              letter={letter}
              charClick={(event) => this.handleCharClick(event, index)}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
