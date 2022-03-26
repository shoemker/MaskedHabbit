import React from 'react';

const MessageSubjectForm = (props) => {
  
  return (

    <li onClick={() => props.openModal({ type: 'message', data: props.message})}>
        {props.message.subject}</li>
  )

}

export default MessageSubjectForm;
