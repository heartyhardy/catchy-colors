import React from 'react';
import './brightness-picker.css';
import Aux from '../../hoc/auxilary';

const BrightnessPicker = props => (
    <Aux
        className="brightness-picker-main"
    >
        <p
            className="brightness-range-indictor"
        >
            0
        </p>

        <input
            className="brightness-range"
            style={{
                backgroundImage:`linear-gradient(
                    to left,
                    hsl(${props.hue}, ${props.saturation}%, ${50}%),
                    hsl(${props.hue}, ${props.saturation}%, ${0}%)
                )`
            }}
            type="range"
            min="0"
            max="100"
            value={props.brightness}
            onChange={props.valueChanged}
        />

        <p
            className="brightness-range-indictor"
        >
            100
        </p>

        <input
            className="brightness-specific-value"
            type="number"
            min="0"
            max="100"
            value={props.brightness}
            onChange={props.valueChanged}
        />

    </Aux>
)

export default BrightnessPicker