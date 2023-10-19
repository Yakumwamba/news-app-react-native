import { scale } from 'react-native-size-matters';

const FONT_FAMILY_BODY = 'Nunito-Regular';
const FONT_FAMILY_LIGHT = 'Nunito-Light';
const FONT_FAMILY_BOLD = 'Nunito-Black';
const FONT_FAMILY_MEDIUM = 'Nunito-Medium';

export const fonts = {
  heading: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: scale(16),
  },
  subHeading: {
    'font-family': FONT_FAMILY_MEDIUM,
    'font-size': scale(14),
  },
  title: {
    'font-family': FONT_FAMILY_MEDIUM,
    'font-size': scale(14),
  },
  subTitle: {
    'font-family': FONT_FAMILY_LIGHT,
    'font-size': scale(12),
  },
  body: {
    'font-family': FONT_FAMILY_BODY,
    'font-size': scale(14),
  },
};
