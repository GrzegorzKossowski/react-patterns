import React from 'react';

// Definicja generycznego typu dla węzła drzewa
interface TreeNode<T> {
    value: T;
    children?: TreeNode<T>[];
}
// example data
const exampleData: TreeNode<string> = {
    value: 'root',
    children: [
        {
            value: 'child1',
            children: [{ value: 'grandchild1' }, { value: 'grandchild2' }],
        },
        {
            value: 'child2',
            children: [{ value: 'grandchild3' }, { value: 'grandchild4' }],
        },
    ],
};

// Generyczny interfejs dla komponentu rekursywnego
interface RecursiveComponentProps<T> {
    node: TreeNode<T>;
    render: (node: TreeNode<T>) => React.ReactNode;
}
// Generyczny komponent rekursywny
function RecursiveComponent<T>({
    node,
    render,
}: RecursiveComponentProps<T>): JSX.Element {
    return (
        <>
            {render(node)}
            {node.children && (
                <ul>
                    {node.children.map((child, index) => (
                        <li key={index}>
                            <RecursiveComponent node={child} render={render} />
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}
// Przyklad użycia
export default function RecursiveExample() {
    return (
        <RecursiveComponent
            node={exampleData}
            render={node => <div>{node.value}</div>}
        />
    );
}
