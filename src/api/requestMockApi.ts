export const requestMockApi = async <T>(data: T, time = 1000) => {
    await new Promise(res => setTimeout(res, time));
    return data;
};
