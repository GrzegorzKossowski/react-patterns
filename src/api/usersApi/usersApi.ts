import { useApiMocks } from '../config';
import api from '../axios/axios';
import { usersMockApi } from './usersMockApi';
const URLS = {
    fetchUsers: 'users',
};

export const fetchUsers = () => {
    return useApiMocks
        ? usersMockApi.get()
        : api.get(URLS.fetchUsers, {
              baseURL: 'https://jsonplaceholder.typicode.com',
          });
};
