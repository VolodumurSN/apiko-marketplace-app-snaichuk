import { initAction } from './appActions';
import { Api } from '../../services/Api';
import SocketApi from '../../services/SocketApi';
import { viewerOperations } from '../viewer';
import { messagesOperations } from '../messages';

export function subscribeToSockets() {
  return async function subscribeToSocketsThunk(dispatch) {
    SocketApi.handleMessages((message) =>
      dispatch(messagesOperations.handleMessageRealTime(message)),
    );
  };
}

export function init() {
  return async function initThunk(dispatch) {
    try {
      dispatch(initAction.start());

      await Api.init();

      await dispatch(viewerOperations.fetchViewer());

      dispatch(initAction.success());

      dispatch(subscribeToSockets());
    } catch (err) {
      dispatch(initAction.error({ message: err.message }));
    }
  };
}
