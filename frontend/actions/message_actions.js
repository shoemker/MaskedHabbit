import * as MessageApiUtil from '../util/message_api_util.js';

export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const REMOVE_MESSAGE = 'REMOVE_MESSAGE';

const receiveMessages = (messages) => ({
  type: RECEIVE_MESSAGES,
  messages: messages
});

const receiveMessage = (message) => ({
  type: RECEIVE_MESSAGE,
  message: message
});

const removeMessage = (message) => ({
  type: REMOVE_MESSAGE,
  messageId: message.id
});

export const fetchMessages = () => (dispatch) => (
  MessageApiUtil.fetchMessages().then(messages => dispatch(receiveMessages(messages)))
)

export const fetchMessage = (id) => (dispatch) => (
  MessageApiUtil.fetchMessage(id).then(message => dispatch(receiveMessage(message)))
)

export const deleteMessage = (id) => (dispatch) => (
  MessageApiUtil.deleteMessage(id).then(message => dispatch(removeMessage(message)))
)

export const updateMessage = (message) => (dispatch) => {

  return MessageApiUtil.updateMessage(message).then(message => dispatch(receiveMessage(message)))
}

export const createMessage = (message) => (dispatch) => {
  return MessageApiUtil.createMessage(message).then(message => dispatch(receiveMessage(message)))
}