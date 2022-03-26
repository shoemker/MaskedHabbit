import React from 'react';


class MessageModal extends React.Component {
  constructor(props) {
    super(props);
    
  }
  render() {
    // debugger
    return (
      <div className="modal-background">
        <div className="maker-form-container">
          {this.props.message.body}
        </div>
      </div>
    )
  }
}

export default MessageModal;
