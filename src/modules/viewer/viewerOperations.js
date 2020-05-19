import { Api } from '../../services/Api';
import {
  fetchViewerAction,
  editViewerAction,
  logoutAction
} from './viewerActions';


export function fetchViewer() {
  return async function fetchViewerThunk(dispatch) {
    try {
      dispatch(fetchViewerAction.start());

      const res = await Api.getViewer();

      dispatch(fetchViewerAction.success(res.data));

    } catch (err) {
      dispatch(fetchViewerAction.error({
        message: err.message
      }));
    }
  }
}

export function editViewer(body) {
  return async function editViewerThunk(dispatch) {
    try {
      dispatch(editViewerAction.start());

      const res = await Api.putViewer(body);

      dispatch(editViewerAction.success(res.data));

    } catch (err) {
      dispatch(editViewerAction.error({
        message: err.message
      }));
    }
  }
}

export function logout() {
  return async function logoutThunk(dispatch) {
    dispatch(logoutAction());
    Api.logout()
  }
}
