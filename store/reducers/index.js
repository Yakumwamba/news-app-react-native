import { combineReducers } from 'redux';
import userReducer, {
  STATE_KEY as USER_STATE_KEY,
} from '../reducers/authReducer';

import paymentReducer, {
  STATE_KEY as PAYMENT_REDUCER,
} from '../reducers/paymentReducer';

import busReducer, {
  STATE_KEY as BUS_REDUCER,
} from '../reducers/busReducer';

import locationReducer, {
  STATE_KEY as LOCATION_STATE_KEY,
} from '../reducers/locationReducer';


const rootReducer = combineReducers({
  [USER_STATE_KEY]: userReducer,
  [PAYMENT_REDUCER]: paymentReducer,
  [BUS_REDUCER]: busReducer,
  [LOCATION_STATE_KEY]: locationReducer,
//   [BOOKED_TICKET_STATE_KEY]: bookedTicketReducer,
//   [USER_JOURNEY_REDUCER]: userJourneyReducer,
//   [DOWNLOAD_REDUCER]: downloadReducer,
//   [RECENT_ACTIVITY_REDUCER]: recentActivityReducer,
//   [QRCODE_ACTIVITY_REDUCER]: qrcodeReducer,
//   [ANALYTIC_REDUCER]: analyticReducer,
//   [NOTIFICATION_REDUCER]: notificationReducer,
//   [DEVICE_REDUCER]: deviceReducer,
//   [USER_PROFILE_REDUCER]: userProfileReducer,
});

export default rootReducer;
