import { isBefore } from 'date-fns';
import {
  INVALID_EMAIL,
  ONLY_DIGITS_ALLOWED,
  ONLY_NUMBERS_ALLOWED,
  REQUIRED,
} from './messages';

export const checkDate = date => {
  return isBefore(date, new Date());
};

export const loginValidator = values => {
  const errors = {};
  if (!values.phoneNumber) {
    errors.phoneNumber = REQUIRED;
  }
  if (!/\d/.test(values.phoneNumber)) {
    errors.phoneNumber = ONLY_DIGITS_ALLOWED;
  }

  return errors;
};

export const signUpValidator = values => {
  const errors = {};
  if (!values.username) {
    errors.username = REQUIRED;
  }
  if (!values.password) {
    errors.password = REQUIRED;
  }
  if (!values.email) {
    errors.email = REQUIRED;
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = INVALID_EMAIL;
  }
  if (!values.phone_number) {
    errors.phone_number = REQUIRED;
  }
  if (values.phone_number && values.phone_number.length !== 10) {
    errors.phone_number = 'Enter a valid phone number';
  }

  return errors;
};

export const updateProfileValidator = values => {
  const errors = {};
  if (!values.username) {
    errors.username = REQUIRED;
  }
  if (!values.email) {
    errors.email = REQUIRED;
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = INVALID_EMAIL;
  }
  if (!values.phone_number) {
    errors.phone_number = REQUIRED;
  }
  if (values.phone_number && values.phone_number.length !== 10) {
    errors.phone_number = 'Enter a valid phone number';
  }
  return errors;
};

export const passengerDetailsValidator = values => {
  const errors = {};

  // if (!values.email) {
  //   errors.email = REQUIRED;
  // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
  //   errors.email = INVALID_EMAIL;
  // }

  if (!values.firstName) {
    errors.firstName = REQUIRED;
  } else if (values.firstName.length <= 3) {
    errors.firstName = 'Must be 3 characters or greater';
  }

  if (!values.lastName) {
    errors.lastName = REQUIRED;
  } else if (values.lastName.length <= 3) {
    errors.lastName = 'Must be 3 characters or greater';
  }

  if (!values.phoneNumber) {
    errors.phoneNumber = REQUIRED;
  }

  if (values.phoneNumber && values.phoneNumber.length < 10) {
    errors.phoneNumber = 'Enter a valid phone number';
  }

  return errors;
};

export const addBusSeatValidator = values => {
  const errors = {};
  if (!values.bus) {
    errors.bus = REQUIRED;
  }
  if (!values.position) {
    errors.position = REQUIRED;
  }
  if (!values.seat_num) {
    errors.seat_num = REQUIRED;
  }
  if (!/\d/.test(values.seat_num)) {
    errors.seat_num = ONLY_DIGITS_ALLOWED;
  }
  if (/\d/.test(values.seat_num)) {
    if (values.seat_num.length > 2) {
      errors.seat_num = ONLY_NUMBERS_ALLOWED;
    }
  }
  return errors;
};
