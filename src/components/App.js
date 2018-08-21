import 'materialize-css/dist/css/materialize.min.css'
import React, { Component } from 'react';
import Home from './home';
import Nav from './nav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Home />
      </div>
    );
  }
}

export default App;
