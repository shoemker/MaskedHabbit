import React from 'react';
import MessageSubjectContainer from './message_subject_container';


const MessageListWindow = ({messages, currentUser}) => {
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
        <MessageSubjectContainer message = {message} />
      ))}
    </ul>
  )
}


export default MessageListWindow;

