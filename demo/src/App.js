import React, { Component } from 'react';
import spg from 'semantic-password-generator';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    password: ''
  }

  componentWillMount () {
    this.renewGenerator()
  }

  async renewGenerator () {
    this.generator = await spg()
  }

  generatePassword () {
    return () => {
      console.log(this.generator)
      if (this.generator) {
        this.renewGenerator()
        this.setState({
          password: this.generator()
        })
      }
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          {this.state.password}
        </p>
        <button onClick={this.generatePassword()}>Generate</button>
      </div>
    );
  }
}

export default App;
