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

  handleCharClick = () => {
    console.log('handle click');
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
          console.log(letter);
          return (
            <CharComponent
              key={index}
              letter={letter}
              click={this.handleCharClick}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
