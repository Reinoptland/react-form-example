import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    name: '',
    names: []
  }

  handleChange = (event) => {
    this.setState({ name: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { name, names } = this.state

    this.setState({ 
      names: names.concat(name),
      name: ''
    })
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <form onSubmit={this.handleSubmit}>
            <label>GIVE ME A NAME</label>
            <br/>
            <input 
              onChange={this.handleChange}
              placeholder={'A name her please'} 
              value={this.state.name}
            />
            <br/>
            <button type="submit">SEND NAME</button>
          </form>
        </header>
      </div>
    );
  }
}

export default App;
