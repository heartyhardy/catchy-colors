import React, { Component } from 'react';
import './App.css';
import ColorSlot from './components/color-slot/color-slot';
import HuePicker from './components/color-picker/hue-picker/hue-picker';
import SaturationPicker from './components/color-picker/saturation-picker/saturation-picker';
import BrightnessPicker from './components/color-picker/brightness-picker/brightness-picker';


class App extends Component {
  render() {
    return (
      <div className="App">
        <ColorSlot hue={200} saturation={45} brightness={50} hexcolor="#2df3d0"></ColorSlot>
        <HuePicker />
        <SaturationPicker />
        <BrightnessPicker />
      </div>
    );
  }
}

export default App;
