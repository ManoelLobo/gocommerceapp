import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { connect } from 'react-redux';

import CartActions from 'store/ducks/cart';

import Header from 'components/Header';
import ProductDetail from './components/ProductDetail';

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
    cartAddProduct: PropTypes.func.isRequired,
  }

  addToCart = (product) => {
    this.props.cartAddProduct(product);
  }

  render() {
    const { product } = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <Header title="Detalhes do produto" backEnabled />
        <ProductDetail product={product} addToCart={() => this.addToCart(product)} />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
});

const mapDispatchToProps = dispatch => ({
  cartAddProduct: product => dispatch(CartActions.cartAddProduct(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
