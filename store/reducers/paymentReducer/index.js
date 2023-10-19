import { createSlice } from '@reduxjs/toolkit';
import { fetchRequestWithToken } from '../../../appConfig/axios';

const initialState = {
  isLoading: false,
  errors: undefined,
  focus: false,
  methods: {
    airtel: true,
    mtn: false,
    zamtel: false,
    creditCard: false,
  },
  payment: {
    phoneNumber: null,
    creditCard: null,
  },
  bookedTicket: undefined,
  bookedTicketId: undefined,
  paymentInitiated: null,
  paymentInitiatedError: null,
  paymentComplete: null,
  paymentCompleteError: null,
};

export const STATE_KEY = 'payment';

const paymentSlice = createSlice({
  name: STATE_KEY,
  initialState,
  reducers: {
    handleMethodSelected(state, action) {
      Object.keys(state.methods).forEach(selected => {
        state.methods[selected] = false;
        state.focus = false;
        if (action.payload === selected) {
          state.methods[selected] = true;
          state.focus = true;
          state.showInput = state.methods[selected];
        }
      });

      state.payment.method = action.payload;
    },

    handlePhoneNumberSelected(state, action) {
      state.payment.phoneNumber = action.payload;
    },

    initiatePayment(state, action) {
      state.isLoading = true;
    },
    initiatePaymentSuccess(state, action) {
      state.isLoading = false;
      state.paymentInitiatedError = null;
      state.paymentInitiated = action.payload.response;
    },
    initiatePaymentFailed(state, action) {
      state.isLoading = false;
      state.paymentInitiated = null;
      state.paymentInitiatedError = action.payload.error;
    },

    completePaymentSuccess(state, action) {
      const res = action.payload.response;
      state.isLoading = false;
      state.paymentCompleteError = null;
      state.bookedTicketId = res?.id;
      state.paymentComplete = res;
    },
    completePaymentFailed(state, action) {
      state.isLoading = false;
      state.paymentComplete = null;
      state.paymentCompleteError = action.payload.error;
    },

    handleReset(state) {
      Object.keys(state.methods).forEach(selected => {
        if (state.methods[selected] === true) {
          state.methods[selected] = true;
        } else {
          state.methods[selected] = false;
        }
      });
      state.bookedTicket = undefined;
      state.errors = undefined;
    },

    requestBookTicket(state) {
      state.isLoading = true;
    },
    requestBookTicketSuccess(state, action) {
      const res = action.payload.response;
      state.isLoading = false;
      state.errors = {};
      state.bookedTicket = res;
      state.bookedTicketId = res?.id;
    },
    requestBookTicketFailed(state, action) {
      state.isLoading = false;
      state.errors = action.payload.error;
    },
    resetInitiatePaymentState(state) {
      state.paymentInitiated = null;
      state.paymentInitiatedError = null;
    },
    resetCompletePaymentState(state) {
      state.paymentComplete = null;
      state.paymentCompleteError = null;
    },
  },
});

export const bookTicket = data => async dispatch => {
  dispatch(requestBookTicket());
  fetchRequestWithToken({
    url: 'api/v1/tickets/',
    method: 'POST',
    data,
  })(requestBookTicketSuccess)(requestBookTicketFailed)(dispatch);
};

export const initiatePaymentRequest = data => async dispatch => {
  console.log('Initiating Payment with data : ', data);
  dispatch(initiatePayment());
  fetchRequestWithToken({
    url: 'api/v1/payments/initiate',
    method: 'POST',
    data,
  })(initiatePaymentSuccess)(initiatePaymentFailed)(dispatch);
};

export const completePaymentRequest = data => async dispatch => {
  dispatch(initiatePayment());
  fetchRequestWithToken({
    url: 'api/v1/payments/complete',
    method: 'POST',
    data,
  })(completePaymentSuccess)(completePaymentFailed)(dispatch);
};

export const {
  handleMethodSelected,
  handlePhoneNumberSelected,
  handleReset,
  requestBookTicket,
  resetInitiatePaymentState,
  requestBookTicketSuccess,
  requestBookTicketFailed,
  initiatePayment,
  initiatePaymentSuccess,
  initiatePaymentFailed,
  completePaymentSuccess,
  completePaymentFailed,
  resetCompletePaymentState,
} = paymentSlice.actions;

export const paymentSelector = state => state[STATE_KEY];

export default paymentSlice.reducer;
