import React, { useCallback, useEffect, useState } from 'react';
import mitt from 'mitt';

const emitter = mitt();

function Buttons() {
    const increment = useCallback(() => {
        emitter.emit('inc');
    }, []);
    const decrement = useCallback(() => {
        emitter.emit('dec');
    }, []);

    return (
        <>
            <button onClick={increment}>➕</button>
            <button onClick={decrement}>➖</button>
        </>
    );
}

function Counter() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        const onIncrement = () => setCount(prev => prev + 1);
        const onDecrement = () => setCount(prev => prev - 1);
        emitter.on('inc', onIncrement);
        emitter.on('dec', onDecrement);

        return () => {
            emitter.off('inc', onIncrement);
            emitter.off('dec', onDecrement);
        };
    }, []);

    return <p>#: {count}</p>;
}

const ObserverComponent = () => {
    return (
        <>
            <h3>Observer Component</h3>
            <div>
                <Counter />
                <Buttons />
            </div>
        </>
    );
};

export default ObserverComponent;
