export default async function withAsync(fn: Function) {
    try {
        if (typeof fn !== 'function') {
            throw new Error('not a function');
        }
        const { data } = await fn();
        return { data, error: null };
    } catch (error: any) {
        console.log(error.message);
        return {
            error,
            data: null,
        };
    }
}
