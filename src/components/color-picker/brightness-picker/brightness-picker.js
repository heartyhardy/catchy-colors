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
            type="range"
            min="0"
            max="100"
        />

        <p
            className="brightness-range-indictor"
        >
            100
        </p>
    </Aux>
)

export default BrightnessPicker