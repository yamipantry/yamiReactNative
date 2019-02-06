import io from 'socket.io-client';

const socket = io(window.location.origin);

socket.on('chat message', () => {
  console.log('Connected!');
});

export default socket;
