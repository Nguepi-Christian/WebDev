import React, { useState } from 'react'
import './Modal.css'

/* Modal */
export default function Modal({msg}) {
    const [isOpen, setIsOpen] = useState(true);

  
    const closeModal = () => {
        setIsOpen(false);
    };


  return (
   
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h3>Ajouter un Cours</h3>
            <div className="body">
                <p>{msg}</p>
                <div className="modalfooter" >
                    <button className='action update' onClick={closeModal}>Okay</button>
                </div>
           </div>
          </div>
        </div>
    
  )
}
