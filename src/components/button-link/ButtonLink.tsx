import { PropsWithChildren } from 'react';

const styles = {
    buttonGroup: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
    },
    btn: {
        backgroundColor: 'blue',
        border: 'none',
        color: 'white',
        padding: '10px 30px',
        textAlign: 'center',
        textDecoration: 'none',
        fontSize: '16px',
        cursor:'pointer'
    },
};

type Props = {
    onClick: () => void;
    restProps?: object;
};

type ButtonProps = {
    as: 'button';
};

type LinkProps = {
    as: 'link';
    href?: string;
};

const ButtonLink = ({
    children,
    as,
    ...restProps
}: (ButtonProps | LinkProps) & Props & PropsWithChildren): JSX.Element => {
    return as === 'button' ? (
        <button style={styles.btn} {...restProps}>
            {children}
        </button>
    ) : (
        <a style={styles.btn} {...restProps}>{children}</a>
    );
};

export default function ButtonLinkExample() {
    return (
        <div style={styles.buttonGroup}>
            <div>
                <ButtonLink as='button' onClick={() => console.log(`button`)}>
                    Button
                </ButtonLink>
            </div>
            <div>
                <ButtonLink
                    as='link'
                    href='#'
                    onClick={() => console.log(`link`)}
                >
                    Link
                </ButtonLink>
            </div>
        </div>
    );
}
