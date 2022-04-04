import React from 'react';

class ComposeMessageModal extends React.Component {
  constructor(props){
    super(props);

    // for replies receiver_name and subject arrive as props
    let receiver_name = "";
    let subject = "";
    if (props.reply) {
      receiver_name = props.reply.receiver;
      subject = props.reply.subject;
    } 

    
    this.state = {
      subject,
      body:"",
      sender_id: this.props.currentUser.id,
      sender_name: this.props.currentUser.username,
      receiver_name
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  componentDidMount() {
    this.props.clearAllErrors();
  }


  update(field) {

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

  renderErrors(type) {
    for (let i = 0; i < this.props.errors.length; i++) {
      if (this.props.errors[i].includes(type)) return this.props.errors[i];
    }
  }

  
  render() {
    return (
      <div className="read-message-modal-background">

        <div className="compose-message-container">
          <form onSubmit={this.handleSubmit} className="login-form-box">

            <p className="message-closing-x" onClick={this.props.closeModal}>X</p>

            <div className="message-to-field">
              <p className="p-title">To: </p>
              <input type="text" 
                className="p-field"
                value={this.state.receiver_name}
                onChange={this.update('receiver_name')}
            />
            </div>
            <div className='message-error-display'>
              {this.renderErrors('User')}
            </div>

            <div className="message-field">
              <p className="p-title">From: </p>
              <p className="p-field"> {this.props.currentUser.username}</p>
            </div>
            <div className='message-error-display'>
              {this.renderErrors('not-used')}
            </div>
            <div className="message-field">
              <p className="p-title">Subject: </p>
              <input type="text" 
                className="p-field" 
                value={this.state.subject}
                onChange={this.update('subject')}
              />
            </div>
            <div className='message-error-display'>
              {this.renderErrors('Subject')}
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
            <div className='message-error-display'>
              {this.renderErrors('body')}
            </div>
            <input className="send-message-button" type="submit" value="Send" />

          </form>
        </div>
      </div>
    )
  }
 
}

export default ComposeMessageModal;