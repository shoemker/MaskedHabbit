import React from 'react';

const ComposeMessageModal = (props) => {
  

  return (
    <div className="read-message-modal-background">

      <div className="read-message-container">
        <p className="message-closing-x" onClick={props.closeModal}>X</p>

        <div className="message-field">
          <p className="p-title">To: </p>
          <p className="p-field"> </p>
        </div>
        <div className="message-field">
          <p className="p-title">From: </p>
          <p className="p-field"> {props.currentUser.username}</p>
        </div>
        <div className="message-field">
          <p className="p-title">Subject: </p>
          <p className="p-field"> </p>
        </div>
        <hr></hr><br></br>

        <div>
         
        </div>
      </div>
    </div>
  )
 
}

export default ComposeMessageModal;