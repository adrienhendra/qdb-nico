import React, { Component } from 'react';
import './App.css';

/* Q-View */
import { QView } from './components/qview';

class App extends Component {
  render() {
    return (
      <div className="App">
        <QView />
      </div>
    );
  }
}

export default App;
