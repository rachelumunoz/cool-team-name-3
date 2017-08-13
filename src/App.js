import React, { Component } from 'react';
import logo from './logo.svg';
import TopAppBar from './appbar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import PackCard from './card'
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <div className="App">
      <TopAppBar />
        <PackCard />
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
