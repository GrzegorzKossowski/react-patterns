import React, { PropsWithChildren, useState } from 'react';
import { createPortal } from 'react-dom';

type Props = {
    show: boolean;
} & PropsWithChildren;

const PortalComponent = ({ children, show }: Props) => {
    if (!show) return;

    return createPortal(
        <div style={{ position: 'absolute', bottom: 0, left: 0 }}>{children}</div>,
        document.body
    );
};

export default function PortalComponentExample() {
    const [show, setShow] = useState(false);
    return (
        <div>
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
