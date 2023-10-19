import { DefaultTheme } from 'react-native-paper';
import { PRIMARY, PRIMARY_LIGHTER } from './styles/colors';

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: PRIMARY,
    accent: PRIMARY_LIGHTER,
  },
};
