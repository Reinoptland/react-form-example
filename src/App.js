import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    name: ''
  }

  handleChange = (event) => {
    console.log('LETTER?', event.target.value)
    this.setState({ name: event.target.value })
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <form>
            <label>GIVE ME A NAME</label>
            <br/>
            <input 
              onChange={this.handleChange}
              placeholder={'A name her please'} 
              value={this.state.name}
            />
          </form>
        </header>
      </div>
    );
  }
}

export default App;
