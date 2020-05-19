import { handleActions } from '@letapp/redux-actions';
import {
  loginAction,
  registerAction,
} from './authActions';

const INITIAL_STATE = {
  login: {
    isLoading: false,
    isError: false,
    error: null,
  },
  register: {
    isLoading: false,
    isError: false,
    error: null,
  },
}

export default handleActions({
  [loginAction.start]: (state) => ({
    ...state,
    login: {
      ...state.login,
      isLoading: true,
      isError: false,
      error: null,
    }

  }),

  [loginAction.success]: (state) => ({
    ...state,
    login: {
      ...state.login,
      isLoading: false,
    }
  }),

  [loginAction.error]: (state, { payload }) => ({
    ...state,
    login: {
      ...state.login,
      isLoading: false,
      isError: true,
      error: payload,
    }
  }),

  [registerAction.start]: (state) => ({
    ...state,
    register: {
      ...state.register,
      isLoading: true,
      isError: false,
      error: null,
    }

  }),

  [registerAction.success]: (state) => ({
    ...state,
    register: {
      ...state.register,
      isLoading: false,
    }
  }),

  [registerAction.error]: (state, { payload }) => ({
    ...state,
    register: {
      ...state.register,
      isLoading: false,
      isError: true,
      error: payload,
    }
  }),


}, INITIAL_STATE)
