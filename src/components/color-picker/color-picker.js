import React, { useState } from 'react';
import './color-picker.css';
import Aux from '../hoc/auxilary';
import ColorSlot from '../color-slot/color-slot';
import HuePicker from './hue-picker/hue-picker';
import SaturationPicker from './saturation-picker/saturation-picker';
import BrightnessPicker from './brightness-picker/brightness-picker';

const ColorPicker = props => {

    const [hue, setHue] = useState(0);
    const [saturation, setSaturation] = useState(0);
    const [brightness, setBrightness] = useState(0);
    const [priority, setPriority] = useState(1);

    const onHueChanged = event => {
        const val = event.target.value;
        setHue((val < 0 || val > 360) ? 0 : val);
    }

    const onSaturationChanged = event => {
        const val = event.target.value;
        setSaturation((val < 0 || val > 100) ? 0 : val);
    }

    const onBrightnessChanged = event => {
        const val = event.target.value;
        setBrightness((val < 0 || val > 100) ? 0 : val);
    }

    const onSelectPriority = event => {
        const val = event.target.getAttribute("priority");
        setPriority(val);
    }

    return (
        <Aux
            className="color-picker-main"
        >

            <ColorSlot
                hue={hue}
                saturation={saturation}
                brightness={brightness}
                priority={1}
                isActive={priority===1 ? true : false}
                onSelectPriority={onSelectPriority}
            />

            <HuePicker
                hue={hue}
                valueChanged={onHueChanged}
            />
            <SaturationPicker
                hue={hue}
                saturation={saturation}
                brightness={brightness}
                valueChanged={onSaturationChanged}
            />
            <BrightnessPicker
                hue={hue}
                saturation={saturation}
                brightness={brightness}
                valueChanged={onBrightnessChanged}
            />
        </Aux>
    )
}

export default ColorPicker