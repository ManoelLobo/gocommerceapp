import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import Header from 'components/Header';

import CartItem from './components/CartItem';

import styles from './styles';

const Cart = ({ cart }) => (
  <View style={styles.container}>
    <Header title="Carrinho" />
    { Object.keys(cart).length ?
      Object.keys(cart).map(productId => (
        <CartItem
          key={productId}
          productId={productId}
          quantity={cart[productId]}
        />
      )) :
      <Text>Vazio</Text>
    }
  </View>
);

const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Cart);
