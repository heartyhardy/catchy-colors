import React, { Component } from 'react';
import './App.css';
import ColorSlot from './components/color-slot/color-slot';
import ColorPicker from './components/color-picker/color-picker';


class App extends Component {
  render() {
    return (
      <div className="App">
        <ColorSlot hue={200} saturation={45} brightness={50} hexcolor="#2df3d0"></ColorSlot>
        <ColorPicker />
      </div>
    );
  }
}

export default App;
