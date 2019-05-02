import React from 'react';

const Aux = props => (
    <div
        ref={props.ref}
        className={props.className}
        style={props.style}
    >
        {props.children}
    </div>
)

export default Aux