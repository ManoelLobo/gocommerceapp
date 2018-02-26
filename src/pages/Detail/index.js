import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import Header from 'components/Header';

import styles from './styles';

class Detail extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      state: PropTypes.shape({
        params: PropTypes.shape({
          product: PropTypes.shape({}),
        }),
      }),
    }).isRequired,
  }

  addToCart = () => {}

  render() {
    const { product } = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <Header title="Detalhes do produto" backEnabled />
        <Text>{product.id}, {product.name}</Text>
      </View>
    );
  }
}

export default connect()(Detail);
