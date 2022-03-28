import merge from 'lodash/merge';

import {
  RECEIVE_MESSAGES,
  RECEIVE_MESSAGE,
  REMOVE_MESSAGE
} from '../actions/message_actions';

const messagesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;

  switch (action.type) {
    case RECEIVE_MESSAGES:
      return action.messages;
    case RECEIVE_MESSAGE:
      newState = merge({}, oldState, { [action.message.id]: action.message });
      return newState;
    case REMOVE_MESSAGE:
      newState = merge({}, oldState);
      delete newState[action.messageId];
      return newState;
      
    default:
      return oldState;
  }
};

export default messagesReducer;

