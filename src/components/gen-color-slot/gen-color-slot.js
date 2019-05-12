import React from 'react';
import './gen-color-slot.css';
import Aux from '../hoc/auxilary';

const GenColorSlot = props => (
    <Aux
        className="gen-color-slot-main"
        style={{
            backgroundColor: `hsl(${props.h}, ${props.s}%, ${props.l}%)`
        }}
    >
    </Aux>
)

export default GenColorSlot