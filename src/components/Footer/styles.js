import { StyleSheet } from 'react-native';
import { colors, measures } from 'styles';

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
    backgroundColor: colors.white,
    height: measures.bar,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: colors.inactive,
  },
});

export default styles;
