import React, { useState, useEffect } from 'react';
import './color-picker.css';
import Aux from '../hoc/auxilary';
import ColorSlots from '../color-slots/color-slots';
import HuePicker from './hue-picker/hue-picker';
import SaturationPicker from './saturation-picker/saturation-picker';
import BrightnessPicker from './brightness-picker/brightness-picker';
import GenControls from '../gen-controls/gen-controls';

const ColorPicker = props => {

    const [h, setH] = useState(0);
    const [s, setS] = useState(0);
    const [l, setL] = useState(0);
    const [priority, setPriority] = useState({ index: 1 });
    const [primary, setPrimary] = useState({ h: 0, s: 0, l: 0 });
    const [secondary, setSecondary] = useState({ h: 0, s: 0, l: 0 });
    const [tertiary, setTertiary] = useState({ h: 0, s: 0, l: 0 });

    useEffect(() => {
        getPreviousValues(priority.index);
    }, [priority])

    const onHueChanged = event => {
        const val = event.target.value;
        setH((val < 0 || val > 360) ? 0 : val);

        switch (Number(priority.index)) {
            case 1:
                setPrimary(prev => { return { ...prev, h: h } });
                break;
            case 2:
                setSecondary(prev => { return { ...prev, h: h } });
                break;
            case 3:
                setTertiary(prev => { return { ...prev, h: h } });
                break;
            default:
                throw new Error("Invalid value. Unexpected error occured!");
        }
    }

    const onSaturationChanged = event => {
        const val = event.target.value;
        setS((val < 0 || val > 100) ? 0 : val);

        switch (Number(priority.index)) {
            case 1:
                setPrimary(prev => { return { ...prev, s: s } });
                break;
            case 2:
                setSecondary(prev => { return { ...prev, s: s } });
                break;
            case 3:
                setTertiary(prev => { return { ...prev, s: s } });
                break;
            default:
                throw new Error("Invalid value. Unexpected error occured!");
        }
    }

    const onBrightnessChanged = event => {
        const val = event.target.value;
        setL((val < 0 || val > 100) ? 0 : val);

        switch (Number(priority.index)) {
            case 1:
                setPrimary(prev => { return { ...prev, l: l } });
                break;
            case 2:
                setSecondary(prev => { return { ...prev, l: l } });
                break;
            case 3:
                setTertiary(prev => { return { ...prev, l: l } });
                break;
            default:
                throw new Error("Invalid value. Unexpected error occured!");
        }
    }

    const onSelectPriority = event => {
        const val = event.target.getAttribute("priority");
        const index = { index: val };
        setPriority(index);
    }

    const getPreviousValues = () => {
        switch (Number(priority.index)) {
            case 1:
                setH(primary.h);
                setS(primary.s);
                setL(primary.l);
                break;
            case 2:
                setH(secondary.h);
                setS(secondary.s);
                setL(secondary.l);
                break;
            case 3:
                setH(tertiary.h);
                setS(tertiary.s);
                setL(tertiary.l);
                break;
            default:
                throw new Error("Invalid value. Unexpected error occured!");
        }
    }

    return (
        <Aux
            className="color-picker-main"
        >

            <ColorSlots
                primary={primary}
                secondary={secondary}
                tertiary={tertiary}
                priority={Number(priority.index)}
                onSelectPriority={onSelectPriority}
            />

            <HuePicker
                hue={h}
                valueChanged={onHueChanged}
            />
            <SaturationPicker
                hue={h}
                saturation={s}
                brightness={l}
                valueChanged={onSaturationChanged}
            />
            <BrightnessPicker
                hue={h}
                saturation={s}
                brightness={l}
                valueChanged={onBrightnessChanged}
            />

            <GenControls />
        </Aux>
    )
}

export default ColorPicker