import React, { PropsWithChildren, forwardRef, useRef } from 'react';

const InputElement = forwardRef<HTMLInputElement, PropsWithChildren>(
    (props, ref) => {
        return (
            <input
                ref={ref}
                {...props}
                type='text'
                id='input'
                defaultValue={'John Doe'}
            />
        );
    }
);

const ForwardRefComponent = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputRef.current) throw Error('inputRef is not assigned');
        console.log(inputRef.current.value);
    };
    return (
        <form onSubmit={handleSubmit}>
            <InputElement ref={inputRef} />
            <button type='submit' id='button'>
                Submit
            </button>
        </form>
    );
};

export default function ForwardRefComponentExample() {
    return <ForwardRefComponent />;
}
