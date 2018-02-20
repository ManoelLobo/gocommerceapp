import { Platform } from 'react-native';

export default {
  statusBarHeight: (Platform.OS === 'ios') ? 20 : 0,
  bar: 54,
  menuBar: 44,

  baseSpacing: 10,

  listImageHeight: 180,
  detailImageHeight: 285,
  cartImageHeight: 60,
};
