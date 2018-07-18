import React, { Component } from 'react';
import SideNav from './Components/SideNav/SideNav';
import TopNav from './Components/TopNav/TopNav';
import Button from '@material-ui/core/Button';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <SideNav/>
      {/* <TopNav/> */}
      <Button variant="contained" color="primary">
      Hello World
    </Button>
      </div>
    );
  }
}

export default App;
