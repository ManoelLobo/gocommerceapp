import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

export default {
  statusBarHeight: (Platform.OS === 'ios') ? 20 : 0,
  bar: 54,
  menuBar: 44,
  totalBar: 100,

  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,

  baseSpacing: 10,

  listImageHeight: 180,
  detailImageHeight: 285,
  cartImageHeight: 60,
};
