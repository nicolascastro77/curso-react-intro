import React from "react";
import { createPortal } from "react-dom"
import { TodoFilter } from "../TodoFilter";
import img from './imgtodo.png'
import './Modal.css';

function Modal({
    openModal,
    setOpenModal,
    addTodo
}) {
    return createPortal (
        <div className="Modal">
            <div class="modal-container">
                <div class="modal-content">
                    <TodoFilter setOpenModal = {setOpenModal}
                                addTodo = {addTodo} />
                    <img src={img} /> 
                </div>
            </div>
        </div>,
        document.getElementById('modal')
    )
}

export { Modal } ;