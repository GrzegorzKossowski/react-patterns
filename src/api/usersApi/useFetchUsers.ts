import { useEffect, useState } from 'react';
import { fetchUsers } from './usersApi';
import withAsync from '../../helpers/withAsync';
import { TApiStatus } from '../config';

export const useFetchUsers = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const [fetchUsersStatus, setFetchUserStatus] =
        useState<TApiStatus>('IDDLE');

    useEffect(() => {
        (async () => {
            setFetchUserStatus('PENDING');
            const { data, error } = await withAsync(fetchUsers);
            if (error) {
                console.log(error.message);
                setFetchUserStatus('ERROR');
            } else if (data) {
                setUsers(data);
                setFetchUserStatus('SUCCESS');
            }
        })();
    }, []);

    return { users, fetchUsersStatus };
};
