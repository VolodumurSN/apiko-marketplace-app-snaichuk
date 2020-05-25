import socket from 'socket.io-client';

class SocketApi {
  init(token) {
    this.socket = socket(
      'https://marketplace-api-sv.herokuapp.com/',
      {
        query: {
          token,
        },
        transports: ['websocket'],
      },
    );

    this.socket.on('connect', () => {
      console.log('Connected', { socket });
    });
  }

  handleMessages(handler) {
    this.socket.on('message', (message) => {
      handler(message);
    });
  }
}

export default new SocketApi();
