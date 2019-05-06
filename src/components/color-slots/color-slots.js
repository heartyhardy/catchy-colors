import React from 'react';
import './color-slots.css';
import Aux from '../hoc/auxilary';
import ColorSlot from '../color-slot/color-slot';

const ColorSlots = props => {
    return (
        <Aux
            className="color-slots-main"
        >
            <ColorSlot
                hue={props.primary.h}
                saturation={props.primary.s}
                brightness={props.primary.l}
                priority={1}
                isActive={props.priority === 1 ? true : false}
                onSelectPriority={props.onSelectPriority}
            />

            <ColorSlot
                hue={props.secondary.h}
                saturation={props.secondary.s}
                brightness={props.secondary.l}
                priority={2}
                isActive={props.priority === 2 ? true : false}
                onSelectPriority={props.onSelectPriority}
            />

            <ColorSlot
                hue={props.tertiary.h}
                saturation={props.tertiary.s}
                brightness={props.tertiary.l}
                priority={3}
                isActive={props.priority === 3 ? true : false}
                onSelectPriority={props.onSelectPriority}
            />

        </Aux>
    )
}

export default ColorSlots