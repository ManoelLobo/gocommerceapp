import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const Tab = ({ icon, active, onPress }) => (
  <TouchableOpacity
    style={styles.tabItem}
    onPress={onPress}
  >
    <Icon
      style={[
        styles.icon,
        (active) ? styles.activeIcon : styles.inactiveIcon,
      ]}
      name={icon}
    />
  </TouchableOpacity>
);

Tab.propTypes = {
  icon: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default Tab;
