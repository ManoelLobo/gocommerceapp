import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import Tab from './components/Tab';

import styles from './styles';

const pages = [
  { index: 0, icon: 'home' },
  { index: 1, icon: 'shopping-cart' },
];

const Footer = ({ navigationState, jumpToIndex }) => (
  <View style={styles.footerContainer}>
    { pages.map(page => (
      <Tab
        key={page.index}
        active={(page.index === navigationState.index)}
        onPress={() => { jumpToIndex(page.index); }}
        icon={page.icon}
      />
    ))}
  </View>
);

Footer.propTypes = {
  navigationState: PropTypes.shape({
    index: PropTypes.number,
  }).isRequired,
  jumpToIndex: PropTypes.func.isRequired,
};

export default Footer;
