import React from 'react';
import './hue-picker.css';
import Aux from '../../hoc/auxilary';

const HuePicker = props => (
    <Aux
        className="hue-picker-main"
        style={props.style}
    >
        <p
            className="hue-range-indictor"
        >
            0
        </p>

        <input
            className="hue-range"
            type="range"
            min="0"
            max="360"
            value={props.hue}
            onChange={props.valueChanged}
        />

        <p
            className="hue-range-indictor"
        >
            360
        </p>

        <input
            className="hue-specific-value"
            type="number"
            min="0"
            max="360"
            value={props.hue}
            onChange={props.valueChanged}
        />

    </Aux>
)

export default HuePicker
