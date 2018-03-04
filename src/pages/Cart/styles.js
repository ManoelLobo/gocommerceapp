import { StyleSheet } from 'react-native';
import { colors, general, measures, typography } from 'styles';

const styles = StyleSheet.create({
  ...general,

  items: {
    flex: 1,
  },

  empty: {
    flex: 1,
    alignSelf: 'center',
    fontSize: typography.small,
    margin: measures.baseSpacing,
  },

  total: {
    backgroundColor: colors.white,
    height: measures.totalBar,
    justifyContent: 'center',
    alignItems: 'center',
  },

  totalLabel: {
    color: colors.inactive,
    fontSize: typography.small,
  },

  totalValue: {
    color: colors.secundary,
    fontSize: typography.huge,
    fontWeight: 'bold',
  },
});

export default styles;
