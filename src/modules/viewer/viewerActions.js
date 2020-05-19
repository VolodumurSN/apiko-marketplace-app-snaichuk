import {
  createAsyncActions,
  createAction,
} from '@letapp/redux-actions';

export const fetchViewerAction = createAsyncActions(
  'viewer/FETCH_VIEWER',
);
export const editViewerAction = createAsyncActions(
  'viewer/EDIT_VIEWER',
);
export const logoutAction = createAction('viewer/LOGOUT');
