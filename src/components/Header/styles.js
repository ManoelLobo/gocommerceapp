import { StyleSheet } from 'react-native';
import { colors, measures, typography } from 'styles';

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    paddingTop: measures.statusBarHeight,
    height: measures.bar + measures.statusBarHeight,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  title: {
    color: colors.primary,
    fontSize: measures.regular,
    fontWeight: 'bold',
  },

  back: {
    fontSize: typography.bigger,
    margin: measures.baseSpacing,
  },
});

export default styles;
