import React, { useEffect, useState } from 'react';
import { JPUser } from '../../types';

const useLoadData = (id: number) => {
    const [user, setUser] = useState<JPUser>();
    // load user by id
    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(
                    `https://jsonplaceholder.typicode.com/users/${id}`
                );
                if (response.ok) {
                    const data = await response.json();
                    setUser(data);
                }
            } catch (error) {
                console.log(error?.message);
            }
        })();
    }, [id]);
    return { user, setUser };
};

const CustomHook = ({ id }: { id: number }) => {
    const { user } = useLoadData(id);
    return user ? (
        <>
            <h3>{user.name}</h3>
            <div>
                {user.company.name} - {user.company.catchPhrase}
            </div>
        </>
    ) : (
        <>Loading...</>
    );
};

export default function CustomHookExample() {
    return <CustomHook id={1} />;
}
