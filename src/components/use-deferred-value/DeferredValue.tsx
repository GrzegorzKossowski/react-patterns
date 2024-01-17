import React, { memo, useDeferredValue, useState } from 'react';

const HeavyComponent = memo(({ data }: { data: string }) => {
    const init = performance.now();
    while (init > performance.now() - 100) {
        //slow down rendering
    }
    return (
        <>
            <h3>Heavy Component</h3>
            <div>{data && data}</div>
        </>
    );
});

const DeferredValue = () => {
    const [data, setData] = useState<string>('');
    const deferredData = useDeferredValue(data);
    return (
        <div>
            <input
                type='text'
                value={data}
                onChange={e => setData(e.target.value)}
            />
            <HeavyComponent data={deferredData} />
        </div>
    );
};

export default function DeferredValueExample() {
    return <DeferredValue />;
}
