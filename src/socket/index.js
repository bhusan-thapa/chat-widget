import openSocket from 'socket.io-client';

const socket = openSocket('https://04057f96.ngrok.io');

export function listen(callback) {
  socket.on('server-msg', callback);
}

export function subscribe(
  msg,
  header,
  component_type,
  flow_id,
  payload,
  language,
  day
) {
  console.log(socket.id);
  socket.emit('react-msg', {
    text: msg,
    id: socket.id,
    header: header,
    component_type,
    flow_id,
    language,
    day
  });
}
