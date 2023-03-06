import React from "react";
import ReactDOM from "react-dom";
import ModalErrorCSS from "./ModalError.module.css";

function ModalError ({children}) {
  
 return ReactDOM.createPortal(
    
    <div className={ModalErrorCSS.ModalErrorContainer}>
        {children}
    </div>,   
    document.getElementById('modalerror')
)
}

export { ModalError};