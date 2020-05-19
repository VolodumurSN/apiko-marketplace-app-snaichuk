import { loginAction, registerAction, } from './authActions';
import { Api } from '../../services/Api';
import { viewerOperations } from '../viewer';


export function login(body) {
  return async function loginThunk(dispatch) {
    try {
      dispatch(loginAction.start());

      const res = await Api.login(body);

      dispatch(loginAction.success(res.data.user));

      dispatch(viewerOperations.fetchViewer());

    } catch (err) {
      dispatch(loginAction.error({
        message: err.message
      }));

      throw err;
    }
  }
}

export function register(body) {
  return async function registerThunk(dispatch) {
    try {
      dispatch(registerAction.start());

      const res = await Api.register(body);

      dispatch(registerAction.success(res.data.user));

      dispatch(viewerOperations.fetchViewer());

    } catch (err) {
      dispatch(registerAction.error({
        message: err.message
      }));

      throw err;
    }
  }
}
