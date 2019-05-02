import React from 'react';
import Aux from '../hoc/auxilary';

import './color-slot.css';

const ColorSlot = props => (
    <Aux
        className="colorslot-main"
        style={{
            backgroundColor:`hsl(${props.hue},${props.saturation}%, ${props.brightness}%)`
        }}
    >
        <p
            className="color-hex"
        >
        {props.hexcolor}
        </p>

    </Aux>
)

export default ColorSlot