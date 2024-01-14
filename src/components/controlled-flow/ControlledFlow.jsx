import React, { useState } from 'react';

const StepOne = ({ goNext }) => {
    const [name, setName] = useState('John Doe');
    return (
        <>
            <h3>Step one - name</h3>
            <input
                type='text'
                value={name}
                onChange={e => setName(e.target.value)}
                isValidElement
            />
            <button onClick={() => goNext({ name })}>Next 2</button>
        </>
    );
};
const StepTwo = ({ goNext }) => {
    const [age, setAge] = useState(35);
    return (
        <>
            <h3>Step two - age</h3>
            <input
                type='number'
                value={age}
                onChange={e => setAge(e.target.value)}
                isValidElement
            />
            <button onClick={() => goNext({ age })}>Next 3</button>
        </>
    );
};
const StepThree = ({ goNext, data }) => {
    return (
        <>
            Step three
            <div>{data.name}</div>
            <div>{data.age}</div>
            <button onClick={() => goNext({ name: 'step Two' })}>End</button>
        </>
    );
};

const ControlledFlow = ({ children, currentStepIndex, onNext }) => {
    const goNext = dataFromStep => {
        onNext(dataFromStep);
    };
    const currentChild = React.Children.toArray(children)[currentStepIndex];

    if (React.isValidElement(currentChild)) {
        return React.cloneElement(currentChild, { goNext });
    }

    return <div>{children}</div>;
};

export default function ControlledFlowExample() {
    const [data, setData] = useState();
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const goNext = dataFromStep => {
        setData({
            ...data,
            ...dataFromStep,
        });
        setCurrentStepIndex(prev => prev + 1);
    };
    return (
        <>
            {currentStepIndex > 2 ? (
                <div>
                    <div>{data.name}</div>
                    <div>{data.age}</div>
                    <button onClick={() => setCurrentStepIndex(0)}>
                        Again
                    </button>
                </div>
            ) : (
                <ControlledFlow
                    currentStepIndex={currentStepIndex}
                    onNext={goNext}
                >
                    <StepOne />
                    <StepTwo />
                    <StepThree data={data} />
                </ControlledFlow>
            )}
        </>
    );
}
