import React, { Component } from 'react';
import AddCharacter from './components/addCharacter';
import ListCharacter from './components/listCharacter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddCharacter/>

        <ListCharacter/>
      </div>
    );
  }
}

export default App;
