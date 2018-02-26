import { StyleSheet } from 'react-native';
import { general, colors, measures, typography } from 'styles';

const styles = StyleSheet.create({
  card: {
    ...general.card,
    alignItems: 'center',
    padding: measures.baseSpacing,
  },

  image: {
    width: measures.detailImageHeight,
    height: measures.detailImageHeight,
    resizeMode: 'contain',
  },

  description: {
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    marginVertical: measures.baseSpacing,
  },

  name: {
    color: colors.black,
    fontSize: typography.big,
    fontWeight: 'bold',
  },

  brand: {
    fontSize: typography.smaller,
    color: colors.inactive,
  },

  priceTag: {
    flex: 1,
    alignItems: 'flex-end',
  },

  price: {
    fontSize: typography.huge,
    fontWeight: 'bold',
    color: colors.secundary,
  },

  button: {
    backgroundColor: colors.secundary,
    marginVertical: measures.baseSpacing,
    height: 45,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonLabel: {
    color: colors.white,
    fontWeight: 'bold',
  },
});

export default styles;
