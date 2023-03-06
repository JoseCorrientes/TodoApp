import React from "react";
import ReactDOM from "react-dom";
import ModalCSS from "./Modal.module.css";

function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className={ModalCSS.ModalContainer}>{children}</div>,
    document.getElementById("modal")
  );
}

export { Modal };
