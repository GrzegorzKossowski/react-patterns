import { PropsWithChildren } from 'react';

function withPrtialHOComponent(
    Component: React.ElementType,
    partialProps?: object
) {
    return (props: object) => {
        return <Component {...props} {...partialProps} />;
    };
}

function Button({
    children,
    color = 'white',
    backgroundColor = 'blue',
    size = undefined,
}: {
    text: string;
    color: string;
    backgroundColor: string;
    size: string | undefined;
} & PropsWithChildren) {
    return (
        <button
            style={{
                color,
                backgroundColor,
                fontSize: size ? '12px' : '16px',
            }}
        >
            {children}
        </button>
    );
}

const Primary = withPrtialHOComponent(Button);
const RedButton = withPrtialHOComponent(Primary, {
    color: 'white',
    backgroundColor: 'red',
});
const SmallRedButton = withPrtialHOComponent(RedButton, { size: 'small' });

const PartialComponent = () => {
    return (
        <>
            <Primary>Button</Primary>
            <RedButton>Red button</RedButton>
            <SmallRedButton>Small red</SmallRedButton>
        </>
    );
};

export default PartialComponent;
