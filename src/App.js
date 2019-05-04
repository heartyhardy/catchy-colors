import React, { Component } from 'react';
import './App.css';
import ColorSlot from './components/color-slot/color-slot';
import HuePicker from './components/color-picker/hue-picker/hue-picker';


class App extends Component {
  render() {
    return (
      <div className="App">
        <ColorSlot hue={200} saturation={45} brightness={50} hexcolor="#2df3d0"></ColorSlot>
        <HuePicker />
      </div>
    );
  }
}

export default App;
