import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired,
    backEnabled: PropTypes.bool,
  }

  static defaultProps = {
    backEnabled: false,
  }

  navigateBack = () => {
    const { dispatch } = this.props;

    return dispatch(NavigationActions.back());
  }

  render() {
    return (
      <View style={styles.headerContainer}>
        <View>
          { this.props.backEnabled &&
          <TouchableOpacity onPress={this.navigateBack}>
            <Icon name="angle-left" style={styles.back} />
          </TouchableOpacity>
          }
        </View>
        <Text style={styles.title}>{this.props.title}</Text>
        <View />
      </View>
    );
  }
}

export default connect()(Header);
