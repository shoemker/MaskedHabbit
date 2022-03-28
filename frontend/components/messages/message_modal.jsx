import React from 'react';


class MessageModal extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = (e) => {
    this.props.closeModal();
  }

  render() {
    return (
      <div className="read-message-modal-background">

        <div className="read-message-container">
          <p className= "message-closing-x" onClick={this.handleClick}>X</p>

          <div className = "message-field">
            <p className="p-title">To: </p>
            <p className= "p-field"> {this.props.message.receiver_name}</p>
          </div>
          <div className="message-field">
            <p className="p-title">From: </p>
            <p className="p-field"> {this.props.message.sender_name}</p>         
          </div>
          <div className="message-field">
            <p className="p-title">Subject: </p>
            <p className="p-field"> {this.props.message.subject}</p>        
          </div>
          <hr></hr><br></br>
          <div>
            {this.props.message.body}
          </div>
        </div>
      </div>
    )
  }
}

export default MessageModal;
