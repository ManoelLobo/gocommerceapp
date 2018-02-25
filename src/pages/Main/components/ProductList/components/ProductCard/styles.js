import { StyleSheet } from 'react-native';
import { colors, measures, typography } from 'styles';

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    margin: measures.baseSpacing,
    padding: measures.baseSpacing,
    borderRadius: (measures.baseSpacing / 2),
    width: (measures.screenWidth / 2) - (measures.baseSpacing * 2),
  },

  name: {
    color: colors.black,
    fontSize: typography.small,
    fontWeight: 'bold',
  },

  brand: {
    color: colors.inactive,
    fontSize: typography.tiny,
  },

  price: {
    color: colors.secundary,
  },

  image: {
    width: measures.listImageHeight,
    height: measures.listImageHeight,
    resizeMode: 'contain',
  },
});

export default styles;
