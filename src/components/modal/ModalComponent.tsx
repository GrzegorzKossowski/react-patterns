import React, { PropsWithChildren, useState } from 'react';

const Header = () => {
    return <h3> Header </h3>;
};
const Body = () => {
    return <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>;
};
const Footer = () => {
    return <small>Some footer</small>;
};

const Modal = ({
    children,
    show,
}: { show: boolean } & PropsWithChildren): React.ReactNode => {
    if (!show) return;
    return (
        <>
            <div>{children}</div>
        </>
    );
};

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;

export default function ModalComponentExample() {
    const [show, setShow] = useState(false);
    return (
        <>
            <button onClick={() => setShow(prev => !prev)}>Show Modal</button>
            <Modal show={show}>
                <Modal.Header />
                <Modal.Body />
                <Modal.Footer />
            </Modal>
        </>
    );
}
