import React, { useState, useEffect } from 'react';
import './color-picker.css';
import Aux from '../hoc/auxilary';
import ColorSlots from '../color-slots/color-slots';
import HuePicker from './hue-picker/hue-picker';
import SaturationPicker from './saturation-picker/saturation-picker';
import BrightnessPicker from './brightness-picker/brightness-picker';
import GenControls from '../gen-controls/gen-controls';
import GenColors from '../gen-colors/gen-colors';

import { genDarkScheme, genLightScheme } from '../../services/color-gen-service/color-gen-service';

const ColorPicker = props => {

    //Color related state hooks
    const [h, setH] = useState(0);
    const [s, setS] = useState(0);
    const [l, setL] = useState(0);
    const [priority, setPriority] = useState({ index: 1 });
    const [primary, setPrimary] = useState({ h: 0, s: 0, l: 0 });
    const [secondary, setSecondary] = useState({ h: 0, s: 0, l: 0 });
    const [tertiary, setTertiary] = useState({ h: 0, s: 0, l: 0 });

    // Gen control related state hooks
    const [steps, setSteps] = useState(4);
    const [algo, setAlgo] = useState("linear");

    // Schemes
    const [darkScheme, setDarkScheme] = useState({ dark: [] });
    const [lightScheme, setLightScheme] = useState({ light: [] });

    const [darkSchemeP, setDarkSchemeP] = useState({ dark: [] });
    const [lightSchemeP, setLightSchemeP] = useState({ light: [] });

    const [darkSchemeS, setDarkSchemeS] = useState({ dark: [] });
    const [lightSchemeS, setLightSchemeS] = useState({ light: [] });

    const [darkSchemeT, setDarkSchemeT] = useState({ dark: [] });
    const [lightSchemeT, setLightSchemeT] = useState({ light: [] });

    useEffect(() => {
        getPreviousValues();
        getCurrentScheme();
    }, [priority])

    useEffect(() => {

        switch (Number(priority.index)) {
            case 1:
                setPrimary(prev => ({ ...prev, h: h }));
                break;
            case 2:
                setSecondary(prev => ({ ...prev, h: h }));
                break;
            case 3:
                setTertiary(prev => ({ ...prev, h: h }));
                break;
            default:
                throw new Error("Invalid value. Unexpected error occured!");
        }

    }, [h])

    useEffect(() => {

        switch (Number(priority.index)) {
            case 1:
                setPrimary(prev => ({ ...prev, s: s }));
                break;
            case 2:
                setSecondary(prev => ({ ...prev, s: s }));
                break;
            case 3:
                setTertiary(prev => ({ ...prev, s: s }));
                break;
            default:
                throw new Error("Invalid value. Unexpected error occured!");
        }

    }, [s])

    useEffect(() => {

        switch (Number(priority.index)) {
            case 1:
                setPrimary(prev => ({ ...prev, l: l }));
                break;
            case 2:
                setSecondary(prev => ({ ...prev, l: l }));
                break;
            case 3:
                setTertiary(prev => ({ ...prev, l: l }));
                break;
            default:
                throw new Error("Invalid value. Unexpected error occured!");
        }

    }, [l])

    useEffect(() => {
        getCurrentScheme();
    },[darkSchemeP, lightSchemeP])

    useEffect(() => {
        getCurrentScheme();
    },[darkSchemeS, lightSchemeS])

    useEffect(() => {
        getCurrentScheme();
    },[darkSchemeT, lightSchemeT])


    const onHueChanged = event => {
        const val = event.target.value;
        setH((val < 0 || val > 360) ? 0 : val);
    }

    const onSaturationChanged = event => {
        const val = Number(event.target.value);
        setS((val < 0 || val > 100) ? 0 : val);
    }

    const onBrightnessChanged = event => {
        const val = Number(event.target.value);
        setL((val < 0 || val > 100) ? 50 : val);
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

    const getCurrentScheme = () => {
        switch (Number(priority.index)) {
            case 1:
                setDarkScheme(darkSchemeP);
                setLightScheme(lightSchemeP);
                break;
            case 2:
                setDarkScheme(darkSchemeS);
                setLightScheme(lightSchemeS);
                break;
            case 3:
                setDarkScheme(darkSchemeT);
                setLightScheme(lightSchemeT);
                break;
            default:
                throw new Error("Invalid value. Unexpected error occured!");
        }
    }

    const onStepsChanged = event => {
        const val = Number(event.target.value);
        setSteps((val > 3 && val < 17) ? val : 4);
    }

    const onAlgoChanged = event => {
        const val = event.target.value;

        switch (val) {
            case "linear":
                setAlgo(val);
                break;
            default:
                setAlgo("linear");
        }
    }

    const onGenerate = event => {

        switch (Number(priority.index)) {
            case 1:
                const darkSwatchesP = {
                    dark: genDarkScheme(primary, algo, steps)
                };
                const lightSwatchesP = {
                    light: genLightScheme(primary, algo, steps)
                };

                setDarkSchemeP(darkSwatchesP);
                setLightSchemeP(lightSwatchesP);
                break;
            case 2:
                const darkSwatchesS = {
                    dark: genDarkScheme(secondary, algo, steps)
                };
                const lightSwatchesS = {
                    light: genLightScheme(secondary, algo, steps)
                };

                setDarkSchemeS(darkSwatchesS);
                setLightSchemeS(lightSwatchesS);
                break;
            case 3:
                const darkSwatchesT = {
                    dark: genDarkScheme(tertiary, algo, steps)
                };
                const lightSwatchesT = {
                    light: genLightScheme(tertiary, algo, steps)
                };

                setDarkSchemeT(darkSwatchesT);
                setLightSchemeT(lightSwatchesT);
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

            <GenControls
                steps={steps}
                algo={algo}
                stepsChanged={onStepsChanged}
                algoChanged={onAlgoChanged}
                onGenerate={onGenerate}
            />

            <GenColors
                darkScheme={darkScheme}
                lightScheme={lightScheme}
            />
        </Aux>
    )
}

export default ColorPicker