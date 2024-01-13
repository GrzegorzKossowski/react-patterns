import { PropsWithChildren, createContext, useContext } from 'react';

// create some contex to pass down value
const Context = createContext<string | null>(null);

// header sub-component with context value
const Header = ({ children }: PropsWithChildren) => {
    const logo = useContext(Context);
    return (
        <>
            <h3>{logo} {children}</h3>
        </>
    );
};
// body sub-component
const Body = ({ children }: PropsWithChildren) => {
    return <p>{children}</p>;
};
// footer sub-component
const Footer = ({ children }: PropsWithChildren) => {
    return <small>{children}</small>;
};

// main card component
const Card = <T extends string | null>({
    children,
    contextValue,
}: { contextValue?: T } & PropsWithChildren) => {
    return (
        <Context.Provider value={contextValue || null}>
            <div style={{ border: '1px solid black' }}>{children}</div>
        </Context.Provider>
    );
};

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;

// example
export default function CompoundComponent() {
    return (
        <Card contextValue='🐼'>
            <Card.Header>Some Header</Card.Header>
            <Card.Body>Lorem ipsum body</Card.Body>
            <Card.Footer>Some footer</Card.Footer>
        </Card>
    );
}
