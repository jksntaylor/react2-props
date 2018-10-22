import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Note from './components/Note';
import PropsDisplay from './components/propsDisplay';

class App extends Component {

  constructor () {
    super()

    this.state = {
      title: 'Testing',
      text: 'Hello',
      name: 'Jackson',
      age: 20,
      hobbies: ['running', 'photography', 'music', 'painting', 'sleeping'],
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  logger() {
    console.log('Hello');
  }

  handleChange(value) {
    this.setState({inputValue: value})
  }

  render() {
    return (
      <div className="App">
          {/* <Note title='Hello' text='World'/>
          <Note title='Foo' text='Bar'/>
          <Note title={this.state.title} text={this.state.text}/> */}
          <PropsDisplay
          name={this.state.name} 
          age={this.state.age} 
          hobbies={this.state.hobbies}
          logger={this.logger}
          inputValue={this.state.inputValue}
          handleChange={this.handleChange}/>
      </div>
    );
  }
}

export default App;
