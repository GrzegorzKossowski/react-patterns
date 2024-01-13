const isObject = data => typeof data === 'object' && data !== null;

const Recursive = data => {
    if (!isObject(data)) {
        return <li>{data}</li>;
    }
    const pairs = Object.entries(data);

    return (
        <>
            {pairs.map(([key, value]) => {
                <li>
                    {key}:
                    <ul>
                        <Recursive data={value} />;
                    </ul>
                </li>;
            })}
        </>
    );
};

export default Recursive;
