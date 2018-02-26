import colors from './colors';
import measures from './measures';

export default {
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  card: {
    backgroundColor: colors.white,
    margin: measures.baseSpacing,
    padding: measures.baseSpacing,
    borderRadius: (measures.baseSpacing / 2),
  },
};
