import React from 'react';
import './saturation-picker.css';
import Aux from '../../hoc/auxilary';

const SaturationPicker = props => (
    <Aux
        className="saturation-picker-main"
    >

        <p
            className="saturation-range-indictor"
        >
            0
        </p>

        <input
            className="saturation-range"
            type="range"
            min="0"
            max="100"
        />

        <p
            className="saturation-range-indictor"
        >
            100
        </p>

    </Aux>
)

export default SaturationPicker