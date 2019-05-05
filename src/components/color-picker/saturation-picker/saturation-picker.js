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
            value={props.saturation}
            onChange={props.valueChanged}
        />

        <p
            className="saturation-range-indictor"
        >
            100
        </p>

        <input
            className="saturation-specific-value"
            type="number"
            min="0"
            max="100"
            value={props.saturation}
            onChange={props.valueChanged}
        />

    </Aux>
)

export default SaturationPicker