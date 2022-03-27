import React from 'react';

class ComposeMessageModal extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      subject:"",
      body:"",
      sender_id: this.props.currentUser.id,
      sender_name: this.props.currentUser.username,
      receiver_name: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);

  }

  update(field) {
    // console.log(this.state);

    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }


  handleSubmit(e) {
    e.preventDefault();
    const message = Object.assign({}, this.state);
    this.props.createMessage(message).then(() => {
      this.props.closeModal();
    });
  
  }

  
  render() {
    return (
      <div className="read-message-modal-background">

        <div className="read-message-container">
          <form onSubmit={this.handleSubmit} className="login-form-box">

            <p className="message-closing-x" onClick={this.props.closeModal}>X</p>

            <div className="message-field">
              <p className="p-title">To: </p>
              <input type="text" 
                className="p-field"
                value={this.state.receiver_name}
                onChange={this.update('receiver_name')}
            />
            </div>
            <div className="message-field">
              <p className="p-title">From: </p>
              <p className="p-field"> {this.props.currentUser.username}</p>
            </div>
            <div className="message-field">
              <p className="p-title">Subject: </p>
              <input type="text" 
                className="p-field" 
                value={this.state.subject}
                onChange={this.update('subject')}
              />
            </div>
            <hr></hr><br></br>

            <div>
              <textarea rows="10" cols="61" 
                className= "t-field"
                value={this.state.body}
                onChange={this.update('body')}
              >
              </textarea>
            </div>
            <input className="send-message-button" type="submit" value="Send" />

          </form>
        </div>
      </div>
    )
  }
 
}

export default ComposeMessageModal;