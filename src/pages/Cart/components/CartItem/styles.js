import { StyleSheet } from 'react-native';
import { colors, measures, typography } from 'styles';

const styles = StyleSheet.create({
  cartItemContainer: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    marginHorizontal: measures.baseSpacing,
    marginTop: measures.baseSpacing,
    padding: measures.baseSpacing,
    borderRadius: measures.baseSpacing / 2,
  },

  cartImage: {
    width: measures.cartImageHeight,
    height: measures.cartImageHeight,
    resizeMode: 'contain',
  },

  description: {
    flex: 1,
    flexDirection: 'column',
    marginHorizontal: measures.baseSpacing,
  },

  name: {
    color: colors.black,
    fontWeight: 'bold',
    fontSize: typography.small,
  },

  brand: {
    color: colors.inactive,
    fontSize: typography.tiny,
  },

  price: {
    color: colors.secundary,
    fontWeight: 'bold',
    fontSize: typography.small,
  },

  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  quantityField: {
    padding: measures.baseSpacing,
    borderRadius: measures.baseSpacing / 2,
    borderWidth: 1,
    borderColor: colors.background,
    marginRight: measures.baseSpacing,
  },

  remove: {
    fontSize: typography.regular,
  },
});

export default styles;
