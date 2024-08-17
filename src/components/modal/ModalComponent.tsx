import React, { PropsWithChildren, useState } from "react";

const TopBar = ({
  show,
}: {
  show: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div style={{ textAlign: "right" }}>
      <button onClick={() => show((prev) => !prev)}>X</button>
    </div>
  );
};

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
    <div
      style={{
        position: "absolute",
        backgroundColor: "white",
        border: "1px solid red",
        padding: "10px",
        right: "50px",
        bottom: "50px",
        boxShadow: '5px 5px 15px 5px rgba(100,100,100,0.4)',
      }}
    >
      <div>{children}</div>
    </div>
  );
};

Modal.TopBar = TopBar;
Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;

export default function ModalComponentExample() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow((prev) => !prev)}>
        {show ? "Hide" : "Show"} Modal
      </button>
      <Modal show={show}>
        <Modal.TopBar show={setShow} />
        <Modal.Header />
        <Modal.Body />
        <Modal.Footer />
      </Modal>
    </>
  );
}
