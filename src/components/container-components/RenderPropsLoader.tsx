import { useEffect, useState } from 'react';
import type { IAuthor } from '../../types';

const AuthorInfo = ({ author }: { author: IAuthor }) => {
    return <>Author: {author?.name}</>;
};

const RenderPropsLoader = <T,>({
    getData,
    render,
}: {
    getData: () => Promise<object>;
    render: (resource: T) => JSX.Element;
}) => {
    const [resource, setResource] = useState<T>();

    // load data
    useEffect(() => {
        (async () => {
            const data = (await getData()) as T;
            if (data) setResource(data);
        })(); // self invoked function
    }, [getData]);

    return render(resource!);
};

export default function RenderPropsLoaderExample() {
    return (
        <RenderPropsLoader
            getData={async () => {
                const response = await fetch(`http://localhost:4000/users/1`);
                if (response.ok) {
                    return response.json();
                } else {
                    return null;
                }
            }}
            render={(resource: IAuthor) => <AuthorInfo author={resource} />}
        />
    );
}
