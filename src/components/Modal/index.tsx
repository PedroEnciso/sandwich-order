import { createPortal } from "react-dom";

import classes from "./Modal.module.css";

type ModalProps = {
  children: React.ReactNode;
};

function Modal({ children }: ModalProps) {
  return (
    <>
      {createPortal(
        <>
          <div className={classes.modalBackground}></div>
          <div className={classes.modal}>{children}</div>
        </>,
        document.body
      )}
    </>
  );
}

export default Modal;
