import { createSlice } from '@reduxjs/toolkit';
import { fetchRequest } from '../../../appConfig/axios';
import {
  removeToken,
  saveToken,
  GET_STARTED_TOKEN,
  USER_TOKEN,
} from '../../../appConfig/asyncStorage';

const initialState = {
  isLoading: false,
  initialLoading: true,
  currentUser: undefined,
  isNew: false,
  code: undefined,
  forgotPasswordSuccess: false,
  forgotPassword: undefined,

  errors: {
    login: undefined,
    signup: undefined,
    token: undefined,
    forgotPassword: undefined,
  },
};

export const STATE_KEY = 'auth';

const userSlice = createSlice({
  name: STATE_KEY,
  initialState,
  reducers: {
    requestGetStarted(state) {
      const copyState = state;
      copyState.isNew = true;
      copyState.initialLoading = false;
      saveToken(GET_STARTED_TOKEN, true);
    },

    requestCancelLoading(state) {
      const copyState = state;
      copyState.initialLoading = false;
    },

    requesting(state) {
      const copyState = state;
      copyState.isLoading = true;
      copyState.errors = {};
    },
    requestLogin(state) {
      const copyState = state;
      copyState.isLoading = true;
      copyState.errors = {};
    },

    requestLoginSuccess(state, action) {
      const response = action?.payload?.response;
      const copyState = state;

      saveToken(USER_TOKEN, response?.access_token);
      copyState.isLoading = false;
      copyState.currentUser = response?.username ? response : undefined;
    },

    requestLoginFailed(state, action) {
      const copyState = state;
      copyState.isLoading = false;
      copyState.errors.login = action?.payload.error;
    },

    requestLoginWithToken(state) {
      const copyState = state;
      copyState.initialLoading = true;
      copyState.errors = {};
    },

    requestLoginWithTokenSuccess(state, action) {
      const copyState = state;
      copyState.initialLoading = false;
      copyState.currentUser = action.payload?.response;
    },

    requestLoginWithTokenFailed(state, action) {
      const copyState = state;
      copyState.initialLoading = false;
      copyState.errors.token = action.payload?.error;
    },

    requestResetPasswordSuccess(state, action) {
      const copyState = state;
      copyState.isLoading = false;
      copyState.forgotPassword = action.payload?.response;
    },

    requestResetPasswordFailed(state, action) {
      const copyState = state;
      copyState.isLoading = false;
      copyState.errors.forgotPassword = action.payload?.error;
    },

    requestPasswordVerifyCodeSuccess(state, action) {
      const copyState = state;
      copyState.isLoading = false;
      copyState.code = action.payload?.response;
    },

    requestPasswordVerifyCodeFailed(state, action) {
      const copyState = state;
      copyState.isLoading = false;
      copyState.errors.forgotPassword = action.payload?.error;
    },

    requestNewPasswordSuccess(state, action) {
      const copyState = state;
      copyState.isLoading = false;
      copyState.forgotPasswordSuccess = action.payload?.response;
    },

    requestNewPasswordFailed(state, action) {
      const copyState = state;
      copyState.isLoading = false;
      copyState.errors.forgotPassword = action.payload?.error;
    },

    requestSignup(state) {
      const copyState = state;
      copyState.isLoading = true;
      copyState.errors = {};
    },

    requestSignupSuccess(state, action) {
      const copyState = state;
      copyState.currentUser = action.payload?.response;
      copyState.isLoading = false;
    },

    requestSignupFailed(state, action) {
      const copyState = state;
      copyState.isLoading = false;
      copyState.errors.signup = action?.payload?.error;
    },

    requestLogout(state) {
      const copyState = state;
      copyState.currentUser = undefined;
    },

    clearAuthErrorState(state) {
      const copyState = state;
      copyState.isLoading = false;
      copyState.errors = {};
    },

    clearPasswordState(state) {
      const copyState = state;
      copyState.forgotPassword = undefined;
      copyState.code = undefined;
      copyState.forgotPasswordSuccess = false;
      copyState.errors.forgotPassword = undefined;
    },
  },
});

export const {
  requestGetStarted,
  requestCancelLoading,
  requestLogin,
  requestLoginSuccess,
  requestLoginFailed,
  requestSignup,
  requestSignupSuccess,
  requestSignupFailed,
  requestLogout,
  requestLoginWithToken,
  requestLoginWithTokenSuccess,
  requestLoginWithTokenFailed,
  requesting,
  requestResetPasswordSuccess,
  requestResetPasswordFailed,
  requestPasswordVerifyCodeSuccess,
  requestPasswordVerifyCodeFailed,
  requestNewPasswordSuccess,
  requestNewPasswordFailed,
  clearPasswordState,
  clearAuthErrorState,
} = userSlice.actions;

// LOGIN USER WHEN TOKEN IS AVAILABLE
export const loginUserWithToken = token => async dispatch => {
  if (token) {
    dispatch(requestLoginWithToken);
    fetchRequest({
      url: 'api/v1/users/verify_token/',
      method: 'POST',
      data: {
        token: JSON.parse(token),
      },
    })(requestLoginWithTokenSuccess)(requestLoginWithTokenFailed)(dispatch);
  }
};

export const loginUser = data => dispatch => {
  dispatch(requestLogin());
  fetchRequest({
    url: 'api/v1/users/login/',
    method: 'POST',
    data,
  })(requestLoginSuccess)(requestLoginFailed)(dispatch);
};

export const userSignup = data => dispatch => {
  dispatch(requestSignup());
  fetchRequest({
    url: 'api/v1/users/signup/',
    method: 'POST',
    data,
  })(requestSignupSuccess)(requestSignupFailed)(dispatch);
};

export const resetPasswordCodeRequest = data => dispatch => {
  dispatch(requesting());
  fetchRequest({
    url: 'api/v1/users/obtain-password-code/',
    method: 'POST',
    data,
  })(requestResetPasswordSuccess)(requestResetPasswordFailed)(dispatch);
};

export const resetPasswordCodeVerify = data => dispatch => {
  dispatch(requesting());
  console.log('Reseting...');
  fetchRequest({
    url: 'api/v1/users/password-code-verify/',
    method: 'POST',
    data,
  })(requestPasswordVerifyCodeSuccess)(requestPasswordVerifyCodeFailed)(
    dispatch,
  );
};

export const newPasswordRequest = data => dispatch => {
  dispatch(requesting());
  console.log('THIS IS THE RESET PASSWORD');
  fetchRequest({
    url: 'api/v1/users/password-reset/',
    method: 'POST',
    data,
  })(requestNewPasswordSuccess)(requestNewPasswordFailed)(dispatch);
};

export const userLogout = () => dispatch => {
  dispatch(requestLogout());
  removeToken(USER_TOKEN);
};

export default userSlice.reducer;

export const authSelector = state => state[STATE_KEY];
