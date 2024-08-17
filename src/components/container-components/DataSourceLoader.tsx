import React, { useEffect, useState } from 'react';
import { IAuthor } from '../../types';

const AuthorInfo = ({ author }: { author?: IAuthor }) => {
    // to avoid empty props
    const { name } = author || {};
    return author ? <>Name: {name ?? 'no name'}</> : <>Loading...</>;
};

interface DataSourceLoaderProps {
    getData: () => Promise<object>;
    resourceName: string;
    children?: React.ReactNode;
}

const DataSourceLoader = ({
    getData,
    resourceName,
    children,
}: DataSourceLoaderProps) => {
    const [resource, setResource] = useState<object>();

    // load data
    useEffect(() => {
        (async () => {
            const data = await getData();
            console.log(data);
            
            if (data) setResource(data);
        })(); // self invoked function
    }, [getData]);

    return (
        <>
            {React.Children.map(children, child => {
                if (React.isValidElement(child)) {
                    // add new conditional property to child
                    return React.cloneElement(child, {
                        // pass prop with external key (resourceName)
                        [resourceName]: resource,
                    });
                }
                return child;
            })}
        </>
    );
};

export default function DataSourceLoaderExample() {
    return (
        <>
            <DataSourceLoader
                getData={async () => {
                    // fetch data here, return Promise
                    const response = await fetch('http://localhost:4000/currentUser');
                    const data = await response.json();
                    return data;
                }}
                resourceName='author'
            >
                <AuthorInfo />
            </DataSourceLoader>
        </>
    );
}
