import { createSlice } from '@reduxjs/toolkit';
import { fetchRequestWithToken } from '../../../appConfig/axios';

const initialState = {
  isLoading: false,
  registeredBus: null,
  buses: null,
  bus: null,
  seat: null,
  errors: {
    registeredBusError: undefined,
    busesError: undefined,
    busError: undefined,
    seatError: null,
  },
};

export const STATE_KEY = 'bus';

const busSlice = createSlice({
  name: STATE_KEY,
  initialState,
  reducers: {
    requestBusAdd(state) {
      state.isLoading = true;
    },
    requestBusAddSuccess(state, action) {
      state.isLoading = false;
      state.registeredBus = action.payload?.response;
      state.errors.registeredBusError = undefined;
    },
    requestBusAddFailed(state, action) {
      state.isLoading = false;
      state.errors.registeredBusError = action.payload.error;
    },

    requestBuses(state) {
      state.isLoading = true;
    },
    requestBusesSuccess(state, action) {
      state.isLoading = false;
      state.buses = action.payload?.response;
      state.errors.busesError = undefined;
    },
    requestBusesFailed(state, action) {
      state.isLoading = false;
      state.buses = null;
      state.errors.busesError = action.payload?.error;
    },

    requestAddSeat(state) {
      state.isLoading = true;
    },
    requestAddSeatSuccess(state, action) {
      state.isLoading = false;
      state.bus = action.payload?.response;
      state.errors.busError = undefined;
    },
    requestAddSeatFailed(state, action) {
      state.isLoading = false;
      state.bus = null;
      state.errors.busError = action.payload?.error;
    },

    requestUpdateSeat(state) {
      state.isLoading = true;
    },
    requestUpdateSeatSuccess(state, action) {
      state.isLoading = false;
      state.seat = action.payload?.response;
    },
    requestUpdateSeatFailed(state, action) {
      state.isLoading = false;
      state.bus = null;
      state.errors.seatError = action.payload?.error;
    },
    clearBus(state) {
      state.bus = null;
      state.registeredBus = null;
    },
  },
});

export const {
  requestBusAdd,
  requestBusAddSuccess,
  requestBusAddFailed,
  requestBuses,
  requestBusesSuccess,
  requestBusesFailed,
  requestAddSeat,
  requestAddSeatSuccess,
  requestAddSeatFailed,
  requestUpdateSeat,
  requestUpdateSeatSuccess,
  requestUpdateSeatFailed,
  clearBus,
} = busSlice.actions;

export const registerBus = data => async dispatch => {
  dispatch(requestBusAdd());
  fetchRequestWithToken({
    url: '/api/v1/buses/',
    method: 'POST',
    data,
  })(requestBusAddSuccess)(requestBusAddFailed)(dispatch);
};

export const getUserBuses = () => async dispatch => {
  dispatch(requestBuses());
  fetchRequestWithToken({
    url: '/api/v1/buses/',
    method: 'GET',
  })(requestBusesSuccess)(requestBusesFailed)(dispatch);
};

export const addBusSeat = data => async dispatch => {
  dispatch(requestAddSeat());
  fetchRequestWithToken({
    url: '/api/v1/seats/',
    method: 'POST',
    data,
  })(requestAddSeatSuccess)(requestAddSeatFailed)(dispatch);
};

export const getBus = busId => async dispatch => {
  dispatch(requestAddSeat());
  fetchRequestWithToken({
    url: `/api/v1/buses/${busId}/`,
    method: 'GET',
  })(requestAddSeatSuccess)(requestAddSeatFailed)(dispatch);
};

export const updateBus = (data, busId) => async dispatch => {
  dispatch(requestBuses());
  fetchRequestWithToken({
    url: `/api/v1/buses/${busId}/`,
    method: 'PUT',
    data,
  })(requestBusesSuccess)(requestBusesFailed)(dispatch);
};

export const updateSeat = seatId => async dispatch => {
  dispatch(requestUpdateSeat());
  fetchRequestWithToken({
    url: `/api/v1/seats/${seatId}/`,
    method: 'PUT',
    data: {
      is_taken: true,
      is_empty: false,
      is_selected: false,
    },
  })(requestUpdateSeatSuccess)(requestUpdateSeatFailed)(dispatch);
};

export const busSelector = state => state[STATE_KEY];

export default busSlice.reducer;
