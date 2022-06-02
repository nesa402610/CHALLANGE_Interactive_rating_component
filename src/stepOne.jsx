import React, {useState} from 'react';
import star from './images/icon-star.svg';


const StepOne = ({nextStep}) => {
    const ratesArr = [1, 2, 3, 4, 5];
    const [rate, setRate] = useState(0);

    const changeStep = (e) => {
        e.preventDefault();
        if (rate !== 0) {
            nextStep(1, rate);

        }
    };
    const rateHandler = (e) => {
        setRate(e.target.dataset.value);
    };
    return (
        <>
            <img alt={''} src={star} className={'rateStar'}/>
            <div className={'rateText'}>
                <h1>How did we do?</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa dolorum explicabo
                </p>
            </div>
            <div className={'rateLine'}>
                {ratesArr.map(rateEl =>
                    <div key={rateEl}
                         className={'rateItem' + (rate == rateEl ? ' Active' : '')}
                         data-value={rateEl}
                         onClick={e => rateHandler(e)}>
                        {rateEl}
                    </div>
                )}
            </div>
            <button className={'btn'} onClick={e => changeStep(e)}>
                Submit
            </button>
        </>
    );
};

export default StepOne;