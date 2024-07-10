import React from 'react';
import { ProgressBar, Step } from "react-step-progress-bar";
import './MultiStepProgressBar.css'

function MultiStepProgressBar({ page, onPageNumberClick }) {
    let stepPercentage = 0;

    if (page === "pageOne") {
        stepPercentage = 0;
    } else if (page === "pageTwo") {
        stepPercentage = 50;
    } else if (page === "pageThree") {
        stepPercentage = 100;
    } else {
        stepPercentage = 0;
    }

    return (
        <ProgressBar percent={stepPercentage}>
            <Step>
                {({ accomplished, index }) => (
                    <div
                        className={`indexedStep ${accomplished ? "accomplished" : null}`}
                        onClick={() => onPageNumberClick("1")}
                    >
                        {index + 1}
                    </div>
                )}
            </Step>
            <Step>
                {({ accomplished, index }) => (
                    <div
                        className={`indexedStep ${accomplished ? "accomplished" : null}`}
                        onClick={() => onPageNumberClick("2")}
                    >
                        {index + 1}
                    </div>
                )}
            </Step>
            <Step>
                {({ accomplished, index }) => (
                    <div
                        className={`indexedStep ${accomplished ? "accomplished" : null}`}
                        onClick={() => onPageNumberClick("3")}
                    >
                        {index + 1}
                    </div>
                )}
            </Step>
        </ProgressBar>
    );
}

export default MultiStepProgressBar;