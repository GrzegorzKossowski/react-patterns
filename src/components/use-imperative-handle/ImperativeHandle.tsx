import React, { forwardRef, useImperativeHandle, useRef } from 'react';

const InputComponent = forwardRef((props, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);
    useImperativeHandle(
        ref,
        () => {
            return {
                focus() {
                    inputRef?.current?.focus();
                },
            };
        },
        []
    );
    return <input type='text' {...props} ref={inputRef} />;
});

const TwoInputComponents = forwardRef((props, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const inputRef2 = useRef<HTMLInputElement>(null);
    useImperativeHandle(
        ref,
        () => {
            return {
                input1: inputRef?.current,
                input2: inputRef2?.current,
            };
        },
        []
    );
    return (
        <>
            <input type='text' {...props} ref={inputRef} />
            <br />
            <input type='text' {...props} ref={inputRef2} />
        </>
    );
});

const ImperativeHandle = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const inputRef2 = useRef<{
        input1: HTMLInputElement;
        input2: HTMLInputElement;
    } | null>(null);
    const handleFocus = () => {
        inputRef.current && inputRef?.current?.focus();
    };
    const handleTwoValues = () => {
        if (inputRef2.current) {
            inputRef2.current.input1.value = 'hola, hola';
            inputRef2.current.input2.value = 'panie Wilku';
        }
    };
    return (
        <>
            <div>
                <h3>ImperativeHandle</h3>
                <InputComponent ref={inputRef} />
                <button onClick={handleFocus}>Focus</button>
            </div>
            <div>
                <h3>Two inputs</h3>
                <TwoInputComponents ref={inputRef2} />
                <button onClick={handleTwoValues}>Focus</button>
            </div>
        </>
    );
};

export default function ImperativeHandleExample() {
    return <ImperativeHandle />;
}
