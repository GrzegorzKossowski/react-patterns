import { requestMockApi } from '../requestMockApi';
import { usersMockData } from './usersMockData';

export const usersMockApi = {
    get: () => requestMockApi(usersMockData),
    delete: () => requestMockApi(usersMockData),
    post: () => requestMockApi(usersMockData),
    put: () => requestMockApi(usersMockData),
    patch: () => requestMockApi(usersMockData),
};
