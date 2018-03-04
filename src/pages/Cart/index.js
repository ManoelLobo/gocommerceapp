import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, Text, View } from 'react-native';
import { connect } from 'react-redux';

import { brl } from 'utils/money';

import Header from 'components/Header';

import CartItem from './components/CartItem';

import styles from './styles';

class Cart extends Component {
  static propTypes = {
    cart: PropTypes.shape().isRequired,
  }

  sumTotal = () => {
    const { cart } = this.props;

    return Object.keys(this.props.cart).length ?
      Object.keys(this.props.cart)
        .map(productId =>
          cart[productId].product.price * cart[productId].quantity)
        .reduce((prev, next) => prev + next, 0) :
      0;
  }

  renderList() {
    const { cart } = this.props;

    return Object.keys(cart).length ?
      <ScrollView>
        {Object.keys(cart).map(productId => (
          <CartItem
            key={productId}
            product={cart[productId].product}
            quantity={cart[productId].quantity}
          />
        ))}
      </ScrollView> :
      <Text style={styles.empty}>Não há produtos no carrinho</Text>;
  }

  render() {
    return (
      <View style={styles.container}>
        <Header title="Carrinho" />
        <View style={styles.items}>
          {this.renderList()}
        </View>
        <View style={styles.total}>
          <Text style={styles.totalLabel}>Subtotal</Text>
          <Text style={styles.totalValue}>{brl(this.sumTotal())}</Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Cart);
