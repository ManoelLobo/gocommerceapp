import { StyleSheet } from 'react-native';
import { colors, measures } from 'styles';

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    height: measures.bar + measures.statusBarHeight,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  title: {
    color: colors.primary,
    fontSize: measures.regular,
    fontWeight: 'bold',
  },

  leftSection: {
  },
});

export default styles;
