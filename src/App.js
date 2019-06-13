import React from 'react';
import './App.css';
import List from './List'
import Form from './Form'

class App extends React.Component {
  state = {
    users: []
  }

  addUser = (user) => {
    const { users } = this.state

    this.setState({ 
        users: users.concat(user),
    })
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          {/* pass handleSubmit as a callback prop */}
          <Form addUser={this.addUser}/>
          <List users={this.state.users} />
        </header>
      </div>
    );
  }
}

export default App;
