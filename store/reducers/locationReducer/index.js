import { createSlice } from '@reduxjs/toolkit';
import { fetchRequestWithToken } from '../../../appConfig/axios';

const initialState = {
  isLoading: false,
  locations: [],
  busListings: [],
  errors: undefined,
};

export const STATE_KEY = 'location';

const locationSlice = createSlice({
  name: STATE_KEY,
  initialState,
  reducers: {
    requestLocation(state) {
      state.isLoading = true;
    },
    requestLocationSuccess(state, action) {
      state.isLoading = false;
      state.locations = action.payload?.response;
      state.errors = undefined;
    },
    requestLocationFailed(state, action) {
      state.isLoading = false;
      state.errors = action.payload?.errors;
    },

    requestSearch(state) {
      state.isLoading = true;
    },
    requestSearchSuccess(state, action) {
      state.isLoading = false;
      state.busListings = action.payload?.response;
      state.errors = undefined;
    },
    requestSearchFailed(state, action) {
      state.isLoading = false;
      state.errors = action.payload?.errors;
    },
  },
});

export const {
  requestLocation,
  requestLocationSuccess,
  requestLocationFailed,
  requestSearch,
  requestSearchSuccess,
  requestSearchFailed,
} = locationSlice.actions;

export const requestLocations = () => async dispatch => {
  dispatch(requestLocation());
  fetchRequestWithToken({
    url: '/api/v1/locations/',
    method: 'GET',
  })(requestLocationSuccess)(requestLocationFailed)(dispatch);
};

export const requestSearchListing = (to, from) => async dispatch => {
  dispatch(requestSearch());
  const queryString = () => {
    let string = `?to=${to}`;
    if (to !== '' && from !== '') {
      string = `?from=${from}&to=${to}`;
    }
    return string;
  };
  fetchRequestWithToken({
    url: `api/v1/buses/${queryString()}`,
    method: 'GET',
  })(requestSearchSuccess)(requestSearchFailed)(dispatch);
};


export const locationSelector = state => state[STATE_KEY];
export default locationSlice.reducer;
