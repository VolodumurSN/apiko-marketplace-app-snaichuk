import { handleActions } from '@letapp/redux-actions';
import { initAction } from './appActions';

const INITIAL_STATE = {
  isLoading: false,
  isError: false,
  error: null,
}

export default handleActions({
  [initAction.start]: (state) => ({
    ...state,
    isLoading: true,
    isError: false,
    error: null,
  }),

  [initAction.success]: (state) => ({
    ...state,
    isLoading: false,
  }),

  [initAction.error]: (state, {payload}) => ({
    ...state,
    isLoading: false,
    isError: true,
    error: payload,
  }),
}, INITIAL_STATE)
