// dokonczyc to

interface ApiProps {
    get: <T>(url: string, config?: object) => Promise<T>;
    delete: <T>(url: string, config?: object) => Promise<T>;
    post: <T>(url: string, body: object, config?: object) => Promise<T>;
    put: <T>(url: string, body: object, config?: object) => Promise<T>;
    patch: <T>(url: string, body: object, config?: object) => Promise<T>;
}

export default {
    get: (url, config = { method: 'GET' }) => fetch(url, { ...config }),
    post: (url, config = { method: 'POST' }) => fetch(url, { ...config }),
    put: (url, config = { method: 'PUT' }) => fetch(url, { ...config }),
    patch: (url, config = { method: 'PATCH' }) => fetch(url, { ...config }),
    delete: (url, config = { method: 'DELETE' }) => fetch(url, { ...config }),
} as ApiProps;
