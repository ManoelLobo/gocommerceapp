import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';

import CartActions from 'store/ducks/cart';

import { brl } from 'utils/money';

import styles from './styles';

class CartItem extends Component {
  static propTypes = {
    quantity: PropTypes.number.isRequired,
    product: PropTypes.shape().isRequired,
    remove: PropTypes.func.isRequired,
    changeQuantity: PropTypes.func.isRequired,
  }

  updateQuantity = (quantity) => {
    const clearQuantity = quantity.replace(/[^0-9]/g, '') * 1;

    if (clearQuantity === this.props.quantity || clearQuantity === 0) return;

    this.props.changeQuantity(this.props.product.id, clearQuantity);
  }

  render() {
    return (
      <View style={styles.cartItemContainer}>
        <Image source={{ uri: this.props.product.image }} style={styles.cartImage} />
        <View style={styles.description}>
          <Text style={styles.name}>{this.props.product.name}</Text>
          <Text style={styles.brand}>{this.props.product.brand}</Text>
          <Text style={styles.price}>{brl(this.props.product.price)}</Text>
        </View>
        <View style={styles.quantityContainer}>
          <TextInput
            style={styles.quantityField}
            autoCorrect={false}
            underlineColorAndroid="transparent"
            keyboardType="numeric"
            onChangeText={this.updateQuantity}
            value={String(this.props.quantity)}
          />
          <TouchableOpacity
            onPress={() => this.props.remove(this.props.product.id)}
          >
            <Icon style={styles.remove} name="times" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  remove: productId => dispatch(CartActions.cartRemoveProduct(productId)),
  changeQuantity: (productId, quantity) =>
    dispatch(CartActions.cartChangeQuantity(productId, quantity)),
});

export default connect(null, mapDispatchToProps)(CartItem);
