import React from 'react';
import './App.css';
import List from './List'
import Form from './Form'

class App extends React.Component {
  state = {
    names: []
  }

  addName = (name) => {
    const { names } = this.state

    this.setState({ 
        names: names.concat(name),
    })
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          {/* pass handleSubmit as a callback prop */}
          <Form cheese={'brie'} addName={this.addName}/>
          <List names={this.state.names} />
        </header>
      </div>
    );
  }
}

export default App;
