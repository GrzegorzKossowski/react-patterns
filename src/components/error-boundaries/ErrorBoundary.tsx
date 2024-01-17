import { ErrorBoundary } from 'react-error-boundary';

const ChildErrorComponent = () => {
    throw new Error(`⛔ Sth. went wrong`);
    return <>Test</>;
};

export default function ErrorBoundaryExample() {
    return (
        <ErrorBoundary fallback={<div>⚠️ Error has ocurred ⚠️</div>}>
            <ChildErrorComponent />
        </ErrorBoundary>
    );
}
