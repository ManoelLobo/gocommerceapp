import { StyleSheet } from 'react-native';
import { colors, measures } from 'styles';

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    margin: measures.baseSpacing,
    padding: measures.baseSpacing,
    borderRadius: (measures.baseSpacing / 2),
    width: (measures.screenWidth / 2) - (measures.baseSpacing * 2),
  },

  image: {
    width: measures.listImageHeight,
    height: measures.listImageHeight,
    resizeMode: 'contain',
  },
});

export default styles;
