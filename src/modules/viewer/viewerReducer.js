import { handleActions, combineActions } from '@letapp/redux-actions';
import {
  fetchViewerAction,
  editViewerAction,
  logoutAction,
} from './viewerActions';

import { loginAction, registerAction } from '../auth/authActions';

const INITIAL_STATE = {
  fetchViewer: {
    isLoading: false,
    isError: false,
    error: null,
  },
  editViewer: {
    isLoading: false,
    isError: false,
    error: null,
  },
  user: null,
};

export default handleActions(
  {
    [fetchViewerAction.start]: (state) => ({
      ...state,
      fetchViewer: {
        ...state.fetchViewer,
        isLoading: true,
        isError: false,
        error: null,
      },
    }),

    [combineActions(
      loginAction.success,
      fetchViewerAction.success,
      registerAction.success,
    )]: (state, { payload }) => ({
      ...state,
      fetchViewer: {
        ...state.fetchViewer,
        isLoading: false,
        isError: false,
        error: null,
      },
      user: payload,
    }),

    [fetchViewerAction.error]: (state, { payload }) => ({
      ...state,
      fetchViewer: {
        ...state.fetchViewer,
        isLoading: false,
        isError: true,
        error: payload,
      },
    }),

    [editViewerAction.start]: (state) => ({
      ...state,
      editViewer: {
        ...state.editViewer,
        isLoading: true,
        isError: false,
        error: null,
      },
    }),

    [editViewerAction.success]: (state, { payload }) => ({
      ...state,
      editViewer: {
        ...state.editViewer,
        isLoading: false,
        isError: false,
        error: null,
      },
      user: payload,
    }),

    [editViewerAction.error]: (state, { payload }) => ({
      ...state,
      editViewer: {
        ...state.editViewer,
        isLoading: false,
        isError: true,
        error: payload,
      },
    }),

    [logoutAction]: (state) => ({
      ...state,
      logoutViewer: {
        ...state.logoutViewer,
      },
      user: null,
    }),
  },
  INITIAL_STATE,
);
