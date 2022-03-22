import React from 'react';
import MessageSubject from './message_subject';


const EmailWindow = ({messages, currentUser}) => {
  let inMessages = [];
  let outMessages = [];
  

  if (messages.length > 0) {
    messages.forEach((message) => {
      if (message.receiver_id === currentUser.id) inMessages.push(message);
      else outMessages.push(message);
    })
  }

  return(
    <ul className="email-list">
      {messages.length > 0 && inMessages.map((message) => (
          <MessageSubject subject = {message.subject} />
      ))}
    </ul>
  )
}


export default EmailWindow;

