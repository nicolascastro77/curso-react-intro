import React from "react";
import { createPortal } from "react-dom"
import './Modal.css';

function Modal({
    openModal,
    setOpenModal}) {
    return createPortal (
        <div className="Modal">
            <div class="modal-container">
                <div class="modal-content">
                    <p>Este es un modal sencillo.</p>
                </div>
            </div>
        </div>,
        document.getElementById('modal')
    )

}

export { Modal } ;