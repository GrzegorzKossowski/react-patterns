export default async function withAsync(fn) {
    try {
        if (typeof fn !== 'function') {
            throw new Error('not a function');
        }
        const { data } = await fn();
        return { data, error: null };
    } catch (error) {
        console.log(error.message);
        return {
            error,
            data: null,
        };
    }
}
