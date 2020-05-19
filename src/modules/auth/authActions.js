import { createAsyncActions } from '@letapp/redux-actions';

export const loginAction = createAsyncActions('auth/LOGIN');
export const registerAction = createAsyncActions('auth/REGISTER');
