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
            {
                props.darkScheme.dark.map((swatch, index) => {
                    return <GenColorSlot
                        key={`dswatch${index}`}
                        h={swatch.h}
                        s={swatch.s}
                        l={swatch.l}
                    />    
                })
            }
        </div>

        <p
            className="gen-dark-caption"
        >
            Light selection
        </p>

        <div
            className="gen-colors-light"
        >
            {
                props.lightScheme.light.map((swatch, index) => {
                    return <GenColorSlot
                        key={`lswatch${index}`}
                        h={swatch.h}
                        s={swatch.s}
                        l={swatch.l}
                    />    
                })
            }
        </div>


    </Aux>
)

export default GenColors