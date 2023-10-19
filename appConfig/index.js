import { scale } from 'react-native-size-matters';
import { GRAY, WHITE, PRIMARY } from '../theme/styles/colors';

let BASE_URL = 'https://tiji-dev.herokuapp.com'; //'https://tiji-dev.herokuapp.com';
// let BASE_URL = 'http://45.215.255.114:8000'; //'https://tiji-dev.herokuapp.com';

if (__DEV__) {
  BASE_URL = 'http://10.0.2.2:8000';
  // BASE_URL = 'http://10.0.2.2:8000';
}

export const navConfig = {
  contentStyle: {
    flex: 1,
    backgroundColor: WHITE,
  },
  headerStyle: {
    shadowColor: WHITE,
    backgroundColor: WHITE,
    elevation: 0,
  },
  headerTitleStyle: {
    color: PRIMARY,
    fontFamily: 'Nunito-Bold',
    fontSize: scale(15.5),
  },
  headerTitleAlign: 'center',
  headerBackTitle: '',
  // headerShadowVisible: false,
};

export const tabConfig = {
  tabBarActiveTintColor: PRIMARY,
  tabBarInactiveTintColor: GRAY,
  tabBarLabelStyle: {
    fontSize: scale(12),
  },

  tabBarHideOnKeyboard: true,
};

export { BASE_URL };
