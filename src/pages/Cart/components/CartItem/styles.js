import { StyleSheet } from 'react-native';
import { colors, measures } from 'styles';

const styles = StyleSheet.create({
  cartItemContainer: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    margin: measures.baseSpacing,
    padding: measures.baseSpacing,
    borderRadius: measures.baseSpacing / 2,
  },

  cartImage: {
    width: measures.cartImageHeight,
    height: measures.cartImageHeight,
    resizeMode: 'contain',
  },

  description: {
    flexDirection: 'column',
    marginHorizontal: measures.baseSpacing,
  },

  quantity: {},
});

export default styles;
