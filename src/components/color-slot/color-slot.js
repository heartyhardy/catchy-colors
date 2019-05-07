import React from 'react';
import Aux from '../hoc/auxilary';

import './color-slot.css';

const ColorSlot = props => {

    const getPriorityStr = priority => {
        switch (priority) {
            case 1: return "Primary";
            case 2: return "Secondary";
            case 3: return "Tertiary";
            default: return "";
        }
    }

    return (
        <Aux
            className={`colorslot-main ${props.isActive ? "active" : "inactive"}`}
            style={{
                backgroundColor: `hsl(${props.hue},${props.saturation}%, ${props.brightness}%)`
            }}
        >
            <p
                className="color-priority"
                priority={props.priority}
                style={{
                    color: `hsl(${props.hue},${props.saturation}%, ${props.brightness}%)`,
                    filter:"invert(100%)"
                }}
                onClick={props.onSelectPriority}
            >
                {getPriorityStr(props.priority)}
            </p>

        </Aux>
    )
}

export default ColorSlot