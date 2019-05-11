import React from 'react';
import './gen-colors.css';
import Aux from '../hoc/auxilary';
import GenColorSlot from '../gen-color-slot/gen-color-slot';

const GenColors = props => (
    <Aux
        className="gen-colors-main"
    >
        <p
            className="gen-dark-caption"
        >
            Dark selection
        </p>

        <div
            className="gen-colors-dark"
        >
            <GenColorSlot />
            <GenColorSlot />
            <GenColorSlot />
            <GenColorSlot />
            <GenColorSlot />
            <GenColorSlot />

        </div>

        <p
            className="gen-dark-caption"
        >
            Light selection
        </p>

        <div
            className="gen-colors-light"
        >
            <GenColorSlot />
            <GenColorSlot />
            <GenColorSlot />
            <GenColorSlot />
            <GenColorSlot />
            <GenColorSlot />
            
        </div>


    </Aux>
)

export default GenColors