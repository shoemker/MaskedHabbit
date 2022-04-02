import React from 'react';
import MessageSubjectContainer from './message_subject_container';
import Tabs from './tabs';


const MessageListWindow = ({messages, currentUser, openModal}) => {
  
  let inMessages = [];
  let outMessages = [];

  // separates incoming and outgoing messages and reverses the order
  if (messages.length > 0) {
    messages.forEach((message) => {
      if (message.receiver_id === currentUser.id) inMessages.unshift(message);
      else outMessages.unshift(message);
    })
  }


  return (
    <div className="message-window">
      <h1 className="message-window-heading" >Messages</h1>
      <div className = "composeButton" 
        onClick={() => openModal({ type: 'composeMessage' })} >Compose
      </div>
      <Tabs>
        <div className = "tab" label="InBox">
          <ul className="email-list">
            {messages.length > 0 && inMessages.map((message) => (
              <MessageSubjectContainer message={message} type = "inbox" />
            ))}
          </ul>
        </div>
        <div className="tab" label="Sent">
          <ul className="email-list">
            {messages.length > 0 && outMessages.map((message) => (
              <MessageSubjectContainer message={message} type = "sent"/>
            ))}
          </ul>
        </div>
      </Tabs>
    </div>
  );


}
export default MessageListWindow;

