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
    this.closingX = this.closingX.bind(this);
  }
  
  closingX() {
    this.props.clearMessageErrors();
    this.props.closeModal();
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

  renderErrors(type) {
    // if (this.props.errors.length > 0) debugger;
    for (let i = 0; i < this.props.errors.length; i++) {
      if (this.props.errors[i].includes(type)) return this.props.errors[i];
    }
  }

  
  render() {
    return (
      <div className="read-message-modal-background">

        <div className="read-message-container">
          <form onSubmit={this.handleSubmit} className="login-form-box">

            <p className="message-closing-x" onClick={this.closingX}>X</p>

            <div className="message-field">
              <p className="p-title">To: </p>
              <input type="text" 
                className="p-field"
                value={this.state.receiver_name}
                onChange={this.update('receiver_name')}
            />
            </div>
            <div className='error-display'>
              {this.renderErrors('User')}
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
            <div className='error-display'>
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
            <div className='error-display'>
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