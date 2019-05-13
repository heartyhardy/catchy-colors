
const HUE_MAX = 360;
const LIGHT_MAX = 100;

const HUE_SHIFT_RATIO = 5;
const SAT_SHIFT_RATIO = .85;
const LIGHT_SHIFT_RATIO = 1.35;

const SAT_SHIFT_RATIO_ALT = 1;
const LIGHT_SHIFT_RATIO_ALT = 1.35;

const SHIFT = 2;

const genDarkScheme = (color, algo = "linear", steps = 4, cutoff = 5) => {
    switch (algo) {
        case "linear":
            const swatches = genLinearDarkScheme(color, steps, cutoff);
            return [...swatches];
        default:
            return [];
    }
}

const genLightScheme = (color, algo = "linear", steps = 4, cutoff = 5) => {
    switch (algo) {
        case "linear":
            const swatches = genLinearLightScheme(color, steps, cutoff);
            return [...swatches];
        default:
            return [];
    }
}

const genLinearLightScheme = (color, steps, cutoff) => {
    const hueReigonMax = Number(color.h);
    const satRegionMax = Number(color.s) - cutoff;
    const lightRegionMax = Number(color.l) - cutoff;
    const stepNudge= (LIGHT_MAX / steps) / steps;

    const hue_nudge = SHIFT * HUE_SHIFT_RATIO;
    const sat_nudge = SHIFT * SAT_SHIFT_RATIO_ALT + stepNudge;
    const light_nudge = SHIFT * LIGHT_SHIFT_RATIO_ALT + stepNudge;

    const lightSwatches = [];

    for (let i = 1; i <= steps; i++) {
        let h = ((hueReigonMax + hue_nudge * i) > HUE_MAX) ?
            (hueReigonMax + hue_nudge * i)-HUE_MAX :
            (hueReigonMax + hue_nudge * i);

        let s = ((satRegionMax - sat_nudge * i) < cutoff) ?
            cutoff :
            satRegionMax - sat_nudge * i;

        let l = ((lightRegionMax + light_nudge * i) > (LIGHT_MAX - cutoff)) ?
            (LIGHT_MAX - cutoff) :
            lightRegionMax + light_nudge * i;

        let swatch = {
            h: h,
            s: s,
            l: l
        }

        lightSwatches.push(swatch);
    }

    return lightSwatches;
}

const genLinearDarkScheme = (color, steps, cutoff) => {
    const hueReigonMax = Number(color.h);
    const satRegionMax = Number(color.s) - cutoff;
    const lightRegionMax = Number(color.l) - cutoff;
    const stepNudge= (LIGHT_MAX / steps) / steps;

    const hue_nudge = SHIFT * HUE_SHIFT_RATIO;
    const sat_nudge = SHIFT * SAT_SHIFT_RATIO + stepNudge;
    const light_nudge = SHIFT * LIGHT_SHIFT_RATIO + stepNudge;

    const darkSwatches = [];

    for (let i = 1; i <= steps; i++) {
        let h = ((hueReigonMax - hue_nudge * i) < 0) ?
            (HUE_MAX - hueReigonMax - hue_nudge * i) :
            (hueReigonMax - hue_nudge * i);

        let s = ((satRegionMax - sat_nudge * i) < cutoff) ?
            cutoff :
            satRegionMax - sat_nudge * i;

        let l = ((lightRegionMax - light_nudge * i) < cutoff) ?
            cutoff :
            lightRegionMax - light_nudge * i;

        let swatch = {
            h: h,
            s: s,
            l: l
        }

        darkSwatches.push(swatch);
    }

    return darkSwatches;
}

export { genDarkScheme, genLightScheme }