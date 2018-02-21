import { StyleSheet } from 'react-native';
import { colors } from 'styles';

const styles = StyleSheet.create({
  tabItem: {
    flex: 1,
    alignItems: 'center',
  },

  icon: {
    fontSize: 30,
  },

  activeIcon: {
    color: colors.primary,
  },

  inactiveIcon: {
    color: colors.inactive,
  },
});

export default styles;
