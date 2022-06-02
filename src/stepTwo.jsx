import React from 'react';
import logo from './images/illustration-thank-you.svg'

const StepTwo = ({rate}) => {
    return (
        <>
            <img src={logo} className={'logo'}/>
            <div className={'rateSelected'}>
                You selected {rate} out of 5
            </div>
            <div className={'rateEndText'}>
                <h1>Thank you!</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
        </>
    );
};

export default StepTwo;