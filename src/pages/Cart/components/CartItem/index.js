import React, { Component } from 'react';
import { Image, View, Text } from 'react-native';
import { connect } from 'react-redux';

import api from 'services/api';

import styles from './styles';

class CartItem extends Component {
  state = {
    id: this.props.productId,
    quantity: this.props.quantity,
    name: '',
    brand: '',
    price: '',
    image: '',
    loaded: false,
  }

  componentWillMount = async () => {
    const productQuery = await api.get(`/products/${this.props.productId}`);

    if (productQuery.ok) {
      const {
        name,
        brand,
        price,
        image,
      } = productQuery.data;

      this.setState({
        name, brand, price, image, loaded: true,
      });
    }
  }

  renderCartItem() {
    return (
      <View style={styles.cartItemContainer}>
        <Image source={{ uri: this.state.image }} style={styles.cartImage} />
        <View style={styles.description}>
          <Text>{this.state.name}</Text>
          <Text>{this.state.brand}</Text>
          <Text>{this.state.price}</Text>
        </View>
        <Text style={styles.quantity}>{this.state.quantity}</Text>
      </View>
    );
  }

  render() {
    return this.state.loaded ?
      this.renderCartItem() :
      null;
  }
}

export default connect()(CartItem);
