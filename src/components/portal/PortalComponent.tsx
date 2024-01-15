import React, { PropsWithChildren, useState } from 'react';
import { createPortal } from 'react-dom';

type Props = {
    show: boolean;
} & PropsWithChildren;

const PortalComponent = ({ children, show }: Props) => {
    if (!show) return;
    const portalElement = document.querySelector('#portalElement')!;
    const handleClick = (
        e: React.MouseEvent<HTMLDivElement>
    ) => {
        e.stopPropagation();
        console.log(`Stop propagation`);
    };

    return createPortal(
        <div
            onClick={handleClick}
            style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                border: '1px solid red',
                padding: '10px'
            }}
        >
            {children}
        </div>,
        portalElement
    );
};

export default function PortalComponentExample() {
    const [show, setShow] = useState(false);
    return (
        <div
            onClick={() => console.log(`parent div clicked`)}
            style={{ width: '100%', height: '100vh', backgroundColor: '#ddd' }}
        >
            <h3>Portal</h3>
            <button onClick={() => setShow(prev => !prev)}>
                {show ? 'Hide' : 'Show'}
            </button>
            <PortalComponent show={show}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Doloremque quo velit nulla explicabo dignissimos est, quod autem
                aliquam sit ipsam reiciendis fugit fugiat perspiciatis quos
                harum qui corrupti sequi dolor!
            </PortalComponent>
        </div>
    );
}
