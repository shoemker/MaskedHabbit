import React from 'react';

const MessageSubjectForm = (props) => {
  
  let fw = "bold";
  if (props.message.read) fw = "normal";

  let date = props.message.created_at;
  date = date.split("");
  date = "" + date[5] + date[6] + date[7] + date[8] + date[9] + "-" +
    date[2]+ date[3];


  switch(props.type) {
    case "inbox" :
      return (
        <div className="message-list-item">
          <li onClick={() => props.openModal({ type: 'message', data: props.message })} >
              
    
            <div 
              key = {props.message.id}
              className = "message-subject" 
              style = {{fontWeight: fw}}
              >
                {props.message.subject}
                <br></br>
            </div>
            <p className="p1">From: {props.message.sender_name}</p>
            <p className="p2">{date}</p >
          </li>
        </div>
      )
    case "sent" :
      return(
        <div className="message-list-item">

          <li onClick={() => props.openModal({ type: 'message', data: props.message })} 
              className= "message-list-item">
            <div
              key={props.message.id}
              className="message-subject"
              style={{ fontWeight: "normal" }}
            >
              {props.message.subject}
              <br></br>
            </div>
            <p className="p1">To: {props.message.receiver_name}</p>
            <p className="p2">{date}</p >
          </li>
        </div>

      )
  }

}

export default MessageSubjectForm;

