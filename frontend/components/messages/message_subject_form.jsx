import React from 'react';


class MessageSubjectForm extends React.Component {
  constructor(props) {
    super(props);

    this.openMessage = this.openMessage.bind(this);

  }


  openMessage(){
    // const message = Object.assign({}, this.props.message);
    // message.read = true;

    this.props.openModal({ type: 'message', data: this.props.message });
    // debugger
    // this.props.updateMessage(message).then(() => this.props.fetchMessages());
  }
  
  render() {
    let fw = "bold";
    if (this.props.message.read) fw = "normal";

    let date = this.props.message.created_at;
    date = date.split("");
    date = "" + date[5] + date[6] + date[7] + date[8] + date[9] + "-" +
      date[2]+ date[3];

    
    switch(this.props.type) {
      case "inbox" :
        return (
          <div className="message-list-item">
            <li onClick={() => this.openMessage()} >
                
      
              <div 
                key = {this.props.message.id}
                className = "message-subject" 
                style = {{fontWeight: fw}}
                >
                  {this.props.message.subject}
                  <br></br>
              </div>
              <p className="p1">From: {this.props.message.sender_name}</p>
              <p className="p2">{date}</p >
            </li>
          </div>
        )
      case "sent" :
        return(
          <div className="message-list-item">

            <li onClick={() => this.props.openModal({ type: 'message', data: this.props.message })}
                className= "message-list-item">
              <div
                key={this.props.message.id}
                className="message-subject"
                style={{ fontWeight: "normal" }}
              >
                {this.props.message.subject}
                <br></br>
              </div>
              <p className="p1">To: {this.props.message.receiver_name}</p>
              <p className="p2">{date}</p >
            </li>
          </div>

        )
    }
  }
}

export default MessageSubjectForm;

