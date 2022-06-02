import './App.css';
import {useState} from "react";
import StepOne from "./stepOne";
import StepTwo from "./stepTwo";

function App() {
    const [step, setStep] = useState(0)
    const [rate, setRate] = useState(0)

    const nextStep = (step, rate) => {
      setStep(step)
        setRate(rate)
    }
    return (
        <div className={'container rateFrame'}>
            {step === 0 ? <StepOne nextStep={nextStep}/> : <StepTwo rate={rate}/>}
        </div>
    );
}

export default App;
