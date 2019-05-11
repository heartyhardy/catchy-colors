import React from 'react';
import './gen-controls.css';
import Aux from '../hoc/auxilary';

const GenControls = props => (
    <Aux
        className="gen-controls-main"
    >
        <span
            className="gen-steps"
        >
            <p
                className="gen-steps-label"
            >
                steps
            </p>

            <input
                className="gen-steps-input"
                type="number"
                min="4"
                max="10"
                value={props.steps}
                onChange={props.stepsChanged}
            />

        </span>

        <span
            className="gen-algo"
        >
            <p
                className="gen-algo-label"
            >
                algorithm
            </p>

            <select
                className="gen-algo-select"
                value={props.algo}
                onChange={props.algoChanged}
            >
                <option
                    value="linear"
                >
                    linear
                </option>
            </select>

        </span>

        <span
            className="gen-execute"
        >
            <button
                className="gen-button"
                onClick={props.onGenerate}
            >
                Go!
            </button>
        </span>
    </Aux>
)

export default GenControls