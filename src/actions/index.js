export function toggleView(t) {
  console.log('clicked', t);
  return {
    type: 'CLICKED',
    payload: !t
  };
}

export function sendMessage(msg) {
  console.log('message sent is', msg);
  return {
    type: 'MSG_SEND',
    payload: msg
  };
}

export function socketReply(msg) {
  console.log('imin socket', msg);
  return {
    type: 'MSG_SEND',
    payload: msg
  };
}

export function switchLanguage(msg) {
  console.log('am swithching the language to english/swedish');
  return {
    type: 'SWITCH_LANG',
    payload: msg
  };
}

export function switchCT(msg) {
  console.log('event is switching to faq/event');
  return {
    type: 'SWITCH_CT',
    payload: msg
  };
}

export function flowID(msg) {
  return {
    type: 'FLOW_ID',
    payload: msg
  };
}

export function reSet() {
  return {
    type: 'RESET'
  };
}
