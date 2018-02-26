import React from 'react';
import PropTypes from 'prop-types';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { brl } from 'utils/money';
import styles from './styles';

const ProductDetail = ({ product, addToCart }) => (
  <View style={styles.card}>
    <Image
      style={styles.image}
      source={{ uri: product.image }}
    />
    <View style={styles.description}>
      <View>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.brand}>{product.brand}</Text>
      </View>
      <View style={styles.priceTag}>
        <Text style={styles.price}>{brl(product.price)}</Text>
      </View>
    </View>
    <TouchableOpacity
      style={styles.button}
      onPress={addToCart}
    >
      <Text style={styles.buttonLabel}>Adicionar ao carrinho</Text>
    </TouchableOpacity>
  </View>
);

ProductDetail.propTypes = {
  product: PropTypes.shape({}).isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default ProductDetail;
