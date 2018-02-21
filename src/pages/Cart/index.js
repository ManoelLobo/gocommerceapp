import React from 'react';
import { View, Text } from 'react-native';

import Header from 'components/Header';

import styles from './styles';

const Cart = () => (
  <View style={styles.container}>
    <Header title="Carrinho" />
    <Text>Cart</Text>
  </View>
);

export default Cart;
