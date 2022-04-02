import React from 'react';

class MessageModal extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = (e) => {
    this.props.closeModal();
  }


  handleReply = (e) => {
    let data = {
      receiver: this.props.message.sender_name,
      subject: "re:" + this.props.message.subject
    }

    this.props.closeModal();
    this.props.openModal({ type: 'composeMessage', data });

  }


  replyButton = () => {
    if (this.props.currentUser.username !== this.props.message.sender_name) {
      return (
        <input
          className="send-message-button"
          type="submit"
          value="Reply"
          onClick={this.handleReply} />
      )
    } else
      return ( <div>
               </div>)
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
          <div className = 'read-message-body'>
            {this.props.message.body}
          </div>
          <div>
            {this.replyButton()}
          </div>
        </div>

      </div>
    )
  }
}

export default MessageModal;
