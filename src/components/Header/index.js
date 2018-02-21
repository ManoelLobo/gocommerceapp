import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

import styles from './styles';

const Header = ({ title }) => (
  <View style={styles.headerContainer}>
    <View style={styles.leftSection} />
    <Text style={styles.title}>{title}</Text>
    <View style={styles.rightSection} />
  </View>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
