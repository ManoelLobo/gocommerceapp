import { StyleSheet } from 'react-native';
import { colors, measures, typography } from 'styles';

const styles = StyleSheet.create({
  categoryContainer: {
    flexDirection: 'row',
    backgroundColor: colors.primary,
    height: measures.menuBar,
  },

  category: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: measures.baseSpacing,
  },

  active: {
    borderBottomWidth: 5,
    borderColor: colors.white,
  },

  title: {
    color: colors.white,
    fontSize: typography.smaller,
    fontWeight: 'bold',
  },

  loading: {
    backgroundColor: colors.white,
  },

  activeTitle: {
  },

  inactiveTitle: {
    opacity: 0.6,
  },
});

export default styles;
