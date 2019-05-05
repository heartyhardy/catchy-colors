import React from 'react';
import './color-picker.css';
import Aux from '../hoc/auxilary';
import HuePicker from './hue-picker/hue-picker';
import SaturationPicker from './saturation-picker/saturation-picker';
import BrightnessPicker from './brightness-picker/brightness-picker';

const ColorPicker = props => {

    const onHueChanged = event =>{
        console.log(event.target.value);
    }

    return (
        <Aux
            className=""
        >
            <HuePicker valueChanged={onHueChanged}/>
            <SaturationPicker />
            <BrightnessPicker />
        </Aux>
    )
}

export default ColorPicker