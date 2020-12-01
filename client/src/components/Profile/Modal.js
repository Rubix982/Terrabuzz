import React from 'react';
import ModalStyling from '../../style/Profile/Modal.module.css';

const Modal = ({ handleClose, show, children }) => {
    let showHideClassName;

    if (show) {
        showHideClassName = `${ModalStyling.modal} ${ModalStyling.dBlock}`
    } else {
        showHideClassName = `${ModalStyling.modal} ${ModalStyling.dNone}`
    }

    return (
        <div className={showHideClassName}>
            <div className={ModalStyling.modalContainer}>
                {children}
                <a href="/profile" className={ModalStyling.modalClose} onClick={handleClose}>
                    close
          </a>
            </div>
        </div>
    );
}

export default Modal