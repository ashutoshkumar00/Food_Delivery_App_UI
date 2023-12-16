import { createPortal } from "react-dom";
import styles from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlays = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <>
      {createPortal(<Backdrop onClose={props.onClose}/>, document.getElementById("overlay"))}
      {createPortal(<ModalOverlays>{props.children}</ModalOverlays>, document.getElementById("overlay"))}
    </>
  );
};

export default Modal;
