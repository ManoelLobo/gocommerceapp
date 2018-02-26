import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import { brl } from 'utils/money';

import styles from './styles';

class ProductCard extends Component {
  static propTypes = {
    product: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      brand: PropTypes.string,
      price: PropTypes.number,
    }).isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  navigateToProduct = () => {
    const { product, dispatch } = this.props;

    return dispatch(NavigationActions.navigate({
      routeName: 'Detail',
      params: { product },
    }));
  }

  render() {
    const { product } = this.props;

    return (
      <TouchableOpacity
        style={styles.card}
        onPress={this.navigateToProduct}
      >
        <Image source={{ uri: `${product.image}` }} style={styles.image} />
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.brand}>{product.brand}</Text>
        <Text style={styles.price}>{brl(product.price)}</Text>
      </TouchableOpacity>
    );
  }
}


export default connect()(ProductCard);
